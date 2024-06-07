const { checkObj } = require('4.js');
describe('checkObj', () => {
    it('должен возвращать true, если ключ "particle" существует в объекте', () => {
        const obj = {id: 1, particle: 10};
        expect(checkObj(obj)).toBe(true);
    });

    it('должен возвращать false, если ключ "particle" не существует в объекте', () => {
        const obj = {id: 2, name: "tag"};
        expect(checkObj(obj)).toBe(false);
    });
});
