import React from "react";
import { Link } from "react-router-dom";


const LandingPage= ()=>{
    return(
        <div>
            <h1>Bienvenido a mi Página de Paises</h1>
            <Link to="/home">
                <button>Entrar</button>
            </Link>
        </div>
    )
}



export default LandingPage;