const express = require('express');
const _ = require('lodash');
const { Card, validateCard, generateBizNumber } = require('../models/card');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
 
    const randomNumber = await generateBizNumber(Card);
   
    res.send(randomNumber);
   
  });

module.exports = router;