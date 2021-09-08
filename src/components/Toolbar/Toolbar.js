import React from 'react'

import './Toolbar.css'

const Toolbar = ({setSortType, setFilterType, setPriceLow, setPriceHigh, priceLow, priceHigh}) => {

    const sortHandler = (e) => {
        setSortType(e.target.value)
    }

    const filterHandler = (e) => {
        if(e.target.checked) {
            setFilterType(e.target.value)
        }
    }

    const priceLowHandler = (e) => {
        setPriceLow(e.target.value)
    }

    const priceHighHandler = (e) => {
        setPriceHigh(e.target.value)
    }


    return (
        <div className='toolbar'>
            <div className="toolbar-sort" onChange={sortHandler}>
                <h4 className="toolbar-sort__title">Сортировать</h4>
                <div className="toolbar-sort__item">
                    <input type="radio" name="sort" id="radio" value='price-high'/> 
                    <label htmlFor="radio">- по возрастанию цены</label>
                </div>
                <div className="toolbar-sort__item">
                    <input type="radio" name="sort" id="radio" value='price-low'/> 
                    <label htmlFor="radio">- по убыванию цены</label>
                </div>
                <div className="toolbar-sort__item">
                    <input className="toolbar-sort__item" type="radio" value='duration' name="sort" id="radio"/> 
                    <label htmlFor="radio">- по времени в пути</label>   
                </div>
            </div>
            <div className="toolbar-filter" onChange={filterHandler}>
                <h4 className="toolbar-filter__title">Фильтровать</h4>
                <div className="toolbar-filter__item">
                    <input type="checkbox" id="filter" name="filter" value='transf1'/>
                    <label htmlFor="horns">- 1 пересадка</label>
                </div>
                <div className="toolbar-filter__item">
                    <input type="checkbox" id="filter" name="filter" value='notransf' />
                    <label htmlFor="horns">- без пересадок</label>
                </div>
            </div>
            <div className="toolbar-price">
                <h4 className="toolbar-price__title">Цена</h4>
                <div className="toolbar-price__item">
                    <label htmlFor="price">От</label> 
                    <input type="number" name="price-from" id="price" onChange={priceLowHandler} value={priceLow}/>
                </div>
                <div className="toolbar-price__item">
                    <label htmlFor="price">До</label> 
                    <input type="number" name="price-to" id="price" onChange={priceHighHandler} value={priceHigh}/> 
                </div>
            </div>
            <div className="toolbar-airlines">
                <h4 className="toolbar-airlines__title">Авиакомпании</h4>
                <div className="toolbar-airlines__item">
                    <input type="checkbox" id="airlines" name="airlines" />
                    <label htmlFor="airlines">- air 1</label>
                </div>
                <div className="toolbar-airlines__item">
                    <input type="checkbox" id="airlines" name="airlines" />
                    <label htmlFor="airlines">- aur 2</label> 
                </div>
            </div>
        </div>
    )
}

export default Toolbar
