const express = require('express');
const cors = require('cors');
const app = express();

const eggs = require('./routes/eggs.js');
const cans = require('./routes/cans.js');
const barcode = require('./routes/barcode.js');
const bottle = require('./routes/bottle.js');
const rice = require('./routes/rice.js');
app.use(cors({origin: true}));
app.use(express.json());
app.use('/api/v1',eggs);
app.use('/api/v1',barcode);
app.use('/api/v1',cans);
app.use('/api/v1', bottle);
app.use('/api/v1', rice);
module.exports = app;