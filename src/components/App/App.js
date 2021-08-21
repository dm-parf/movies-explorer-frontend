import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as auth from '../../utils/auth';
//import api from '../utils/api';



import React, { useState, useEffect } from 'react';
import {Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import ProtectedRoute from "../ProtectedRoute";


function App() {

  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [email, setEmail] = useState('');
  const [cards, setCards] = useState([]);
  const [isActive, setActive] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false); 
  const [infoTooltipResult, setinfoTooltipResult] = useState('');

  useEffect(() => {
      
      setCards([
        {_id:1,
          'link':'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
          'name':'first',
          'duration':6800,
          likes: [],
        },
        {_id:2,
          'link':'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
          'name':'second',
          'duration':1200,
          likes: [],
        }
        ,
        {_id:3,
          'link':'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
          'name':'third',
          'duration':3120,
          likes: [],
        }
        ,
        {_id:4,
          'link':'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
          'name':'fourth',
          'duration':3200,
          likes: [],
        }
        ,
        {_id:5,
          'link':'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
          'name':'fith',
          'duration':120,
          likes: [],
        }
        ]
        );

      // const tokenCheck = () => {
      //   auth.checkToken().then((res) => {
      //     if (res){
      //       setEmail(res.email);
      //       setLoggedIn(true);
      //       history.push("/main");
      //     //  fillPage();
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // }
      // tokenCheck();

  }, [history])


  function handleRegister(password, email){
    auth.register(password, email).then((res) => {
        // setinfoTooltipResult('success');
        // setInfoTooltipOpen(true);
        handleLogin(password, email);
    })
    .catch((err) => {
      console.log(err);
      // setinfoTooltipResult('error');
      // setInfoTooltipOpen(true);
    });
  }

  function handleLogin(password, email){
    auth.authorize(password, email)
    .then((data) => {
        setEmail(email);
        setLoggedIn(true);
        history.push("/main");
        // fillPage();
    })
    .catch(err => console.log(err)); 
  }

  function handleSignOut(){
    setLoggedIn(false);
    auth.logout()
    .then(function(response) {
      if (response.redirected) {
        return window.location.replace(response.url);
      }
    }).catch(function(err) {
      console.log(err);
    });
    history.push('/sign-in');
  }

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
  }

  function showHeader(location)
  {
    return location ==='/signup' || location ==='/signin' || location ==='/notfound' ? false : true
  }

  function showFooter(location)
  {
    return location ==='/signup' || location ==='/signin' || location ==='/profile' || location ==='/notfound' ? false : true
  }

  

  const toggleClass = () => {
      setActive(!isActive);
  };

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className={isActive ? 'page page_lock': 'page'}>
      {
        showHeader(location.pathname) ? <Header email = {email} loggedIn={loggedIn} isActive={isActive} toggleClass={toggleClass}/>:null
      }
      <Switch>
        {/* <ProtectedRoute 
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          // cards={cards}
          // onCardLike={handleCardLike}
          // onCardDelete={handleCardDelete}
          // onCardClick={handleCardClick}
          // onEditProfile={handleEditProfileClick}
          // onAddPlace={handleAddPlaceClick}
          // onEditAvatar={handleEditAvatarClick}
        /> */}
        <Route path="/movies">
          <Movies cards = {cards}/>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies cards = {cards}/>
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/notfound">
          <NotFound  />
        </Route>
        <Route exact path="/">
          <Main />
        </Route> 
      </Switch>
      {
        showFooter(location.pathname) ? <Footer/>:null
      }
      <InfoTooltip isOpen={isInfoTooltipOpen} result = {infoTooltipResult} onClose={closeInfoTooltip} />
    </div>
  </CurrentUserContext.Provider>
);


  
}

export default App;
