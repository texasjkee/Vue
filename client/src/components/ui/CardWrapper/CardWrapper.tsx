import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const CardWrapper: FC<IProps> = ({ children, className }) => {
  return (
    <div className={`bg-white p-6 h-full shadow rounded-3xl ${className}`}>
      {children}
    </div>
  );
};
