import React from "react";
import './country.css';
import { Link } from "react-router-dom";

function Country ({country}){
    return(
        <div className="Pais">
            <Link to={`/home/country/${country.ID}`}><p className="Nombre">{country.name}</p></Link>
            <img src={country.img_flag} alt="bandera" className="Flag"/>
            <p className="Continente">{country.continents}</p>
        </div>
    )
}


export default Country;