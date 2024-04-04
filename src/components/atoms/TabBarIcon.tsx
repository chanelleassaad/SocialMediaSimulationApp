import {ParamListBase, RouteProp} from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type MainNavigatorRouteProp = RouteProp<ParamListBase, string>;

const TabBarIcon = ({
  route,
  focused,
  color,
  size,
}: {
  route: MainNavigatorRouteProp;
  focused: boolean;
  color: string;
  size: number;
}) => {
  let iconName;

  iconName = iconName || 'help';

  if (route.name === 'Feed') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default TabBarIcon;
