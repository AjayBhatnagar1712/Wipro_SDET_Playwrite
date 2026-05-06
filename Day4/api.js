const API_KEY = "YOUR_API_KEY";

fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=Delhi`)
  .then(res => res.json()) // convert response to JSON
  .then(data => {
    console.log(data); 

    const weather = data.current;

    const result = {
      location: data.location.name,
      temperatureC: weather.temperature,
      temperatureF: (weather.temperature * 1.8) + 32, 
      description: weather.weather_descriptions[0],
      isHot: weather.temperature > 32 ? "Yes" : "No"
    };

    return result;
  })
  .then(finalData => console.log(finalData))
  .catch(error => console.error("Error:", error));