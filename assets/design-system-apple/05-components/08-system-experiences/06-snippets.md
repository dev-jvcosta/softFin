# Snippets

> Fonte: https://developer.apple.com/design/human-interface-guidelines/snippets
>
> Plataformas: ios,ipados,macos

*Quando alguém executa uma tarefa com a Siri ou um App Shortcut, um snippet mostra o resultado ou pede confirmação.*

![Uma representação estilizada de um snippet, mostrando uma data e hora propostas para um evento do Calendário junto com um botão Concluído. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/snippets/components-snippets-intro@2x.png) ![Uma representação estilizada de um snippet, mostrando uma data e hora propostas para um evento do Calendário junto com um botão Concluído. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/snippets/components-snippets-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-snippets-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-snippets-intro~dark@2x.png)*

Snippets são views compactas que aparecem em resposta a uma ação que alguém realiza usando a [Siri](https://developer.apple.com/design/human-interface-guidelines/siri), o Spotlight ou o app Atalhos.

Você pode apresentar um snippet relacionado a uma das ações do seu app incluindo-o em um [app intent](https://developer.apple.com/documentation/appintents) que você projeta para atender às necessidades específicas de uma tarefa. Por exemplo, você pode projetar um snippet para verificar a previsão do tempo ou atualizar o progresso em direção a uma meta diária.

Existem dois tipos de snippet: de confirmação e de resultado. Um snippet de *confirmação* permite que as pessoas confirmem ou cancelem uma ação e pode incluir opções que afetam o resultado. Em contraste, um snippet de *resultado* fornece informações — possivelmente como desfecho de uma confirmação — que não exigem nenhuma ação adicional. Um app intent que exibe um snippet sempre mostra um resultado, enquanto a etapa de confirmação é opcional.

![Uma captura de tela parcial mostrando um snippet de confirmação no iPhone. O snippet inclui um resumo do pedido na parte superior, com um botão Cancelar e um botão Pedir na parte inferior para a pessoa cancelar ou confirmar o pedido.](../../../images/snippets/snippets-confirmation-type@2x.png) ![Uma captura de tela parcial mostrando um snippet de confirmação no iPhone. O snippet inclui um resumo do pedido na parte superior, com um botão Cancelar e um botão Pedir na parte inferior para a pessoa cancelar ou confirmar o pedido. (escuro)](../../../images/snippets/snippets-confirmation-type~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/snippets-confirmation-type@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/snippets-confirmation-type~dark@2x.png)*

![Uma captura de tela parcial mostrando um snippet de resultado no iPhone. O snippet inclui o status do pedido e a data de envio na parte superior, com um botão Concluído na parte inferior para a pessoa dispensar o snippet.](../../../images/snippets/snippets-result-type@2x.png) ![Uma captura de tela parcial mostrando um snippet de resultado no iPhone. O snippet inclui o status do pedido e a data de envio na parte superior, com um botão Concluído na parte inferior para a pessoa dispensar o snippet. (escuro)](../../../images/snippets/snippets-result-type~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/snippets-result-type@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/snippets-result-type~dark@2x.png)*

Para orientações a desenvolvedores, consulte [Displaying static and interactive snippets](https://developer.apple.com/documentation/appintents/displaying-static-and-interactive-snippets).

## Anatomia

Um snippet consiste nos seguintes elementos:

- **Diálogo.** O diálogo do app intent que a Siri fala para comunicar as informações do snippet. O sistema inclui o texto do diálogo por padrão e o posiciona acima da view personalizada.
- **View personalizada.** Uma view que comunica visualmente as informações do snippet. Uma view personalizada pode incluir um ou mais botões para modificar o conteúdo do snippet, obter mais informações ou realizar outra ação.
- **Botão(ões) fornecido(s) pelo sistema.** Um snippet de confirmação inclui dois botões fornecidos pelo sistema sob a view personalizada: um botão secundário Cancelar e um botão primário com rótulo personalizável. Um snippet de resultado inclui um único botão Concluído que dispensa a view.

![Uma ilustração da anatomia de um snippet. O diálogo aparece na parte superior do snippet. A view personalizada aparece no meio, com altura máxima de 400 pt. Dois botões fornecidos pelo sistema aparecem na parte inferior: o botão secundário à esquerda e o botão primário à direita.](../../../images/snippets/snippets-custom-view-layout@2x.png) ![Uma ilustração da anatomia de um snippet. O diálogo aparece na parte superior do snippet. A view personalizada aparece no meio, com altura máxima de 400 pt. Dois botões fornecidos pelo sistema aparecem na parte inferior: o botão secundário à esquerda e o botão primário à direita. (escuro)](../../../images/snippets/snippets-custom-view-layout~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/snippets-custom-view-layout@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/snippets-custom-view-layout~dark@2x.png)*

## Boas práticas

**Garanta a legibilidade.** Verifique se há contraste suficiente entre o conteúdo personalizado do snippet e o fundo fornecido pelo sistema nas aparências clara e escura, e mantenha margens consistentes para o conteúdo dentro da view. Isso esclarece o layout e ajuda as pessoas a interpretar o snippet de forma rápida e confiável.

**Mantenha o conteúdo conciso.** Snippets existem para facilitar interações leves e rápidas, por isso é importante manter seu conteúdo curto e facilmente legível. Para garantir que todo o conteúdo fique visível, crie views personalizadas com altura máxima de 400 pontos. Ao considerar a quantidade de texto a incluir, lembre-se de que as fontes são desenhadas em vários tamanhos com base no ajuste de tamanho de texto preferido da pessoa. Em um snippet de resultado, se precisar fornecer mais detalhes, use um deep link para o conteúdo no seu app em vez de incluí-lo na view personalizada.

**Escolha um rótulo descritivo para o botão primário de um snippet de confirmação.** Você pode escolher um rótulo adequado entre os que o [sistema fornece](https://developer.apple.com/documentation/appintents/confirmationactionname) ou fornecer um rótulo personalizado. Por exemplo, ao projetar um snippet para pedir café, rotular o botão primário como Pedir é mais claro do que rotulá-lo como OK ou Prosseguir. Se você não especificar um rótulo, o padrão do sistema é Continuar.

**Comunique visualmente o propósito de um snippet.** Não dependa de mostrar o texto do diálogo para transmitir o propósito de um snippet. Embora o diálogo falado do app intent seja essencial para interações quando alguém não está olhando para a tela, prefira omiti-lo da representação visual do snippet e use a view personalizada para transmitir suas informações.

![Uma ilustração de um snippet de resultado do Calendário que mostra detalhes de um evento futuro. O diálogo na parte superior repete as informações da view personalizada, de modo que o título, a data, a hora e os participantes do evento aparecem nos dois lugares.](../../../images/snippets/snippet-response-heavy-dialogue-incorrect@2x.png) ![Uma ilustração de um snippet de resultado do Calendário que mostra detalhes de um evento futuro. O diálogo na parte superior repete as informações da view personalizada, de modo que o título, a data, a hora e os participantes do evento aparecem nos dois lugares. (escuro)](../../../images/snippets/snippet-response-heavy-dialogue-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/snippet-response-heavy-dialogue-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/snippet-response-heavy-dialogue-incorrect~dark@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../../images/snippets/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de um snippet de resultado do Calendário que mostra detalhes de um evento futuro. O snippet omite o diálogo na parte superior e inclui o título, a data, a hora e os participantes do evento somente na view personalizada.](../../../images/snippets/snippet-response-light-dialogue-correct@2x.png) ![Uma ilustração de um snippet de resultado do Calendário que mostra detalhes de um evento futuro. O snippet omite o diálogo na parte superior e inclui o título, a data, a hora e os participantes do evento somente na view personalizada. (escuro)](../../../images/snippets/snippet-response-light-dialogue-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/snippet-response-light-dialogue-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/snippet-response-light-dialogue-correct~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar uso correto.](../../../images/snippets/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS ou macOS. Não compatível com tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Siri](https://developer.apple.com/design/human-interface-guidelines/siri)

[App Shortcuts](https://developer.apple.com/design/human-interface-guidelines/app-shortcuts)

[Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities)

#### Documentação para desenvolvedores

[App Intents](https://developer.apple.com/documentation/appintents)

#### Vídeos

- [Projete snippets interativos](https://developer.apple.com/videos/play/wwdc2025/281)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 8 de junho de 2026 | Nova página. |
