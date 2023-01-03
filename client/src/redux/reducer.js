import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_DETAIL,
    ERROR,
    FIND_COUNTRY
} from './actions';

const initialState = {
    countries: [],
    activities: [],
    countryDetail:{},
    error: {}
}

function rootReducer (state = initialState, action){
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
            countryDetail: action.payload
        }
        case FIND_COUNTRY:
            return {
                ...state,
            countries: action.payload
        }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {...state}
    }
}


export default rootReducer;
