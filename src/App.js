import { useState, useEffect } from 'react';
import axios from 'axios';

import Toolbar from './components/Toolbar/Toolbar';
import Content from './components/Content/Content';

import './App.css';

function App() {
  const [flights, setFlights] = useState();
  useEffect(() => {
    axios.get('data/flights.json')
    .then(res => {
        setFlights(res.data.result)
    })
    .catch(err => console.log(err))
  }, [])

  let flightsList;
  if(flights) {
    flightsList = flights.flights;
  }
 
  const [sortType, setSortType] = useState('');
  const [filterType, setFilterType] = useState('');
  const [priceLow, setPriceLow] = useState(0);
  const [priceHigh, setPriceHigh] = useState();

  return (
    <div className="app">
      <Toolbar setSortType={setSortType} setFilterType={setFilterType} setPriceLow={setPriceLow} setPriceHigh={setPriceHigh} priceLow={priceLow} priceHigh={priceHigh}/>
      <Content flightsList={flightsList} sortType={sortType} filterType={filterType} priceLow={priceLow} priceHigh={priceHigh}/>
    </div>
  );
}

export default App;
