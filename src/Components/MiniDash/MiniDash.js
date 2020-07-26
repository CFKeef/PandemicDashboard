import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import './MiniDash.css';

import MiniCard from '../MiniCard/MiniCard.js';

const MiniDash = () => {
    const [card1, setCard1] = useState({
        id: 'c1',
        title: 'Total Infections',
        number: '8,512,321',
        todaysnumber: '-252'
    })
    const [card2, setCard2] = useState({
        id:'c2',
        title: 'Active Infections',
        number: '8,512,321',
        todaysnumber: '-252'
    })
    const [card3, setCard3] = useState({
        id: 'c3',
        title: 'Recovered',
        number: '8,512,321',
        todaysnumber: '-252'
    })
    const [card4, setCard4] = useState({
        id: 'c4',
        title: 'Deaths',
        number: '8,512,321',
        todaysnumber: '-252'
    })

    // Return
    return(
        <div className="minidash">
            <MiniCard 
                title={card1.title}
                count={card1.number}
                todays={card1.todaysnumber}
                id={card1.id}
            />
            <MiniCard 
                title={card2.title}
                count={card2.number}
                todays={card2.todaysnumber}
                id={card2.id}
            />
            <MiniCard 
                title={card3.title}
                count={card3.number}
                todays={card3.todaysnumber}
                id={card3.id}
            />
            <MiniCard 
                title={card4.title}
                count={card4.number}
                todays={card4.todaysnumber}
                id={card4.id}
            />
        </div>
    )
}

export default MiniDash;