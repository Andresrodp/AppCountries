const { Router } = require('express');
const turismActivities = require('./activities');
const RouteCountries = require('./countries');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/activities', turismActivities);
router.use('/countries', RouteCountries);

module.exports = router;
