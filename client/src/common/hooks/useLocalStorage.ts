import { User } from '@/store/authStore/types';
import { USER_LOCAL_STORAGE_USER } from '../const/localStorage';

export function useLocalStorage() {
  const authDataString = localStorage.getItem(USER_LOCAL_STORAGE_USER);
  const authData: User | null = authDataString
    ? JSON.parse(authDataString)
    : null;

  return {
    email: authData?.email || null,
    name: authData?.name || null,
    token: authData?.token || null,
  };
}
