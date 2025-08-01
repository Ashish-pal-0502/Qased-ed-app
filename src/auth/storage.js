import jwtDecode from 'jwt-decode';
import cache from '../utility/cache';
// const key = "Wetalk";
const getUser = async () => {
  let userDetails;
  const user = await cache.get(userDetails);
  if (user) {
    return user;
  } else {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
  }
};
const storeToken = async authToken => {
  try {
    await cache.store('token', authToken);
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};
const getToken = async () => {
  try {
    const abc = await cache.get('token');
    return abc;
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};
const removeToken = async () => {
  try {
    await cache.clear('token');
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};
export default {getUser, storeToken, getToken, removeToken};
