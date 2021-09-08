import React from 'react'

import './FlightItem.css'

const FlightItem = () => {
    return (
        <div className='wrapper'>
            <header className='header'>
                <div className='header__logo'>Logo</div>
                <div className='header__price'>
                    <p>21049 руб</p>
                    <span>Стоимость на одного взрослого пассажира</span>
                </div>
            </header>
            <div className="flight">
                <p className="flight__info">Москва, Шереметьево <span className='blue'>(SVO)</span> -> Лондон, Лондон, Хитроу <span className='blue'>(LHR)</span></p>
                <div className="line gray"></div>
                <div className="flight__date">
                    <p className="flight__date-dep">20:40 <span className='blue'>18 авг. вт</span></p>
                    <p className="flight__date-duration">14 ч 45 мин</p>
                    <p className="flight__date-arr"><span className='blue'>19 авг. ср</span>09:25</p>
                </div>
                <p className="flight__transfer">1 пересадка</p>
                <p className="flight__airline">Рейс выполняет: LOT Polish Airlines</p>
            </div>
            <div className="line blue"></div>
            <div className="flight">
                <p className="flight__info">Москва, Шереметьево <span className='blue'>(SVO)</span> -> Лондон, Лондон, Хитроу <span className='blue'>(LHR)</span></p>
                <div className="line gray"></div>
                <div className="flight__date">
                    <p className="flight__date-dep">20:40 <span className='blue'>18 авг. вт</span></p>
                    <p className="flight__date-duration">14 ч 45 мин</p>
                    <p className="flight__date-arr"><span className='blue'>19 авг. ср</span>09:25</p>
                </div>
                <p className="flight__transfer">1 пересадка</p>
                <p className="flight__airline">Рейс выполняет: LOT Polish Airlines</p>
                <div className="flight__line"></div>
            </div>
            <button className='flight-btn'>Выбрать</button>
        </div>
    )
}

export default FlightItem