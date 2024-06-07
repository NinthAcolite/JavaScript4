let testProducts = [
  {id: 1, title: 'тестовый товар', price: 1000, count: 15, marks: [5, 5, 5]},
  {id: 2, title: 'тестовый товар', price: 850, count: 5, marks: [4, 4, 4]},
  {id: 3, title: 'тестовый товар', price: 500, count: 20, marks: [3, 3, 3]}
];

function testFilterByCount() {
  let result = testProducts.filter(product => product.count > 10);
  console.log(result.length === 2 ? 'testFilterByCount passed' : 'testFilterByCount failed');
}

function testFindProductByPrice() {
  let result = testProducts.find(product => product.price >= 800 && product.price <= 900);
  console.log(result.price === 850 ? 'testFindProductByPrice passed' : 'testFindProductByPrice failed');
}

function testSortByPrice() {
  let result = [...testProducts].sort((a, b) => b.price - a.price);
  console.log(result[0].price === 1000 && result[1].price === 850 && result[2].price === 500 ? 'testSortByPrice passed' : 'testSortByPrice failed');
}

function testTotalCost() {
  let result = testProducts.reduce((total, product) => total + product.price * product.count, 0);
  console.log(result === 27500 ? 'testTotalCost passed' : 'testTotalCost failed');
}

function testTotalMarks() {
  let result = testProducts.map(product => ({...product, marks_total: product.marks.reduce((a, b) => a + b, 0)}));
  console.log(result[0].marks_total === 15 && result[1].marks_total === 12 && result[2].marks_total === 9 ? 'testTotalMarks passed' : 'testTotalMarks failed');
}

testFilterByCount();
testFindProductByPrice();
testSortByPrice();
testTotalCost();
testTotalMarks();
