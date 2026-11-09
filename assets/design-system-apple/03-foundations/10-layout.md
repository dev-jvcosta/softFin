# Layout

> Fonte: https://developer.apple.com/design/human-interface-guidelines/layout
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um layout consistente que se adapta a diferentes tamanhos de tela, orientações e configurações de multitarefa ajuda as pessoas a entender e aproveitar seu app ou jogo em todos os seus dispositivos.*

![Um esboço de um pequeno retângulo no quadrante superior esquerdo de um retângulo maior, sugerindo a posição de um elemento da interface do usuário dentro de uma janela. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple de seis cores.](../../images/layout/foundations-layout-intro@2x.png) ![Um esboço de um pequeno retângulo no quadrante superior esquerdo de um retângulo maior, sugerindo a posição de um elemento da interface do usuário dentro de uma janela. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple de seis cores. (escuro)](../../images/layout/foundations-layout-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-layout-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-layout-intro~dark@2x.png)*

Seu layout fornece a estrutura para que as pessoas entendam seu conteúdo desde o momento em que abrem seu app. Relações familiares entre controles e conteúdo permitem que as pessoas usem e descubram recursos imediatamente e fazem seu design parecer natural em todas as plataformas.

A Apple fornece templates e guias de layout que podem ajudar você a integrar tecnologias da Apple e a projetar seus apps e jogos para rodar em todas as plataformas da Apple. Consulte [Apple Design Resources](https://developer.apple.com/design/resources/).

## Hierarquia visual

**Ordene o conteúdo por importância relativa.** As pessoas costumam começar visualizando o conteúdo na ordem de leitura, ou seja, de cima para baixo e do lado inicial para o final, então coloque os itens mais importantes perto do topo e do lado inicial da janela ou da tela. Para oferecer suporte a idiomas da direita para a esquerda, prefira componentes padrão do sistema que possam adaptar automaticamente os elementos da interface para refletir melhor a ordem de leitura natural de cada idioma. Para orientações, consulte [Da direita para a esquerda](https://developer.apple.com/design/human-interface-guidelines/right-to-left).

**Alinhe os elementos para facilitar a leitura dinâmica e use recuo para transmitir hierarquia.** O alinhamento faz um app parecer limpo e organizado e pode ajudar as pessoas a acompanhar o conteúdo ao rolar ou mover os olhos. As pessoas presumem que itens alinhados estão relacionados entre si e, inversamente, percebem itens recuados como subordinados ao item que os precede. Por isso, usar alinhamento e recuo de forma deliberada pode ajudar as pessoas a entender a hierarquia das suas informações.

**Agrupe itens relacionados para expressar claramente informações ou funções relacionadas.** Por exemplo, você pode usar espaço negativo, formas de contêiner ou linhas separadoras para mostrar quais elementos estão relacionados e quais não estão.

**Use a divulgação progressiva para tornar os layouts mais limpos e fáceis de interagir.** Uma interface com conteúdo e opções demais dificulta encontrar informações rapidamente e entender as opções disponíveis. Use triângulos de divulgação, menus ou visualizações aninhadas para reduzir a quantidade de conteúdo exibida inicialmente; ou use seções roláveis para exibir conteúdo adicional, o que é particularmente útil para apps voltados para mídia, como os de vídeo, música ou livros.

**Diferencie os controles do conteúdo.** Aproveite o material Liquid Glass em todas as plataformas que o suportam para dar uma aparência distinta aos seus controles. Em vez de aplicar uma cor de fundo sólida ou semiopaca abaixo dos controles, use um efeito de borda de rolagem para elevar visualmente os controles acima do conteúdo. Para orientações, consulte [Visualizações de rolagem](https://developer.apple.com/design/human-interface-guidelines/scroll-views). Para conteúdo de fundo em tela inteira, estenda-o por baixo das barras laterais, barras de ferramentas e barras de abas para preencher toda a tela ou janela.

Se escalar uma imagem de fundo até a borda da janela fizer com que componentes como barras laterais ou inspetores cubram partes importantes da imagem, você pode usar um efeito de extensão de fundo para inverter e desfocar a imagem, espelhando-a sob os componentes adjacentes e dando a aparência de que a imagem de fundo se estende por baixo deles. Para orientações para desenvolvedores, consulte [backgroundExtensionEffect()](https://developer.apple.com/documentation/swiftui/view/backgroundextensioneffect()) e [UIBackgroundExtensionView](https://developer.apple.com/documentation/uikit/uibackgroundextensionview).

![Uma captura de tela de um app de iPad em tela inteira com uma barra lateral na borda inicial. Uma foto do Monte Fuji preenche a metade superior da área de conteúdo. A foto desfoca sutilmente ao chegar ao topo da tela, onde itens da barra de ferramentas flutuam acima dela agrupados na borda final. Onde a foto encontra a barra lateral, a imagem é invertida, desfocada e se estende totalmente por baixo da barra lateral até a borda da tela.](../../images/layout/layout-background-extention-view@2x.png) ![Uma captura de tela de um app de iPad em tela inteira com uma barra lateral na borda inicial. Uma foto do Monte Fuji preenche a metade superior da área de conteúdo. A foto desfoca sutilmente ao chegar ao topo da tela, onde itens da barra de ferramentas flutuam acima dela agrupados na borda final. Onde a foto encontra a barra lateral, a imagem é invertida, desfocada e se estende totalmente por baixo da barra lateral até a borda da tela. (escuro)](../../images/layout/layout-background-extention-view~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/layout-background-extention-view@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/layout-background-extention-view~dark@2x.png)*

## Adaptabilidade

Apps e jogos precisam se adaptar a diferentes tamanhos de tela, mudanças de orientação, tamanhos de janela e estados de multitarefa. No iOS, iPadOS, tvOS e visionOS, o sistema define características do ambiente do dispositivo que podem afetar a aparência do seu app ou jogo. Use SwiftUI ou Auto Layout para garantir que sua interface se adapte a elas.

Estas são algumas das características de dispositivo e de sistema mais comuns que os apps precisam tratar:

- [Classes de tamanho](https://developer.apple.com/design/human-interface-guidelines/layout#Size-classes) horizontais e verticais regulares e compactas
- Diferentes tamanhos de tela de dispositivos
- Diferentes orientações e proporções de dispositivos
- Recursos do sistema como a Dynamic Island
- Suporte a tela externa, Zoom de Tela e janelas redimensionáveis no iPad e no Mac
- Alterações no tamanho do texto
- Recursos de internacionalização baseados na localidade, como direção de layout da esquerda para a direita/da direita para a esquerda, formatação de data/hora/número, variação de fonte e comprimento do texto

**Projete um layout que se adapte de forma elegante e consistente.** As pessoas esperam que sua experiência continue familiar quando giram o dispositivo, redimensionam uma janela, adicionam outra tela ou mudam para um dispositivo diferente. Você pode ajudar a garantir uma interface adaptável respeitando as áreas seguras, margens e guias definidas pelo sistema (quando disponíveis) e especificando modificadores de layout para ajustar com precisão o posicionamento das visualizações na sua interface.

Mesmo que seu app esteja bloqueado em uma determinada orientação, como um jogo somente em paisagem, ainda é importante garantir que sua interface seja redimensionada bem para oferecer a melhor experiência em diferentes dispositivos e tamanhos de janela.

**Esteja preparado para alterações no tamanho do texto.** As pessoas usam o [Dynamic Type](https://developer.apple.com/design/human-interface-guidelines/typography#Supporting-Dynamic-Type) para aumentar o tamanho do texto e torná-lo mais legível, o que ocorre no nível do sistema. Apps que não respondem a essa configuração podem ser difíceis ou impossíveis de usar para pessoas que dependem desse recurso. Ofereça suporte ao Dynamic Type ajustando seu layout para acomodar texto em tamanhos maiores. Por exemplo, visualizações adjacentes na horizontal podem precisar ser empilhadas verticalmente para dar mais espaço ao texto; linhas de tabela ou outros contêineres podem precisar crescer em altura para que o texto não seja cortado nem sobreponha outro conteúdo; e linhas de tabela com uma única linha de texto por padrão podem precisar crescer verticalmente para acomodar várias linhas de texto.

Para oferecer suporte ao Dynamic Type no seu jogo baseado em Unity, use o plug-in de acessibilidade da Apple (para orientações para desenvolvedores, consulte [Apple – Accessibility](https://github.com/apple/unityplugins/blob/main/plug-ins/Apple.Accessibility/Apple.Accessibility_Unity/Assets/Apple.Accessibility/Documentation~/Apple.Accessibility.md)). Para orientações sobre como exibir texto no seu app, consulte [Tipografia](https://developer.apple.com/design/human-interface-guidelines/typography).

**Visualize seu app em vários dispositivos, usando diferentes classes de tamanho, localizações e tamanhos de texto.** Você pode simplificar o processo de teste testando primeiro as versões da sua experiência que usam os maiores e os menores layouts. Você pode testar em um dispositivo simulado no [Device Hub](https://developer.apple.com/documentation/xcode/device-hub) para verificar cortes e outros problemas de layout. Por exemplo, você pode usar o Device Hub para garantir que seu layout fique ótimo quando seu app é redimensionado no iPad ou no Espelhamento do iPhone no Mac.

**Quando necessário, escale a arte de fundo em resposta a mudanças na tela.** Visualizar seu app ou jogo em um contexto diferente, como em uma tela com proporção diferente, pode fazer sua arte parecer cortada ou com faixas pretas (letterbox ou pillarbox). Se isso acontecer, não altere a proporção da arte; em vez disso, escale-a para que preencha completamente a tela. Observe que, como as janelas podem ser muito largas e baixas ou altas e estreitas, a arte de fundo muitas vezes pode precisar se estender além do que normalmente é visível em uma proporção de tela mais padrão.

### Classes de tamanho

No iOS e no iPadOS, as classes de tamanho são uma indicação de quanto espaço horizontal e vertical está disponível para a interface de um app.

Cada dimensão, horizontal e vertical, é representada por uma de duas classes de tamanho: *compacta* ou *regular*. A classe de tamanho horizontal determina se um app é estreito (compacta) ou largo (regular), enquanto a classe de tamanho vertical determina se ele é baixo (compacta) ou alto (regular).

O sistema define as classes de tamanho com base no tipo de dispositivo, na configuração da [janela](https://developer.apple.com/design/human-interface-guidelines/windows) e no estado de [multitarefa](https://developer.apple.com/design/human-interface-guidelines/multitasking); por exemplo, se um app está em tela inteira, no Slide Over ou espelhado de um iPhone para um Mac. Dependendo do ambiente, apps iOS e iPadOS podem existir em todas as combinações de classes de tamanho.

![Uma ilustração de um iPad na orientação paisagem com uma janela de app vazia no centro da tela. A janela é estreita e baixa e ocupa cerca de um quarto da tela.](../../images/layout/app-layout-square@2x.png) ![Uma ilustração de um iPad na orientação paisagem com uma janela de app vazia no centro da tela. A janela é estreita e baixa e ocupa cerca de um quarto da tela. (escuro)](../../images/layout/app-layout-square~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-layout-square@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-layout-square~dark@2x.png)*

![Uma ilustração de um iPad na orientação paisagem com uma janela de app vazia no centro da tela. A janela é estreita e alta e ocupa cerca de metade da tela.](../../images/layout/app-layout-vertical@2x.png) ![Uma ilustração de um iPad na orientação paisagem com uma janela de app vazia no centro da tela. A janela é estreita e alta e ocupa cerca de metade da tela. (escuro)](../../images/layout/app-layout-vertical~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-layout-vertical@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-layout-vertical~dark@2x.png)*

![Uma ilustração de um iPad na orientação paisagem com uma janela de app vazia no centro da tela. A janela é larga e baixa e ocupa cerca de metade da tela.](../../images/layout/app-layout-horizontal@2x.png) ![Uma ilustração de um iPad na orientação paisagem com uma janela de app vazia no centro da tela. A janela é larga e baixa e ocupa cerca de metade da tela. (escuro)](../../images/layout/app-layout-horizontal~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-layout-horizontal@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-layout-horizontal~dark@2x.png)*

![Uma ilustração de um iPad na orientação paisagem com uma janela de app vazia no centro da tela. A janela é larga e alta e ocupa a maior parte da tela.](../../images/layout/app-layout-full@2x.png) ![Uma ilustração de um iPad na orientação paisagem com uma janela de app vazia no centro da tela. A janela é larga e alta e ocupa a maior parte da tela. (escuro)](../../images/layout/app-layout-full~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-layout-full@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-layout-full~dark@2x.png)*

Para orientações para desenvolvedores, consulte [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94) e [UserInterfaceSizeClass](https://developer.apple.com/documentation/swiftui/userinterfacesizeclass).

**Determine o layout com base nas classes de tamanho, não no tipo de dispositivo ou na orientação.** As classes de tamanho descrevem o espaço real disponível, independentemente de o app estar em retrato ou paisagem. Por outro lado, a orientação e o tipo de dispositivo (também chamado de *idiom*) não são úteis para tomar decisões de layout, pois não fornecem ao app informações sobre quanto espaço está disponível.

As classes de tamanho também permitem que a interface do seu app se adapte a uma ampla gama de tamanhos de janela. Por exemplo, quando uma pessoa executa seu app no macOS com o Espelhamento do iPhone, ela pode redimensionar livremente sua largura e altura; ou pode redimensionar um app de iPad ao fazer multitarefa no iPadOS ou ao executá-lo no macOS.

**Considere todas as combinações possíveis de classes de tamanho.** Seu app pode aparecer em diversas classes de tamanho, tanto em proporções retrato quanto paisagem, e é importante considerar todas elas para oferecer uma boa experiência. Um layout projetado apenas para paisagem no iPhone, com largura regular e altura compacta, pode não aproveitar o espaço vertical disponível no iPad em paisagem quando alguém redimensiona a janela para altura regular. Inversamente, projetar exclusivamente para retrato compacto pode deixar espaço sobrando quando alguém redimensiona a janela do app para largura regular no iPad.

**Mantenha a funcionalidade igual à medida que as classes de tamanho mudam e mantenha as mudanças de layout reconhecíveis e familiares para a plataforma.** Não altere a funcionalidade do seu app com base no espaço que ele ocupa. No entanto, você pode alterar a quantidade de funcionalidade visível na tela conforme a quantidade de espaço muda. Considere aproveitar espaços maiores para passar de uma [barra de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars) para uma [barra lateral](https://developer.apple.com/design/human-interface-guidelines/sidebars) ou para expor funcionalidades que de outra forma poderiam ser agrupadas em um menu de estouro.

Da mesma forma, embora as classes de tamanho de um app possam mudar quando alguém o redimensiona, seu idiom, o tipo de dispositivo para o qual ele foi feito, permanece o mesmo: mantenha o layout reconhecível e familiar para a plataforma mesmo ao redimensionar.

## Guias e áreas seguras

Um *guia de layout* define uma região retangular que ajuda você a posicionar, alinhar e espaçar o conteúdo na tela. O sistema inclui guias de layout predefinidos que facilitam aplicar margens padrão ao redor do conteúdo e restringir a largura do texto para uma legibilidade ideal. Você também pode definir guias de layout personalizados. Para orientações para desenvolvedores, consulte [UILayoutGuide](https://developer.apple.com/documentation/uikit/uilayoutguide) e [NSLayoutGuide](https://developer.apple.com/documentation/appkit/nslayoutguide).

Uma *área segura* define a área dentro de uma janela que não é coberta na borda por um recurso de hardware ou por outra visualização dentro da janela, como uma barra de ferramentas, barra de abas ou barra de status. Respeitar a área segura é essencial para garantir que a interface do sistema e recursos de hardware como a Dynamic Island não obstruam o conteúdo e os controles. Para orientações para desenvolvedores, consulte [SafeAreaRegions](https://developer.apple.com/documentation/swiftui/safearearegions) e [Positioning content relative to the safe area](https://developer.apple.com/documentation/uikit/positioning-content-relative-to-the-safe-area).

## Considerações por plataforma

*Nenhuma consideração adicional para iOS ou iPadOS.*

### macOS

**Evite colocar controles ou informações críticas na parte inferior de uma janela.** As pessoas costumam mover as janelas de modo que a borda inferior fique abaixo da parte inferior da tela.

**Evite exibir conteúdo atrás do recorte da câmera na borda superior da janela.** Para orientações para desenvolvedores, consulte [NSPrefersDisplaySafeAreaCompatibilityMode](https://developer.apple.com/documentation/bundleresources/information-property-list/nsprefersdisplaysafeareacompatibilitymode).

### tvOS

**Respeite a área segura da tela.** Recue o conteúdo principal 60 pontos do topo e da parte inferior da tela e 80 pontos das laterais. Fornecer essas margens garante que seu conteúdo fique visível independentemente das configurações de compatibilidade da TV ou do corte por overscan.

![Uma ilustração de uma TV com uma borda de zona segura em todos os lados. Em largura, as bordas superior e inferior medem 60 pontos e as bordas laterais medem 80 pontos.](../../images/layout/visual-design-safe-zone@2x.png) ![Uma ilustração de uma TV com uma borda de zona segura em todos os lados. Em largura, as bordas superior e inferior medem 60 pontos e as bordas laterais medem 80 pontos. (escuro)](../../images/layout/visual-design-safe-zone~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-safe-zone@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-safe-zone~dark@2x.png)*

**Inclua um espaçamento apropriado entre elementos focalizáveis.** Quando você usa o UIKit e as APIs de foco, um elemento aumenta de tamanho quando recebe foco. Considere a aparência dos elementos quando estão em foco e certifique-se de não deixá-los sobrepor informações importantes. Para orientações para desenvolvedores, consulte [About focus interactions for Apple TV](https://developer.apple.com/documentation/uikit/about-focus-interactions-for-apple-tv).

![Uma ilustração que usa retângulos verticais sombreados para mostrar o espaçamento entre itens focalizáveis.](../../images/layout/visual-design-padding@2x.png) ![Uma ilustração que usa retângulos verticais sombreados para mostrar o espaçamento entre itens focalizáveis. (escuro)](../../images/layout/visual-design-padding~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-padding@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-padding~dark@2x.png)*

#### Grades

Os layouts de grade a seguir proporcionam uma experiência de visualização ideal. Use um espaçamento apropriado entre linhas e colunas sem foco para evitar sobreposição quando um item receber foco.

Se você usar o elemento de fluxo de coleção do UIKit, o número de colunas em uma grade é determinado automaticamente com base na largura e no espaçamento do conteúdo. Para orientações para desenvolvedores, consulte [UICollectionViewFlowLayout](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout).

**Duas colunas**

![Uma ilustração da Apple TV, exibindo uma grade de duas colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito e na borda inferior da tela.](../../images/layout/visual-design-grid-2-column@2x.png) ![Uma ilustração da Apple TV, exibindo uma grade de duas colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito e na borda inferior da tela. (escuro)](../../images/layout/visual-design-grid-2-column~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-2-column@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-2-column~dark@2x.png)*

#### Grade de duas colunas

| Atributo | Valor |
|---|---|
| Largura do conteúdo sem foco | 860 pt |
| Espaçamento horizontal | 40 pt |
| Espaçamento vertical mínimo | 100 pt |

**Três colunas**

![Uma ilustração da Apple TV, exibindo uma grade de três colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito e na borda inferior da tela.](../../images/layout/visual-design-grid-3-column@2x.png) ![Uma ilustração da Apple TV, exibindo uma grade de três colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito e na borda inferior da tela. (escuro)](../../images/layout/visual-design-grid-3-column~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-3-column@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-3-column~dark@2x.png)*

#### Grade de três colunas

| Atributo | Valor |
|---|---|
| Largura do conteúdo sem foco | 560 pt |
| Espaçamento horizontal | 40 pt |
| Espaçamento vertical mínimo | 100 pt |

**Quatro colunas**

![Uma ilustração da Apple TV, exibindo uma grade de quatro colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito da tela.](../../images/layout/visual-design-grid-4-column@2x.png) ![Uma ilustração da Apple TV, exibindo uma grade de quatro colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito da tela. (escuro)](../../images/layout/visual-design-grid-4-column~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-4-column@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-4-column~dark@2x.png)*

#### Grade de quatro colunas

| Atributo | Valor |
|---|---|
| Largura do conteúdo sem foco | 410 pt |
| Espaçamento horizontal | 40 pt |
| Espaçamento vertical mínimo | 100 pt |

**Cinco colunas**

![Uma ilustração da Apple TV, exibindo uma grade de cinco colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito e na borda inferior da tela.](../../images/layout/visual-design-grid-5-column@2x.png) ![Uma ilustração da Apple TV, exibindo uma grade de cinco colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito e na borda inferior da tela. (escuro)](../../images/layout/visual-design-grid-5-column~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-5-column@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-5-column~dark@2x.png)*

#### Grade de cinco colunas

| Atributo | Valor |
|---|---|
| Largura do conteúdo sem foco | 320 pt |
| Espaçamento horizontal | 40 pt |
| Espaçamento vertical mínimo | 100 pt |

**Seis colunas**

![Uma ilustração da Apple TV, exibindo uma grade de seis colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito e na borda inferior da tela.](../../images/layout/visual-design-grid-6-column@2x.png) ![Uma ilustração da Apple TV, exibindo uma grade de seis colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito e na borda inferior da tela. (escuro)](../../images/layout/visual-design-grid-6-column~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-6-column@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-6-column~dark@2x.png)*

#### Grade de seis colunas

| Atributo | Valor |
|---|---|
| Largura do conteúdo sem foco | 260 pt |
| Espaçamento horizontal | 40 pt |
| Espaçamento vertical mínimo | 100 pt |

**Sete colunas**

![Uma ilustração da Apple TV, exibindo uma grade de sete colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito da tela.](../../images/layout/visual-design-grid-7-column@2x.png) ![Uma ilustração da Apple TV, exibindo uma grade de sete colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito da tela. (escuro)](../../images/layout/visual-design-grid-7-column~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-7-column@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-7-column~dark@2x.png)*

#### Grade de sete colunas

| Atributo | Valor |
|---|---|
| Largura do conteúdo sem foco | 217 pt |
| Espaçamento horizontal | 40 pt |
| Espaçamento vertical mínimo | 100 pt |

**Oito colunas**

![Uma ilustração da Apple TV, exibindo uma grade de oito colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito e na borda inferior da tela.](../../images/layout/visual-design-grid-8-column@2x.png) ![Uma ilustração da Apple TV, exibindo uma grade de oito colunas de itens de mídia. Itens de mídia adicionais ficam parcialmente visíveis no lado direito e na borda inferior da tela. (escuro)](../../images/layout/visual-design-grid-8-column~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-8-column@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-8-column~dark@2x.png)*

#### Grade de oito colunas

| Atributo | Valor |
|---|---|
| Largura do conteúdo sem foco | 184 pt |
| Espaçamento horizontal | 40 pt |
| Espaçamento vertical mínimo | 100 pt |

**Nove colunas**

![Uma ilustração da Apple TV, exibindo uma grade de nove colunas de itens de mídia.](../../images/layout/visual-design-grid-9-column@2x.png) ![Uma ilustração da Apple TV, exibindo uma grade de nove colunas de itens de mídia. (escuro)](../../images/layout/visual-design-grid-9-column~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-9-column@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visual-design-grid-9-column~dark@2x.png)*

#### Grade de nove colunas

| Atributo | Valor |
|---|---|
| Largura do conteúdo sem foco | 160 pt |
| Espaçamento horizontal | 40 pt |
| Espaçamento vertical mínimo | 100 pt |

**Inclua espaçamento vertical adicional para linhas com título.** Se uma linha tem um título, forneça espaçamento suficiente entre a parte inferior da linha anterior sem foco e o centro do título para evitar aglomeração. Forneça também espaçamento entre a parte inferior do título e a parte superior dos itens sem foco da linha.

**Use espaçamento consistente.** Quando o conteúdo não tem espaçamento consistente, ele deixa de parecer uma grade e fica mais difícil para as pessoas o examinarem.

**Faça o conteúdo parcialmente oculto parecer simétrico.** Para ajudar a direcionar a atenção ao conteúdo totalmente visível, mantenha o conteúdo parcialmente oculto fora da tela com a mesma largura em cada lado da tela.

### visionOS

No visionOS, você pode dispor o conteúdo dentro de uma janela, de um volume 3D delimitado ou de um espaço imersivo. As orientações abaixo se concentram em dispor o conteúdo em uma janela ou volume; para orientações sobre como exibir conteúdo espacialmente e boas práticas para usar profundidade, escala e posicionamento, consulte [Layout espacial](https://developer.apple.com/design/human-interface-guidelines/spatial-layout). Para saber mais sobre janelas e volumes no visionOS, consulte [Janelas > visionOS](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS).

**Em geral, ofereça suporte ao redimensionamento.** A capacidade de redimensionar janelas e volumes é um comportamento padrão no visionOS, assim como no macOS e no iPadOS. Quando você permite o redimensionamento, certifique-se de que seu layout se adapte bem à mudança de tamanho e prefira manter o conteúdo centralizado horizontalmente em tamanhos muito grandes, para que as pessoas possam vê-lo e interagir com ele facilmente.

Você também pode optar por definir um tamanho mínimo e máximo para janelas, volumes e elementos de interface anexados, como ornamentos. Use essas configurações para evitar que os elementos se sobreponham em tamanhos pequenos e para evitar que layouts grandes se tornem difíceis de manejar; mas não use tamanhos mínimos e máximos como forma de impedir o redimensionamento. Por exemplo, no Safari, as pessoas podem redimensionar janelas do navegador, mas o ornamento personalizado da barra de navegação tem um tamanho máximo fixo para que os controles continuem fáceis de acessar. Para orientações para desenvolvedores, consulte [Positioning and sizing windows](https://developer.apple.com/documentation/visionos/positioning-and-sizing-windows).

**Use conteúdo 3D com moderação nas janelas.** Embora as janelas no visionOS possam exibir conteúdo 3D em uma profundidade fixa, reserve isso para momentos significativos ao lado de conteúdo 2D. Por exemplo, um app educacional pode exibir um modelo 3D de um foguete em linha, ao lado de informações sobre o modelo. Ao exibir conteúdo 3D em linha, posicione-o recuado dentro da janela para evitar que colida com outro conteúdo ou controles, ou apareça de forma imprevisível fora da borda da janela.

Para exibir modelos maiores ou visualizações que consistem principalmente em conteúdo 3D, considere usar um volume ou posicionar o conteúdo em um espaço imersivo.

**Exiba o conteúdo complementar em uma janela adjacente, não em um ornamento.** Embora os [ornamentos](https://developer.apple.com/design/human-interface-guidelines/ornaments) sejam flexíveis o bastante para atuar como componentes personalizados, eles são mais adequados para controles interativos específicos do app, como barras de ferramentas e controles de reprodução de vídeo, e não para conteúdo complementar. Para exibir uma visualização de conteúdo complementar, abra uma nova janela ao lado da atual usando [defaultWindowPlacement(_:)](https://developer.apple.com/documentation/swiftui/scene/defaultwindowplacement(_:)) em vez de colocar o conteúdo em um ornamento. Para orientações para desenvolvedores, consulte [Positioning and sizing windows](https://developer.apple.com/documentation/visionos/positioning-and-sizing-windows).

**Inclua espaço suficiente ao redor dos controles para que sejam fáceis de usar.** Coloque espaço suficiente ao redor dos controles para torná-los claramente identificáveis e para evitar que o efeito de foco fornecido pelo sistema obscureça outro conteúdo. Por exemplo, posicione os botões de modo que seus centros fiquem a pelo menos 60 pontos de distância. Para orientações, consulte [Olhos](https://developer.apple.com/design/human-interface-guidelines/eyes), [Layout espacial](https://developer.apple.com/design/human-interface-guidelines/spatial-layout) e [Botões > visionOS](https://developer.apple.com/design/human-interface-guidelines/buttons#visionOS).

### watchOS

**Evite colocar mais de dois ou três controles lado a lado na sua interface.** Como regra geral, exiba no máximo três botões que contenham glifos, ou dois botões que contenham texto, em uma linha. Embora geralmente seja melhor deixar os botões de texto ocuparem toda a largura da tela, dois botões lado a lado com rótulos de texto curtos também podem funcionar bem, desde que a tela não role.

![Um diagrama de uma tela do Apple Watch mostrando dois botões lado a lado abaixo de três linhas de texto.](../../images/layout/layout-controls@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/layout-controls@2x.png)*

**Ofereça suporte à rotação automática em visualizações que as pessoas possam querer mostrar a outras.** Quando as pessoas afastam o pulso, os apps normalmente respondem ao movimento suspendendo a tela, mas em alguns casos faz sentido girar o conteúdo automaticamente. Por exemplo, quem usa o relógio pode querer mostrar uma imagem a um amigo ou exibir um código QR para um leitor. Para orientações para desenvolvedores, consulte [isAutorotating](https://developer.apple.com/documentation/watchkit/wkextension/isautorotating).

## Recursos

#### Relacionados

[Da direita para a esquerda](https://developer.apple.com/design/human-interface-guidelines/right-to-left)

[Layout espacial](https://developer.apple.com/design/human-interface-guidelines/spatial-layout)

[Layout e organização](https://developer.apple.com/design/human-interface-guidelines/layout-and-organization)

#### Documentação para desenvolvedores

[Composing custom layouts with SwiftUI](https://developer.apple.com/documentation/swiftui/composing-custom-layouts-with-swiftui) — SwiftUI

#### Vídeos

- [Get to know the new design system](https://developer.apple.com/videos/play/wwdc2025/356)
- [Compose custom layouts with SwiftUI](https://developer.apple.com/videos/play/wwdc2022/10056)
- [Essential Design Principles](https://developer.apple.com/videos/play/wwdc2017/802)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de setembro de 2026 | Orientações atualizadas para refletir as boas práticas atuais. |
| 9 de setembro de 2025 | Adicionadas especificações para iPhone 17, iPhone Air, iPhone 17 Pro, iPhone 17 Pro Max, Apple Watch SE 3, Apple Watch Series 11 e Apple Watch Ultra 3. |
| 9 de junho de 2025 | Adicionadas orientações para o Liquid Glass. |
| 7 de março de 2025 | Adicionadas especificações para iPhone 16e, iPad 11 polegadas, iPad Air 11 polegadas e iPad Air 13 polegadas. |
| 9 de setembro de 2024 | Adicionadas especificações para iPhone 16, iPhone 16 Plus, iPhone 16 Pro, iPhone 16 Pro Max e Apple Watch Series 10. |
| 10 de junho de 2024 | Feitas pequenas correções e atualizações organizacionais. |
| 2 de fevereiro de 2024 | Orientações aprimoradas para evitar controles do sistema em layouts de apps iPadOS e adicionadas especificações para o iPad Air de 10,9 polegadas e o iPad mini de 8,3 polegadas. |
| 5 de dezembro de 2023 | Esclarecidas as orientações sobre centralização de conteúdo em uma janela do visionOS. |
| 15 de setembro de 2023 | Adicionadas especificações para iPhone 15 Pro Max, iPhone 15 Pro, iPhone 15 Plus, iPhone 15, Apple Watch Ultra 2 e Apple Watch SE. |
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
| 14 de setembro de 2022 | Adicionadas especificações para iPhone 14 Pro Max, iPhone 14 Pro, iPhone 14 Plus, iPhone 14 e Apple Watch Ultra. |
