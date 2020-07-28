import React from 'react';

import './MiniDash.css';

import MiniCard from '../MiniCard/MiniCard.js';

const MiniDash = props => {
    return(
        <div className="minidash">
            <MiniCard 
                title='Total Infections'
                count={props.currentData.cases}
                todays={props.currentData.todayCases}
                id='c1'
            />
            <MiniCard 
                title='Active Infections'
                count={props.currentData.active}
                todays={props.currentData.todayCases}
                id='c2'
            />
            <MiniCard 
                title='Recovered'
                count={props.currentData.recovered}
                todays={props.currentData.todayRecovered}
                id='c3'
            />
            <MiniCard 
                title='Deaths'
                count={props.currentData.deaths}
                todays={props.currentData.todayDeaths}
                id='c4'
            />
        </div>
    )
}

export default MiniDash;