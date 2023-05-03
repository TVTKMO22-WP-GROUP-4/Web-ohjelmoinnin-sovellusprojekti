import React from "react";
import {Chart as chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import yearlyData from '../../data/yearlyco2.json';
import monthlyData from '../../data/monthlyco22.json';
import icecore1data from '../../data/icecore1.json';
import icecore2data from '../../data/icecore2.json';
import icecore3data from '../../data/icecore3.json';


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
    time: item['airAge'],
    co2ratio: item['co2ratio']
  }});
  const icecore2deitaa = icecore2data.datataulu.map((item) => {return {
    time: item['airAge'],
    co2ratio: item['co2ratio']
  }});
  const icecore3deitaa = icecore3data.datataulu.map((item) => {return {
    time: item['airAge'],
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
            text:'Atmospheric CO2 concentrations',
          },
        },
        scales: {
          data: {
            type: 'linear',
            
            position: 'left',
            },
          x: {
           max:2023,
            type: "linear",
            ticks:{
          },
          
       
         
        }
    }
};

    return (
        <div style={{ width: "750px",  marginLeft:"250px"}}>
    
    

          <div style={{width: "24rem", border:"1px solid", marginLeft:"190px", marginTop:"50px", marginBottom:"50px"}}>
        <div>
          

          <div style={{textAlign:"center"}}>
                <p style={{textAlign:"center"}} >Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958 </p>
                <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">Mauna Loa description </a>
                <a href="https://gml.noaa.gov/ccgg/trends/data.html">Mauna Loa Data </a>
          </div>
          <div style={{textAlign:"center", paddingBottom:"15px"}}>
                <p>And Antarctic Ice Core records of atmospheric CO2 ratios</p>
         
                <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html">Law Dome description </a>
                <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat">Law Dome Data </a>
           
              </div>
             
              
          </div>
      </div>          

          <div> 
            <Line data={yearlyData} options={options} width={2} height={1.5} />
          </div>
          
        
    </div>
        
      );
   }


export {Toinenvisualisointi}