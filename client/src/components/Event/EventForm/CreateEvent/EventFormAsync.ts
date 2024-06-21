import { FC, lazy } from 'react';
import { EventFormProps } from './EventForm';

export const EventsFormAsync = lazy<FC<EventFormProps>>(
  async () => await import('./EventForm')
);
