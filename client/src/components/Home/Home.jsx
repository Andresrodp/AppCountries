import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import Country from "../Country/Country";
import Pages from "../Pages/Pages";
import './Home.css';


function Home () {
    const dispatch = useDispatch()
    const countries = useSelector(state=>state.countries)
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setcountriesPerPage] = useState(10);
    const lastIndex = currentPage * countriesPerPage;
    const firstIndex = lastIndex - countriesPerPage;
    const currentCountries = countries.slice(firstIndex, lastIndex);

    const paginas = (page)=>{
        setCurrentPage(page)
    }

    useEffect(()=>{
        dispatch(getAllCountries())
    }, [dispatch])
    
        return(
            <div className= "containerCountries" >
                <div>
                    <Pages
                        countriesPerPage={countriesPerPage}
                        countries={countries.length}
                        paginas = {paginas}
                    />
                </div>
                <div>
                    {currentCountries.map((country)=>{return <Country 
                        key={country.ID}
                        country={country}
                    />})}
                </div>
                
            </div>
        )
}

export default Home;