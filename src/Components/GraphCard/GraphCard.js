import React, {useState} from 'react';

import './GraphCard.css';

import Graph from '../Graph/Graph.js';

const GraphCard = () => {
    const [title1] = useState('Linear');
    const [title2] = useState('Log');
    return(
        <div className='graphcard'>
            <div className='linear'>
                <Graph 
                    title={title1}
                />
            </div>

            <div className='log'>
                <Graph 
                    title={title2}
                />
            </div>
        </div>

    )
}

export default GraphCard;