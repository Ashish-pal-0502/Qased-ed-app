import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';
import { useTranslation } from 'react-i18next';

const ProgressReportCard = ({ subject }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <Image
          source={{
            uri: 'https://t4.ftcdn.net/jpg/00/53/64/49/360_F_53644926_0mvUCIxCCTvIa7BAIFuUa3xsaNA9lbeb.jpg',
          }}
          style={styles.image}
        />

        <View style={styles.infoContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.name}>{subject.name}</Text>
            <Image source={subject.gradeIcon} style={styles.gradeIcon} />
          </View>
          <Text style={styles.score}>{subject.score} /100</Text>
        </View>
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity>
          <Text style={styles.viewFull}>{t('View full report')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsText}>{t('View details')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProgressReportCard;
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.black,
  },
  gradeIcon: {
    width: 29,
    height: 29,
    resizeMode: 'contain',
  },
  score: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: '#171725',
    marginTop: 4,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 12,
    gap: 10,
  },
  viewFull: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: '#528BD9',
    alignSelf: 'center',
  },
  detailsButton: {
    backgroundColor: '#528BD9',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  detailsText: {
    fontSize: 10,
    color: colors.white,
    fontFamily: fonts.Medium,
  },
});
