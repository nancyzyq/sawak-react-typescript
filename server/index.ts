// const express = require('express')
import express from 'express'
// var cors = require('cors')
import cors from 'cors'
// const bodyParser = require('body-parser')
// var mongoose = require('mongoose')
import mongoose from 'mongoose'
// const ingredientRouter = require('./routes/ingredient')
// const categoryRouter = require('./routes/category')
// const userRouter = require('./routes/user')
// const menuitmeRouter = require('./routes/menuitem')

const server = express()
const port = 3001

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "*");
	next();
});
// server.use(bodyParser.json());
server.use(express.static('public'));
// var opt = {
// 	// useNewUrlParser: true,
// 	// useUnifiedTopology: true,
// 	user: 'Admin',
// 	pass: '987604062Steven',
// 	// poolSize: 5,
// 	auth: {
// 		authdb: 'sawakdb'
// 	}
// 	// authSource: 'sawakdb'
//   }

// mongoose.connect('mongodb://Admin:987604062Steven@54.206.204.237:27017/sawakdb').catch(err => console.log(err))
const connectionString = 'mongodb://Admin:987604062Steven@54.206.204.237:27017/sawakdb';

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error: any) => {
    console.log('Error connecting to database', error);
  })

server.get('/', (req, res, next) => res.send([{mes: 'Hello'}, {mes: 'World'}]))

server.listen(port, () => console.log(`Example app listening on port ${port}!`))

// ingredientRouter(server)
// categoryRouter(server)
// userRouter(server)
// menuitmeRouter(server)

