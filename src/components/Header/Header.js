import './Header.css';
import {React, useContext} from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Header({isActive, toggleClass}){
    const location = useLocation();
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
    const logged = location.pathname !== `/` ? "header_dark" : "";
    const underline = (realLocation) => {
        return location.pathname ===  realLocation ? "header__link_underline" : "";
     }

    return (
        <header className={`header ${logged}`}>
            <Link to="/" className="link header__link">
                <img src = {logo} alt="Логотип Россия" className="header__logo"/>
            </Link>
            <div className="header__nav">
                {
                Object.keys(currentUser).length !== 0
                ?
                <div className= "header__buttons-zone">
                    <div className={isActive ? 'header__menu-icon header__menu-icon_active': 'header__menu-icon'} onClick={toggleClass}>
                        <span></span>
                    </div>
                    <div className={isActive ? 'header__menu header__menu_active': 'header__menu'}>
                        <div className= "header__movies-zone">
                            <Link to="/" onClick={toggleClass} className={`link header__link header__link-movies header__link_main ${underline(`/`)}`}>Главная</Link> 
                            <Link to="movies" onClick={toggleClass} className={`link header__link header__link-movies ${underline(`/movies`)}`}>Фильмы</Link> 
                            <Link to="saved-movies" onClick={toggleClass} className={`link header__link  header__link-movies header__link_type_saved ${underline(`/saved-movies`)}`}>Сохраненные фильмы</Link>
                        </div>
                        <div className= "header__exit-zone">
                            <p className= "header__email">{currentUser.email}</p>
                            <Link to="profile" onClick={toggleClass} className="header__profile"></Link> 
                        </div>
                    </div>
                </div>
                :
                <div className= "header__enter-zone">
                    <Link to="signup" className="link header__link header__link_type_signup">Регистрация</Link> 
                    <Link to="signin" className="link header__link header__link_type_signin">Войти</Link>
                </div>              
                }
            </div>
        </header>
    );
}

export default Header;