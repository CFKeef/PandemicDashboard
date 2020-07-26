import React from 'react';

import './FullDash.css';

import MapCard from '../MapCard/MapCard.js';
import GraphCard from '../GraphCard/GraphCard.js';

const FullDash = () => {
    return (
        <div className="fulldash">
            <MapCard />
            <GraphCard />
        </div>
    )
}

export default FullDash;