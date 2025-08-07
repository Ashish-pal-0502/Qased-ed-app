import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import MyLibraryCard from './../../components/Cards/MyLibraryCard';
import Button from './../../components/Buttons/Button';
import apiClient from './../../api/client';
import { useEffect } from 'react';
import useAuth from './../../auth/useAuth';
import { useState } from 'react';
import TopNavigationHeader from './../../components/Header/TopNavigationHeader';

const ChildrenParentLibrary = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { student } = route.params;
  const { user } = useAuth();
  const [cartItem, setCartItem] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const getMyLibraryData = async () => {
    const response = await apiClient.get('/slotcart/get-items', {
      parentId: user.id,
      studentId: student?._id,
    });

    if (response.ok) {
      setCartItem(response.data.cartItems);
    }
  };
  const removeSingleSession = async id => {
    const response = await apiClient.delete('/slotcart/remove-slot', {
      id: id,
    });

    if (response.ok) {
      setRefreshFlag(true);
    }
  };
  const removeAllSessions = async () => {
    const response = await apiClient.delete('/slotcart/delete-all', {
      studentId: student?._id,
    });

    if (response.ok) {
      setRefreshFlag(true);
    }
  };
  useEffect(() => {
    getMyLibraryData();
  }, [refreshFlag]);

  const bookSession = async items => {
    const slotItems = items.map(item => item?.slot?._id);

    const payload = {
      slotItems,
      studentId: items[0]?.student?._id,
      parentId: items[0]?.parent?._id,
    };

    try {
      const response = await apiClient.post('/booking/book-session', payload);

      if (response.ok) {
        // console.log('Sessions booked successfully');
      } else {
        console.log('Booking failed:', response.data);
      }
    } catch (error) {
      console.error('Booking error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationHeader title={t('My_Library')} />

      {cartItem.length > 0 && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            alignItems: 'flex-end',
            marginTop: 10,
          }}
          onPress={() => removeAllSessions()}
        >
          <Text
            style={{
              fontFamily: fonts.SemiBold,
              textDecorationLine: 'underline',
            }}
          >
            Clear All
          </Text>
        </TouchableOpacity>
      )}

      <View style={styles.flexGrow}>
        {cartItem?.length > 0 ? (
          <FlatList
            data={cartItem}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <MyLibraryCard
                item={item}
                removeSingleItem={removeSingleSession}
              />
            )}
            contentContainerStyle={{
              gap: 12,
              paddingHorizontal: 10,
              paddingBottom: 20,
            }}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>{t('No_Items_Found')}</Text>
          </View>
        )}
      </View>

      {cartItem.length > 0 && (
        <View style={styles.bottomButton}>
          <Button
            title={t('proceed_to_book')}
            onPress={() => {
              if (cartItem?.length > 0) {
                bookSession(cartItem);
              }
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ChildrenParentLibrary;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 14,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: fonts.Medium,
    fontSize: 18,
    color: colors.black,
    flex: 1,
    textAlign: 'center',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flexGrow: {
    flex: 1,
    paddingTop: 15,
  },
  bottomButton: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: colors.background,
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  emptyText: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.gray,
    textAlign: 'center',
  },
});
