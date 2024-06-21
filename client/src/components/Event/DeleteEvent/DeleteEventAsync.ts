import { FC, lazy } from 'react';
import { DeleteCardProps } from './DeleteEventItem';

export const DeleteEventAsync = lazy<FC<DeleteCardProps>>(
  async () => await import('./DeleteEventItem')
);
