import React, {useState, useEffect} from 'react';

import './Leaderboard.css';

import CountryList from '../CountryList/CountryList.js';

const Leaderboard = props => {
    return(
        <div className='leaderboard'>
            <div className="lbheader">
                <h1>Most Afflicted</h1>
                <h2>Currently shown:{props.currentShown}</h2>
            </div>
            <CountryList 
                sortedData={props.sortedData}
            />
        </div>
    )
}

export default Leaderboard;