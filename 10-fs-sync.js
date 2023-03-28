const {readFileSync, writeFileSync} = require('fs')
console.log('1. start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
)
console.log('2. done with this task')
console.log('3. starting the next one')