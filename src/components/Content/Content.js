import React, { useState, useEffect } from 'react'
import axios from 'axios';

import FlightList from '../FilghtList/FlightList'

import './Content.css'

const Content = () => {
    const [flights, setFlights] = useState();

    useEffect(() => {
        axios.get('data/flights.json')
        .then(res => {
            setFlights(res.data.result)
        })
        .catch(err => console.log(err))
    }, [])

    let updatedFlights;
    let transfer;

    if(flights) {
        updatedFlights = flights.flights.filter(flight => {
            return flight.flight.legs[0].segments.length === 1
        })
        transfer = 0;
    }
    

    return (
        <div className='content'>
            {updatedFlights && <FlightList flights={updatedFlights} transfer={transfer}/>}
        </div>
    )
}

export default Content
