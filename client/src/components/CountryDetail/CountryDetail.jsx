import React from "react";
import './CountryDetail.css';
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function CountryDetail (){
    const dispatch = useDispatch();
    const countryD = useSelector(state => state.countryDetail)
    const { id } = useParams();
    console.log(id);
    useEffect(()=>{
        dispatch(getCountryDetail(id))
    }, [dispatch, id])
    console.log(countryD);
    return (
        <div className="DetallePais">
            <h1><span className="countryCode">{countryD.ID}</span>  <span className="countryName">{countryD.name}</span></h1>
            <div className="divInfoPais">
                <div>
                    <img className="imgCountry" src={countryD.img_flag} alt="" />
                </div>
                <div className="divAditionalInfo">
                    <h3>Continente: {countryD.continents}</h3>
                    <h3>Subregion: {countryD.subregion}</h3>
                    <h3>Capital: {countryD.capital}</h3>
                    <h4>Poblacion: {countryD.population}</h4>
                    <h4>Area: {countryD.area} km²</h4>
                </div>
            </div>
            <div className="divActivities">
                <h4>Actividades Turísticas: </h4>
                <div className="containerActivities">
                    {countryD.Activities && countryD.Activities.map(act=>{
                        return (
                            <div className="divIndActivity" key={act.ID}>
                                <h5>{act.name}</h5>
                                <p>Dificultad: {act.difficulty}</p>
                                <p>Duración: {act.duration}</p>
                                <p>Temporada: {act.season}</p>
                            </div> 
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default CountryDetail;