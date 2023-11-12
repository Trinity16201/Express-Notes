const express = require('express');
const index = require('./routes/htmlroutes');
const api = require('./routes/api')
// const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(index);
app.use(api);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
