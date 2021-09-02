import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import * as validation from '../../utils/FormValidation';

function Login({onLogin}){

  const inputData = validation.useFormWithValidation('')

  function handleSubmit(e) {
      e.preventDefault();
      onLogin(
        inputData.values.password,
        inputData.values.email
      );
    }

    return(
      <div className="auth">
      <Link to="/" className="auth__link">
        <img src = {logo} alt="Логотип Россия" className="auth__logo"/>
      </Link>
      <p className="auth__header">Рады видеть!</p>
      <form onSubmit={handleSubmit} className="auth__form">
      <label className="auth__field"> 
        <p className="auth__input-header">E-mail</p>
        <input required className="auth__input" id="email" name="email" type="email" onChange={e => inputData.handleChange(e)} />
        {(!inputData.isValid) && <span className="auth__input-error">{inputData.errors.email}</span>}
      </label>
      <label className="auth__field"> 
        <p className="auth__input-header">Пароль</p>
        <input  required minLength="3" className="auth__input" id="password" name="password" type="password" onChange={e => inputData.handleChange(e)} />
        {(!inputData.isValid) && <span className="auth__input-error">{inputData.errors.password}</span>}
      </label>
         <button disabled={!inputData.isValid } type="submit" className="auth__submit">Войти</button>
      </form>
      <div className="auth__signin">
        <p className="auth__login-caption">Ещё не зарегистрированы?</p>
        <Link to="signup" className="auth__login-link">Регистрация</Link>
      </div>
    </div>
);
}

export default withRouter(Login);

