import React from 'react';

import './MiniCard.css';

const MiniCard = (props) => {
    return(
        <div className={'minicard' }>
            <div className='textcontainer'>
                <h2>{props.title}</h2>
                <h1 className={props.id}>{props.count}</h1>
                <h2>{'Today: ' + props.todays}</h2>
            </div>
        </div>
    )
}

export default MiniCard;