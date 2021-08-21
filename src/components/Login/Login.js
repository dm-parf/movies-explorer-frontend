import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/header-logo.svg';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    if (!this.state.email || !this.state.password){
      return;
    }
    this.props.onLogin(this.state.password,this.state.email);
  }
  render(){
    return(
          <div className="auth">
          <Link to="/" className="auth__link">
            <img src = {logo} alt="Логотип Россия" className="auth__logo"/>
          </Link>
          <p className="auth__header">Рады видеть!</p>
          <form onSubmit={this.handleSubmit} className="auth__form">
            <p className="auth__input-header">E-mail</p>
            <input className="auth__input" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            <p className="auth__input-header">Пароль</p>
            <input className="auth__input" id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
            <button type="submit" className="auth__submit">Войти</button>
          </form>
          <div className="auth__signin">
            <p className="auth__login-caption">Ещё не зарегистрированы?</p>
            <Link to="signup" className="auth__login-link">Регистрация</Link>
          </div>
        </div>
    )
  }
}

export default withRouter(Login);