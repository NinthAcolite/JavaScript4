const transformToArray = (array) => {
    return array.map(obj => Object.values(obj));
}

test('Checking', () => {
    let array = [
        {id: 1, name: 'melon'},
        {id: 2, name: 'banana'},
        {id: 3, name: 'qiwi'},
        {id: 4, name: 'pinapple'}
    ]
    let expected = [
        [1, "melon"],
        [2, "banana"],
        [3, "qiwi"],
        [4, "pinapple"]
    ];
    expect(transformToArray(array)).toEqual(expected);
});
