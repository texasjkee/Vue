import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { errorMessages } from '@/common/const';
import { EventFormTypes } from './CreateEvent/EventForm';

export const eventValidSchema: ObjectSchema<EventFormTypes> =
  Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .max(40)
      .required(errorMessages.name.required),
    date: Yup.date().required(errorMessages.dateTime.required),
    price: Yup.number()
      .required()
      .typeError(errorMessages.price.isNumber)
      .test(
        'Is positive?',
        errorMessages.price.isBigger,
        (value) => value > 100
      )
      .required(errorMessages.price.required),
  });
