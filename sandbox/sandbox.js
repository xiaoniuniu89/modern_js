

const wrapper = document.querySelector('.wrapper')

// // // function multiplyAll(arr) {
// // //     var product = 1;
// // //     // Only change code below this line
// // //     for(let i = 0; i<arr.length; i++){
// // //         for(let j = 0; j<arr[i].length; j++){
// // //             product *= arr[i][j]
// // //         }
// // //     }
  
// // //     // Only change code above this line
// // //     return product;
// // //   }
  
// // // //   console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

// // //   const scores = [10, 20, 60, 40, 5, 50, 70, 90, 30];

// // //   function breakingRecords(scores) {
// // //     const arr = []
// // //     let max = scores[0]
// // //     let min = scores[0]

// // //     let minScore = scores.reduce((a, c) => {
// // //         if(c < min){
// // //             a++
// // //             console.log(a)
// // //             min = c
// // //         }
// // //         return a
// // //     }, 0)
// // //     let maxScore = scores.reduce((a, c) => {
// // //         if(c > max){
// // //             a++
// // //             max = c
// // //         }
// // //         return a
// // //     }, 0)
// // //     arr.push(maxScore)
// // //     arr.push(minScore)
// // //     return arr
// // // }

// // // // console.log(breakingRecords(scores))

// // // let x = {
// // //     a:1,
// // //     b:2
// // // };

// // // const xArr = Object.values(x);
// // // // console.log(xArr)
// // // const xArr2 = []
// // // for(let i in x){
// // //     xArr2.push(x[i]);
// // // }
// // // // console.log(xArr2)

// // // // reverse a string

// // // const greeting = 'hello';

// // // const reverseSring = (str) => {
// // //     return str.split("").reverse().join("");
// // // }

// // // const reverseGreeting = reverseSring(greeting)
// // // // wrapper.innerHTML += `${reverseGreeting}`

// // // const reverseStringLoop = ((str) => {
// // //     let newString = ''
// // //     for(let i = str.length - 1; i>= 0; i--){
// // //         newString += str[i]
// // //     }
// // //     return newString
// // // })

// // // const reverseGreetingLoop = reverseStringLoop(greeting)
// // // // console.log(reverseGreetingLoop)
// // // const reverseArr = []
// // // for(let i = scores.length - 1; i>=0; i--){
// // //     reverseArr.push(scores[i]);
// // // }
// // // // console.log(scores)
// // // // console.log(reverseArr)

// // // const recursiveReverseStr = ((str) => {
// // //     if(str === ''){
// // //         return ''
// // //     }
// // //     else{
// // //         return recursiveReverseStr(str.substr(1)) + str.charAt(0);
// // //     }
// // // })

// // // const recursiveGreet = recursiveReverseStr(greeting)
// // // // console.log(recursiveGreet)

// // // function ternaryReverse(str){
// // //     return (str === '') ? '' : ternaryReverse(str.substr(1)) + str.charAt(0)
// // // }
// // // const ternGreet = ternaryReverse(greeting)
// // // // console.log(ternGreet)


// // // const obj = {
// // //     a:1,
// // //     b:2,
// // //     getA(){
// // //         console.log(this.a);
// // //         return this;
// // //     },
// // //     getB(){
// // //         console.log(this.b)
// // //     }
// // // }

// // // // obj.getA().getB()

// // // Array.prototype.print = function() {
// // //     console.log(this.toString())
// // // }

// // // const arr = [1,2];
// // // // arr.print()

// // // const a = function(x) {
// // //     this.x = x;

// // // }

// // // const b = function(x, y){
// // //     this.y = y
// // // }

// // // const newB = new b('x', 'y')


