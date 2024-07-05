// server.js
const express = require('express');
const pool = require('./db'); // Adjust path as needed

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (e.g., index.html, CSS, JS)
app.use(express.static('public'));

// Endpoint to fetch fire data
app.get('/api/fire-data', async (req, res) => {
  const { page = 1, limit = 1000 } = req.query;
  const offset = (page - 1) * limit;

  try {
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM fire_data LIMIT ${limit} OFFSET ${offset}`);
    client.release();
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching data', err);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
