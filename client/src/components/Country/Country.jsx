import React from "react";
import './country.css';
import { NavLink } from "react-router-dom";

function Country ({country}){
    return(
        <div className="Pais">
            <NavLink to={`/home/country/${country.ID}`} className="Nombre">{country.name}</NavLink>
            <img src={country.img_flag} alt="bandera" className="Flag"/>
            <p className="Continente">{country.continents}</p>
        </div>
    )
}


export default Country;