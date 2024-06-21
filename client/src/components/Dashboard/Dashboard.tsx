import { useCallback, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useEventStore } from '@/store/eventStore';
import { type Event } from '@/store/eventStore/types';
import { type Periods, getFullDay, sortByToday } from '@/utils/date';

import { Alert } from '../ui/Alert/Alert';
import { CardTitle } from '../ui/CardTitle/CardTitle';
import DashboardItem from './DashboardItem';
import EventChart from '../EventsChart/EventsChart';
import DashboardSelect from './Chart/Select';

function Dashboard() {
  const {
    events,
    updateEvent,
    success,
    error: responseError,
  } = useEventStore(useShallow((state) => state));

  const [period, setPeriod] = useState<Periods>('Two weeks');

  const completedEvents = events.filter((event) => event.isDone === true);
  const sortedByToday = sortByToday(events);
  const today = getFullDay(new Date().getDay());

  const onUpdate = useCallback(
    async (event: Event) => {
      await updateEvent(event);
    },
    [updateEvent]
  );

  return (
    <>
      <CardTitle>
        <h4>Dashboard</h4>
        <DashboardSelect setPeriod={setPeriod} />
      </CardTitle>
      <div className="h-full">
        <div className="h-1/2 flex-auto flex gap-1 ">
          <div
            className={`${sortedByToday.length > 4 && `overflow-scroll overflow-x-hidden`} max-w-[18rem] shadow min-w-44 w-full p-4 bg-white rounded-3xl`}
          >
            <div className="flex justify-center">
              <span className="text-[1.125rem]">{today}</span>
            </div>
            {responseError && <Alert status={'failed'} text={responseError} />}
            {sortedByToday.map((event) => (
              <DashboardItem
                key={event.id}
                event={event}
                onUpdate={onUpdate}
                success={success}
              />
            ))}
          </div>
          <div className="h-full w-full p-4 bg-white rounded-3xl shadow">
            <EventChart events={completedEvents} period={period} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
