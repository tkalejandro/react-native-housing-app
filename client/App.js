import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>

  );
}

const styles = StyleSheet.create({

});
