import React, {useState} from 'react';
import AuthForm from '../../components/template/AuthForm';
import {loginUser} from '../../config/UserApi';
import {useAuth} from '../../store/authentication/AuthContext';

const LoginForm = ({navigation}) => {
  const {signIn} = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = async (username, password) => {
    try {
      const user = await loginUser(username, password);
      const {id, email, isAdmin} = user;
      await signIn(username, id, email, isAdmin);
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
