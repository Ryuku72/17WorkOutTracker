const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  totalDuration: {
    type: Number,
    default: 0,
    required: true,
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Name is Required",
      },
      type: {
        type: String,
        trim: true,
        required: "Type is Required",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
        required: true
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
