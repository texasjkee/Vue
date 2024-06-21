import { Event } from '@/store/eventStore/types';

export const sortByHours = (events: Event[]) => {
  return events.sort(
    (a, b) => new Date(a.date).getHours() - new Date(b.date).getHours()
  );
};
