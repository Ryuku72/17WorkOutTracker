const express = require('express')
const router = express.Router();
const db = require('../models');

router.get('/api/workouts', function(req,res){
db.Workout.find({})
.then((data) => {
    console.log(data)
    res.json(data)
})
.catch((error) => {
    res.json(error)
})
})

module.exports = router;