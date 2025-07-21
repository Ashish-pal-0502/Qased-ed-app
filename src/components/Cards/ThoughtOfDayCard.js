import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ThoughtOfDayCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Thought of the day</Text>
        <Text style={styles.quote}>
          “The future belongs to those who dreams.”
        </Text>
      </View>

      <LinearGradient
        colors={['#528BD9', '#FFC7D2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.ribbon}
      >
        <Text style={styles.day}>21</Text>
        <Text style={styles.month}>July</Text>
      </LinearGradient>
    </View>
  );
};

export default ThoughtOfDayCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingBottom: 10,
    marginHorizontal: 16,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 85,
  },
  contentContainer: {
    flex: 1,
    paddingRight: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
  },
  quote: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  ribbon: {
    width: 64,
    height: 70,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  day: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  month: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
});
