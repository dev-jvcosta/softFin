# Controles de caminho (Path controls)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/path-controls
>
> Plataformas: macos

*Um controle de caminho mostra o caminho no sistema de arquivos de um arquivo ou pasta selecionado.*

![Uma representação estilizada de um controle de caminho para um documento HIG Design mostrando o disco raiz, a pasta pai e o item selecionado. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores.](../../../images/path-controls/components-path-control-intro@2x.png) ![Uma representação estilizada de um controle de caminho para um documento HIG Design mostrando o disco raiz, a pasta pai e o item selecionado. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores. (escuro)](../../../images/path-controls/components-path-control-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-path-control-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-path-control-intro~dark@2x.png)*

Por exemplo, escolher Visualizar > Mostrar Barra de Caminho no Finder exibe uma barra de caminho na parte inferior da janela. Ela mostra o caminho do item selecionado ou o caminho da pasta da janela, se nada estiver selecionado.

Existem dois estilos de controle de caminho.

![Uma captura de tela de uma barra de caminho do Finder que exibe uma hierarquia de quatro locais.](../../../images/path-controls/path-controls-standard@2x.png) ![Uma captura de tela de uma barra de caminho do Finder que exibe uma hierarquia de quatro locais. (escuro)](../../../images/path-controls/path-controls-standard~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/path-controls-standard@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/path-controls-standard~dark@2x.png)*

**Padrão.** Uma lista linear que inclui o disco raiz, as pastas pai e o item selecionado. Cada item aparece com um ícone e um nome. Se a lista for longa demais para caber no controle, ele oculta os nomes entre o primeiro e o último itens. Se você tornar o controle editável, as pessoas poderão arrastar um item para o controle para selecioná-lo e exibir seu caminho no controle.

![Uma captura de tela de um controle de caminho mostrando um ícone de pasta e um controle pop-up.](../../../images/path-controls/path-controls-popup@2x.png) ![Uma captura de tela de um controle de caminho mostrando um ícone de pasta e um controle pop-up. (escuro)](../../../images/path-controls/path-controls-popup~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/path-controls-popup@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/path-controls-popup~dark@2x.png)*

**Pop-up.** Um controle semelhante a um [botão pop-up](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons) que mostra o ícone e o nome do item selecionado. As pessoas podem clicar no item para abrir um menu contendo o disco raiz, as pastas pai e o item selecionado. Se você tornar o controle editável, o menu conterá um comando adicional Escolher, que as pessoas podem usar para selecionar um item e exibi-lo no controle. Elas também podem arrastar um item para o controle para selecioná-lo e exibir seu caminho.

## Boas práticas

**Use um controle de caminho no corpo da janela, não na moldura da janela.** Os controles de caminho não se destinam ao uso em barras de ferramentas ou barras de status. Observe que o controle de caminho no Finder aparece na parte inferior do corpo da janela, não na barra de status.

## Considerações por plataforma

*Não compatível com iOS, iPadOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Gerenciamento de arquivos](https://developer.apple.com/design/human-interface-guidelines/file-management)

#### Documentação para desenvolvedores

[NSPathControl](https://developer.apple.com/documentation/appkit/nspathcontrol) — AppKit
