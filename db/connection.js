const Pool = require('pg').Pool

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: true,
  connectionString: process.env.DB_CONNECTION_STRING
})

module.exports = pool