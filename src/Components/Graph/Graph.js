import React from 'react';
import {VictoryLine, VictoryChart, VictoryTheme} from 'victory';
 
import './Graph.css';

const Graph = (props) => {
    return (
        <div className='graph'>
            <p>{props.title}</p>
                <VictoryChart
                >
                <VictoryLine
                    style={{
                    data: { stroke: "#c43a31" },
                    
                    }}
                    data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 7 }
                    ]}
                />
                </VictoryChart>
        </div>
    )
}

export default Graph;