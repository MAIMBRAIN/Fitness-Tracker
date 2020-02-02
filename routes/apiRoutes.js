// Require workout model to display and edit data to DB
const Workout = require("../models/workout");

// Routes to be exported
module.exports = (app) =>
{
    // GET route to read all documents from DB
    app.get("/api/workouts", (req, res) =>
    {
        // Go to DB, Workout collection, and FIND all the data
        db.Workout.find({}, (err, data) =>
        {
            // If theres an error, send it. Otherwise send the data
            if (err)
            {
                res.send(err);
            } else
            {
                res.json(data);
            };
        });
    });

    // GET route to read the last 7 documents in the collection
    app.get("/api/workouts/range", (req, res) =>
    {
        // Go to DB, Workout collection, and FIND the last 7 documents
        db.Workout.find({}, (err, data) =>
        {
            if (err)
            {
                res.send(err);
            } else
            {
                res.json(data);
            }
        }).limit(7);
    });

    // POST route to create a workout document
    app.post("/api/workouts", (req, res) =>
    {
        // Go to DB, Workout collection and create a document to INSERT into collection
        db.Workout.insert(req.body, (err, data) =>
        {
            // If theres an error, send it. Otherwise send the data
            if(err)
            {
                res.send(err);
            } else
            {
                res.send(data);
            };
        });
    });

    // POST route to UPDATE a document
    app.post("/api/workouts/:id", (req, res) =>
    {
        // Go to DB, Workout collection and UPDATE the current document id
        db.Workout.update(
            {
                _id: mongojs.ObjectId(req.params.id)
            },
            {
                $set:
                {
                    type: req.body.type,
                    name: req.body.name,
                    duration: req.body.duration,
                    weight: req.body.weight,
                    reps: req.body.reps,
                    sets: req.body.sets,
                    distance: req.body.distance
                }
            },
            (err, data) =>
            {
                if (err)
                {
                    res.send(err);
                } else
                {
                    res.send(data);
                }
            }
        );
    });
};