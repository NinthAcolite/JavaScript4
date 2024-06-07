let array = [
    {id: 1, name: 'melon'},
    {id: 2, name: 'banana'},
    {id: 3, name: 'qiwi'},
    {id: 4, name: 'pinapple'}
]

let result = array.map(obj => Object.values(obj));

console.log(result); 
