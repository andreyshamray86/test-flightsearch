import React from 'react'

import FlightList from '../FilghtList/FlightList'

import './Content.css'

const Content = ({ flightsList, sortType, filterType, priceLow, priceHigh}) => {
    let updatedFlights = flightsList;
    let transfer;

    if(flightsList) {
        if(filterType === 'notransf') {
            updatedFlights = flightsList.filter(flight => {
                return flight.flight.legs[0].segments.length === 1
            })
            transfer = 0;
        } else if(filterType === 'transf1') {
            transfer = 1;
        } 
        if(sortType === 'price-high') {
            flightsList.sort((a, b) => a.flight.price.total.amount > b.flight.price.total.amount ? 1 : -1)
            updatedFlights = flightsList;
        } else if(sortType === 'price-low') {
            flightsList.sort((a, b) => a.flight.price.total.amount < b.flight.price.total.amount ? 1 : -1)
            updatedFlights = flightsList;
        } else if(sortType === 'duration') {
            flightsList.sort((a, b) => a.flight.legs[0].duration > b.flight.legs[0].duration ? 1 : -1)
        }
        if(priceLow) {
            updatedFlights = flightsList.filter(flight => {

                return priceLow < flight.flight.price.total.amount
            })
        }
        if(priceHigh) {
            updatedFlights = flightsList.filter(flight => {
                return flight.flight.price.total.amount < priceHigh
            })
        }

    }

    // console.log(updatedFlights);
    
    return (
        <div className='content'>
            {updatedFlights && <FlightList flights={updatedFlights} transfer={transfer}/>}
        </div>
    )
}

export default Content
