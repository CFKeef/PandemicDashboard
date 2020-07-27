import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Content.css';

import MiniDash from '../MiniDash/MiniDash.js';
import FullDash from '../FullDash/FullDash.js';
import Leaderboard from '../Leaderboard/Leaderboard.js';

const Content = () => {
    const {dataCountry, setCountryData} = useState({
        country: '',
        countryData: {
            caseCount: '',
            activeCase: '',
            recovered: '', 
            deaths: '',
            todayCount: '',
            todayActive: '',
            todayRecovered: '',
            todayDeaths: ''
        }
    })

    const {dataWorldWide, setWorldWideData} = useState({
        caseCount: '',
        activeCase: '',
        recovered: '', 
        deaths: '',
        todayCount: '',
        todayActive: '',
        todayRecovered: '',
        todayDeaths: ''
    })

    return (
        <div className="content-container">
            <MiniDash />
            <FullDash />
            <Leaderboard />
        </div>
    )
}

export default Content;