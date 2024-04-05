import React from 'react';
import AuthForm from '../../components/template/AuthForm';

const SignupForm = ({navigation}) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignup = (username: string, password: string, email: string) => {
    console.log('Signing up with:', username, password, email);
  };

  return (
    <AuthForm
      type="signup"
      onSubmit={handleSignup}
      onNavigate={handleLoginPress}
    />
  );
};

export default SignupForm;
