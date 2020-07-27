
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const address = process.argv[2]

if (!address) {
    console.log('Invalid argument');
} else {
    geocode.getGeocode(address, (error, {longitude, latitude, adress: place_name}) => {
        if (error) {
            return console.log(error);
        }

        forecast.getForecast(longitude, latitude, (error, {temperature, precipProbability, summary}) => {
            if (error) {
                return console.log(error);
            }
            console.log(place_name)
            console.log(summary + '. It is currently ' + temperature + ' degrees out. There is a ' + precipProbability + '% chance os rain.');
        })
    })
}


