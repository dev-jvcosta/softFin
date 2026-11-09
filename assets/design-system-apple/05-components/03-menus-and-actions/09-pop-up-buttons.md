# Botões pop-up (Pop-up buttons)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons
>
> Plataformas: ios,ipados,macos,visionos

*Um botão pop-up exibe um menu de opções mutuamente exclusivas.*

![Uma representação estilizada de um botão pop-up exibindo um conjunto de opções. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores.](../../../images/pop-up-buttons/components-pop-up-button-intro@2x.png) ![Uma representação estilizada de um botão pop-up exibindo um conjunto de opções. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/pop-up-buttons/components-pop-up-button-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-pop-up-button-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-pop-up-button-intro~dark@2x.png)*

Depois que as pessoas escolhem um item do menu de um botão pop-up, o menu se fecha e o botão pode atualizar seu conteúdo para indicar a seleção atual.

![Uma captura de tela do Calendário no iPhone, com um novo evento de calendário aberto para edição. A tela de edição contém controles para definir os detalhes do evento, incluindo as datas de início e término, tempo de viagem, intervalo de repetição, calendário, convidados, opções de alerta e anexos.](../../../images/pop-up-buttons/pop-up-button-closed@2x.png) ![Uma captura de tela do Calendário no iPhone, com um novo evento de calendário aberto para edição. A tela de edição contém controles para definir os detalhes do evento, incluindo as datas de início e término, tempo de viagem, intervalo de repetição, calendário, convidados, opções de alerta e anexos. (escuro)](../../../images/pop-up-buttons/pop-up-button-closed~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pop-up-button-closed@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/pop-up-button-closed~dark@2x.png)*

![Uma captura de tela do Calendário no iPhone, com um novo evento de calendário aberto para edição. Um menu de botão pop-up surge a partir do botão Repetir, com opções para escolher um intervalo de repetição em uma lista de opções predefinidas ou criar um personalizado.](../../../images/pop-up-buttons/pop-up-button-open@2x.png) ![Uma captura de tela do Calendário no iPhone, com um novo evento de calendário aberto para edição. Um menu de botão pop-up surge a partir do botão Repetir, com opções para escolher um intervalo de repetição em uma lista de opções predefinidas ou criar um personalizado. (escuro)](../../../images/pop-up-buttons/pop-up-button-open~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pop-up-button-open@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/pop-up-button-open~dark@2x.png)*

## Boas práticas

**Use um botão pop-up para apresentar uma lista simples de opções ou estados mutuamente exclusivos.** Um botão pop-up ajuda as pessoas a fazer uma escolha que afeta o conteúdo ou a visualização ao redor. Use um [botão pull-down](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons) em vez disso se precisar:

- Oferecer uma lista de ações
- Permitir que as pessoas selecionem vários itens
- Incluir um submenu

**Ofereça uma seleção padrão útil.** Um botão pop-up pode atualizar seu conteúdo para identificar a seleção atual, mas, se as pessoas ainda não fizeram uma seleção, ele mostra o item padrão que você especificar. Quando possível, faça da seleção padrão um item que a maioria das pessoas provavelmente vai querer.

**Dê às pessoas uma forma de prever as opções de um botão pop-up sem abri-lo.** Por exemplo, você pode usar um rótulo introdutório ou um rótulo de botão que descreva o efeito do botão, dando contexto às opções.

**Considere usar um botão pop-up quando o espaço for limitado e você não precisar exibir todas as opções o tempo todo.** Os botões pop-up são uma forma que economiza espaço de apresentar uma ampla variedade de opções.

**Se necessário, inclua uma opção Personalizado no menu de um botão pop-up para oferecer itens adicionais que são úteis em algumas situações.** Oferecer uma opção Personalizado pode ajudar a evitar que a interface fique poluída com itens ou controles de que as pessoas precisam apenas ocasionalmente. Você também pode exibir um texto explicativo abaixo da lista para ajudar as pessoas a entender como as opções funcionam.

## Considerações por plataforma

*Sem considerações adicionais para iOS, macOS ou visionOS. Não compatível com tvOS ou watchOS.*

### iPadOS

**Dentro de um popover ou de uma visualização modal, considere usar um botão pop-up em vez de um indicador de divulgação para apresentar várias opções para um item de lista.** Por exemplo, as pessoas podem escolher rapidamente uma opção no menu do botão pop-up sem navegar até uma visualização de detalhes. Considere usar um botão pop-up nesse cenário quando você tiver um conjunto bastante pequeno e bem definido de opções que funcionem bem em um menu.

## Recursos

#### Relacionados

[Botões pull-down](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

[Botões](https://developer.apple.com/design/human-interface-guidelines/buttons)

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

#### Documentação para desenvolvedores

[MenuPickerStyle](https://developer.apple.com/documentation/swiftui/menupickerstyle)  — SwiftUI

[changesSelectionAsPrimaryAction](https://developer.apple.com/documentation/uikit/uibutton/changesselectionasprimaryaction) — UIKit

[NSPopUpButton](https://developer.apple.com/documentation/appkit/nspopupbutton) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 24 de outubro de 2023 | Adicionadas ilustrações. |
| 14 de setembro de 2022 | Adicionada uma diretriz sobre o uso de um botão pop-up em um popover ou em uma visualização modal no iPadOS. |
