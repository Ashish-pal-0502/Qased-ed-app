import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { fonts } from './../../config/fonts';
import { useNavigation } from '@react-navigation/native';
import colors from './../../config/colors';

const TopNavigationHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={20} color={colors.black} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: colors.black }]}>{title}</Text>
      </View>

      <TouchableOpacity style={styles.iconWrapper}>
        <Feather name="more-vertical" size={20} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default TopNavigationHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.Medium,
    fontSize: 18,
  },
});
