import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginForm from '../screens/unauthenticated/LoginForm';
import SignupForm from '../screens/unauthenticated/SignupForm';

const UnauthenticatedNavigator = createNativeStackNavigator();

const UnauthNav = () => {
  return (
    <UnauthenticatedNavigator.Navigator
      screenOptions={{
        headerTitle: 'CA Social Media App',
        headerBackTitleVisible: false,
      }}>
      <UnauthenticatedNavigator.Screen name="Login" component={LoginForm} />
      <UnauthenticatedNavigator.Screen name="Signup" component={SignupForm} />
    </UnauthenticatedNavigator.Navigator>
  );
};

export default UnauthNav;
