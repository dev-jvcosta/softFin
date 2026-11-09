# Visualizações divididas (Split views)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/split-views
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Uma visualização dividida gerencia a apresentação de vários painéis de conteúdo adjacentes, cada um dos quais pode conter uma variedade de componentes, incluindo tabelas, coleções, imagens e visualizações personalizadas.*

![Uma representação estilizada de uma janela composta por três áreas: uma barra lateral, uma tela e um inspetor. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/split-views/components-split-view-intro@2x.png) ![Uma representação estilizada de uma janela composta por três áreas: uma barra lateral, uma tela e um inspetor. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/split-views/components-split-view-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-split-view-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-split-view-intro~dark@2x.png)*

Normalmente, você usa uma visualização dividida para mostrar vários níveis da hierarquia do seu app ao mesmo tempo e oferecer suporte à navegação entre eles. Nesse cenário, selecionar um item no painel primário da visualização exibe o conteúdo do item no painel secundário. Da mesma forma, uma visualização dividida pode exibir um painel terciário se os itens do painel secundário contiverem conteúdo adicional.

É comum usar uma visualização dividida para exibir uma [barra lateral](https://developer.apple.com/design/human-interface-guidelines/sidebars) de navegação, em que o painel inicial lista os itens ou coleções de nível superior de um app, e os painéis secundário e terciário (opcional) podem apresentar coleções filhas e detalhes dos itens. Raramente, você também pode usar uma visualização dividida para oferecer grupos de funcionalidades que complementam a visualização principal — por exemplo, o Keynote no macOS usa painéis de visualização dividida para apresentar o navegador de slides, as notas do apresentador e o painel do inspetor em áreas que cercam a tela principal do slide.

## Boas práticas

**Para dar suporte à navegação, destaque de forma persistente a seleção atual em cada painel que leva à visualização de detalhes.** A aparência de selecionado esclarece a relação entre o conteúdo dos vários painéis e ajuda as pessoas a se manterem orientadas.

**Considere permitir que as pessoas arrastem e soltem conteúdo entre painéis.** Como uma visualização dividida dá acesso a vários níveis de hierarquia, as pessoas podem mover conteúdo com facilidade de uma parte do seu app para outra arrastando itens para painéis diferentes. Para orientações, consulte [Arrastar e soltar](https://developer.apple.com/design/human-interface-guidelines/drag-and-drop).

## Considerações por plataforma

### iOS

**Prefira usar uma visualização dividida em um ambiente regular — não compacto.** Uma visualização dividida precisa de espaço horizontal para exibir vários painéis. Em um ambiente compacto, como o iPhone na orientação vertical, é difícil exibir vários painéis sem quebrar linhas ou truncar o conteúdo, tornando-o menos legível e mais difícil de interagir.

### iPadOS

No iPadOS, uma visualização dividida pode incluir dois painéis verticais, como no Mail, ou três painéis verticais, como no Keynote.

**Considere larguras de janela estreitas, compactas e intermediárias.** Como as janelas do iPad podem ser redimensionadas de forma fluida, é importante considerar o design de um layout de visualização dividida em várias larguras. Em especial, garanta que seja possível navegar entre os vários painéis de maneira lógica. Para orientações, consulte [Layout](https://developer.apple.com/design/human-interface-guidelines/layout). Para orientações para desenvolvedores, consulte [NavigationSplitView](https://developer.apple.com/documentation/swiftui/navigationsplitview) e [UISplitViewController](https://developer.apple.com/documentation/uikit/uisplitviewcontroller).

### macOS

No macOS, você pode organizar os painéis de uma visualização dividida na vertical, na horizontal ou em ambas. Uma visualização dividida inclui divisores entre os painéis que podem ser arrastados para redimensioná-los. Para orientações para desenvolvedores, consulte [VSplitView](https://developer.apple.com/documentation/swiftui/vsplitview) e [HSplitView](https://developer.apple.com/documentation/swiftui/hsplitview).

**Vertical**

![Uma ilustração de uma tela de laptop que mostra dois painéis empilhados verticalmente.](../../../images/split-views/vertical-split-view@2x.png) ![Uma ilustração de uma tela de laptop que mostra dois painéis empilhados verticalmente. (escuro)](../../../images/split-views/vertical-split-view~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/vertical-split-view@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/vertical-split-view~dark@2x.png)*

**Horizontal**

![Uma ilustração de uma tela de laptop que mostra dois painéis dispostos lado a lado, com um painel mais estreito à esquerda e um mais largo à direita.](../../../images/split-views/horizontal-split-view@2x.png) ![Uma ilustração de uma tela de laptop que mostra dois painéis dispostos lado a lado, com um painel mais estreito à esquerda e um mais largo à direita. (escuro)](../../../images/split-views/horizontal-split-view~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/horizontal-split-view@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/horizontal-split-view~dark@2x.png)*

**Múltipla**

![Uma ilustração de uma tela de laptop dividida em três painéis, divididos tanto na vertical quanto na horizontal.](../../../images/split-views/multiple-split-view@2x.png) ![Uma ilustração de uma tela de laptop dividida em três painéis, divididos tanto na vertical quanto na horizontal. (escuro)](../../../images/split-views/multiple-split-view~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/multiple-split-view@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/multiple-split-view~dark@2x.png)*

**Defina padrões razoáveis para os tamanhos mínimo e máximo dos painéis.** Se as pessoas puderem redimensionar os painéis da visualização dividida do seu app, use tamanhos que mantenham o divisor visível. Se um painel ficar pequeno demais, o divisor pode parecer desaparecer, tornando-se difícil de usar.

**Considere permitir que as pessoas ocultem um painel quando fizer sentido.** Se seu app inclui uma área de edição, por exemplo, considere permitir que as pessoas ocultem outros painéis para reduzir distrações ou liberar mais espaço para a edição — no Keynote, as pessoas podem ocultar os painéis do navegador e das notas do apresentador quando querem editar o conteúdo do slide.

**Ofereça várias maneiras de revelar painéis ocultos.** Por exemplo, você pode fornecer um botão na barra de ferramentas ou um comando de menu — incluindo um atalho de teclado — que as pessoas possam usar para restaurar um painel oculto.

**Prefira o estilo de divisor fino.** O divisor fino tem um ponto de largura, o que oferece o máximo de espaço para o conteúdo e continua fácil de usar. Evite usar estilos de divisor mais grossos, a menos que você tenha uma necessidade específica. Por exemplo, se ambos os lados de um divisor apresentarem linhas de tabela que usam elementos lineares fortes que possam dificultar a distinção de um divisor fino, pode funcionar usar um divisor mais grosso. Para orientações para desenvolvedores, consulte [NSSplitView.DividerStyle](https://developer.apple.com/documentation/appkit/nssplitview/dividerstyle-swift.enum).

### tvOS

No tvOS, uma visualização dividida pode funcionar bem para ajudar as pessoas a filtrar conteúdo. Quando as pessoas escolhem uma categoria de filtro no painel primário, seu app pode exibir os resultados no painel secundário.

**Escolha um layout de visualização dividida que mantenha os painéis com aparência equilibrada.** Por padrão, uma visualização dividida dedica um terço da largura da tela ao painel primário e dois terços ao painel secundário, mas você também pode especificar um layout meio a meio.

**Exiba um único título acima de uma visualização dividida, ajudando as pessoas a entender o conteúdo como um todo.** As pessoas já sabem como usar uma visualização dividida para navegar e filtrar conteúdo; elas não precisam de títulos que descrevam o que cada painel contém.

**Escolha o alinhamento do título com base no tipo de conteúdo que o painel secundário contém.** Especificamente, quando o painel secundário contém uma coleção de conteúdo, considere centralizar o título na janela. Em contrapartida, se o painel secundário contém uma única visualização principal de conteúdo importante, considere posicionar o título acima da visualização primária para dar mais espaço ao conteúdo.

### visionOS

**Para exibir informações complementares, prefira uma visualização dividida em vez de uma nova janela.** Uma visualização dividida dá às pessoas acesso conveniente a mais informações sem sair do contexto atual, enquanto uma nova janela pode confundir pessoas que estão tentando navegar ou reposicionar conteúdo. Abrir mais janelas também exige que você gerencie com cuidado a relação entre as visualizações do seu app ou jogo. Se você precisar solicitar uma pequena quantidade de informações ou apresentar uma tarefa simples que alguém deve concluir antes de voltar à tarefa principal, use uma [sheet](https://developer.apple.com/design/human-interface-guidelines/sheets).

### watchOS

No watchOS, a visualização dividida exibe a visualização de lista ou uma visualização de detalhes como uma visualização em tela cheia.

**Exiba automaticamente a visualização de detalhes mais relevante.** Quando seu app for aberto, mostre às pessoas as informações mais pertinentes. Por exemplo, exiba informações relevantes para a localização, a hora ou as ações recentes delas.

**Se seu app exibe várias páginas de detalhes, coloque as visualizações de detalhes em uma [visualização em abas](https://developer.apple.com/design/human-interface-guidelines/tab-views) vertical.** As pessoas poderão então usar a Digital Crown para rolar entre as abas da visualização de detalhes. O watchOS também exibe um indicador de página ao lado da Digital Crown, indicando o número de abas e a aba atualmente selecionada.

![Uma captura de tela que mostra uma visualização de detalhes com uma aba vertical no Apple Watch. O indicador de página ao lado da Digital Crown mostra que a quinta aba está selecionada.](../../../images/split-views/split-view-watch-vertical-tab@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/split-view-watch-vertical-tab@2x.png)*

## Recursos

#### Relacionados

[Barras laterais](https://developer.apple.com/design/human-interface-guidelines/sidebars)

[Barras de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Documentação para desenvolvedores

[NavigationSplitView](https://developer.apple.com/documentation/swiftui/navigationsplitview) — SwiftUI

[UISplitViewController](https://developer.apple.com/documentation/uikit/uisplitviewcontroller) — UIKit

[NSSplitViewController](https://developer.apple.com/documentation/appkit/nssplitviewcontroller) — AppKit

#### Vídeos

- [Torne seu app UIKit mais flexível](https://developer.apple.com/videos/play/wwdc2025/282)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de junho de 2025 | Adicionadas considerações por plataforma para iOS e iPadOS. |
| 5 de dezembro de 2023 | Adicionadas orientações para visualizações divididas no visionOS. |
| 5 de junho de 2023 | Adicionadas orientações para visualizações divididas no watchOS. |
