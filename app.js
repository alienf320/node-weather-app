const forecast = require("./utils/forecast.js");
const geocode = require("./utils/geocode.js");

if(process.argv[2] === 'clima' && process.argv.length > 3) {
  const location = process.argv[3]
  //console.log('location', location)
  
  geocode(location, (error, {long, lat}) => {
    if (error) {
      console.log(error);
      return;
    }
  
    forecast(long, lat, (error, {location, temperature, rain}) => {
      if (error) {
        console.log(error);
        return;
      }
  
      console.log(
      `${location}: 
        It's currently ${temperature} degrees out. 
        There is ${rain}% chance to rain`);
    });
  });
}

