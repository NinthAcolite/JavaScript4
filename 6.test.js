let testUsers = [
  {id:1, name:'Test', lastname:'User1', age:30},
  {id:2, name:'Test', lastname:'User2', age:40}
];

function testAddUser() {
  addUser('Test', 'User3', 50);
  console.log(users[users.length - 1].name === 'Test' && users[users.length - 1].lastname === 'User3' && users[users.length - 1].age === 50 ? 'testAddUser passed' : 'testAddUser failed');
}

function testUpdateUser() {
  updateUser(1, 'Updated', 'User1', 35);
  console.log(users[0].name === 'Updated' && users[0].lastname === 'User1' && users[0].age === 35 ? 'testUpdateUser passed' : 'testUpdateUser failed');
}

function testDeleteUser() {
  deleteUser(2);
  console.log(users.length === 1 && users[0].id === 1 ? 'testDeleteUser passed' : 'testDeleteUser failed');
}

users = [...testUsers];
testAddUser();
users = [...testUsers];
testUpdateUser();
users = [...testUsers];
testDeleteUser();
