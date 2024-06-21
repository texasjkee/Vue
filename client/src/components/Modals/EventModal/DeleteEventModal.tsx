import { Suspense, memo } from 'react';
import { Event } from '@/store/eventStore/types';

import Modal from '@/components/ui/Modal/Modal';
import Spinner from '@/components/ui/Spinner/Spinner';
import { DeleteEventAsync } from '../../Event/DeleteEvent/DeleteEventAsync';

interface IProps {
  event: Event;
  isOpen: boolean;
  title: string;
  onClose: () => void;
}
const DeleteEventModal = memo(function EventsModal(props: IProps) {
  const { isOpen, onClose, title, event } = props;

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Spinner />}>
        <DeleteEventAsync onSuccess={onClose} event={event} />
      </Suspense>
    </Modal>
  );
});

export default DeleteEventModal;
