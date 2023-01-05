import React from "react";
import './filter.css';
import { findCountry } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { getAllCountries, filterByContinent, filterByName } from "../../redux/actions";

function Filter (){
    const dispatch = useDispatch()
    

    const handleClick = (event)=>{
        event.preventDefault();
        let name = document.querySelector("div.divPr input[name='busqueda']").value
        console.log(name);
        dispatch(findCountry(name))
    }
    const handleClick2 = (event)=>{
        event.preventDefault()
        dispatch(getAllCountries())
    }
    const handleFilterByContinent = (event)=>{
        event.preventDefault();
        dispatch(filterByContinent(event.target.value))
    }
    const handleFilterByName = (event)=>{
        event.preventDefault()
        dispatch(filterByName(event.target.value));
    }
    return(
        <div className="divPr">
            <div>
                <h4>Buscar País:</h4>
                <input type="text" name="busqueda" />
                <button onClick={handleClick}>buscar</button>
            </div>
            <div>
                <h5>ordenar por población</h5>
                <select name="poblacion" >
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
            </div>
            <div>
                <h5>ordenar alfabéticamente</h5>
                <select name="alfabético" onChange= {event => handleFilterByName(event)} >
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
            <div>
                <h5>Filtrar por continentes</h5>
                <select name="continentes" onChange= {event => handleFilterByContinent(event)} >
                    <option value="Todos">Todos los continentes</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceanía</option>
                    <option value="North America">América del Norte</option>
                    <option value="South America">América del Sur</option>
                </select>
            </div>
            {/* <div>
                <select name="turismo">
                    
                </select>
            </div> */}
            <br />
            <button onClick={handleClick2}>Cargar todos los paises</button>
        </div>
    )
}


export default Filter;

