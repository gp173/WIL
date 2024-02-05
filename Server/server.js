// server.js
require("./controllers/dbController")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'uniproject',
});

db.connect((err) => {
  if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

// Endpoint to handle form submissions
app.post('/submitProject', (req, res) => {
  const { name, description } = req.body;
  const sql = 'INSERT INTO projects (name, description) VALUES (?, ?)';

  db.query(sql, [name, description], (err, result) => {
    if (err) {
        console.error('Error submitting project: ' + err.message);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
    }
    res.status(200).json({ message: 'Project submitted successfully' });
});
});

// Endpoint to fetch all projects
app.get('/getProjects', (req, res) => {
  const sql = 'SELECT * FROM projects';
  
  db.query(sql, (err, result) => {
      if (err) {
          console.error('Error fetching projects: ' + err.message);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      res.status(200).json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${5001}`);
});