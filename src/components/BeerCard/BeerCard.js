/* eslint-disable react/prop-types */
import React from 'react';
import './BeerCard.css';

// import DefaultBeer from '../../images/defaultBeer.jpg';

const BeerCard = (props) => {
  return (
    <div className='card'>
      <div className='wrapImgName'>
        <img src={props.image_url} alt='beer' />
        <div className='beerName'>
          <h4>{props.name}</h4>
        </div>
      </div>
      <div className='wrapH'>
        <div className='abv'>
          <h5>{`ABV - ${props.abv}% `}</h5>
        </div>
        <div className='ibu'>
          <h5>{`IBU - ${props.ibu ? props.ibu : '-'} `}</h5>
        </div>
        <div className='tagLine'>
          <h5>{props.tagline}</h5>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
