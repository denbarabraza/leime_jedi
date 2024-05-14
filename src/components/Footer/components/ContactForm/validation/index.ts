import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  message: yup.string().required('Message is required'),
});

export type ContactFormType = yup.InferType<typeof contactFormSchema>;
