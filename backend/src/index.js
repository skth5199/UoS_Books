const express = require("express");
const helmet = require("helmet");
require('dotenv').config()
const cors = require("cors");
require('./config/dbConnection')
const routes = require("./routes");
const config = require('../src/config')[process.env.NODE_ENV || 'development'];
const log = config.log();

const PORT = process.env.PORT || 8080;
const app = express();

// bodyparser setup
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'}));

// cors
app.use(cors());
// helmet
app.use(helmet());

// Add a request logging middleware in development mode
if (app.get('env') === 'development') {
  app.use((req, res, next) => {
    log.debug(`${req.method}: ${req.url}`);
    return next();
  });
}

// configure routes
app.use(config.contextRoot, routes);

app.get('/_ah/warmup', (req, res) => {
  res.send("Warm Up Handler Response");
});

app.get('/healthCheck', (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

// custom error handler
app.use((error, req, res, next) => {
  let e = { success: false };
  e.msg = error.message ||  "An error occured";
  e.statusCode = error.statusCode || 400;
  if (error.data) e.data = error.data;
  // log.error(error.status);
  if (error.stack) log.error(error.stack);
  return res.status(e.statusCode).json(e);
});

// start listening on port
app.listen(PORT, () =>
  log.info(`Server is listening on port ${PORT} in ${app.get('env')} mode.`)
);