// // // // scores.print()
// // // // const getData = (endpoint) => {
// // // //     wrapper.innerHTML = `<h2 class='text-center pt-3'>Loading.....</h2>`
// // // //     return new Promise((resolve, reject) => {
// // // //         const request = new XMLHttpRequest();
// // // //         request.addEventListener('readystatechange', () => {
// // // //             if(request.readyState === 4 && request.status === 200){
// // // //                 const data = JSON.parse(request.responseText);
// // // //                 wrapper.innerHTML = ''
// // // //                 resolve(data);
// // // //             } else if(request.readyState === 4){
// // // //                 reject('error getting the resource')
// // // //             }
// // // //         });
// // // //         request.open('GET', endpoint);
// // // //         request.send();
// // // //     });

    
// // // // }

// // // // getData('https://jsonplaceholder.typicode.com/posts')
// // // // .then(data => data.map( data => {
// // // //     wrapper.innerHTML += `
// // // //     <div class="card my-3 p-2">
// // // //     <h2 class='text-center'>${data.title}</h2>
// // // //     <div class="card-body">
// // // //         ${data.body}
// // // //     </div>
// // // //     </div>

// // // //     `
// // // // }
   
// // // // ))
// // // // .catch(err => console.log('rejected', err))

// // // // fetch('https://jsonplaceholder.typicode.com/posts')
// // // // .then((response) => response.json())
// // // // .then(json => console.log(json))

// // // // fetch('https://jsonplaceholder.typicode.com/todos/1')
// // // //   .then(response => response.json())
// // // //   .then(json => json.map( data => {
// // // //     wrapper.innerHTML += `
// // // //     <div class="card my-3 p-2">
// // // //     <h2 class='text-center'>${data.title}</h2>
// // // //     <div class="card-body">
// // // //         ${data.body}
// // // //     </div>
// // // //     </div>

// // // //     `
// // // //   }))

// // //   const getData = async () => {
// // //       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// // //       const json = await response.json();
// // //       return json
// // //   }

// // // getData().then(data => {
// // //     data.map(d => {
// // //         wrapper.innerHTML += `
// // //     <div class="card my-3 p-2">
// // //     <h2 class='text-center'>${d.title}</h2>
// // //     <div class="card-body">
// // //         ${d.body}
// // //     </div>
// // //     </div>

// // //     `
// // //     })
// // // })

// // function add(num1, num2){
// //     return num1 + num2
// // }

// // console.log('add:', add(2, 3))

// // function sum(...arr){
// //      return arr.reduce((acc, curr) => {
// //         return acc + curr
// //     }, 0)
    
// // }

// // console.log('sum:', sum(2, 3, 4, 5))


// // // function stringIncludes(a, b){
// // //     b = b.toLowerCase()
// // //     a =  a.toLowerCase().split(' ')
// // //     if(a.filter((word) => {
// // //         return b === word
// // //     }).length){
// // //         return true
// // //     }else {
// // //         false
// // //     }
// // // }

// // function stringIncludes(a, b){
// //     let newA = a.toLowerCase()
// //     let newB = b.toLowerCase()
// //     if(newA.includes(newB)){
// //         return true
// //     }
// //     return false
    
// // }

// // console.log('stringIncludes:', stringIncludes('I drove to New York in a van with my friend', 'new'))


// // function getNames(arr) {
// //     let newArr
// //     newArr = arr.filter(arr => {
// //         return arr['name']
// //     })
// //     return newArr.map(obj => {
// //         return obj['name']
// //     })
    
// // }

// // console.log(
// //     "getNames:",
// //     getNames([
// //         {a: 1},
// //         {name: 'Jane'},
// //         {},
// //         {name: 'Mark'},
// //         {name: 'Sophia'},
// //         {b: 2}
// //     ])
// // )

// // function getLargestIndex(arr){
// //         return arr.indexOf(Math.max(...arr))
// // }

// // console.log('getLargestIndex:', getLargestIndex([7, 1, 4, 12, 9]))

// // function delay(n) {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve('resolved')
// //         }, n)
// //     })
    
// // }

// // (async () => {
// //     console.time('Testing delay');
// //     const response = await delay(1000)
// //     console.log(response)
// //     console.timeEnd('Testing delay')
// // })()

