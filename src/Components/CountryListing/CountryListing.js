import React from 'react';

import './CountryListing.css';

const CountryListing = (props) => {
    return (
        <div className="listing">
            <img src=""></img>
            <h2 className="cname">{props.countryName}</h2>
            <h2 className="ccount">{props.countryCount}</h2>
        </div>
    )
}

export default CountryListing;