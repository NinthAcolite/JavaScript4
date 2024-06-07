const { generateArray } = require('5.js');

describe('generateArray', () => {
    it('должен преобразовать объекты в массивы их значений', () => {
        let array = [[1], {id: 40}, [100], [300], {part: 10}];
        expect(generateArray(array)).toEqual([[1], [40], [100], [300], [10]]);
    });

    it('должен оставить массивы без изменений', () => {
        let array = [[1], [2], [3]];
        expect(generateArray(array)).toEqual([[1], [2], [3]]);
    });
});