// // let p = new Promise((resolve, reject) => {
// //     let a = 1 + 1
// //     if(a == 2){
// //         resolve(console.log('Success'))
// //     }else {
// //         reject('Failed')
// //     }
// // })

// // p.then(message => console.log(message))
// //     .catch((message) => console.log(message))

// // const userHasMoney = false

// // function userCallback(success, error){
// //     switch (userHasMoney) {
// //         case true:
// //             success('You should try shutterstock!')
// //             break;
    
// //         default:
// //             error('Have you heard of Unsplash?')
// //             break;
// //     }
// // }

// // userCallback((message) => {
// //     console.log(message)
// // }, (error) => {
// //     console.log(error)
// // })

// // function userCallbackPromise(){
// //     return new Promise((resolve, reject) => {
// //         switch (userHasMoney) {
// //             case true:
// //                 resolve('You should try shutterstock!')
// //                 break;
        
// //             default:
// //                 reject('Have you heard of Unsplash?')
// //                 break;
// //         }
// //     })
    
// // }

// // userCallbackPromise().then(message => console.log(message))
// //     .catch(error => console.log(error))




// // function makeRequest(location){
// //     return new Promise((resolve, reject) => {
// //         console.log(`Making request to ${location}`);
// //         if(location === 'Google'){
// //             resolve('Google says hi')
// //         } else {
// //             reject('We only want to talk to Google')
// //         }
// //     })
// // }

// // function processRequest(response){
// //     return new Promise((resolve, reject) => {
// //         console.log('Processing response');
// //         resolve('Extra info: ' + response)
// //     })
// // }

// // makeRequest('Google').then(response => {
// //     console.log('Response has been received')
// //     return processRequest(response)
// // }).then(processedResponse => {
// //     console.log(processedResponse)
// // }).catch(err => {console.log(err)})

// // async function doWork(){
// //     try {
// //         const response = await makeRequest('Google')
// //         console.log('Response recieved')
// //         const processedResponse = await processRequest(response)
// //         console.log(processedResponse)
// //     } catch (err){
// //         console.log(err)
// //     }
   
// // }

// // doWork()

// function greet(name){
//     return new Promise((resolve, reject) => {
//         if(name==="Daniel"){
//             resolve('Hello Daniel')
//         }else {
//             reject("We don't like that name")
//         }
//     })
// }


// // const fetchData = async (url) => {
// //     try{
// //         const response = await fetch(url)
// //         const json = await response.json()
// //         return json
// //     } catch (err) {
// //         console.log(error)
// //     }
    
// // }

// const fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         const res = fetch(url).then(response => response.json())
//         resolve(res)
//     })
// }

// // const data = fetchData('https://pokeapi.co/api/v2/pokemon/?limit=150')





// // fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
// //     .then(res => res.json())
// //     .then(data => data.results.map(pokemon => {
// //         wrapper.innerHTML += `
// //         ${pokemon.name}
// //         `
// //     })).catch(err => wrapper.innerHTML += `
// //     ${err.message}
// //     ` )

// const newData = async (url) => {
//     const response = await fetch(url)
//     const json = await response.json()
//     return json
// }

// const data = newData('https://pokeapi.co/api/v2/pokemon/?limit=150')

// data.then(data => data.results.map(
//     p => {
//         wrapper.innerHTML += `
//         <p>${p.name}</p>
//         `
//     }
// ))

// Import the functions you need from the SDKs you need

//       // TODO: Add SDKs for Firebase products that you want to use
//       // https://firebase.google.com/docs/web/setup#available-libraries
    
//       // Your web app's Firebase configuration
//       const firebaseConfig = {
//         apiKey: "AIzaSyDoJ6VMl7QIKv3AsZSzyBIV4BBkmhLqJ_M",
//         authDomain: "niu-sandbox.firebaseapp.com",
//         projectId: "niu-sandbox",
//         storageBucket: "niu-sandbox.appspot.com",
//         messagingSenderId: "888165361573",
//         appId: "1:888165361573:web:3dd8171d7c9782b6a16a4c"
//       };
    
