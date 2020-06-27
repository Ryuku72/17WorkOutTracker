const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req,res){
    // res.sendFile(path.join(__dirname, '../public/mock/index.html'));
    res.render("index")
})

router.get('/exercise', function(req, res) {
   // res.sendFile(path.join(__dirname, '../public/mock/exercise.html'));
   res.render("exercise")
});

router.get('/stats', function(req, res) {
   // res.sendFile(path.join(__dirname, '../public/mock/stats.html'));
   res.render("stats")
});

module.exports = router