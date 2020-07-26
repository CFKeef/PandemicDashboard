import React, {useState} from 'react';

import './CountryList.css';

import CountryListing from '../CountryListing/CountryListing.js';

const CountryList = () => {
    const [countryName, setCountryName] = useState('USA');
    const [countryCount, setCountryCount] = useState('2132131312');

    return (
        <div className="countrylist">
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
            <CountryListing 
                countryName={countryName} 
                countryCount={countryCount}
            />
        </div>
    )
}

export default CountryList;