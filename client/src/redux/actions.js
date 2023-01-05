import axios from 'axios';


export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const FIND_COUNTRY = "FIND_COUNTRY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_POPULATION = "FILTER_BY_POPULATION";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";









export const getAllCountries = ()=>{
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/countries")
            const countries = response.data
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: countries
            })  
        } catch (error) {
            console.log(error.message);
            alert(error.message)
            }
        }
    }

export const findCountry = (name)=>{
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries?name=${name}`)
            const resultSearch = response.data
            dispatch({
                type: FIND_COUNTRY,
                payload: resultSearch
            })
        } catch (error) {
            console.log(error.message);
            alert (error.message)
        }
    }
}
export const getAllActivities = ()=>{
    return async (dispatch)=>{
        try {
            const responseA = await axios.get("http://localhost:3001/activities/all")
            const resultA = responseA.data
            console.log(resultA);
            dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: resultA
            })
        } catch (error) {
            console.log(error.message);
            alert (error.message)
        }
    }
}
export const filterByActivity = (payload)=>{
    console.log(payload);
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
}
export const filterByContinent = (payload)=>{
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}
export const filterByPopulation = (payload) => {
    return {
        type: FILTER_BY_POPULATION,
        payload
    }
}

export const filterByName = (payload)=>{
    console.log(payload);
    return {
        type: FILTER_BY_NAME,
        payload
    }
}
export const getCountryDetail = (id) =>{
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            const detalles = response.data
            dispatch({
                type: GET_COUNTRY_DETAIL,
                payload: detalles
            })
        } catch (error) {
            console.log(error.message);
            alert(error.message)
        }
    }
}
