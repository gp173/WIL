// routes.js
const express = require('express');
const router = express.Router();
const db = require('../controllers/dbController');



router.get('/getAllProjects', (req, res) => {
  // Retrieve all projects from the database
  const sql = 'SELECT * FROM `project`';

  db.query(sql, (err, results) => {
    console.log(results);
    if (err) {
      console.error('MySQL retrieval error:', err);
      res.status(500).send('Error retrieving data from the database');
    } else {
      console.log('Projects retrieved successfully');
      res.status(200).json(results);
    }
  });
});

router.post('/submitForm', (req, res) => {
  const formData = req.body;
  console.log(formData);

  // Insert form data into the database
  const sql = 'INSERT INTO project SET ?';

  db.query(sql, formData, (err, result) => {
    if (err) {
      console.error('MySQL insertion error:', err);
      res.status(500).send('Error inserting data into the database');
    } else {
      console.log('Form data inserted successfully');
      res.status(200).send('Form data inserted successfully');
    }
  });
});


module.exports = router;
