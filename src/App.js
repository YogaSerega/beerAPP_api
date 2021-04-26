import React from 'react';
import BeerList from './components/BeerList/BeerList';
import Header from './components/Header/Header';
import RegisterForm from './components/RegisterForm/RegisterForm';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './index.css';
import * as Constants from './Constants'
function App() {
  const [beerList, setBeerList] = useState([]);
  const [beerData, setBeerData] = useState([]);
  const [registerFormVisible, setRegisterFormVisible] = useState(false);
  
  const getBeers = () => {
    axios
      .get(Constants.BASE_URL)
      .then((res) => {
        setBeerData(res.data);
        setBeerList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onSearchChange = (e) => {
    const searchTerm = e.target.value;
    const filterBeerList = beerData.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBeerList(filterBeerList);
  };

  const sortAbvClick = () => {
    let sortBeerList = [
      ...beerData.sort(function (a, b) {
        return a.abv - b.abv;
      }),
    ];
    if (beerList[0].abv < beerList[beerList.length - 1].abv) {
      setBeerList(sortBeerList.reverse());
    }
    if (beerList[0].abv > beerList[beerList.length - 1].abv) {
      setBeerList(sortBeerList);
    }
  };

  const registerButtonClicked = () => {
    setRegisterFormVisible(true)
  }
  const closeRegisterClicked = () => {
    setRegisterFormVisible(false)
  }

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className='wrapperApp'>
      <div className='header'>
        <Header onTextChange={onSearchChange} 
                onSortByClick={sortAbvClick} 
                registerButtonClicked={registerButtonClicked}/>
      </div>
      <RegisterForm isVisible={registerFormVisible} onCloseClicked={closeRegisterClicked}/>
      <BeerList beerList={beerList} />
    </div>
  );
}
export default App;
