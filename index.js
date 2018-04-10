const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      {apiController} = require('./controllers/api.controller'),
      {routesController} = require('./controllers/routes.controller'),
      {functionsController} = require('./controllers/functions.controller'),
      {generateDir} = require('./utils/generateDir');

app.use(bodyParser.json());
app.use(cors({origin: '*'}));

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});

app.post('/generate', (req, res) => {
  generateDir();
  apiController(req.body.apiSchema);
  res.send("module generated successfully");
});
