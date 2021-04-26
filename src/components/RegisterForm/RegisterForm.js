
/* eslint-disable react/prop-types */

import React from 'react';
import './/RegisterForm.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import * as Constants from '../../Constants'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(Constants.NameMinChar, 'Too Short!')
    .max(Constants.NameMaxChar, 'Too Long!')
    .required('Required'),

  birthDate: Yup.string()
  .required('Required!'),
  
  email: Yup.string()
  .email('Invalid email')
  .required('Required'),
  
  password: Yup.string()
  .min(Constants.PasswordMinLength, 'Too Short!')
  .required('Required'),
});
const onHeaderClick = (event) => {
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
  event.preventDefault();
};

const RegisterForm = (props) => {
  const { isVisible, onCloseClicked } = props;
  if (!isVisible) {
    return null;
  }
  

  const onBackgroundClicked = () => {
    onCloseClicked()
  }

  return (
    <div className='form-background' onClick={onBackgroundClicked}>
      <div className='form' onClick={onHeaderClick}>
        <div className='btnClose'>
          <button onClick={onCloseClicked}>X</button>
        </div>

        <Formik
          initialValues={{ name: '', email: '', birthDate: '', password: '' }}
          validationSchema={SignupSchema}
          validateOnBlur
        >
          {({
            errors,
            touched,
            isValid,
            dirty,
            values,
            handleChange,
            handleBlur,
          }) => (
            <Form>
              <div className='form-group'>
                <label htmlFor='name'>Ф.И.О</label>
                <Field
                  name='name'
                  type='text'
                  className='form-control'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name ? (
                  <div className='text-danger'>{errors.name}</div>
                ) : null}
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Адрес почты</label>
                <Field
                  name='email'
                  type='email'
                  className='form-control'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <div className='text-danger'>{errors.email}</div>
                ) : null}
              </div>

              <div className='form-group'>
                <label htmlFor='birthDate'>Дата рождения</label>
                <Field name='birthDate' type='date' className='form-control' />
                {errors.birthDate && touched.birthDate ? (
                  <div className='text-danger'>{errors.birthDate}</div>
                ) : null}
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Пароль</label>
                <Field
                  name='password'
                  type='password'
                  className='form-control'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <div className='text-danger'>{errors.password}</div>
                ) : null}
              </div>

              <button
                className='btn'
                disabled={!isValid || !dirty }
                onClick={onCloseClicked}
                type='submit'
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
