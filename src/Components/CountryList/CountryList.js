import React, {useState, useEffect} from 'react';

import './CountryList.css';

import CountryListing from '../CountryListing/CountryListing.js';
import { render } from '@testing-library/react';

const CountryList = props => {
    const [data, setData] = useState(props.sortedData);

    useEffect( () => {
        setData(props.sortedData);
    },[props.sortedData])

    return (
        <div className="countrylist">  
            {props.sortedData.map(element => {return element.map( countryListing => {
             return (<CountryListing 
                countryName={countryListing.country}
                countryCount={countryListing.cases}
                flag={countryListing.flag}
                updateCurrent={props.selectCurrent}
            />)
        })})}
        </div>
    )
}

export default CountryList;