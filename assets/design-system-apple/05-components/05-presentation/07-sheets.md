# Folhas (Sheets)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/sheets
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Uma folha ajuda as pessoas a executar uma tarefa delimitada que está intimamente relacionada ao contexto atual delas.*

![Uma representação estilizada de uma folha se estendendo para baixo a partir do topo de uma janela. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores.](../../../images/sheets/components-sheet-intro@2x.png) ![Uma representação estilizada de uma folha se estendendo para baixo a partir do topo de uma janela. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/sheets/components-sheet-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-sheet-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-sheet-intro~dark@2x.png)*

Uma folha é útil para solicitar informações específicas das pessoas ou apresentar uma tarefa simples que elas podem concluir antes de voltar à visualização pai. Por exemplo, uma folha pode permitir que as pessoas forneçam informações necessárias para concluir uma ação, como anexar um arquivo ou escolher um local para salvá-lo.

## Anatomia

No macOS, tvOS, visionOS e watchOS, uma folha é sempre *modal*. Uma folha modal apresenta uma experiência direcionada que impede as pessoas de interagir com a visualização pai até que dispensem a folha (para saber mais sobre apresentação modal, consulte [Modalidade](https://developer.apple.com/design/human-interface-guidelines/modality)).

No iOS e no iPadOS, uma folha pode ser modal ou *não modal*. Quando uma folha não modal está na tela, as pessoas usam as funcionalidades dela para afetar a visualização pai sem dispensar a folha. Por exemplo, o Notas no iPhone e no iPad usa uma folha não modal para permitir que as pessoas formatem várias seleções de texto enquanto editam uma nota.

![Uma captura de tela de uma nota em andamento no iPhone. Várias palavras estão selecionadas e destacadas. Na metade inferior da tela, a folha de formatação mostra que as palavras selecionadas usam a fonte de corpo regular.](../../../images/sheets/sheets-nonmodal-notes-text-regular@2x.png) ![Uma captura de tela de uma nota em andamento no iPhone. Várias palavras estão selecionadas e destacadas. Na metade inferior da tela, a folha de formatação mostra que as palavras selecionadas usam a fonte de corpo regular. (escuro)](../../../images/sheets/sheets-nonmodal-notes-text-regular~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-nonmodal-notes-text-regular@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-nonmodal-notes-text-regular~dark@2x.png)*

![Uma captura de tela da mesma nota em andamento no iPhone. Palavras diferentes estão selecionadas e destacadas. A folha de formatação mostra que as palavras selecionadas usam a fonte de corpo em itálico.](../../../images/sheets/sheets-nonmodal-notes-text-italic@2x.png) ![Uma captura de tela da mesma nota em andamento no iPhone. Palavras diferentes estão selecionadas e destacadas. A folha de formatação mostra que as palavras selecionadas usam a fonte de corpo em itálico. (escuro)](../../../images/sheets/sheets-nonmodal-notes-text-italic~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-nonmodal-notes-text-italic@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-nonmodal-notes-text-italic~dark@2x.png)*

Existem vários botões comuns que ajudam as pessoas a navegar pelas folhas e a dispensá-las.

- O botão **Cancelar** (ou Fechar) dispensa uma folha sem salvar nenhuma alteração. Esse tipo de botão é comum na maioria das folhas.
- O botão **OK** (Done) dispensa uma folha após a conclusão de uma tarefa ou o salvamento explícito de alterações.
- O botão **Voltar** permite que as pessoas naveguem até uma etapa anterior em um fluxo de várias etapas ou até uma visualização pai em uma hierarquia. Ele não se destina a dispensar uma folha.

A posição desses botões varia entre as plataformas; consulte [Considerações por plataforma](https://developer.apple.com/design/human-interface-guidelines/sheets#Platform-considerations).

## Boas práticas

**Para fluxos de usuário complexos ou prolongados, considere alternativas às folhas.** Por exemplo, o iOS e o iPadOS oferecem um estilo de visualização modal em tela inteira que pode funcionar bem para exibir conteúdo como vídeos, fotos ou visualizações da câmera, ou para ajudar as pessoas a executar tarefas de várias etapas, como a edição de documentos ou fotos. (Para orientações para desenvolvedores, consulte [UIModalPresentationStyle.fullScreen](https://developer.apple.com/documentation/uikit/uimodalpresentationstyle/fullscreen).) Em uma experiência para macOS, talvez você prefira abrir uma nova janela ou deixar as pessoas entrarem no modo de tela inteira em vez de usar uma folha. Por exemplo, uma tarefa independente, como editar um documento, tende a funcionar bem em uma janela separada, enquanto [entrar em tela inteira](https://developer.apple.com/design/human-interface-guidelines/going-full-screen) pode ajudar as pessoas a visualizar mídia. No visionOS, você pode dar às pessoas uma forma de fazer o seu app passar para um Full Space, onde elas podem mergulhar em um conteúdo ou em uma tarefa; para orientações, consulte [Experiências imersivas](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences).

**Exiba apenas uma folha por vez a partir da interface principal.** Quando as pessoas fecham uma folha, esperam voltar à visualização ou janela pai. Se fechar uma folha levar as pessoas a outra folha, elas podem perder a noção de onde estão no seu app. Se algo que as pessoas fazem dentro de uma folha resultar no aparecimento de outra folha, feche a primeira folha antes de exibir a nova. Se necessário, você pode exibir a primeira folha novamente depois que as pessoas dispensarem a segunda.

**Use uma visualização não modal quando quiser apresentar itens complementares que afetam a tarefa principal na visualização pai.** Para dar às pessoas acesso às informações e ações de que precisam enquanto continuam a interagir com a janela principal, considere usar uma [visualização dividida](https://developer.apple.com/design/human-interface-guidelines/split-views) no visionOS ou um [painel](https://developer.apple.com/design/human-interface-guidelines/panels) no macOS; no iOS e no iPadOS, você pode usar uma folha não modal para esse fluxo de trabalho. Para orientações, consulte [iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/sheets#iOS-iPadOS).

**Ofereça uma alternativa ao botão OK.** Se você oferecer um botão OK, sempre o combine com um botão Cancelar, para dar às pessoas uma forma clara de dispensar a folha sem confirmar nem salvar as alterações, ou com um botão Voltar, para passar a uma etapa anterior da folha. Depender apenas do botão OK dá a entender que concluir a tarefa é a única forma de sair da folha, o que pode parecer restritivo ou enganoso.

![Uma ilustração da metade superior de uma folha no iPhone. Um botão OK aparece sozinho no canto superior direito.](../../../images/sheets/sheets-buttons-placement-done-incorrect@2x.png) ![Uma ilustração da metade superior de uma folha no iPhone. Um botão OK aparece sozinho no canto superior direito. (escuro)](../../../images/sheets/sheets-buttons-placement-done-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-done-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-done-incorrect~dark@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../../images/sheets/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração da metade superior de uma folha no iPhone. Um botão Cancelar aparece no canto superior esquerdo da visualização e um botão OK aparece no canto superior direito.](../../../images/sheets/sheets-buttons-placement-cancel-done@2x.png) ![Uma ilustração da metade superior de uma folha no iPhone. Um botão Cancelar aparece no canto superior esquerdo da visualização e um botão OK aparece no canto superior direito. (escuro)](../../../images/sheets/sheets-buttons-placement-cancel-done~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-cancel-done@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-cancel-done~dark@2x.png)*

![Uma marca de seleção em um círculo para indicar uso correto.](../../../images/sheets/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

Evite mostrar os três botões — Cancelar, OK e Voltar — juntos.

![Uma ilustração da metade superior de uma folha no iPhone. Um botão Voltar aparece no canto superior esquerdo da visualização e os botões Cancelar e OK aparecem juntos no canto superior direito.](../../../images/sheets/sheets-buttons-placement-back-cancel-done-incorrect@2x.png) ![Uma ilustração da metade superior de uma folha no iPhone. Um botão Voltar aparece no canto superior esquerdo da visualização e os botões Cancelar e OK aparecem juntos no canto superior direito. (escuro)](../../../images/sheets/sheets-buttons-placement-back-cancel-done-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-back-cancel-done-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-back-cancel-done-incorrect~dark@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../../images/sheets/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

## Considerações por plataforma

*Sem considerações adicionais para tvOS.*

### iOS, iPadOS

No iOS e no iPadOS, em folhas com uma única visualização, o botão Cancelar fica na extremidade inicial da barra de ferramentas superior. Quando presente, o botão OK fica na extremidade final.

![Uma ilustração da metade superior de uma folha no iPhone. Um botão Cancelar aparece no canto superior esquerdo da visualização e um botão OK aparece no canto superior direito.](../../../images/sheets/sheets-buttons-placement-cancel-done@2x.png) ![Uma ilustração da metade superior de uma folha no iPhone. Um botão Cancelar aparece no canto superior esquerdo da visualização e um botão OK aparece no canto superior direito. (escuro)](../../../images/sheets/sheets-buttons-placement-cancel-done~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-cancel-done@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-cancel-done~dark@2x.png)*

Em folhas com um fluxo de várias etapas, a posição dos botões pode variar entre as etapas.

**Primeira etapa**

![Uma ilustração da metade superior de uma folha no iPhone. Um botão Cancelar aparece no canto superior esquerdo da visualização e um botão OK inativo aparece no canto superior direito.](../../../images/sheets/sheets-buttons-placement-navigation-first-page@2x.png) ![Uma ilustração da metade superior de uma folha no iPhone. Um botão Cancelar aparece no canto superior esquerdo da visualização e um botão OK inativo aparece no canto superior direito. (escuro)](../../../images/sheets/sheets-buttons-placement-navigation-first-page~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-navigation-first-page@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-navigation-first-page~dark@2x.png)*

**Etapa intermediária**

![Uma ilustração da metade superior de uma folha no iPhone. Um botão Voltar aparece no canto superior esquerdo da visualização e um botão OK inativo aparece no canto superior direito.](../../../images/sheets/sheets-buttons-placement-navigation-subsequent-page@2x.png) ![Uma ilustração da metade superior de uma folha no iPhone. Um botão Voltar aparece no canto superior esquerdo da visualização e um botão OK inativo aparece no canto superior direito. (escuro)](../../../images/sheets/sheets-buttons-placement-navigation-subsequent-page~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-navigation-subsequent-page@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-navigation-subsequent-page~dark@2x.png)*

**Etapa final**

![Uma ilustração da metade superior de uma folha no iPhone. Um botão Voltar aparece no canto superior esquerdo da visualização e um botão OK aparece no canto superior direito.](../../../images/sheets/sheets-buttons-placement-navigation-final-page@2x.png) ![Uma ilustração da metade superior de uma folha no iPhone. Um botão Voltar aparece no canto superior esquerdo da visualização e um botão OK aparece no canto superior direito. (escuro)](../../../images/sheets/sheets-buttons-placement-navigation-final-page~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-navigation-final-page@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-buttons-placement-navigation-final-page~dark@2x.png)*

Uma folha redimensionável se expande quando as pessoas rolam seu conteúdo ou arrastam o *grabber*, que é um pequeno indicador horizontal que pode aparecer na borda superior de uma folha. As folhas são redimensionadas de acordo com seus *detents*, que são alturas específicas nas quais uma folha naturalmente repousa. Projetados para o iPhone, os detents especificam alturas particulares nas quais uma folha naturalmente repousa. O sistema define dois detents: *large* é a altura de uma folha totalmente expandida e *medium* é cerca de metade da altura totalmente expandida. As folhas podem ter um ou mais valores de detent personalizados.

![Uma ilustração mostrando uma tela de iPhone na orientação vertical contendo um retângulo arredondado sólido que ocupa quase toda a tela, representando uma folha em tela inteira. Um botão de fechar arredondado aparece no canto superior esquerdo da folha.](../../../images/sheets/sheets-large-detent@2x.png) ![Uma ilustração mostrando uma tela de iPhone na orientação vertical contendo um retângulo arredondado sólido que ocupa quase toda a tela, representando uma folha em tela inteira. Um botão de fechar arredondado aparece no canto superior esquerdo da folha. (escuro)](../../../images/sheets/sheets-large-detent~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-large-detent@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-large-detent~dark@2x.png)*

![Uma ilustração mostrando uma tela de iPhone na orientação vertical contendo um retângulo arredondado sólido que ocupa metade da tela, representando uma folha em meia tela. Um botão de fechar arredondado aparece no canto superior esquerdo da folha.](../../../images/sheets/sheets-medium-detent@2x.png) ![Uma ilustração mostrando uma tela de iPhone na orientação vertical contendo um retângulo arredondado sólido que ocupa metade da tela, representando uma folha em meia tela. Um botão de fechar arredondado aparece no canto superior esquerdo da folha. (escuro)](../../../images/sheets/sheets-medium-detent~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-medium-detent@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-medium-detent~dark@2x.png)*

As folhas oferecem suporte automático ao detent large. Adicionar o detent medium permite que a folha repouse nas duas alturas, enquanto especificar apenas o medium impede que a folha se expanda até a altura total. Para orientações para desenvolvedores, consulte [detents](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/detents).

**Em um app para iPhone, considere oferecer suporte ao detent medium para permitir a divulgação progressiva do conteúdo da folha.** Por exemplo, uma folha de compartilhamento exibe os itens mais relevantes dentro do detent medium, onde ficam visíveis sem redimensionamento. Para ver mais itens, as pessoas podem rolar ou expandir a folha. Em contraste, você talvez não queira oferecer suporte ao detent medium se o conteúdo de uma folha for mais útil quando exibido em altura total. Por exemplo, as folhas de composição do Mensagens e do Mail são exibidas apenas em altura total para dar às pessoas espaço suficiente para criar conteúdo.

**Inclua um grabber em uma folha redimensionável.** Um grabber mostra às pessoas que elas podem arrastar a folha para redimensioná-la; elas também podem tocar nele para alternar entre os detents. Além de oferecer um indicador visual de que a folha é redimensionável, um grabber também funciona com o VoiceOver, para que as pessoas possam redimensionar a folha sem ver a tela. Para orientações para desenvolvedores, consulte [prefersGrabberVisible](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/prefersgrabbervisible).

**Ofereça suporte ao gesto de deslizar para dispensar uma folha.** As pessoas esperam deslizar verticalmente para dispensar uma folha em vez de tocar em um botão de dispensar. Se houver alterações não salvas na folha quando as pessoas começarem a deslizar para dispensá-la, use uma folha de ações para que elas confirmem a ação.

**Prefira usar os estilos de apresentação de folha de página ou de formulário em um app para iPadOS.** Cada estilo usa um tamanho padrão para a folha, centralizando o conteúdo sobre uma visualização de fundo esmaecida e proporcionando uma experiência consistente. Para orientações para desenvolvedores, consulte [UIModalPresentationStyle](https://developer.apple.com/documentation/uikit/uimodalpresentationstyle).

### macOS

No macOS, uma folha é uma visualização em forma de cartão, com cantos arredondados, que flutua sobre a janela pai. A janela pai é esmaecida enquanto a folha está na tela, sinalizando que as pessoas não podem interagir com ela até dispensarem a folha. No entanto, as pessoas esperam poder interagir com outras janelas do app antes de dispensar uma folha.

![Uma captura de tela do app Notas, com a folha Novidades no Notas centralizada sobre um documento do Notas esmaecido ao fundo.](../../../images/sheets/sheets-macos-notes@2x.png) ![Uma captura de tela do app Notas, com a folha Novidades no Notas centralizada sobre um documento do Notas esmaecido ao fundo. (escuro)](../../../images/sheets/sheets-macos-notes~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-macos-notes@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-macos-notes~dark@2x.png)*

**Apresente uma folha em um tamanho padrão razoável.** As pessoas geralmente não esperam redimensionar folhas, então é importante usar um tamanho apropriado para o conteúdo que você exibe. Em alguns casos, porém, as pessoas gostam de uma folha redimensionável — como quando precisam expandir o conteúdo para ter uma visão mais clara —, então é uma boa ideia oferecer suporte ao redimensionamento.

**Deixe as pessoas interagirem com outras janelas do app sem precisar dispensar primeiro uma folha.** Quando uma folha é aberta, você traz a janela pai para a frente — se a janela pai for uma janela de documento, você também traz para a frente seus painéis sem modo relacionados ao documento. Quando as pessoas quiserem interagir com outras janelas do seu app, garanta que possam trazê-las para a frente mesmo que ainda não tenham dispensado a folha.

**Use um painel em vez de uma folha se as pessoas precisarem fornecer entradas e observar resultados repetidamente.** Um painel de localizar e substituir, por exemplo, pode permitir que as pessoas iniciem as substituições individualmente, para que possam observar o resultado de cada busca e verificar se está correto. Para orientações, consulte [Painéis](https://developer.apple.com/design/human-interface-guidelines/panels).

### visionOS

Enquanto uma folha está visível em um app para visionOS, ela flutua na frente da janela pai, esmaecendo-a, e se torna o alvo das interações das pessoas com o app.

![Uma gravação mostrando uma folha sendo aberta acima de uma janela em branco no visionOS.](../../../images/sheets/visionos-modal-sheet@2x.png)

*Vídeo: Uma gravação mostrando uma folha sendo aberta acima de uma janela em branco no visionOS.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-modal-sheet.mp4)

**Evite exibir uma folha que surge da borda inferior de uma janela.** Para ajudar as pessoas a ver a folha, prefira centralizá-la no [campo de visão](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Field-of-view) delas.

**Apresente uma folha em um tamanho padrão que ajude as pessoas a manter o contexto.** Evite exibir uma folha que cubra a maior parte ou a totalidade da janela, mas considere deixar as pessoas redimensionarem a folha, se quiserem.

### watchOS

No watchOS, uma folha é uma visualização em tela inteira que desliza sobre o conteúdo atual do seu app. A folha é semitransparente para ajudar a manter o contexto atual, mas o sistema aplica um material ao fundo que desfoca e dessatura o conteúdo coberto.

![Uma captura de tela de uma folha com um botão de Ação principal e um botão de cancelar padrão no Apple Watch.](../../../images/sheets/sheets-watch-overlay@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sheets-watch-overlay@2x.png)*

**Use uma folha apenas quando a sua tarefa modal exigir um título personalizado ou uma apresentação de conteúdo personalizada.** Se você precisa dar às pessoas informações importantes ou apresentar um conjunto de opções, considere usar um [alerta](https://developer.apple.com/design/human-interface-guidelines/alerts) ou uma [folha de ações](https://developer.apple.com/design/human-interface-guidelines/action-sheets).

**Mantenha as interações com folhas breves e ocasionais.** Use uma folha apenas como uma interrupção temporária do fluxo de trabalho atual e apenas para facilitar uma tarefa importante. Evite usar uma folha para ajudar as pessoas a navegar pelo conteúdo do seu app.

**Se você alterar o rótulo padrão, prefira usar SF Symbols para representar a ação.** Evite usar um rótulo que possa induzir as pessoas a pensar que a folha faz parte de uma interface de navegação hierárquica. Além disso, se o texto no canto superior inicial parecer o título de uma página ou de um app, as pessoas não saberão como dispensar a folha. Para orientações, consulte [Ícones padrão](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons).

![Uma captura de tela que mostra uma barra de ferramentas superior com um botão Voltar personalizado na parte superior da tela no Apple Watch.](../../../images/sheets/modal-sheet-watchos-do-not-1@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/modal-sheet-watchos-do-not-1@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../../images/sheets/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma captura de tela que mostra uma barra de ferramentas superior com um botão com as palavras Título da página na parte superior da tela no Apple Watch.](../../../images/sheets/modal-sheet-watchos-do-not-2@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/modal-sheet-watchos-do-not-2@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../../images/sheets/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma captura de tela que mostra uma barra de ferramentas superior com o botão Cancelar padrão na parte superior da tela no Apple Watch.](../../../images/sheets/modal-sheet-watchos-do@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/modal-sheet-watchos-do@2x.png)*

![Uma marca de seleção em um círculo para indicar uso correto.](../../../images/sheets/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

## Recursos

#### Relacionados

[Modalidade](https://developer.apple.com/design/human-interface-guidelines/modality)

[Folhas de ações](https://developer.apple.com/design/human-interface-guidelines/action-sheets)

[Popovers](https://developer.apple.com/design/human-interface-guidelines/popovers)

[Painéis](https://developer.apple.com/design/human-interface-guidelines/panels)

#### Documentação para desenvolvedores

[sheet(item:onDismiss:content:)](https://developer.apple.com/documentation/swiftui/view/sheet(item:ondismiss:content:)) — SwiftUI

[UISheetPresentationController](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller) — UIKit

[presentAsSheet(_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet(_:)) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 24 de março de 2026 | Orientações atualizadas para a posição dos botões. |
| 29 de março de 2024 | Adicionada orientação para usar os estilos de folha de formulário ou de página em apps para iPadOS. |
| 5 de dezembro de 2023 | Recomendado o uso de uma visualização dividida para oferecer itens complementares em um app para visionOS. |
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
| 5 de junho de 2023 | Orientações atualizadas para o uso de folhas no watchOS. |
