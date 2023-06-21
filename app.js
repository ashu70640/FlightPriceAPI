//I have tested my Flight price API on postman and considered Dummy Data for Creating this API
const express=require('express');
const app=express();
const flightRoute=require('./routes/flight.js');
const path=require('path');

app.use(express.static(path.join(__dirname, 'Dummy')));
const port=3000;
app.use(flightRoute);

app.listen(port,()=>{
    console.log(`Flight prices API listening on port ${port}`);   
})
