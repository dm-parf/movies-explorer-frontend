import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import * as validation from '../../utils/FormValidation';

function Register({onRegister}){

  const inputData = validation.useFormWithValidation('')

  function handleSubmit(e) {
      e.preventDefault();
      onRegister(
        inputData.values.name,
        inputData.values.password,
        inputData.values.email
      );
    }

    return(
      <div className="auth">
        <Link to="/" className="auth__link">
          <img src = {logo} alt="Логотип Россия" className="auth__logo"/>
        </Link>
        <p className="auth__header">Добро пожаловать!</p>
        <form onSubmit={handleSubmit} className="auth__form">
          <label className="auth__field"> 
            <p className="auth__input-header">Имя</p>
            <input 
              title="Поле может содержать только латиницу, кириллицу, пробел или дефис"
              pattern='^[\-a-zA-ZА-Яа-яЁё\s]+$'
              required
              className="auth__input"
              name="name"
              onChange={e => inputData.handleChange(e)}
            />
            {(!inputData.isValid) && <span className="auth__input-error">{inputData.errors.name}</span>}
          </label>
          <label className="auth__field"> 
            <p className="auth__input-header">E-mail</p>
            <input required className="auth__input" id="email" name="email" type="email"  value={inputData.value} onChange={e => inputData.handleChange(e)} />
            {(!inputData.isValid) && <span className="auth__input-error">{inputData.errors.email}</span>}
          </label>
          <label className="auth__field"> 
            <p className="auth__input-header">Пароль</p>
            <input required minLength="3" className="auth__input" id="password" name="password" type="password" onChange={e => inputData.handleChange(e)} />
            {(!inputData.isValid) && <span className="auth__input-error">{inputData.errors.password}</span>}
          </label>
          <button disabled={!inputData.isValid } type="submit" className="auth__submit">Зарегистрироваться</button>
        </form>
        <div className="auth__signin">
          <p className="auth__login-caption">Уже зарегистрированы?</p>
          <Link to="signin" className="auth__login-link">Войти</Link>
        </div>
    </div>
);
}

export default withRouter(Register);