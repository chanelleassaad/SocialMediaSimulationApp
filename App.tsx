import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';
import AuthProvider from './src/store/authentication/AuthProvider';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer independent={true}>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
