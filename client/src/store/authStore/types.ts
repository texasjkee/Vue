import { LoginType, RegistrationType } from '@/components/AuthForm/types';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface AuthSchema {
  authData?: User | null;
  success: boolean;
  isRegister: boolean;
  loading?: boolean;
  error?: string;
  setStatus: RequestStatusType | undefined;
}

export interface User {
  name: string;
  token: string;
  email: string;
  role?: string;
}

export interface AuthAction {
  login: (userData: LoginType) => Promise<void>;
  register: (userData: RegistrationType) => Promise<void>;
  updateUser: (userData: User) => Promise<void>;
  setIsRegister: (register: boolean) => void;
  logout: () => void;
}
