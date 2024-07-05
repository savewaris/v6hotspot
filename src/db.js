const { Pool } = require('pg');

// Replace with your Render-managed PostgreSQL database connection URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Use this option only if your PostgreSQL instance requires SSL
  }
});

module.exports = pool;
