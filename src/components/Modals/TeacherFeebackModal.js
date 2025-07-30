import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';
import { useTranslation } from 'react-i18next';

const screenHeight = Dimensions.get('window').height;

const TeacherFeedbackModal = ({ visible, onClose }) => {
  const { t } = useTranslation();
  const [ratings, setRatings] = useState([3, 3, 3]);

  const handleRating = (index, value) => {
    const updated = [...ratings];
    updated[index] = value;
    setRatings(updated);
  };

  const questions = [
    t('How actively did the student engage in the session?'),
    t('How well did the student grasp the topic discussed today?'),
    t('How focused and disciplined was the student during the session?'),
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} />

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>
              {t('How was your experience with Student ?')}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#000E08" />
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {questions.map((question, i) => (
              <View key={i} style={styles.questionBlock}>
                <Text style={styles.question}>{question}</Text>
                <View style={styles.starsRow}>
                  {[1, 2, 3, 4, 5].map(star => (
                    <TouchableOpacity
                      key={star}
                      onPress={() => handleRating(i, star)}
                    >
                      <FontAwesome
                        name={star <= ratings[i] ? 'star' : 'star-o'}
                        size={20}
                        color="#F9C144"
                        style={styles.star}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
                {i < questions.length - 1 && <View style={styles.divider} />}
              </View>
            ))}

            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>{t('Submit')}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default TeacherFeedbackModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  backdrop: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 24,
    maxHeight: screenHeight * 0.65,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#F5F6F6',
    paddingBottom: 15,
  },
  title: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.black,
    flex: 1,
    paddingRight: 16,
  },
  questionBlock: {
    marginBottom: 20,
    marginTop: 10,
  },
  question: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: '#18181B',
    marginBottom: 8,
    textAlign: 'center',
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  star: {
    marginRight: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#F5F6F6',
    marginTop: 5,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  buttonWrapper: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#528BD9',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 30,
  },
  submitText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.Medium,
  },
});
