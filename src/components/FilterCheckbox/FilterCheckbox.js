import './FilterCheckbox.css';
import React, { useState } from 'react';

function FilterCheckbox(){

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

    return (
        <>
        <div className={isActive ? 'filter-btn switch-on': 'filter-btn'} onClick={toggleClass}></div>
    </>
    );
}

export default FilterCheckbox;