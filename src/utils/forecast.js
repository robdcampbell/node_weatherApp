const request = require('request');

// // Weather request from Darksky

const forecast = (latitude,longitude,callback)=> {

  const url = `https://api.darksky.net/forecast/79494146fff4f77959b3266cf506a1ca/${longitude},${latitude}`;

  request({ url, json:true }, (error, { body })=>{
      if(error){
          callback('Unable to connect to weather service', undefined)
      } else if(body.error){
          callback('Unable to find location', undefined)
      } else {
          const current = body.currently;
          callback(undefined, `${body.daily.data[0].summary} It is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain.`)
      }
  })
}


module.exports = forecast; 


