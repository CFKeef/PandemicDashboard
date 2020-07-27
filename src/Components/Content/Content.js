import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Content.css';

import MiniDash from '../MiniDash/MiniDash.js';
import FullDash from '../FullDash/FullDash.js';
import Leaderboard from '../Leaderboard/Leaderboard.js';

const Content = () => {
    const [worldWide, setWorldWide] = useState({
        cases: null,
        todayCases: null,
        active: null,
        recovered: null,
        todayRecovered: null,
        deaths: null,
        todayDeaths: null
    })
    const [sortedList, setSortedList] = useState([]);

    const backEndCalls = () =>{
        axios.all(
            axios.get('http://localhost:3001/worldwide'),
            axios.get('http://localhost:3001/sortedlist')
        ).then( (res1, res2) => {
            const ww = res1;
            const sl = res2;
            
            console.log(ww,sl);
        }).catch(err => {console.err(err)})
    };

    useEffect( () => {
        backEndCalls();
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