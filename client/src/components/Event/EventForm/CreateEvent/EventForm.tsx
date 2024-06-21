import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';
import { eventValidSchema } from '../eventValidation';
import { Controller, useForm } from 'react-hook-form';
import FormField from '../../../ui/FormField/FormField';
import { InputType } from '@/common/const';
import { defaultValues } from '../initValuesEvent';
import { useEventStore } from '@/store/eventStore';
import { Alert } from '../../../ui/Alert/Alert';
import { notify } from '@/utils/notify';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export interface EventFormTypes {
  name: string;
  date: Date;
  price: number;
}

export interface EventFormProps {
  onSuccess: () => void;
}

const notifyEvent = 'Event created successfully';
function EventForm({ onSuccess }: EventFormProps) {
  const resolver = useYupValidationResolver<EventFormTypes>(eventValidSchema);
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<EventFormTypes>({
    mode: 'onChange',
    resolver,
    defaultValues,
  });
  const { createEvent, error: responseError } = useEventStore();

  const onSubmit = async (data: EventFormTypes) => {
    await createEvent({ ...data, isDone: false, isPaid: false });
    const { success } = useEventStore.getState();

    if (success) {
      onSuccess();
      notify('succeeded', notifyEvent);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-[2.063rem] flex flex-col">
        <label className="pb-4">Holding time</label>
        <Controller
          control={control}
          name="date"
          render={({ field: { value, ...fieldProps } }) => {
            return (
              <ReactDatePicker
                {...fieldProps}
                wrapperClassName="bg-red"
                dateFormat="MMMM d, yyyy h:mm aa"
                showTimeSelect
                timeIntervals={60}
                timeCaption="Time"
                placeholderText="Select date"
                calendarClassName="custom-calendar"
                selected={value}
                minTime={new Date(new Date().setHours(13, 0, 0))}
                maxTime={new Date(new Date().setHours(22, 0, 0))}
                timeFormat="HH:mm"
              />
            );
          }}
        />
      </div>
      <FormField<EventFormTypes>
        name={'name'}
        error={errors?.name?.message}
        type={InputType.TEXT}
        label={'Name'}
        required
        register={register}
      />
      <FormField
        name={'price'}
        error={errors?.price?.message}
        type={InputType.NUMBER}
        label={'Price'}
        required
        register={register}
      />

      {responseError && (
        <Alert className={'mt-[2.063rem]'} text={responseError} />
      )}

      <div className="mt-8 gap-4 flex justify-end">
        <button type="submit" className="btn-blue">
          Save
        </button>
        <button type="button" className="btn-blue-outline" onClick={onSuccess}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EventForm;
