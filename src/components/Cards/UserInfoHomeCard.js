import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import RightIcon from '../../assets/Images/Icons/RightIcon.png';

const UserInfoHomeCard = () => {
  const progress = 0.7;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png',
            }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Ashish Pal</Text>
            <Text style={styles.grade}>Grade A | Sec - A</Text>
          </View>
        </View>
        <Image source={RightIcon} style={styles.rightIcon} />
      </View>

      <View style={styles.progressSection}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>Overall Progress</Text>
          <View style={styles.progressRight}>
            <Text style={styles.progressPercent}>70%</Text>
            <Image source={RightIcon} style={styles.smallRightIcon} />
          </View>
        </View>

        <ProgressBar
          progress={progress}
          color="#8979FF"
          style={styles.progressBar}
        />
      </View>
    </View>
  );
};

export default UserInfoHomeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#8979FF',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  grade: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  rightIcon: {
    width: 16,
    height: 16,
    tintColor: '#000',
    resizeMode: 'contain',
  },
  progressSection: {
    marginTop: 20,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  progressRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  progressPercent: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  smallRightIcon: {
    width: 12,
    height: 12,
    tintColor: '#000',
    resizeMode: 'contain',
  },
  progressBar: {
    height: 8,
    borderRadius: 20,
    backgroundColor: '#DCDCDC',
    marginTop: 10,
  },
});
