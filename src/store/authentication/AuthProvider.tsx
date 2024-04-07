import React, {useMemo} from 'react';
import {useReducer, useEffect} from 'react';
import * as Keychain from 'react-native-keychain';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer';

const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          userToken = credentials.password;
        }
      } catch (e) {
        throw e;
      }
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (name, id, email, isAdmin) => {
        const token = JSON.stringify({name, id, email, isAdmin});
        await Keychain.setGenericPassword('userToken', token);
        dispatch({type: 'SIGN_IN', token});
      },
      signOut: async () => {
        await Keychain.resetGenericPassword();
        dispatch({type: 'SIGN_OUT'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={{...state, ...authContext}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;