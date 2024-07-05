const express = require('express');
const path = require('path');
const pool = require('./db'); // Adjust path as needed

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (e.g., index.html, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to fetch fire data
app.get('/api/fire-data', async (req, res) => {
  const { page = 1, limit = 1000 } = req.query;
  const offset = (page - 1) * limit;

  try {
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM fire_frequency LIMIT ${limit} OFFSET ${offset}`);
    client.release();
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching data:', err); // Log detailed error message
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Serve index.html for all routes (fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
