import { URL, instance } from '.';
import { type User } from '@/store/authStore/types';
import { type LoginType, type RegisterPick } from '@/components/AuthForm/types';

export const authApi = {
  registration(userData: RegisterPick) {
    return instance.post(URL.REGISTRATION, userData);
  },
  login(userData: LoginType) {
    return instance.post(URL.LOGIN, userData);
  },
  updateUser(userData: User) {
    return instance.patch(URL.UPDATE_USER, userData);
  },
};
