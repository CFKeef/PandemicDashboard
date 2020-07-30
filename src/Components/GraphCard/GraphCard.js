import React, {useState, useEffect} from 'react';

import './GraphCard.css';

import Graph from '../Graph/Graph.js';

const GraphCard = props => {
    const [title1] = useState('Linear');
    const [title2] = useState('Log');

    return(
        <div className='graphcard'>
            <div className='linear'>
                <Graph 
                    title={title1} 
                    graphData={props.selectedGraphData}
                />
            </div>

            <div className='log'>
                <Graph 
                    title={title2}
                    graphData={props.selectedGraphData}
                />
            </div>
        </div>

    )
}

export default GraphCard;