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
        paises: []

    });
    const Paises = useSelector(state => state.countries)
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
                paises: []
            })
        document.querySelector("form.Formulario input[name='name']").value = ""
        document.querySelector("form.Formulario input[name='duration']").value = ""
        document.querySelector("form.Formulario input[name='difficulty']").value = ""
        document.querySelector("form.Formulario input[name='season']").value = ""
        document.querySelector("form.Formulario input[name='paises']").value = ""
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
    const handleClickSubmit = (event)=>{
        event.preventDefault()
        let countryS = document.querySelector("input[name='paises']")
        if(countryS.value !== ""){
            setInput({
                ...input,
                paises: [...input.paises, countryS.value]
            })
        document.querySelector("form.Formulario input[name='paises']").value = ""
        }else{
            alert ("selecciona un país válido")
        }    
    }

    return (
        <div className="ContainerForm">
            <h3 className="tituloForm">Crear Actividad</h3>
            <form onSubmit={handleSubmit} className="Formulario">
                <div>
                    <label htmlFor="nombre"><span className="spanForm">Nombre de actividad:</span></label>
                    <input type="text" className="inputsForm" name="name" onChange={handleChange}  />
                    <p className="pError">{errors.name && errors.name}</p>
                </div>

                <div>
                    <label htmlFor="duracion"><span className="spanForm">Duración:</span></label>
                    <input type="text" className="inputsForm" name="duration" onChange={handleChange} />
                    <p className="pError">{errors.duration && errors.duration}</p>
                </div>

                <div>
                    <label htmlFor=""><span className="spanForm">Dificultad:</span></label>
                        <input list="niveles" className="inputsForm" name="difficulty" onChange={handleChange} />
                        <datalist id="niveles">
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                            <option value="5"></option>
                        </datalist>
                    <p className="pError">{errors.difficulty && errors.difficulty}</p>
                </div>

                <div>
                    <label htmlFor=""><span className="spanForm">Temporada:</span></label>
                    <input list="temp" className="inputsForm" name="season" onChange={handleChange} />
                        <datalist id="temp">
                            <option value="Primavera"></option>
                            <option value="Verano"></option>
                            <option value="Otoño"></option>
                            <option value="Invierno"></option>
                            <option value="Todas"></option>
                        </datalist>
                    <p className="pError">{errors.season && errors.season}</p>
                </div>
                <div>
                    <label htmlFor=""><span className="spanForm">Pais(es):</span></label>
                    <div className="selectCountries">
                        {input.paises.length && input.paises.map(pais=>{
                            return (
                                <p className="preSelect" key={pais}>{pais}</p>
                            )
                        })}
                    </div>
                    <input list="count" className="inputsForm" name="paises" />
                    <datalist id="count">
                        {Paises.map((pais)=>{
                            return (
                                <option value={pais.ID} key={pais.ID}>{pais.name}</option>
                                )
                        })}
                    </datalist>
                    <input type="submit" className="btnAddCountry" onClick={handleClickSubmit}/>
                    <p className="pError">{errors.paises && errors.paises}</p>
                </div>
                <button className="finalSubmit" disabled={Object.keys(errors).length}>guardar</button>
            </form>
        </div>
    )
}


export default Activities;