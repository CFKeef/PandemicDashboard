import React from 'react';
import * as d3t from 'd3-time-format';
import { LineChart, Line, CartesianGrid, YAxis, Tooltip, XAxis } from 'recharts';

import './Graph.css';

const Graph = (props) => {
    const processData = () => {
        let timeForm = d3t.timeFormat("%m/%d");
        let data = props.graphData.map(element => ({
            dates: timeForm(new Date(element.x)),
            cases: element.y
        }));

        return data;
    }

    let data = processData();

    return (
        <div className='graph'>
            <p>{props.title}</p>
            <LineChart width={586} height={480} data={data} style={{ "width": "100%", "margin": "0 auto" }} margin={{left: 50}} >
                <Line type="montone" dataKey="cases" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis />
                <YAxis type="number" domain={['dataMin', 'dataMax']} scale={props.title} />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default Graph;