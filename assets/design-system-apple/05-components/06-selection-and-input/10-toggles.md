# Alternadores (Toggles)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/toggles
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um toggle permite que as pessoas escolham entre um par de estados opostos, como ligado e desligado, usando uma aparência diferente para indicar cada estado.*

![Uma representação estilizada de dois controles de interruptor com rótulos. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/toggles/components-toggles-intro@2x.png) ![Uma representação estilizada de dois controles de interruptor com rótulos. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/toggles/components-toggles-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-toggles-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-toggles-intro~dark@2x.png)*

Um toggle pode ter vários estilos, como interruptor (switch) e caixa de seleção (checkbox), e diferentes plataformas podem usar esses estilos de maneiras diferentes. Para orientações, consulte [Considerações por plataforma](https://developer.apple.com/design/human-interface-guidelines/toggles#Platform-considerations).

Além dos toggles, todas as plataformas também oferecem suporte a botões que se comportam como toggles, usando uma aparência diferente para cada estado. Para orientações a desenvolvedores, consulte [ToggleStyle](https://developer.apple.com/documentation/swiftui/togglestyle).

## Boas práticas

**Use um toggle para ajudar as pessoas a escolher entre dois valores opostos que afetam o estado de um conteúdo ou de uma view.** Um toggle sempre permite que as pessoas gerenciem o estado de algo, portanto, se você precisar oferecer suporte a outros tipos de ações — como escolher em uma lista de itens —, use um componente diferente, como um [botão pop-up](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons).

**Identifique claramente o ajuste, a view ou o conteúdo que o toggle afeta.** Em geral, o contexto ao redor fornece informações suficientes para que as pessoas entendam o que estão ativando ou desativando. Em alguns casos, geralmente em apps de macOS, você também pode fornecer um rótulo para descrever o estado que o toggle controla. Se você usar um botão que se comporta como um toggle, normalmente usa um ícone de interface que comunica seu propósito e atualiza sua aparência — tipicamente alterando o fundo — com base no estado atual.

**Garanta que as diferenças visuais no estado de um toggle sejam óbvias.** Por exemplo, você pode adicionar ou remover um preenchimento de cor, mostrar ou ocultar a forma de fundo ou alterar os detalhes internos que exibe — como uma marca de verificação ou um ponto — para mostrar que um toggle está ligado ou desligado. Evite depender apenas de cores diferentes para comunicar o estado, pois nem todas as pessoas conseguem perceber as diferenças.

## Considerações por plataforma

*Nenhuma consideração adicional para tvOS, visionOS ou watchOS.*

### iOS, iPadOS

**Use o estilo de toggle em interruptor somente em uma linha de lista.** Você não precisa fornecer um rótulo nessa situação, porque o conteúdo da linha fornece o contexto para o estado que o interruptor controla.

**Altere a cor padrão de um interruptor somente se necessário.** A cor verde padrão costuma funcionar bem na maioria dos casos, mas você pode querer usar a cor de destaque do seu app. Use uma cor que ofereça contraste suficiente com a aparência sem cor para ser perceptível.

![Uma ilustração de duas linhas de lista, uma com um toggle de interruptor ativo e outra com um toggle de interruptor inativo. O toggle ativo tem o tom verde da cor padrão do interruptor.](../../../images/toggles/toggles-ios-default-color@2x.png) ![Uma ilustração de duas linhas de lista, uma com um toggle de interruptor ativo e outra com um toggle de interruptor inativo. O toggle ativo tem o tom verde da cor padrão do interruptor. (escuro)](../../../images/toggles/toggles-ios-default-color~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toggles-ios-default-color@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toggles-ios-default-color~dark@2x.png)*

![Uma ilustração de duas linhas de lista, uma com um toggle de interruptor ativo e outra com um toggle de interruptor inativo. O toggle ativo tem um tom roxo de uma cor personalizada de interruptor.](../../../images/toggles/toggles-ios-custom-color@2x.png) ![Uma ilustração de duas linhas de lista, uma com um toggle de interruptor ativo e outra com um toggle de interruptor inativo. O toggle ativo tem um tom roxo de uma cor personalizada de interruptor. (escuro)](../../../images/toggles/toggles-ios-custom-color~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toggles-ios-custom-color@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toggles-ios-custom-color~dark@2x.png)*

**Fora de uma lista, use um botão que se comporte como um toggle, e não um interruptor.** Por exemplo, o app Telefone usa um toggle no botão de filtro para permitir que os usuários filtrem suas chamadas recentes. O app adiciona um destaque azul para indicar quando o toggle está ativo e o remove quando o toggle está inativo.

![Uma captura de tela da metade superior do app Telefone no iPhone, mostrando a lista filtrada de chamadas perdidas recentes. O botão de filtro no canto final superior tem um destaque azul, indicando que o toggle está ativo.](../../../images/toggles/toggles-ios-phone-filter-on@2x.png) ![Uma captura de tela da metade superior do app Telefone no iPhone, mostrando a lista filtrada de chamadas perdidas recentes. O botão de filtro no canto final superior tem um destaque azul, indicando que o toggle está ativo. (escuro)](../../../images/toggles/toggles-ios-phone-filter-on~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toggles-ios-phone-filter-on@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toggles-ios-phone-filter-on~dark@2x.png)*

![Uma captura de tela da metade superior do app Telefone no iPhone, mostrando todas as chamadas recentes. O botão de filtro no canto final superior não tem destaque, indicando que o toggle está inativo.](../../../images/toggles/toggles-ios-phone-filter-off@2x.png) ![Uma captura de tela da metade superior do app Telefone no iPhone, mostrando todas as chamadas recentes. O botão de filtro no canto final superior não tem destaque, indicando que o toggle está inativo. (escuro)](../../../images/toggles/toggles-ios-phone-filter-off~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toggles-ios-phone-filter-off@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toggles-ios-phone-filter-off~dark@2x.png)*

**Evite fornecer um rótulo que explique o propósito do botão.** O ícone de interface que você cria — combinado com as aparências alternativas de fundo que você fornece — ajuda as pessoas a entender o que o botão faz. Para orientações a desenvolvedores, consulte [changesSelectionAsPrimaryAction](https://developer.apple.com/documentation/uikit/uibutton/changesselectionasprimaryaction).

### macOS

Além do estilo de toggle em interruptor, o macOS oferece suporte ao estilo de caixa de seleção e também define botões de opção (radio buttons) que podem oferecer comportamentos semelhantes.

**Use interruptores, caixas de seleção e botões de opção no corpo da janela, e não na moldura da janela.** Em particular, evite usar esses componentes em uma barra de ferramentas ou barra de status.

#### Interruptores

**Prefira um interruptor para ajustes que você queira enfatizar.** Um interruptor tem mais peso visual que uma caixa de seleção, portanto fica melhor quando controla mais funcionalidades do que uma caixa de seleção costuma controlar. Por exemplo, você pode usar um interruptor para permitir que as pessoas ativem ou desativem um grupo de ajustes, em vez de apenas um. Para orientações a desenvolvedores, consulte [switch](https://developer.apple.com/documentation/swiftui/togglestyle/switch).

**Em um formulário agrupado, considere usar um mini interruptor para controlar o ajuste em uma única linha.** A altura de um mini interruptor é semelhante à altura de botões e outros controles, resultando em linhas com altura consistente. Se precisar apresentar uma hierarquia de ajustes dentro de um formulário agrupado, você pode usar um interruptor regular para o ajuste principal e mini interruptores para os ajustes subordinados. Para orientações a desenvolvedores, consulte [GroupedFormStyle](https://developer.apple.com/documentation/swiftui/groupedformstyle) e [ControlSize](https://developer.apple.com/documentation/swiftui/controlsize).

**Em geral, não substitua uma caixa de seleção por um interruptor.** Se você já está usando uma caixa de seleção na sua interface, provavelmente é melhor continuar a usá-la.

#### Caixas de seleção

Uma caixa de seleção é um botão pequeno e quadrado que fica vazio quando o botão está desligado, contém uma marca de verificação quando o botão está ligado e pode conter um traço quando o estado do botão é misto. Normalmente, uma caixa de seleção inclui um título em seu lado final. Em uma lista de verificação editável, uma caixa de seleção pode aparecer sem título nem nenhum conteúdo adicional.

**Use uma caixa de seleção em vez de um interruptor se precisar apresentar uma hierarquia de ajustes.** O estilo visual das caixas de seleção ajuda-as a se alinhar bem e a comunicar agrupamento. Usando alinhamento — geralmente ao longo da borda inicial das caixas de seleção — e recuo, você pode mostrar dependências, como quando o estado de uma caixa de seleção governa o estado de caixas de seleção subordinadas.

![Uma ilustração mostrando um layout que inclui dois níveis de caixas de seleção.](../../../images/toggles/checkbox-alignment@2x.png) ![Uma ilustração mostrando um layout que inclui dois níveis de caixas de seleção. (escuro)](../../../images/toggles/checkbox-alignment~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkbox-alignment@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/checkbox-alignment~dark@2x.png)*

**Considere usar botões de opção se precisar apresentar um conjunto de mais de duas opções mutuamente exclusivas.** Quando as pessoas precisam escolher entre opções além de apenas “ligado” ou “desligado”, usar vários botões de opção pode ajudar a esclarecer cada opção com um rótulo único.

**Considere usar um rótulo para introduzir um grupo de caixas de seleção se a relação entre elas não for clara.** Descreva o conjunto de opções e alinhe a linha de base do rótulo com a primeira caixa de seleção do grupo.

**Reflita com precisão o estado de uma caixa de seleção em sua aparência.** O estado de uma caixa de seleção pode ser ligado, desligado ou misto. Se você usar uma caixa de seleção para ligar e desligar globalmente várias caixas de seleção subordinadas, mostre um estado misto quando as caixas subordinadas tiverem estados diferentes. Por exemplo, talvez você precise apresentar um ajuste de estilo de texto que ative ou desative todos os estilos, mas que também permita que as pessoas escolham um subconjunto de ajustes de estilo individuais, como negrito, itálico ou sublinhado. Para orientações a desenvolvedores, consulte [allowsMixedState](https://developer.apple.com/documentation/appkit/nsbutton/allowsmixedstate).

![Uma ilustração que mostra uma caixa de seleção no estado ligado, que se parece com um pequeno quadrado arredondado com preenchimento azul e uma marca de verificação branca.](../../../images/toggles/checkbox-selected@2x.png) ![Uma ilustração que mostra uma caixa de seleção no estado ligado, que se parece com um pequeno quadrado arredondado com preenchimento azul e uma marca de verificação branca. (escuro)](../../../images/toggles/checkbox-selected~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkbox-selected@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/checkbox-selected~dark@2x.png)*

![Uma ilustração que mostra uma caixa de seleção no estado desligado, que se parece com um pequeno quadrado arredondado sem preenchimento.](../../../images/toggles/checkbox-deselected@2x.png) ![Uma ilustração que mostra uma caixa de seleção no estado desligado, que se parece com um pequeno quadrado arredondado sem preenchimento. (escuro)](../../../images/toggles/checkbox-deselected~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkbox-deselected@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/checkbox-deselected~dark@2x.png)*

![Uma ilustração que mostra uma caixa de seleção no estado misto, que se parece com um pequeno quadrado arredondado com preenchimento azul e um hífen branco.](../../../images/toggles/checkbox-mixed@2x.png) ![Uma ilustração que mostra uma caixa de seleção no estado misto, que se parece com um pequeno quadrado arredondado com preenchimento azul e um hífen branco. (escuro)](../../../images/toggles/checkbox-mixed~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkbox-mixed@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/checkbox-mixed~dark@2x.png)*

#### Botões de opção

Um botão de opção é um botão pequeno e circular seguido de um rótulo. Normalmente exibidos em grupos de dois a cinco, os botões de opção apresentam um conjunto de escolhas mutuamente exclusivas.

![Uma ilustração que mostra cinco itens em uma coluna, cada um com um botão de opção antes do texto Radio Button Label. O botão de opção do terceiro item está preenchido, indicando que está selecionado.](../../../images/toggles/radio-button-example@2x.png) ![Uma ilustração que mostra cinco itens em uma coluna, cada um com um botão de opção antes do texto Radio Button Label. O botão de opção do terceiro item está preenchido, indicando que está selecionado. (escuro)](../../../images/toggles/radio-button-example~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/radio-button-example@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/radio-button-example~dark@2x.png)*

O estado de um botão de opção é selecionado (um círculo preenchido) ou desmarcado (um círculo vazio). Embora um botão de opção também possa exibir um estado misto (indicado por um traço), esse estado raramente é útil, porque você pode comunicar vários estados usando botões de opção adicionais. Se precisar mostrar que um ajuste ou item tem um estado misto, considere usar uma caixa de seleção.

![Uma ilustração que mostra um botão de opção selecionado, que se parece com um ponto branco centralizado em um pequeno círculo com preenchimento escuro.](../../../images/toggles/radio-button-selected@2x.png) ![Uma ilustração que mostra um botão de opção selecionado, que se parece com um ponto branco centralizado em um pequeno círculo com preenchimento escuro. (escuro)](../../../images/toggles/radio-button-selected~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/radio-button-selected@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/radio-button-selected~dark@2x.png)*

![Uma ilustração que mostra um botão de opção desmarcado, que se parece com um pequeno círculo vazio.](../../../images/toggles/radio-button-deselected@2x.png) ![Uma ilustração que mostra um botão de opção desmarcado, que se parece com um pequeno círculo vazio. (escuro)](../../../images/toggles/radio-button-deselected~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/radio-button-deselected@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/radio-button-deselected~dark@2x.png)*

**Prefira um conjunto de botões de opção para apresentar opções mutuamente exclusivas.** Se precisar permitir que as pessoas escolham várias opções em um conjunto, use caixas de seleção.

**Evite listar botões de opção demais em um conjunto.** Uma lista longa de botões de opção ocupa muito espaço na interface e pode ser avassaladora. Se precisar apresentar mais de cerca de cinco opções, considere usar um componente como um [botão pop-up](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons).

**Para apresentar um único ajuste que possa estar ligado ou desligado, prefira uma caixa de seleção.** Embora um único botão de opção também possa ligar ou desligar algo, a presença ou ausência da marca de verificação em uma caixa de seleção pode facilitar o entendimento do estado atual em um relance. Nos raros casos em que uma única caixa de seleção não comunique claramente os estados opostos, você pode usar um par de botões de opção, cada um com um rótulo que especifique o estado que controla.

**Use espaçamento consistente ao exibir botões de opção horizontalmente.** Meça o espaço necessário para acomodar o rótulo mais longo de um botão e use essa medida de forma consistente.

![Uma ilustração que mostra três itens em uma fileira, com um botão de opção antes de cada item. O primeiro e o terceiro itens têm rótulos de texto longos, enquanto o segundo tem um rótulo curto. O espaço horizontal ocupado por cada item é igual. Um botão de opção preenchido precede o segundo item, indicando que está selecionado.](../../../images/toggles/radio-button-equal-spacing@2x.png) ![Uma ilustração que mostra três itens em uma fileira, com um botão de opção antes de cada item. O primeiro e o terceiro itens têm rótulos de texto longos, enquanto o segundo tem um rótulo curto. O espaço horizontal ocupado por cada item é igual. Um botão de opção preenchido precede o segundo item, indicando que está selecionado. (escuro)](../../../images/toggles/radio-button-equal-spacing~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/radio-button-equal-spacing@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/radio-button-equal-spacing~dark@2x.png)*

## Recursos

#### Relacionados

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Documentação para desenvolvedores

[Toggle](https://developer.apple.com/documentation/swiftui/toggle) — SwiftUI

[UISwitch](https://developer.apple.com/documentation/uikit/uiswitch) — UIKit

[NSButton.ButtonType.toggle](https://developer.apple.com/documentation/appkit/nsbutton/buttontype/toggle) — AppKit

[NSSwitch](https://developer.apple.com/documentation/appkit/nsswitch) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 29 de março de 2024 | Orientações aprimoradas para o uso de interruptores em apps de macOS, esclarecido quando uma caixa de seleção tem um título e adicionadas ilustrações para botões de opção. |
| 12 de setembro de 2023 | Ilustrações atualizadas. |
