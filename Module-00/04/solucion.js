var request = require('request');

request.get('http://api.openweathermap.org/data/2.5/weather?q=Montevideo', {json: true}, function(err, resp, body) {
    if (err) return console.error(err);
    
    console.log(body.weather[0].main);
});