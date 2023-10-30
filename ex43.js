var 어레이 = [7, 3, 5, 1, 30];
var 어레이2 = ["b", "c", "a", "d", "f", "e"];
어레이.sort(function (a, b) {
  return a - b; //역순은 b - a
});
console.log("어레이→ " + 어레이);
어레이2.sort(function (c, d) {
  return c < d;
});
console.log("어레이2→ " + 어레이2);

var 어레이3 = [7, 3, 5, 1, 30];
var 새어레이 = 어레이3.filter(function (a) {
  return a < 4; //[조건식] 4이하의 자료만
});
console.log("새어레이→ " + 새어레이);

var 어레이4 = [7, 3, 5, 1, 30];
var 새어레이2 = 어레이4.map(function (a) {
  return a * 4; //[조건식] 4이하의 자료만
});
console.log("새어레이2→ " + 새어레이2);
