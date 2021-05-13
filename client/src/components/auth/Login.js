import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    var form = e.target;

    if (!form.checkValidity()) {
      e.stopPropagation();
    } else {
      login({ email, password });
    }
    form.classList.add('was-validated');
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className='login-form g-3 m-3'>
        <h1 className='mt-5 mb-4'>
          Account <span className='text-primary'>Login</span>
        </h1>
        <form
          className='row g-3 needs-validation'
          onSubmit={onSubmit}
          noValidate
        >
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
              required
            />
            <div id='passwordInValidFeedback' className='invalid-feedback'>
              Please fill in a password.
            </div>
          </div>
          <div className='col-12 d-grid gap-2 mt-4'>
            <input type='submit' value='Login' className='btn btn-primary' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
