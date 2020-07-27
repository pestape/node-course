const https = require('https')

const url = 'https://api.darksky.net/forecast/0747ef7fd484ca07f30956100b31ae5a/40.7127,-74.0059?units=si'

const request = https.request(url, (response)=>{
    let data = ''
    
    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on('error', (error)=>{
    console.log('Error: ' + error);
    
})

request.end()