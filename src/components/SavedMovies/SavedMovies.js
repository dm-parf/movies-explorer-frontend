import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(cards){

    return (
        <>
        <main className="movies-section">
            <SearchForm />
            <MoviesCardList cards= {cards} isSaved={true}/>
        </main>
    </>
    );
}

export default SavedMovies;