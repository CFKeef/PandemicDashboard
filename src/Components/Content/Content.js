import React from 'react';

import './Content.css';

import MiniDash from '../MiniDash/MiniDash.js';
import FullDash from '../FullDash/FullDash.js';
import Leaderboard from '../Leaderboard/Leaderboard.js';

const Content = props => {
    return (
        <div className="content-container">
            <MiniDash 
                worldWideData={props.worldWideData}
                currentData={props.currentData}
            />
            <FullDash 
                worldWideData={props.worldWideData}
                currentData={props.currentData}
                sortedData={props.sortedData}
                selectedGraphData={props.selectedGraphData}
            />
            <Leaderboard 
                sortedData={props.sortedData}
                updateCurrent={props.updateCurrent}
                currentShown={props.currentData.country}
                resetData={props.resetData}
            />
        </div>
    )
}

export default Content;