import React from 'react';
import {useLocation} from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './visualisation.css';
import { Ekavisualisointi } from '../Ekavisualisointi/Ekavisualisointi';
import { Toinenvisualisointi } from '../Toinenvisualisointi/Toinenvisualisointi';
import { Kolmasvisualisointi } from '../Kolmasvisualisointi/Kolmasvisualisointi';
import { Viidesvisualisointi } from '../Viidesvisualisointi/Viidesvisualisointi';
import { useState, useEffect } from 'react';

function Visualisation() {
    const location = useLocation();
    const nav = useNavigate();

    const poistaKayttaja = () => {
        axios.delete('http://localhost:8080/user/' + location.state)
        .then(response => {
            localStorage.removeItem("token");

            if (response.data) {
                nav('/');
            } else {
                alert('Käyttäjän poisto epäonnistui');
            }
        })
        .catch(error => {
            alert(error.message);
        })
      }

      const [checked, setChecked] = useState("lampoTila");

  return (
    <div className="poistoalue">
      <button className="poista" onClick={poistaKayttaja}>Poista käyttäjä</button>

      <div className="radiobuttons">
        <input className='lampotilaButton' type="radio"
            checked={checked === "lampoTila"}
            name="lampoTila" value="lampoTila"
            onChange={(e) => {
                setChecked(e.target.value)
            }}
        /> Lämpötilatiedot ja co2 pitoisuudet

        <input className='lampotilaButton' type="radio"
            checked={checked === "paastoLahteet"}
            name="paastoLahteet" value="paastoLahteet"
            onChange={(e) => {
                setChecked(e.target.value)
            }}
        /> Päästölähteet

        {
          checked === "lampoTila" && 
          <div>
            <Ekavisualisointi />
            <Toinenvisualisointi />
            < Kolmasvisualisointi />
          </div>
        }
        {
          checked === "paastoLahteet" && 
          < Viidesvisualisointi />
        }
      </div>
    </div>
  );
}

export default Visualisation;