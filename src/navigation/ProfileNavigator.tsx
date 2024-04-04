import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const ProfileNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ProfileNavigator;
