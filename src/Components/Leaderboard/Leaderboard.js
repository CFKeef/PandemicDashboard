import React from 'react';

import './Leaderboard.css';

import CountryList from '../CountryList/CountryList.js';

const Leaderboard = props => {
    return(
        <div className='leaderboard'>
            <div className="lbheader">
                <h1>Most Afflicted</h1>
                <h2>Currently shown: {props.currentShown}</h2>
                <h2>Click on the name to view stats of the specified country</h2>
                <p onClick={props.resetData}>Reset to World Wide data</p>
            </div>
            <CountryList 
                sortedData={props.sortedData}
                selectCurrent={props.updateCurrent}
            />
        </div>
    )
}

export default Leaderboard;