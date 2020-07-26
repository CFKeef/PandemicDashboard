import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './MiniDash.css';

import MiniCard from '../MiniCard/MiniCard.js';

const MiniDash = () => {
    const [card1, setCard1] = useState({

    })




    // Return
    return(
        <div className="minidash">
            <MiniCard />
        </div>
    )
}

export default MiniDash;