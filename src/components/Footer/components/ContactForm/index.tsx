'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { buttonStyles, inputStyles } from './constants';
import { contactFormSchema, ContactFormType } from './validation';

import styles from './styles.module.scss';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormType> = data => {
    console.log('formData:', data);
    reset();
  };

  return (
    <div className={styles.contactFormBlock}>
      <h5 className={styles.contactFormBTitle}>CONTACT US</h5>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formItem}>
        <TextField
          id='Your Name'
          label='Your Name*:'
          {...register('name')}
          fullWidth
          margin='dense'
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={inputStyles}
          InputProps={{
            endAdornment: (
              <span className={styles.redSquare}>
                <span className={styles.circle} />
                <span className={styles.circle} />
                <span className={styles.circle} />
                <span className={styles.line} />
              </span>
            ),
          }}
        />
        <TextField
          id='Your Email'
          label='Your Email:'
          {...register('email')}
          fullWidth
          margin='dense'
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={inputStyles}
        />
        <TextField
          id='Message'
          label='Message:'
          {...register('message')}
          fullWidth
          margin='dense'
          multiline
          rows={4}
          error={!!errors.message}
          helperText={errors.message?.message}
          sx={inputStyles}
        />
        <Button type='submit' variant='contained' sx={buttonStyles}>
          Submit
        </Button>
      </form>
    </div>
  );
};
