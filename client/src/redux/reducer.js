import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_DETAIL,
    FIND_COUNTRY,
    FILTER_BY_CONTINENT,
    FILTER_BY_NAME,
    FILTER_BY_POPULATION,
    FILTER_BY_ACTIVITY,
    GET_ALL_ACTIVITIES
} from './actions';

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    countryDetail:{},
}

function rootReducer (state = initialState, action){
    const allCountries = state.allCountries
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
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
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case FILTER_BY_ACTIVITY:
            const activityFilter = action.payload === 'Todos' ? allCountries : state.activities.filter((el) => el.name === action.payload)[0].Countries
            console.log(activityFilter);
            return {
                ...state,
                countries: activityFilter
            }
        case FILTER_BY_CONTINENT:
            const continentFilter = action.payload === 'Todos' ? allCountries : allCountries.filter((el) => el.continents[0] === action.payload)
            return{
                ...state,
                countries: continentFilter
            }
        case FILTER_BY_NAME:
            let sortName = action.payload === 'A-Z' ?
            state.countries.sort((a, b)=>{
                if(a.name > b.name){
                    return 1;
                }
                if(a.name < b.name){
                    return -1;
                }
                return 0;
            }) :
            state.countries.sort((a, b)=>{
                if(a.name > b.name){
                    return -1;
                }
                if(a.name < b.name){
                    return 1;
                }
                return 0;
            })
            console.log(sortName);
            return {
                ...state,
                countries: sortName,
                }
        case FILTER_BY_POPULATION:
            let sortPop = action.payload === "asc" ?
            state.countries.sort((a, b)=>{
                return a.population - b.population;
            }) :
            state.countries.sort((a, b)=>{
                return (a.population - b.population) * -1;
            })
            return {
                ...state,
                countries: sortPop
            }
        default:
            return {...state}
    }
}


export default rootReducer;
