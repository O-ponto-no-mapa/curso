// Cria o objeto 'lugar' com pares de chave/valor (em inglês, key/value).
let lugar = {
    "nome": "Geoparque Araripe",
    "lat": -7.238144,
    "long": -39.415122,
    "cidade": "Crato - CE",
    "site": "http://geoparkararipe.urca.br"
};

// Cria o objeto 'meuMapa' com a vista centralizada na latitude e longitude do 'lugar' com um zoom inicial de 10.
// Para se referenciar aos valores das chaves dos objetos é necessário usar 'nomeDoObjeto' seguido de '.' e seguido do 'nomeDaChave',
// por exemplo, para se referenciar ao valor da latitude, usar: lugar.lat
let meuMapa = L.map('mapaLeaflet').setView([lugar.lat, lugar.long], 10);

// Cria o mapa usando as imagens ('tiles') do OpenStreetMap (OSM), com a opção de atribuição citando a fonte da base de imagens do OSM.
let mapaBase = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Em seguida, o mapa é adicionado ao objeto 'meuMapa' com a função addTo().
mapaBase.addTo(meuMapa);

// Adiciona um marcador no mapa nas coordenadas especificadas em 'lugar'.
let marcador = L.marker([lugar.lat, lugar.long]).addTo(meuMapa);

// Inclui texto ao marcador 'marcador', que é exibido quando clicado.
// Para concatenar textos é usado o sinal '+', se for um objeto ou variável não precisa de aspas.
// É possível usar tags HTML, mas precisam estar entre aspas.
// A tag HTML <br> quebra a linha do texto.

marcador.bindPopup(lugar.nome + "<br>" + lugar.cidade + "<br>" + lugar.site);