const { getCountries,getCountryById,getCountryByName } = require('../controllers/countryC');
const { Router } = require('express');

const router = Router();


router.get('/', getCountries)
router.get('/:id', getCountryById)








module.exports = router;