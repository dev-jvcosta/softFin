# Popovers

> Fonte: https://developer.apple.com/design/human-interface-guidelines/popovers
>
> Plataformas: ios,ipados,macos,visionos

*Um popover é uma visualização transitória que aparece acima de outro conteúdo quando as pessoas clicam ou tocam em um controle ou em uma área interativa.*

![Uma representação estilizada de uma visualização de popover. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/popovers/components-popover-intro@2x.png) ![Uma representação estilizada de uma visualização de popover. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/popovers/components-popover-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-popover-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-popover-intro~dark@2x.png)*

## Boas práticas

**Use um popover para expor uma pequena quantidade de informações ou funcionalidades.** Como um popover desaparece depois que as pessoas interagem com ele, limite a quantidade de funcionalidades no popover a algumas tarefas relacionadas. Por exemplo, um popover de evento do Calendário facilita para as pessoas alterar a data ou a hora de um evento ou movê-lo para outro calendário. O popover desaparece após a alteração, permitindo que as pessoas continuem revisando os eventos do calendário.

**Considere usar popovers quando quiser mais espaço para o conteúdo.** Visualizações como barras laterais e painéis ocupam muito espaço. Se você precisa do conteúdo apenas temporariamente, exibi-lo em um popover pode ajudar a simplificar sua interface.

**Posicione os popovers de forma adequada.** Certifique-se de que a seta de um popover aponte o mais diretamente possível para o elemento que o revelou. Idealmente, um popover não cobre o elemento que o revelou nem qualquer conteúdo essencial que as pessoas possam precisar ver enquanto o usam.

**Use um botão Fechar somente para confirmação e orientação.** Vale a pena incluir um botão Fechar, incluindo Cancelar ou Concluído, se ele trouxer clareza, como sair com ou sem salvar as alterações. Caso contrário, um popover geralmente é fechado quando as pessoas clicam ou tocam fora de seus limites ou selecionam um item no popover. Se for possível fazer várias seleções, certifique-se de que o popover permaneça aberto até que as pessoas o dispensem explicitamente ou cliquem ou toquem fora de seus limites.

**Sempre salve o trabalho ao fechar automaticamente um popover não modal.** As pessoas podem dispensar acidentalmente um popover não modal ao clicar ou tocar fora de seus limites. Descarte o trabalho das pessoas somente quando elas clicarem ou tocarem em um botão Cancelar explícito.

**Mostre um popover por vez.** Exibir vários popovers sobrecarrega a interface e causa confusão. Nunca mostre uma cascata ou hierarquia de popovers, na qual um surge a partir de outro. Se precisar mostrar um novo popover, feche primeiro o que está aberto.

**Não mostre outra visualização sobre um popover.** Certifique-se de que nada seja exibido sobre um popover, exceto um alerta.

**Quando possível, permita que as pessoas fechem um popover e abram outro com um único clique ou toque.** Evitar gestos extras é especialmente desejável quando vários botões diferentes da barra abrem, cada um, um popover.

**Evite fazer um popover grande demais.** Faça um popover apenas grande o suficiente para exibir seu conteúdo e apontar para o local de onde veio. Se necessário, o sistema pode ajustar o tamanho de um popover para garantir que ele se encaixe bem na interface.

**Ofereça uma transição suave ao alterar o tamanho de um popover.** Alguns popovers oferecem visualizações condensada e expandida das mesmas informações. Se você ajustar o tamanho de um popover, anime a mudança para evitar dar a impressão de que um novo popover substituiu o antigo.

**Evite usar a palavra *popover* na documentação de ajuda.** Em vez disso, refira-se a uma tarefa ou seleção específica. Por exemplo, em vez de “Selecione o botão Mostrar na parte inferior do popover”, você poderia escrever “Selecione o botão Mostrar”.

**Evite usar um popover para mostrar um aviso.** As pessoas podem não perceber um popover ou fechá-lo acidentalmente. Se precisar avisar as pessoas, use um [alerta](https://developer.apple.com/design/human-interface-guidelines/alerts).

## Considerações por plataforma

*Nenhuma consideração adicional para visionOS. Não é compatível com tvOS ou watchOS.*

### iOS, iPadOS

**Evite exibir popovers em visualizações compactas.** Faça seu app ou jogo ajustar dinamicamente o layout com base na classe de tamanho da área de conteúdo. Reserve os popovers para visualizações amplas; em visualizações compactas, aproveite todo o espaço de tela disponível apresentando as informações em uma visualização modal em tela cheia, como uma sheet. Para orientações relacionadas, consulte [Modalidade](https://developer.apple.com/design/human-interface-guidelines/modality).

### macOS

No macOS, você pode tornar um popover destacável, de modo que ele se torne um painel separado quando as pessoas o arrastarem. O painel permanece visível na tela enquanto as pessoas interagem com outro conteúdo.

**Popover anexado**

![Uma ilustração de um evento no Calendário com a versão anexada do popover do evento ao lado dele e apontando para ele.](../../../images/popovers/attached-popover@2x.png) ![Uma ilustração de um evento no Calendário com a versão anexada do popover do evento ao lado dele e apontando para ele. (escuro)](../../../images/popovers/attached-popover~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/attached-popover@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/attached-popover~dark@2x.png)*

**Popover destacado**

![Uma ilustração de um evento no Calendário com a versão destacada do popover do evento ao lado dele.](../../../images/popovers/detached-popover@2x.png) ![Uma ilustração de um evento no Calendário com a versão destacada do popover do evento ao lado dele. (escuro)](../../../images/popovers/detached-popover~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/detached-popover@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/detached-popover~dark@2x.png)*

**Considere permitir que as pessoas destaquem um popover.** As pessoas podem gostar de poder converter um popover em um painel se quiserem ver outras informações enquanto o popover permanece visível.

**Faça mudanças mínimas de aparência em um popover destacado.** Um painel com aparência semelhante à do popover original ajuda as pessoas a manter o contexto.

## Recursos

#### Relacionados

[Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)

[Menus de ações](https://developer.apple.com/design/human-interface-guidelines/action-sheets)

[Alertas](https://developer.apple.com/design/human-interface-guidelines/alerts)

[Modalidade](https://developer.apple.com/design/human-interface-guidelines/modality)

#### Documentação para desenvolvedores

[popover(isPresented:attachmentAnchor:arrowEdge:content:)](https://developer.apple.com/documentation/swiftui/view/popover(ispresented:attachmentanchor:arrowedge:content:)) — SwiftUI

[UIPopoverPresentationController](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller) — UIKit

[NSPopover](https://developer.apple.com/documentation/appkit/nspopover) — AppKit
