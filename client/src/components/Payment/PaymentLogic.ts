import { daysNames } from '@/common/const';
import { type Event } from '@/store/eventStore/types';

export function getWeekStartingMonday() {
  const days = [...daysNames];
  days.push(daysNames[0]);
  days.shift();

  return days;
}

export type DaysWithEvents = Record<number, Event[]>;

export const getDaysWithEvents = (events: Event[]) => {
  const dayWithEvents: DaysWithEvents = {};

  events.forEach((event) => {
    const day = new Date(event.date).getDate();

    dayWithEvents[day]?.length
      ? dayWithEvents[day].push(event)
      : (dayWithEvents[day] = [event]);
  });

  return dayWithEvents;
};
