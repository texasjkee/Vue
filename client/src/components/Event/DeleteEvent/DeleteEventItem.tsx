import { notify } from '@/utils/notify';
import { useEventStore } from '@/store/eventStore';
import { Event } from '@/store/eventStore/types';

import { Alert } from '../../ui/Alert/Alert';

export interface DeleteCardProps {
  event: Event;
  onSuccess: () => void;
}

const notifyEvent = 'Event deleted successfully';

function DeleteEventModal({ onSuccess, event }: DeleteCardProps) {
  const { date, price, name, id } = event;
  const { deleteEvent, error: responseError } = useEventStore((store) => store);

  const convertedDate = date.toString().slice(0, 10);

  const handleDeleteEvent = async () => {
    if (id) await deleteEvent(id);
    const { success } = useEventStore.getState();

    if (success) {
      onSuccess();
      notify('succeeded', notifyEvent);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8 mt-6">
        <div className="flex flex-col gap-4">
          <h5>Date: {convertedDate}</h5>
          <h5>Name: {name}</h5>
          <h5>Price: {price}</h5>
        </div>
        <div className="flex justify-center">
          {responseError && (
            <Alert className="mb-0 mt-0 pt-1 pb-1 mr-6" text={responseError} />
          )}
        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn-red" onClick={handleDeleteEvent}>
            Delate
          </button>
          <button className="btn-blue-outline ml-2">Cancel</button>
        </div>
      </div>
    </>
  );
}

export default DeleteEventModal;
