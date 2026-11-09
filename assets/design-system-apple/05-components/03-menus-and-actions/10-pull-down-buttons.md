# Botões pull-down (Pull-down buttons)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons
>
> Plataformas: ios,ipados,macos,visionos

*Um botão pull-down exibe um menu de itens ou ações diretamente relacionados à finalidade do botão.*

![Uma representação estilizada de um menu pull-down exibindo um conjunto de itens. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores.](../../../images/pull-down-buttons/components-pull-down-button-intro@2x.png) ![Uma representação estilizada de um menu pull-down exibindo um conjunto de itens. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores. (escuro)](../../../images/pull-down-buttons/components-pull-down-button-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-pull-down-button-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-pull-down-button-intro~dark@2x.png)*

Depois que as pessoas escolhem um item no menu de um botão pull-down, o menu se fecha e o app executa a ação escolhida.

## Boas práticas

**Use um botão pull-down para apresentar comandos ou itens diretamente relacionados à ação do botão.** O menu permite ajudar as pessoas a esclarecer o alvo do botão ou personalizar seu comportamento sem exigir botões adicionais na interface. Por exemplo:

- Um botão Adicionar poderia apresentar um menu que permite especificar o item que se deseja adicionar.
- Um botão Ordenar poderia usar um menu para permitir selecionar um atributo pelo qual ordenar.
- Um botão Voltar poderia permitir escolher um local específico para revisitar, em vez de abrir o anterior.

Se você precisa oferecer uma lista de opções mutuamente exclusivas que não sejam comandos, use um [botão pop-up](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons).

**Evite colocar todas as ações de uma view em um único botão pull-down.** As ações principais de uma view precisam ser fáceis de descobrir, então você não quer escondê-las em um botão pull-down que as pessoas precisam abrir antes de poder fazer qualquer coisa.

**Equilibre o tamanho do menu com a facilidade de uso.** Como as pessoas precisam interagir com um botão pull-down antes de poder ver o menu, listar no mínimo três itens pode ajudar a interação a valer a pena. Se você precisa listar apenas um ou dois itens, considere usar componentes alternativos para apresentá-los, como botões para executar ações e toggles ou switches para apresentar seleções. Em contrapartida, listar itens demais no menu de um botão pull-down pode atrasar as pessoas, porque leva mais tempo para encontrar um item específico.

**Exiba um título de menu sucinto somente se ele agregar significado.** Em geral, o conteúdo de um botão pull-down — combinado com itens de menu descritivos — fornece todo o contexto de que as pessoas precisam, tornando desnecessário um título de menu.

**Deixe as pessoas saberem quando um item de menu de um botão pull-down é destrutivo e peça que confirmem a intenção.** Os menus usam texto vermelho para destacar ações que você identifica como potencialmente destrutivas. Quando as pessoas escolhem uma ação destrutiva, o sistema exibe uma [action sheet](https://developer.apple.com/design/human-interface-guidelines/action-sheets) (iOS) ou um [popover](https://developer.apple.com/design/human-interface-guidelines/popovers) (iPadOS) em que podem confirmar a escolha ou cancelar a ação. Como uma action sheet aparece em um local diferente do menu e exige dispensa deliberada, ela pode ajudar as pessoas a evitar a perda de dados por engano.

**Inclua um ícone de interface em um item de menu quando isso agregar valor.** Se você precisa esclarecer o significado de um item, pode exibir um [ícone](https://developer.apple.com/design/human-interface-guidelines/icons) ou imagem após o rótulo. Usar [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) para essa finalidade pode ajudar a oferecer uma experiência familiar, ao mesmo tempo que garante que o símbolo permaneça alinhado ao texto em todas as escalas.

## Considerações por plataforma

*Sem considerações adicionais para macOS ou visionOS. Não compatível com tvOS ou watchOS.*

### iOS, iPadOS

> **Nota:** Você também pode permitir que as pessoas revelem um menu pull-down executando um gesto específico em um botão. Por exemplo, no iOS 14 e posterior, o Safari responde a um gesto de tocar e segurar no botão Abas exibindo um menu de ações relacionadas às abas, como Nova Aba e Fechar Todas as Abas.

**Considere usar um botão pull-down Mais para apresentar itens que não precisam de posições de destaque na interface principal.** Um botão Mais pode ajudar a oferecer uma variedade de itens onde o espaço é limitado, mas também pode prejudicar a descoberta. Embora as pessoas geralmente entendam que um botão Mais oferece funcionalidades adicionais relacionadas ao contexto atual, o ícone de reticências não necessariamente as ajuda a prever seu conteúdo. Para projetar um botão Mais eficaz, pondere a conveniência de seu tamanho em relação ao impacto na descoberta para encontrar um equilíbrio que funcione no seu app.

![Uma captura de tela do app Notas no iPhone, aberto em um documento do Notas intitulado Nature Walks. A barra de ferramentas superior inclui um botão Mais na borda final.](../../../images/pull-down-buttons/menu-secondary-actions-collapsed@2x.png) ![Uma captura de tela do app Notas no iPhone, aberto em um documento do Notas intitulado Nature Walks. A barra de ferramentas superior inclui um botão Mais na borda final. (escuro)](../../../images/pull-down-buttons/menu-secondary-actions-collapsed~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/menu-secondary-actions-collapsed@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/menu-secondary-actions-collapsed~dark@2x.png)*

![Uma captura de tela do app Notas no iPhone, aberto em um documento do Notas intitulado Nature Walks. O botão Mais na barra de ferramentas superior está expandido, revelando o menu Mais com funcionalidades adicionais.](../../../images/pull-down-buttons/menu-secondary-actions-expanded@2x.png) ![Uma captura de tela do app Notas no iPhone, aberto em um documento do Notas intitulado Nature Walks. O botão Mais na barra de ferramentas superior está expandido, revelando o menu Mais com funcionalidades adicionais. (escuro)](../../../images/pull-down-buttons/menu-secondary-actions-expanded~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/menu-secondary-actions-expanded@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/menu-secondary-actions-expanded~dark@2x.png)*

## Recursos

#### Relacionados

[Botões pop-up](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons)

[Botões](https://developer.apple.com/design/human-interface-guidelines/buttons)

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

#### Documentação para desenvolvedores

[MenuPickerStyle](https://developer.apple.com/documentation/swiftui/menupickerstyle) — SwiftUI

[showsMenuAsPrimaryAction](https://developer.apple.com/documentation/uikit/uicontrol/showsmenuasprimaryaction) — UIKit

[pullsDown](https://developer.apple.com/documentation/appkit/nspopupbutton/pullsdown) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| September 14, 2022 | Refinadas as orientações sobre como projetar um tamanho de menu útil. |
