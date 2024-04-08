import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useAuth} from '../../store/authentication/AuthContext';

const UserDetails = () => {
  const {userToken} = useAuth();

  return (
    <>
      <Text style={styles.name}>{userToken.username}</Text>
      <Text style={styles.email}>{userToken.email}</Text>
      {userToken.isAdmin ? (
        <Text style={styles.email}>You are an admin!</Text>
      ) : null}
    </>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
});
