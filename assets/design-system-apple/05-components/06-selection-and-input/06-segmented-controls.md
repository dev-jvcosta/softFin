# Controles segmentados (Segmented controls)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/segmented-controls
>
> Plataformas: ios,ipados,macos,tvos,visionos

*Um controle segmentado é um conjunto linear de dois ou mais segmentos, cada um funcionando como um botão.*

![Uma representação estilizada de um segmento selecionado em um controle segmentado. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores.](../../../images/segmented-controls/components-segmented-control-intro@2x.png) ![Uma representação estilizada de um segmento selecionado em um controle segmentado. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores. (escuro)](../../../images/segmented-controls/components-segmented-control-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-segmented-control-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-segmented-control-intro~dark@2x.png)*

Em um controle segmentado, todos os segmentos geralmente têm a mesma largura. Assim como os [botões](https://developer.apple.com/design/human-interface-guidelines/buttons), os segmentos podem conter texto ou imagens. Os segmentos também podem ter rótulos de texto abaixo deles (ou abaixo do controle como um todo).

Um controle segmentado oferece uma única escolha entre um conjunto de opções ou, no macOS, uma única escolha ou várias escolhas. Por exemplo, no Keynote para macOS, as pessoas podem selecionar apenas um segmento no controle de opções de alinhamento para alinhar o texto selecionado. Em contraste, as pessoas podem escolher vários segmentos no controle de atributos de fonte para combinar estilos como negrito, itálico e sublinhado. A barra de ferramentas de uma janela do Keynote também usa um controle segmentado para permitir mostrar e ocultar vários painéis de edição dentro da área principal da janela.

![Uma captura de tela parcial de um controle segmentado que consiste em quatro opções de alinhamento de texto. A opção de alinhamento ao centro está selecionada.](../../../images/segmented-controls/segmented-control-one-choice@2x.png) ![Uma captura de tela parcial de um controle segmentado que consiste em quatro opções de alinhamento de texto. A opção de alinhamento ao centro está selecionada. (escuro)](../../../images/segmented-controls/segmented-control-one-choice~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/segmented-control-one-choice@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/segmented-control-one-choice~dark@2x.png)*

![Uma captura de tela parcial de um controle segmentado que consiste em quatro tipos de fonte. Três das quatro opções estão selecionadas.](../../../images/segmented-controls/segmented-control-multiple-choices@2x.png) ![Uma captura de tela parcial de um controle segmentado que consiste em quatro tipos de fonte. Três das quatro opções estão selecionadas. (escuro)](../../../images/segmented-controls/segmented-control-multiple-choices~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/segmented-control-multiple-choices@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/segmented-control-multiple-choices~dark@2x.png)*

Além de representar o estado de uma seleção única ou múltipla, um controle segmentado pode funcionar como um conjunto de botões que executam ações sem mostrar um estado de seleção. Por exemplo, os botões Responder, Responder a Todos e Encaminhar no Mail para macOS. Para orientações para desenvolvedores, consulte [isMomentary](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/ismomentary) e [NSSegmentedControl.SwitchTracking.momentary](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/switchtracking/momentary).

## Boas práticas

**Use um controle segmentado para oferecer opções estreitamente relacionadas que afetam um objeto, estado ou view.** Por exemplo, um controle segmentado em um inspetor poderia permitir escolher um ou mais atributos a aplicar a uma seleção, ou um controle segmentado em uma barra de ferramentas poderia oferecer um conjunto de ações a executar na view atual.

![Uma captura de tela da metade superior da tela Atividade no app Saúde do iOS, mostrando gráficos de atividade de Movimento e Exercício. O controle segmentado acima dos gráficos tem D selecionado, indicando que os gráficos mostram um dia de atividade.](../../../images/segmented-controls/segmented-controls-activity-charts@2x.png) ![Uma captura de tela da metade superior da tela Atividade no app Saúde do iOS, mostrando gráficos de atividade de Movimento e Exercício. O controle segmentado acima dos gráficos tem D selecionado, indicando que os gráficos mostram um dia de atividade. (escuro)](../../../images/segmented-controls/segmented-controls-activity-charts~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/segmented-controls-activity-charts@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/segmented-controls-activity-charts~dark@2x.png)*

**Considere um controle segmentado quando for importante agrupar funções ou mostrar claramente o estado de seleção delas.** Ao contrário de outros estilos de botão, os controles segmentados preservam seu agrupamento independentemente do tamanho da view ou de onde aparecem. Esse agrupamento também pode ajudar as pessoas a entender rapidamente quais controles estão selecionados no momento.

**Mantenha consistentes os tipos de controle dentro de um mesmo controle segmentado.** Não atribua ações a segmentos em um controle que, de resto, representa estado de seleção, e não mostre um estado de seleção para segmentos em um controle que, de resto, executa ações.

**Limite o número de segmentos em um controle.** Segmentos demais podem ser difíceis de interpretar e demorados de navegar. Procure ter no máximo cerca de cinco a sete segmentos em uma interface larga e no máximo cerca de cinco segmentos no iPhone.

**Em geral, mantenha consistente o tamanho dos segmentos.** Quando todos os segmentos têm a mesma largura, um controle segmentado parece equilibrado. Na medida do possível, é melhor manter consistentes também as larguras de ícones e títulos.

## Conteúdo

**Prefira usar texto ou imagens — não uma mistura dos dois — em um mesmo controle segmentado.** Embora segmentos individuais possam conter rótulos de texto ou imagens, misturar os dois em um único controle pode levar a uma interface desconexa e confusa.

**Na medida do possível, use conteúdo de tamanho semelhante em cada segmento.** Como todos os segmentos normalmente têm a mesma largura, não fica bom se o conteúdo preenche alguns segmentos e outros não.

**Use substantivos ou locuções nominais nos rótulos dos segmentos.** Escreva um texto que descreva cada segmento e use [capitalização em estilo de título](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64). Um controle segmentado que exibe rótulos de texto não precisa de texto introdutório.

## Considerações por plataforma

*Não compatível com watchOS.*

### iOS, iPadOS

**Considere um controle segmentado para alternar entre subviews estreitamente relacionadas.** Um controle segmentado pode ser útil como forma de alternar rapidamente entre subviews relacionadas. Por exemplo, o controle segmentado na sheet Novo Evento do Calendário alterna entre as subviews para criar um novo evento e um novo lembrete. Para alternar entre seções completamente separadas de um app, use uma [barra de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars).

![Uma captura de tela da metade superior do app Calendário do iOS, mostrando a sheet Novo Evento. Um controle segmentado oferece a capacidade de alternar entre adicionar um novo evento e um novo lembrete.](../../../images/segmented-controls/segmented-controls-calendar-new-event@2x.png) ![Uma captura de tela da metade superior do app Calendário do iOS, mostrando a sheet Novo Evento. Um controle segmentado oferece a capacidade de alternar entre adicionar um novo evento e um novo lembrete. (escuro)](../../../images/segmented-controls/segmented-controls-calendar-new-event~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/segmented-controls-calendar-new-event@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/segmented-controls-calendar-new-event~dark@2x.png)*

### macOS

**Considere usar texto introdutório para esclarecer a finalidade de um controle segmentado.** Quando o controle usa símbolos ou ícones de interface, você também pode adicionar um rótulo abaixo de cada segmento para esclarecer seu significado. Se o seu app inclui dicas de ferramenta, forneça uma para cada segmento de um controle segmentado.

**Use uma view de abas na área principal da janela — em vez de um controle segmentado — para alternar entre views.** Uma [view de abas](https://developer.apple.com/design/human-interface-guidelines/tab-views) oferece suporte à alternância eficiente entre views e tem aparência semelhante à de uma [caixa](https://developer.apple.com/design/human-interface-guidelines/boxes) combinada com um controle segmentado. Considere usar um controle segmentado para ajudar as pessoas a alternar entre views em uma barra de ferramentas ou em um painel de inspetor.

![Uma captura de tela do app Calendário do macOS. A área principal da janela mostra uma view de abas que contém quatro abas: Dia, Semana, Mês e Ano. A barra lateral mostra um controle segmentado que contém dois segmentos: Novos e Respondidos.](../../../images/segmented-controls/macos-calendar-tab-view-segmented-control-comparison@2x.png) ![Uma captura de tela do app Calendário do macOS. A área principal da janela mostra uma view de abas que contém quatro abas: Dia, Semana, Mês e Ano. A barra lateral mostra um controle segmentado que contém dois segmentos: Novos e Respondidos. (escuro)](../../../images/segmented-controls/macos-calendar-tab-view-segmented-control-comparison~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/macos-calendar-tab-view-segmented-control-comparison@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/macos-calendar-tab-view-segmented-control-comparison~dark@2x.png)*

**Considere oferecer suporte ao spring loading.** Em um Mac equipado com um Magic Trackpad, o spring loading permite às pessoas ativar um segmento arrastando itens selecionados sobre ele e fazendo um clique forçado sem soltar os itens selecionados. As pessoas também podem continuar arrastando os itens depois que um segmento é ativado.

### tvOS

**Considere usar uma split view em vez de um controle segmentado em telas que realizam filtragem de conteúdo.** As pessoas geralmente acham fácil navegar para frente e para trás entre o conteúdo e as opções de filtragem usando uma split view. Dependendo de seu posicionamento, um controle segmentado pode não ser tão fácil de acessar.

**Evite colocar outros elementos focalizáveis perto dos controles segmentados.** Os segmentos são selecionados quando o foco se move para eles, não quando as pessoas clicam neles. Considere cuidadosamente onde posicionar um controle segmentado em relação a outros elementos da interface. Se outros elementos focalizáveis estiverem muito próximos, as pessoas podem acabar focando neles acidentalmente ao tentar alternar entre segmentos.

### visionOS

Quando as pessoas olham para um controle segmentado que usa ícones, o sistema exibe uma dica de ferramenta que contém o texto descritivo que você fornecer.

## Recursos

#### Relacionados

[Split views](https://developer.apple.com/design/human-interface-guidelines/split-views)

#### Documentação para desenvolvedores

[segmented](https://developer.apple.com/documentation/swiftui/pickerstyle/segmented) — SwiftUI

[UISegmentedControl](https://developer.apple.com/documentation/uikit/uisegmentedcontrol) — UIKit

[NSSegmentedControl](https://developer.apple.com/documentation/appkit/nssegmentedcontrol) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| June 21, 2023 | Atualizado para incluir orientações para o visionOS. |
