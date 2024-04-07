import React from 'react';
import AuthNav from './AuthNav';
import UnauthNav from './UnauthNav';
import {useAuth} from '../store/authentication/AuthContext';

const RootNavigator = () => {
  const {userToken} = useAuth();

  const isUserAuth = !!userToken;

  return isUserAuth ? <AuthNav /> : <UnauthNav />;
};

export default RootNavigator;
