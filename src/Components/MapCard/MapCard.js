import React from 'react';

import './MapCard.css'

import Ui from '../Ui/Ui.js';
import MapUnit from '../MapUnit/MapUnit.js';

const MapCard = () => {
    return (
        <div className="mapcard">
            <Ui />
            <MapUnit />
        </div>
    )
}

export default MapCard;