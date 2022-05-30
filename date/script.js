// // date and time 
// const before = new Date('February 1 2021 7:30:59');
// const now = new Date();

// // console.log(now.getSeconds())
// // console.log(typeof(now))
// // console.log(now.getMonth());



// // // timestamps

// const diff = (now.getTime() - before.getTime())
// console.log(diff)
// const mins = Math.round(diff/1000/60)
// const hours = Math.round(mins/60)
// const days = Math.round(hours/24)
// console.log(mins, hours, days)
// console.log(`the blog was written ${days} days ago!`)

// // converting timestamps into date objects 

// const timestamp = 1276998474990;
// const newDate = new Date(timestamp)
// console.log(newDate)

// // // datestrings 
// // console.log(now.toDateString())
// // console.log(now.toTimeString())
// // console.log(now.toLocaleString())

const clock = document.querySelector('.clock')

const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const html = `
        <span>${hours}</span> :
        <span>${minutes}</span> :
        <span>${seconds}</span>
    `;

    clock.innerHTML = html
}

setInterval(tick, 1000)