var path = require("path");

module.exports = function (app){
    
    app.get("/exercise.js", function (req,res){
        res.sendFile(path.join(__dirname, "public/exercise.html"));
    });

app.get("public/index.js", function (req,res){
    res.sendFile(path.join(__dirname, "public/index.html"))
})
}