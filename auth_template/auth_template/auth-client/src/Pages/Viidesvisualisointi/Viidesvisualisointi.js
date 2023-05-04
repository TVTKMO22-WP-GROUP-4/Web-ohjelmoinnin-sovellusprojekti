import { Doughnut } from 'react-chartjs-2';
import {React, useEffect, useState} from "react";
import {Chart as chartjs, Title, Tooltip, Legend } from "chart.js/auto";
import sectorData from '../../data/Global-GHG-by-sector.json';


chartjs.register(
    Title, Tooltip, Legend
  );




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
        
         <div style={{ width: "400px",  marginLeft:"410px"}}>
   
    

          <div style={{width: "24rem", border:"1px solid", marginTop:"50px", marginBottom:"50px"}}>
        <div>
          

          <div style={{textAlign:"center"}}>
                <p style={{textAlign:"center"}} >CO2 emissions by sectors</p>
                <a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector">CO2 emissions by sector description </a>
                <p> </p>
                <a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx">CO2 emissions by sector data</a>
          </div>
             
              
          </div>
      </div>          

          <div> 
          {type === "Doughnut" && <Doughnut data={data} options={options} width={1} height={1} />}
          {type === "Doughnut2" && <Doughnut data={data2} options={options2} width={1} height={1} />}
          </div>
          
        </div>
      );
  }

  export {Viidesvisualisointi}