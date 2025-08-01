import { create } from 'apisauce';
import authStorage from '../auth/storage';

const apiClient = create({
  baseURL: 'http://192.168.31.106:5000/api',
  headers: { Accept: 'application/vnd.github.v3+json' },
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = await authStorage.getToken();

  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
});

export default apiClient;
