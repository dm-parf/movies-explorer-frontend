import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import searchlogo from '../../images/search-icon.svg';

function SearchForm(){
    return (
        <>
        <form className="search__zone">
            <div className="search__all">
                <img className="search__image" src={searchlogo} alt='search'/>
                <input className="search__input" required="true" placeholder="Фильм"></input>
                <button  type="submit" className="search__button"></button> 
            </div>
            <div className="search__shorts">
                <hr className="search__verticla-line"></hr>
                <FilterCheckbox></FilterCheckbox>
                <p className="search__label">Короткометражки</p>
            </div>
        </form>
        <hr className="search__line"></hr>
    </>
    );
}

export default SearchForm;