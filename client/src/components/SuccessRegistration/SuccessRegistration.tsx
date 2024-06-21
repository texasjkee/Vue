import loginIcon from '@/assets/Illustration.svg';
import arrowBoldRight from '@/assets/Arrow-bold--right.svg';
import { useNavigate } from '@tanstack/react-router';

function SuccessRegistration() {
  const navigate = useNavigate();

  const nav = () => {
    navigate({ to: '/dashboard' });
  };

  return (
    <div className="bg-whitePrimary rounded-2xl shadow h-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div>
          <img src={loginIcon} alt="logo" />
        </div>
        <h3 className="font-montserrat text-3xl mt-16 font-bold max-xl:text-2xl max-sm:text-3xl; ">
          You are successfully registered!
        </h3>
        <button
          className="bg-primary flex items-center rounded-2xl py-3 px-5 mt-6 text-xs text-white"
          onClick={nav}
        >
          Let's Start
          <img className="pl-2" src={arrowBoldRight} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default SuccessRegistration;
