# Gráficos (Charts)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/charts
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Organize os dados em um gráfico para comunicar informações com clareza e atrativo visual.*

![Uma representação estilizada de um gráfico de barras. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores.](../../../images/charts/components-charts-intro@2x.png) ![Uma representação estilizada de um gráfico de barras. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores. (escuro)](../../../images/charts/components-charts-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-charts-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-charts-intro~dark@2x.png)*

Um gráfico eficaz destaca algumas informações-chave de um conjunto de dados, ajudando as pessoas a obter insights e tomar decisões. Por exemplo, as pessoas podem usar um gráfico para:

- Saber como as condições climáticas previstas podem afetar seus planos.
- Analisar preços de ações para entender o desempenho passado e descobrir tendências.
- Revisar dados de atividade física para acompanhar seu progresso e definir novas metas.

Para saber mais sobre como projetar gráficos que aprimorem sua experiência, consulte [Representação de dados em gráficos](https://developer.apple.com/design/human-interface-guidelines/charting-data); para obter orientações para desenvolvedores, consulte [Criando um gráfico com o Swift Charts](https://developer.apple.com/documentation/charts/creating-a-chart-using-swift-charts).

## Anatomia

Um gráfico é composto por vários elementos gráficos que representam os valores de um conjunto de dados e transmitem informações sobre eles.

![Um gráfico de barras com chamadas que identificam os componentes do gráfico, como eixos, linhas de grade, marcas, tiques, rótulos de valores dos eixos e a área de plotagem como um todo.](../../../images/charts/charts-anatomy@2x.png) ![Um gráfico de barras com chamadas que identificam os componentes do gráfico, como eixos, linhas de grade, marcas, tiques, rótulos de valores dos eixos e a área de plotagem como um todo. (escuro)](../../../images/charts/charts-anatomy~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-anatomy@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-anatomy~dark@2x.png)*

Uma *marca* é uma representação visual de um valor de dados. Você cria um gráfico fornecendo uma ou mais séries de valores de dados, atribuindo cada valor a uma marca. Para especificar o estilo de gráfico que deseja exibir — como gráfico de barras, gráfico de linhas ou gráfico de dispersão —, você escolhe um tipo de marca, como barra, linha ou ponto (para obter orientações, consulte [Marcas](https://developer.apple.com/design/human-interface-guidelines/charts#Marks)). A tarefa geral de representar valores de dados individuais em um gráfico é chamada de *plotagem*, e a área que contém as marcas é chamada de *área de plotagem*.

Para representar um valor, cada tipo de marca usa atributos visuais determinados por uma escala, que mapeia valores de dados, como números, datas ou categorias, para características visuais como posição, cor ou altura. Por exemplo, uma marca de barra pode usar uma altura específica para representar a magnitude de um valor e uma posição específica para representar o momento em que o valor ocorreu.

Para dar às pessoas o contexto de que precisam para interpretar as características visuais de um gráfico, você fornece conteúdo descritivo que pode assumir algumas formas diferentes.

Você pode usar um *eixo* para ajudar a definir um referencial para os dados representados por um conjunto de marcas. Muitos gráficos exibem um par de eixos nas bordas da área de plotagem — um horizontal e um vertical —, em que cada eixo representa uma variável como tempo, quantidade ou categoria.

Um eixo pode incluir *tiques*, que são pontos de referência que ajudam as pessoas a localizar visualmente a posição de valores importantes ao longo do eixo, como 0, 50% e 100%. Muitos gráficos exibem *linhas de grade* que se estendem a partir de cada tique pela área de plotagem para ajudar as pessoas a estimar visualmente um valor de dados quando sua marca não está perto de um eixo.

Você também tem várias maneiras de descrever elementos do gráfico para ajudar as pessoas a interpretar os dados e destacar as principais informações que deseja comunicar. Por exemplo, você pode fornecer *rótulos* que nomeiam itens como eixos, linhas de grade, tiques ou marcas, e *rótulos de acessibilidade* que descrevem elementos do gráfico para pessoas que usam tecnologias assistivas. Para fornecer contexto e detalhes adicionais, você pode criar títulos, subtítulos e anotações descritivos. Quando necessário, você também pode criar uma legenda, que descreve propriedades do gráfico não relacionadas à posição de uma marca, como o uso de cor ou forma para indicar diferentes categorias de valores.

Descrições claras e precisas podem ajudar a tornar um gráfico mais acessível e fácil de entender; para conhecer outras maneiras de melhorar a acessibilidade do seu gráfico, consulte [Aprimoramento da acessibilidade de um gráfico](https://developer.apple.com/design/human-interface-guidelines/charts#Enhancing-the-accessibility-of-a-chart).

## Marcas

**Escolha um tipo de marca com base nas informações que você deseja comunicar sobre os dados.** Alguns dos tipos de marca mais familiares são barra, linha e ponto; para obter orientações para desenvolvedores sobre esses e outros tipos de marca, consulte [Swift Charts](https://developer.apple.com/documentation/charts).

As marcas de *barra* funcionam bem em gráficos que ajudam as pessoas a comparar valores de diferentes categorias ou a ver as proporções relativas de várias partes em um todo. Quando usados para ajudar as pessoas a entender dados que mudam ao longo do tempo, os gráficos de barras funcionam especialmente bem quando cada valor pode representar uma soma, como o número total de passos dados em um dia.

![Um gráfico de barras que mostra o número de passos de cada dia em um mês.](../../../images/charts/charts-bar-marks@2x.png) ![Um gráfico de barras que mostra o número de passos de cada dia em um mês. (escuro)](../../../images/charts/charts-bar-marks~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-bar-marks@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-bar-marks~dark@2x.png)*

As marcas de *linha* também podem mostrar como os valores mudam ao longo do tempo. Em um gráfico de linhas, uma linha conecta todos os valores de dados de uma série. A inclinação da linha revela a magnitude da mudança entre os valores de dados e pode ajudar as pessoas a visualizar as tendências gerais.

![Um gráfico de linhas que mostra o desempenho de uma ação ao longo de um período de cinco anos.](../../../images/charts/charts-line-marks@2x.png) ![Um gráfico de linhas que mostra o desempenho de uma ação ao longo de um período de cinco anos. (escuro)](../../../images/charts/charts-line-marks~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-line-marks@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-line-marks~dark@2x.png)*

As marcas de *ponto* ajudam você a representar valores de dados individuais como marcas visualmente distintas. Um conjunto de marcas de ponto pode mostrar como duas propriedades diferentes dos seus dados se relacionam, ajudando as pessoas a inspecionar valores de dados individuais e identificar valores atípicos e agrupamentos.

![Um gráfico de marcas de ponto que mostra leituras diárias de batimentos cardíacos por minuto ao longo de um período de 5 meses e meio.](../../../images/charts/charts-point-marks@2x.png) ![Um gráfico de marcas de ponto que mostra leituras diárias de batimentos cardíacos por minuto ao longo de um período de 5 meses e meio. (escuro)](../../../images/charts/charts-point-marks~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-point-marks@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-point-marks~dark@2x.png)*

**Considere combinar tipos de marca quando isso trouxer clareza ao seu gráfico.** Por exemplo, se você usa um gráfico de linhas para mostrar uma mudança ao longo do tempo, pode querer adicionar marcas de ponto sobre a linha para destacar pontos de dados individuais. Ao combinar pontos com uma linha, você ajuda as pessoas a entender a tendência geral e, ao mesmo tempo, chama a atenção delas para valores individuais.

## Eixos

**Use uma faixa de eixo fixa ou dinâmica, dependendo do significado do seu gráfico.** Em uma faixa *fixa*, os limites superior e inferior do eixo nunca mudam, enquanto em uma faixa *dinâmica* os limites superior e inferior podem variar de acordo com os dados atuais. Considere usar uma faixa fixa quando valores mínimo e máximo específicos forem significativos para todos os valores de dados possíveis. Por exemplo, as pessoas esperam que um gráfico que mostra a carga atual de uma bateria tenha um valor mínimo de 0% (completamente vazia) e um valor máximo de 100% (completamente cheia).

![Uma ilustração dos Ajustes de Bateria, que usa um gráfico para representar a carga da bateria ao longo do tempo, em que a carga pode variar dentro de uma faixa fixa de 0% a 100%.](../../../images/charts/charts-fixed-range-axis@2x.png) ![Uma ilustração dos Ajustes de Bateria, que usa um gráfico para representar a carga da bateria ao longo do tempo, em que a carga pode variar dentro de uma faixa fixa de 0% a 100%. (escuro)](../../../images/charts/charts-fixed-range-axis~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-fixed-range-axis@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-fixed-range-axis~dark@2x.png)*

Em contraste, considere usar uma faixa dinâmica quando os valores de dados possíveis puderem variar muito e você quiser que as marcas preencham a área de plotagem disponível. Por exemplo, o limite superior da faixa do eixo Y no gráfico de Passos do app Saúde varia de modo que o maior número de passos em um determinado período fique próximo ao topo do gráfico.

![Uma ilustração do gráfico de Passos no app Saúde, que mostra o número médio de passos por dia durante uma única semana.](../../../images/charts/charts-dynamic-range-axis-small@2x.png) ![Uma ilustração do gráfico de Passos no app Saúde, que mostra o número médio de passos por dia durante uma única semana. (escuro)](../../../images/charts/charts-dynamic-range-axis-small~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-dynamic-range-axis-small@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-dynamic-range-axis-small~dark@2x.png)*

![Uma ilustração do gráfico de Passos no app Saúde, que mostra o número médio de passos por dia em um período de um mês.](../../../images/charts/charts-dynamic-range-axis-large@2x.png) ![Uma ilustração do gráfico de Passos no app Saúde, que mostra o número médio de passos por dia em um período de um mês. (escuro)](../../../images/charts/charts-dynamic-range-axis-large~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-dynamic-range-axis-large@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-dynamic-range-axis-large~dark@2x.png)*

**Defina o valor do limite inferior com base no tipo de marca e no uso do gráfico.** Por exemplo, os gráficos de barras podem funcionar bem quando você usa zero como limite inferior do eixo Y, porque isso permite que as pessoas comparem visualmente as alturas relativas das barras individuais para obter uma estimativa razoável de seus valores. Em contraste, definir um limite inferior de zero às vezes pode dificultar a percepção de diferenças significativas entre os valores. Por exemplo, um gráfico de frequência cardíaca que sempre usa zero como limite inferior poderia ocultar diferenças importantes entre as leituras em repouso e em atividade, porque as diferenças ocorrem em uma faixa distante de zero.

**Prefira sequências de valores familiares nos rótulos de tiques e linhas de grade de um eixo.** Por exemplo, se você usar uma sequência numérica comum como 0, 5, 10 etc., as pessoas provavelmente saberão num relance que cada valor de tique equivale ao valor anterior mais cinco. Embora uma sequência como 1, 6, 11 etc. siga a mesma regra, ela não é comum, por isso é provável que a maioria das pessoas gaste um tempo extra pensando no intervalo entre os valores.

**Adapte a aparência das linhas de grade e dos rótulos aos casos de uso de um gráfico.** Linhas de grade demais podem sobrecarregar visualmente, distraindo as pessoas dos dados; linhas de grade de menos podem dificultar a estimativa do valor de uma marca. Para ajudar a determinar a densidade e o peso visual adequados desses elementos, considere o contexto do gráfico na interface, as interações que você oferece e as tarefas que as pessoas podem realizar no gráfico. Por exemplo, se as pessoas puderem inspecionar pontos de dados individuais interagindo com um gráfico, você pode usar menos linhas de grade e cores de rótulo claras para garantir que os dados permaneçam visualmente em destaque.

## Conteúdo descritivo

**Escreva descrições que ajudem as pessoas a entender o que um gráfico faz antes de visualizá-lo.** Quando você fornece títulos e rótulos ricos em informações que descrevem a finalidade e a funcionalidade de um gráfico, dá às pessoas o contexto de que precisam antes de se aprofundarem e examinarem os detalhes. Fornecer contexto dessa maneira é especialmente importante para usuários do VoiceOver e para pessoas com certos tipos de deficiência cognitiva, porque elas dependem de suas descrições para entender a finalidade e a mensagem principal do seu gráfico antes de decidirem investigá-lo mais a fundo.

**Resuma a mensagem principal do seu gráfico para torná-lo acessível e útil para todos.** Embora um dos principais motivos para usar um gráfico seja exibir os dados que sustentam a mensagem principal, é essencial resumir as informações-chave para que as pessoas possam apreendê-las rapidamente. Por exemplo, o app Clima fornece um título e um subtítulo que descrevem de forma sucinta a precipitação esperada para a próxima hora, dando às pessoas a informação mais importante sem exigir que examinem os detalhes do gráfico.

![Uma ilustração da previsão de chuva para a próxima hora no app Clima, que usa linguagem simples e concisa para descrever a precipitação esperada.](../../../images/charts/charts-descriptive-content@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-descriptive-content@2x.png)*

## Boas práticas

**Estabeleça uma hierarquia visual consistente que ajude a comunicar a importância relativa dos vários elementos do gráfico.** Normalmente, você quer que os próprios dados sejam o elemento mais proeminente, deixando que as descrições e os eixos forneçam contexto adicional sem competir com os dados.

**Em um ambiente compacto, maximize a largura da área de plotagem para dar às pessoas espaço suficiente para examinar um gráfico com conforto.** Para ajudar os dados importantes a caberem bem em uma determinada largura, garanta que os rótulos de um eixo vertical sejam o mais curtos possível sem perder clareza. Você também pode considerar descrever as unidades em outras áreas do gráfico, como em um título, e colocar um rótulo de eixo mais longo, como o nome de uma categoria, dentro da área de plotagem quando isso não obscurecer informações importantes.

**Torne todos os gráficos do seu app acessíveis.** Os gráficos — como todos os infográficos — precisam ser totalmente acessíveis a todas as pessoas, independentemente de como percebem o conteúdo. Por exemplo, é essencial oferecer suporte ao VoiceOver, que descreve o conteúdo da tela para ajudar as pessoas a obter informações e navegar sem precisar ver a tela (para saber mais sobre o VoiceOver, consulte [Visão](https://www.apple.com/accessibility/vision/)). Além de fornecer rótulos de acessibilidade que descrevem os componentes do seu gráfico, você pode aprimorar a experiência com o VoiceOver usando também os Audio Graphs. Os [Audio graphs](https://developer.apple.com/documentation/accessibility/audio-graphs) fornecem informações do gráfico ao VoiceOver, que constrói um conjunto de tons que representam audivelmente os valores de dados do gráfico e sua tendência; eles também permitem apresentar resumos de texto de alto nível que fornecem contexto adicional. Para obter orientações, consulte [Aprimoramento da acessibilidade de um gráfico](https://developer.apple.com/design/human-interface-guidelines/charts#Enhancing-the-accessibility-of-a-chart).

**Permita que as pessoas interajam com os dados quando fizer sentido, mas não exija interação para revelar informações críticas.** No app Bolsa, por exemplo, as pessoas geralmente se interessam mais pelo desempenho de uma ação ao longo do tempo, por isso o app exibe um gráfico de linhas que mostra o desempenho durante o período que as pessoas escolhem, como um dia, três meses ou cinco anos. Se quiserem explorar mais detalhes, as pessoas podem arrastar um indicador vertical pelo gráfico de linhas, revelando o valor no momento selecionado.

**Facilite a interação de todas as pessoas com um gráfico.** Às vezes, as marcas do gráfico são pequenas demais para serem alvo de um dedo ou de um ponteiro, tornando o gráfico difícil de usar para pessoas com controle motor reduzido e desconfortável para todos. Quando for esse o caso, considere expandir a área de toque para incluir toda a área de plotagem, permitindo que as pessoas deslizem pela área para revelar vários valores.

**Facilite a navegação em um gráfico interativo ao usar comandos de teclado (inclusive o acesso total pelo teclado) ou o Switch Control.** Por padrão, esses tipos de entrada tendem a percorrer os elementos individuais da tela em uma sequência linear, como a sequência de valores em um arquivo de dados. Se você quiser oferecer uma experiência de navegação personalizada no seu gráfico, há duas maneiras principais de fazê-lo. A primeira é usar APIs de acessibilidade (como [accessibilityRespondsToUserInteraction(_:)](https://developer.apple.com/documentation/swiftui/view/accessibilityrespondstouserinteraction(_:))) para especificar um percurso lógico e previsível pelas informações do seu gráfico. Por exemplo, você pode querer permitir que as pessoas naveguem ao longo do eixo X em vez de pular de um lado para o outro. A segunda maneira — particularmente útil se você precisa apresentar um conjunto de dados muito grande — é permitir que as pessoas movam o foco entre subconjuntos de valores em vez de navegar por todos os pontos de dados individuais. Observe que ambas as personalizações também podem aprimorar a experiência com o VoiceOver, mesmo quando seu gráfico não é interativo. Para obter orientações, consulte [Acessibilidade](https://developer.apple.com/design/human-interface-guidelines/accessibility).

**Ajude as pessoas a perceber mudanças importantes em um gráfico.** Por exemplo, se as pessoas não percebem quando marcas ou eixos mudam, podem interpretar mal o gráfico. Animar essas mudanças pode ajudar as pessoas a percebê-las, mas você também precisa destacar as mudanças de outras maneiras, para garantir que usuários do VoiceOver e pessoas que desativam as animações saibam delas. Para obter orientações para desenvolvedores, consulte [UIAccessibility.Notification](https://developer.apple.com/documentation/uikit/uiaccessibility/notification) (UIKit) ou [NSAccessibility.Notification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification) (AppKit).

**Alinhe um gráfico com os elementos de interface ao redor.** Por exemplo, muitas vezes funciona bem alinhar a borda inicial de um gráfico com a borda inicial de outras visualizações em uma tela. Uma maneira de manter uma borda inicial limpa em um gráfico é exibir o rótulo de cada linha de grade vertical em seu lado final. Você também pode considerar deslocar o eixo Y para o lado final do gráfico, para que os rótulos de seus tiques não ultrapassem a borda inicial do gráfico. Se acabar com um rótulo que não parece estar associado a nada, você pode usar um tique para ancorá-lo a uma linha de grade.

## Cor

Como em todas as outras partes da sua interface, usar cor em um gráfico pode ajudar a esclarecer informações, evocar sua marca e proporcionar continuidade visual. Para obter orientações gerais sobre como usar cor de maneiras que todos possam apreciar, consulte [Cor inclusiva](https://developer.apple.com/design/human-interface-guidelines/color#Inclusive-color).

**Evite depender apenas da cor para diferenciar dados ou comunicar informações essenciais em um gráfico.** Usar cor com significado em um gráfico funciona bem para destacar diferenças e valorizar detalhes importantes, mas é fundamental incluir maneiras alternativas de transmitir essas informações, para que as pessoas possam usar seu gráfico independentemente de conseguirem distinguir cores. Uma maneira de complementar a cor é usar formas ou padrões diferentes para representar partes diferentes dos dados. Por exemplo, além de usar as cores vermelho e preto ou vermelho e branco, o app Saúde usa duas formas diferentes nas marcas de ponto que representam os dois componentes da pressão arterial.

![Uma ilustração de um gráfico de pressão arterial no app Saúde que usa um círculo vermelho para representar os valores sistólicos e um losango preto ou branco para representar os valores diastólicos.](../../../images/charts/charts-colors@2x.png) ![Uma ilustração de um gráfico de pressão arterial no app Saúde que usa um círculo vermelho para representar os valores sistólicos e um losango preto ou branco para representar os valores diastólicos. (escuro)](../../../images/charts/charts-colors~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-colors@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-colors~dark@2x.png)*

**Facilite a compreensão adicionando separação visual entre áreas de cor contíguas.** Por exemplo, em um gráfico de barras que empilha marcas em uma única linha ou coluna, é comum atribuir uma cor diferente a cada marca. Nesse design, adicionar separadores entre as marcas pode ajudar as pessoas a distinguir cada uma delas.

![Uma ilustração dos Ajustes de Armazenamento do iPhone, que usa uma única marca de barra contendo vários segmentos de cores diferentes para mostrar o espaço relativo ocupado por itens como músicas, apps e fotos. A barra inclui uma faixa estreita de espaço vazio entre cada par de segmentos.](../../../images/charts/charts-colors-stacked@2x.png) ![Uma ilustração dos Ajustes de Armazenamento do iPhone, que usa uma única marca de barra contendo vários segmentos de cores diferentes para mostrar o espaço relativo ocupado por itens como músicas, apps e fotos. A barra inclui uma faixa estreita de espaço vazio entre cada par de segmentos. (escuro)](../../../images/charts/charts-colors-stacked~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-colors-stacked@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-colors-stacked~dark@2x.png)*

## Aprimoramento da acessibilidade de um gráfico

Quando você usa o Swift Charts para criar um gráfico, obtém uma implementação padrão dos [Audio graphs](https://developer.apple.com/documentation/accessibility/audio-graphs), além de um elemento de acessibilidade padrão para cada marca (ou grupo de marcas) que descreve seu valor.

**Considere usar os Audio Graphs para dar aos usuários do VoiceOver mais informações sobre o seu gráfico.** Você pode personalizar a implementação padrão dos Audio Graphs fornecida pelo Swift Charts fornecendo um título do gráfico e um resumo descritivo que o VoiceOver fala para ajudar as pessoas a entender a finalidade e as principais características do seu gráfico. Se você não usar os Audio Graphs, precisará fornecer uma visão geral da estrutura e da finalidade do gráfico. Por exemplo, você precisa identificar o tipo do gráfico — como barras ou linhas —, explicar o que cada eixo representa e descrever detalhes como os limites superior e inferior dos eixos.

> **Importante:** Ao contrário de uma imagem — que exige um único rótulo de acessibilidade descritivo —, um gráfico muitas vezes precisa oferecer um rótulo de acessibilidade para cada elemento importante ou interativo. Dependendo da finalidade do gráfico e do escopo e da densidade de suas marcas, você precisa decidir se é essencial descrever cada marca ou se descrever grupos de marcas melhora a experiência de acessibilidade. Em alguns casos, pode fazer sentido usar um único rótulo de acessibilidade que forneça uma descrição sucinta e de alto nível do gráfico, como quando você usa uma versão pequena de um gráfico em um botão que revela uma versão mais detalhada.

**Escreva rótulos de acessibilidade que apoiem a finalidade do seu gráfico.** Por exemplo, o app Mapas mostra a elevação de uma rota de ciclismo usando um gráfico que representa a variação de elevação ao longo do percurso. A finalidade do gráfico é dar às pessoas uma noção do terreno de toda a rota, e não fornecer elevações individuais. Por isso, o app Mapas fornece rótulos de acessibilidade que resumem as variações de elevação em um trecho da rota, em vez de fornecer rótulos para cada momento individual. Em contraste, o app Saúde oferece um rótulo de acessibilidade para cada barra do gráfico de Passos, porque a finalidade do gráfico é informar às pessoas sua contagem real de passos em cada período de monitoramento.

![Uma ilustração de um gráfico no app Mapas que mostra a faixa de elevações ao longo da distância total da viagem. Um indicador de foco do VoiceOver está visível sobre o gráfico, abrangendo aproximadamente um quinto da distância e da elevação totais.](../../../images/charts/charts-bar-chart-with-voiceover-focus@2x.png) ![Uma ilustração de um gráfico no app Mapas que mostra a faixa de elevações ao longo da distância total da viagem. Um indicador de foco do VoiceOver está visível sobre o gráfico, abrangendo aproximadamente um quinto da distância e da elevação totais. (escuro)](../../../images/charts/charts-bar-chart-with-voiceover-focus~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-bar-chart-with-voiceover-focus@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/charts-bar-chart-with-voiceover-focus~dark@2x.png)*

As diretrizes a seguir podem ajudar você a escrever rótulos de acessibilidade úteis para elementos do gráfico.

- **Priorize a clareza e a abrangência.** Em geral, raramente basta informar apenas um valor de dados, a menos que você inclua também um contexto que ajude as pessoas a entendê-lo, como a data ou o local associado a ele. Procure descrever de forma concisa o contexto de um valor sem repetir informações que as pessoas podem obter de outras maneiras, como o nome de um eixo que os Audio Graphs ou sua visão geral fornecem. Faça seguir as informações que estabelecem o contexto de uma descrição sucinta dos detalhes do elemento.
- **Evite usar termos subjetivos.** Palavras subjetivas — como rapidamente, gradualmente e quase — comunicam a sua interpretação dos dados. Para ajudar as pessoas a formar suas próprias interpretações, use valores reais nas suas descrições.
- **Maximize a clareza nas descrições dos dados evitando formatos e abreviações potencialmente ambíguos.** Por exemplo, usar “6 de junho” é mais claro do que usar “6/6”; da mesma forma, escrever por extenso “60 minutos” ou “60 metros” é mais claro do que usar a abreviação “60m”.
- **Descreva o que os detalhes do gráfico representam, não a aparência deles.** Considere um gráfico que usa as cores vermelho e azul para ajudar as pessoas a distinguir visualmente duas séries de dados diferentes. É fundamental criar rótulos de acessibilidade que identifiquem o que cada série representa, mas descrever as cores que as representam visualmente pode acrescentar informações desnecessárias e distrair.
- **Seja consistente em todo o seu app ao se referir a um eixo específico.** Por exemplo, se você sempre mencionar o eixo X primeiro, as pessoas gastarão menos tempo descobrindo qual eixo é relevante em uma descrição.

**Oculte das tecnologias assistivas os rótulos de texto visíveis dos eixos e tiques.** Os rótulos de eixos e tiques ajudam as pessoas a avaliar visualmente as tendências em um gráfico e a estimar os valores das marcas. Os usuários do VoiceOver podem obter os valores das marcas e as informações de tendência por meio de rótulos de acessibilidade e dos Audio Graphs, portanto, em geral, não precisam do conteúdo dos rótulos visíveis.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS, visionOS.*

### watchOS

**Em geral, evite exigir interações complexas com gráficos no seu app para watchOS.** Sempre que possível, prefira exibir informações úteis que as pessoas possam obter num relance e oferecer suporte a interações simples quando agregarem valor. Se você também oferece uma versão do seu app em outra plataforma, considere usá-la para exibir mais detalhes e oferecer suporte a interações adicionais com seu gráfico. Por exemplo, o app Frequência Cardíaca no watchOS exibe um gráfico dos dados de frequência cardíaca de quem usa o dispositivo no dia atual, enquanto o app Saúde no iPhone exibe os dados de frequência cardíaca de vários períodos diferentes e permite que as pessoas examinem marcas individuais.

## Recursos

#### Relacionados

[Representação de dados em gráficos](https://developer.apple.com/design/human-interface-guidelines/charting-data)

#### Documentação para desenvolvedores

[Swift Charts](https://developer.apple.com/documentation/charts)

#### Vídeos

- [Leve o Swift Charts para a terceira dimensão](https://developer.apple.com/videos/play/wwdc2025/313)
- [Projete experiências de app com gráficos](https://developer.apple.com/videos/play/wwdc2022/110342)
- [Projete um gráfico eficaz](https://developer.apple.com/videos/play/wwdc2022/110340)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 23 de setembro de 2022 | Nova página. |
