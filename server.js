//module import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");


const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb+srv://test1234:test1234@cluster0-sjwmf.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error",console.error.bind(console,'connection error'));

db.once('open',() =>{
    console.log("Database connected!!!")
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.user(passport.initialize())


app.use("/user", userRoutes)

app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));