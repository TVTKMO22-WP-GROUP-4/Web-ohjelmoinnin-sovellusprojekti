import { Line } from 'react-chartjs-2';
import {React} from "react";
import {Chart as chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js/auto";
import 'chartjs-adapter-luxon';
import gastRecon from './data/global-temp-evo.json';
import carbonDio from './data/global-temp-evo.json';
import humanEvo from './data/global-temp-evo.json'




chartjs.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
  );

  const gastdeita = gastRecon.GASTreconstruction.map((item) => { return {

        time: item['Time (kyr BP)'],
        temp: item['50%']
  }});
  const carbondeita = carbonDio.CarbonDioxide.map((item) => {return {

        time: item['Time (yr BP)'],
        temp: item['Carbon dioxide (ppm)']
  }});
  const humandeita = humanEvo.humanevolution.map((item) => {return {

        aika: item['Time'],
        event:item['Event']
  }});

  

  console.log(humandeita[0]);
 

  
  export default function Kolmasvisualisointi() {

    const data = {
      labels:['January','February'],
        datasets: [
            {
            label:'Carbon Data',
            data:carbondeita,
            borderColor:'rgb(255,99,132)',
            backgroundColor:'rgba(255,99,132,0,5)',
            borderWidth:2,
            yAxisID:'carbondata',
            xAxisID:'x1',
            parsing:{
                yAxisKey:'temp',
                xAxisKey:'time',
            },
            pointRadius:1,
            },
            {
              label:'Global Data',
              data:gastdeita,
              borderColor:'rgb(0,0,0)',
              backgroundColor:'rgba(0,0,0,0,5)',
              borderWidth:2,
              yAxisID:'globaldata',
              xAxisID:'x1',
              parsing:{
                yAxisKey:'temp',
                xAxisKey:'time',
              },
              pointRadius:1,
              
            },
            {
            label:'Events',
            data:humandeita, carbondeita,
            yAxisID:'humandata',
            xAxisID:'x1',
            parsing:{
              
              xAxisKey:'aika',
              yAxisKey:'event',
            },
            pointStyle:'triangle',
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0,
            pointRadius: 30,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            }
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
                text:'Evolution of global temperature over the past two million years',
              },
              tooltips:{
                enabled:true,
                mode:'index',
                intersect:false,
                callbacks:{
                  
                },
                
              }
            },
            scales: {
              carbondata: {
                type: 'linear',
                display: true,
                position: 'left',
               

                
                },
                globaldata:{
                  position:'right',
                  type:'linear',
                  display:true,
                  
                },
                humandata:{
                  position:'left',
                  pointBorderColor:'Red',
                  pointBorderWidth:50,
                  hoverRadius:50,
                  hoverBorderWidth:50,
                  display:true,
                  hover:{
                  intersect:true,
                  mode:'nearest',
                  },
                  callbacks:{
                    
                    }
                  },
                
              x1: {
                
                  reverse:true,
                  offset:true,
                  type: 'linear',
                  
                  time:{
                  unit: data === "Line" ? "year" : "month",
                    autoskip: true,
                    displayFormats: {
                      year: "yyy",
                      month: " y",

                    },
                 }
                }
              },   
          };

         

    return (
        <div style={{ width: "1500px" }}>
          <h1>Evolution of global temperature over the past two million years</h1>
    
          <div> 
            <Line data={data} options={options} />
          </div>
          
        </div>
      );
  }