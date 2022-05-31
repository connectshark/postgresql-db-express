require('dotenv').config()
const pool = require('./db/connection')
const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true)
  res.header('Access-Control-Allow-Methods', 'GET,POST, OPTIONS')
  res.header("Access-Control-Allow-Headers", 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
  next()
})

app.listen(3300, () => {
  console.log('server!')
})
pool.on('notice', msg => console.warn('notice:', msg))
pool.on('connect',() => console.log('Connected!!!'))
pool.connect()

app.get('/', (req, res) => {
  pool.query(`SELECT * FROM public.users`)
    .then(result => {
      res.json(result.rows)
    })
    .catch(err => console.error(err))
})
