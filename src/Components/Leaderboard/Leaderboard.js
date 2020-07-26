import React from 'react';

import './Leaderboard.css';

import CountryList from '../CountryList/CountryList.js';

const Leaderboard = () => {
    return(
        <div className='leaderboard'>
            <div className="lbheader">
                <h1>Most Afflicted</h1>
            </div>
            <CountryList />
        </div>
    )
}

export default Leaderboard;