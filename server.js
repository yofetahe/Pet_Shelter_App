const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'))

require('./backend/routes')(app);

const server = app.listen(3000, () => { 
  console.log("Server is running on", server.address().port);
});
