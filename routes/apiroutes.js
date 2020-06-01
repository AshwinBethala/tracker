const Workout = require ("../model/model.js")
​
module.exports = function (app) {
​
    app.get("/api/workouts", (req, res) => {
        Workout.find()
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
    });
​
    app.put("/api/workouts/:id", function (req, res) {
​
        const {id, body} = req.params;
​
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
​
    app.post("/api/workouts", function (req, res) {
​
        /* TODO complete create */
        Workout.create()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log(err)
                res.json(err)
            })
    });
​
    app.get("/api/workouts/range", function (req, res) {
​
        /* TODO complete limit */
        Workout.limit()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });
​
}
