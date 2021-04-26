/* eslint-disable react/prop-types */
import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import SortBar from '../SortBar/SortBar';
import RegisterBtn from '../RegisterBtn/RegisterBtn';

const Header = (props) => {
  const { onTextChange, onSortByClick, registerButtonClicked } = props;
  return (
    <header className='header'>
      <div className='headText'>
        <h1>BEER</h1>
      </div>
      <SortBar switchSort={onSortByClick} />
      <SearchBar handleChange={onTextChange} />
      <RegisterBtn buttonClicked={registerButtonClicked}/>
    </header>
  );
};

export default Header;
