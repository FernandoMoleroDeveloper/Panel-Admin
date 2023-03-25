import './CreateUser.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

const API_URL = process.env.REACT_APP_API_URL;

const CreateUser = () => {
  // Uses
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  //  Funciones
  const onSubmit = (data) => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => (response.ok ? response.json() : console.log('Network response problem')))
      .then(navigate('/user'))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className='register-form'>
      <h3>
        <FormattedMessage id='createUserPage:title' />
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='register-form__fieldset'>
          <span>
            <FormattedMessage id='createUserPage:name' />
          </span>
          <input type='text' placeholder={formatMessage({ id: 'createUserPage:name' })} {...register('name', { required: true })} />
          {errors?.name && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage:required' />
            </p>
          )}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <span>
            <FormattedMessage id='createUserPage:username' />
          </span>
          <input type='text' placeholder={formatMessage({ id: 'createUserPage:username' })} {...register('user', { required: true })} />
          {errors?.user && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage:required' />
            </p>
          )}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <span>
            <FormattedMessage id='createUserPage:email' />
          </span>
          <input type='text' placeholder={formatMessage({ id: 'createUserPage:email' })} {...register('email', { required: true })} />
          {errors?.email && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage:required' />
            </p>
          )}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <span>
            <FormattedMessage id='createUserPage:phone' />
          </span>
          <input type='text' placeholder={formatMessage({ id: 'createUserPage:phone' })} {...register('phone', { required: true })} />
          {errors?.phone && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage:required' />
            </p>
          )}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <span>
            <FormattedMessage id='createUserPage:website' />
          </span>
          <input type='text' placeholder={formatMessage({ id: 'createUserPage:website' })} {...register('website', { required: true })} />
          {errors?.website && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage:error' />
            </p>
          )}
        </fieldset>
        <button type='submit'>
          <FormattedMessage id='createUserPage:submitButton' />
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
