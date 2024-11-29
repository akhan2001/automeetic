import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import TopLogo from "../components/TopLogo.js";
import { messages } from "../components/data.js";
// Mock data for messages


const MessageItem = ({ user, message, opened, imageUrl }) => (
  <View style={styles.messageItem}>
    <View style={styles.messageTop}>
      <Image
        source={imageUrl}
        style={styles.profilePicture}
      />
      <Text style={styles.messageUser}>{user}</Text>
      {!opened && <View style={styles.unopenedIndicator} />}
    </View>
    <Text style={styles.messagePreview}>{message}</Text>
  </View>
);

const MessagingScreen = () => {
  return (
    <View style={styles.container}>
      <TopLogo />
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MessageItem user={item.user} message={item.message} opened={item.opened} imageUrl={item.imageUrl} />}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  unopenedIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#B31E43',
    marginLeft: 10,
  },
  messageContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    padding: 20,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1e1e1e',
  },
  messageUser: {
    color: 'white',
    fontWeight: 'bold',
  },
  messagePreview: {
    color: 'beige',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    marginLeft: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MessagingScreen;
