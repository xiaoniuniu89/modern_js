// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', '50');

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// updating data
localStorage.setItem('name', 'luigi');
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

localStorage.setItem('user', 'Daniel')
localStorage.user = 'Test'
// localStorage.removeItem('user')
localStorage.clear()

const toDos = [
    {text: 'lorum', author: 'dan'},
    {text: 'ipsum', author: 'milo'}
]

console.log(JSON.stringify(toDos))

localStorage.setItem('todos', JSON.stringify(toDos))

const stored = localStorage.getItem('todos');

let arr = JSON.parse(stored)

arr.map((item) => {console.log(item.text)})
