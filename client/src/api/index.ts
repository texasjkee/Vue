import axios from 'axios';
import { useLocalStorage } from '@/common/hooks/useLocalStorage';

//TODO: change function name, without use
//eslint-disable-next-line
const { token } = useLocalStorage();

export const instance = axios.create({
  // baseURL: process.env.URL,
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export enum URL {
  LOGIN = 'auth/login',
  REGISTRATION = 'auth/register',
  UPDATE_USER = '/users/update',
  EVENTS = 'events',
}
