 const now = new Date();
 const dateWrapper = document.querySelector('.date-wrapper')

console.log(now)
dateWrapper.innerHTML += `<p>Date: ${now}</p>`

// year, months, days, times

dateWrapper.innerHTML += `<p>getFullYear(): ${now.getFullYear()}</p>`
dateWrapper.innerHTML += `<p>getMonth(): ${now.getMonth() + 1}</p>`
dateWrapper.innerHTML += `<p>getDate(): ${now.getDate()}</p>`
dateWrapper.innerHTML += `<p>getDay(): ${now.getDay()}</p>`
dateWrapper.innerHTML += `<p>getHours(): ${now.getHours()}</p>`
dateWrapper.innerHTML += `<p>getMinutes(): ${now.getMinutes()}</p>`
dateWrapper.innerHTML += `<p>getSeconds(): ${now.getSeconds()}</p>`

// timestamps

dateWrapper.innerHTML += `<p>getTime() since jan 1 1970 in ms: ${now.getTime()}</p>`


// Date strings

dateWrapper.innerHTML += `<p>toDateString(): ${now.toDateString()}</p>`
dateWrapper.innerHTML += `<p>toTimeString(): ${now.toTimeString()}</p>`
dateWrapper.innerHTML += `<p>tolocalString(): ${now.toLocaleString()}</p>`

const bDay = new Date('June 20 1989 7:30:59')
const birthDay = bDay.toDateString()
// console.log(birthDay)
const diff = now.getTime() - bDay.getTime()
// console.log(diff)

const mins = Math.round(diff / 1000 / 60)
const hours = Math.round(mins / 60)
const days = Math.round(hours / 24)
const years = Math.round(days / 365)
// console.log(mins)
// console.log(hours)
// console.log(days)
// console.log(years)
dateWrapper.classList.add('d-none')

// digital clock

const clock = document.querySelector('.clock-wrapper');

// const tick = () => {
//     const now = new Date()
//     clock.innerHTML = `${now.getHours()} : ${now.getMinutes()} : ${now.getMinutes()} : ${now.getSeconds()}`
// }

// setInterval(tick, 1000)

// console.log(dateFns.isToday(now))

// console.log(dateFns.format(now, 'MMMM Do YYYY'))

// console.log(dateFns.distanceInWords(now, bDay, {addSuffix: true}));

function timeConversion(s) {
    // Write your code here
    const amPM = s.slice(-2)
    let [hour, min, sec] = s.split(':')
    sec = sec.slice(0, 2)
    hour = parseInt(hour)
    if (amPM === 'PM'){
        if(hour < 12){
            hour += 12
            hour = hour.toString()
        }else{
            hour = hour.toString()
        }
    }else if(amPM === 'AM'){
        if(hour > 11){
            hour = '00'
        }
    }
    
    return `${hour}:${min}:${sec}`
}

console.log(timeConversion('4:01:00AM'))