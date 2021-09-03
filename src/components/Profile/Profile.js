import './Profile.css';
import {React, useEffect, useContext} from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as validation from '../../utils/FormValidation';


function Profile({onUpdateUser, onSignOut}){

  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const inputData = validation.useFormWithValidation('')
  const n = 'name'
  const em = 'email'


  useEffect(() => {
      inputData.resetForm();
      inputData.setValues({[n]: currentUser.name, [em]: currentUser.email});
    }, [currentUser]);



  function locHandleSubmit(e) {
      e.preventDefault();
     
      onUpdateUser({
        name: inputData.values.name,
        email: inputData.values.email,
      });
    }


    return (
        <div className="auth">
          <p className="profile__header">Привет, {currentUser.name}</p>
          <form onSubmit={locHandleSubmit} className="auth__form">
            <label className="auth__field profile__field"> 
              <div className="profile__input-zone">
                <p className="profile__input-header">Имя</p>
                <input 
                  title="Поле может содержать только латиницу, кириллицу, пробел или дефис" 
                  required
                  pattern='^[\-a-zA-ZА-Яа-яЁё\s]+$'
                  className="profile__input"
                  name="name"
                  value={inputData.values.name || ''}
                  onChange={e => inputData.handleChange(e)} 
                />
              </div>
              {(!inputData.isValid) && <span className="auth__input-error profile__error">{inputData.errors.name}</span>}
            </label>
            <hr className="profile__line"></hr>
            <label className="auth__field">
              <div className="profile__input-zone">
                <p className="profile__input-header">E-mail</p>
                <input
                  required
                  className="profile__input"
                  name="email"
                  type="email"
                  value={inputData.values.email || ''}
                  onChange={e => inputData.handleChange(e)}
                />
              </div>
              {(!inputData.isValid) && <span className="auth__input-error  profile__error">{inputData.errors.email}</span>}
            </label>
            <button disabled={!inputData.isValid || (inputData.values.name === currentUser.name && inputData.values.email === currentUser.email)} type="submit" className="auth__submit profile__submit">Редактировать</button>
            <button onClick={onSignOut} className="profile__exit">Выйти из аккаунта</button>
          </form>
        </div>
    );
}

export default Profile;