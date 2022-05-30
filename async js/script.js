// const getTodos = (endpoint) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//         // console.log(request, request.readyState);
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText)
//             resolve(data)
//         } else if(request.readyState === 4){
//             reject('error getting resource')
//         }
//     });

//     request.open('GET', endpoint);

//     request.send();
//     });
    
// }


// // console.log(1)
// // console.log(2)



// // // getTodos('todos/cc.json', (err, data) => {
// // //     console.log('callback fired')
// // //     console.log(data)
// // //         getTodos('todos/daniel.json', (err, data) =>{
// // //         console.log(data)
// // //         })
// // //             getTodos('todos/mario.json', (err, data) =>{
// // //                 console.log(data)
// // //     })
// // //     if(err){
// // //         console.log(err)
// // //     }else {
// // //         console.log(data)
// // //     }
// // // });

// // console.log(3)
// // console.log(4)


// // // promise example 

// // const getSomething = () => {
// //     return new Promise((resolve, reject) => {
// //         // fetch something
// //         resolve('some data');
// //         // reject('error')
// //     });
// // };
// // getSomething().then((data) => {
// //     console.log(data)
// // }, (err) => {
// //     console.log(err);
// // });


// // getSomething().then((data) => {
// //     console.log(data);
// // }).catch(error => {
// //     console.log(error)
// // })


// // // getTodos('todos/cc.json').then((data) => {
// // //     console.log('promise 1 resolved:', data);
// // //     return getTodos('todos/mario.json')
// // // }).then((data) => {
// // //     console.log('promise 2 resolved:', data);
// // //     return getTodos('todos/daniel.json');
// // // }).then(data => {
// // //     console.log('promise 3 resolved:', data)
// // // }).catch((err) => {
// // //     console.log('promise rejected', err)
// // // })

// // // fetch api 

// // // fetch('todos/daniel.json').then(data => {
// // //     console.log('resolved', data);
// // //     return data.json();
// // // }).then(data => {
// // //     console.log(data)
// // // }).catch(err => {
// // //     console.log('rejected', err)
// // // })


// // // async and await 

// // const getTodos = async () => {
// //     const response = await fetch('todos/daniel.json');
// //     if(response.status !== 200){
// //         throw new Error('cannot fetch data, path not found');
// //     }
// //     const data = await response.json();
// //     return data;
// // };


// // console.log(1)
// // console.log(2)

// getTodos('todos/daniel.json')
// .then(data => console.log('resolved:', data))
// .catch(err => console.log('rejected:', err));

// // console.log(3)
// // console.log(4)

// // // const wrapper = document.querySelector('.wrapper')
// // // let html = ''

// function lonelyInteger(a) {
//     let unique = a.filter(function(value){
//       return a.indexOf(value) === a.lastIndexOf(value)
//     })
//     console.log(unique)
//     return unique[0];
//   }

// const arr = [1, 2, 3, 4, 3, 2, 1]

// console.log(lonelyInteger(arr))
