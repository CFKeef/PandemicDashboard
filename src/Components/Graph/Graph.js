import React from 'react';

import './Graph.css';

const Graph = (props) => {
    return (
        <div className='graph'>
            <p>{props.title}</p>
        </div>
    )
}

export default Graph;