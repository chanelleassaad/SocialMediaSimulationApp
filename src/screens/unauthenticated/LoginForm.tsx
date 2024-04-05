import React from 'react';
import AuthForm from '../../components/template/AuthForm';

const LoginForm = ({navigation}) => {
  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = (username: string, password: string) => {
    console.log('Logging in with:', username, password);
  };

  return (
    <AuthForm
      type="login"
      onSubmit={handleLogin}
      onNavigate={handleSignUpPress}
    />
  );
};

export default LoginForm;
