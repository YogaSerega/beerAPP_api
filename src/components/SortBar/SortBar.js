/* eslint-disable react/prop-types */

import React from 'react';
import './/SortBar.css';

const SortBar = (props) => {
const {switchSort} = props

return (
  
<div className="wrapbtn">
    <button onClick={switchSort}
    className='btn'>&#8593; SORT ABV% &#8595;  </button>
</div>
  

  


)
}

export default SortBar;