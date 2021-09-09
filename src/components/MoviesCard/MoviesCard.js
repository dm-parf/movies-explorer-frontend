import './MoviesCard.css';
import React from 'react';
const moviesImgUrl = process.env.REACT_APP_MOVIES_IMG_URL;

function MoviesCard({card, isSaved,  onCardLike, onCardDelete}) {

    function handleLikeClick() {
        onCardLike(card);
       }
    function handleDeleteClick() {
        onCardDelete(card);
       }

    function pad2(num) {
        var s = num.toString();
        return (s.length < 2) ? "0" + s : s;
    }
    
    function toHours()
    {
        const h = Math.floor(card.duration / 60);
        let m = card.duration  % 60;
        return  pad2(h) + "ч" + pad2(m) + "м";
    }

    return (
        <li className="movies__block">
            <img onClick = {event =>  window.open(card.trailerLink, '_blank' )} className="movies__image" src={isSaved ? card.image :  moviesImgUrl + card.image.url} alt={card.nameEN}/>
            <div className="movies__label">
                <div className="movies__info-group">
                    <h2 className="movies__name">{card.nameRU}</h2>
                    {!isSaved 
                        ? 
                        <button onClick = {handleLikeClick} className={card.liked ? "movies__button movies__button_type_active" : "movies__button"} type="button"></button> 
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