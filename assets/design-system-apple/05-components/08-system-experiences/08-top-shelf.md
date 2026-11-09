# Top Shelf

> Fonte: https://developer.apple.com/design/human-interface-guidelines/top-shelf
>
> Plataformas: tvos

*A Tela de Início da Apple TV oferece uma área chamada Top Shelf, que exibe o seu conteúdo de maneira rica e envolvente e, ao mesmo tempo, dá às pessoas acesso aos seus apps favoritos no Dock.*

![Uma representação estilizada de uma lista horizontal de pré-visualizações de mídia acima de fileiras de apps da Apple TV. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple.](../../../images/top-shelf/components-top-shelf-intro@2x.png) ![Uma representação estilizada de uma lista horizontal de pré-visualizações de mídia acima de fileiras de apps da Apple TV. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple. (escuro)](../../../images/top-shelf/components-top-shelf-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-top-shelf-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-top-shelf-intro~dark@2x.png)*

Quando você oferece suporte ao Top Shelf em tela inteira, as pessoas podem deslizar por várias visualizações de conteúdo em tela inteira, reproduzir trailers e prévias e obter mais informações sobre o seu conteúdo.

O Top Shelf é uma oportunidade única de destacar conteúdo novo, em destaque ou recomendado e permitir que as pessoas vão diretamente ao seu app ou jogo para vê-lo. Por exemplo, quando as pessoas selecionam a Apple TV no Dock, prévias em tela inteira começam a ser reproduzidas imediatamente e, logo depois, o Dock desliza para fora. Enquanto as pessoas assistem às prévias do primeiro programa, elas podem deslizar pelas prévias de todos os outros programas em destaque, parando para selecionar Reproduzir ou Mais Informações em uma prévia que lhes interesse.

