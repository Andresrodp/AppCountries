import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';


const LandingPage= ()=>{
    return(
        <div className="Landing">
            <div className="leyenda">
                <h1 className="h1Landing">Bienvenidos a mi Página de Paises</h1>
                    <Link to="/home">
                    <button className="btnLanding">Entrar</button>
                </Link>
            </div>
        </div>
    )
}



export default LandingPage;