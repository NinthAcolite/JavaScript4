let users = [
  {id:1, name:'Alex', lastname:'Wilyam', age:20},
  {id:2, name:'Steven', lastname:'King', age:34}
];

function addUser(name, lastname, age) {
  let id = users.length + 1;
  users.push({id, name, lastname, age});
}

function updateUser(id, name, lastname, age) {
  for (let user of users) {
    if (user.id === id) {
      user.name = name;
      user.lastname = lastname;
      user.age = age;
      break;
    }
  }
}

function deleteUser(id) {
  users = users.filter(user => user.id !== id);
}


addUser('John', 'Doe', 25);
console.log(users);

updateUser(1, 'Alexander', 'Wilyam', 21);
console.log(users);

deleteUser(2);
console.log(users);
