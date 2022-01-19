const { addActivity, getAllActivities } = require('../controllers/activitiesC');
const { Router } = require('express');

const router = Router();


router.get('/',getAllActivities)
router.post('/', addActivity)





module.exports = router;
