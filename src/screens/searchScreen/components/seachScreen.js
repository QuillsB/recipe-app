import React from 'react';
import { StyleSheet, View } from 'react-native';

import RecipeSummary from 'screens/searchScreen/components/recipeSummary';
import SearchBar from 'containers/searchScreen/searchBarContainer';

export default function SearchScreen(props) {
  return (
    <View style={styles.searchScreenContainer}>
      <SearchBar />
      <RecipeSummary />
    </View>
  );
}

const styles = StyleSheet.create({
  searchScreenContainer: {
    flex: 1
  }
});
