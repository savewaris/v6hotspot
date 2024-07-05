const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false // Use this option only if your PostgreSQL instance requires SSL and is self-signed
  }
});

module.exports = pool;
