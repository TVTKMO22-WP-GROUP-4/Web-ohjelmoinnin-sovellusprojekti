import React from "react";
import {Chart as chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import yearlyData from './data/yearlyco2.json';
import monthlyData from './data/monthlyco22.json';
import icecore1data from './data/icecore1.json';
import icecore2data from './data/icecore2.json';
import icecore3data from './data/icecore3.json';


chartjs.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
  );

  const monthlydeitaa = monthlyData.datataulu.map((item) => {return {
    time: item['time'],
    dataa: item['monthlyCo2']
  }});
  const yearlydeitaa = yearlyData.datataulu.map((item) => {return {
    time: item['time'],
    data: item['yearlyCo2']
  }});
  const icecore1deitaa = icecore1data.datataulu.map((item) => {return {
    time: item['iceAge'],
    co2ratio: item['co2ratio']
  }});
  const icecore2deitaa = icecore2data.datataulu.map((item) => {return {
    time: item['iceAge'],
    co2ratio: item['co2ratio']
  }});
  const icecore3deitaa = icecore3data.datataulu.map((item) => {return {
    time: item['iceAge'],
    co2ratio: item['co2ratio']
  }})


  export default function Toinenvisualisointi() {

    const yearlyData = {
      datasets: [
        {
          label: 'CO2 Annual',
          data:yearlydeitaa,
          borderColor:'black',
          backgroundColor:'black',
          yAxisID:"data",
          parsing:{
            yAxisKey:"data",
            xAxisKey:"time",
          },
          pointRadius: 0.1,
          borderWidth:1.5,
        },
        {
            label:'CO2 Monthly',
            data:monthlydeitaa,
            borderColor:'orange',
            backgroundColor:'orange', 
            yAxisID:"data",
            parsing:{
                yAxisKey:"dataa",
                xAxisKey:"time",
            },
            pointRadius:0.1,
            borderWidth:1.5,
        },
        {
            label:'Ice core 1',
            data:icecore1deitaa,
            borderColor:'blue',
            backgroundColor:'blue', 
            yAxisID:"data",
            parsing:{
                yAxisKey:"co2ratio",
                xAxisKey:"time",
            },
            pointRadius:0.1,
            borderWidth:1.5,
        },
        {
            label:'Ice core 2',
            data:icecore2deitaa,
            borderColor:'green',
            backgroundColor:'green', 
            yAxisID:"data",
            parsing:{
                yAxisKey:"co2ratio",
                xAxisKey:"time",
            },
            pointRadius:0.1,
            borderWidth:1.5,
        },
        {
            label:'Ice core 3',
            data:icecore3deitaa,
            borderColor:'purple',
            backgroundColor:'purple', 
            yAxisID:"data",
            parsing:{
                yAxisKey:"co2ratio",
                xAxisKey:"time",
            },
            pointRadius:0.1,
            borderWidth:1.5,
        }
 
      ],
  
    }


    const options = {
        responsive: true,
        interaction: {
          mode:'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          legends:{
            position: "top",
          },
          title: {
            display: true,
            width:"50px",
            text:'Global historical surface temperature anomalies from January 1850 onwards',
          },
        },
        scales: {
          data: {
            type: 'linear',
            display: true,
            position: 'left',
            },
          x: {
            type: "time",
            ticks:{
            source:"data",
            autoskip:true,
            min: 0,
          },
          
        time:{
          unit: yearlyData === "Line" ? "year" : "month",
          autoskip: true,
          displayFormats: {
            year: "y",
            month:  "y",
            },
         },
         
        }
    }
};

    return (
        <div style={{ width: "500px" }}>
          <h1>G</h1>
    
          <div> 
            <Line data={yearlyData} options={options} width={2} height={1.5} />
          </div>
          
        </div>
      );
   }