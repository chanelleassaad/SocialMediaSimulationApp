import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import TabBarIcon from '../components/atoms/TabBarIcon';
import FeedScreen from '../screens/FeedScreen';
import ProfileNavigator from './ProfileNavigator';
import AddPostScreen from '../screens/AddPostScreen';

const Tab = createBottomTabNavigator();

type AuthNavigatorRouteProp = RouteProp<ParamListBase, string>;

const tabBar =
  ({route}: {route: AuthNavigatorRouteProp}) =>
  ({focused, size}: {focused: boolean; size: number}) =>
    (
      <TabBarIcon
        route={route}
        focused={focused}
        color={'#0096FF'}
        size={size}
      />
    );

const AuthNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: tabBar({route}),
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Post" component={AddPostScreen} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default AuthNav;
