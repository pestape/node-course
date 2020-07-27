const request = require('request')

const getGeocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicGVzdGFwZSIsImEiOiJjanZkcnU3d2kwNmIzNDRwZ3l6YzljaWFzIn0.GXK6Vs-F6IxrJSALkHklTA&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect the MapBox API', undefined)
        } else if (body.features.length === 0) {
            callback('Place not found!', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                adress: body.features[0].place_name
            })
        }
    })
}

module.exports = {
    getGeocode: getGeocode
}