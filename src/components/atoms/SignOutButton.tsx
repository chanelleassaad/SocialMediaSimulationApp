import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {useAuth} from '../../store/authentication/AuthContext';

const SignOutButton = () => {
  const {signOut} = useAuth();

  const onPressSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <Pressable onPress={onPressSignOut} style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </Pressable>
    </>
  );
};

export default SignOutButton;

const styles = StyleSheet.create({
  signOutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  signOutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
