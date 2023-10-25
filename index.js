// let x = 10;
// let y = 10;
// let prom = new Promise((resolve, reject) => {
//   if (x == y) {
//     resolve('Equal Values')
//   } else {
//     reject('Unequal Values')
//   }
// })
// prom.then((messagee) => { console.log(messagee) });
// prom.catch((messagee) => { console.log(messagee) });
// prom.finally((message) => { console.log('Succes') })



// p1 = Promise.resolve(50);
// p2 = 200;
// p3 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 100, 'geek');
// });
// Promise.all([p1, p2, p3]).then(function (values) {
//   console.log(values);
// });


const data = [1, 2, 3, 4, 5];
Array.prototype.myCustomFilter = function (fn) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};
const filteredData = data.myCustomFilter(function (el) {
  if (el > 2) return el;
});
console.log(filteredData);