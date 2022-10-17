'use strict';

const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const basicAuth = require ('./auth/middleware/basic');
const authRouter = require('./auth/router');


app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to the server ');
});



app.use(express.json());
app.use(express.urlencoded)({extended:true});
app.use(authRouter);


app.get('/hello', basicAuth, (req, res, next) => {
  let { name } = req.query;
  res.status(200).send(`Welcome ${name}! this route is now secured by Basic Auth!!!`);
});




function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start };
