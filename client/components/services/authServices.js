
import api from './api';

const login = (credentials) => {
  return api.post('/auth/login', credentials);
};

const logout = () => {
  // Logic to clear tokens, etc.
  return Promise.resolve();
};

export { login, logout };