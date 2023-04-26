import { Doughnut } from 'react-chartjs-2';
import {React, useEffect, useRef, useState} from "react";
import {Chart as chartjs, Title, Tooltip, Legend } from "chart.js/auto";
import sectorData from './data/Global-GHG-by-sector.json';


chartjs.register(
    Title, Tooltip, Legend
  );


  const sectordeita = sectorData.Sector.map((item) => { return {

    label: item['Sectori'],
    value: item['Share of global greenhouse gas emissions (%)']
}});


  export default function Viidesvisualisointi() {

    const data = {
        labels:sectorData.Sectori3[0].sectori,
        
      datasets: [
        {
          label:'co2 emission percentages by sectors',
          data:sectorData.Sectori3[0].share,
          backgroundColor:['red','green', 'blue','yellow'],
          borderColor:['red', 'green','blue','yellow'],
          
        },
      
 
      
      ]
  
    };
    const data2 = {
      labels:sectorData.subisector[0].subsectori,

      datasets:[
        
          {
            label:'Detailed breakdown of subsectors',
            data:sectorData.subisector[0].share,
            backgroundColor:[
              "rgb(255, 0, 0)",    
              "rgb(0, 255, 0)",    
              "rgb(0, 0, 255)",    
              "rgb(255, 255, 0)",  
              "rgb(255, 0, 255)",  
              "rgb(0, 255, 255)",  
              "rgb(128, 0, 0)",    
              "rgb(128, 128, 0)",  
              "rgb(0, 128, 0)",    
              "rgb(0, 128, 128)",  
              "rgb(0, 0, 128)",    
              "rgb(128, 0, 128)",  
              "rgb(255, 165, 0)",  
              "rgb(218, 165, 32)", 
              "rgb(128, 128, 128)",
              "rgb(255, 192, 203)",
              "rgb(210, 105, 30)" ,
            
            ],
            borderColor:[ 
            "rgb(255, 0, 0)",    
            "rgb(0, 255, 0)",    
            "rgb(0, 0, 255)",    
            "rgb(255, 255, 0)",  
            "rgb(255, 0, 255)",  
            "rgb(0, 255, 255)",  
            "rgb(128, 0, 0)",    
            "rgb(128, 128, 0)",  
            "rgb(0, 128, 0)",    
            "rgb(0, 128, 128)",  
            "rgb(0, 0, 128)",    
            "rgb(128, 0, 128)",  
            "rgb(255, 165, 0)",  
            "rgb(218, 165, 32)", 
            "rgb(128, 128, 128)",
            "rgb(255, 192, 203)",
            "rgb(210, 105, 30)" ,
          ],
          },
        
      ]
    };
    const options = {
        type:'doughnut',
        
        onClick:(event) => {
          charTypeDoughnut2()
          console.log("click")
        }
      };
      const options2 = {
        type:'doughnut',
        
        onClick:(event) => {
          charTypeDoughnut()
        }
      };
    
    
      const [type, setType] = useState("Doughnut");

      useEffect(() => {
        setType(type);
      }, [type]);
      
      const charTypeDoughnut = () => {
        setType("Doughnut");
      }
      const charTypeDoughnut2 = () => {
        setType("Doughnut2");
      }
    
    

    return (
        <div style={{ width: "500px" }}>
          <h1>Evolution of global temperature over the past two million years</h1>
    
          <div> 
          {type === "Doughnut" && <Doughnut data={data} options={options} width={2} height={1.5} />}
          {type === "Doughnut2" && <Doughnut data={data2} options={options2} width={2} height={1.5} />}
          </div>
          
        </div>
      );
  }
