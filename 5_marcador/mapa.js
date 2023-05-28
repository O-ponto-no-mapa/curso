// Em Javascript, este é o formato para comentar o código em linha: '//' seguido do comentário. 
// --------------------------------------------------------------------------------------------


// Cria as variáveis de latitude e longitude.
let latitude = -7.238144;
let longitude = -39.415122;

// Cria o objeto 'meuMapa' na <div> de id 'mapaLeaflet'.
let meuMapa = L.map('mapaLeaflet');

// Define o mapa com vista nas coordenadas especificadas com um zoom inicial de 8.
meuMapa.setView([latitude, longitude], 8);

// Cria o mapa usando as imagens ('tiles') do OpenStreetMap (OSM), com a opção de atribuição citando a fonte da base de imagens do OSM.
let mapaBase = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Em seguida, o mapa é adicionado ao objeto 'meuMapa' com a função addTo().
mapaBase.addTo(meuMapa);

// Cria um marcador com as coordenadas especificadas.
let marcador = L.marker([latitude, longitude]);

// Adiciona um marcador no mapa.
marcador.addTo(meuMapa);

// Adiciona o texto ao marcador 'marcadorQuixadá, que é exibido quando clicado.
marcador.bindPopup("Geoparque Araripe. Cariri, CE.");

/*
Este é um comentário em bloco, formado por barra e asterisco.

// Função para "plotar" as coordenadas latitude e longitude em um lugar qualquer clicado no mapa.

// Cria o objeto 'balao' de popup do Leaflet.
let balao = L.popup();

// Define a função 'clicarNoMapa' tendo como argumento o lugar clicado no mapa com 'ponto'.
// Define o objeto 'balao' com a lat long do 'ponto' clicado, 
// em seguida define o conteúdo do popup,
// e abre o popup no mapa.

function clicarNoMapa(ponto) {
    balao
        .setLatLng(ponto.latlng)
        .setContent("Aqui é " + ponto.latlng)
        .openOn(meuMapa);
}

// Executa a função 'clicarNoMapa' com o click do mouse.
meuMapa.on('click', clicarNoMapa);

*/