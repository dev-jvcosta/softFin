# Controles de página (Page controls)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/page-controls
>
> Plataformas: ios,ipados,tvos,visionos,watchos

*Um controle de página exibe uma fileira de imagens indicadoras, cada uma representando uma página em uma lista plana.*

![Uma representação estilizada de um controle de página com um indicador que marca a página ativa. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple.](../../../images/page-controls/components-page-dots-intro@2x.png) ![Uma representação estilizada de um controle de página com um indicador que marca a página ativa. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple. (escuro)](../../../images/page-controls/components-page-dots-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-page-dots-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-page-dots-intro~dark@2x.png)*

A fileira rolável de indicadores ajuda as pessoas a navegar pela lista para encontrar a página que desejam. Os controles de página podem lidar com um número arbitrário de páginas, o que os torna particularmente úteis em situações em que as pessoas podem criar listas personalizadas.

Por padrão, os controles de página aparecem como uma série de pequenos pontos indicadores, representando as páginas disponíveis. Um ponto sólido marca a página atual. Visualmente, esses pontos são sempre equidistantes e são cortados se houver pontos demais para caber na janela.

## Boas práticas

**Use controles de página para representar o movimento entre uma lista ordenada de páginas.** Os controles de página não representam relações hierárquicas ou não sequenciais entre páginas. Para uma navegação mais complexa, considere usar uma barra lateral ou uma visualização dividida.

**Centralize um controle de página na parte inferior da visualização ou janela.** Para garantir que as pessoas sempre saibam onde encontrar um controle de página, centralize-o horizontalmente e posicione-o perto da parte inferior da visualização.

**Embora os controles de página possam lidar com qualquer número de páginas, não exiba páginas demais.** Mais de cerca de 10 pontos são difíceis de contar num relance. Se o seu app precisar exibir mais de 10 páginas como pares, considere usar um arranjo diferente, como uma grade, que permita às pessoas navegar pelo conteúdo em qualquer ordem.

## Personalizando indicadores

Por padrão, um controle de página usa a imagem de ponto fornecida pelo sistema para todos os indicadores, mas também pode exibir uma imagem exclusiva para ajudar as pessoas a identificar uma página específica. Por exemplo, o Tempo usa o símbolo `location.fill` para distinguir a página da localização atual.

