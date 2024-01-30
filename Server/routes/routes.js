// routes.js
const express = require('express');
const router = express.Router();
const db = require('../controllers/dbController');

router.post('/submitForm', (req, res) => {
  const formData = req.body;

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
