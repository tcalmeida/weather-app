const apiKey = 'cb3a54d3ceaa18fdeb42d89ec4e948de';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

function kelvinToCelsius(convertTemp) {
  return Math.floor(convertTemp - 273.15);
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const inputValue = search.value;

  async function getCityData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`
      );
      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  const weatherData = getCityData();
  weatherData.then((data) => {

    const temp = kelvinToCelsius(data.main.temp);
    const weatherIcon = data.weather[0].icon;

    const weather = document.createElement('div');
    weather.classList.add('weather');
    weather.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" /> ${temp}ºC <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" /></h2>
    <small>${data.weather[0].main}</small>
    `;

    main.innerHTML = '';
    main.appendChild(weather);
  });
})