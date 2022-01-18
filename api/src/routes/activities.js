const { addActivity } = require('../controllers/activitiesC');
const { Router } = require('express');

const router = Router();


router.post('/', addActivity)





module.exports = router;
