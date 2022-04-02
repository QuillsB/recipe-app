import React from 'react';
import { View, Text } from 'react-native';

import RECIPE from 'data/recipe.json';

export default function RecipeSummary(props) {
  const getRecipeName = () => (RECIPE.label);

  return (
    <View>
      <Text>New recipe {getRecipeName()}</Text>
    </View>
  )
}
