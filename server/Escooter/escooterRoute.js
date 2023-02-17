

const express = require('express')
const router = express.Router()

const {addEscooter, getEscooters} = require('./escooterController')

router.post('/addEscooter', addEscooter);
router.get('/getEscooters', getEscooters);

module.exports = router;