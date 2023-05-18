import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './login.css';

const LoginPage = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <div className="form-toggle">
          <button onClick={toggleForm}>{isLoginFormVisible ? 'Sign Up' : 'Log In'}</button>
        </div>
        <CSSTransition
          in={isLoginFormVisible}
          timeout={300}
          classNames="form"
          unmountOnExit
        >
          <LoginForm />
        </CSSTransition>
        <CSSTransition
          in={!isLoginFormVisible}
          timeout={300}
          classNames="form"
          unmountOnExit
        >
          <SignupForm />
        </CSSTransition>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Log In</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  );
};

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup form submission
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default LoginPage;

