import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const CardTitle: FC<IProps> = ({ children }) => {
  return <div className="flex justify-between p-4">{children}</div>;
};
