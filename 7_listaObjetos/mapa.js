// A função 'console.log() é usada para "imprimir" texto no terminal ou console do navegador (ver: ferramentas de desenvolvimento web).
// Para visualizar, abrir no navegador o painel de ferramentas de desenvolvimento web .
console.log("Olá, Planeta Terra!");


// Cria uma lista (array) de objetos 'lugares', cada objeto tem quatro pares de chave/valor (em inglês, key/value).
let lugares = [
    {
        "nome": "Geossítio Batateiras",
        "lat": -7.233856,
        "long": -39.432204,
        "cidade": "Crato - CE"
    },
    {
        "nome": "Geossítio Cachoeira de Missão Velha",
        "lat": -7.221929,
        "long": -39.143993,
        "cidade": "Missão Velha - CE"
    },
    {
        "nome": "Geossítio Colina do Horto",
        "lat": -7.179458,
        "long": -39.329289,
        "cidade": "Juazeiro do Norte - CE"
    },
    {
        "nome": "Geossítio Floresta Petrificada",
        "lat": -7.258823,
        "long": -39.090572,
        "cidade": "Missão Velha - CE"
    },
    {
        "nome": "Geossítio Parque dos Pterossauros",
        "lat": -7.187626,
        "long": -39.716500,
        "cidade": "Santana do Cariri - CE"
    },
    {
        "nome": "Geossítio Pedra Cariri",
        "lat": -7.121165,
        "long": -39.695169,
        "cidade": "Nova Olinda - CE"
    },
    {
        "nome": "Geossítio Pontal da Santa Cruz",
        "lat": -7.210151,
        "long": -39.733772,
        "cidade": "Santana do Cariri - CE"
    },
    {
        "nome": "Geossítio Ponte de Pedra",
        "lat": -7.151553,
        "long": -39.629191,
        "cidade": "Nova Olinda - CE"
    },
    {
        "nome": "Geossítio Riacho do Meio",
        "lat": -7.364073,
        "long": -39.330253,
        "cidade": "Barbalha - CE"
    }
];
// Cada objeto do array é acessado pelo seu índice, que começa com 0, como 'lugares' tem nove objetos, os índices são 0 a 8.
// O índice fica entre colchetes '[índice]' após o nome do array de objetos, seguido de '.' e o nome da chave.
// Por exemplo, para acessar o valor da chave 'nome' do primeiro objeto da lista é usado 'lugares[0].nome' 
console.log("O valor de 'lugares[0].nome' é: " + lugares[0].nome);

// Cria o objeto 'meuMapa' com a vista centralizada na latitude e longitude do 'lugares[0]' com um zoom inicial de 11.
let meuMapa = L.map('mapaLeaflet').setView([lugares[0].lat, lugares[0].long], 11);

// Cria o mapa usando as imagens ('tiles') do OpenStreetMap (OSM), com a opção de atribuição citando a fonte da base de imagens do OSM.
let mapaBase = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Em seguida, o mapa é adicionado ao objeto 'meuMapa' com a função addTo().
mapaBase.addTo(meuMapa);

// Adiciona os marcadores no mapa nas coordenadas especificadas.
let marcadorBatateiras = L.marker([lugares[0].lat, lugares[0].long]).addTo(meuMapa);
let marcadorCachoeira = L.marker([lugares[1].lat, lugares[1].long]).addTo(meuMapa);
let marcadorColina = L.marker([lugares[2].lat, lugares[2].long]).addTo(meuMapa);
let marcadorFloresta = L.marker([lugares[3].lat, lugares[3].long]).addTo(meuMapa);
let marcadorParque = L.marker([lugares[4].lat, lugares[4].long]).addTo(meuMapa);
let marcadorPedra = L.marker([lugares[5].lat, lugares[5].long]).addTo(meuMapa);
let marcadorPontal = L.marker([lugares[6].lat, lugares[6].long]).addTo(meuMapa);
let marcadorPonte = L.marker([lugares[7].lat, lugares[7].long]).addTo(meuMapa);
let marcadorRiacho = L.marker([lugares[8].lat, lugares[8].long]).addTo(meuMapa);

// Inclui textos nos marcadores, que são exibidos quando clicados.
// Para concatenar textos é usado o sinal '+', se for um objeto ou variável não precisa de aspas.
// É possível usar tags HTML, mas precisam estar entre aspas.
// A tag HTML <br> quebra a linha do texto.
marcadorBatateiras.bindPopup("<h2>" + lugares[0].nome + "</h2> Coordenadas: " + lugares[0].lat + ", " + lugares[0].long + "<br> Cidade: " + lugares[0].cidade);
marcadorCachoeira.bindPopup("<h2>" + lugares[1].nome + "</h2> Coordenadas: " + lugares[1].lat + ", " + lugares[1].long + "<br> Cidade: " + lugares[1].cidade);
marcadorColina.bindPopup("<h2>" + lugares[2].nome + "</h2> Coordenadas: " + lugares[2].lat + ", " + lugares[2].long + "<br> Cidade: " + lugares[2].cidade);
marcadorFloresta.bindPopup("<h2>" + lugares[3].nome + "</h2> Coordenadas: " + lugares[3].lat + ", " + lugares[3].long + "<br> Cidade: " + lugares[3].cidade);
marcadorParque.bindPopup("<h2>" + lugares[4].nome + "</h2> Coordenadas: " + lugares[4].lat + ", " + lugares[4].long + "<br> Cidade: " + lugares[4].cidade);
marcadorPedra.bindPopup("<h2>" + lugares[5].nome + "</h2> Coordenadas: " + lugares[5].lat + ", " + lugares[5].long + "<br> Cidade: " + lugares[5].cidade);
marcadorPontal.bindPopup("<h2>" + lugares[6].nome + "</h2> Coordenadas: " + lugares[6].lat + ", " + lugares[6].long + "<br> Cidade: " + lugares[6].cidade);
marcadorPonte.bindPopup("<h2>" + lugares[7].nome + "</h2> Coordenadas: " + lugares[7].lat + ", " + lugares[7].long + "<br> Cidade: " + lugares[7].cidade);
marcadorRiacho.bindPopup("<h2>" + lugares[8].nome + "</h2> Coordenadas: " + lugares[8].lat + ", " + lugares[8].long + "<br> Cidade: " + lugares[8].cidade);