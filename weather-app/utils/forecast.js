const request = require('request')

const getForecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0747ef7fd484ca07f30956100b31ae5a/' +  latitude + ',' +  longitude + '?units=si'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect the DarkSky API', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability,
                summary: body.currently.summary
            })
        }
    })
}

module.exports = {
    getForecast: getForecast
}