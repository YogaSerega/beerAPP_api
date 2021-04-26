/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import BeerCard from '../BeerCard/BeerCard';
import './BeerList.css';
const Index = (props) => {
  const { beerList } = props;
  return (
    <div>
      <div className='wrapListBeer'>
        {beerList.map((beer, idx) => {
          return (
            <section className='wrapCard' key={idx}>
              {BeerCard(beer)}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
