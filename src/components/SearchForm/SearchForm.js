import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import searchlogo from '../../images/search-icon.svg';
import React, { useState } from 'react';

function SearchForm({onSubmitSearch, handleShorts}){

    const [searchParam, setsearchParam] = useState('');

    function handleParamChange(e) {
        setsearchParam(e.target.value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmitSearch(searchParam);
      }

    return (
        <>
        <form className="search__zone" onSubmit = {handleSubmit}>
            <div className="search__all">
                <img className="search__image" src={searchlogo} alt='search'/>
                <input className="search__input" required={true} value={searchParam} onChange={handleParamChange} placeholder="Фильм"></input>
                <button  type="submit" className="search__button"></button> 
            </div>
            <div className="search__shorts">
                <hr className="search__verticla-line"></hr>
                <FilterCheckbox handleShorts={handleShorts}></FilterCheckbox>
                <p className="search__label">Короткометражки</p>
            </div>
        </form>
        <hr className="search__line"></hr>
    </>
    );
}

export default SearchForm;