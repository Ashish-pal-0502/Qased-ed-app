import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ThoughtOfDayCard from './../../components/Cards/ThoughtOfDayCard';
import notification from '../../assets/Images/Icons/Notification.png';
import Button from './../../components/Buttons/Button';

const dummyData = {
  class: ['Class I', 'Class II', 'Class III'],
  board: ['CBSE', 'ICSE', 'State Board'],
  school: ['DPS', 'National Public School', 'Kendriya Vidyalaya'],
  gender: ['Male', 'Female', 'Any'],
  subject: ['Math', 'Science', 'English'],
};

const Dropdown = ({ label, data, selected, onSelect, isOpen, toggleOpen }) => {
  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleOpen}>
        <Text
          style={[styles.dropdownLabel, selected ? styles.activeLabel : null]}
        >
          {selected || `Select ${label}`}
        </Text>
        <Ionicons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={18}
          color="#000000"
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownList}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => onSelect(item)}
            >
              <Text style={styles.itemText}>{item}</Text>
              {selected === item && (
                <Ionicons name="checkmark" size={20} color="#7F56D9" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const FullScreenWithDropdowns = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = type => {
    setOpenDropdown(prev => (prev === type ? null : type));
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3845/3845897.png',
            }}
            style={styles.logo}
          />
          <Image source={notification} style={styles.notificationDot} />
        </View>

        <View style={{ marginBottom: 8 }}>
          <ThoughtOfDayCard />
        </View>

        <Dropdown
          label="Class"
          data={dummyData.class}
          selected={selectedClass}
          onSelect={val => {
            setSelectedClass(val);
            setOpenDropdown(null);
          }}
          isOpen={openDropdown === 'class'}
          toggleOpen={() => toggleDropdown('class')}
        />
        <Dropdown
          label="Subject"
          data={dummyData.subject}
          selected={selectedSubject}
          onSelect={val => {
            setSelectedSubject(val);
            setOpenDropdown(null);
          }}
          isOpen={openDropdown === 'subject'}
          toggleOpen={() => toggleDropdown('subject')}
        />
        <Dropdown
          label="Board"
          data={dummyData.board}
          selected={selectedBoard}
          onSelect={val => {
            setSelectedBoard(val);
            setOpenDropdown(null);
          }}
          isOpen={openDropdown === 'board'}
          toggleOpen={() => toggleDropdown('board')}
        />
        <Dropdown
          label="School"
          data={dummyData.school}
          selected={selectedSchool}
          onSelect={val => {
            setSelectedSchool(val);
            setOpenDropdown(null);
          }}
          isOpen={openDropdown === 'school'}
          toggleOpen={() => toggleDropdown('school')}
        />
        <Dropdown
          label="Preferred instructor gender"
          data={dummyData.gender}
          selected={selectedGender}
          onSelect={val => {
            setSelectedGender(val);
            setOpenDropdown(null);
          }}
          isOpen={openDropdown === 'gender'}
          toggleOpen={() => toggleDropdown('gender')}
        />

        <View style={styles.continueButton}>
          <Button title="Continue" />
        </View>
      </ScrollView>
    </View>
  );
};

export default FullScreenWithDropdowns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  thoughtContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thoughtTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  thoughtText: {
    fontSize: 14,
    color: '#6B7280',
  },
  dateBadge: {
    alignItems: 'center',
    backgroundColor: '#8A57DE',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
  },
  monthText: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 14,
  },
  dropdownContainer: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,

    marginHorizontal: 16,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  dropdownLabel: {
    fontSize: 16,
    color: '#8391A1',
  },
  activeLabel: {
    color: '#111827',
  },
  dropdownList: {
    backgroundColor: '#fff',
  },
  dropdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 16,
    color: '#111827',
  },
  continueButton: {
    marginHorizontal: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },

  notificationDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});