//       // Initialize Firebase
//       firebase.initializeApp(firebaseConfig);
//       const db = firebase.firestore();

// const form = document.querySelector('form')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const now = new Date()
//     const recipe = {author: 'Daniel', created_at: firebase.firestore.Timestamp.fromDate(now), title: form.recipe.value}
//     db.collection('recipes').add(recipe).then(() => {
//         console.log('added')
//     })
// })

// const addRecipe = (recipe, id) => {
//     let html = `
//     <div data-id="${id}" class='card p-3 mt-2'>
//         <h2>${recipe.title}</h2>
//         <p>${recipe.author}</p>
//         <p>${recipe.created_at.toDate()}</p>
//         <button type="submit"  value="del" class="btn btn-info  mt-2 mb-2">Delete</button>
//     </div>

//     `
//     wrapper.innerHTML += html
// }

// const deleteRecipe = (id) => {
//     const recipes = document.querySelectorAll('.card')
//     recipes.forEach(recipe => {
//         if(recipe.getAttribute('data-id') === id){
//             recipe.remove();
//         }
//     })

// }

// db.collection('recipes').get().then(snapshot => snapshot.docs.forEach(doc => {
//     addRecipe(doc.data(), doc.id)
// }))

// db.collection('recipes').onSnapshot((snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//         const doc = change.doc
//         if(change.type === 'added'){
//             addRecipe(doc.data(), doc.id)
//         } else if(change.type === 'removed'){
//             deleteRecipe(doc.id)
//         }
//     })
// })


// wrapper.addEventListener('click', e => {
//     if(e.target.value === 'del'){
//         const id = e.target.parentElement.getAttribute('data-id')
//         db.collection('recipes').doc(id).delete().then(() => {
//             console.log('deleted')
//         })
//     }
// })


// rest 

// const double = (...nums) => {
//     console.log(nums)
//     return nums.map(num => num*2)
// }

// const result = double(1, 2, 3, 4, 5, 6)

// console.log(result)


// console.log(...result)

// const newResult = [...result, 5, 9, 10]

// console.log(newResult)


// const person = {
//     name: 'dan', age: 30, job: 'Net Ninja'
// }

// const personClone = {...person}

// // delete personClone.name

// personClone.name = 'CC'

// console.log(personClone)

// const namesArray = ['ryu', 'chun-li', 'ryu', 'dan']
// console.log(namesArray)
// const newArray = [...namesArray, 'ryu']
// console.log(...newArray)

// const set = new Set(['ryu', 'chun-li', 'ryu', 'dan'])
// console.log(set)
// const newSet = new Set(newArray)
// console.log(...newSet)
// const uniqueNames = [...newSet]
// console.log(uniqueNames)
// const newUniqueNames = [...new Set(newArray)]
// console.log(newUniqueNames)


// const symbol1 = Symbol();
// const symbol2 = Symbol();

// console.log(symbol1, typeof(symbol1))
// console.log(symbol2, typeof(symbol2))
// console.log(symbol1 === symbol2)
// const ninja = {}
// ninja.age = 30
// ninja['belt'] = 'orange'
// console.log(ninja)
// ninja.belt = 'black'
// console.log(ninja)

// let arr = [1, 2, 3, 4, 5, 6]
// let a, b
// [a, b, ...arr] = arr
// console.log(arr)

// let person = {
//     name: 'mario',
//     age: 32
// }

// let person2 = {...person}
// person2.name = 'luigi'
// console.log(person2)

class Animal{
    constructor(name){
        this.name = name
    }
}

const bear = new Animal('jack')

Animal.prototype.greet = function(){
    console.log('hello ' + this.name)
    return this
    
}

console.log(bear.name)

bear.greet().greet()

class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}

Dog.prototype.type = function() {
    console.log(`${this.name} is a ${this.breed}`)
}

const collie = new Dog('shelly', 'collie')

collie.type()


