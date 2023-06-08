<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/O-ponto-no-mapa/site/35f8e9c1ce0602fb7b99b2bd6667e10e5b024d4d/logo_branco.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/O-ponto-no-mapa/site/3a8574ab760decd2b46d02b905d3661e269f7820/logo_marrom.png">
  <img alt="o ponto no mapa" src="https://raw.githubusercontent.com/O-ponto-no-mapa/site/35f8e9c1ce0602fb7b99b2bd6667e10e5b024d4d/logo_branco.png">
</picture>

# Curso de criação de mapa online e visualização de dados geolocalizados usando a biblioteca Leaflet.

Para mais informações sobre o curso **o ponto no mapa**, visite [arturvc.net.br/opontonomapa.html](http://arturvc.net.br/opontonomapa.html).

***

## Conteúdo

  ### 1. Estrutura básica de página HTML
  
  - Declaração do tipo de documento
  - Estrutura e hierarquia dos elementos `html`, `head` e `body`
  - Elementos textuais `h1`,`h2`, `h3`,  `p` e `ul`

  ### 2. Elementos HTML e atributos
  
  - Atributos de elementos
  - Organização e layout com o elemento `div`
  - Estilo
  - Criar link com elemento `a`
  - Inserir imagem com elemento `img`

  ### 3. Folha de estilo em cascata (CSS)

  - Comentário em código HTML
  - Folha de estilo em cascata
  - Link para arquivo externo de CSS
  - Comentário em código CSS
  - Inspecionar o layout com ferramenta de desenvolvimento web do navegador
  - Propriedades de estilo
  - Configurar layout com `margin` e `padding`
  - Estilo em elementos HTML
  - Estilo em `class` e `id`
  - Estilo do elemento `a` (link)

  ### 4. A biblioteca Leaflet

  - Instalação da biblioteca Leaflet pela Content Delivery Network (CDN) ou Rede de Distribuição de Conteúdo
  - A tag de `script` e código JavaScript
  - Criar e configurar a `id` da `div`
  - Comentário em Javascript
  - Declarar variável com `let`
  - Criar um objeto de mapa com `L.map()` referenciado com a `id` da `div`, especificado uma vista com `setView([latitude, longitude], zoom inicial)`
  - Carregar as imagens do mapa com `L.tileLayer()` do OpenStreetMap, especificando a opção de atribuição, e adicionar ao objeto mapa criado com `addTo()`.

  ### 5. Marcador e popup
  
  - Criar arquivo JavaScript externo com o código do mapa
  - Declarar variáveis
  - Etapas para desenhar o mapa
  - Criar marcador no mapa com `L.marker`
  - Definir balão informativo (popup) para o marcador
  - Descobrir coordenadas lat long clicando no mapa.

  ### 6. Objeto JavaScript

  - Criar objeto JavaScript com informações sobre o lugar a ser carregado no mapa
  - Estrutura chave/valor (key/value) do objeto JavaScript
  - Usar os valores do objeto para carregar o marcador no mapa
  - Usar tags HTML no popup do marcador.
  
  ### 7. Lista de objetos JavaScript
  
  - Plotar texto e informações no console do navegador com a função `console.log()`
  - Criar lista (array) de objetos
  - Usar tags HTML no popup do marcador.

  ### 8. Arquivo JSON
  
  - Criar array de objetos em arquivo externo *JavaScript object notation* (JSON)
  - Carregar dados de arquivo JSON externo com a função `fetch()`
  - Criar uma função para carregar o mapa
  - Criar vários marcadores com a função `for()`

  ### 9. Ícone do marcador
  
  - Criar ícone dos marcadores no mapa
  - Adicionar link `a` no popup dos marcadores

  ### 10. Mais ícones dos marcadores

  - Criar diversos ícone dos marcadores no mapa
  - Atribuir marcadores de acordo com a cidade com a função `if ()`

  ### 11. Camadas
  
  - Camadas no Leaflet: `base layer` e `overlay`
  - Criar grupo de camadas com `L.layerGroup()`
  - Criar controle de layers com `L.control.layers()`
  - Adicionar itens no array de marcadores com o método `push()`

  ### 12. Dados da Open-Meteo
  - API Open-Meteo
  - Criar função para solicitar dados da API Open-Meteo
  - Inspecionar a resposta da solicitação para descobrir onde estão os dados
  - Formatar valores como data usando `Date()`
  - Adicionar chaves/valores em um objeto JavaScript existente
  - Adicionar as informações obtidas no popup dos marcadores

  ### 13. Página o ponto no mapa
  
  - Configurar a página para visualizar em dispositivos móveis no elemento `meta` com atributos
  - Definir layout com Flexbox
  - Usar elemento `nav` para menu de navegação da página
  - Criar página HTML para informações sobre o projeto

  ### 14. Publicar no GitHub
  
  - Criar conta
  - Criar repositório
  - Editar arquivo `README.md` na linguagem de marcação do GitHub
  - Enviar arquivos
  - Configurar o repositório como página web

***

O curso **o ponto no mapa** é desenvolvido por Artur Cordeiro.

Cariri, 2023.
