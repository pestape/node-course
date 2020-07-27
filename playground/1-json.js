const fs = require('fs')
// const book = {
//     title: 'Title 1' ,
//     author: 'Pedro'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json')
var dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Pedro'
data.planet = 'Mars'
data.age = '31'

dataJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json',dataJSON)

