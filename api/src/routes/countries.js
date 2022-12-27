const express = require('express');
const {Countries, Activities} = require('../db.js');
const axios = require('axios');

const RouteCountries = express.Router();

RouteCountries.get('/', async (req, res)=>{
    try {
        const {name}=req.query;
        if(!name){
            const allCountries = await Countries.findAll({attributes:['img_flag', 'name', 'continents']});
            console.log(allCountries.length);
            if(!allCountries.length){
                const appiData = await axios.get('https://restcountries.com/v3.1/all')
                console.log(appiData.data.length);
                const appiCountries = appiData.data.map((country)=>{
                    return {
                        ID: country.cca3,
                        name: country.name.common,
                        capital: country.capital,
                        img_flag: country.flags.png,
                        continents: country.continents,
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population
                    }
                })
                await Countries.bulkCreate(appiCountries);
                const result2 = await Countries.findAll({attributes:['img_flag', 'name', 'continents']});
                res.status(200).json(result2);
            }else{
                res.status(200).json(allCountries);
            }
        }else{
            const appiQuery = await axios(`https://restcountries.com/v3/name/${name}`)
            // console.log(appiQuery.data);
            const arraysearch = appiQuery.data.map((count)=>{
                return {ID: count.cca3};
            })
            console.log(arraysearch);
        let results3 = [];
            for (let i = 0; i < arraysearch.length; i++){
                let countryb = await Countries.findOne({where: {ID: arraysearch[i].ID}, attributes:['img_flag', 'name', 'continents']})
                results3.push(countryb);
            }
            res.status(200).json(results3)
        }
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

RouteCountries.get('/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const detailCountry = await Countries.findByPk(id, {include:[{model: Activities}]})
        if(!detailCountry) throw new Error ("El ID suministrado no está asociado a ningún país")
        res.status(200).json(detailCountry);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = RouteCountries;