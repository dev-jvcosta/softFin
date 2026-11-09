# Menus do Dock (Dock menus)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/dock-menus
>
> Plataformas: macos

*No Mac, as pessoas podem clicar com o botão secundário no ícone de um app ou jogo no Dock para revelar um menu do Dock, que apresenta itens fornecidos pelo sistema e itens personalizados.*

![Uma representação estilizada de um menu se estendendo a partir de um ícone no Dock. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple.](../../../images/dock-menus/components-dock-menu-intro@2x.png) ![Uma representação estilizada de um menu se estendendo a partir de um ícone no Dock. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple. (escuro)](../../../images/dock-menus/components-dock-menu-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-dock-menu-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-dock-menu-intro~dark@2x.png)*

Os itens de menu do Dock fornecidos pelo sistema podem variar dependendo de o app estar aberto ou não. Por exemplo, o menu do Dock do Safari inclui itens de menu para ações como visualizar uma janela atual ou criar uma nova janela.

> **Observação:** Embora o iOS e o iPadOS não ofereçam suporte a um menu do Dock, as pessoas podem revelar um menu semelhante de itens fornecidos pelo sistema e personalizados — chamado de ações rápidas da Tela de Início — ao pressionar e segurar o ícone de um app na Tela de Início ou no Dock. Para orientações, consulte [Ações rápidas da Tela de Início](https://developer.apple.com/design/human-interface-guidelines/home-screen-quick-actions).

## Boas práticas

Assim como em todos os menus, você precisa nomear os itens do menu do Dock de forma sucinta e organizá-los de maneira lógica. Para orientações, consulte [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

**Disponibilize os itens personalizados do menu do Dock também em outros lugares.** Nem todas as pessoas usam um menu do Dock, então é importante oferecer os mesmos comandos em outros lugares, como nos menus da barra de menus ou dentro da sua interface.

**Prefira itens personalizados de alto valor para o seu menu do Dock.** Por exemplo, um menu do Dock pode listar todas as janelas abertas no momento ou recentemente, tornando-o uma forma conveniente de ir para a janela que as pessoas querem. Considere também listar algumas das ações com maior probabilidade de serem úteis quando o seu app não estiver em primeiro plano ou quando não houver janelas abertas. Por exemplo, o Mail inclui itens para obter novos e-mails e redigir uma nova mensagem, além de listar todas as janelas abertas.

## Considerações por plataforma

*Sem suporte no iOS, iPadOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

[Ações rápidas da Tela de Início](https://developer.apple.com/design/human-interface-guidelines/home-screen-quick-actions)

#### Documentação para desenvolvedores

[applicationDockMenu(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdockmenu(_:)) — AppKit
