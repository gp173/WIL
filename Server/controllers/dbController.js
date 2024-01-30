// dbController.js
const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

// // Set up MySQL connection
const db = mysql.createConnection(dbConfig);

// Connect to MySQL
 db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = db
