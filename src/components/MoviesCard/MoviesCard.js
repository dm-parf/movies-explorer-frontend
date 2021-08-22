import './MoviesCard.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard({card, isSaved, onCardClick, onCardLike,onCardDelete}) {

    function handleClick() {
       onCardClick(card.link,card.name);
      }
    function handleLikeClick() {
        onCardLike(card);
       }
    function handleDeleteClick() {
        onCardDelete(card);
       }
    const currentUser = React.useContext(CurrentUserContext);

    const isMyLike =  card.likes.some(elem => elem === currentUser._id)

    function pad2(num) {
        var s = num.toString();
        return (s.length < 2) ? "0" + s : s;
    }
    
    function toHours(seconds)
    {
        let m = Math.floor(card.duration / 60);
        const h = Math.floor(m / 60);
        m = m % 60;
        return  pad2(h) + "ч" + pad2(m) + "м";
    }

    return (
        <li className="movies__block">
            <img onClick = {handleClick} className="movies__image" src={card.link} alt={card.name}/>
            <div className="movies__label">
                <div className="movies__info-group">
                    <h2 className="movies__name">{card.name}</h2>
                    {!isSaved 
                        ? 
                        <button onClick = {handleLikeClick} className={!isMyLike ? "movies__button" : "movies__button movies__button_type_active"} type="button"></button> 
                        :
                        <div onClick = {handleDeleteClick} className="movies__button_type_delete" type="button"></div> 
                    }
                    
                </div>
                <p className="movies__duration">{toHours(card.duration)}</p>
            </div>
        </li>
    );
  }
  
  export default MoviesCard;