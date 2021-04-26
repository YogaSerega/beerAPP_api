/* eslint-disable react/prop-types */

import React from 'react';
import './/RegisterBtn.css';

const RegisterBtn = (props) => {
  const { buttonClicked } = props
  return (
    <div>
      <div className='wrapbtnImg'>
        <button className='btnImg' onClick={buttonClicked}>
          <img
            className='imgKey'
            src='https://www.flaticon.com/svg/vstatic/svg/3659/3659724.svg?token=exp=1619297728~hmac=61601a082ac94de84b78e92cc783b815'
            alt=''
          />{' '}
        </button>
      </div>
    </div>
  );
};

export default RegisterBtn;
