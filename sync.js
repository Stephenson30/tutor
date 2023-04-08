const {readFileSync, writeFileSync} = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result.txt', `'here is the result : ${first}, ${second}'`, {flag: 'a'})

console.log('Done with the task')
console.log('starting the next one')