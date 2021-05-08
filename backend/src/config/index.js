const winston = require('winston');
// Load package.json
const pjs = require('../../package.json');

// Get some meta info from the package.json
const { name, version } = pjs;

// Set up a logger
const getLogger = (serviceName, serviceVersion, level) => {
  return winston.createLogger({ 
    level: level,
    defaultMeta: { name: `${serviceName}:${serviceVersion}` },
    transports: [
      new winston.transports.Console({ format: winston.format.simple() })
    ]
  });
};

// Configuration options for different environments
module.exports = {
  development: {
    name,
    version,
    contextRoot: '/api/v1/',
    log: () => getLogger(name, version, 'debug')
  },
  staging: {
    name,
    version,
    contextRoot: '/api/v1/',
    log: () => getLogger(name, version, 'debug')
  },
  production: {
    name,
    version,
    contextRoot: '/api/v1/',
    log: () => getLogger(name, version, 'info')
  }
};
