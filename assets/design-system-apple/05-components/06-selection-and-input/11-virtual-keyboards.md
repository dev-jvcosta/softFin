# Teclados virtuais (Virtual keyboards)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards
>
> Plataformas: ios,ipados,tvos,visionos,watchos

*Em dispositivos sem teclado físico, o sistema oferece vários tipos de teclados virtuais que as pessoas podem usar para inserir dados.*

![Representação estilizada de um teclado numérico exibido sobre uma grade que sugere o canvas de uma ferramenta de design. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/virtual-keyboards/components-virtual-keyboard-intro@2x.png) ![Representação estilizada de um teclado numérico exibido sobre uma grade que sugere o canvas de uma ferramenta de design. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/virtual-keyboards/components-virtual-keyboard-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-virtual-keyboard-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-virtual-keyboard-intro~dark@2x.png)*

Um teclado virtual pode oferecer um conjunto específico de teclas otimizadas para a tarefa atual; por exemplo, um teclado que oferece suporte à digitação de endereços de e-mail pode incluir o caractere “@” e um ponto ou até “.com”. Um teclado virtual não oferece suporte a atalhos de teclado.

Quando fizer sentido no seu app, você pode substituir o teclado fornecido pelo sistema por uma visualização personalizada que ofereça suporte à entrada de dados específica do app. No iOS, iPadOS e tvOS, você também pode criar uma extensão de app que ofereça um teclado personalizado que as pessoas possam instalar e usar no lugar do teclado padrão.

## Boas práticas

**Escolha um teclado que corresponda ao tipo de conteúdo que as pessoas estão editando.** Por exemplo, você pode ajudar as pessoas a inserir dados numéricos fornecendo o teclado de números e pontuação. Quando você especifica um significado semântico para uma área de entrada de texto, o sistema pode fornecer automaticamente um teclado que corresponda ao tipo de entrada esperado, podendo usar essas informações para refinar as correções de teclado que oferece. Para orientações para desenvolvedores, consulte [keyboardType(_:)](https://developer.apple.com/documentation/swiftui/view/keyboardtype(_:)) (SwiftUI), [textContentType(_:)](https://developer.apple.com/documentation/swiftui/view/textcontenttype(_:))(SwiftUI), [UIKeyboardType](https://developer.apple.com/documentation/uikit/uikeyboardtype) (UIKit) e [UITextContentType](https://developer.apple.com/documentation/uikit/uitextcontenttype) (UIKit).

**Compatível com ASCII (ASCII capable)**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço e Retorno. Sugestões de digitação aparecem acima do teclado e o botão de Ditado aparece abaixo dele.](../../../images/virtual-keyboards/virtual-keyboard-ascii-capable@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço e Retorno. Sugestões de digitação aparecem acima do teclado e o botão de Ditado aparece abaixo dele. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-ascii-capable~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-ascii-capable@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-ascii-capable~dark@2x.png)*

**Teclado numérico compatível com ASCII (ASCII capable number pad)**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 10 teclas numéricas, além da tecla Apagar. As teclas dos números de 2 a 9 incluem, cada uma, as 3 ou 4 letras associadas ao número em um telefone.](../../../images/virtual-keyboards/virtual-keyboard-ascii-capable-number-pad@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 10 teclas numéricas, além da tecla Apagar. As teclas dos números de 2 a 9 incluem, cada uma, as 3 ou 4 letras associadas ao número em um telefone. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-ascii-capable-number-pad~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-ascii-capable-number-pad@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-ascii-capable-number-pad~dark@2x.png)*

**Teclado decimal (Decimal pad)**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 10 teclas numéricas, além das teclas Apagar e ponto. As teclas dos números de 2 a 9 incluem, cada uma, as 3 ou 4 letras associadas ao número em um telefone.](../../../images/virtual-keyboards/virtual-keyboard-decimal-pad@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 10 teclas numéricas, além das teclas Apagar e ponto. As teclas dos números de 2 a 9 incluem, cada uma, as 3 ou 4 letras associadas ao número em um telefone. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-decimal-pad~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-decimal-pad@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-decimal-pad~dark@2x.png)*

