// scope 作用域
// closure 闭包

var name = 'mason';

function foo() {
  console.log(name);
  var age = 10;

  function bar() {}
}

/*
lexical environment 词法作用域
{
  name: xxx,
  foo: {
    age,
    bar: {}
  }

}


*/
