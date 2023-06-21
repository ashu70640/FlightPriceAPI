const express=require('express');
const router = express.Router();
const flightController=require('../controller/flight');

router.get('/flight-price',flightController.getPrices);

module.exports=router;