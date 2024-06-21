import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { errorMessages } from '@/common/const';
import { type LoginType, type RegistrationType } from './types';
import { ProfileSettingsType } from '../UserSettings/UserSettings';

const passwordRules = /^(?=.*\d)(?=.*[A-Z]).{5,}$/;
const nameRules = /^[A-Za-z ]*$/;

export const validationLoginSchema: ObjectSchema<
  Omit<LoginType, 'isRememberMe'>
> = Yup.object().shape({
  email: Yup.string()
    .email(errorMessages.email.invalid)
    .required(errorMessages.email.required),
  password: Yup.string().required(errorMessages.password.required),
});

export const validationRegistrationSchema: ObjectSchema<
  Omit<RegistrationType, 'isRememberMe'>
> = Yup.object().shape({
  email: Yup.string()
    .email(errorMessages.email.invalid)
    .required(errorMessages.email.required),
  name: Yup.string()
    .required(errorMessages.name.required)
    .min(3)
    .max(40)
    .matches(nameRules, 'Please enter valid name'),
  password: Yup.string()
    .required(errorMessages.password.required)
    .matches(passwordRules, errorMessages.password.weak),
  confirmPassword: Yup.string()
    .required(errorMessages.confirmPassword.required)
    .oneOf([Yup.ref('password')], errorMessages.confirmPassword.mismatch),
});

export const validationUserDataSchema: ObjectSchema<ProfileSettingsType> =
  Yup.object().shape({
    email: Yup.string()
      .email(errorMessages.email.invalid)
      .required(errorMessages.email.required),
    name: Yup.string()
      .required(errorMessages.name.required)
      .min(3)
      .max(40)
      .matches(nameRules, 'Please enter valid name'),
  });
