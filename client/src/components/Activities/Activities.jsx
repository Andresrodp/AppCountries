import React, { useState } from "react";
import { useEffect } from "react";
import './Activities.css';
import axios from 'axios';
import { useSelector } from 'react-redux';


function Activities (){
    const [input, setInput] = useState({
        name: "",
        duration: "",
        difficulty: 0,
        season: "",
        paises: ""

    });
    const paises = useSelector(state => state.countries)
    const [errors, setErrors] = useState({});

    const handleSubmit = async(event)=>{
        event.preventDefault()
        if(!Object.keys(errors).length){
            const response = await axios.post("http://localhost:3001/activities", input)
            console.log(response.data)
            setInput({
                name: "",
                duration: "",
                difficulty: 0,
                season: "",
                paises: ""
            })
        }else{
            alert ("Campos incompletos")
        }
    }

    const verifyInput = (input)=>{
        const errors = {};
        if (!input.name.length) errors.name= "El campo Nombre no puede estar vacío";
        if (!input.duration.length) errors.duration =  "El campo duración no puede estar vacío";
        if (!input.difficulty.length) errors.difficulty = "Selecciona un nivel de dificultad";
        if (!input.season.length) errors.season = "Selecciona una de las opciones de temporada";
        if (!input.paises.length) errors.paises = "Selecciona un país";
        return errors;
    };
        useEffect (()=>{
            setErrors(verifyInput(input))
        }, [input])
    const handleChange = (event)=>{
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div className="ContainerForm">
            <h3>Crear Actividad</h3>
            <form onSubmit={handleSubmit} className="Formulario">
                <div>
                    <label htmlFor="nombre"><span>Nombre de actividad</span></label>
                    <input type="text" name="name" onChange={handleChange}  />
                    <p>{errors.name && errors.name}</p>
                </div>

                <div>
                    <label htmlFor="duracion"><span>Duración</span></label>
                    <input type="text" name="duration" onChange={handleChange} />
                    <p>{errors.duration && errors.duration}</p>
                </div>

                <div>
                    <label htmlFor=""><span>Dificultad</span></label>
                        <input list="niveles" name="difficulty" onChange={handleChange} />
                        <datalist id="niveles">
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                            <option value="5"></option>
                        </datalist>
                    <p>{errors.difficulty && errors.difficulty}</p>
                </div>

                <div>
                    <label htmlFor=""><span>Temporada</span></label>
                    <input list="temp" name="season" onChange={handleChange} />
                        <datalist id="temp">
                            <option value="Primavera"></option>
                            <option value="Verano"></option>
                            <option value="Otoño"></option>
                            <option value="Invierno"></option>
                            <option value="Todas"></option>
                        </datalist>
                    <p>{errors.season && errors.season}</p>
                </div>
                <div>
                    <label htmlFor=""><span>Pais(es)</span></label>
                    <input list="count" name="paises" onChange={handleChange} />
                    <datalist id="count">
                        {paises.map((pais)=>{
                            return (
                                <option value={pais.ID} key={pais.ID}>{pais.name}</option>
                                )
                        })}
                    </datalist>
                    <p>{errors.paises && errors.paises}</p>
                </div>
                <button>guardar</button>
            </form>
        </div>
    )
}


export default Activities;