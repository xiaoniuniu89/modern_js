const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/

// const username = document.querySelector('#username');



form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value)
    // console.log(form.username.value)
    const username = form.username.value;
    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'that username is valid'
    }else {
        // bad input feedback
        feedback.textContent = 'username must contain letters only and be between 6, 12 letters long'

    }
})

// const realtime = document.querySelector('.realtime');

// form.username.addEventListener('keyup', e => {
//     realtime.textContent += `${e.key}`
    
// })



// testing regex
// const username = 'daniel';
// const patterns = /^[a-z]{6,}$/

// let result = patterns.test(username);
// console.log(result)

// if(result){
//     console.log('test passsed')
// }else {
//     console.log('test failed')
// }

// let result = username.search(patterns)
// console.log(result)


// live feedback

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value)
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success')
    }else {
        form.username.setAttribute('class', 'error')

    }
})

{% for category in categories %}
    <h2>{{category.name}}</h2>
{% endfor %}