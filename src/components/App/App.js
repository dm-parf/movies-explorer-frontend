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
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';



import React, { useState, useEffect } from 'react';
import {Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute";
const { 
    shortFilm,
    screenS,
    cardsCountS,
    CardsInRowS,
    screenM,
    cardsCountM,
    CardsInRowM,
    screenL,
    cardsCountL,
    CardsInRowL,
    cardsCountXL,
    CardsInRowXL
  } = require('../../utils/constants');

function App() {

  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [cardsInRow, setCardsInRow] = useState(4);
  const [cardsCnt, setCardsCnt] = useState(4);
  const [cards, setCards] = useState([]);
  const [shorts, setShorts] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [succesLoad, setSucces] = useState(true);
  const [isActive, setActive] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false); 
  const [infoTooltipResult, setinfoTooltipResult] = useState('');

  useEffect(() => {
    const tokenCheck = () => {
      auth.checkToken().then((res) => { 
        setCurrentUser(res) 
        setLoggedIn(true);
        getSavedMovies(res);
        loadfromStorage();
        
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err)
      });
    }
    tokenCheck();
}, [history]);


  useEffect(() => {
    
          (function() {
            window.addEventListener("resize", resizeThrottler, false);
            var resizeTimeout;
            function resizeThrottler() {
              if ( !resizeTimeout ) {
                resizeTimeout = setTimeout(function() {
                  resizeTimeout = null;
                  actualResizeHandler();
                 }, 66);
              }
            }
          
            function actualResizeHandler() {
             loadfromStorage();
            }
          }());
  }, [])

  useEffect(() => {
    loadfromStorage();
  }, [shorts])

  function loadfromStorage(){
    if((localStorage.getItem('cards') !== null) && (localStorage.getItem('searchParam') !== null))
      {
        fillMovies(JSON.parse(localStorage.getItem("cards")), localStorage.getItem("searchParam"), false);
      }
  }

  useEffect(() => {
    setCards(likeCheck(cards))
  }, [savedCards])
  
  function cardsCount (screenW){
    let cnt = cardsCountXL;
    if (screenW < screenS) {
      cnt = cardsCountS;
      setCardsInRow(CardsInRowS);
    }
    else if (screenW >= screenS && screenW < screenM) {
      cnt = cardsCountM;
      setCardsInRow(CardsInRowM);
    }
    else if (screenW >= screenM && screenW < screenL) {
      cnt = cardsCountL;
      setCardsInRow(CardsInRowL);
    }
    else if (screenW >= screenL) {
      cnt = cardsCountXL;
      setCardsInRow(CardsInRowXL);
    }
    return cnt;
  }

  function showMoreVisible(all, cardsCnt){
    all > cardsCnt ? setShowMore(true) : setShowMore(false)
  }


  function likeCheck(resFilter){

    return resFilter.map(x => {
      
      savedCards.some(elem => elem.movieId === x.id) ?
        x.liked = true
      :
        x.liked = false;
      return x;
    });

    
  }

  function getMovies(searchParam, screenW) {
    localStorage.setItem("searchParam", searchParam);
    return new Promise((resolve, reject) => {
      if(!localStorage.getItem('cards'))
        {
          MoviesApi.getMovies().then((res) => {
            localStorage.setItem("cards", JSON.stringify(res));
            fillMovies(res, searchParam, false);
            resolve('ok');
          })
          .catch((err) => {
            setSucces(false);
            console.log(err)
            setinfoTooltipResult(err);
            setInfoTooltipOpen(true);
          });
        }
        else {
          fillMovies(JSON.parse(localStorage.getItem("cards")), searchParam, false);
          resolve('ok');
        } 
    })
  }

  function fillMovies(cards, searchParam, rowsAdd){
    let resFilter = cards.filter(function(card) {
      return card.nameRU.includes(searchParam)
    });
    if(shorts) {
      resFilter = resFilter.filter(function(card) {
        return card.duration < shortFilm
      });
    }
    resFilter = likeCheck(resFilter);
    let cardsCountValue;
    rowsAdd ?
     cardsCountValue = cardsCnt + cardsInRow
    :
    cardsCountValue = cardsCount(window.innerWidth);
    setCardsCnt(cardsCountValue);
    const resCut = resFilter.filter(function(item, index, array){return (index < cardsCountValue);})
    setCards(resCut);
    showMoreVisible(Object.keys(resFilter).length, cardsCountValue);
  }

  function showMoreHandler(){
    fillMovies(JSON.parse(localStorage.getItem("cards")), localStorage.getItem("searchParam"), true);
  }

  function handleShorts(active){
    setShorts(active);
  }

  function getSavedMovies(me){
    MainApi.getMovies().then((res) => {
      const resSavedFilter = res.filter(function(card) {
        return card.owner === me._id
      });
      setSavedCards(resSavedFilter);
      localStorage.setItem("savedCards", JSON.stringify(resSavedFilter));
    })
    .catch((err) => {
      setSucces(false);
      console.log(err)
      setinfoTooltipResult(err);
      setInfoTooltipOpen(true);
    });
  }

  function onCardLike(cardData){
      savedCards.some(elem => elem.movieId === cardData.id) 
      ?
        disLike(cardData)
      :
        MainApi.createMovie(cardData).then((result) => {
          setSavedCards([result, ...savedCards]);
          cardData.liked = true;
          setCards((state) => state.map((c) => c.id === cardData.id ? cardData : c));
        })
        .catch((err) => {
          console.log(err);
          setinfoTooltipResult(err);
          setInfoTooltipOpen(true);
        });  
  }

  function disLike(cardData){
    cardData.liked = false;
    setCards((state) => state.map((c) => c.id === cardData.id ? cardData : c));
    onCardDelete(savedCards.filter(function(card) {
      return card.movieId === cardData.id
    })[0])
  }

  function onCardDelete(cardData){
    MainApi.deleteMovie(cardData._id).then((result) => {
      setSavedCards((state) => state.filter((c) => c._id !== cardData._id));
    })
    .catch((err) => {
      console.log(err);
      setinfoTooltipResult(err);
      setInfoTooltipOpen(true);
    });
  }

  function filterSaved(searchParam){
    if((localStorage.getItem('savedCards') !== null))
      {
        let resFilter = JSON.parse(localStorage.getItem("savedCards"))
        resFilter = resFilter.filter(function(card) {
          return card.nameRU.includes(searchParam)
        });
        if(shorts) {
          resFilter = resFilter.filter(function(card) {
            return card.duration < shortFilm
          });
        }
        setSavedCards(resFilter);
      }
  }

  function handleRegister(name, password, email){
    auth.register(name, password, email).then((res) => {
        setinfoTooltipResult('success');
        setInfoTooltipOpen(true);
        handleLogin(password, email);
    })
    .catch((err) => {
      console.log(err);
      setinfoTooltipResult('error');
      setInfoTooltipOpen(true);
    });
  }

  function handleLogin(password, email){
    auth.authorize(password, email)
    .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
        history.push("/movies");
    })
    .catch(err => console.log(err)); 
  }

  function handleUpdateUser(userData) {
    console.log(userData)
    MainApi.updateProfile(userData).then((result) => {
      setCurrentUser(result);
      setinfoTooltipResult('updated');
      setInfoTooltipOpen(true);
    })
    .catch((err) => {
      console.log(err);
      setinfoTooltipResult('error');
      setInfoTooltipOpen(true);
    });
  }

  function handleSignOut(){
    auth.logout()
    .then(function(response) {
      if (response.redirected) {
        return window.location.replace(response.url);
      }
    }).catch(function(err) {
      console.log(err);
    });
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('cards');
    localStorage.removeItem('savedCards');
    localStorage.removeItem("searchParam")
    history.push('/');
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
  <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
    <div className={isActive ? 'page page_lock': 'page'}>
      {
        showHeader(location.pathname) ? <Header isActive={isActive} toggleClass={toggleClass}/>:null
      }
      <Switch>
        <ProtectedRoute 
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          cards = {cards}
          getMovies = {getMovies}
          succesLoad = {succesLoad}
          showMore = {showMore}
          showMoreHandler ={showMoreHandler}
          handleShorts={handleShorts}
          onCardLike={onCardLike}
        />
        <ProtectedRoute 
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          cards = {savedCards}
          filterSaved = {filterSaved}
          handleShorts={handleShorts}
          onCardDelete={onCardDelete}
        />
        <ProtectedRoute 
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          onUpdateUser={handleUpdateUser}
          onSignOut={handleSignOut}
        />
        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route>
          <NotFound path="*"/>
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
