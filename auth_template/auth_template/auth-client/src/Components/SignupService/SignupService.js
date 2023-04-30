import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import './SignupService.css'

function SignupService() {
    const [error, setError] = useState("");
    const nav = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault();

        if (event.target.fname.value === '' ) { 
            setError("Käyttäjätunnus ei voi olla tyhjä")
        } else if (event.target.passwd.value === '' ) { 
            setError("Salasana ei voi olla tyhjä")
        } else { 

            const formData = new FormData();
            formData.append('uname', event.target.fname.value);
            formData.append('pw', event.target.passwd.value);
        
            //Save response token in localstorage
            axios.post('http://localhost:8080/register', formData)
            .then(response => {
                localStorage.setItem("token", response.data);
                setError('');
                nav('/');
                })
            .catch(error => {
                console.log('ERROR ', error.message);
                setError(error.message);
            })
        } 
    }


  return (
    <div className="kayttaja">
        <form className="form"onSubmit={ onSubmit }>
            <p className='heading'>Luo käyttäjä</p>
            <input className="input" placeholder='Käyttäjänimi' type="text" id="fname" name="fname" />
            <input className="input" placeholder='Salasana' type="text" id="passwd" name="passwd" />
            <input className="rekisteroidy" type="submit" value="Rekisteröidy" />
            {error ? <p className="errorText">{error}</p> : null}
        </form>
    </div>
  );
}

export default SignupService;