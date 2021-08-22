import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Main(cards){

    return (
        <>
        <main className="movies-section">
            <SearchForm />
            <MoviesCardList cards= {cards} isSaved={false}/>
            {/* <Preloader />  */}
        </main>
    </>
    );
}

export default Main;