import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import SearchScreen from 'screens/searchScreen/components/seachScreen';

import store from 'store/configureStore';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SearchScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
