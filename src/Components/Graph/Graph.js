import React from 'react';


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
            
        
        </div>
    )
}

export default Graph;