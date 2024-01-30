// server.js
require("./controllers/dbController")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});