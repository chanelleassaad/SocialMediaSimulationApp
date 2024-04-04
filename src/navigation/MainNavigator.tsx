import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FeedScreen from '../screens/FeedScreen';
import {RouteProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/routers';
import TabBarIcon from '../components/atoms/TabBarIcon';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

type MainNavigatorRouteProp = RouteProp<ParamListBase, string>;

const tabBar =
  ({route}: {route: MainNavigatorRouteProp}) =>
  ({focused, color, size}: {focused: boolean; color: string; size: number}) =>
    <TabBarIcon route={route} focused={focused} color={color} size={size} />;

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: tabBar({route}),
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
