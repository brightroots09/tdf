var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var cors = require("cors")
var morgan = require("morgan");
var path = require("path")
var PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/tdf')));
app.use(cors());
app.use(morgan("dev"))

app.get("/test", function(req, res, callback){
    res.send("This works");
})

app.post("/enroll", function(req, res, callback){
    console.log(req.body);
    res.status(200).send({"message": "Data Recieved"})
})

app.listen(PORT, function() {
    console.log(`Server running at PORT: ${PORT}`)
})