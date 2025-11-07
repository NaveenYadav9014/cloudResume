const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3306;

let pool;
(async function initDb() {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0
    });
    console.log("✅ DB pool created");
  } catch (err) {
    console.error("DB init error:", err);
  }
})();

app.get('/api/status', (req, res) => res.json({ status: 'ok', message: 'Backend running' }));

app.post('/api/apply', async (req, res) => {
  const { name, email, resume } = req.body;
  if (!name || !email || !resume) return res.status(400).json({ message: 'Missing fields' });
  try {
    await pool.query('INSERT INTO applicants (name, email, resume) VALUES (?, ?, ?)', [name, email, resume]);
    res.json({ message: 'Application submitted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'DB error' });
  }
});

app.get('/api/applicants', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, name, email, resume, submitted_at FROM applicants ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'DB error' });
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
