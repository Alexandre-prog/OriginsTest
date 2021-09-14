require('dotenv').config();

const router = require('./app/router')

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));

app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});