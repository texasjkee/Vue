import { Event } from '@/store/eventStore/types';

export const getCurrentMonthEvents = (events: Event[], month: Date) =>
  events.filter(
    (event) => new Date(event.date).getMonth() === new Date(month).getMonth()
  );
