const baseUrl = 'http://localhost:3000';
module.exports = {
  basePath: '/',
  cors: {
    origin: /.*\.enterprise\.com/, // so that local.enterprise.com:8080 is allowed, for example,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Correlation-Id, T-Session-Token',
    credentials: true,
  },
  multiplyApi: {
    baseUrl,
    endpoint: '/math/multiply',
  },
  logging: {
    prettyPrint: false,
    level: 'debug',
    stringify: false,
    humanReadableUnhandledException: false,
    json: true,
    colorize: false,
    timestamp: true,
  },
  debug: true,
};
