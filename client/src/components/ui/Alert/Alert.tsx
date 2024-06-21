import { RequestStatusType } from '@/store/authStore/types';
import { FC } from 'react';

interface IProps {
  text: string | undefined;
  className?: string;
  status?: RequestStatusType;
}

export const Alert: FC<IProps> = ({ text, className, status = 'failed' }) => {
  const statusColor = (status: RequestStatusType) => {
    switch (status) {
      case 'failed':
        return 'text-rose bg-red-50';
      case 'succeeded':
        return 'bg-green-50 text-green-800';
      case 'idle':
        return 'text-yellow-800 bg-yellow-50';
      case 'loading':
        return 'bg-gray text-black';
      default:
        'text-black';
        break;
    }
  };
  return (
    <div
      className={`${className} ${statusColor(status)} shadow  flex items-center mt-2 p-2 text-sm  rounded-[0.875rem]  dark:bg-gray-800 dark:text-red`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">{text}</span>
      </div>
    </div>
  );
};