**Padrão (Default)**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço e Retorno. Sugestões de digitação aparecem acima do teclado e os botões de Emoji e Ditado aparecem abaixo dele.](../../../images/virtual-keyboards/virtual-keyboard-default@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço e Retorno. Sugestões de digitação aparecem acima do teclado e os botões de Emoji e Ditado aparecem abaixo dele. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-default~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-default@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-default~dark@2x.png)*

**Endereço de e-mail (Email address)**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço, ponto, arroba e Retorno. Sugestões de digitação aparecem acima do teclado e o botão de Emoji aparece abaixo dele.](../../../images/virtual-keyboards/virtual-keyboard-email-address@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço, ponto, arroba e Retorno. Sugestões de digitação aparecem acima do teclado e o botão de Emoji aparece abaixo dele. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-email-address~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-email-address@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-email-address~dark@2x.png)*

**Teclado de nome e telefone (Name phone pad)**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço e Retorno. Sugestões de digitação aparecem acima do teclado e os botões de Emoji e Ditado aparecem abaixo dele.](../../../images/virtual-keyboards/virtual-keyboard-name-phone-pad@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço e Retorno. Sugestões de digitação aparecem acima do teclado e os botões de Emoji e Ditado aparecem abaixo dele. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-name-phone-pad~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-name-phone-pad@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-name-phone-pad~dark@2x.png)*

**Teclado numérico (Number pad)**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 10 teclas numéricas, além da tecla Apagar. As teclas dos números de 2 a 9 incluem, cada uma, as 3 ou 4 letras associadas ao número em um telefone.](../../../images/virtual-keyboards/virtual-keyboard-number-pad@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 10 teclas numéricas, além da tecla Apagar. As teclas dos números de 2 a 9 incluem, cada uma, as 3 ou 4 letras associadas ao número em um telefone. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-number-pad~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-number-pad@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-number-pad~dark@2x.png)*

**Números e pontuação (Numbers and punctuation)**

![Uma captura de tela parcial de um teclado no iPhone que exibe 10 teclas numéricas e 15 teclas de pontuação, além da tecla de pontuação secundária e das teclas Apagar, Letras, Espaço e Retorno. Sugestões de digitação aparecem acima do teclado e o botão de Ditado aparece abaixo dele.](../../../images/virtual-keyboards/virtual-keyboard-numbers-and-punctuation@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe 10 teclas numéricas e 15 teclas de pontuação, além da tecla de pontuação secundária e das teclas Apagar, Letras, Espaço e Retorno. Sugestões de digitação aparecem acima do teclado e o botão de Ditado aparece abaixo dele. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-numbers-and-punctuation~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-numbers-and-punctuation@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-numbers-and-punctuation~dark@2x.png)*

**Teclado de telefone (Phone pad)**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 10 teclas numéricas, além da tecla Apagar e de uma tecla para mais, asterisco e jogo da velha. As teclas dos números de 2 a 9 incluem, cada uma, as 3 ou 4 letras associadas ao número em um telefone.](../../../images/virtual-keyboards/virtual-keyboard-phone-pad@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 10 teclas numéricas, além da tecla Apagar e de uma tecla para mais, asterisco e jogo da velha. As teclas dos números de 2 a 9 incluem, cada uma, as 3 ou 4 letras associadas ao número em um telefone. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-phone-pad~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-phone-pad@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-phone-pad~dark@2x.png)*

**Twitter**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço, arroba e jogo da velha. Sugestões de digitação aparecem acima do teclado e os botões de Emoji e Ditado aparecem abaixo dele.](../../../images/virtual-keyboards/virtual-keyboard-twitter@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço, arroba e jogo da velha. Sugestões de digitação aparecem acima do teclado e os botões de Emoji e Ditado aparecem abaixo dele. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-twitter~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-twitter@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-twitter~dark@2x.png)*

