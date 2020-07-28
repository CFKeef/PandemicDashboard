import React from 'react';

import './Content.css';

import MiniDash from '../MiniDash/MiniDash.js';
import FullDash from '../FullDash/FullDash.js';
import Leaderboard from '../Leaderboard/Leaderboard.js';

const Content = () => {
    return (
        <div className="content-container">
            <MiniDash />
            <FullDash />
            <Leaderboard />
        </div>
    )
}

export default Content;