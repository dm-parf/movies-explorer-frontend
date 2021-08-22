import './Header.css';
import {React, useState, useEffect} from 'react';
import { Link, useHistory} from 'react-router-dom';
import logo from '../../images/header-logo.svg';


function Header({email, loggedIn, isActive, toggleClass}){

    email = 'test@ya.ru';
    const history = useHistory();
    const [locationUrl, setLocationUrl] = useState('sign-in');

    useEffect(() => {
        history.listen((location) => {
          setLocationUrl(location.pathname);
      })
      }, [history])

    const logged = loggedIn ? "header_dark" : "";
    const underline = (realLocation) => {
        return locationUrl ===  realLocation ? "header__link_underline" : "";
     }
        // page.classList.toggle("page_lock");
        // iconMenu.classList.toggle("header__menu-icon_active");
        // headerMenu.classList.toggle("header__menu_active");

    return (
        <header className={`header ${logged}`}>
            <Link to="/" className="link header__link">
                <img src = {logo} alt="Логотип Россия" className="header__logo"/>
            </Link>
            <div className="header__nav">
                {
                loggedIn
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
                            <p className= "header__email">{email}</p>
                            <Link to="profile" onClick={toggleClass} className="header__profile"></Link> 
                        </div>
                    </div>
                </div>
                :
                <div className= "header__exit-zone">
                    <Link to="signup" className="link header__link">Регистрация</Link> 
                    <Link to="signin" className="link header__link header__link_type_signin">Войти</Link>
                </div>              
                }
            </div>
        </header>
    );
}

export default Header;