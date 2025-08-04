import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';
import { useTranslation } from 'react-i18next';

const MyChildrenCard = ({ child, onEdit }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.card}>
      <View style={styles.iconCircle}>
        <Icon
          name={child.gender === 'Male' ? 'man-outline' : 'woman-outline'}
          size={22}
          color="#4B5563"
        />
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.name}>{child.name}</Text>
        <Text style={styles.details}>
          {t('age')}: {child.age} | {t('gender')}: {child.gender}
        </Text>

        <TouchableOpacity
          style={styles.editProfileContainer}
          onPress={() => onEdit(child)}
        >
          <Icon name="pencil-outline" size={14} color={colors.primary} />
          <Text style={styles.editProfileText}>{t('edit_profile')}</Text>
        </TouchableOpacity>
      </View>

      <Icon name="chevron-forward" size={20} color="#9CA3AF" />
    </View>
  );
};

export default MyChildrenCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  textWrapper: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontFamily: fonts.Bold,
    color: '#111827',
  },
  details: {
    fontSize: 12,
    color: '#6B7280',
    fontFamily: fonts.Medium,
    marginVertical: 2,
  },
  editProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  editProfileText: {
    fontSize: 13,
    fontFamily: fonts.Medium,
    color: colors.primary,
    marginLeft: 4,
  },
});
