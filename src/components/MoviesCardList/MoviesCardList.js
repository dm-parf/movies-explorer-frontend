import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function MoviesCardList({cards, isSaved, showMore, showMoreHandler, onCardLike, onCardDelete}

    ) {
            return (
                    <main className="content">
                        <section className="movies">
                            { Object.keys(cards).length > 0 ?
                                <ul className="moviescard__list">
                                    {cards.map((card) => (
                                        <MoviesCard
                                            key= {isSaved ? card._id : card.id }
                                            card={card}
                                            isSaved = {isSaved}
                                            onCardLike={onCardLike}
                                            onCardDelete={onCardDelete}
                                        />)
                                    )}
                                </ul>
                                : 
                                <p className="moviescard__empty">{isSaved ? 'Нет сохраненных фильмов' : 'Ничего не найдено'}</p>
                            }
                            {showMore ? <button onClick={showMoreHandler} className="movies__more">Ещё</button> : null}
                        </section>
                    </main>
            );
        }

export default MoviesCardList;