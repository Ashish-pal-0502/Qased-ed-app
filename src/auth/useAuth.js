import {useContext} from 'react';
import cache from '../utility/cache';
import AuthContext from './context';
import authStorage from './storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

const useAuth = () => {
  const {user, setUser} = useContext(AuthContext);

  const logIn = authToken => {
    const user1 = jwtDecode(authToken);

    setUser(user1);
    authStorage.storeToken(authToken);
    cache.store('userDetails', user1);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
    AsyncStorage.removeItem('fcmToken');
    cache.clear('userDetails');
  };

  return {user, logIn, logOut};
};

export default useAuth;
