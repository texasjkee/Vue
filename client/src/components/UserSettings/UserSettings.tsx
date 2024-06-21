import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { notify } from '@/utils/notify';
import { useAuthStore } from '@/store/authStore';
import { useLocalStorage } from '@/common/hooks/useLocalStorage';
import { validationUserDataSchema } from '../AuthForm/validationSchema';
import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';

import { CardWrapper } from '../ui/CardWrapper/CardWrapper';
import { Alert } from '../ui/Alert/Alert';
import { CardTitle } from '../ui/CardTitle/CardTitle';
import UserSettingsForm from './UserSettingsForm';
import UserInformation from './UserInformation';

import { PencilIcon } from '@heroicons/react/20/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import TrashCan from '@/assets/Trash-can.svg';
import UploadArrow from '@/assets/UploadArrow.svg';
import Avatar from '@/assets/Avatar.svg';

export interface ProfileSettingsType {
  email: string;
  name: string;
}

function ProfileSettings() {
  const { email, token, name } = useLocalStorage();
  const [isOpenedChanges, setIsOpenedChanges] = useState(true);
  const { updateUser, error: responseError, setStatus } = useAuthStore();
  const resolver = useYupValidationResolver<ProfileSettingsType>(
    validationUserDataSchema
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileSettingsType>({
    defaultValues: { name, email },
    mode: 'onBlur',
    resolver,
  });

  const onSubmit = async (formData: ProfileSettingsType) => {
    await updateUser({
      token,
      ...formData,
    });
    const { success } = useAuthStore.getState();
    if (success) {
      notify('succeeded', 'Change profile success');
    }
  };

  return (
    <>
      <CardTitle>
        <h4>Settings</h4>
      </CardTitle>
      <CardWrapper>
        <div className="flex justify-between ">
          <div className="flex flex-col">
            <span className="font-medium">Profile photo</span>
            <span className="text-lightGray500 ">Description</span>
          </div>
          <div className="flex flex-col items-center bg-lightGray200 w-[24.75rem] rounded-lg py-6">
            <img
              className="w-[8.75rem] border-4 border-white rounded-full"
              src={Avatar}
              alt="avatar"
            />
            <div className="flex mt-6">
              <button className="flex items-center rounded-[2.5rem] bg-black text-mm font-normal text-whitePrimary py-[0.375rem] px-4 ">
                Upload New
                <img className="ml-2" src={UploadArrow} alt="upload" />
              </button>
              <button className="w-8 p-2 rounded-full bg-redSaturated ml-2">
                <img src={TrashCan} alt="upload" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-4 border-y border-lightGray mt-4">
          <div className="flex flex-col w-44">
            <div className="flex justify-between">
              <span className="font-medium">General information</span>
              <button onClick={() => setIsOpenedChanges((state) => !state)}>
                {isOpenedChanges ? (
                  <PencilIcon className="h-4 w-4" />
                ) : (
                  <CheckIcon className="h-6 w-6" />
                )}
              </button>
            </div>
            <span className="text-lightGray500 ">Description</span>
          </div>
          {isOpenedChanges ? (
            <UserInformation name={name} email={email} />
          ) : (
            <UserSettingsForm<ProfileSettingsType>
              name="name"
              email="email"
              register={register}
              nameError={errors.name?.message}
              emailError={errors.email?.message}
            />
          )}
        </div>
        <div className="flex justify-center">
          {setStatus === 'succeeded' && (
            <Alert status={'succeeded'} text={'Your data have changed'} />
          )}
        </div>
        <div className="flex justify-end p-4 mt-4">
          <div className="flex">
            {responseError && <p className="text-rose mr-3">{responseError}</p>}
            <button className="text-black py-[0.375rem] px-3 bg-lightGray300 rounded-[2.5rem] mr-2">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isOpenedChanges}
              className={`${isOpenedChanges ? 'text-black py-[0.375rem] px-3 bg-lightGray300 rounded-[2.5rem] text-mm border-black border' : 'btn-settings'}`}
              onClick={handleSubmit(onSubmit)}
            >
              Save changes
            </button>
          </div>
        </div>
      </CardWrapper>
    </>
  );
}

export default ProfileSettings;
