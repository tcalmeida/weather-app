const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const inputValue = search.value;

  async function getCityData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIKEY}`
      );
      return await response.json();
    } catch (err) {
      throw err;
    }
  }



})