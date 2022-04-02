import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RECIPE from 'data/recipe.json';

export default function RecipeSummary(props) {
  const getRecipeName = () => (RECIPE.label);

  return (
    <View style={styles.recipeSummaryContainer}>
      <Text>New recipe {getRecipeName()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeSummaryContainer: {
    flex: 6
  }
});
