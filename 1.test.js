const sumValues = (obj) => {
    return Object.values(obj).reduce((a, b) => a + b, 0);
}

test('Value test', () => {
    let obj = {
        price1: 100,
        price2: 150,
        price3: 200,
        price4: 100,
        price5: 150,
    }
    expect(sumValues(obj)).toBe(700);
});
