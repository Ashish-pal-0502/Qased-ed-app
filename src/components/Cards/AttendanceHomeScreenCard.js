import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const AttendanceHomeScreenCard = () => {
  return (
    <LinearGradient
      colors={['#528BD9', '#FFC7D2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.card}
    >
      <Text style={styles.title}>Monthly Attendance</Text>

      <AnimatedCircularProgress
        size={60}
        width={6}
        fill={60}
        tintColor="#B1C6FF"
        backgroundColor="#fff"
        rotation={0}
        lineCap="round"
      >
        {fill => (
          <Text style={styles.percentText}>{`${Math.round(fill)}%`}</Text>
        )}
      </AnimatedCircularProgress>
    </LinearGradient>
  );
};

export default AttendanceHomeScreenCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  percentText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});
