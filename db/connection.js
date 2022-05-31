const Pool = require('pg').Pool

const config = require('../config.json')

const pool = new Pool({
  host: config.host,
  user: config.user,
  port: config.port,
  password: config.password,
  database: config.database,
  ssl: true,
  connectionString: config.connectionString
})

module.exports = pool