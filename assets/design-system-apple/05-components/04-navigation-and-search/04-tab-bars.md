# Barras de abas (Tab bars)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/tab-bars
>
> Plataformas: ios,ipados,macos,tvos,visionos

*Uma barra de abas permite que as pessoas naveguem entre as seções de nível superior do seu app.*

![Uma representação estilizada de uma barra de abas contendo quatro ícones provisórios com nomes. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple.](../../../images/tab-bars/components-tab-bar-intro@2x.png) ![Uma representação estilizada de uma barra de abas contendo quatro ícones provisórios com nomes. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple. (escuro)](../../../images/tab-bars/components-tab-bar-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-tab-bar-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-tab-bar-intro~dark@2x.png)*

As barras de abas ajudam as pessoas a entender os diferentes tipos de informação ou funcionalidade que um app oferece. Elas também permitem alternar rapidamente entre as seções da visualização, preservando o estado de navegação atual dentro de cada seção.

## Boas práticas

**Use uma barra de abas para oferecer suporte à navegação, não para fornecer ações.** Uma barra de abas permite que as pessoas naveguem entre diferentes seções de um app, como as abas Alarme, Cronômetro e Timer do app Relógio. Se você precisar fornecer controles que atuem sobre elementos da visualização atual, use uma [barra de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars).

**Garanta que a barra de abas esteja visível quando as pessoas navegarem para diferentes seções do seu app.** Se você ocultar a barra de abas, as pessoas podem esquecer em qual área do app estão. A exceção é quando uma visualização modal cobre a barra de abas, pois um modal é temporário e autocontido.

**Use o número apropriado de abas necessário para ajudar as pessoas a navegar pelo seu app.** Como representação da hierarquia do seu app, é importante pesar a complexidade de abas adicionais contra a necessidade de as pessoas acessarem cada seção com frequência; tenha em mente que, em geral, é mais fácil navegar entre menos abas. Quando disponível, considere uma barra lateral ou uma barra de abas que se adapte a uma barra lateral como alternativa para um app com uma estrutura de informação complexa.

**Evite abas de excedente.** Dependendo do tamanho e da orientação do dispositivo, o número de abas visíveis pode ser menor que o número total de abas. Se o espaço horizontal limitar o número de abas visíveis, a aba final se torna uma aba Mais no iOS e no iPadOS, revelando os itens restantes em uma lista separada. A aba Mais dificulta que as pessoas alcancem e percebam o conteúdo das abas ocultas, então limite os cenários do seu app em que isso possa acontecer.

**Não desative nem oculte os botões da barra de abas, mesmo quando o conteúdo deles não estiver disponível.** Ter botões da barra de abas disponíveis em alguns casos e em outros não faz a interface do seu app parecer instável e imprevisível. Se uma seção estiver vazia, explique por que o conteúdo dela não está disponível.

**Inclua rótulos de aba para ajudar na navegação.** Um rótulo de aba aparece abaixo ou ao lado de um ícone da barra de abas e pode auxiliar a navegação ao descrever claramente o tipo de conteúdo ou funcionalidade que a aba contém. Use palavras únicas sempre que possível.

**Considere usar SF Symbols para fornecer ícones de barra de abas familiares e escaláveis.** Quando você usa [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols), os ícones da barra de abas se adaptam automaticamente a diferentes contextos. Por exemplo, a barra de abas pode ser regular ou compacta, dependendo do dispositivo e da orientação. Os ícones da barra de abas aparecem acima dos rótulos de aba em visualizações compactas, enquanto em visualizações regulares os ícones e os rótulos aparecem lado a lado. Prefira símbolos ou ícones preenchidos para manter a consistência com a plataforma.

![Uma ilustração de dois iPhones lado a lado. O primeiro iPhone está na orientação paisagem, com uma barra de abas na parte inferior da tela, com os ícones da barra de abas na borda inicial de cada aba e os rótulos das abas na borda final. O segundo iPhone está na orientação retrato, com uma barra de abas na parte inferior da tela, com os ícones da barra de abas acima dos respectivos rótulos de aba.](../../../images/tab-bars/tab-bar-landscape@2x.png) ![Uma ilustração de dois iPhones lado a lado. O primeiro iPhone está na orientação paisagem, com uma barra de abas na parte inferior da tela, com os ícones da barra de abas na borda inicial de cada aba e os rótulos das abas na borda final. O segundo iPhone está na orientação retrato, com uma barra de abas na parte inferior da tela, com os ícones da barra de abas acima dos respectivos rótulos de aba. (escuro)](../../../images/tab-bars/tab-bar-landscape~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-bar-landscape@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-bar-landscape~dark@2x.png)*

