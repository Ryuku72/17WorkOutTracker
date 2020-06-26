const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", function (req, res) {
  db.Workout.find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

//Create workout
router.post("/api/workouts", (req, res) => {
  //creates ID for new workout
  db.Workout.create({ req })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.put("/api/workouts/:id", function (req, res) {
  //only works for continue workout
  console.log(req.params.id);
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((result) => {
      let duration = 0;
      result.exercises.forEach((exercise) => (duration += exercise.duration));
      db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { totalDuration: td } },
        { new: true }
      ).then((result) => {
        res.json(result);
      });
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/api/workouts/range", (req, res) => {
//populate graph
  db.Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
