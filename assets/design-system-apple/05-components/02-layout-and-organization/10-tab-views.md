# Visualizações em abas (Tab views)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/tab-views
>
> Plataformas: macos,watchos

*Uma visualização em abas apresenta vários painéis de conteúdo mutuamente exclusivos na mesma área, entre os quais as pessoas podem alternar usando um controle com abas.*

![Uma representação estilizada de uma visualização com três abas rotuladas, sendo a primeira delas selecionada. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores.](../../../images/tab-views/components-tab-view-intro@2x.png) ![Uma representação estilizada de uma visualização com três abas rotuladas, sendo a primeira delas selecionada. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores. (escuro)](../../../images/tab-views/components-tab-view-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-tab-view-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-tab-view-intro~dark@2x.png)*

## Boas práticas

**Use uma visualização em abas para apresentar áreas de conteúdo intimamente relacionadas.** A aparência de uma visualização em abas fornece uma forte indicação visual de contenção. As pessoas esperam que cada aba exiba conteúdo que seja, de alguma forma, semelhante ou relacionado ao conteúdo das outras abas.

**Garanta que os controles dentro de um painel afetem o conteúdo somente do mesmo painel.** Os painéis são mutuamente exclusivos, portanto certifique-se de que sejam totalmente autossuficientes.

**Forneça um rótulo para cada aba que descreva o conteúdo de seu painel.** Um bom rótulo ajuda as pessoas a prever o conteúdo de um painel antes de clicar ou tocar em sua aba. Em geral, use substantivos ou locuções nominais curtas para os rótulos das abas. Um verbo ou uma locução verbal curta pode fazer sentido em alguns contextos. Use capitalização no estilo de título para os rótulos das abas.

**Evite usar um botão pop-up para alternar entre abas.** Um controle com abas é eficiente porque exige um único clique ou toque para fazer uma seleção, enquanto um botão pop-up exige dois. Um controle com abas também apresenta todas as opções na tela ao mesmo tempo, enquanto as pessoas precisam clicar em um botão pop-up para ver suas opções. Observe que um botão pop-up pode ser uma alternativa razoável nos casos em que há painéis de conteúdo demais para exibir de forma razoável com abas.

**Evite oferecer mais de seis abas em uma visualização em abas.** Ter mais de seis abas pode sobrecarregar e criar problemas de layout. Se precisar apresentar seis ou mais abas, considere outra maneira de implementar a interface. Por exemplo, você pode apresentar cada aba como uma opção de visualização em um menu de botão pop-up.

Para obter orientações para desenvolvedores, consulte [NSTabView](https://developer.apple.com/documentation/appkit/nstabview).

## Anatomia

O controle com abas aparece na borda superior da área de conteúdo. Você pode optar por ocultar o controle, o que é apropriado para um app que alterna entre painéis de forma programática.

![Uma ilustração de uma janela em que um controle com abas de três abas está centralizado na borda superior da visualização de conteúdo.](../../../images/tab-views/tab-views-top@2x.png) ![Uma ilustração de uma janela em que um controle com abas de três abas está centralizado na borda superior da visualização de conteúdo. (escuro)](../../../images/tab-views/tab-views-top~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-views-top@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-views-top~dark@2x.png)*

Quando você oculta o controle com abas, a área de conteúdo pode ser sem borda, com moldura em relevo ou com uma borda de linha. Uma visualização sem borda pode ser sólida ou transparente.

**Em geral, recue uma visualização em abas deixando uma margem da área do corpo da janela em todos os lados da visualização em abas.** Esse layout tem aparência limpa e deixa espaço para controles adicionais que não estão diretamente relacionados ao conteúdo da visualização em abas. Você pode estender uma visualização em abas até as bordas da janela, mas esse layout é incomum.

## Considerações por plataforma

*Não compatível com iOS, iPadOS, tvOS nem visionOS.*

### iOS, iPadOS

Para uma funcionalidade semelhante, considere usar um [controle segmentado](https://developer.apple.com/design/human-interface-guidelines/segmented-controls).

### watchOS

O watchOS exibe visualizações em abas usando [controles de página](https://developer.apple.com/design/human-interface-guidelines/components/presentation/page-controls). Para obter orientações para desenvolvedores, consulte [TabView](https://developer.apple.com/documentation/swiftui/tabview).

![Uma ilustração que mostra o controle de página ao lado da Digital Crown no Apple Watch. O ponto atual está ampliado, indicando que as pessoas podem rolar pelo conteúdo atual, bem como alternar entre páginas.](../../../images/tab-views/tab-view-watch-vertical@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-view-watch-vertical@2x.png)*

## Recursos

#### Relacionados

[Barras de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars)

[Controles segmentados](https://developer.apple.com/design/human-interface-guidelines/segmented-controls)

#### Documentação para desenvolvedores

[TabView](https://developer.apple.com/documentation/swiftui/tabview) — SwiftUI

[NSTabView](https://developer.apple.com/documentation/appkit/nstabview) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 5 de junho de 2023 | Adicionadas orientações para o uso de visualizações em abas no watchOS. |
