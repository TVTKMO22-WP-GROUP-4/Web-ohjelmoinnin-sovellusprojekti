import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import './LoginService.css'

function LoginService() {
    const [error, setError] = useState("");
    const nav = useNavigate()

    const onSubmit = async (event) => {    
        event.preventDefault();
        const formData = new FormData();
        formData.append('uname', event.target.fname.value);
        formData.append('pw', event.target.passwd.value);

        //Save response token in localstorage
        axios.post('http://localhost:8080/login', formData)
          .then(response => {
              localStorage.setItem("token", response.data);
              setError('');
              nav('/visualisation', {state: event.target.fname.value}); // Tähän se siirtyminen sivulle jossa on visualisoinnit
            })
          .catch(error => {
            setError('Väärä käyttäjätunnus tai salasana');
         })
    }

  return (
    <div className="kayttaja">
        <form className="form"onSubmit={ onSubmit }>
        <p className='heading'>Kirjaudu sisään</p>
            <input className="input" placeholder='Käyttäjänimi' type="text" id="fname" name="fname" />
            <input className="input" type="password" placeholder='Salasana' id="passwd" name="passwd" />
            <input type="submit" className="kirjaudu" value="Kirjaudu" />
            {error ? <p className="errorText">{error}</p> : null}
        </form>
    </div>
  );
}

export default LoginService;