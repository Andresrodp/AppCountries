import React from "react";
import './CountryDetail.css';
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../redux/actions";
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
            <h1>{countryD.ID}  {countryD.name}</h1>
            <img src={countryD.img_flag} alt="" />
            <h2>continente: {countryD.continents}</h2>
            <h3>Capital: {countryD.capital}</h3>
            <h4>area: {countryD.area}</h4>
            <h4>poblacion: {countryD.population}</h4>
            <div>
                <h4>Actividades Turísticas: </h4>
                {countryD.Activities && countryD.Activities.map(act=>{
                    return (
                        <p key={act.ID}>{act.name}</p> 
                    )
                })}
            </div>
            
        </div>
    )
}

export default CountryDetail;