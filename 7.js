let products = [
  {id: 1, title: 'велосипед', price: 45000, count: 3, marks: [5, 5, 5]},
  {id: 2, title: 'автомобиль', price: 800, count: 15, marks: [4, 4, 4, 4]},
  {id: 3, title: 'самолет', price: 900, count: 5, marks: [3, 3, 3, 3, 3]},
  {id: 4, title: 'корабль', price: 1000, count: 20, marks: [2, 2, 2, 2, 2]}
];

let task_1 = products.filter(product => product.count > 10);
console.log(task_1);

let task_2 = products.find(product => product.price >= 800 && product.price <= 900);
console.log(task_2);

let task_3 = products.sort((a, b) => b.price - a.price);
console.log(task_3);

let task_4 = products.reduce((total, product) => total + product.price * product.count, 0);
console.log(task_4);

let task_5 = products.map(product => ({...product, marks_total: product.marks.reduce((a, b) => a + b, 0)}));
console.log(task_5);

let task_6 = task_5.sort((a, b) => b.marks_total - a.marks_total);
console.log(task_6);
