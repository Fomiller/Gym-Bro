const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    required:(true, 'Exercise requires name')
  },
  muscleGroup: {
    type: String,
    required: (true, "Musle group is required")
  },
  primaryMuscle: {
    type: String,
    required: (true, "Primary muscle is required")
  },
  secondaryMuscle: {
    type: String,
    required: (true, "Secondary muscle is required")
  },
}, { toJSON: {virtuals: true} });

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;