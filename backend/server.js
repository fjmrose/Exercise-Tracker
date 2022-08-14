const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const uri = MONGO_URI='mongodb+srv://fergusrose:2Bfergie@cluster0.tztsete.mongodb.net/Tracker?retryWrites=true&w=majority'

console.log('connecting to...', uri)
mongoose.connect(uri)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB', error.message)
  })

const exercisesRouter = require('./routes/exercises')
const usersRouter =  require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})