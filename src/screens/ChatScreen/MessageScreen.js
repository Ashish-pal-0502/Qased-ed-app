import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';

const dummyMessages = [
  {
    id: '1',
    type: 'received',
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    text: 'Hello! How are you?',
    time: '09:25 AM',
  },
  {
    id: '2',
    type: 'sent',
    text: 'Hello! Jhon Doe',
    time: '09:25 AM',
  },
  {
    id: '3',
    type: 'sent',
    text: 'You did your job well!',
    time: '09:25 AM',
  },
  {
    id: '4',
    type: 'received',
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    text: 'Have a great working week!!\nHope you like it',
    time: '09:25 AM',
  },
  {
    id: '5',
    type: 'sent',
    isVoice: true,
    duration: '00:16',
    time: '09:25 AM',
  },
  {
    id: '6',
    type: 'received',
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    replyTo: 'Hello! How are you?',
    replyName: 'John Doe',
    text: 'Thanks for the message!',
    time: '09:26 AM',
  },
];

const MessageScreen = () => {
  const [message, setMessage] = useState('');

  const renderMessage = ({ item }) => {
    const isSent = item.type === 'sent';

    return (
      <View
        style={[
          styles.messageContainer,
          isSent ? styles.sentContainer : styles.receivedContainer,
        ]}
      >
        {!isSent && (
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        )}

        <View style={styles.messageContent}>
          {!isSent && item.name && (
            <Text style={styles.senderName}>{item.name}</Text>
          )}

          <View
            style={[
              styles.messageBubble,
              isSent ? styles.sentBubble : styles.receivedBubble,
            ]}
          >
            {item.replyTo && (
              <View style={styles.replyBlock}>
                <Text style={styles.replyName}>{item.replyName} replied</Text>
                <Text style={styles.replyText}>{item.replyTo}</Text>
              </View>
            )}
            {item.isVoice ? (
              <View style={styles.voiceWrapper}>
                <Ionicons
                  name="play-circle"
                  size={24}
                  color={isSent ? colors.white : colors.primary}
                />
                <View
                  style={[
                    styles.voiceBar,
                    { backgroundColor: isSent ? colors.white : colors.primary },
                  ]}
                />
                <Text
                  style={[
                    styles.voiceTime,
                    { color: isSent ? colors.white : colors.black },
                  ]}
                >
                  {item.duration}
                </Text>
              </View>
            ) : (
              <Text
                style={[
                  styles.messageText,
                  isSent ? styles.sentText : styles.receivedText,
                ]}
              >
                {item.text}
              </Text>
            )}
          </View>

          <Text
            style={[
              styles.timeText,
              isSent ? styles.sentTime : styles.receivedTime,
            ]}
          >
            {item.time}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={22} color={colors.black} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
            style={styles.avatarLarge}
          />
          <View>
            <Text style={styles.name}>Battlie Doe</Text>
            <Text style={styles.status}>Inactive</Text>
          </View>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.todayContainer}>
        <Text style={styles.todayText}>Today</Text>
      </View>

      <FlatList
        data={dummyMessages}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
        inverted
      />

      <View style={styles.inputContainer}>
        <Feather name="image" size={22} color="#98A2B3" />
        <TextInput
          style={styles.textInput}
          placeholder="Write your message"
          placeholderTextColor="#98A2B3"
          value={message}
          onChangeText={setMessage}
        />
        <Ionicons name="camera" size={22} color="#98A2B3" />
        <Ionicons name="mic" size={22} color="#98A2B3" />
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  avatarLarge: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  name: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: '#101828',
  },
  status: {
    fontFamily: fonts.Regular,
    fontSize: 11,
    color: '#797C7B',
  },
  todayContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  todayText: {
    fontSize: 13,
    color: '#98A2B3',
    fontFamily: fonts.Medium,
  },
  chatContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    width: '100%',
  },
  sentContainer: {
    justifyContent: 'flex-end',
  },
  receivedContainer: {
    justifyContent: 'flex-start',
  },
  messageContent: {
    maxWidth: '80%',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 8,
    alignSelf: 'flex-end',
    marginBottom: 22,
  },
  senderName: {
    fontSize: 13,
    fontFamily: fonts.Medium,
    color: '#101828',
    marginBottom: 4,
    marginLeft: 6,
  },
  messageBubble: {
    borderRadius: 12,
    padding: 12,
  },
  receivedBubble: {
    backgroundColor: '#F2F4F7',
    borderTopLeftRadius: 0,
    marginRight: '20%',
  },
  sentBubble: {
    backgroundColor: '#538CD9',
    borderTopRightRadius: 0,
    marginLeft: '20%',
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fonts.Regular,
  },
  sentText: {
    color: '#fff',
  },
  receivedText: {
    color: '#101828',
  },
  timeText: {
    fontSize: 10,
    marginTop: 4,
    fontFamily: fonts.Regular,
  },
  sentTime: {
    color: '#9CA3AF',
    textAlign: 'right',
    marginRight: 4,
  },
  receivedTime: {
    color: '#9CA3AF',
    marginLeft: 6,
  },
  voiceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  voiceBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  voiceTime: {
    fontSize: 12,
    fontFamily: fonts.Medium,
  },
  replyBlock: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 6,
    padding: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#D0D5DD',
  },
  replyName: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#344054',
  },
  replyText: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: '#475467',
    marginTop: 2,
  },
  inputContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,

    gap: 12,
  },
  textInput: {
    flex: 1,
    height: 42,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: '#101828',
  },
});
