# Visualizações de texto (Text views)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/text-views
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Uma visualização de texto exibe conteúdo de texto estilizado de várias linhas, que pode opcionalmente ser editável.*

![Representação estilizada de um campo contendo texto. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/text-views/components-text-view-intro@2x.png) ![Representação estilizada de um campo contendo texto. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/text-views/components-text-view-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-text-view-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-text-view-intro~dark@2x.png)*

As visualizações de texto podem ter qualquer altura e permitem rolagem quando o conteúdo se estende além da visualização. Por padrão, o conteúdo de uma visualização de texto é alinhado à borda inicial e usa a cor de rótulo do sistema. No iOS, iPadOS e visionOS, se uma visualização de texto for editável, um teclado aparece quando as pessoas selecionam a visualização.

## Boas práticas

**Use uma visualização de texto quando precisar exibir texto longo, editável ou em um formato especial.** As visualizações de texto diferem dos [campos de texto](https://developer.apple.com/design/human-interface-guidelines/text-fields) e dos [rótulos](https://developer.apple.com/design/human-interface-guidelines/labels) por oferecerem mais opções para exibir texto especializado e receber entrada de texto. Se você precisa exibir uma pequena quantidade de texto, é mais simples usar um rótulo ou, se o texto for editável, um campo de texto.

**Mantenha o texto legível.** Embora você possa usar várias fontes, cores e alinhamentos de maneiras criativas, é essencial manter a legibilidade do conteúdo. É uma boa ideia adotar o Dynamic Type para que o texto continue com boa aparência caso as pessoas alterem o tamanho do texto no dispositivo. Teste o conteúdo com opções de acessibilidade ativadas, como texto em negrito. Para orientações, consulte [Acessibilidade](https://developer.apple.com/design/human-interface-guidelines/accessibility) e [Tipografia](https://developer.apple.com/design/human-interface-guidelines/typography).

**Torne selecionável o texto útil.** Se uma visualização de texto contém informações úteis, como uma mensagem de erro, um número de série ou um endereço IP, considere permitir que as pessoas o selecionem e copiem para colar em outro lugar.

## Considerações por plataforma

*Nenhuma consideração adicional para macOS, visionOS ou watchOS.*

### iOS, iPadOS

**Mostre o tipo de teclado apropriado.** Há vários tipos de teclado disponíveis, cada um projetado para facilitar um tipo diferente de entrada. Para agilizar a entrada de dados, o teclado exibido ao editar uma visualização de texto precisa ser apropriado ao tipo de conteúdo. Para orientações, consulte [Teclados virtuais](https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards).

### tvOS

Você pode exibir texto no tvOS usando uma visualização de texto. Como a entrada de texto no tvOS é mínima por design, o tvOS usa [campos de texto](https://developer.apple.com/design/human-interface-guidelines/text-fields) para texto editável.

## Recursos

#### Relacionados

[Rótulos](https://developer.apple.com/design/human-interface-guidelines/labels)

[Campos de texto](https://developer.apple.com/design/human-interface-guidelines/text-fields)

[Caixas de combinação](https://developer.apple.com/design/human-interface-guidelines/combo-boxes)

#### Documentação para desenvolvedores

[Text](https://developer.apple.com/documentation/swiftui/text) — SwiftUI

[UITextView](https://developer.apple.com/documentation/uikit/uitextview) — UIKit

[NSTextView](https://developer.apple.com/documentation/appkit/nstextview) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 5 de junho de 2023 | Orientações atualizadas para refletir as mudanças no watchOS 10. |
