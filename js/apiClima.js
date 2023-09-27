const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cidade = document.querySelector('#input').value;
    
    climaTempo(cidade);
})

async function climaTempo(cidade) {
    const resposta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&APPID=92ed7ea1a311d43e789192f2ef5b5389`);
    const dados = await resposta.json();

    let ventM = dados.wind.speed;
    let ventKm = ventM * 3.6;

    const card = document.querySelector('.card');
    card.style.display = 'block'

    card.innerHTML = `
        <div class="info">
            <span class="cidade">${dados.name} - ${dados.sys.country}</span>
            <h2 class="tempo">${parseInt(dados.main.temp)}°C ${dados.weather[0].description}</h2>
            <div class="min-max">
                <i class="fa-solid fa-arrow-down"><strong>${parseInt(dados.main.temp_min)}°</strong></i>
                <i class="fa-solid fa-arrow-up"><strong>${parseInt(dados.main.temp_max)}°</strong></i>
            </div>
            <p class="texto">Sensação <strong>${parseInt(dados.main.feels_like)}°</strong></p>
            <p class="texto">Vento <strong>${parseInt(ventKm)} km/h</strong></p>
            <p class="texto">Humidade <strong>${dados.main.humidity}%</strong></p>
        </div>
    `

    console.log(dados)
}