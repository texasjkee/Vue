export interface LoginType {
  email: string;
  password: string;
  isRememberMe?: boolean;
}

export interface RegistrationType extends LoginType {
  name: string;
  confirmPassword: string;
}

export type RegisterPick = Pick<
  RegistrationType,
  'password' | 'email' | 'name'
>;
