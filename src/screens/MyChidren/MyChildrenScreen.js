import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyChildrenCard from './../../components/Cards/MyChildrenCard';
import useAuth from './../../auth/useAuth';
import apiClient from './../../api/client';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import TopNavigationHeader from './../../components/Header/TopNavigationHeader';

const MyChildrenScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { user } = useAuth();
  const [myChildrens, setMyChildrens] = useState([{}]);

  useEffect(() => {
    const getMyChildrens = async () => {
      const response = await apiClient.get('/parents/get-student-by-parents', {
        parentId: user.id,
      });

      if (response.ok) {
        setMyChildrens(response.data.students);
      }
    };

    getMyChildrens();
  }, []);

  const handleNavigateStudentEditProfile = child => {
    navigation.navigate('EditStudentProfile', { student: child });
  };
  const handleNavigatetoMyLibrary = child => {
    navigation.navigate('ChildrenParentLibrary', { student: child });
  };

  return (
    <View style={{ flex: 1 }}>
      <TopNavigationHeader title={t('my_children')} />
      <View style={styles.container}>
        <FlatList
          data={myChildrens}
          keyExtractor={item => item.id}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <MyChildrenCard
              child={item}
              onEdit={handleNavigateStudentEditProfile}
              goToLibrary={handleNavigatetoMyLibrary}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MyChildrenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F6F7',
  },
  heading: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    marginBottom: 10,
    color: '#00204D',
    textAlign: 'center',
  },
});
