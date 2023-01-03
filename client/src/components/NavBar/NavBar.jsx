import React from "react";
import { NavLink } from "react-router-dom";
import './navBar.css';


function NavBar (){

    return (
        <div className="divNav">
            <div>
                <NavLink className="paginaP" to="/home">Página Principal</NavLink>
                <NavLink className="crearActividad" to="/home/activities">Crear Actividad</NavLink>
            </div>
        </div>
    )
}


export default NavBar;