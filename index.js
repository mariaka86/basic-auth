'use strict';
let {start} = require ('./src/server');
let {sequelizeDatabase} = require ('./src/auth/models/usersModel');

sequelizeDatabase.sync()
  .then(()=>{
    console.log ('You are connected');
    start();
  })
  .catch((e) => console.errer(e));
