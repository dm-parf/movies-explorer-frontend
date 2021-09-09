import React from 'react';
import success from '../../images/successauth.svg';
import error from '../../images/errorauth.svg';
import './InfoTooltip.css';

function InfoTooltip({isOpen,result, onClose}) {
    const opened = isOpen ? "popup_opened" : "";
    let title;
    switch (result) {
        case 'success':
          title = 'Вы успешно зарегистрировались!';
          break;
        case 'updated':
          title = 'Данные пользователя обновлены.';
          break;
        default:
            title = 'Что-то пошло не так! ' + result 
      }

    return (
        <section className={`popup ${opened}`}>
            <form className="popup__container" name="popup-tooltip">
                <button className="popup__close" onClick = {onClose} type="button"></button>
                <img className="popup__image" src={result === 'success' || result === 'updated' ? success : error} alt="info"/>
                <h2 className="popup__header">{title}</h2>
            </form>
        </section>
    );
  }
  
  export default InfoTooltip;