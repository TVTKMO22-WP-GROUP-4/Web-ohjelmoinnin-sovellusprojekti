import { Line } from 'react-chartjs-2';
import {React} from "react";
import {Chart as chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js/auto";
import 'chartjs-adapter-luxon';
import gastRecon from '../../data/global-temp-evo.json';
import carbonDio from '../../data/global-temp-evo.json';
import humanEvo from '../../data/global-temp-evo.json';




chartjs.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
  );

  const gastdeita = gastRecon.GASTreconstruction.map((item) => { return {

        time: item['Time (kyr BP)'],
        temp: item['50%']
  }});
  const carbondeita = carbonDio.CarbonDioxide.map((item) => {return {

        time: item['Time (yr BP)'],
        temp: item['Carbon dioxide (ppm)'],
        event:item['Event']
  }});
  const humandeita = humanEvo.humanevolution.map((item) => {return {

        time: item['Time'],
        event:item['Event']
  }});

  
  console.log(humandeita[1]);
 
  
  export default function Kolmasvisualisointi() {

    const data = {
     
        datasets: [
          {
            label:'Events',
            data:humandeita,
            borderColor: "rgb(20, 80, 50)",
            backgroundColor: "rgb(20, 150, 50)",
            yAxisID:'carbondata',
            hidden:false,
            showLine:false,
            parsing:{
              xAxisKey:'time',
              yAxisKey:'event',
            },
            pointRadius:10
            },
            {
            label:'Carbon Data',
            data:carbondeita,
            borderColor:'rgb(255,99,132)',
            backgroundColor:'rgba(255,99,132,0,5)',
            borderWidth:2,
            yAxisID:'carbondata',
            parsing:{
                xAxisKey:'time',
                yAxisKey:'temp',
                
            },
            pointRadius:0,
            },
            {
              label:'Global Data',
              data:gastdeita,
              borderColor:'rgb(0,0,0)',
              backgroundColor:'rgba(0,0,0,0,5)',
              borderWidth:2,
              yAxisID:'globaldata',
              parsing:{
                xAxisKey:'time',
                yAxisKey:'temp',
               
              },
              pointRadius:0,
              
            },
            
        ],
    };
       const options = {
            responsive: true,
            plugins: {
              legends:{
                position: "top",
              },
              title: {
                display: true,
                text:'Evolution of global temperature over the past two million years',
              },
              tooltip: {

                

                callbacks: {
                  label: function(context){
                    let label = context.dataset.label || ''
                   
                    
      
                    if(context.dataset.label === "Events"){
                      
                      
                      context.time = context.parsed.x
                      console.log(context.time);
                    

                      if(context.time === 1500000){
                      
                      
                      label = "earliest control of fire, by Homo erectus (Koobi Fora, Kenya)"
    
                      }
                      if(context.time === 1400000){
                      
                      label = "earliest organic tools: a hand axe made from hippopotamus bone (Ethiopia)"
      
                      }
                      if(context.time === 400000){
                      
                      label = "earliest evidence of food storage for later consumption: bone marrow (Qesem Cave, Israel))"
                      }
                     if(context.time === 260000){
                      
                      label = "earliest stone tools produced by humans (Gona, Ethiopia)"
                     }
                     if(context.time === 176000){
                      
                      label = "earliest built constructions: underground edifices made from broken stalagmites by Neanderthals (Bruniquel Cave, France)"
                     }
                     if(context.time === 23000){
                      label = "first domestication: dogs from grey wolves Canis lupus "
                     }
                    }
  
                    if(context.dataset.label === "Carbon Data"){
                      label = context.formattedValue + " ppm"
                    
                     
                      
                    }
                    if(context.formattedValue === "283,233"){
                      console.log(context.formattedValue + "JEEEEEEEEEE") 
                      context.formattedValue = "Testii jee woho"
                    }

                    if(context.dataset.label === "Global Data"){
                      label = context.formattedValue + " °C"
                     
                    }
                   
      
      
                    return label
                  },
                  title: function(context){
                    if(context[0].parsed.x && context[0].parsed.x < 0)
                      return context[0].parsed.x * -1
                  }
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  callback: function(value) {
                    return value;
                  }
                },
                reverse:true,
                type: "linear",
                title: {
                display: true,
                text:"Years ago"
                },    
              },
              carbondata: {
                position: 'left',
                type: 'linear',
                title:{
                  display:true,
                  text:"co2 ppm"
                },
                
                min:125,
                max:400,
                },
                globaldata:{
                  position:'right',
                  type:'linear',
                  max:4,
                  min:-8,
                  title:{
                  display:true,
                  text:"Temperature change C"
                  }
                },
              }
            };
          
        
    return (
        <div style={{ width: "750px",  marginLeft:"250px"}}>
          
          <div style={{width: "24rem", border:"1px solid", marginLeft:"190px", marginTop:"50px", marginBottom:"50px"}}>
        <div>
          

          <div style={{textAlign:"center"}}>
                <p style={{textAlign:"center"}} >Evolution of global temperature over the past two million years </p>
                <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">Temperature evolution description </a>
                <p style={{margin:"5px"}}> &</p>
                <a href="http://carolynsnyder.com/publications.php">Temperature evolution data </a>
          </div>
          <div style={{textAlign:"center", paddingBottom:"15px"}}>
                <p>And human Evolution and Activities</p>
         
                <a href="https://www.southampton.ac.uk/~cpd/history.html">Human evolution descriptions and data </a>
             
           
              </div>
           
              
             </div>
              
          </div>

    
          <div> 
            <Line data={data} options={options} />
          </div>
          
        </div>
      );
  }

  export {Kolmasvisualisointi}