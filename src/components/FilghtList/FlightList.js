import React, { useState } from 'react'

import FlightItem from '../FlightItem/FlightItem'

import './FlightList.css'

const FlightList = ({flights, transfer}) => {
    const [arrayIndex, setArrayIndex] = useState(5);
    const [addFlights, setAddFlights] = useState([]);

    const length = flights.length;
    let slicedFlights = flights.slice(0, 5);
    
    const handleMore = () => {
        setAddFlights([...addFlights, ...flights.slice(arrayIndex, arrayIndex + 5)])
        setArrayIndex(prevState => prevState + 5);
    }
    console.log(addFlights);

    
    console.log(length);
    return (
        <div>
            {
                slicedFlights.map(flight => <FlightItem flight={flight} transfer={transfer} key={flight.flightToken}/>)
            }
            {
                addFlights && addFlights.map(flight => <FlightItem flight={flight} transfer={transfer} key={flight.flightToken}/>)
            }
            {arrayIndex < length && <button className='more-btn' onClick={handleMore}>Показать еще</button>}
        </div>
    )
}

export default FlightList
