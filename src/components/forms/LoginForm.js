
import React from 'react';
import { useForm } from 'react-hook-form';

const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = ({onSubmit}) => {

  const { register, handleSubmit, errors } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          ref={register({required: true, pattern: EMAIL_PATTERN})}
          name="email"
          type="email"
          className="form-control"
          id="email" />
        { errors.email &&
          <div className="alert alert-danger"> 
            { errors.email.type === 'required' &&
              <span>Email is required!</span>
            }
            { errors.email.type === 'pattern' &&
              <span>Not valid email format!</span>
            }
          </div>
        }
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
          ref={register({required: true, minLength: 8})}
          name="password"
          type="password"
          className="form-control"
          id="password" />
        { errors.password &&
          <div className="alert alert-danger"> 
            { errors.password.type === 'required' &&
              <span>Password is required!</span>
            }
            { errors.password.type === 'minLength' &&
              <span>Minimum length of password is 8 characters!</span>
            }
          </div>
        }
      </div>
      <button 
        type="submit" 
        className="btn btn-bwm-main">Submit</button>
    </form>
  )
}

export default LoginForm;