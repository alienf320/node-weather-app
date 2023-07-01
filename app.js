  const request = require('postman-request')

  const location = '';
  const token = 'pk.eyJ1IjoiY2NjbW1tY2NjIiwiYSI6ImNqZHpkNmg0dDMza3gzMnQzcWJvdDgzNWQifQ.4IQc3LFSoolZSPqGlNE7pw'
  const urlMap = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${token}&limit=1`
  
  request({url: urlMap, json: true}, (error, response, body) => {
    console.log(response)
    if(error) {
      console.log("Unable to connect to the server")
    } else if(response.body.features.length === 0) {
      console.log(response.error)
    } else {
      const features = response.body
      const [long, lat] = features.features[0].center
      console.log(lat, long)
    }
  })

  const key = '4bf77eb784fd6b762d89b38f3a598a29';
  const url = `http://api.weatherstack.com/current?access_key=${key}&query=${location}`;

  // request(url, (error, response, body) => {
  //   //console.log(JSON.parse(response.body))
  //   const data = JSON.parse(response.body);
  //   const temp = data.current.temperature;
  //   const rain = data.current.precip;
  //   console.log(`It's currently ${temp} degrees out. There is ${rain}% chance to rain`)
  // })