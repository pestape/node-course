const request = require('request')

const getForecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0747ef7fd484ca07f30956100b31ae5a/' +  latitude + ',' +  longitude + '?units=si'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect the DarkSky API', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined, 
                body.currently.summary + '. It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.'
            )
        }
    })
}

module.exports = {
    getForecast: getForecast
}