import { useAuthStore } from '@/store/authStore';
import LoginForm from '@/components/AuthForm/LoginForm';
import RegistrationForm from '@/components/AuthForm/RegistrationForm';

import Logo from '@/assets/white.svg';
import loginIcon from '@/assets/Illustration.svg';

function LoginPage() {
  const isRegister = useAuthStore((store) => store.isRegister);

  return (
    <div className="shadow-md max-w-screen-1xl  max-h-screen-md rounded-3xl max-sm:flex grid grid-cols-2 mx-auto h-full ">
      <div className="bg-primary max-sm:hidden rounded-l-3xl flex flex-col max-lg:px-8  pt-16 lg:px-24">
        <div className="flex items-center gap-7">
          <img src={Logo} alt="logo" />
          <h3 className="text-white">Work room</h3>
        </div>

        <div className="max-w-[24.875rem] pt-12">
          <h3 className="text-white">Your place to work</h3>
          <h3 className="text-white">Plan. Create. Control.</h3>
        </div>
        <div className="pt-20">
          <img src={loginIcon} alt="logo" />
        </div>
      </div>
      {!isRegister ? (
        <div className="bg-white max-lg:px-2 max-sm:w-full rounded-r-3xl flex flex-col pt-[7.188rem]  items-center ">
          <LoginForm />
        </div>
      ) : (
        <div className="bg-white max-lg:px-2 max-sm:w-full rounded-r-3xl flex flex-col pt-[2.188rem]  items-center ">
          <RegistrationForm />
        </div>
      )}
    </div>
  );
}

export default LoginPage;
