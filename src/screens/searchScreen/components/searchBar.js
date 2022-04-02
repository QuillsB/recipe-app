import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function SearchBar(props) {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchInputTextContainer}>
        <Text style={styles.searchIcon}>?</Text>
        <TextInput style={styles.searchInputText} />
      </View>
      <View style={styles.searchSaverContainer}>
        <Text style={styles.searchSaver}>Sa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 30,
    maxWidth: 400,
    maxHeight: 50,
    marginBottom: 10,
    alignItems: 'center',
  },
  searchInputTextContainer: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 7,
    marginRight: 30,
    marginLeft: 30,
    alignItems: 'center'
  },
  searchIcon: {
    flex: 1,
    paddingLeft: 5
  },
  searchInputText: {
    flex: 9,
    padding: 5
  },
  searchSaverContainer: {
    flex: 1,
    backgroundColor: 'orange',
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchSaver: {
    flex: 1,
  }
});
