import React from "react";
import './Pages.css';


function Pages({ countriesPerPage, countries, paginas }) {
    let pagesNumbers = [];
    for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
        pagesNumbers.push(i);
    };

    return (
        <div className="PagesNav">
            <nav>
                { pagesNumbers && pagesNumbers.map(number => (
                    <button className="btnPages" onClick={()=>paginas(number)} key={number}>{number}</button>
                ))}
            </nav>
        </div>
    );
}


export default Pages;