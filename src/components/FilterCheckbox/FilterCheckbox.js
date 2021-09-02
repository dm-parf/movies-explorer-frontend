import './FilterCheckbox.css';
import React, { useState } from 'react';

function FilterCheckbox({handleShorts}){

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    handleShorts(!isActive);
  };

    return (
        <>
        <div className={isActive ? 'filter-btn switch-on': 'filter-btn'} onClick={toggleClass}></div>
    </>
    );
}

export default FilterCheckbox;