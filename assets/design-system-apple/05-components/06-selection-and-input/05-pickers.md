# Seletores (Pickers)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/pickers
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um seletor exibe uma ou mais listas roláveis de valores distintos entre os quais as pessoas podem escolher.*

![Representação estilizada de um item selecionado em uma lista rolável. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/pickers/components-pickers-intro@2x.png) ![Representação estilizada de um item selecionado em uma lista rolável. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/pickers/components-pickers-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-pickers-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-pickers-intro~dark@2x.png)*

O sistema oferece vários estilos de seletores, cada um com diferentes tipos de valores selecionáveis e uma aparência distinta. Os valores exatos exibidos em um seletor, e sua ordem, dependem do idioma do dispositivo.

Os seletores ajudam as pessoas a inserir informações permitindo que escolham valores simples ou compostos. Os seletores de data, especificamente, oferecem maneiras adicionais de escolher valores, como selecionar um dia em uma visualização de calendário ou inserir datas e horários usando um teclado numérico.

## Boas práticas

**Considere usar um seletor para oferecer listas de itens de tamanho médio a longo.** Se você precisa exibir uma lista bastante curta de opções, considere usar um [botão de menu suspenso](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons) em vez de um seletor. Embora um seletor facilite rolar rapidamente por muitos itens, ele pode adicionar peso visual demais a uma lista curta. Por outro lado, se você precisa apresentar um conjunto muito grande de itens, considere usar uma [lista ou tabela](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables). Listas e tabelas podem se ajustar em altura, e as tabelas podem incluir um índice, o que torna muito mais rápido chegar a uma seção da lista.

**Use valores previsíveis e logicamente ordenados.** Antes de as pessoas interagirem com um seletor, muitos de seus valores podem estar ocultos. O ideal é que as pessoas possam prever quais são os valores ocultos, como em uma lista de países em ordem alfabética, para poderem percorrer os itens rapidamente.

**Evite trocar de visualização para mostrar um seletor.** Um seletor funciona bem quando exibido em contexto, abaixo ou próximo do campo que as pessoas estão editando. Um seletor normalmente aparece na parte inferior de uma janela ou em um popover.

**Considere oferecer menos granularidade ao especificar minutos em um seletor de data.** Por padrão, uma lista de minutos inclui 60 valores (0 a 59). Você pode, opcionalmente, aumentar o intervalo de minutos, desde que ele divida 60 igualmente. Por exemplo, você pode querer intervalos de quinze minutos (0, 15, 30 e 45).

## Considerações por plataforma

*Nenhuma consideração adicional para visionOS.*

### iOS, iPadOS

Um seletor de data é uma interface eficiente para selecionar uma data, um horário ou ambos específicos, usando toque, teclado ou dispositivo apontador. Você pode exibir um seletor de data em um dos seguintes estilos:

- Compacto — Um botão que exibe conteúdo editável de data e hora em uma visualização modal.
- Em linha — Para horário apenas, um botão que exibe rodas de valores; para datas e horários, uma visualização de calendário em linha.
- Rodas — Um conjunto de rodas giratórias que também oferece suporte à entrada de dados por teclados integrados ou externos.
- Automático — Um estilo determinado pelo sistema com base na plataforma atual e no modo do seletor de data.

Um seletor de data tem quatro modos, cada um apresentando um conjunto diferente de valores selecionáveis.

- Data — Exibe meses, dias do mês e anos.
- Hora — Exibe horas, minutos e, opcionalmente, uma designação AM/PM.
- Data e hora — Exibe datas, horas, minutos e, opcionalmente, uma designação AM/PM.
- Timer de contagem regressiva — Exibe horas e minutos, até o máximo de 23 horas e 59 minutos. Este modo não está disponível nos estilos em linha ou compacto.

Os valores exatos exibidos em um seletor de data, e sua ordem, dependem da localidade do dispositivo.

Veja a seguir vários exemplos de seletores de data mostrando diferentes combinações de estilo e modo.

**Compacto**

![Uma ilustração de um seletor de data compacto, com uma única linha em linha mostrando a data atualmente selecionada. O seletor abre como um popover que se estende para baixo a partir da linha e inclui um mês completo do calendário para escolher a data.](../../../images/pickers/pickers-date-picker-compact-expanded@2x.png) ![Uma ilustração de um seletor de data compacto, com uma única linha em linha mostrando a data atualmente selecionada. O seletor abre como um popover que se estende para baixo a partir da linha e inclui um mês completo do calendário para escolher a data. (escuro)](../../../images/pickers/pickers-date-picker-compact-expanded~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-date-picker-compact-expanded@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-date-picker-compact-expanded~dark@2x.png)*

**Em linha**

