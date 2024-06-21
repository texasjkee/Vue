import { USER_LOCAL_STORAGE_USER } from '@/common/const/localStorage';

export const isAuthenticated = () =>
  localStorage.getItem(USER_LOCAL_STORAGE_USER) === 'true';

export const signIn = async () => {
  localStorage.setItem(USER_LOCAL_STORAGE_USER, 'true');
};

export const signOut = async () => {
  localStorage.removeItem(USER_LOCAL_STORAGE_USER);
};
