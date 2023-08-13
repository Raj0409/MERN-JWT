const exp = require('constants')
const express = require('express')
const {errorHandler} = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const bodyParser = require('body-parser')

connectDB()
const app =  express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api/getGoals',require('./routes/goalRoutes'))
app.use('/api/getUsers',require('./routes/userRoutes'))

app.use(errorHandler);
app.listen(port,()=> console.log("Server started succesfully on port",port));