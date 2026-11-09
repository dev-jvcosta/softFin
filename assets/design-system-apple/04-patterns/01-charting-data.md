# Gráficos de dados (Charting data)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/charting-data
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Apresentar dados em um gráfico pode ajudar você a comunicar informações com clareza e atratividade.*

![Um esboço de um gráfico de barras, sugerindo a representação de dados. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores.](../../images/charting-data/patterns-charting-data-intro@2x.png) ![Um esboço de um gráfico de barras, sugerindo a representação de dados. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores. (escuro)](../../images/charting-data/patterns-charting-data-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-charting-data-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-charting-data-intro~dark@2x.png)*

Os gráficos oferecem maneiras eficientes de comunicar informações complexas sem exigir que as pessoas leiam e interpretem muito texto. A natureza gráfica dos gráficos também oferece oportunidades adicionais de expressar a personalidade da sua experiência e adicionar interesse visual à interface. Para conhecer os componentes usados para criar um gráfico, consulte [Gráficos](https://developer.apple.com/design/human-interface-guidelines/charts).

Um gráfico pode variar de um elemento gráfico simples que fornece informações de relance a uma experiência rica e interativa, que pode ser o centro do seu app e incentivar as pessoas a explorar os dados de várias perspectivas. Simples ou complexos, os gráficos podem ajudar as pessoas a realizar tarefas baseadas em dados que são importantes para elas, como:

- Analisar tendências com base em valores históricos ou previstos
- Visualizar o estado atual de um processo, sistema ou quantidade que muda ao longo do tempo
- Avaliar itens diferentes, ou o mesmo item em momentos diferentes, comparando dados entre várias categorias

Nem toda coleção de dados precisa ser exibida em um gráfico. Se você simplesmente precisa fornecer dados, sem precisar transmitir informações sobre eles ou ajudar as pessoas a analisá-los, considere oferecer os dados de outras maneiras, como em uma lista ou tabela que as pessoas possam rolar, pesquisar e ordenar.

## Boas práticas

**Use um gráfico quando quiser destacar informações importantes sobre um conjunto de dados.** Os gráficos são visualmente proeminentes, por isso tendem a atrair a atenção das pessoas. Aproveite essa proeminência comunicando claramente o que as pessoas podem aprender com os dados que lhes interessam.

**Mantenha o gráfico simples, deixando as pessoas escolherem quando querem detalhes adicionais.** Resista à tentação de colocar o máximo de dados possível em um gráfico. Dados demais podem tornar um gráfico visualmente sobrecarregado e difícil de usar, ocultando as relações e outras informações que você quer transmitir. Se você tem muitos dados para apresentar, ou muitas funcionalidades para oferecer, considere dar às pessoas uma forma de revelá-los gradualmente. Por exemplo, você pode permitir que as pessoas escolham visualizar diferentes níveis de detalhe ou subconjuntos de dados de acordo com seu interesse. Para ajudar as pessoas a aprender a usar um gráfico interativo, você pode oferecer várias versões do gráfico, cada uma com mais funcionalidades que a anterior.

**Torne todos os gráficos do seu app acessíveis.** Um gráfico comunica visualmente por meio de representações gráficas de dados e descrições visuais. Além das descrições visuais que você exibe, é fundamental fornecer tanto rótulos de acessibilidade que descrevam os valores e componentes do gráfico quanto elementos de acessibilidade que ajudem as pessoas a interagir com ele. Para orientações, consulte [Melhorando a acessibilidade de um gráfico](https://developer.apple.com/design/human-interface-guidelines/charts#Enhancing-the-accessibility-of-a-chart).

## Projetando gráficos eficazes

**Em geral, prefira usar tipos de gráfico comuns.** As pessoas tendem a estar familiarizadas com tipos de gráfico comuns, como gráficos de barras e de linhas, então usar um desses tipos no seu app aumenta a probabilidade de que as pessoas já saibam ler seu gráfico. Para orientações, consulte [Gráficos](https://developer.apple.com/design/human-interface-guidelines/charts).

**Se você precisa criar um gráfico que apresenta dados de uma forma inovadora, ajude as pessoas a aprender a interpretá-lo.** Por exemplo, quando um Watch é pareado com um iPhone, o Atividade apresenta os anéis de Atividade animando-os individualmente, mostrando às pessoas como cada anel corresponde às métricas de movimento, exercício e ficar em pé.

**Examine os dados de vários níveis ou perspectivas para encontrar detalhes que você possa exibir para aprimorar o gráfico.** Por exemplo, ver os dados em um nível macro pode ajudar a determinar resumos de alto nível que podem interessar às pessoas, como totais ou médias. De uma perspectiva intermediária, você pode encontrar maneiras de ajudar as pessoas a identificar subconjuntos úteis dos dados, ao passo que examinar pontos de dados individuais pode ajudar a encontrar formas de chamar a atenção das pessoas para valores ou itens específicos. Exibir informações que ajudem as pessoas a ver o gráfico de várias perspectivas pode incentivá-las a interagir com ele.

![Uma captura de tela do app Bolsa no iPhone. O app usa um gráfico de linhas para representar o desempenho de uma ação durante o período de um mês atualmente escolhido.](../../images/charting-data/charts-stocks@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-stocks@2x.png)*

![Uma captura de tela da tela Atividade no app Saúde no iPhone. O app usa um conjunto de três gráficos de barras para representar informações dos três anéis de Atividade durante o período de um dia atualmente escolhido.](../../images/charting-data/charts-activity@2x.png) ![Uma captura de tela da tela Atividade no app Saúde no iPhone. O app usa um conjunto de três gráficos de barras para representar informações dos três anéis de Atividade durante o período de um dia atualmente escolhido. (escuro)](../../images/charting-data/charts-activity~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-activity@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-activity~dark@2x.png)*

**Facilite a compreensão adicionando texto descritivo ao gráfico.** Títulos, subtítulos e anotações em texto descritivo ajudam a enfatizar as informações mais importantes de um gráfico e podem destacar conclusões acionáveis. Você também pode exibir um texto descritivo breve que sirva como manchete ou resumo do gráfico, ajudando as pessoas a captar as informações essenciais rapidamente. Por exemplo, o Clima exibe um texto que resume as informações de que as pessoas precisam agora, como “Possibilidade de chuva fraca na próxima hora”, acima da lista rolável de previsões por hora para as próximas 24 horas. Embora uma manchete ou um resumo descritivo possa tornar um gráfico mais acessível, ele não substitui os rótulos de acessibilidade.

**Ajuste o tamanho de um gráfico à sua funcionalidade, tema e nível de detalhe.** Em geral, um gráfico precisa ser grande o bastante para exibir confortavelmente os detalhes que você precisa incluir e amplo o bastante para a interatividade que você quer oferecer. Por exemplo, você sempre quer facilitar a leitura dos detalhes e do texto descritivo de um gráfico, como rótulos e anotações, mas também pode querer dar às pessoas espaço suficiente para mudar o escopo do gráfico ou investigar os dados de diferentes perspectivas. Por outro lado, você pode querer usar um gráfico pequeno para oferecer informações de relance sobre um item individual ou para fornecer um instantâneo ou uma prévia de uma versão maior do gráfico que as pessoas possam revelar em outra visualização.

**Prefira consistência entre vários gráficos, desviando-se dela apenas quando precisar destacar diferenças.** Se vários gráficos do seu app têm finalidade semelhante, geralmente você não quer sugerir que eles não têm relação usando um tipo ou estilo diferente para cada um. Além disso, usar uma abordagem visual consistente nos gráficos do seu app permite que as pessoas usem o que aprendem sobre um gráfico para entender outro. Considere usar diferentes tipos e estilos de gráfico quando precisar destacar diferenças significativas entre eles.

**Mantenha a continuidade entre vários gráficos que usam os mesmos dados.** Quando você usa vários gráficos para ajudar as pessoas a explorar um conjunto de dados de diferentes perspectivas, é importante usar um único tipo de gráfico e cores, anotações, layouts e textos descritivos consistentes para sinalizar que o conjunto de dados continua o mesmo. Por exemplo, a tela Tendências de Saúde mostra pequenos gráficos que usam, cada um, um estilo visual específico para representar uma tendência recente em uma área como passos ou frequência cardíaca em repouso. Quando as pessoas escolhem um gráfico para revelar todos os seus dados nessa área, a versão expandida usa o mesmo estilo, as mesmas cores, marcas e anotações para fortalecer a relação entre as versões.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Gráficos](https://developer.apple.com/design/human-interface-guidelines/charts)

#### Documentação para desenvolvedores

[Swift Charts](https://developer.apple.com/documentation/charts)

#### Vídeos

- [Bring Swift Charts to the third dimension](https://developer.apple.com/videos/play/wwdc2025/313)
- [Design app experiences with charts](https://developer.apple.com/videos/play/wwdc2022/110342)
- [Design an effective chart](https://developer.apple.com/videos/play/wwdc2022/110340)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 23 de setembro de 2022 | Nova página. |
