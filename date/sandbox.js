const now = new Date();

console.log(dateFns.isToday(now))
console.log(dateFns.format(now, 'YYYY'))
console.log(dateFns.format(now, 'YYYY'))
console.log(dateFns.format(now, 'dddd, MMM Do, YYYY'))

const before = new Date('January 1 2022 12:00:00')

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}))