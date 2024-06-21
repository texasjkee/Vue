import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useEventStore } from '@/store/eventStore';
import { type Event } from '@/store/eventStore/types';

import Payment from './Payment';

function PaymentContainer() {
  const { events, updateEvent } = useEventStore(useShallow((state) => state));

  const onUpdate = useCallback(
    async (event: Event) => {
      await updateEvent(event);
    },
    [updateEvent]
  );

  return <Payment events={events} onUpdate={onUpdate} />;
}

export default PaymentContainer;
