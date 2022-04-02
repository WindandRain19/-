const Array = [1, 2, 3, 45, 65, 87, 456];

console.log("--------foreach--------");
// foreach 遍历数组
Array.forEach((item, index) => {
  console.log(index, item);
});

console.log("--------filter--------");
// filter 筛选数组
// 存在隐性机制，把符合表达式的都转换成true,不符合的转换成false,因此要注意false,NaN,undefined,null
var filter = Array.filter((item, index) => {
  return item > 25;
});
console.log(filter);

console.log("--------some--------");
// some 查找数组中是否有满足条件的元素
// some 中的return true会停止迭代，而filter和foreach中不会
var some = Array.some((item, index) => {
  return item > 25;
});
console.log(some);

console.log("--------push--------");
// push 在数组后面添加一个元素
Array.push("999");
console.log(Array);

console.log("--------pop--------");
// pop 在数组后面删除一个元素
Array.pop();
console.log(Array);

console.log("--------unshift--------");
// unshift 在数组前面添加，返回数组的长度
var unshift = Array.unshift("0");
console.log(unshift);
console.log(Array);

console.log("--------shift--------");
// shift 在数组前面删除,返回该删除项目
var shift = Array.shift();
console.log(shift);
console.log(Array);

console.log("--------reverse--------");
// reverse 颠倒数组，返回新的数组
var reverse = Array.reverse();
console.log(reverse);

console.log("--------sort--------");
// sort 对数组进行排序，返回新的数组
var sort1 = Array.sort((a, b) => {
  // 降序
  return b - a;
});
console.log("降序", sort1);
var sort2 = Array.sort((a, b) => {
  // 升序
  return a - b;
});
console.log("升序", sort2);

console.log("--------indexOf--------");
// indexOf 查找给定元素的第一个索引 有返回索引号，无返回-1
var indexOf1 = Array.indexOf(3);
console.log(indexOf1);
var indexOf2 = Array.indexOf(999);
console.log(indexOf2);

console.log("--------lastIndexOf--------");
// lastIndexOf 查找给定元素的最后一个索引 有返回索引号，无返回-1
var lastIndexOf1 = Array.lastIndexOf(3);
console.log(lastIndexOf1);
var lastIndexOf2 = Array.lastIndexOf(999);
console.log(lastIndexOf2);

console.log("--------toString--------");
// toString 把数组转换成字符串 返回以一个字符串
var toString1 = Array.toString();
console.log(toString1);

console.log("--------concat--------");
// concat 连接两个或多个数组 返回新的数组
Array1 = [55, 66, 77];
var concat = Array.concat(Array1);
console.log(concat);

console.log("--------slice--------");
// slice 截取数组 返回呗截取的数组
var slice = Array.slice(1, 3);
console.log(slice);

console.log("--------splice--------");
// splice 用于主要是针对数组的插入，删除和替换元素，由参数决定
console.log("**删除**");
// 第一个参数为开始删除项的下标，第二个为删除的数量，返回删除的内容
var splice1 = Array.splice(6, 1);
console.log("返回值", splice1);
console.log(Array);
console.log("**插入**");
// 第一个参数为插入的位置，第二个参数0，第三个参数为插入的值，返回空数组
var splice2 = Array.splice(6, 0, 456);
console.log("返回值", splice2);
console.log(Array);
console.log("**替换**");
// 第一个参数为起始位置，第二参数为删除的数量，第三个参数为插入的值，返回删除的内容
var splice3 = Array.splice(0, 1, 0);
console.log("返回值", splice3);
console.log(Array);

console.log("--------find--------");
// find 用于找出第一个符合条件的数组成员，如果有则返回第一个符合条件的值，如果没有找到返回undefined
var find = Array.find((item, index) => {
  return item > 45;
});
console.log(find);
var find1 = Array.find((item, index) => {
  return item > 999;
});
console.log(find1);

console.log("--------findIndex--------");
// findIndex 用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1
var findIndex = Array.findIndex((item, index) => {
  return item > 45;
});
console.log(findIndex);
var findIndex1 = Array.findIndex((item, index) => {
  return item > 999;
});
console.log(findIndex1);

console.log("--------includes--------");
// includes 用于表示某个数组是否包含给定的值，返回布尔值 有为true,没有为false
var includes1 = Array.includes(0);
console.log(includes1);
var includes2 = Array.includes(999);
console.log(includes2);
