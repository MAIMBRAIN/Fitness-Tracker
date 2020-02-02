// Dependency
const mongoose = require("mongoose");

// Declare using schema with mongoose
const Schema = mongoose.Schema;

// Workout model
const WorkoutSchema = new Schema(
    {
        day:
        {
            type: Date,
            default: Date.now
        },
        exercises:
        {
            type: {type: String},
            name: {type: String},
            duration: {type: Number},
            weight: {type: Number},
            reps: {type: Number},
            sets: {type: Number},
            distance: {type: Number}
        }
    }
);

// Prepare Workout model to be exported using WorkoutSchema
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the model Workout
module.exports = Workout;