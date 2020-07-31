import React,{useState, useEffect} from 'react';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines} from 'react-vis';
 
import './Graph.css';

const Graph = (props) => {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        setGraphData(props.graphData);
    }, [])
    return (
        <div className='graph'>
            <p>{props.title}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <XYPlot height={400} width={400} >
                <VerticalGridLines />
                <HorizontalGridLines />
                <LineSeries data={graphData} />
            </XYPlot>
        </div>
    )
}

export default Graph;