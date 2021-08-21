import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import searchlogo from '../../images/search-icon.svg';

function SearchForm(){
    return (
        <>
        <div className="search__zone">
            <div className="search__all">
                <img className="search__image" src={searchlogo} alt='search'/>
                <input className="search__input"  placeholder="Фильм"></input>
                <button className="search__button"></button> 
            </div>
            <div className="search__shorts">
                <hr className="search__verticla-line"></hr>
                <FilterCheckbox></FilterCheckbox>
                <p className="search__label">Короткометражки</p>
            </div>
        </div>
        <hr className="search__line"></hr>
    </>
    );
}

export default SearchForm;