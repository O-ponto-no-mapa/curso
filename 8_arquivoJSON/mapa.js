// Cria a variável tipo lista (array) para ser usada com os dados do arquivo JSON externo.
let lugares = [];

// Cria a variável tipo lista (array) para ser usada com os marcadores do mapa.
let marcadores = [];

// Executa a função 'obterDados().
obterDados();

// Define a função assíncrona 'obterDados()'.
async function obterDados() {
    // A função 'fetch' ler o arquivo 'lugares.json' e guarda na variável 'resposta'.
    let resposta = await fetch('lugares.json');
    // Imprime no console do navegador o pacote de dados 'resposta'.
    console.log("Resultado de 'fetch':");
    console.log(resposta);

    // O operador 'await' pausa a função para receber o retorno da solicitação, que no caso é um objeto tipo JSON, 
    lugares = await resposta.json();
    // Imprime no console do navegador o conteúdo de 'lugares', como uma lista (array) de objetos.
    console.log("Resultado da solicitação de objeto tipo JSON armazenado na lista (array) 'lugares':")
    console.log(lugares);

    // Para retornar o tamanho da lista (array) é usado 'length' (em inglês quer dizer 'comprimento').
    // Por exemplo, 'lugares.length' vai retornar '9', pois a lista tem nove objetos.
    console.log("Tamanho da lista (array) 'lugares': " + lugares.length);

    // Observação: cada objeto da lista é acessado pelo seu índice, que começa com 0, 
    // como 'lugares' tem nove objetos, os índices são de 0 a 8.
    // O índice fica entre colchetes '[índice]' após o nome da lista de objetos, seguido de '.' e o nome da chave.
    // Por exemplo, para acessar o valor da chave 'nome' do primeiro objeto da lista é usado 'lugares[0].nome' 

    // Executa a função 'carregarMapa()'.
    carregarMapa();
}

// Define a função 'carregarMapa()'.
function carregarMapa() {
    // Cria o objeto 'meuMapa' com a vista centralizada na latitude e longitude de 'lugares[0]' com um zoom inicial de 10   .
    let meuMapa = L.map('mapaLeaflet').setView([lugares[0].lat, lugares[0].long], 10);

    // Cria o mapa usando as imagens ('tiles') do OpenStreetMap (OSM), com a opção de atribuição citando a fonte da base de imagens do OSM.
    let mapaBase = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    // Em seguida, o mapa é adicionado ao objeto 'meuMapa' com a função addTo().
    mapaBase.addTo(meuMapa);

    // A função 'for' é um loop (ou laço) com um número determinado de repetições,
    // e geralmente tem a seguinte estrutura: 
    // (inicialização; condição; atualização){declarações executadas se a condição for verdadeira}
    // Observação: '++' significa adicionar '1', portanto a expressão 'i++' é equivalente a 'i = i + 1'.
    // Como 'lugares.length' retorna nove, neste caso as declaçõres de 'for' (o que está entre chaves {}) serão executadas nove vezes.
    for (let i = 0; i < lugares.length; i++) {
        // Cria e adiciona um marcador no mapa nas coordenadas especificadas em 'lugares[i]'.
        marcadores[i] = L.marker([lugares[i].lat, lugares[i].long]).addTo(meuMapa);

        // Cria a variável 'geoparqueInfo' com as informações dos geossítios contidas em 'lugares'.
        let geoparqueInfo = "<h2>" + lugares[i].nome + "</h2> Coordenadas: " + lugares[i].lat + ", " + lugares[i].long + "<br> Cidade: " + lugares[i].cidade + "<br> Site: " + lugares[i].site;

        // Para adicionar textos é usado o sinal '+', se for um objeto ou variável não precisa de aspas.
        // É possível usar tags HTML, mas precisam estar entre aspas.
        // A tag HTML <br> quebra a linha do texto.

        // Inclui o texto de 'geoparqueInfo' nos marcadores[i], que são exibidos quando clicados.
        marcadores[i].bindPopup(geoparqueInfo);
    }
}