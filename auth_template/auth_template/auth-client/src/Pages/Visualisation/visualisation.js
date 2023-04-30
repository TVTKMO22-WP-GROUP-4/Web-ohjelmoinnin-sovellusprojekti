import React from 'react';
import {useLocation} from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './visualisation.css';

function Visualisation() {
    const location = useLocation();
    const nav = useNavigate();

    const poistaKayttaja = () => {
        axios.delete('http://localhost:8080/user/' + location.state)
        .then(response => {
            //localStorage.setItem("token", response.data);
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

  return (
    <div className="poistoalue">
      <button className="poista" onClick={poistaKayttaja}>Poista käyttäjä</button>
    </div>
  );
}

export default Visualisation;