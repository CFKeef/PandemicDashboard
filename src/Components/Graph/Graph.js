import React, {useState, useEffect} from 'react';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
 
import './Graph.css';

const Graph = (props) => {
    const processData = () => {
        return props.graphData.map(element => ({
            x: element.x,
            y: element.y
        }))
    }
    return (
        <div className='graph'>
            <p>{props.title}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
             <XYPlot 
                height={400} 
                width={400} 
                xType='ordinal' 
                data={props.graphData}
            >
                <VerticalGridLines />
                <HorizontalGridLines />
                
                <XAxis 
                    title='Dates'
                />
                <YAxis 
                    title='Cases'
                />
                <LineSeries data={processData()} /> 
            </XYPlot>  
        </div>
    )
}

export default Graph;