import { useState } from 'react';
import { format } from 'date-fns';
import { Event } from '@/store/eventStore/types';

import DeleteEventModal from '../Modals/EventModal/DeleteEventModal';
import { XCircleIcon } from '@heroicons/react/24/outline';

interface IProps {
  event: Event;
  className?: string;
}

function EventCard({ className, event }: IProps) {
  const [open, setIsOpen] = useState<boolean>(false);
  const { name, date, isDone } = event;

  const onClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${className} rounded-lg ${isDone ? 'bg-lime-400' : 'bg-red300'} flex justify-between h-full px-2 text-white py-1`}
    >
      <div>
        <span>{name}</span>
        <p className="text-white">{format(new Date(date), 'HH:mm')}</p>
      </div>
      <button className="" onClick={() => setIsOpen(!open)}>
        <XCircleIcon className="h-6 w-6 drop-shadow" />
      </button>
      {open && (
        <DeleteEventModal
          event={event}
          title={'Do you want to delate this event?'}
          isOpen={open}
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default EventCard;
