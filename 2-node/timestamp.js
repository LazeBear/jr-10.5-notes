let startTime;

function appStart() {
  startTime = new Date();
  console.log('app started');
}

function timestamp() {
  console.log(`${new Date() - startTime} ms passed`);
}

// module.exports = { appStart: appStart, timestamp: timestamp };
module.exports = { appStart, timestamp };
// exports.appStart = appStart;
// exports.timestamp = timestamp;

// exports = { appStart, timestamp };

// module

// node REPL

// IIFE immediate invoked function expression
// (function () { })()

// __filename, __dirname, exports = module.exports
