const express = require('express');
const cors = require('cors');
const app = express();
const os = require('os');
const eggs = require('./routes/eggs.js');
const cans = require('./routes/cans.js');
const barcode = require('./routes/barcode.js');
const bottle = require('./routes/bottle.js');
const rice = require('./routes/rice.js');
const device = require('./routes/device.js');

app.use(cors({origin: true}));
app.get('/api/v1/hostname', (req,res)=>{
    const networkInterfaces = os.networkInterfaces();
let ipAddress = '';

for (const interfaceName in networkInterfaces) {
  for (const interfaceInfo of networkInterfaces[interfaceName]) {
    if (interfaceInfo.family === 'IPv4' && !interfaceInfo.internal) {
      ipAddress = interfaceInfo.address;
      break;
    }
  }
  if (ipAddress) break;
}

res.json({ hostname: ipAddress });
})
app.use(express.json());

app.use('/api/v1',eggs);
app.use('/api/v1',barcode);
app.use('/api/v1',cans);
app.use('/api/v1', bottle);
app.use('/api/v1', rice);
app.use('/api/v1', device);


module.exports = app;