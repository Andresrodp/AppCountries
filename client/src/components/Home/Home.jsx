import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, 
    findCountry, 
    filterByContinent, 
    filterByName, 
    filterByPopulation,
    filterByActivity,
    getAllActivities
} from "../../redux/actions";
import Country from "../Country/Country";
import Pages from "../Pages/Pages";
import './Home.css';


function Home () {
    const dispatch = useDispatch()
    const countries = useSelector(state=>state.countries)
    const activities = useSelector(state=>state.activities)
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 10;
    const lastIndex = currentPage * countriesPerPage;
    const firstIndex = lastIndex - countriesPerPage;
    const currentCountries = countries.slice(firstIndex, lastIndex);
    const [orden, setOrden] = useState("");


    const handleClick = (event)=>{
        event.preventDefault();
        let name = document.querySelector("div.divPr input[name='busqueda']").value;
        console.log(name);
        dispatch(findCountry(name));
        document.querySelector("div.divPr input[name='busqueda']").value = "";
    }
    const handleClick2 = (event)=>{
        event.preventDefault();
        dispatch(getAllCountries());
    }
    const handleFilterByContinent = (event)=>{
        event.preventDefault();
        dispatch(filterByContinent(event.target.value));
        setCurrentPage(1);
    }
    const handleFilterByName = (event)=>{
        event.preventDefault();
        dispatch(filterByName(event.target.value));
        setCurrentPage(1);
        setOrden (`Alfabético ${event.target.value}`);
    }
    const handleFilterByPopulation = (event)=>{
        event.preventDefault()
        dispatch(filterByPopulation(event.target.value));
        setCurrentPage(1);
        setOrden (`Población ${event.target.value}`)
    }

    const handleFilterByActivity = (event)=>{
        event.preventDefault()
        dispatch(filterByActivity(event.target.value))
        setCurrentPage(1)
        setOrden(`Actividad ${event.target.value}`)
    }

    const paginas = (page)=>{
        setCurrentPage(page)
    }

    useEffect(()=>{
        dispatch(getAllCountries())
    }, [dispatch])

    useEffect(()=>{
        dispatch(getAllActivities())
    },[dispatch])
    
        return(
            <div className= "containerMain" >
                <div className="divPaginado">
                    <Pages
                        countriesPerPage={countriesPerPage}
                        countries={countries.length}
                        paginas = {paginas}
                    />
                </div>
                <div className="containerFyC">
                    <div className="divFiltros">
                        <div className="divPr">
                            <h4>Buscar País:</h4>
                            <input type="text" name="busqueda" />
                            <button className="btnBusqueda" onClick={handleClick}>buscar</button>
                        </div>
                        <div className="divHijoF">
                            <h5>ordenar por población</h5>
                                <select name="poblacion" className="selectF" onChange={event => handleFilterByPopulation(event)}>
                                    <option value="asc">Ascendente</option>
                                    <option value="desc">Descendente</option>
                                </select>
                        </div>
                        <div className="divHijoF">
                            <h5>ordenar alfabéticamente</h5>
                            <select name="alfabético" className="selectF" onChange= {event => handleFilterByName(event)} >
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                            </select>
                        </div>
                        <div className="divHijoF">
                            <h5>Filtrar por continentes</h5>
                            <select name="continentes" className="selectF" onChange= {event => handleFilterByContinent(event)} >
                                <option value="Todos">Todos los continentes</option>
                                <option value="Africa">Africa</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europa</option>
                                <option value="Oceania">Oceanía</option>
                                <option value="North America">América del Norte</option>
                                <option value="South America">América del Sur</option>
                            </select>
                        </div>
                        <div className="divHijoF">
                            <h5>Filtrar por Actividad Turistica:</h5>
                            <select name="actividades" className="selectF" onChange={event =>handleFilterByActivity(event)}>
                                <option value="Todos">Todos</option>
                                {activities.map(activity=>{
                                    return(
                                        <option value={activity.name} key={activity.ID}>{activity.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <button className="btnAllCountries" onClick={handleClick2}>Cargar todos los paises</button>
                    </div>
                    <div className="divCountries">
                        {currentCountries.map((country)=>{return <Country 
                            key={country.ID}
                            country={country}
                        />})}
                    </div>
                </div>
            </div>
        )
}

export default Home;