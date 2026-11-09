# Campos de tokens (Token fields)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/token-fields
>
> Plataformas: macos

*Um campo de tokens é um tipo de campo de texto que pode converter texto em *tokens*, fáceis de selecionar e manipular.*

![Uma representação estilizada de um campo de texto contendo o nome de uma pessoa formatado como um token. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores.](../../../images/token-fields/components-token-field-intro@2x.png) ![Uma representação estilizada de um campo de texto contendo o nome de uma pessoa formatado como um token. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores. (escuro)](../../../images/token-fields/components-token-field-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-token-field-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-token-field-intro~dark@2x.png)*

Por exemplo, o Mail usa campos de tokens nos campos de endereço da janela de redação. À medida que as pessoas inserem destinatários, o Mail converte o texto que representa o nome de cada destinatário em um token. As pessoas podem selecionar esses tokens de destinatário e arrastá-los para reordená-los ou movê-los para outro campo.

Você pode configurar um campo de tokens para apresentar às pessoas uma lista de sugestões à medida que elas inserem texto no campo. Por exemplo, o Mail sugere destinatários enquanto as pessoas digitam em um campo de endereço. Quando as pessoas selecionam um destinatário sugerido, o Mail o insere no campo como um token.

![Uma captura de tela parcial de uma janela de redação do Mail em que tokens representam alguns destinatários.](../../../images/token-fields/token-fields-suggestion@2x.png) ![Uma captura de tela parcial de uma janela de redação do Mail em que tokens representam alguns destinatários. (escuro)](../../../images/token-fields/token-fields-suggestion~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/token-fields-suggestion@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/token-fields-suggestion~dark@2x.png)*

Um token individual também pode incluir um menu contextual que oferece informações sobre o token ou opções de edição. Por exemplo, um token de destinatário no Mail inclui um menu contextual com comandos para editar o nome do destinatário, marcar o destinatário como VIP e ver o cartão de contato do destinatário, entre outros.

![Uma captura de tela parcial de uma janela de redação do Mail em que um token de destinatário revela um menu de comandos.](../../../images/token-fields/token-fields-contextual@2x.png) ![Uma captura de tela parcial de uma janela de redação do Mail em que um token de destinatário revela um menu de comandos. (escuro)](../../../images/token-fields/token-fields-contextual~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/token-fields-contextual@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/token-fields-contextual~dark@2x.png)*

Em algumas situações, os tokens também podem representar termos de pesquisa; para obter orientações, consulte [Campos de pesquisa](https://developer.apple.com/design/human-interface-guidelines/search-fields).

## Boas práticas

**Agregue valor com um menu de contexto.** As pessoas costumam se beneficiar de um [menu de contexto](https://developer.apple.com/design/human-interface-guidelines/context-menus) com opções adicionais ou informações sobre um token.

**Considere oferecer maneiras adicionais de converter texto em tokens.** Por padrão, o texto que as pessoas inserem se transforma em um token sempre que digitam uma vírgula. Você pode especificar atalhos adicionais, como pressionar Return, que também acionem essa ação.

**Considere personalizar o atraso que o sistema usa antes de mostrar os tokens sugeridos.** Por padrão, as sugestões aparecem imediatamente. No entanto, sugestões que aparecem rápido demais podem distrair as pessoas enquanto digitam. Se seu app sugere tokens, considere ajustar o atraso para um nível confortável.

## Considerações por plataforma

*Não compatível com iOS, iPadOS, tvOS, visionOS e watchOS.*

## Recursos

#### Relacionados

[Campos de texto](https://developer.apple.com/design/human-interface-guidelines/text-fields)

[Campos de pesquisa](https://developer.apple.com/design/human-interface-guidelines/search-fields)

[Menus de contexto](https://developer.apple.com/design/human-interface-guidelines/context-menus)

#### Documentação para desenvolvedores

[NSTokenField](https://developer.apple.com/documentation/appkit/nstokenfield) — AppKit
