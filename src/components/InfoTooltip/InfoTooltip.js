import React from 'react';
import success from '../../images/successauth.svg';
import error from '../../images/errorauth.svg';
import './InfoTooltip.css';

function InfoTooltip({isOpen,result, onClose}) {
    const opened = isOpen ? "popup_opened" : "";
    const title = result === 'success' ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.';

    return (
        <section className={`popup ${opened}`}>
            <form className="popup__container" name="popup-tooltip">
                <button className="popup__close" onClick = {onClose} type="button"></button>
                <img className="popup__image" src={result === 'success' ? success : error} alt="info"/>
                <h2 className="popup__header">{title}</h2>
            </form>
        </section>
    );
  }
  
  export default InfoTooltip;