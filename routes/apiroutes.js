const Workout = require ("model/model.js")

module.exports = function (app) {

    app.get("public/api.js", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });

}
