'use strict';

var s = {
  a: 'Hello'
};

var concat = s.a + ' World';

var arr = [5, 4, 3, 2, 1];
var b = arr[2];
var className = b;

console.log(className);

arr.forEach(function (ele, index, arr) {
  console.log(index, ele, arr);
});

//mixin 混入

function extend(sourceObj, targetObj) {
  // zhu
  // sdfsdf
  for (var key in sourceObj) {

    if (!(key in targetObj)) {
      targetObj[key] = sourceObj;
    }
  }

  return targetObj;
}
// $('#d1').addEventListener('click', () => {
//   console.log(hello);
// }, false);

var reg = /foo 1234/;
var s1 = '123';
var RIGHT = 123;

if (s1 === RIGHT) {
  console.log(RIGHT);
}
function foo(a, b, c) {
  console.log(a, b, c);
}
for (var i = 1; i < 10; i++) {
  foo(1, 2, 3);
}
//# sourceMappingURL=test.js.map
