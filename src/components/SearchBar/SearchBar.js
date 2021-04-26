/* eslint-disable react/prop-types */

import React from 'react';
import  './SearchBar.css';

const SearchBar = (props) => {
   const {  handleChange } = props;
return (
<div className="searchBar">
<input className='searchInput' type="text" placeholder='Search...' onChange={handleChange}/>
</div>  
)
}

export default SearchBar;