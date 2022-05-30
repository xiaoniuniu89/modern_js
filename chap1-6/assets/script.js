// const grade = 'F';

// const { text } = require("express");


// switch(grade){
//     case 'A':
//         ('its a')
//         break
    
//     case 'D':
//         console.log('its d')
//         break

//     default:
//         console.log('its not valid')
//         break
// }

// // let and const benefit from being in block scope ~ if you use var then it canbe accessed outside and overwritten 


// // const calcArea = function(radius){
// //     return 3.14 * radius**2;
// // }

// const calcArea = (radius, pi) => pi * radius**2;

// const area = calcArea(12, 3.14);
// console.log(area)

// greet = () => 'hello, world';
// const result = greet();
// console.log(result)


// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total
// }

// console.log(bill([12.5, 15, 30], 0.2))


// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']


// let html = ``;

// // const logPerson = (person, index) => {
// //     console.log(`${index + 1}: ${person}`)
// // }

// // people.forEach(logPerson)


// people.forEach(person => 
//     html += `<li style="color: purple">${person}</li>`
// )

// let ul = document.querySelector('.people-list')
// ul.innerHTML=html;

// // object literals ~ just dictionaries 

// // let user = {
// //     name: 'crystal',
// //     age: 30, 
// //     email: 'crystal@thenetnija.com',
// //     location: 'berlin',
// //     blogs: ['why this', '10 things']
// // };

// // console.log(user.name)

// // user.age = 35;

// // console.log(user.age)

// // if(typeof user == 'object'){
// //     console.log('it is a user object')
// // }


// let user = {
//     name: 'crystal',
//     age: 30, 
//     email: 'crystal@thenetnija.com',
//     location: 'berlin',
//     blogs: [
//         {
//             title: 'why mac and cheese',
//             likes: 10
//         },
//         {
//             title: 'why i didnt learn this before',
//             likes: 30
//         }
//     ],
//     login(){
//         console.log('the user is logged in')
//     },
//     logout(){
//         console.log('the user is logged out')
//     },
//     logBlogs(){
//         console.log('user blogs:')
//         this.blogs.forEach(blog => {
//             console.log(blog)
//         })
//     }
// };

// // user.login()
// // user.logBlogs()


// // console.log(Math.PI)
// // console.log(Math.E)

// // const area2 = 7.7
// // console.log(Math.ceil(area2))
// // console.log(Math.floor(area2))
// // console.log(Math.round(area2))
// // console.log(Math.trunc(area2))


// // random no

// // random = (Math.random() * 100 )
// // console.log(Math.round(random))


// // const article = document.querySelector('article')

// // console.log(article.children);



// // console.log(Array.from(article.children));




// // Array.from(article.children).forEach(child => {
// //     child.classList.add('new-class')
// // })

// // const title = document.querySelector('h2')

// // console.log(title.parentElement)

// // title.parentElement.classList.add('article-class')

// // console.log(title.nextElementSibling)

// const ull = document.querySelector('ul')
// const btn = document.querySelector('button')
// btn.addEventListener('click', () => console.log('you clicked me'))

// // const items = document.querySelectorAll('li')
// // items.forEach(item => item.addEventListener('click', e => {
// //      console.log('e in li'); 
// //      e.stopPropagation() // stop event bubbling
// //      e.target.remove();

// //     }))

// btn.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     ull.prepend(li)
// })

// ull.addEventListener('click', e => {
//     if (e.target.tagName === 'LI'){
//         e.target.remove()
//     }
// })


// const copy = document.querySelector('.copy-me')

// copy.addEventListener('copy', () => {
//     console.log('hey!')
// })

// const box = document.querySelector('.box');
// box.addEventListener('mousemove', e => {
//     console.log(e.offsetX, e.offsetY)
//     box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`
// })

// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY)
// })


// const button = document.querySelector('button')
// const popup = document.querySelector('.popup-wrapper')
// const close = document.querySelector('.popup-close')

// button.addEventListener('click', () => {
//     popup.style.display = 'block';
// })

// close.addEventListener('click', () => {
//     popup.style.display = 'none';
// })


// popup.addEventListener('click', () => {
//     popup.style.display = 'none';
// })

// const form = document.querySelector('.test-form');
// const input = document.querySelector('#test-text');
// const timer = document.querySelector('.timer')
// const pattern = /^[0-9]{1,3}$/


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(input.value)
//     if(pattern.test(input.value) === true){
//         let output = 0
//         const t_timer = setInterval(() => {
//             timer.textContent = `${output}`
//             if (output == input.value){
//                 clearInterval(t_timer)
//             } else {
//                 output++
//             }
//         }, 1)
//     }else {
//         alert('invalid input! choose a number between 0-999')
//     }
    
    
//     pattern.test(username.value) ? console.log(username.value) : console.log('Invalid Name')
//     console.log(username.value.search(pattern))
// });
// form.addEventListener('keyup', (e) => {
//     console.log(input.value)
// })

const scores = [10, 30, 15, 25, 50, 40, 5]

const new_scores = scores.filter(score => score > 20);
console.log(new_scores)

const new_scores_two = new_scores.map(score => score / 2 )
console.log(new_scores_two)