import { type Event } from '@/store/eventStore/types';

export const sortByToday = (events: Event[]) => {
  const currentDay = new Date().toString().slice(0, 15);

  return events.filter((event) => {
    const eventDate = new Date(event.date).toString().slice(0, 15);
    return eventDate === currentDay;
  });
};
