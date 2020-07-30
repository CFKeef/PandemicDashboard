import React,{useState, useEffect} from 'react';
import {VictoryLine, VictoryChart} from 'victory';
 
import './Graph.css';

const Graph = (props) => {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        setGraphData(props.selectedGraphData);
    }, [props])
    return (
        <div className='graph'>
            <p>{props.title}</p>
                <VictoryChart
                >
                <VictoryLine
                    style={{
                    data: { stroke: "#c43a31" },
                    
                    }}
                    data={graphData}
                />
                </VictoryChart>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

export default Graph;