Se você estiver criando ícones de barra de abas personalizados, consulte [Apple Design Resources](https://developer.apple.com/design/resources/) para ver as dimensões dos ícones da barra de abas.

![Um diagrama de uma barra de abas, com indicações da localização do ícone da barra de abas e do rótulo da aba.](../../../images/tab-bars/tab-bar-anatomy-callouts@2x.png) ![Um diagrama de uma barra de abas, com indicações da localização do ícone da barra de abas e do rótulo da aba. (escuro)](../../../images/tab-bars/tab-bar-anatomy-callouts~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-bar-anatomy-callouts@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-bar-anatomy-callouts~dark@2x.png)*

**Use um selo para indicar que há informações críticas disponíveis.** Você pode exibir um selo — um oval vermelho contendo texto branco e um número ou um ponto de exclamação — em uma aba para indicar que há informações novas ou atualizadas na seção que merecem a atenção da pessoa. Reserve os selos para informações críticas para não diluir o impacto e o significado deles. Para orientações, consulte [Notificações](https://developer.apple.com/design/human-interface-guidelines/notifications).

![Uma ilustração da metade inferior de um iPhone na orientação retrato, com uma barra de abas na parte inferior da tela. Duas das abas têm selos circulares vermelhos anexados, indicando a presença de informações críticas.](../../../images/tab-bars/tab-bar-badges-iphone@2x.png) ![Uma ilustração da metade inferior de um iPhone na orientação retrato, com uma barra de abas na parte inferior da tela. Duas das abas têm selos circulares vermelhos anexados, indicando a presença de informações críticas. (escuro)](../../../images/tab-bars/tab-bar-badges-iphone~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-bar-badges-iphone@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-bar-badges-iphone~dark@2x.png)*

**Evite aplicar uma cor semelhante aos rótulos das abas e aos fundos da camada de conteúdo.** Se o seu app já tem conteúdo brilhante e colorido na camada de conteúdo, prefira uma aparência monocromática para as barras de abas ou escolha uma cor de destaque com diferenciação visual suficiente. Para mais orientações, consulte [Cor do Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/color#Liquid-Glass-color).

## Considerações por plataforma

*Nenhuma consideração adicional para macOS. Sem suporte no watchOS.*

### iOS

Uma barra de abas flutua acima do conteúdo na parte inferior da tela. Seus itens ficam sobre um fundo de [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass) que permite que o conteúdo abaixo apareça através dele.

Para barras de abas com um acessório anexado, como o MiniPlayer no Música, você pode optar por minimizar a barra de abas e mover o acessório para ficar alinhado a ela quando a pessoa rola para baixo. A pessoa pode sair do estado minimizado tocando em uma aba ou rolando até o topo da visualização. Para orientações voltadas a desenvolvedores, consulte [TabBarMinimizeBehavior](https://developer.apple.com/documentation/swiftui/tabbarminimizebehavior) e [UITabBarController.MinimizeBehavior](https://developer.apple.com/documentation/uikit/uitabbarcontroller/minimizebehavior).

![Uma ilustração da metade inferior de um iPhone na orientação retrato, com o app Música aberto. O MiniPlayer está aberto acima da barra de abas na parte inferior da tela.](../../../images/tab-bars/tab-bar-with-accessory-expanded@2x.png) ![Uma ilustração da metade inferior de um iPhone na orientação retrato, com o app Música aberto. O MiniPlayer está aberto acima da barra de abas na parte inferior da tela. (escuro)](../../../images/tab-bars/tab-bar-with-accessory-expanded~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-bar-with-accessory-expanded@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-bar-with-accessory-expanded~dark@2x.png)*

![Uma ilustração da metade inferior de um iPhone na orientação retrato, com o app Música aberto. A barra de abas está minimizada na aba atualmente aberta, no canto inferior inicial da tela, com o MiniPlayer na parte central inferior e a aba de busca no canto final.](../../../images/tab-bars/tab-bar-with-accessory-collapsed@2x.png) ![Uma ilustração da metade inferior de um iPhone na orientação retrato, com o app Música aberto. A barra de abas está minimizada na aba atualmente aberta, no canto inferior inicial da tela, com o MiniPlayer na parte central inferior e a aba de busca no canto final. (escuro)](../../../images/tab-bars/tab-bar-with-accessory-collapsed~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-bar-with-accessory-collapsed@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/tab-bar-with-accessory-collapsed~dark@2x.png)*

Uma barra de abas pode incluir uma aba de busca dedicada na extremidade final. Para orientações, consulte [Campos de busca](https://developer.apple.com/design/human-interface-guidelines/search-fields).

### iPadOS

O sistema exibe uma barra de abas perto do topo da tela. Você pode optar por fazer a barra de abas aparecer como um elemento fixo ou com um botão que a converte em uma barra lateral. Para orientações voltadas a desenvolvedores, consulte [tabBarOnly](https://developer.apple.com/documentation/swiftui/tabviewstyle/tabbaronly) e [sidebarAdaptable](https://developer.apple.com/documentation/swiftui/tabviewstyle/sidebaradaptable).

**Barra de abas**

![Uma captura de tela mostrando o app Música no iPad com a barra de abas perto do topo da tela.](../../../images/tab-bars/ipad-tab-bar-music-app@2x.png) ![Uma captura de tela mostrando o app Música no iPad com a barra de abas perto do topo da tela. (escuro)](../../../images/tab-bars/ipad-tab-bar-music-app~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/ipad-tab-bar-music-app@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/ipad-tab-bar-music-app~dark@2x.png)*

**Barra lateral**

![Uma captura de tela mostrando o app Música no iPad com a barra de abas convertida em uma barra lateral na borda inicial da tela.](../../../images/tab-bars/ipad-sidebar-music-app@2x.png) ![Uma captura de tela mostrando o app Música no iPad com a barra de abas convertida em uma barra lateral na borda inicial da tela. (escuro)](../../../images/tab-bars/ipad-sidebar-music-app~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/ipad-sidebar-music-app@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/ipad-sidebar-music-app~dark@2x.png)*

> **Observação:** Para apresentar uma barra lateral sem a opção de convertê-la em uma barra de abas, use uma [visualização dividida de navegação](https://developer.apple.com/documentation/swiftui/navigationsplitview) em vez de uma visualização de abas. Para orientações, consulte [Barras laterais](https://developer.apple.com/design/human-interface-guidelines/sidebars).

**Prefira uma barra de abas para a navegação.** Uma barra de abas dá acesso às seções do seu app que as pessoas mais usam. Se o seu app for mais complexo, você pode oferecer a opção de converter a barra de abas em uma barra lateral para que as pessoas possam acessar um conjunto mais amplo de opções de navegação.

**Permita que as pessoas personalizem a barra de abas.** Em apps com muitas seções que as pessoas podem querer acessar, pode ser útil permitir que elas selecionem os itens que usam com frequência e os adicionem à barra de abas, ou removam os itens que usam com menos frequência. Por exemplo, no app Música, uma pessoa pode escolher uma playlist favorita para exibir na barra de abas. Se você permitir que as pessoas selecionem as próprias abas, procure definir uma lista padrão de cinco ou menos para preservar a continuidade entre os tamanhos de visualização compacto e regular. Para orientações voltadas a desenvolvedores, consulte [TabViewCustomization](https://developer.apple.com/documentation/swiftui/tabviewcustomization) e [UITab.Placement](https://developer.apple.com/documentation/uikit/uitab/placement).

### tvOS

Uma barra de abas é altamente personalizável. Por exemplo, você pode:

- Especificar uma tonalidade, cor ou imagem para o fundo da barra de abas
- Escolher uma fonte para os itens de aba, incluindo uma fonte diferente para o item selecionado
- Especificar tonalidades para itens selecionados e não selecionados
- Adicionar ícones de botão, como ajustes e busca

Por padrão, uma barra de abas é translúcida e apenas a aba selecionada é opaca. Quando as pessoas usam o controle remoto para focar a barra de abas, a aba selecionada inclui uma sombra projetada que enfatiza seu estado de seleção. A altura de uma barra de abas é de 68 pontos, e sua borda superior fica a 46 pontos do topo da tela; você não pode alterar nenhum desses valores.

Se houver mais itens do que cabem na barra de abas, o sistema trunca o item mais à direita aplicando um efeito de esmaecimento que começa no lado direito da barra de abas. Se houver itens suficientes para causar rolagem, o sistema também aplica um efeito de esmaecimento de truncamento que começa no lado esquerdo.

**Esteja ciente dos comportamentos de rolagem da barra de abas.** Por padrão, as pessoas podem rolar a barra de abas para fora da tela quando a aba atual contém uma única visualização principal. Você pode ver exemplos desse comportamento nas abas Assistir Agora, Filmes, Séries de TV, Esportes e Infantil do app TV. A exceção é quando uma tela contém uma visualização dividida, como a aba Biblioteca do app TV ou a tela de Ajustes de um app. Nesse caso, a barra de abas permanece fixa no topo da visualização enquanto as pessoas rolam o conteúdo dentro dos painéis primário e secundário da visualização dividida. Independentemente do conteúdo de uma aba, o foco sempre retorna à barra de abas no topo da página quando as pessoas pressionam Menu no controle remoto.

**Em um app de transmissão ao vivo, organize as abas de forma consistente.** Para a melhor experiência, organize o conteúdo em apps de streaming ao vivo com abas na seguinte ordem:

- Conteúdo ao vivo
- DVR na nuvem ou outro conteúdo gravado
- Outro conteúdo

Para mais orientações, consulte [Apps de transmissão ao vivo](https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps).

### visionOS

No visionOS, uma barra de abas é sempre vertical, flutuando em uma posição fixa em relação ao lado inicial da janela. Quando as pessoas olham para uma barra de abas, ela se expande automaticamente; para abrir uma aba específica, as pessoas olham para a aba e tocam. Enquanto uma barra de abas está expandida, ela pode obscurecer temporariamente o conteúdo atrás dela.

![Uma gravação mostrando um close de uma barra de abas na lateral da janela de um app no visionOS. A barra de abas inclui apenas símbolos. A aba atualmente selecionada recebe o efeito de foco, mostrando que alguém está olhando para ela, e a barra se expande para exibir símbolos e rótulos.](../../../images/tab-bars/visionos-tab-bar-expanding-animation@2x.png)

*Vídeo: Uma gravação mostrando um close de uma barra de abas na lateral da janela de um app no visionOS. A barra de abas inclui apenas símbolos. A aba atualmente selecionada recebe o efeito de foco, mostrando que alguém está olhando para ela, e a barra se expande para exibir símbolos e rótulos.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-tab-bar-expanding-animation.mp4)

**Forneça um símbolo e um rótulo de texto para cada aba.** O símbolo de uma aba está sempre visível na barra de abas. Quando as pessoas olham para a barra de abas, o sistema também revela os rótulos das abas. Mesmo que a barra de abas se expanda, você precisa manter os rótulos das abas curtos para que as pessoas possam lê-los num relance.

![Uma captura de tela mostrando uma barra de abas recolhida contendo apenas símbolos.](../../../images/tab-bars/visionos-tab-bar-collapsed@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-tab-bar-collapsed@2x.png)*

![Uma captura de tela mostrando uma barra de abas expandida contendo símbolos e rótulos.](../../../images/tab-bars/visionos-tab-bar-expanded@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-tab-bar-expanded@2x.png)*

**Se fizer sentido no seu app, considere usar uma barra lateral dentro de uma aba.** Se a hierarquia do seu app for profunda, você pode querer usar uma [barra lateral](https://developer.apple.com/design/human-interface-guidelines/sidebars) para oferecer suporte à navegação secundária dentro de uma aba. Se fizer isso, certifique-se de impedir que as seleções na barra lateral alterem qual aba está aberta no momento.

## Recursos

#### Relacionados

[Visualizações de abas](https://developer.apple.com/design/human-interface-guidelines/tab-views)

[Barras de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars)

[Barras laterais](https://developer.apple.com/design/human-interface-guidelines/sidebars)

[Materiais](https://developer.apple.com/design/human-interface-guidelines/materials)

#### Documentação para desenvolvedores

[TabView](https://developer.apple.com/documentation/swiftui/tabview) — SwiftUI

[TabViewBottomAccessoryPlacement](https://developer.apple.com/documentation/swiftui/tabviewbottomaccessoryplacement) — SwiftUI

[Enhancing your app’s content with tab navigation](https://developer.apple.com/documentation/swiftui/enhancing-your-app-content-with-tab-navigation) — SwiftUI

[UITabBar](https://developer.apple.com/documentation/uikit/uitabbar) — UIKit

[Elevating your iPad app with a tab bar and sidebar](https://developer.apple.com/documentation/uikit/elevating-your-ipad-app-with-a-tab-bar-and-sidebar) — UIKit

#### Vídeos

- [Get to know the new design system](https://developer.apple.com/videos/play/wwdc2025/356)
- [Elevate the design of your iPad app](https://developer.apple.com/videos/play/wwdc2025/208)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 8 de junho de 2026 | Terminologia e arte atualizadas. |
| 16 de dezembro de 2025 | Orientações atualizadas para o Liquid Glass. |
| 28 de julho de 2025 | Adicionadas orientações para o Liquid Glass. |
| 9 de setembro de 2024 | Adicionada arte representando a barra de abas no iPadOS 18. |
| 6 de agosto de 2024 | Atualizado com orientações para a barra de abas no iPadOS 18. |
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