**URL**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, ponto, barra, ponto com e Retorno. Sugestões de digitação aparecem acima do teclado e o botão de Emoji aparece abaixo dele.](../../../images/virtual-keyboards/virtual-keyboard-url@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, ponto, barra, ponto com e Retorno. Sugestões de digitação aparecem acima do teclado e o botão de Emoji aparece abaixo dele. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-url~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-url@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-url~dark@2x.png)*

**Busca na web (Web search)**

![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço, ponto e Ir. Sugestões de digitação aparecem acima do teclado e os botões de Emoji e Ditado aparecem abaixo dele.](../../../images/virtual-keyboards/virtual-keyboard-web-search@2x.png) ![Uma captura de tela parcial de um teclado no iPhone que exibe todas as 26 teclas de letras, além das teclas Shift, Apagar, Números, Espaço, ponto e Ir. Sugestões de digitação aparecem acima do teclado e os botões de Emoji e Ditado aparecem abaixo dele. (escuro)](../../../images/virtual-keyboards/virtual-keyboard-web-search~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-web-search@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/virtual-keyboard-web-search~dark@2x.png)*

**Considere personalizar o tipo da tecla Retorno se isso ajudar a esclarecer a experiência de entrada de texto.** O tipo da tecla Retorno se baseia no tipo de teclado escolhido, mas você pode alterá-lo se fizer sentido no seu app. Por exemplo, se seu app inicia uma busca, você pode usar um tipo de tecla Retorno de busca em vez do padrão, para que a experiência seja consistente com outros lugares em que as pessoas iniciam buscas. Para orientações para desenvolvedores, consulte [submitLabel(_:)](https://developer.apple.com/documentation/swiftui/view/submitlabel(_:)) (SwiftUI) e [UIReturnKeyType](https://developer.apple.com/documentation/uikit/uireturnkeytype) (UIKit).

## Visualizações de entrada personalizadas

Em alguns casos, você pode criar uma *visualização de entrada* se quiser oferecer funcionalidade personalizada que aprimore as tarefas de entrada de dados no seu app. Por exemplo, o Numbers oferece uma visualização de entrada personalizada para inserir valores numéricos ao editar uma planilha. Uma visualização de entrada personalizada substitui o teclado fornecido pelo sistema enquanto as pessoas estão no seu app. Para orientações para desenvolvedores, consulte [ToolbarItemPlacement](https://developer.apple.com/documentation/swiftui/toolbaritemplacement) (SwiftUI) e [inputViewController](https://developer.apple.com/documentation/uikit/uiresponder/inputviewcontroller) (UIKit).

**Certifique-se de que sua visualização de entrada personalizada faça sentido no contexto do seu app.** Além de tornar a entrada de dados simples e intuitiva, você quer que as pessoas entendam os benefícios de usar sua visualização de entrada personalizada. Caso contrário, elas podem se perguntar por que não conseguem recuperar o teclado do sistema enquanto estão no seu app.

**Reproduza o som padrão do teclado enquanto as pessoas digitam.** O som do teclado fornece um feedback familiar quando as pessoas tocam em uma tecla do teclado do sistema, então elas provavelmente esperam o mesmo som ao tocar nas teclas da sua visualização de entrada personalizada. As pessoas podem desativar os sons do teclado para todas as interações de teclado em Ajustes > Sons. Para orientações para desenvolvedores, consulte [playInputClick()](https://developer.apple.com/documentation/uikit/uidevice/playinputclick()) (UIKit).

## Teclados personalizados

No iOS, iPadOS e tvOS, você pode fornecer um teclado personalizado que substitui o teclado do sistema criando uma extensão de app. Uma *extensão de app* é um código que você fornece e que as pessoas podem instalar e usar para estender a funcionalidade de uma área específica do sistema; para saber mais, consulte [App extensions](https://developer.apple.com/app-extensions/).

Depois que as pessoas escolhem seu teclado personalizado em Ajustes, elas podem usá-lo para entrada de texto em qualquer app, exceto ao editar campos de texto seguros e campos de número de telefone. As pessoas podem escolher vários teclados personalizados e alternar entre eles a qualquer momento. Para orientações para desenvolvedores, consulte [Creating a custom keyboard](https://developer.apple.com/documentation/uikit/creating-a-custom-keyboard).

Os teclados personalizados fazem sentido quando você quer expor uma funcionalidade de teclado exclusiva em todo o sistema, como uma forma inovadora de inserir texto ou a capacidade de digitar em um idioma que o sistema não suporta. Se você quer oferecer um teclado personalizado para as pessoas usarem apenas enquanto estão no seu app, considere criar uma visualização de entrada personalizada.

**Ofereça uma forma óbvia e fácil de alternar entre teclados.** As pessoas sabem que a tecla Globo do teclado padrão, que substitui a tecla Emoji dedicada quando há vários teclados disponíveis, alterna rapidamente para outros teclados, e esperam uma experiência igualmente intuitiva no seu teclado.

**Evite duplicar recursos de teclado fornecidos pelo sistema.** Em alguns dispositivos, a tecla Emoji/Globo e a tecla de Ditado aparecem automaticamente abaixo do teclado, mesmo quando as pessoas estão usando teclados personalizados. Seu app não pode afetar essas teclas, e provavelmente causará confusão se você as repetir no seu teclado.

**Considere oferecer um tutorial do teclado no seu app.** As pessoas estão acostumadas ao teclado padrão, e aprender a usar um novo teclado pode levar tempo. Você pode ajudar a facilitar o processo fornecendo instruções de uso no seu app, por exemplo, dizendo às pessoas como escolher seu teclado, ativá-lo durante a entrada de texto, usá-lo e voltar ao teclado padrão. Evite exibir conteúdo de ajuda dentro do próprio teclado.

## Considerações por plataforma

*Não compatível com macOS.*

### iOS, iPadOS

**Use o guia de layout do teclado para fazer o teclado parecer uma parte integrada da sua interface.** Usar o guia de layout também ajuda a manter visíveis partes importantes da sua interface enquanto o teclado virtual está na tela. Para orientações para desenvolvedores, consulte [Adjusting your layout with keyboard layout guide](https://developer.apple.com/documentation/uikit/adjusting-your-layout-with-keyboard-layout-guide).

![Uma ilustração do layout de um app no iPhone, mostrando dois campos de texto empilhados e um botão acima do teclado.](../../../images/virtual-keyboards/ui-fully-visible@2x.png) ![Uma ilustração do layout de um app no iPhone, mostrando dois campos de texto empilhados e um botão acima do teclado. (escuro)](../../../images/virtual-keyboards/ui-fully-visible~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/ui-fully-visible@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/ui-fully-visible~dark@2x.png)*

![Uma marca de seleção em um círculo para indicar um exemplo correto.](../../../images/virtual-keyboards/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

![Uma ilustração do layout de um app no iPhone, mostrando dois campos de texto empilhados. O teclado cobre parte do campo de texto inferior.](../../../images/virtual-keyboards/text-field-hidden@2x.png) ![Uma ilustração do layout de um app no iPhone, mostrando dois campos de texto empilhados. O teclado cobre parte do campo de texto inferior. (escuro)](../../../images/virtual-keyboards/text-field-hidden~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/text-field-hidden@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/text-field-hidden~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../../images/virtual-keyboards/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração do layout de um app no iPhone, mostrando dois campos de texto empilhados e um botão acima do teclado. O teclado cobre parte do botão.](../../../images/virtual-keyboards/button-hidden@2x.png) ![Uma ilustração do layout de um app no iPhone, mostrando dois campos de texto empilhados e um botão acima do teclado. O teclado cobre parte do botão. (escuro)](../../../images/virtual-keyboards/button-hidden~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/button-hidden@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/button-hidden~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../../images/virtual-keyboards/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

**Posicione com cuidado os controles personalizados acima do teclado.** Alguns apps posicionam acima do teclado uma visualização acessória de entrada contendo controles personalizados para oferecer funcionalidade específica do app relacionada aos dados com os quais as pessoas estão trabalhando. Por exemplo, o Numbers exibe controles que ajudam as pessoas a aplicar cálculos padrão ou personalizados aos dados de uma planilha. Se seu app oferece controles personalizados que complementam o teclado, certifique-se de que sejam relevantes para a tarefa atual. Se outras visualizações do seu app usam o Liquid Glass, ou se sua visualização parece deslocada acima do teclado, aplique o Liquid Glass à visualização que contém seus controles para manter a consistência. Se você usar uma barra de ferramentas padrão para conter seus controles, ela adota automaticamente o Liquid Glass. Use o guia de layout do teclado e o espaçamento padrão para garantir que o sistema posicione seus controles conforme o esperado dentro da visualização. Para orientações para desenvolvedores, consulte [ToolbarItemPlacement](https://developer.apple.com/documentation/swiftui/toolbaritemplacement) (SwiftUI), [inputAccessoryView](https://developer.apple.com/documentation/uikit/uiresponder/inputaccessoryview) (UIKit) e [UIKeyboardLayoutGuide](https://developer.apple.com/documentation/uikit/uikeyboardlayoutguide) (UIKit).

### tvOS

O tvOS exibe um teclado virtual linear quando as pessoas selecionam um campo de texto usando o Siri Remote.

> **Observação:** Uma tela de teclado em grade aparece quando as pessoas usam dispositivos diferentes do Siri Remote, e o layout do conteúdo se adapta automaticamente ao teclado.

Quando as pessoas ativam uma visualização de entrada de dígitos, o tvOS exibe um teclado específico para dígitos. Para orientações, consulte [Visualizações de entrada de dígitos](https://developer.apple.com/design/human-interface-guidelines/digit-entry-views).

### visionOS

No visionOS, o teclado virtual fornecido pelo sistema oferece suporte a gestos diretos e indiretos e aparece em uma janela separada que as pessoas podem mover para onde quiserem. Você não precisa considerar a localização do teclado nos seus layouts.

![Uma gravação mostrando uma pessoa digitando em um teclado virtual no visionOS.](../../../images/virtual-keyboards/visionos-virtual-keyboard.png)

*Vídeo: Uma gravação mostrando uma pessoa digitando em um teclado virtual no visionOS.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-virtual-keyboard.mp4)

### watchOS

No Apple Watch, um campo de texto pode mostrar um teclado se a tela do dispositivo for grande o suficiente. Caso contrário, o sistema permite que as pessoas usem ditado ou Scribble para inserir informações. Você não pode alterar o tipo de teclado no watchOS, mas pode definir o tipo de conteúdo do campo de texto. O sistema usa essas informações para facilitar a entrada de texto, como oferecendo sugestões. Para orientações para desenvolvedores, consulte [textContentType(_:)](https://developer.apple.com/documentation/swiftui/view/textcontenttype(_:)) (SwiftUI).

As pessoas também podem usar um iPhone pareado próximo para inserir texto no Apple Watch.

## Recursos

#### Relacionados

[Entrada de dados](https://developer.apple.com/design/human-interface-guidelines/entering-data)

[Teclados](https://developer.apple.com/design/human-interface-guidelines/keyboards)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Documentação para desenvolvedores

[keyboardType(_:)](https://developer.apple.com/documentation/swiftui/view/keyboardtype(_:)) — SwiftUI

[textContentType(_:)](https://developer.apple.com/documentation/swiftui/view/textcontenttype(_:)) — SwiftUI

[UIKeyboardType](https://developer.apple.com/documentation/uikit/uikeyboardtype) — UIKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de junho de 2025 | Adicionadas orientações para exibir controles personalizados acima do teclado e atualizado para refletir a disponibilidade do teclado virtual no watchOS. |
| 2 de fevereiro de 2024 | Esclarecido o suporte do teclado virtual a gestos diretos e indiretos no visionOS. |
| 5 de dezembro de 2023 | Adicionadas imagens para o visionOS. |
| 21 de junho de 2023 | Título da página alterado de Onscreen keyboards e atualizado para incluir orientações para o visionOS. |
