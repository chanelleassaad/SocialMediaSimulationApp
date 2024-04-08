import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAuth} from '../../store/authentication/AuthContext';

const ProfileHeader = () => {
  const {userToken} = useAuth();

  return (
    <View style={styles.header}>
      <Text style={styles.appName}>CA Social Media App</Text>
      <Text style={styles.welcomeMessage}>Welcome, {userToken.username}!</Text>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0096FF',
  },
  welcomeMessage: {
    fontSize: 18,
    color: '#0096FF',
  },
});
