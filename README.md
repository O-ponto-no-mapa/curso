![o ponto no mapa](https://raw.githubusercontent.com/O-ponto-no-mapa/site/3a8574ab760decd2b46d02b905d3661e269f7820/logo_marrom.png)

# Curso de criação de mapa online e visualização de dados geolocalizados usando a biblioteca Leaflet.

## Índice

- [Apresentação](#apresenta%C3%A7%C3%A3o)
- [Objetivo](#objetivo)
- [Pré-requisito](#pr%C3%A9-requisito)
- [Conteúdo](#conte%C3%BAdo)
- [Ferramentas usadas no curso](#ferramentas-usadas-no-curso)
- [Referências](#refer%C3%AAncias)

---

## Apresentação

Com a popularização das tecnologias de comunicação, as ferramentas de criar, editar e desenhar mapas deixam de ser um campo específico de atividade de profissionais da cartografia, e tornam-se disponíveis em plataformas online para pessoas interessadas em trabalhar com mapas e geolocalização da informação, ou seja, a informação situada espacialmente no território.

O mapa é um instrumento de navegação durante o deslocamento pelos espaços da cidades, é usado como ferramenta de pesquisa para descobrir regiões, lugares, rotas de transporte, na geolocalização de imagens e de postagens nas redes sociais, como serviço de encomendas, transporte, paqueras, bem como na produção de informação geolocalizada. De tal forma que o mapa faz parte da nossa rotina diária, nas mais diversas atividades. E consequentemente, surge o interesse e demanda de criar mapas, seja com finalidade de localização de elementos e informações no espaço, e também com um propósito criativo ou experimental. 

A partir dessas questões e interesses, surgiu a proposta do curso **o ponto no mapa**, voltado para não-programadores, como os colegas da arquitetura e urbanismo, e para quem quiser criar um ponto, um conto, no mapa. Além de serviços pagos ou proprietários, existem tecnologias abertas, open source, de criação de mapas online. E a que vamos usar neste curso é a biblioteca Leaflet, uma biblioteca em linguagem JavaScript que é popular e bem documentada. 

Neste curso vamos desenvolver este [site](https://o-ponto-no-mapa.github.io/site/), com o mapeamento dos nove geossítios do Geoparque Mundial da UNESCO - Geoparque Araripe.

## Objetivo

O objetivo do curso é facilitar a produção de mapas online, demonstrando um caminho possível (porque existem vários) de desenvolvimento de uma página web com a finalidade de exibir um mapa e informações geolocalizadas. 

## Pré-requisito

O pré-requisito para participar é ter conhecimento básico de informática. Não é necessário conhecimento prévio em programação.

## Conteúdo

São abordados tópicos de uma página web, incluindo HTML, CSS e JavaScript, bem como arquivos de dados tipo JSON, orientados para o objetivo de criar mapas.

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

  - Instalação da biblioteca [Leaflet](https://leafletjs.com/examples/quick-start/) pela Content Delivery Network (CDN) ou Rede de Distribuição de Conteúdo
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
  - Editar arquivo readme.md na markup languagem do GitHub
  - Enviar arquivos
  - Configurar o repositório como página

## Ferramentas usadas no curso

No curso são usados os seguintes recursos:
- Editor de códigos, pode ser qualquer um, até o bloco de notas, mas uso Microsoft Visual Studio Code - https://code.visualstudio.com;
- Biblioteca de mapas Leaflet - https://leafletjs.com; 
- Conta na plataforma GitHub - https://github.com, caso queira hospedar o mapa na internet e não disponha de serviço de hospedagem. 

## Referências

Documentação sobre HTML, CSS e JavaScript da Mozilla - MDN Web Docs: https://developer.mozilla.org/pt-BR/docs/Web/HTML

Base de imagens de mapas para usar com Leaflet: https://leaflet-extras.github.io/leaflet-providers/preview/

Exemplos de mapas e recursos com Leaflet de Grzegorz Tomicki: https://tomickigrzegorz.github.io/leaflet-examples/

API de dados atmosféricos e climáticos Open Meteo: https://open-meteo.com/en/docs#api-documentation 

Site do Geoparque Araripe: http://geoparkararipe.urca.br/


Boa diversão com o(s) ponto(s) no mapa!

*** 
  
O curso **o ponto no mapa** é desenvolvido por [Artur Cordeiro](http://arturvc.net.br). 

Cariri, 29/05/2023.
