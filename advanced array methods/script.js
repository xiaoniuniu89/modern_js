// filter
// filter values from an arrey that dont pass a test

// const scores = [10, 30, 15, 25, 50, 40, 5]


// const filterScores = scores.filter((score) => {
//     return score > 20;
// })

// console.log(filterScores)

// const users = [
//     {name: 'shaun', premium: true},
//     {name: 'yoshi', premium: false},
//     {name: 'mario', premium: false},
//     {name: 'chun-li', premium: true}
// ]


// const premiumUsers = users.filter(user => user.premium)

// console.log(premiumUsers)


// map
// go through an array and do something to each of them

// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price) => {
//     return price / 2
// })

// console.log(salePrices)


const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shell', price: 50},
];

// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} euros`
// })

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} euros`)


console.log(promos)


// const reducedProducts = products.map((product) => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price/2}
//     }else{
//         return product
//     }
// })

// const firstMushroom = products.find(product => {
//     return product.name == 'mushroom'
// })

// console.log(firstMushroom.name, firstMushroom.price)


// console.log(reducedProducts)

// reduce method 
// const scores = [10, 20, 60, 40, 70, 90, 30]

// const result = scores.reduce((acc, curr) => {
//     if(curr > 50){
//         acc++;
//     }
//     return acc;
// }, 5)

// console.log(result)




// const users = [
//     {name: 'mario', score: 50},
//     {name: 'yoshi', score: 30},
//     {name: 'mario', score: 70},
//     {name: 'chun-li', score: 60}
// ]

// const marioTotal = users.reduce((acc, curr) => {
//     if(curr.name === 'mario'){
//         acc += curr.score;
//     }
//     return acc;
// }, 0)

// console.log(marioTotal)

// find 

// const scores = [10, 20, 60, 40, 5, 50, 70, 90, 30];

// const firstHighScore = scores.find(score => score > 50)

// console.log(firstHighScore)
// console.log('sorted', scores.sort())
// console.log('reverse', scores.reverse())

// scores.sort((a, b) => {
//     if(a > b){
//         return -1
//     } else if(b > a){
//         return 1
//     }else {
//         return 0
//     }
// })
// console.log(scores)

// scores.sort((a, b) => a - b)

// console.log(scores)
