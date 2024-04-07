import React, {useState} from 'react';
import AuthForm from '../../components/template/AuthForm';
import {loginUser} from '../../config/UserApi';

const LoginForm = ({navigation}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = async (username, password) => {
    try {
      const user = await loginUser(username, password);
      console.log(user);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <AuthForm
      type="login"
      onSubmit={handleLogin}
      onNavigate={handleSignUpPress}
      errorMessage={errorMessage}
    />
  );
};

export default LoginForm;
