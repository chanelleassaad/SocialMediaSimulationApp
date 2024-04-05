import React, {useState} from 'react';
import AuthNav from './AuthNav';
import UnauthNav from './UnauthNav';

const RootNavigator = () => {
  const [isUserAuth, setIsAuth] = useState(false);

  return isUserAuth ? <AuthNav /> : <UnauthNav />;
};

export default RootNavigator;
