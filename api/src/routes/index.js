const { Router } = require('express');
const Activity = require('./activities');
const Countries = require('./countries')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/activity', Activity)
router.use('/countries',Countries)


module.exports = router;
