# Barras laterais (Sidebars)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/sidebars
>
> Plataformas: ios,ipados,macos,tvos,visionos

*Uma barra lateral aparece no lado inicial de uma visualização e permite que as pessoas naveguem entre áreas do seu app ou coleções de conteúdo de nível superior, como pastas e playlists.*

![Uma representação estilizada da parte superior da barra lateral de uma janela, exibindo uma seção e algumas pastas. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores.](../../../images/sidebars/components-sidebar-intro@2x.png) ![Uma representação estilizada da parte superior da barra lateral de uma janela, exibindo uma seção e algumas pastas. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores. (escuro)](../../../images/sidebars/components-sidebar-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-sidebar-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-sidebar-intro~dark@2x.png)*

Uma barra lateral exige uma grande quantidade de espaço vertical e horizontal. Quando o espaço é limitado ou você quer dedicar mais da tela a outras informações ou funcionalidades, um controle mais compacto, como uma barra de abas, pode oferecer uma melhor experiência de navegação. Em muitos apps, você não precisa escolher entre uma barra de abas ou uma barra lateral para a navegação; em vez disso, pode adotar um estilo de barra de abas que oferece ambas. Para orientações, consulte [Barras de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars) e [Layout](https://developer.apple.com/design/human-interface-guidelines/layout).

## Boas práticas

**Estenda conteúdo visualmente rico por baixo da barra lateral.** No iOS, no iPadOS e no macOS, assim como outros controles, como barras de ferramentas e barras de abas, as barras laterais podem flutuar sobre o conteúdo na camada do [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass). Para reforçar a separação, você pode estender o conteúdo por baixo da barra lateral, seja permitindo que ele role horizontalmente, seja aplicando um *efeito de extensão de fundo*. Um efeito de extensão de fundo espelha o conteúdo adjacente para dar a impressão de esticá-lo por baixo da barra lateral. Para orientações aos desenvolvedores, consulte [backgroundExtensionEffect()](https://developer.apple.com/documentation/swiftui/view/backgroundextensioneffect()).

![Uma captura de tela do lado inicial de um app no iPad. Uma imagem ocupa a parte superior da janela, parando na borda da barra lateral.](../../../images/sidebars/sidebars-extend-content-beneath-sidebar-incorrect@2x.png) ![Uma captura de tela do lado inicial de um app no iPad. Uma imagem ocupa a parte superior da janela, parando na borda da barra lateral. (escuro)](../../../images/sidebars/sidebars-extend-content-beneath-sidebar-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sidebars-extend-content-beneath-sidebar-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sidebars-extend-content-beneath-sidebar-incorrect~dark@2x.png)*

![Um X dentro de um círculo para indicar o uso incorreto.](../../../images/sidebars/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma captura de tela do lado inicial de um app no iPad. Uma imagem ocupa a parte superior da janela e usa um efeito de extensão de fundo para inverter, desfocar e estender a imagem por baixo da barra lateral até a borda da janela.](../../../images/sidebars/sidebars-extend-content-beneath-sidebar-correct@2x.png) ![Uma captura de tela do lado inicial de um app no iPad. Uma imagem ocupa a parte superior da janela e usa um efeito de extensão de fundo para inverter, desfocar e estender a imagem por baixo da barra lateral até a borda da janela. (escuro)](../../../images/sidebars/sidebars-extend-content-beneath-sidebar-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sidebars-extend-content-beneath-sidebar-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sidebars-extend-content-beneath-sidebar-correct~dark@2x.png)*

![Uma marca de seleção dentro de um círculo para indicar o uso correto.](../../../images/sidebars/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Quando possível, permita que as pessoas personalizem o conteúdo de uma barra lateral.** Uma barra lateral permite que as pessoas naveguem até áreas importantes do seu app, então funciona bem quando elas podem decidir quais áreas são mais importantes e em que ordem aparecem.

**Agrupe a hierarquia com controles de divulgação se seu app tiver muito conteúdo.** Usar [controles de divulgação](https://developer.apple.com/design/human-interface-guidelines/disclosure-controls) ajuda a manter o espaço vertical da barra lateral em um nível administrável.

**Considere usar símbolos familiares para representar os itens da barra lateral.** O [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) oferece uma ampla variedade de símbolos personalizáveis que você pode usar para representar itens no seu app. Se precisar usar um ícone personalizado, considere criar um [símbolo personalizado](https://developer.apple.com/design/human-interface-guidelines/sf-symbols#Custom-symbols) em vez de usar uma imagem bitmap. Baixe o app SF Symbols em [Apple Design Resources](https://developer.apple.com/design/resources/#sf-symbols).

**Considere permitir que as pessoas ocultem a barra lateral.** Às vezes, as pessoas querem ocultar a barra lateral para criar mais espaço para os detalhes do conteúdo ou para reduzir distrações. Quando possível, permita que as pessoas ocultem e mostrem a barra lateral usando as interações específicas da plataforma que já conhecem. Por exemplo, no iPadOS, as pessoas esperam usar o gesto integrado de deslizar a partir da borda; no macOS, você pode incluir um botão de mostrar/ocultar ou adicionar os comandos Mostrar barra lateral e Ocultar barra lateral ao menu Visualizar do seu app. No visionOS, uma janela normalmente se expande para acomodar uma barra lateral, então as pessoas raramente precisam ocultá-la. Evite ocultar a barra lateral por padrão, para garantir que ela continue descobrível.

**Em geral, mostre no máximo dois níveis de hierarquia em uma barra lateral.** Quando uma hierarquia de dados tem mais de dois níveis, considere usar uma interface de visualização dividida que inclua uma lista de conteúdo entre os itens da barra lateral e a visualização de detalhes.

**Se precisar incluir dois níveis de hierarquia em uma barra lateral, use rótulos sucintos e descritivos para intitular cada grupo.** Para ajudar a manter os rótulos curtos, omita palavras desnecessárias.

**Garanta que as cores dos ícones da barra lateral que você escolher tenham um propósito claro.** Por padrão, os ícones da barra lateral usam a [cor de destaque](https://developer.apple.com/design/human-interface-guidelines/color#App-accent-colors) do seu app. No macOS, as pessoas podem alterar a cor de destaque do sistema, que se aplica a todos os apps. Quando fazem isso, esperam que todos os ícones da barra lateral apareçam nessa cor, então garanta que os ícones da sua barra lateral exibam a cor escolhida pelas pessoas. No entanto, se usadas com moderação, cores fixas podem ajudar a esclarecer o significado de um ícone ou chamar atenção para ele. Por exemplo, o ícone VIP no Mail usa a cor amarela para diferenciá-lo dos outros ícones da barra lateral, oferecendo uma pista visual sobre sua importância.

## Considerações por plataforma

*Nenhuma consideração adicional para tvOS. Não é compatível com watchOS.*

### iOS, iPadOS

Ao usar o estilo [sidebarAdaptable](https://developer.apple.com/documentation/swiftui/tabviewstyle/sidebaradaptable) de visualização em abas para apresentar uma barra lateral, você escolhe se exibe uma barra lateral ou uma barra de abas quando seu app é aberto. Ambas as variações incluem um botão que as pessoas podem usar para alternar entre elas. Esse estilo também adapta sua aparência conforme a plataforma e responde automaticamente à rotação e ao redimensionamento da janela, oferecendo uma versão do controle apropriada à largura da visualização.

> **Nota para desenvolvedores:** Para exibir somente uma barra lateral, use [NavigationSplitView](https://developer.apple.com/documentation/swiftui/navigationsplitview) para apresentar uma barra lateral no painel principal de uma visualização dividida, ou use [UISplitViewController](https://developer.apple.com/documentation/uikit/uisplitviewcontroller).

**Considere usar uma barra de abas primeiro.** Uma barra de abas oferece mais espaço para destacar o conteúdo e flexibilidade suficiente para navegar entre as áreas principais de muitos apps. Se precisar expor mais áreas do que cabem em uma barra de abas, a aparência conversível no estilo de barra lateral da barra de abas pode dar acesso a conteúdos que as pessoas usam com menos frequência. Para orientações, consulte [Barras de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars).

**Se necessário, aplique a aparência correta a uma barra lateral.** Se você não estiver usando o SwiftUI para criar uma barra lateral, pode usar a aparência [UICollectionLayoutListConfiguration.Appearance.sidebar](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/sidebar) de um layout de lista de visualização em coleção. Para orientações aos desenvolvedores, consulte [UICollectionLayoutListConfiguration.Appearance](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum).

### macOS

A altura das linhas, o texto e o tamanho dos glifos de uma barra lateral dependem do seu tamanho geral, que pode ser pequeno, médio ou grande. Você pode definir o tamanho programaticamente, mas as pessoas também podem alterá-lo selecionando um tamanho diferente de ícone da barra lateral nos ajustes Geral.

**Considere ocultar e revelar automaticamente uma barra lateral quando a janela que a contém for redimensionada.** Por exemplo, reduzir o tamanho de uma janela de visualização do Mail pode recolher automaticamente sua barra lateral, abrindo mais espaço para o conteúdo das mensagens.

**Evite colocar informações ou ações críticas na parte inferior de uma barra lateral.** As pessoas costumam reposicionar uma janela de um modo que oculta sua borda inferior.

### visionOS

**Se a hierarquia do seu app for profunda, considere usar uma barra lateral dentro de uma aba de uma barra de abas.** Nessa situação, uma barra lateral pode oferecer suporte à navegação secundária dentro da aba. Se fizer isso, garanta que as seleções na barra lateral não mudem qual aba está aberta no momento.

![Uma captura de tela parcial do app Música no visionOS. A janela do app inclui uma barra lateral para navegar pela biblioteca de música, e o painel secundário inclui uma grade de playlists.](../../../images/sidebars/visionos-sidebar-music@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-sidebar-music@2x.png)*

## Recursos

#### Relacionados

[Visualizações divididas (Split views)](https://developer.apple.com/design/human-interface-guidelines/split-views)

[Barras de abas (Tab bars)](https://developer.apple.com/design/human-interface-guidelines/tab-bars)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Documentação para desenvolvedores

[sidebarAdaptable](https://developer.apple.com/documentation/swiftui/tabviewstyle/sidebaradaptable) — SwiftUI

[NavigationSplitView](https://developer.apple.com/documentation/swiftui/navigationsplitview) — SwiftUI

[sidebar](https://developer.apple.com/documentation/swiftui/liststyle/sidebar) — SwiftUI

[UICollectionLayoutListConfiguration](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct) — UIKit

[NSSplitViewController](https://developer.apple.com/documentation/appkit/nssplitviewcontroller) — AppKit

#### Vídeos

- [Elevate the design of your iPad app](https://developer.apple.com/videos/play/wwdc2025/208)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 8 de junho de 2026 | Atualizadas as orientações sobre cores de ícones da barra lateral e esclarecidas as orientações sobre o estilo de barra lateral adaptável. |
| 9 de junho de 2025 | Adicionadas orientações para estender o conteúdo por baixo da barra lateral. |
| 6 de agosto de 2024 | Atualizadas as orientações para incluir o estilo de barra lateral adaptável do SwiftUI. |
| 5 de dezembro de 2023 | Adicionada arte para iPadOS. |
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
