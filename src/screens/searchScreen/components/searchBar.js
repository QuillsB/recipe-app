import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

export default function SearchBar(props) {
  const [isCalled, setIsCalled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    getSearchByQuery,
  } = props;

  const writeSearchInput = (newQuery) => {
    setIsCalled(false);
    setSearchQuery(newQuery);
  };

  const sendSearchQuery = (event) => {
    event.preventDefault();

    setIsCalled(true);
    getSearchByQuery(searchQuery);
  };

  return (
    <View style={styles.searchBarContainer}>
      <View style={[styles.searchInputTextContainer, isCalled ? styles.searchInputTextBorder : '' ]}>
        <TouchableOpacity onPress={sendSearchQuery}>
          <Image style={styles.searchIcon} source={require('assets/search-icon.png')} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInputText}
          placeholder="Search"
          value={searchQuery}
          onChangeText={writeSearchInput}
        />
      </View>
      <View style={styles.searchSaverContainer}>
        <Image style={styles.searchSaver} source={require('assets/bookmark-icon.png')} />
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
  searchInputTextBorder: {
    borderColor: 'green',
    borderWidth: 1
  },
  searchIcon: {
    flex: 1,
    marginLeft: 5,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  searchInputText: {
    flex: 9,
    padding: 5
  },
  searchSaverContainer: {
    flex: 1,
    backgroundColor: '#FFD68A',
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchSaver: {
    flex: 1,
    paddingLeft: 5,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});
