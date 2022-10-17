'use strict';
const express = require('express');
const router = express.Router();
const bcrypt = require ('bcrypt');
const UsersModel = require ('./models/usersModel');
const { basicAuth } = require('./middleware/basic');


router.post('/signup', async(req,res,next)=>{
  console.log ('you are here');
  try{
    let {username,password}= req.body;
    let encryptedPassword = await bcrypt.hash(password,5);

    let user = await UsersModel.create({
      username,
      password: encryptedPassword,
    });
    res.status(200).send(user);
  }catch(err){
    next('signup error');
  }
});

router.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).send(req.user);
});

