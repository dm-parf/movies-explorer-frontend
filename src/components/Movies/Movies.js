import './Movies.css';
import {React, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';


function Main({
    cards,
    getMovies,
    succesLoad, 
    showMore, 
    showMoreHandler, 
    handleShorts, 
    onCardLike, 
    onCardDelete
    }){

    const [isLoading, setLoading] = useState(false);


    async function onSubmitSearch(searchParam){
      setLoading(true);
      getMovies(searchParam,window.innerWidth)
      .then(() => {
        setLoading(false);
      });
    }

    return (
        <>
        <main className="movies-section">
            <SearchForm onSubmitSearch={onSubmitSearch} handleShorts ={handleShorts}/>
            {localStorage.getItem('cards') !== null ? 
              isLoading ?
                <Preloader />  
                :   succesLoad ? <MoviesCardList cards= {cards} showMore={showMore} isSaved={false} showMoreHandler={showMoreHandler} onCardLike={onCardLike} onCardDelete={onCardDelete}/> 
                    : <p className="movies__err">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
              : null}
        </main>
    </>
    );

}

export default Main;