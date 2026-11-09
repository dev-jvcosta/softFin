# Rótulos (Labels)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/labels
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um rótulo é um trecho de texto estático que as pessoas podem ler e, muitas vezes, copiar, mas não editar.*

![Uma representação estilizada de um rótulo de texto. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/labels/components-label-intro@2x.png) ![Uma representação estilizada de um rótulo de texto. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/labels/components-label-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-label-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-label-intro~dark@2x.png)*

Os rótulos exibem texto em toda a interface, em botões, itens de menu e views, ajudando as pessoas a entender o contexto atual e o que podem fazer em seguida.

O termo *rótulo* (label) se refere a texto não editável que pode aparecer em vários lugares. Por exemplo:

- Dentro de um botão, um rótulo geralmente transmite o que o botão faz, como Editar, Cancelar ou Enviar.
- Dentro de muitas listas, um rótulo pode descrever cada item, muitas vezes acompanhado de um símbolo ou de uma imagem.
- Dentro de uma view, um rótulo pode fornecer contexto adicional ao apresentar um controle ou descrever uma ação ou tarefa comum que as pessoas podem realizar na view.

> **Nota para desenvolvedores:** Para exibir texto não editável, o SwiftUI define dois componentes: [Label](https://developer.apple.com/documentation/swiftui/label) e [Text](https://developer.apple.com/documentation/swiftui/text).

As orientações abaixo podem ajudar você a usar um rótulo para exibir texto. Em alguns casos, as orientações para componentes específicos — como [botões de ação](https://developer.apple.com/design/human-interface-guidelines/buttons), [menus](https://developer.apple.com/design/human-interface-guidelines/menus) e [listas e tabelas](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables) — incluem recomendações adicionais para o uso de texto.

## Boas práticas

**Use um rótulo para exibir uma pequena quantidade de texto que as pessoas não precisam editar.** Se precisar permitir que as pessoas editem uma pequena quantidade de texto, use um [campo de texto](https://developer.apple.com/design/human-interface-guidelines/text-fields). Se precisar exibir uma grande quantidade de texto e, opcionalmente, permitir que as pessoas o editem, use uma [text view](https://developer.apple.com/design/human-interface-guidelines/text-views).

**Prefira fontes do sistema.** Um rótulo pode exibir texto simples ou estilizado e oferece suporte ao Dynamic Type (onde disponível) por padrão. Se você ajustar o estilo de um rótulo ou usar fontes personalizadas, garanta que o texto continue legível.

**Use as cores de rótulo fornecidas pelo sistema para comunicar a importância relativa.** O sistema define quatro cores de rótulo que variam em aparência para ajudar você a dar ao texto diferentes níveis de importância visual. Para orientações adicionais, consulte [Cor](https://developer.apple.com/design/human-interface-guidelines/color).

| Cor do sistema | Exemplo de uso | iOS, iPadOS, tvOS, visionOS | macOS |
|---|---|---|---|
| Label | Informação principal | [label](https://developer.apple.com/documentation/uikit/uicolor/label) | [labelColor](https://developer.apple.com/documentation/appkit/nscolor/labelcolor) |
| Secondary label | Um subtítulo ou texto complementar | [secondaryLabel](https://developer.apple.com/documentation/uikit/uicolor/secondarylabel) | [secondaryLabelColor](https://developer.apple.com/documentation/appkit/nscolor/secondarylabelcolor) |
| Tertiary label | Texto que descreve um item ou comportamento indisponível | [tertiaryLabel](https://developer.apple.com/documentation/uikit/uicolor/tertiarylabel) | [tertiaryLabelColor](https://developer.apple.com/documentation/appkit/nscolor/tertiarylabelcolor) |
| Quaternary label | Texto de marca-d'água | [quaternaryLabel](https://developer.apple.com/documentation/uikit/uicolor/quaternarylabel) | [quaternaryLabelColor](https://developer.apple.com/documentation/appkit/nscolor/quaternarylabelcolor) |

**Torne selecionável o texto de rótulo que seja útil.** Se um rótulo contiver informações úteis — como uma mensagem de erro, um local ou um endereço IP —, considere permitir que as pessoas o selecionem e copiem para colar em outro lugar.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, tvOS ou visionOS.*

### macOS

> **Nota para desenvolvedores:** Para exibir texto não editável em um rótulo, use a propriedade [isEditable](https://developer.apple.com/documentation/appkit/nstextfield/iseditable) do [NSTextField](https://developer.apple.com/documentation/appkit/nstextfield).

### watchOS

Os componentes de texto de data e hora (mostrados abaixo, à esquerda) exibem a data atual, a hora atual ou uma combinação das duas. Você pode configurar um componente de texto de data para usar uma variedade de formatos, calendários e fusos horários. Um componente de texto de timer de contagem regressiva (mostrado abaixo, à direita) exibe um timer preciso de contagem regressiva ou progressiva. Você pode configurar um componente de texto de timer para exibir seu valor de contagem em uma variedade de formatos.

![Uma ilustração de componentes de texto de data e hora no Apple Watch, com a data alinhada à borda inicial e a hora alinhada à borda final.](../../../images/labels/labels-date-time-text-component@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/labels-date-time-text-component@2x.png)*

![Uma ilustração de um componente de texto de timer de contagem regressiva no Apple Watch, com o valor de tempo no centro.](../../../images/labels/labels-countdown-timer-text-component@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/labels-countdown-timer-text-component@2x.png)*

Quando você usa os componentes de texto de data e de timer fornecidos pelo sistema, o watchOS ajusta automaticamente a apresentação do rótulo para caber no espaço disponível. O sistema também atualiza o conteúdo sem nenhuma entrada adicional do seu app.

Considere usar componentes de data e timer em complicações. Para orientações de design, consulte [Complicações](https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/complications); para orientações a desenvolvedores, consulte [Text](https://developer.apple.com/documentation/swiftui/text).

## Recursos

#### Relacionados

[Campos de texto](https://developer.apple.com/design/human-interface-guidelines/text-fields)

[Text views](https://developer.apple.com/design/human-interface-guidelines/text-views)

#### Documentação para desenvolvedores

[Label](https://developer.apple.com/documentation/swiftui/label) — SwiftUI

[Text](https://developer.apple.com/documentation/swiftui/text) — SwiftUI

[UILabel](https://developer.apple.com/documentation/uikit/uilabel) — UIKit

[NSTextField](https://developer.apple.com/documentation/appkit/nstextfield) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 5 de junho de 2023 | Atualizado para refletir as mudanças no watchOS 10. |
