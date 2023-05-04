import { Line } from 'react-chartjs-2';
import kuukausidata from "./data/monthlyCo2.json";
import vuosidata from "./data/yearlyCo2.json";
import {Chart as chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js/auto";
import 'chartjs-adapter-luxon';
chartjs.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
  );


const dKuukausi = kuukausidata.datataulu.map((item) => {return{
kuukausi: item["time"],
kuunCo2: item["monthlyCo2"],
}});
const dVuosi = vuosidata.datataulu.map((item) => {return{
vuosi: item["time"],
vuodenCo2: item["yearlyCo2"],
}});

export default function Visu(){
   const Visuilua = {
        datasets: [

            {
                label:"Mauna Loa annual Co2",
                data:dVuosi,
                borderColor:'rgb(255,99,132)',
                backgroundColor:'rgba(255,99,132,0,5)',
                yAxisID: "vuodenCo2",
                parsing:{
                    xAxisKey: "vuosi",
                    yAxisKey: "vuodenCo2",
                pointRadius: 0,
                
            },
            },
            {
                label: "Mauna Loa monthly Co2",
                data:dKuukausi,
                borderColor:'rgb(255,99,132)',
                backgroundColor:'rgba(255,99,132,0,5)',
                yAxisID:"vuodenCo2",
                xAxisID: "vuosi",
                parsing:{
                    yAxisKey:"kuunCo2",
                    xAxisKey:"kuukausi",
                    pointRadius: 0,
                },
            },
        ],
    };
const options = {
    responsive: true,

    interaction: {
        mode: "false",
        intersect: false,
    },
    elements:{
        point:{
            borderWidth: 0,
            radius: 0,
        },
    },
    stacked: false,
    plugins: {
        legends:{
            position: "top",
        },
        title:{
            display:true,
            text:"Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958",
        },
    },
    scales: {
        vuodenCo2:{
            type: "linear",
            display: true,
            position: "left",
        },
        x:{
            ticks:{
                source:"dKuukausi",
                autoskip:true,
                min: 0,
                display: false,
            },
            grid: {
                drawBorder: false,
                display: false,
            },
            type: "time",
            time:{
                unit: vuosidata === "year",
                autoskip: true,
                displayFormats: {
                    year: "y",
                },
            },
        },
    },
};
return (
    <div style={{ width: "1600px", height: "850px" }}>
      <h1>Visualisointi 2</h1>
      <Line options={options} data={Visuilua} />
    </div>
  );
};
