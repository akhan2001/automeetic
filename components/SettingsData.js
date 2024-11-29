import React from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';

const settingsData = require('../components/settings.json').settings[0]; // adjust the path

const settingsSections = Object.keys(settingsData).map(key => ({
  title: key,
  data: settingsData[key]
}));

export default function SettingsPage() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.preference_setting || item.account_setting || item.payment_setting || item.support_setting}</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={settingsSections}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#b31e43',
  },
  item: {
    padding: 10,
  },
  title: {
    marginLeft: 20,
    fontSize: 14,
    color: '#dedede',
  }
});
