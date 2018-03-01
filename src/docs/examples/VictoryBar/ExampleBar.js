import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar } from 'victory';


const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];


export default function ExampleVictoryBar () {
    return <VictoryBar 
    data={data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings"

    style={{
        data: {fill:  "green",
        fillOpacity: 0.3,
        strokeWidth: 0.3}}}

    animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
        }}
         
    />;
}