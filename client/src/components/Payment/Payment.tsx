import { useState } from 'react';
import { format } from 'date-fns';
import { type ButtonType } from '@/common/const';
import { type Event } from '@/store/eventStore/types';
import { getDaysWithEvents, getWeekStartingMonday } from './PaymentLogic';
import {
  getArrayOfDays,
  getPrevMonth,
  getNextMonth,
  getCurrentMonthEvents,
} from '@/utils/date';

import { CardTitle } from '../ui/CardTitle/CardTitle';
import { CardWrapper } from '../ui/CardWrapper/CardWrapper';
import PaymentItem from './PaymentItem';

import leftArrow from '@/assets/Arrow--left.svg';

interface PaymentProps {
  events: Event[];
  onUpdate: (data: Event) => Promise<void>;
}

function Payment({ events, onUpdate }: PaymentProps) {
  const [month, setMonth] = useState(new Date());

  const daysOfWeek = getWeekStartingMonday();
  const daysOfMonth = getArrayOfDays(month);
  const monthEvents = getCurrentMonthEvents(events, month);
  const daysWithEvents = getDaysWithEvents(monthEvents);

  const handeClick = (button: ButtonType) => {
    button === 'prev'
      ? setMonth(getPrevMonth(month))
      : setMonth(getNextMonth(month));
  };

  return (
    <>
      <CardTitle>
        <h4>Payment</h4>
      </CardTitle>
      <CardWrapper>
        <div className="flex w-48">
          <h4 className="left">{format(month, 'MMM yyyy')}</h4>
        </div>
        <div className="flex bg-blueMoon rounded-lg p-3 mt-4">
          <div className="min-w-[4.5rem] flex justify-between">
            <button data-prev="prev" onClick={() => handeClick('prev')}>
              <img src={leftArrow} alt="leftArrow" />
            </button>
            <button
              data-next="next"
              className="rotate-180"
              onClick={() => handeClick('next')}
            >
              <img src={leftArrow} alt="rightArrow" />
            </button>
          </div>
          {daysOfWeek.map((day, dayIndex) => (
            <div className="w-40 text-center text-mm leading-7" key={dayIndex}>
              {day.slice(0, 3).toUpperCase()}
            </div>
          ))}
        </div>
        <div className=" bg-blueMoon grid grid-cols-7 gap-[0.063rem] auto-rows-[6rem] rounded-md p-1 mt-1">
          {daysOfMonth.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`${''} 
              ${day && 'flex-col justify-center bg-white text-sm p-1 rounded-lg'} `}
            >
              <div className="mb-1">{day !== 0 && day}</div>
              {daysWithEvents[day] &&
                daysWithEvents[day].map((event) => (
                  <PaymentItem
                    key={event.id}
                    event={event}
                    onUpdate={onUpdate}
                  />
                ))}
            </div>
          ))}
        </div>
      </CardWrapper>
    </>
  );
}

export default Payment;
