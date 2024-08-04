const app = require('./app');
const connectDatabase = require('./config/database')
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'})

connectDatabase();

function checkStatuses() {
	fetch('http://raspberrypi.local:4001/api/v1/device/update-status')
	  .then(response => response.json())
	  .then(data => {
		console.log('Statuses updated:', data);
	  })
	  .catch(error => {
		console.error('Error updating statuses:', error);
	  });
  }
  
  // Call checkStatuses every minute
  setInterval(checkStatuses, 5000); // 60000 ms = 1 minute
  
  // Optionally, call it immediately on startup
  checkStatuses();
app.listen(process.env.PORT, () => {
	console.log(`server started on port:' ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});