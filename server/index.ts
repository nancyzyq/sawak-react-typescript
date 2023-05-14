import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import App from './app'
import ingredientRouter from './routers/ingredient'
import categoryRouter from './routers/category'
import menuitemRouter from './routers/menuitem'

let routers = [
  ingredientRouter,
  categoryRouter,
  menuitemRouter
]

let middleware = [
  cors(),
  express.json(),
  express.urlencoded({ extended: true })
]

const app = new App(3001, middleware, routers)
app.listen()

const connectionString = 'mongodb://Admin:987604062Steven@54.206.204.237:27017/sawakdb';

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error: any) => {
    console.log('Error connecting to database', error);
  })