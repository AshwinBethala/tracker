const Workout = require ("../model/model.js");
module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find()
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
    });
    app.put("/api/workouts/:id", function (req, res) {
        const {id, body} = req.params;
        Workout.findByIdAndUpdate(
            id, 
            { $push: { exercises: body } },
            { new: true}) // Return new updated item as the dbWorkout result
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    app.post("/api/workouts", function (req, res) {
        Workout.create(req.body)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log(err)
                res.json(err)
            })
    });
    app.get("/api/workouts/range", function (req, res) {
        Workout.find()
            .limit(7) // filter and limit 7 records (indicates 1 workout per day during the 7 day week)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });
}