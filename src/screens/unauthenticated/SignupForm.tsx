import React, {useState} from 'react';
import AuthForm from '../../components/template/AuthForm';
import {signUpUser} from '../../config/UserApi';

const SignupForm = ({navigation}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignup = async (
    username: string,
    password: string,
    email: string,
  ) => {
    const isAdmin = false;
    try {
      const user = await signUpUser(username, email, password, isAdmin);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <AuthForm
      type="signup"
      onSubmit={handleSignup}
      onNavigate={handleLoginPress}
      errorMessage={errorMessage}
    />
  );
};

export default SignupForm;
