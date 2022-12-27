const express = require('express');
const {Activities, Countries} = require('../db.js');
const axios =require ('axios');


const turismActivities = express.Router();

turismActivities.post('/', async (req, res)=>{
    try { 
        const {name, difficulty, duration, season, paises} = req.body;
        if (!name || !difficulty || !duration || !season) throw new Error ('datos incompletos');
        const activityC = await Activities.create ({name, difficulty, duration, season});
        console.log(paises);
        await activityC.addCountries(paises);
        res.status(200).send("Creado con éxito");
    } catch (error) {
        res.status(400).json({error: error.message})
    }

})


module.exports = turismActivities;