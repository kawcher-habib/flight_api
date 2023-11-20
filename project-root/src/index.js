const express = require('express');
const flightRoute = require("../src/routes/airsearch");

const app = express();

app.use('/api',flightRoute);

app.listen(3000, ()=>{
    console.log("Server is running");
})