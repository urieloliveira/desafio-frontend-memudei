
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bc6f303b56f6fcfea5d7073a69ac54d1

const apiKey = 'bc6f303b56f6fcfea5d7073a69ac54d1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('inputCity');
const searchButton = document.getElementById('searchBtn');
const tempElement = document.querySelector("condicao-Tempo");
searchButton.addEventListener('click', () => {
  const cityName = cityInput.value;
  console.log("botao");
  if (cityName) {
    fetchWeather(cityName);
  }
});

cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {

    console.log("enter");
    const cityName = cityInput.value;
    if (cityName) {

      fetchWeather(cityName);
    }
  }
});

function fetchWeather(cityName) {
  const queryParams = `?q=${cityName}&units=metric&appid=${apiKey}&lang=pt_br`;
  console.log('Solicitando dados da API...');

  fetch(apiUrl + queryParams)
    .then(response => response.json())
    .then(data => {
      var tet = data.weather[0].description;
      console.log('Dados recebidos:', data);
      document.getElementById('local').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('temperatura').textContent = parseInt(`${data.main.temp}°C`);
      document.getElementById('temp-Min').textContent =parseInt( `${data.main.temp_min}`);
      document.getElementById('temp-Max').textContent = parseInt(`${data.main.temp_max}`);
      document.getElementById('temp-Sens').textContent = parseInt(`${data.main.feels_like}`);
      document.getElementById('wind-speed').textContent = `${data.wind.speed}`;
      document.getElementById('humidade-Ar').textContent = `${data.wind.speed}`;
      console.log(data.weather[0].description);
      //tempElement.innerText =  `${data.weather[0].id}`;
      document.getElementById('condicao-Tempo').textContent = `${data.weather[0].description}`;
      console.log('Dados exibidos na página.');


    })
    .catch(error => {
      console.error('Erro ao buscar dados da API:', error);
    });
}