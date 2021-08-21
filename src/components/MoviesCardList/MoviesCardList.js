import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function MoviesCardList(
     {cards,
     isSaved}
    // onCardLike, 
    // onCardDelete,
    // onCardClick,
    // onEditProfile, 
    // onAddPlace,
    // onEditAvatar
    ) {
    
 
    // const currentUser = React.useContext(CurrentUserContext);    

    return (
        <>
            <main className="content">
                <section className="movies">
                    <ul className="moviescard__list">
                        {
                        cards.cards.map((card) => (
                            <MoviesCard
                                key={card._id}
                                card={card}
                                isSaved = {isSaved}
                                // onCardClick={onCardClick}
                                // onCardLike={onCardLike}
                            />)
                            )
                            }
                    </ul>
                    {isSaved ? null : <button className="movies__more">Ещё</button>}
                </section>
            </main>
        </>
    );
}

export default MoviesCardList;