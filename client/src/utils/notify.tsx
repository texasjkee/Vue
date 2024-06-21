import { Alert } from '@/components/ui/Alert/Alert';
import { RequestStatusType } from '@/store/authStore/types';
import toast from 'react-hot-toast';

export const notify = (status: RequestStatusType, text: string) =>
  toast.custom(
    (t) => (
      <div className={` ${t.visible ? 'animate-enter' : 'animate-leave'}`}>
        <Alert status={status} text={text} />
      </div>
    ),
    { duration: 400 }
  );
