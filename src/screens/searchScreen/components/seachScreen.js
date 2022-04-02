import React from 'react';
import { View, Text } from 'react-native';

import RecipeSummary from 'screens/searchScreen/components/recipeSummary';

export default function SearchScreen(props) {
  return (
    <View>
      <Text>Welcome on recipe app</Text>
      <RecipeSummary />
    </View>
  )
}