![Uma ilustração de um seletor de data em linha, intitulado 'Data'. Um interruptor no topo está ligado, e um mês do calendário para escolher a data aparece abaixo do título e do interruptor.](../../../images/pickers/pickers-date-picker-inline-expanded@2x.png) ![Uma ilustração de um seletor de data em linha, intitulado 'Data'. Um interruptor no topo está ligado, e um mês do calendário para escolher a data aparece abaixo do título e do interruptor. (escuro)](../../../images/pickers/pickers-date-picker-inline-expanded~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-date-picker-inline-expanded@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-date-picker-inline-expanded~dark@2x.png)*

**Rodas**

![Uma ilustração de um seletor de hora em linha, intitulado 'Hora'. O horário atualmente selecionado aparece na linha do título, e três rodas verticais aparecem abaixo dela para escolher a hora, o minuto e o valor AM ou PM.](../../../images/pickers/pickers-time-picker-inline-wheel@2x.png) ![Uma ilustração de um seletor de hora em linha, intitulado 'Hora'. O horário atualmente selecionado aparece na linha do título, e três rodas verticais aparecem abaixo dela para escolher a hora, o minuto e o valor AM ou PM. (escuro)](../../../images/pickers/pickers-time-picker-inline-wheel~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-time-picker-inline-wheel@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-time-picker-inline-wheel~dark@2x.png)*

**Use um seletor de data compacto quando o espaço for limitado.** O estilo compacto exibe um botão que mostra o valor atual na cor de destaque do seu app. Quando as pessoas tocam no botão, o seletor de data abre uma visualização modal, oferecendo acesso a um editor familiar no estilo calendário e a um seletor de hora. Dentro da visualização modal, as pessoas podem fazer várias edições de datas e horários antes de tocar fora da visualização para confirmar suas escolhas.

### macOS

**Escolha um estilo de seletor de data que se adapte ao seu app.** Há dois estilos de seletores de data no macOS: textual e gráfico. O estilo textual é útil quando você trabalha com espaço limitado e espera que as pessoas façam seleções específicas de data e hora. O estilo gráfico é útil quando você quer dar às pessoas a opção de navegar pelos dias em um calendário ou selecionar um intervalo de datas, ou quando o visual de um mostrador de relógio é apropriado para seu app.

Para orientações para desenvolvedores, consulte [NSDatePicker](https://developer.apple.com/documentation/appkit/nsdatepicker).

### tvOS

Os seletores estão disponíveis no tvOS com SwiftUI. Para orientações para desenvolvedores, consulte [Picker](https://developer.apple.com/documentation/swiftui/picker).

### watchOS

Os seletores exibem listas de itens pelas quais as pessoas navegam usando a Digital Crown, o que ajuda as pessoas a gerenciar as seleções de forma precisa e envolvente.

Um seletor pode exibir uma lista de itens usando o estilo de rodas. O watchOS também pode exibir seletores de data e hora usando o estilo de rodas. Para orientações para desenvolvedores, consulte [Picker](https://developer.apple.com/documentation/swiftui/picker) e [DatePicker](https://developer.apple.com/documentation/swiftui/datepicker).

![Uma ilustração representando uma tela contendo uma visualização de seletor no Apple Watch, mostrando três itens em uma lista. O item central está destacado.](../../../images/pickers/pickers-wheel-watch@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-wheel-watch@2x.png)*

![Uma ilustração representando uma tela contendo um seletor de data no Apple Watch, com o dia destacado.](../../../images/pickers/pickers-date-watch@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-date-watch@2x.png)*

![Uma ilustração representando uma tela contendo um seletor de hora no Apple Watch, com os minutos destacados.](../../../images/pickers/pickers-time-watch@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-time-watch@2x.png)*

Você pode configurar um seletor para exibir um contorno, uma legenda e um indicador de rolagem.

Para listas mais longas, o link de navegação exibe o seletor como um botão. Quando alguém toca no botão, o sistema mostra a lista de opções. A pessoa também pode percorrer as opções usando a Digital Crown sem tocar no botão. Para orientações para desenvolvedores, consulte [navigationLink](https://developer.apple.com/documentation/swiftui/pickerstyle/navigationlink).

![Uma ilustração representando uma tela que contém um botão de seletor no Apple Watch. O texto do botão indica que o segundo item está selecionado.](../../../images/pickers/pickers-navigation-button-watch@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-navigation-button-watch@2x.png)*

![Uma ilustração representando uma tela que mostra uma lista de itens no Apple Watch. O segundo item da lista está selecionado.](../../../images/pickers/pickers-navigation-list-watch@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pickers-navigation-list-watch@2x.png)*

## Recursos

#### Relacionados

[Botões de menu suspenso](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

[Listas e tabelas](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

#### Documentação para desenvolvedores

[Picker](https://developer.apple.com/documentation/swiftui/picker) — SwiftUI

[UIDatePicker](https://developer.apple.com/documentation/uikit/uidatepicker) — UIKit

[UIPickerView](https://developer.apple.com/documentation/uikit/uipickerview) — UIKit

[NSDatePicker](https://developer.apple.com/documentation/appkit/nsdatepicker) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 5 de junho de 2023 | Orientações atualizadas para o uso de seletores no watchOS. |
