//Parte do card

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

    const botaoX = document.createElement('i');
    botaoX.classList = 'fa-solid fa-x botaoX';
    
    botaoX.addEventListener('click', fecharCard)

    card.appendChild(botaoX);
}

function fecharCard() {
    const card = document.querySelector('.card');
    const input = document.querySelector('#input');
    input.value = '';
    card.style.display = 'none';
}

//Parte das capitais

let capitais = [
    'Rio de Janeiro',
    'São Paulo',
    'Belo Horizonte',
    'Brasília',
    'Belém',
    'Salvador',
    'Curitiba',
    'Fortaleza',
    'Manaus',
    'João Pessoa'
]

let climaCapitais = []

async function infoCapital(capital) {
    const resposta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&lang=pt_br&APPID=92ed7ea1a311d43e789192f2ef5b5389`)
    const dados = await resposta.json();

    const novaCapital = {
        nome: dados.name,
        tempMin: dados.main.temp_min,
        tempMax: dados.main.temp_max
    }

    return novaCapital;
}

async function listaCapitais() {
    const divCapitais = document.querySelector('.capitais');
    divCapitais.innerHTML = '';

    climaCapitais = await Promise.all(capitais.map(infoCapital));

    climaCapitais.forEach(capital => {
        const divCapital = document.createElement('div');
        divCapital.classList.add('capital');

        const tempMin = document.createElement('p');
        tempMin.classList.add('capital__texto');
        tempMin.innerText = parseInt(capital.tempMin) + '°'

        const tempMax = document.createElement('p');
        tempMin.classList.add('capital__texto')
        tempMax.innerText = parseInt(capital.tempMax) + '°'

        const nome = document.createElement('p');
        nome.classList.add('capital__texto');
        nome.innerText = capital.nome;

        divCapital.appendChild(tempMin);
        divCapital.appendChild(tempMax);
        divCapital.appendChild(nome);

        divCapitais.appendChild(divCapital);
    })
}

listaCapitais();