O sistema define vários modelos de layout que você pode usar para oferecer às pessoas uma experiência atraente de Top Shelf quando elas selecionam o seu app no Dock. Para ajudar no posicionamento do conteúdo, você pode baixar esses modelos em [Apple Design Resources](https://developer.apple.com/design/resources/#tvos-apps).

## Boas práticas

**Ajude as pessoas a ir direto ao seu conteúdo.** O Top Shelf oferece um caminho para o conteúdo que mais interessa às pessoas. Dois dos modelos de layout fornecidos pelo sistema — [ações em carrossel](https://developer.apple.com/design/human-interface-guidelines/top-shelf#Carousel-actions) e [detalhes em carrossel](https://developer.apple.com/design/human-interface-guidelines/top-shelf#Carousel-details) — incluem, cada um, dois botões por padrão: um botão principal destinado a iniciar a reprodução e um botão Mais Informações destinado a abrir o seu app em uma visualização que exibe detalhes sobre o conteúdo.

**Destaque conteúdo novo.** Por exemplo, exiba lançamentos ou episódios novos, destaque filmes e programas que estão por vir e evite promover conteúdo que as pessoas já compraram, alugaram ou assistiram.

**Personalize o conteúdo favorito das pessoas.** As pessoas costumam colocar no Top Shelf os apps que mais usam. Você pode personalizar a experiência delas mostrando recomendações direcionadas no conteúdo do Top Shelf que você fornece, permitindo que retomem a reprodução de mídia ou voltem a uma partida em andamento.

**Evite exibir anúncios ou preços.** As pessoas colocam o seu app no Top Shelf porque você já as convenceu a usá-lo, então elas podem não gostar de ver muitos anúncios do seu app. Mostrar conteúdo que pode ser comprado no Top Shelf não é problema, mas prefira focar em conteúdo novo e empolgante e considere exibir preços somente quando as pessoas demonstrarem interesse.

**Exiba conteúdo dinâmico atraente que ajude a conquistar as pessoas e incentive-as a ver mais.** Se necessário, você pode fornecer imagens estáticas, mas as pessoas normalmente preferem uma experiência de Top Shelf cativante e dinâmica, que destaque o conteúdo mais recente ou mais bem avaliado. Para oferecer essa experiência, prefira criar [imagens em camadas](https://developer.apple.com/design/human-interface-guidelines/images#Layered-images) para exibir no Top Shelf.

**Se você não fornecer o conteúdo em tela inteira recomendado, forneça pelo menos uma imagem estática como alternativa.** O sistema exibe uma imagem estática quando o seu app está no Dock e em foco e o conteúdo em tela inteira não está disponível. O tvOS espelha e desfoca a imagem, garantindo que ela caiba em uma largura de 1920 pixels na proporção 16:9. Use os valores a seguir como referência.

| Tamanho da imagem |
|---|
| 2320x720 pt (2320x720 px @1x, 4640x1440 px @2x) |

**Evite sugerir interatividade em uma imagem estática.** Uma imagem estática do Top Shelf não pode receber foco, e você não quer fazer as pessoas pensarem que ela é interativa.

## Layouts dinâmicos

As imagens dinâmicas do Top Shelf podem aparecer de várias maneiras:

- Um carrossel de vídeo e imagens em tela inteira que inclui dois botões e detalhes opcionais
- Uma fileira de conteúdo que pode receber foco
- Um conjunto de banners rolantes

### Ações em carrossel

O estilo de layout de ações em carrossel se concentra em vídeo e imagens em tela inteira e inclui alguns controles discretos que ajudam as pessoas a ver mais. Esse estilo de layout funciona especialmente bem para exibir conteúdo sobre o qual as pessoas já sabem alguma coisa. Por exemplo, é ótimo para exibir conteúdo gerado pelo usuário, como fotos, ou conteúdo novo de uma franquia ou programa de que as pessoas provavelmente vão gostar.

**Forneça um título.** Inclua um título sucinto, como o título do programa ou filme ou o título de um álbum de fotos. Se necessário, você também pode fornecer um breve subtítulo. Por exemplo, um subtítulo para um álbum de fotos poderia ser um intervalo de datas; um subtítulo para um episódio poderia ser o nome do programa.

### Detalhes em carrossel

Esse estilo de layout estende o estilo de ações em carrossel, dando a você a oportunidade de incluir algumas informações sobre o conteúdo. Por exemplo, você pode fornecer informações como sinopse, elenco e outros metadados que ajudam as pessoas a decidir se vão escolher o conteúdo.

**Forneça um título que identifique o conteúdo em reprodução.** O título do conteúdo aparece perto do topo da tela para que seja fácil para as pessoas lê-lo num relance. Acima do título, você também pode fornecer uma frase sucinta ou a atribuição do app, como “Em destaque no *Meu App*”.

### Fileira de conteúdo em seções

Esse estilo de layout mostra uma única fileira rotulada de conteúdo em seções, o que pode funcionar bem para destacar conteúdo visto recentemente, conteúdo novo ou favoritos. O conteúdo da fileira pode receber foco, o que permite que as pessoas rolem rapidamente por ele. Um rótulo aparece quando um conteúdo individual entra em foco, e pequenos movimentos na superfície Touch do controle remoto dão vida à imagem em foco. Você também pode configurar uma fileira de conteúdo em seções para mostrar vários rótulos.

**Forneça conteúdo suficiente para formar uma fileira completa.** No mínimo, carregue imagens suficientes em uma fileira de conteúdo em seções para ocupar toda a largura da tela. Além disso, inclua pelo menos um rótulo, para maior consistência com a plataforma e para fornecer contexto adicional.

Você pode usar os tamanhos de imagem a seguir em uma fileira de conteúdo em seções.

#### Pôster (2:3)

![Uma ilustração mostrando um retângulo com contorno que contém um retângulo ligeiramente menor, que por sua vez contém um retângulo um pouco mais estreito. O retângulo mais externo representa o tamanho real, o retângulo do meio representa a zona visível ou segura e o retângulo mais interno representa o tamanho sem foco.](../../../images/top-shelf/icons-and-images-content-layout-2x3@2x.png) ![Uma ilustração mostrando um retângulo com contorno que contém um retângulo ligeiramente menor, que por sua vez contém um retângulo um pouco mais estreito. O retângulo mais externo representa o tamanho real, o retângulo do meio representa a zona visível ou segura e o retângulo mais interno representa o tamanho sem foco. (escuro)](../../../images/top-shelf/icons-and-images-content-layout-2x3~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-and-images-content-layout-2x3@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-and-images-content-layout-2x3~dark@2x.png)*

| Aspecto | Tamanho da imagem |
|---|---|
| Tamanho real | 404x608 pt (404x608 px @1x, 808x1216 px @2x) |
| Tamanho em foco/zona segura | 380x570 pt (380x570 px @1x, 760x1140 px @2x) |
| Tamanho sem foco | 333x570 pt (333x570 px @1x, 666x1140 px @2x) |

#### Quadrado (1:1)

![Uma ilustração mostrando um quadrado com contorno que contém um quadrado ligeiramente menor, que por sua vez contém um quadrado ainda um pouco menor. O quadrado mais externo representa o tamanho real, o quadrado do meio representa a zona visível ou segura e o quadrado mais interno representa o tamanho sem foco.](../../../images/top-shelf/icons-and-images-content-layout-1x1@2x.png) ![Uma ilustração mostrando um quadrado com contorno que contém um quadrado ligeiramente menor, que por sua vez contém um quadrado ainda um pouco menor. O quadrado mais externo representa o tamanho real, o quadrado do meio representa a zona visível ou segura e o quadrado mais interno representa o tamanho sem foco. (escuro)](../../../images/top-shelf/icons-and-images-content-layout-1x1~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-and-images-content-layout-1x1@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-and-images-content-layout-1x1~dark@2x.png)*

| Aspecto | Tamanho da imagem |
|---|---|
| Tamanho real | 608x608 pt (608x608 px @1x, 1216x1216 px @2x) |
| Tamanho em foco/zona segura | 570x570 pt (570x570 px @1x, 1140x1140 px @2x) |
| Tamanho sem foco | 500x500 pt (500x500 px @1x, 1000x1000 px @2x) |

#### 16:9

![Uma ilustração mostrando um retângulo com contorno que contém um retângulo ligeiramente menor, que por sua vez contém um retângulo ainda um pouco menor. O retângulo mais externo representa o tamanho real, o retângulo do meio representa a zona visível ou segura e o retângulo mais interno representa o tamanho sem foco.](../../../images/top-shelf/icons-and-images-content-layout-16x9@2x.png) ![Uma ilustração mostrando um retângulo com contorno que contém um retângulo ligeiramente menor, que por sua vez contém um retângulo ainda um pouco menor. O retângulo mais externo representa o tamanho real, o retângulo do meio representa a zona visível ou segura e o retângulo mais interno representa o tamanho sem foco. (escuro)](../../../images/top-shelf/icons-and-images-content-layout-16x9~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-and-images-content-layout-16x9@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-and-images-content-layout-16x9~dark@2x.png)*

| Aspecto | Tamanho da imagem |
|---|---|
| Tamanho real | 908x512 pt (908x512 px @1x, 1816x1024 px @2x) |
| Tamanho em foco/zona segura | 852x479 pt (852x479 px @1x, 1704x958 px @2x) |
| Tamanho sem foco | 782x440 pt (782x440 px @1x, 1564x880 px @2x) |

**Esteja ciente do dimensionamento adicional ao combinar tamanhos de imagem.** Se o seu design de Top Shelf inclui uma mistura de tamanhos de imagem, lembre-se de que as imagens serão automaticamente ampliadas para corresponder à altura da imagem mais alta, se necessário. Por exemplo, uma imagem 16:9 é ampliada para 500 pixels de altura se estiver incluída em uma fileira com uma imagem de pôster ou quadrada.

#### Banner rolante recuado

Esse layout mostra uma série de imagens grandes, cada uma ocupando quase toda a largura da tela. A Apple TV percorre esses banners automaticamente em um temporizador predefinido até que as pessoas coloquem um deles em foco. A sequência volta ao início depois que a última imagem é alcançada.

Quando um banner está em foco, um pequeno gesto circular na superfície Touch do controle remoto ativa o efeito de foco do sistema, animando o item, aplicando efeitos de iluminação e, se o banner contiver imagens em camadas, produzindo um efeito 3D. Deslizar na superfície Touch move para o banner seguinte ou anterior na sequência. Use esse estilo para exibir conteúdo rico e cativante, como um novo filme popular.

**Forneça de três a oito imagens.** Recomenda-se um mínimo de três imagens para que um banner rolante pareça eficaz. Mais de oito imagens podem dificultar a navegação até uma imagem específica.

**Se precisar de texto, adicione-o à sua imagem.** Esse estilo de layout não mostra rótulos sob o conteúdo, então todo o texto deve fazer parte da própria imagem. Em imagens em camadas, considere destacar o texto colocando-o em uma camada dedicada acima das outras. Adicione também o texto ao rótulo de acessibilidade da imagem para que o [VoiceOver](https://developer.apple.com/design/human-interface-guidelines/voiceover) possa lê-lo.

![Uma ilustração mostrando um retângulo largo que contém um retângulo menor, que por sua vez contém um retângulo um pouco mais estreito. O retângulo mais externo representa o tamanho real, o retângulo do meio representa a zona visível ou segura e o retângulo mais interno representa o tamanho sem foco.](../../../images/top-shelf/icons-and-images-content-layout-extra-wide@2x.png) ![Uma ilustração mostrando um retângulo largo que contém um retângulo menor, que por sua vez contém um retângulo um pouco mais estreito. O retângulo mais externo representa o tamanho real, o retângulo do meio representa a zona visível ou segura e o retângulo mais interno representa o tamanho sem foco. (escuro)](../../../images/top-shelf/icons-and-images-content-layout-extra-wide~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-and-images-content-layout-extra-wide@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-and-images-content-layout-extra-wide~dark@2x.png)*

Use o tamanho a seguir para uma imagem de banner rolante recuado:

| Aspecto | Tamanho da imagem |
|---|---|
| Tamanho real | 1940x692 pt (1940x692 px @1x, 3880x1384 px  @2x) |
| Tamanho em foco/zona segura | 1740x620 pt (1740x620 px @1x, 3480x1240 px @2x) |
| Tamanho sem foco | 1740x560 pt (1740x560 px @1x, 3480x1120 px @2x) |

## Considerações por plataforma

*Sem suporte no iOS, iPadOS, macOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Apple Design Resources](https://developer.apple.com/design/resources/#tvos-apps)

#### Vídeos

- [Mastering the Living Room With tvOS](https://developer.apple.com/videos/play/wwdc2019/211)
