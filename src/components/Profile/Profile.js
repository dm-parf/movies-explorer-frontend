import './Profile.css';
import {React, useState, useEffect } from 'react';

function Profile({handleChange, handleSubmit}){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    
    
    useEffect(() => {
        setName('Дмитрий');
    }, [])
    

    return (
        <>
        <div className="auth">
          <p className="profile__header">Привет, {name}</p>
          <form onSubmit={handleSubmit} className="auth__form">
              <div className="profile__input-zone">
                    <p className="profile__input-header">Имя</p>
                    <input className="profile__input" id="name" name="name" defaultValue={name} onChange={handleChange} />
              </div>
              <hr className="profile__line"></hr>
              <div className="profile__input-zone">
                <p className="profile__input-header">E-mail</p>
                <input className="profile__input" id="email" name="email" type="email" defaultValue={email} onChange={handleChange} />
              </div>
            <button type="submit" className="auth__submit profile__submit">Редактировать</button>
            <button type="submit" className="profile__exit">Выйти из аккаунта</button>
          </form>
        </div>
    </>
    );
}

export default Profile;