import { useShallow } from 'zustand/react/shallow';
import { useEventStore } from '@/store/eventStore';
import Calendar from './Calendar';

function CalendarContainer() {
  const { events } = useEventStore(useShallow((state) => state));

  return <Calendar events={events} />;
}

export default CalendarContainer;
