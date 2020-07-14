const person = {
  name: 'mason',
  sleep: function () {
    console.log(`${this.name} is sleeping`);
  }
};

var prototype = {
  sleep: function () {
    console.log(`${this.name} is sleeping`);
  },
  eat: function () {
    console.log(`${this.name} is sleeping`);
  }
};

function Person(name) {
  // this = Object.create(Person.prototype);
  this.name = name;
  // person.sleep = methods.sleep;
  // person.eat = methods.eat;
  // person.play = methods.play;
  // person.xxx = methods
  // return this;

  // return this;
}

Person.prototype.sleep = function () {};

// Object.create()   -> 创建一个新的对象，并将该对象的原型指向传入对象

Array.prototype.myForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i] * 2);
  }
};
