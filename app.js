
const cors = require("cors")
const express = require("express")
const mustacheExpress = require("mustache-express")
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")

app.listen(8080, function() {
    console.log("server is running ...")
})


let trips = [{title: "Mexico", dateDepart: "10/22/22", dateReturn: "10/29/22"}]


app.get("/", (req, res) => {
    res.render("index", {allTrips: trips})
})


app.post("/", (req, res) => {
    let trip = {title: req.body.title, dateDepart: req.body.dateDepart, dateReturn: req.body.dateReturn}
    trips.push(trip)
    res.render("index", {allTrips: trips})
})