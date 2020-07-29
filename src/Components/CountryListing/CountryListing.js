import React, { useState, useEffect } from 'react';

import './CountryListing.css';

const CountryListing = props => {
    const [name, setName] = useState(props.countryName);
    const [count, setCount] = useState(props.countryCount);
    const [flag, setFlag] = useState(props.flag);

    useEffect( () => {
        setName(props.countryName);
        setCount(props.countryCount);
        setFlag(props.flag)
    },[props])

    return (
        <div id={name} className="listing">
            <img className="cflag" src={flag}></img>
            <h2 className='cname' onClick={(e) => { props.updateCurrent(e.target.innerText) }}>{name}</h2>
            <h2 className="ccount">{count}</h2>
        </div>
    )
}

export default CountryListing;