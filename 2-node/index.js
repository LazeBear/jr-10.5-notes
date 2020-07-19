const { appStart, timestamp } = require('./timestamp');
// console.log(__filename, __dirname);
appStart();

setTimeout(() => {
  timestamp();
}, 3000);

// common.js module
// ecmascript module (import)
