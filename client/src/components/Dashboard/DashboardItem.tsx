import { useState } from 'react';
import { type Event } from '@/store/eventStore/types';

interface DashboardItemProps {
  event: Event;
  success: boolean;
  onUpdate: (data: Event) => Promise<void>;
}

function DashboardItem({ event, onUpdate, success }: DashboardItemProps) {
  const { name, date, isDone } = event;
  const [isCheck, setIsCheck] = useState<boolean>(isDone);
  const hours = new Date(date).getHours();

  const handleCheck = () => {
    onUpdate({ ...event, isDone: !isCheck });
    if (success) setIsCheck(!isCheck);
  };

  return (
    <div className="flex justify-between items-center p-2 bg-blueMoon shadow rounded-3xl mt-4">
      <div
        className={`${isCheck ? 'bg-lime-400' : 'bg-red300'}
          inline-block rounded min-h-[1em] w-2 self-stretch `}
      ></div>
      <span className="text-sm">
        {name} {hours}-00
      </span>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isCheck}
          onChange={handleCheck}
          className="w-5 h-5 bg-white shadow"
        />
        <label className="ms-1 text-sm  text-black dark:text-gray capitalize">
          Done
        </label>
      </div>
    </div>
  );
}

export default DashboardItem;
