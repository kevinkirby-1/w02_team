const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use('/', require('./routes'));

const port = 8080;

app.listen(process.env.port || port);
console.log('Web Server is listenting at port '+ (process.env.port || port))