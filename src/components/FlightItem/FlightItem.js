import React from 'react'

import './FlightItem.css'

const FlightItem = ({flight, transfer}) => {
    const flightInfo = flight.flight

    let numOfTransfer = transfer === 0 ? 'без пересадок' : '1 пересадка';

    const { departureCity, arrivalCity, departureAirport, arrivalAirport, departureDate, arrivalDate, travelDuration } = flightInfo.legs[0].segments[0];

    const cityDep = departureCity.caption;
    const cityArr = arrivalCity.caption;
    const airportDep = departureAirport;
    const airportArr = arrivalAirport;
    const dateDep = departureDate.split('T');
    const dateArr = arrivalDate.split('T');
    const durationTo = travelDuration;

    const cityDepFrom = flightInfo.legs[1].segments[0].departureCity.caption;
    const cityArrFrom = flightInfo.legs[1].segments[0].arrivalCity.caption;
    const airportDepFrom = flightInfo.legs[1].segments[0].departureAirport;
    const airportArrFrom = flightInfo.legs[1].segments[0].arrivalAirport;
    const dateDepFrom = flightInfo.legs[1].segments[0].departureDate.split('T');
    const dateArrFrom = flightInfo.legs[1].segments[0].arrivalDate.split('T');
    const durationFrom = flightInfo.legs[1].segments[0].travelDuration;


    return (
        <div className='wrapper'>
            <header className='header'>
                <div className='header__logo'>Logo</div>
                <div className='header__price'>
                    <p>{flightInfo.price.total.amount} {flightInfo.price.total.currency}</p>
                    <span>Стоимость на одного взрослого пассажира</span>
                </div>
            </header>
            <div className="flight">
                <p className="flight__info">{cityDep}, {airportDep.caption} <span className='blue'>({airportDep.uid})</span> -> {cityArr}, {airportArr.caption} <span className='blue'>({airportArr.uid})</span></p>
                <div className="line gray"></div>
                <div className="flight__date">
                    <p className="flight__date-dep">{dateDep[1]}<span className='blue'>{dateDep[0]}</span></p>
                    <p className="flight__date-duration">{Math.round(durationTo / 60)} ч {durationTo % 60} мин</p>
                    <p className="flight__date-arr"><span className='blue'>{dateArr[0]}</span>{dateArr[1]}</p>
                </div>
                <p className="flight__transfer">{numOfTransfer}</p>
                <p className="flight__airline">Рейс выполняет: LOT Polish Airlines</p>
            </div>
            <div className="line blue"></div>
            <div className="flight">
                <p className="flight__info">{cityDepFrom}, {airportDepFrom.caption} <span className='blue'>({airportDepFrom.uid})</span> -> {cityArrFrom}, {airportArrFrom.caption} <span className='blue'>({airportArrFrom.uid})</span></p>
                <div className="line gray"></div>
                <div className="flight__date">
                    <p className="flight__date-dep">{dateDepFrom[1]}<span className='blue'>{dateDepFrom[0]}</span></p>
                    <p className="flight__date-duration">{Math.round(durationFrom / 60)} ч {durationFrom % 60} мин</p>
                    <p className="flight__date-arr"><span className='blue'>{dateArrFrom[0]}</span>{dateArrFrom[1]}</p>
                </div>
                <p className="flight__transfer">{numOfTransfer}</p>
                <p className="flight__airline">Рейс выполняет: LOT Polish Airlines</p>
                <div className="flight__line"></div>
            </div>
            <button className='flight-btn'>Выбрать</button>
        </div>
    )
}

export default FlightItem