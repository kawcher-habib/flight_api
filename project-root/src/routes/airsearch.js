const express = require('express');

const routes = express.Router();

routes.get("/flight", ()=>{
    console.log("Hello world i am from  flight route api");
});

module.exports = routes;