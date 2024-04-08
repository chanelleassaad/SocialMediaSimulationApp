import React from 'react';
import {View, StyleSheet} from 'react-native';
import SignOutButton from '../atoms/SignOutButton';
import UserDetails from '../organisms/UserDetails';

const SettingLayout = () => {
  return (
    <View style={styles.container}>
      <UserDetails />
      <SignOutButton />
    </View>
  );
};

export default SettingLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
