import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import SearchScreen from 'screens/searchScreen/components/seachScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SearchScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
