import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/header-logo.svg';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state.name, this.state.password, this.state.email);
  }

  render(){
    return (
        <div className="auth">
          <Link to="/" className="auth__link">
            <img src = {logo} alt="Логотип Россия" className="auth__logo"/>
          </Link>
          <p className="auth__header">Добро пожаловать!</p>
          <form onSubmit={this.handleSubmit} className="auth__form">
            <p className="auth__input-header">Имя</p>
            <input className="auth__input" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
            <p className="auth__input-header">E-mail</p>
            <input className="auth__input" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            <p className="auth__input-header">Пароль</p>
            <input className="auth__input" id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
            <button type="submit" className="auth__submit">Зарегистрироваться</button>
          </form>
          <div className="auth__signin">
            <p className="auth__login-caption">Уже зарегистрированы?</p>
            <Link to="signin" className="auth__login-link">Войти</Link>
          </div>
        </div>
  );
  }

}

export default withRouter(Register);