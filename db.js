// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hotspot_data',
  password: 'Save_030945',
  port: 5432,
});

module.exports = pool;
