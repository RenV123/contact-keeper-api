import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    var form = e.target;

    if (password !== password2) {
      e.stopPropagation();
      setAlert("Passwords don't match!", 'danger');
    }

    if (!form.checkValidity()) {
      e.stopPropagation();
    } else {
      console.log('Register submit');
    }
    form.classList.add('was-validated');
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className='login-form g-3 m-3'>
        <h1 className='mt-5 mb-4'>
          Account <span className='text-primary'>Register</span>
        </h1>
        <form
          className='row g-3 needs-validation'
          onSubmit={onSubmit}
          noValidate
        >
          <div className='col-12'>
            <label htmlFor='inputName' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='inputName'
              name='name'
              value={name}
              aria-describedby='nameInValidFeedback'
              onChange={onChange}
              required
            />
            <div id='nameInValidFeedback' className='invalid-feedback'>
              Please fill in a name.
            </div>
          </div>
          <div className='col-12'>
            <label htmlFor='inputEmail' className='form-label'>
              Email Address
            </label>
            <input
              type='email'
              className='form-control'
              id='inputEmail'
              name='email'
              value={email}
              aria-describedby='emailInValidFeedback'
              onChange={onChange}
              required
            />
            <div id='emailInValidFeedback' className='invalid-feedback'>
              Please fill in a valid email address.
            </div>
          </div>
          <div className='col-12'>
            <label htmlFor='inputPassword' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='inputPassword'
              name='password'
              value={password}
              aria-describedby='passwordInValidFeedback'
              onChange={onChange}
              minLength='6'
              required
            />
            <div id='passwordInValidFeedback' className='invalid-feedback'>
              Please fill in a password of 6 or more characters.
            </div>
          </div>
          <div className='col-12'>
            <label htmlFor='inputPassword2' className='form-label'>
              Confirm password
            </label>
            <input
              type='password'
              className='form-control'
              id='inputPassword2'
              name='password2'
              value={password2}
              aria-describedby='password2InValidFeedback'
              onChange={onChange}
              minLength='6'
              required
            />
            <div id='password2InValidFeedback' className='invalid-feedback'>
              The password doesn't match.
            </div>
          </div>
          <div className='col-12 d-grid gap-2 mt-4'>
            <input type='submit' value='Register' className='btn btn-primary' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
