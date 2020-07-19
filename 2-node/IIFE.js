const obj = {};

(function (myObject) {
  let startTime;

  function appStart() {
    startTime = new Date();
    console.log('app started');
  }

  function timestamp() {
    console.log(`${new Date() - startTime} ms passed`);
  }
  // myObject.timestamp = timestamp;
  myObject.appStart = appStart;
})(obj);

obj.appStart();
obj.timestamp();
