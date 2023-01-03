import axios from 'axios';


export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const FIND_COUNTRY = "FIND_COUNTRY";
export const ERROR = "ERROR";







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
            dispatch({
                type: ERROR,
                payload: error
            })
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
            
        }
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
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    }
}
