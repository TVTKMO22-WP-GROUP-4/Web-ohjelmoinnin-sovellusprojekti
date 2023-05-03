import React, { useEffect, useState } from "react";
import {Chart as chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import vuosidata from '../../data/hadCRUT-global-annual.json';
import pohjoisvuosidata from '../../data/HadCRUT-northern_hemisphere.annual.json';
import etelävuosidata from '../../data/HadCRUTsouthern_hemisphere.annual.json';
import kuukausidata from '../../data/HadCRUT.global.monthly.json';
import pohjoiskuukausidata from '../../data/HadCRUT.northern_hemisphere.monthly.json';
import eteläkuukausidata from '../../data/HadCRUT.southern_hemisphere.monthly.json';
import recondata from '../../data/reconstruction.json';


chartjs.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);



const deitaa = vuosidata.datataulukko.map((item) => {return {
  time: item['Time'],
  anomaly: item['Anomaly (deg C)']
}});
const pohjoisdeitaa = pohjoisvuosidata.datataulukko.map((item) => {return {

  vuosi: item['Time'],
  vuosianomaly: item["Anomaly (deg C)"]

}});
const etelädeitaa = etelävuosidata.datataulukko.map((item) => {return {
  vuosi: item['Time'],
  vuosianomaly: item["Anomaly (deg c)"]
}});
const kuukausideitaa = kuukausidata.datataulukko.map((item) => {return {
  kuukausi: item['Time'],
  kuukausianomaly: item["Anomaly (deg c)"]
}});
const pohjoiskuukausideitaa = pohjoiskuukausidata.datataulukko.map((item) => {return {
  kuukausi: item['Time'],
  kuukausianomaly:item['Anomaly (deg c)']
}});
const eteläkuukausideitaa = eteläkuukausidata.datataulukko.map((item) => { return {
  kuukausi: item['Time'],
  kuukausianomaly:item['Anomaly (deg c)']
}});
const recondeita = recondata.datataulukko.map((item) => { return {
  vuosi: item['Year'],
  temp: item['Temp']
}});



export default function Ekavisualisointi() {

  const monthlyData = {
    datasets: [
      {
        label: 'Global monthly anomalies',
        data:kuukausideitaa,
        borderColor:'rgb(255,99,132)',
        backgroundColor:'rgba(255,99,132,0,5)',
        yAxisID:"anomaly",
        parsing:{
          yAxisKey:"kuukausianomaly",
          xAxisKey:"kuukausi",
        },
        pointRadius: 0,
      },
      {
        label: 'North monthly anomalies',
        data:pohjoiskuukausideitaa,
        borderColor:'rgb(0,0,255)',
        backgroundColor:'rgba(0,0,255,0,5)',
        yAxisID:"anomaly",
        parsing:{
          yAxisKey:"kuukausianomaly",
          xAxisKey:"kuukausi",
        },
        pointRadius: 0,
      },
      {
        label:'South monthly anomalies',
        data:eteläkuukausideitaa,
        borderColor:'rgb(0,255,0)',
        backgroundColor:'rgba(0,255,0,0,5)',
        yAxisID:"anomaly",
        parsing:{
          yAxisKey:"kuukausianomaly",
          xAxisKey:"kuukausi",
        },
        pointRadius:0,
      },
      
    ]

  }
  const yearlyData = {
    datasets:[
     {
    label:'Global annual anomalies',
    data: deitaa,
    borderColor:'rgb(255,99,132)',
    backgroundColor:'rgba(255,99,132,0,5)',
    yAxisID:"anomaly",
    parsing:{
      xAxisKey: "time",
      yAxisKey: "anomaly",
    },
    pointRadius: 0,
    },
    {
    label:'North annual anomalies',
    data: pohjoisdeitaa,
    borderColor:'rgb(0,0,255)',
    backgroundColor:'rgba(0,0,255,0,5)',
    yAxisID:"anomaly",
    parsing:{
      xAxisKey: "vuosi",
      yAxisKey: "vuosianomaly",
    },
    pointRadius: 0
    },
    {
      label:'South annual anomalies',
      data:etelädeitaa,
      borderColor:'rgb(0,255,0)',
      backgroundColor:'rgba(0,255,0,0,5)',
      yAxisID:"anomaly",
      parsing:{
        xAxisKey:"vuosi",
        yAxisKey:"vuosianomaly",
      },
      pointRadius:0,
    },
    {
      label: 'Reconstruction',
      data: recondeita,
      borderColor:'rgb(0,100,100)',
      backgroundColor:'rgba(0,100,100,0,5)',
      yAxisID:"anomaly",
      parsing:{
        xAxisKey:"vuosi",
        yAxisKey:"temp"
      },
      pointRadius: 0,
    },
  ],
  };

  
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
        text:'Global historical surface temperature anomalies from January 1850 onwards',
      },
    },
    scales: {
      anomaly: {
        type: 'linear',
        display: true,
        position: 'left',
        },
      x: {
        ticks:{
        source:"data",
        autoskip:true,
        min: 0,
      },
        type: "time",
        time:{
          unit: yearlyData === "Line" ? "year" : "month",
          autoskip: true,
          displayFormats: {
            year: "y",
            month: "MMM y",
            },
         }
        }
      },   
  };
       
const [type, setType] = useState("line");

useEffect(() => {
  setType(type);
}, [type]);

const charTypeLine = () => {
  setType("line");
}
const charTypeLine2 = () => {
  setType("line2");
}


return (
    <div style={{ width: "750px" ,marginLeft:"250px"}}>
      

      <div style={{width: "24rem", border:"1px solid", marginLeft:"190px", marginTop:"50px"}}>

      <div style={{textAlign:"center"}} > 
        <p >  Global historical surface
              temperature anomalies
                from January 1850
                    onwards
</p>
  <div style={{textAlign:"center", margin:"10px"}}>
                <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">Hadley Centre observations datasets and description</a>
              </div>
      <p> And Northern Hemisphere 2,000-year temperature reconstruction </p>
      <div style={{textAlign:"center", margin:"10px"}}>
                <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005">Northern Hemisphere 2,000-year temperature reconstruction description </a>

                <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">Northern Hemisphere 2,000-year temperature reconstruction Data </a>
              </div>  
      </div>

    <div style={{textAlign:"center"}}>
      <input type="radio" id="line" name="chart" onClick={charTypeLine} defaultChecked/>
        <label htmlFor="line">Annual</label>
        <input type="radio" id="line2" name="chart" onClick={charTypeLine2} />
        <label htmlFor="line">Monthly</label>
    </div>
        
           </div>     

      <div> 
        {type === "line" && <Line data={yearlyData} options={options} width={2} height={1.5} />}
        {type === "line2" && <Line data={monthlyData} options={options} width={2} height={1.5} />}
      </div>
      
     
    </div>
  );
}

export {Ekavisualisointi}