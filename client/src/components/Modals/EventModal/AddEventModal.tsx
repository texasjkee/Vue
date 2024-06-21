import { Suspense, memo } from 'react';

import Modal from '@/components/ui/Modal/Modal';
import Spinner from '@/components/ui/Spinner/Spinner';
import { EventsFormAsync } from '@/components/Event/EventForm/CreateEvent/EventFormAsync';

interface IProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}
const EventModal = memo(function EventsModal(props: IProps) {
  const { isOpen, onClose, title } = props;

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Spinner />}>
        <EventsFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
});

export default EventModal;
