import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';
import AuthProvider from './src/store/authentication/AuthProvider';
import {Provider} from 'react-redux';
import store from './src/store/store';

/**
 * xcrun simctl openurl booted "mysocialmediaapp://feed"
 * xcrun simctl openurl booted "mysocialmediaapp://add-post"
 *  */
const linking = {
  prefixes: ['mysocialmediaapp://'],
  config: {
    screens: {
      Feed: 'feed',
      Post: 'add-post',
    },
  },
};

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer
            independent={true}
            linking={linking}
            fallback={<Text>Loading...</Text>}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </AuthProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
