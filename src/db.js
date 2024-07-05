const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false // Only if your Render database requires SSL and is self-signed
  }
});

module.exports = pool;
