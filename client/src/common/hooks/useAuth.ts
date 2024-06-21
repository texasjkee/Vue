import { USER_LOCAL_STORAGE_USER } from '../const/localStorage';

export const useAuth = () => {
  const signIn = () => {
    localStorage.setItem(USER_LOCAL_STORAGE_USER, 'true');
  };

  const signOut = () => {
    localStorage.removeItem(USER_LOCAL_STORAGE_USER);
  };

  const isLogged = () =>
    //eslint-disable-next-line
    //@ts-ignore
    !!JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_USER))?.token;

  return { signIn, signOut, isLogged };
};

export type AuthContext = ReturnType<typeof useAuth>;
