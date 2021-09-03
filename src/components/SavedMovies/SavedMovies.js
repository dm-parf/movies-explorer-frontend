import './SavedMovies.css';
import {React} from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function SavedMovies({cards, filterSaved, handleShorts, onCardDelete}){



    return (
        <main className="movies-section">
        <SearchForm isLoading ={false} onSubmitSearch={filterSaved} handleShorts ={handleShorts}/>
            <MoviesCardList cards= {cards} isSaved={true} onCardDelete={onCardDelete}/>
        </main>
    );
}

export default SavedMovies;