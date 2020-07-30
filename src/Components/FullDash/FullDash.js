import React from 'react';

import './FullDash.css';

import MapCard from '../MapCard/MapCard.js';
import GraphCard from '../GraphCard/GraphCard.js';

const FullDash = props => {
    return (
        <div className="fulldash">
            <GraphCard 
                selectedGraphData={props.selectedGraphData}
            />
        </div>
    )
}

export default FullDash;