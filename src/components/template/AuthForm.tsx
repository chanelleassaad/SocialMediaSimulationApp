import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';

const AuthForm = ({type, onSubmit, onNavigate}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleAction = () => {
    if (type === 'login') {
      onSubmit(username, password);
    } else if (type === 'signup') {
      onSubmit(username, password, email);
    }
  };

  const handleNavigate = () => {
    onNavigate();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{type === 'login' ? 'Login' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
      />
      {type === 'signup' && (
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          autoCapitalize="none"
        />
      )}
      <Pressable style={styles.button} onPress={handleAction}>
        <Text style={styles.buttonText}>
          {type === 'login' ? 'LOGIN' : 'SIGN UP'}
        </Text>
      </Pressable>
      <Text style={styles.footerText}>
        {type === 'login'
          ? "Don't Have an Account?"
          : 'Already Have an Account?'}
        <Pressable onPress={handleNavigate}>
          <Text style={styles.signup}>
            {type === 'login' ? ' Sign Up' : ' Login'}
          </Text>
        </Pressable>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: -50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 40,
    color: '#0096FF',
  },
  input: {
    height: 50,
    width: '100%',
    paddingHorizontal: 20,
    borderColor: '#0096FF',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0096FF',
    height: 45,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'gray',
  },
  signup: {
    color: '#0096FF',
    fontSize: 13,
  },
});

export default AuthForm;
