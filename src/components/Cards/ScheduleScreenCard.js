import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ScheduleScreenCard = ({ selected = false, item, onPress }) => {
  const formatTime = isoString => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formattedTime = `${formatTime(item.startTime)} TO ${formatTime(
    item.endTime,
  )}`;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconCircle}>
        <Text style={styles.romanText}>{'IX'}</Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.className}>{item?.name}</Text>
        <Text style={styles.description}>{formattedTime}</Text>
      </View>

      <View style={styles.radio}>
        <Icon
          name={selected ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={22}
          color={selected ? '#528BD9' : '#C4C4C4'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ScheduleScreenCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D4D2E3',
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#D4D2E3',
  },
  romanText: {
    fontFamily: fonts.Bold,
    fontSize: 20,
    color: '#A6A6A6',
  },
  textWrapper: {
    flex: 1,
  },
  className: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: '#00204D',
  },
  description: {
    fontSize: 10,
    color: '#919191',
    fontFamily: fonts.Medium,
  },
  radio: {
    paddingLeft: 8,
    color: '#528BD9',
  },
});