Se isso aprimorar o seu app ou jogo, você pode fornecer uma imagem personalizada para usar como imagem padrão de todos os indicadores e também pode fornecer uma imagem diferente para uma página específica. Para orientações voltadas a desenvolvedores, consulte [preferredIndicatorImage](https://developer.apple.com/documentation/uikit/uipagecontrol/preferredindicatorimage) e [setIndicatorImage(_:forPage:)](https://developer.apple.com/documentation/uikit/uipagecontrol/setindicatorimage(_:forpage:)).

**Garanta que as imagens de indicador personalizadas sejam simples e claras.** Evite formas complexas e não inclua espaço negativo, texto ou linhas internas, pois esses detalhes podem deixar um ícone borrado e indecifrável em tamanhos muito pequenos. Considere usar [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) simples como indicadores ou projetar seus próprios ícones. Para orientações, consulte [Ícones](https://developer.apple.com/design/human-interface-guidelines/icons).

**Personalize a imagem de indicador padrão somente quando isso aprimorar o significado geral do controle de página.** Por exemplo, se todas as páginas que você lista contêm favoritos, você pode usar o símbolo `bookmark.fill` como imagem de indicador padrão.

**Evite usar mais de duas imagens de indicador diferentes em um controle de página.** Se a sua lista contém uma página com significado especial — como a página da localização atual no Tempo —, você pode facilitar a localização dela dando-lhe uma imagem de indicador exclusiva. Em contrapartida, um controle de página que usa várias imagens exclusivas para marcar várias páginas importantes é difícil de usar, porque as pessoas precisam memorizar o significado de cada imagem. Um controle de página que exibe mais de dois tipos de imagens de indicador tende a parecer bagunçado e aleatório, mesmo quando cada imagem é clara.

![Uma ilustração que representa o app Tempo com destaque para um controle de página na borda inferior da tela. O controle de página exibe uma mistura de ícones, como sol fraco, nuvem, nuvem com sol e nuvem com garoa.](../../../images/page-controls/page-indicator-customization-incorrect@2x.png) ![Uma ilustração que representa o app Tempo com destaque para um controle de página na borda inferior da tela. O controle de página exibe uma mistura de ícones, como sol fraco, nuvem, nuvem com sol e nuvem com garoa. (escuro)](../../../images/page-controls/page-indicator-customization-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/page-indicator-customization-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/page-indicator-customization-incorrect~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../../images/page-controls/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração que representa o app Tempo com destaque para um controle de página na borda inferior da tela. O controle de página exibe o símbolo de localização no lado inicial seguido de uma série de pontos.](../../../images/page-controls/page-indicator-customization-correct@2x.png) ![Uma ilustração que representa o app Tempo com destaque para um controle de página na borda inferior da tela. O controle de página exibe o símbolo de localização no lado inicial seguido de uma série de pontos. (escuro)](../../../images/page-controls/page-indicator-customization-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/page-indicator-customization-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/page-indicator-customization-correct~dark@2x.png)*

![Uma marca de verificação em um círculo para indicar um exemplo correto.](../../../images/page-controls/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Evite colorir as imagens de indicador.** Cores personalizadas podem reduzir o contraste que diferencia o indicador da página atual e torna o controle de página visível na tela. Para garantir que o seu controle de página seja fácil de usar e tenha boa aparência em diferentes contextos, deixe o sistema colorir os indicadores automaticamente.

## Considerações por plataforma

*Sem suporte no macOS.*

### iOS, iPadOS

Um controle de página pode ajustar a aparência dos indicadores para fornecer mais informações sobre a lista. Por exemplo, o controle destaca o indicador da página atual para que as pessoas possam estimar a posição relativa da página na lista. Quando há mais indicadores do que cabem no espaço, o controle pode reduzir os indicadores em ambos os lados para sugerir que há mais páginas disponíveis.

![Uma ilustração de um controle de página. O controle de página exibe um total de 9 pontos. Os 5 pontos centrais usam o tamanho padrão; o segundo e o oitavo pontos têm cerca de metade do tamanho padrão e o primeiro e o nono pontos têm cerca de um quarto do tamanho padrão. O ponto central está preenchido, indicando a posição da página atual na lista.](../../../images/page-controls/page-controls-many-indicators@2x.png) ![Uma ilustração de um controle de página. O controle de página exibe um total de 9 pontos. Os 5 pontos centrais usam o tamanho padrão; o segundo e o oitavo pontos têm cerca de metade do tamanho padrão e o primeiro e o nono pontos têm cerca de um quarto do tamanho padrão. O ponto central está preenchido, indicando a posição da página atual na lista. (escuro)](../../../images/page-controls/page-controls-many-indicators~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/page-controls-many-indicators@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/page-controls-many-indicators~dark@2x.png)*

As pessoas interagem com os controles de página tocando ou arrastando (para *arrastar*, as pessoas tocam no controle e arrastam para a esquerda ou para a direita). Tocar no lado inicial ou final do indicador da página atual revela a página seguinte ou anterior; no iPadOS, as pessoas também podem usar o ponteiro para escolher um indicador específico. Arrastar abre as páginas em sequência, e arrastar além da borda inicial ou final do controle ajuda as pessoas a chegar rapidamente à primeira ou à última página.

> **Nota para desenvolvedores:** Na API, *tocar* é uma *interação discreta*, enquanto *arrastar* é uma *interação contínua*; para orientações voltadas a desenvolvedores, consulte [UIPageControl.InteractionState](https://developer.apple.com/documentation/uikit/uipagecontrol/interactionstate-swift.enum).

**Evite animar as transições de página durante o arrasto.** As pessoas podem arrastar muito rapidamente, e usar a animação de rolagem em cada transição pode fazer o seu app travar e causar flashes visuais que distraem. Use a transição de rolagem animada apenas para o toque.

Um controle de página pode incluir uma aparência de fundo translúcido em retângulo arredondado que oferece contraste visual para os indicadores. Você pode escolher um dos seguintes estilos de fundo:

- Automático — Exibe o fundo somente quando as pessoas interagem com o controle. Use este estilo quando o controle de página não for o elemento de navegação principal da interface.
- Proeminente — Sempre exibe o fundo. Use este estilo somente quando o controle for o controle de navegação principal da tela.
- Mínimo — Nunca exibe o fundo. Use este estilo quando você só quiser mostrar a posição da página atual na lista e não precisar fornecer feedback visual durante o arrasto.

Para orientações voltadas a desenvolvedores, consulte [backgroundStyle](https://developer.apple.com/documentation/uikit/uipagecontrol/backgroundstyle-swift.property).

**Evite oferecer suporte ao arrasto quando usar o estilo de fundo mínimo.** O estilo mínimo não fornece feedback visual durante o arrasto. Se você quiser permitir que as pessoas percorram uma lista de páginas no seu app arrastando, use os estilos de fundo automático ou proeminente.

### tvOS

**Use controles de página em coleções de páginas em tela inteira.** Um controle de página foi projetado para operar em um ambiente de tela inteira, em que várias páginas ricas em conteúdo são pares na hierarquia de páginas. A inclusão de controles adicionais dificulta manter o foco ao se mover entre as páginas.

### visionOS

No visionOS, os controles de página representam as páginas disponíveis e indicam a página atual, mas as pessoas não interagem com eles.

### watchOS

No watchOS, os controles de página podem ser exibidos na parte inferior da tela para paginação horizontal ou ao lado da Digital Crown ao apresentar uma [visualização de abas](https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/tab-views) vertical. Ao usar visualizações de abas verticais, o indicador de página mostra às pessoas onde elas estão na navegação, tanto dentro da página atual quanto dentro do conjunto de páginas. O controle de página alterna entre rolar pelo conteúdo de uma página e rolar para outras páginas.

![Uma ilustração que representa uma tela que inclui uma visualização de abas vertical no Apple Watch. Um controle de página ao lado da Digital Crown mostra que a quarta aba está selecionada no momento.](../../../images/page-controls/page-controls-watch-vertical@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/page-controls-watch-vertical@2x.png)*

![Uma ilustração que representa uma tela que inclui uma visualização de abas horizontal no Apple Watch. Um controle de página na parte inferior mostra que a segunda aba está selecionada no momento.](../../../images/page-controls/page-controls-watch-horizontal@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/page-controls-watch-horizontal@2x.png)*

**Use paginação vertical para separar várias visualizações em páginas distintas e com propósito.** Dê a cada página um propósito claro e permita que as pessoas percorram as páginas usando a Digital Crown. No watchOS, esse design é mais eficaz do que a paginação horizontal ou muitos níveis de navegação hierárquica.

**Considere limitar o conteúdo de cada página à altura de uma única tela.** Adotar essa restrição incentiva cada página a ter um propósito claro e distinto e resulta em um design mais fácil de ver num relance. Use páginas de altura variável com critério e, se possível, posicione-as somente depois de páginas de altura fixa no design do seu app.

## Recursos

#### Relacionados

[Visualizações de rolagem](https://developer.apple.com/design/human-interface-guidelines/scroll-views)

#### Documentação para desenvolvedores

[PageTabViewStyle](https://developer.apple.com/documentation/swiftui/pagetabviewstyle) — SwiftUI

[UIPageControl](https://developer.apple.com/documentation/uikit/uipagecontrol) — UIKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
| 5 de junho de 2023 | Orientações atualizadas para o uso de controles de página no watchOS. |
