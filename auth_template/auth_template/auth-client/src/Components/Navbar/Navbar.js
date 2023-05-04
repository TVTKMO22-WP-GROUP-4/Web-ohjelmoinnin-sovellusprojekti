import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from "react";

import'./Navbar.css'

function Navbar() {
  const nav = useNavigate();

  const [ isLoggedIn , setIsLoggedIn] = useState(false);
  useEffect ( ()=> { setIsLoggedIn(localStorage.getItem("token") == null) } )

  const kirjauduUlos = () => {

    axios.post('http://localhost:8080/logout')
            .then(response => {
                localStorage.removeItem("token");
                nav('/');
                })
            .catch(error => {
                console.log('ERROR ', error.message);
            })
  }

  return (
    <div className="navbar">
        <div>
            <Link className="btn" to="/">Home</Link>
        </div>
        <div className="kirjautuminen">
            { isLoggedIn ? <Link className="btn" to="/login">Kirjaudu</Link> : null}
            { !isLoggedIn ? <Link className="btn" onClick={kirjauduUlos}>Kirjaudu ulos</Link> : null }
            { isLoggedIn ? <Link className="btn" to="/signup">Rekistöröidy</Link> : null }
        </div>
    </div>
  );
}

export default Navbar;