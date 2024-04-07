import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useAuth} from '../../store/authentication/AuthContext';

const UserDetails = () => {
  const {userToken} = useAuth();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (userToken) {
      const decodedToken = JSON.parse(userToken);
      setUserDetails(decodedToken);
    }
  }, [userToken]);
  return (
    <>
      {userDetails && (
        <>
          <Text style={styles.name}>{userDetails.name}</Text>
          <Text style={styles.email}>{userDetails.email}</Text>
          {userDetails.isAdmin ? (
            <Text style={styles.email}>You are an admin!</Text>
          ) : null}
        </>
      )}
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
