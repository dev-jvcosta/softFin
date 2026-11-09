# Materiais (Materials)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/materials
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um material é um efeito visual que cria uma sensação de profundidade, camadas e hierarquia entre elementos de primeiro plano e de fundo.*

![Um esboço de uma forma de cápsula sobrepondo um quadrado. Uma sutil curvatura nas bordas do quadrado que ficam sob a cápsula sugere a sobreposição do material Liquid Glass ao conteúdo de fundo. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple, de seis cores.](../../images/materials/foundations-materials-intro@2x.png) ![Um esboço de uma forma de cápsula sobrepondo um quadrado. Uma sutil curvatura nas bordas do quadrado que ficam sob a cápsula sugere a sobreposição do material Liquid Glass ao conteúdo de fundo. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple, de seis cores. (escuro)](../../images/materials/foundations-materials-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-materials-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-materials-intro~dark@2x.png)*

Os materiais ajudam a separar visualmente elementos de primeiro plano, como texto e controles, de elementos de fundo, como conteúdo e cores sólidas. Ao permitir que a cor passe do fundo para o primeiro plano, um material estabelece uma hierarquia visual que ajuda as pessoas a manter com mais facilidade a noção de onde estão.

As plataformas da Apple apresentam dois tipos de materiais: Liquid Glass e materiais padrão. O [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass) é um material dinâmico que unifica a linguagem de design nas plataformas da Apple, permitindo que você apresente controles e navegação sem ocultar o conteúdo subjacente. Em contraste com o Liquid Glass, os [materiais padrão](https://developer.apple.com/design/human-interface-guidelines/materials#Standard-materials) ajudam na diferenciação visual dentro da camada de conteúdo.

## Liquid Glass

O Liquid Glass forma uma camada funcional distinta para controles e elementos de navegação, como barras de abas e barras laterais, que flutua acima da camada de conteúdo, estabelecendo uma hierarquia visual clara entre elementos funcionais e conteúdo. O Liquid Glass permite que o conteúdo role e apareça por baixo desses elementos para dar à interface uma sensação de dinamismo e profundidade, mantendo ao mesmo tempo a legibilidade dos controles e da navegação.

**Não use o Liquid Glass na camada de conteúdo.** O Liquid Glass funciona melhor quando oferece uma distinção clara entre elementos interativos e conteúdo, e incluí-lo na camada de conteúdo pode resultar em complexidade desnecessária e em uma hierarquia visual confusa. Em vez disso, use [materiais padrão](https://developer.apple.com/design/human-interface-guidelines/materials#Standard-materials) para elementos da camada de conteúdo, como fundos de apps. Uma exceção são os controles na camada de conteúdo com um elemento interativo transitório, como [controles deslizantes](https://developer.apple.com/design/human-interface-guidelines/sliders) e [interruptores](https://developer.apple.com/design/human-interface-guidelines/toggles); nesses casos, o elemento assume a aparência de Liquid Glass para enfatizar sua interatividade quando a pessoa o ativa.

**Use efeitos de Liquid Glass com moderação.** Os componentes padrão dos frameworks do sistema adquirem automaticamente a aparência e o comportamento desse material. Se você aplicar efeitos de Liquid Glass a um controle personalizado, faça-o com moderação. O Liquid Glass busca chamar a atenção para o conteúdo subjacente, e o uso excessivo desse material em vários controles personalizados pode oferecer uma experiência abaixo do ideal ao distrair desse conteúdo. Limite esses efeitos aos elementos funcionais mais importantes do seu app. Para orientações aos desenvolvedores, consulte [Applying Liquid Glass to custom views](https://developer.apple.com/documentation/swiftui/applying-liquid-glass-to-custom-views).

**Use o Liquid Glass transparente (clear) apenas em componentes que aparecem sobre fundos visualmente ricos.** O Liquid Glass oferece duas variantes, [regular](https://developer.apple.com/documentation/swiftui/glass/regular) e [clear](https://developer.apple.com/documentation/swiftui/glass/clear), que você pode escolher ao criar componentes personalizados ou estilizar alguns componentes do sistema. A aparência dessas variantes pode variar em resposta a certos ajustes do sistema, como quando as pessoas escolhem uma aparência preferida para o Liquid Glass nos ajustes do dispositivo ou ativam ajustes de acessibilidade que reduzem a transparência ou aumentam o contraste da interface.

A variante *regular* desfoca e ajusta a luminosidade do conteúdo de fundo para manter a legibilidade do texto e de outros elementos de primeiro plano. Os efeitos de borda de rolagem melhoram ainda mais a legibilidade ao desfocar e reduzir a opacidade do conteúdo de fundo. A maioria dos componentes do sistema usa essa variante. Use a variante regular quando o conteúdo de fundo puder criar problemas de legibilidade ou quando os componentes tiverem uma quantidade significativa de texto, como alertas, barras laterais ou popovers.

![Um exemplo visual da variante regular do Liquid Glass, que aparece mais escura quando há um fundo escuro por baixo.](../../images/materials/materials-ios-liquid-glass-over-dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-liquid-glass-over-dark@2x.png)*

![Um exemplo visual da variante regular do Liquid Glass, que aparece mais clara quando há um fundo claro por baixo.](../../images/materials/materials-ios-liquid-glass-over-light@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-liquid-glass-over-light@2x.png)*

A variante *clear* é altamente translúcida, o que é ideal para priorizar a visibilidade do conteúdo subjacente e garantir que elementos de fundo visualmente ricos continuem em destaque. Use essa variante em componentes que flutuam sobre fundos de mídia, como fotos e vídeos, para criar uma experiência de conteúdo mais imersiva.

![Um exemplo visual da variante clear do Liquid Glass, que permite que os detalhes visuais do fundo por baixo dela apareçam.](../../images/materials/materials-ios-liquid-glass-clear@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-liquid-glass-clear@2x.png)*

Para obter contraste e legibilidade ideais, determine se deve adicionar uma camada de escurecimento atrás de componentes com Liquid Glass clear:

- Se o conteúdo subjacente for claro, considere adicionar uma camada de escurecimento escura com 35% de opacidade. Para orientações aos desenvolvedores, consulte [clear](https://developer.apple.com/documentation/swiftui/glass/clear).
- Se o conteúdo subjacente for suficientemente escuro, ou se você usar controles padrão de reprodução de mídia do AVKit que já fornecem sua própria camada de escurecimento, não é necessário aplicar uma camada de escurecimento.

Para orientações sobre o uso de cor, consulte [Cor do Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/color#Liquid-Glass-color).

## Materiais padrão

Use materiais e efeitos padrão, como [desfoque](https://developer.apple.com/documentation/uikit/uiblureffect), [vibrancy](https://developer.apple.com/documentation/uikit/uivibrancyeffect) e [modos de mesclagem](https://developer.apple.com/documentation/appkit/nsvisualeffectview/blendingmode-swift.enum), para transmitir uma sensação de estrutura no conteúdo abaixo do Liquid Glass.

**Escolha materiais e efeitos com base no significado semântico e no uso recomendado.** Evite selecionar um material ou efeito com base na cor aparente que ele confere à sua interface, porque os ajustes do sistema podem mudar sua aparência e comportamento. Em vez disso, combine o material ou o estilo de vibrancy com o seu caso de uso específico.

**Ajude a garantir a legibilidade usando cores vibrantes sobre os materiais.** Quando você usa cores vibrantes definidas pelo sistema, não precisa se preocupar com cores que pareçam escuras, claras, saturadas ou de baixo contraste demais em diferentes contextos. Seja qual for o material escolhido, use cores vibrantes sobre ele. Para orientações, consulte [Cores do sistema](https://developer.apple.com/design/human-interface-guidelines/color#System-colors).

![Uma ilustração de um botão Compartilhar com um material de fundo translúcido e um símbolo. O símbolo usa a cor systemGray3 e é difícil de ver contra o material de fundo.](../../images/materials/materials-legibility-non-vibrant-label@2x.png) ![Uma ilustração de um botão Compartilhar com um material de fundo translúcido e um símbolo. O símbolo usa a cor systemGray3 e é difícil de ver contra o material de fundo. (escuro)](../../images/materials/materials-legibility-non-vibrant-label~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-legibility-non-vibrant-label@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-legibility-non-vibrant-label~dark@2x.png)*

![Um X dentro de um círculo para indicar o uso incorreto](../../images/materials/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de um botão Compartilhar com um material de fundo translúcido e um símbolo. O símbolo usa cor vibrante e é claramente visível contra o material de fundo.](../../images/materials/materials-legibility-primary-label@2x.png) ![Uma ilustração de um botão Compartilhar com um material de fundo translúcido e um símbolo. O símbolo usa cor vibrante e é claramente visível contra o material de fundo. (escuro)](../../images/materials/materials-legibility-primary-label~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-legibility-primary-label@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-legibility-primary-label~dark@2x.png)*

![Uma marca de seleção dentro de um círculo para indicar o uso correto](../../images/materials/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Considere o contraste e a separação visual ao escolher um material para combinar com efeitos de desfoque e vibrancy.** Por exemplo, considere que:

- Materiais mais espessos, que são mais opacos, podem oferecer melhor contraste para texto e outros elementos com detalhes finos.
- Materiais mais finos, que são mais translúcidos, podem ajudar as pessoas a manter o contexto, oferecendo um lembrete visível do conteúdo que está ao fundo.

Para orientações aos desenvolvedores, consulte [Material](https://developer.apple.com/documentation/swiftui/material).

## Considerações por plataforma

### iOS, iPadOS

Além do Liquid Glass, o iOS e o iPadOS continuam oferecendo quatro materiais padrão (ultrafino, fino, regular (padrão) e espesso), que você pode usar na camada de conteúdo para ajudar a criar distinção visual.

![Uma ilustração do material ultraThin do iOS e do iPadOS sobre um fundo colorido. Onde o material se sobrepõe ao fundo, ele produz um gradiente difuso das cores do fundo.](../../images/materials/materials-ios-material-background-ultrathin@2x.png) ![Uma ilustração do material ultraThin do iOS e do iPadOS sobre um fundo colorido. Onde o material se sobrepõe ao fundo, ele produz um gradiente difuso das cores do fundo. (escuro)](../../images/materials/materials-ios-material-background-ultrathin~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-material-background-ultrathin@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-material-background-ultrathin~dark@2x.png)*

![Uma ilustração do material thin do iOS e do iPadOS sobre um fundo colorido. Onde o material se sobrepõe ao fundo, ele produz um gradiente difuso e levemente escurecido das cores do fundo.](../../images/materials/materials-ios-material-background-thin@2x.png) ![Uma ilustração do material thin do iOS e do iPadOS sobre um fundo colorido. Onde o material se sobrepõe ao fundo, ele produz um gradiente difuso e levemente escurecido das cores do fundo. (escuro)](../../images/materials/materials-ios-material-background-thin~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-material-background-thin@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-material-background-thin~dark@2x.png)*

![Uma ilustração do material regular do iOS e do iPadOS sobre um fundo colorido. Onde o material se sobrepõe ao fundo, ele produz um gradiente difuso e escurecido das cores do fundo.](../../images/materials/materials-ios-material-background-regular@2x.png) ![Uma ilustração do material regular do iOS e do iPadOS sobre um fundo colorido. Onde o material se sobrepõe ao fundo, ele produz um gradiente difuso e escurecido das cores do fundo. (escuro)](../../images/materials/materials-ios-material-background-regular~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-material-background-regular@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-material-background-regular~dark@2x.png)*

![Uma ilustração do material thick do iOS e do iPadOS sobre um fundo colorido. Onde o material se sobrepõe ao fundo, ele produz um gradiente escuro e esmaecido das cores do fundo.](../../images/materials/materials-ios-material-background-thick@2x.png) ![Uma ilustração do material thick do iOS e do iPadOS sobre um fundo colorido. Onde o material se sobrepõe ao fundo, ele produz um gradiente escuro e esmaecido das cores do fundo. (escuro)](../../images/materials/materials-ios-material-background-thick~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-material-background-thick@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-ios-material-background-thick~dark@2x.png)*

O iOS e o iPadOS também definem cores vibrantes para rótulos, preenchimentos e separadores, projetadas especificamente para funcionar com cada material. Rótulos e preenchimentos têm vários níveis de vibrancy; separadores têm um nível. O nome de um nível indica a quantidade relativa de contraste entre um elemento e o fundo: o nível padrão tem o maior contraste, ao passo que o quaternário (quando existe) tem o menor contraste.

Exceto o quaternário, você pode usar os seguintes valores de vibrancy para rótulos em qualquer material. Em geral, evite usar o quaternário sobre os materiais [thin](https://developer.apple.com/documentation/swiftui/material/thin) e [ultraThin](https://developer.apple.com/documentation/swiftui/material/ultrathin), porque o contraste é baixo demais.

- [UIVibrancyEffectStyle.label](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/label) (padrão)
- [UIVibrancyEffectStyle.secondaryLabel](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/secondarylabel)
- [UIVibrancyEffectStyle.tertiaryLabel](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/tertiarylabel)
- [UIVibrancyEffectStyle.quaternaryLabel](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/quaternarylabel)

Você pode usar os seguintes valores de vibrancy para preenchimentos em todos os materiais.

- [UIVibrancyEffectStyle.fill](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/fill) (padrão)
- [UIVibrancyEffectStyle.secondaryFill](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/secondaryfill)
- [UIVibrancyEffectStyle.tertiaryFill](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/tertiaryfill)

O sistema oferece um único valor padrão de vibrancy para um [separador](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/separator), que funciona bem em todos os materiais.

### macOS

O macOS oferece vários materiais padrão com finalidades designadas e versões vibrantes de todas as [cores do sistema](https://developer.apple.com/design/human-interface-guidelines/color#Specifications). Para orientações aos desenvolvedores, consulte [NSVisualEffectView.Material](https://developer.apple.com/documentation/appkit/nsvisualeffectview/material-swift.enum).

**Escolha quando permitir vibrancy em visualizações e controles personalizados.** Dependendo da configuração e dos ajustes do sistema, as visualizações e os controles do sistema usam vibrancy para fazer o conteúdo de primeiro plano se destacar contra qualquer fundo. Teste sua interface em vários contextos para descobrir quando o vibrancy melhora a aparência e a comunicação.

**Escolha um modo de mesclagem de fundo que complemente o design da sua interface.** O macOS define dois modos que mesclam o conteúdo de fundo: atrás da janela e dentro da janela. Para orientações aos desenvolvedores, consulte [NSVisualEffectView.BlendingMode](https://developer.apple.com/documentation/appkit/nsvisualeffectview/blendingmode-swift.enum).

### tvOS

No tvOS, o Liquid Glass aparece em todos os elementos de navegação e experiências do sistema, como o Top Shelf e a Central de Controle. Certos elementos de interface, como visualizações de imagem e botões, adotam o Liquid Glass quando recebem foco.

![Uma captura de tela do app Destination Video em execução no tvOS. O app mostra uma tela com detalhes sobre um vídeo chamado A BOT-anist Adventure. O fundo é uma imagem colorida do personagem principal em uma cena do vídeo. Os elementos de interface que flutuam acima do fundo adotam uma aparência de Liquid Glass para permitir que a cor do fundo apareça e criar uma experiência de mídia mais imersiva.](../../images/materials/materials-tvos-media-player@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-tvos-media-player@2x.png)*

Além do Liquid Glass, o tvOS continua oferecendo materiais padrão, que você pode usar para ajudar a definir a estrutura na camada de conteúdo. A espessura de um material padrão afeta o quanto o conteúdo subjacente aparece. Por exemplo, considere usar materiais padrão das seguintes maneiras:

| Material | Recomendado para |
|---|---|
| [ultraThin](https://developer.apple.com/documentation/swiftui/material/ultrathin) | Visualizações em tela inteira que exigem um esquema de cores claro |
| [thin](https://developer.apple.com/documentation/swiftui/material/thin) | Visualizações de sobreposição que ocultam parcialmente o conteúdo na tela e exigem um esquema de cores claro |
| [regular](https://developer.apple.com/documentation/swiftui/material/regular) | Visualizações de sobreposição que ocultam parcialmente o conteúdo na tela |
| [thick](https://developer.apple.com/documentation/swiftui/material/thick) | Visualizações de sobreposição que ocultam parcialmente o conteúdo na tela e exigem um esquema de cores escuro |

### visionOS

No visionOS, as janelas geralmente usam um material não modificável definido pelo sistema chamado *glass*, que ajuda as pessoas a se manterem situadas ao permitir que a luz, o Ambiente atual, o conteúdo virtual e os objetos ao redor delas apareçam. O glass é um material adaptativo que limita a faixa de informações de cor do fundo para que uma janela continue oferecendo contraste ao conteúdo do app, ao mesmo tempo em que fica mais clara ou mais escura dependendo do ambiente físico das pessoas e de outros conteúdos virtuais.

![Uma gravação da janela do app Música no visionOS. A janela usa o material glass e se adapta conforme o ângulo de visualização e a iluminação mudam.](../../images/materials/visionos-glass-material-transition@2x.png)

*Vídeo: Uma gravação da janela do app Música no visionOS. A janela usa o material glass e se adapta conforme o ângulo de visualização e a iluminação mudam.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-glass-material-transition.mp4)

> **Observação:** O visionOS não tem um ajuste distinto de Dark Mode. Em vez disso, o glass se adapta automaticamente à luminância dos objetos e das cores atrás dele.

**Prefira translucidez a cores opacas nas janelas.** Áreas de opacidade podem bloquear a visão das pessoas, fazendo-as se sentirem restringidas e reduzindo a percepção que têm dos objetos virtuais e físicos ao redor.

![Uma ilustração de um campo de visão no visionOS com uma janela no centro. A janela tem um fundo opaco que obstrui o ambiente ao redor.](../../images/materials/materials-visionos-opaque-window-incorrect@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-visionos-opaque-window-incorrect@2x.png)*

![Um X dentro de um círculo para indicar o uso incorreto](../../images/materials/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de um campo de visão no visionOS com uma janela no centro. A janela tem um fundo de material translúcido que permite que o ambiente ao redor passe através dele.](../../images/materials/materials-visionos-glass-window@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-visionos-glass-window@2x.png)*

![Uma marca de seleção dentro de um círculo para indicar o uso correto](../../images/materials/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Se necessário, escolha materiais que ajudem a criar separações visuais ou a indicar interatividade no seu app.** Se precisar criar um componente personalizado, talvez seja necessário especificar um material do sistema para ele. Use os exemplos a seguir como orientação.

- O material [thin](https://developer.apple.com/documentation/swiftui/material/thin) chama a atenção para elementos interativos, como botões e itens selecionados.
- O material [regular](https://developer.apple.com/documentation/swiftui/material/regular) pode ajudar a separar visualmente seções do seu app, como uma barra lateral ou uma visualização de tabela agrupada.
- O material [thick](https://developer.apple.com/documentation/swiftui/material/thick) permite criar um elemento escuro que permanece visualmente distinto quando está sobre uma área que usa um fundo `regular`.

![Uma ilustração de um campo de visão no visionOS com uma janela no centro. A janela é composta por uma barra lateral à esquerda e uma área de conteúdo à direita, com um campo de texto na parte superior e um botão no canto inferior direito. A barra lateral usa material regular, enquanto o campo de texto usa material thick e o botão usa material thin.](../../images/materials/visionos-materials-window-example@2x.png) ![Uma ilustração de um campo de visão no visionOS com uma janela no centro. A janela é composta por uma barra lateral à esquerda e uma área de conteúdo à direita, com um campo de texto na parte superior e um botão no canto inferior direito. A barra lateral usa material regular, enquanto o campo de texto usa material thick e o botão usa material thin. (escuro)](../../images/materials/visionos-materials-window-example~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-materials-window-example@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-materials-window-example~dark@2x.png)*

Para garantir que o conteúdo de primeiro plano permaneça legível quando exibido sobre um material, o visionOS aplica vibrancy a texto, símbolos e preenchimentos. O vibrancy melhora a sensação de profundidade ao trazer luz e cor para a frente, tanto do ambiente virtual quanto do físico.

O visionOS define três valores de vibrancy que ajudam a comunicar uma hierarquia de texto, símbolos e preenchimentos.

- Use [UIVibrancyEffectStyle.label](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/label) para texto padrão.
- Use [UIVibrancyEffectStyle.secondaryLabel](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/secondarylabel) para texto descritivo, como notas de rodapé e subtítulos.
- Use [UIVibrancyEffectStyle.tertiaryLabel](https://developer.apple.com/documentation/uikit/uivibrancyeffectstyle/tertiarylabel) para elementos inativos, e apenas quando o texto não precisar de alta legibilidade.

![Uma ilustração de um botão Compartilhar com um material de fundo translúcido e um símbolo. O símbolo usa a cor de rótulo vibrante padrão e tem contraste muito alto contra o material de fundo.](../../images/materials/materials-visionos-label-vibrant-primary@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-visionos-label-vibrant-primary@2x.png)*

![Uma ilustração de um botão Compartilhar com um material de fundo translúcido e um símbolo. O símbolo usa a cor de rótulo vibrante secundária e tem alto contraste contra o material de fundo.](../../images/materials/materials-visionos-label-vibrant-secondary@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-visionos-label-vibrant-secondary@2x.png)*

![Uma ilustração de um botão Compartilhar com um material de fundo translúcido e um símbolo. O símbolo usa a cor de rótulo vibrante terciária e tem contraste atenuado contra o material de fundo.](../../images/materials/materials-visionos-label-vibrant-tertiary@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/materials-visionos-label-vibrant-tertiary@2x.png)*

### watchOS

**Use materiais para fornecer contexto em uma visualização modal em tela inteira.** Como as visualizações modais em tela inteira são comuns no watchOS, o contraste oferecido pelas camadas de material pode ajudar a orientar as pessoas no seu app e a distinguir controles e elementos do sistema de outros conteúdos. Evite remover ou substituir fundos de material de sheets modais quando eles forem fornecidos por padrão.

![Uma ilustração de uma visualização modal no watchOS com um título de exemplo, texto descritivo e um único botão de ação. O modal cobre completamente a tela com um material transparente e usa um material mais fino para o botão, junto com texto de rótulo vibrante.](../../images/materials/watchos-modal-view-material-background@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/watchos-modal-view-material-background@2x.png)*

## Recursos

#### Relacionados

[Cor](https://developer.apple.com/design/human-interface-guidelines/color)

[Acessibilidade](https://developer.apple.com/design/human-interface-guidelines/accessibility)

[Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode)

#### Documentação para desenvolvedores

[Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)

[glassEffect(_:in:)](https://developer.apple.com/documentation/swiftui/view/glasseffect(_:in:)) — SwiftUI

[Material](https://developer.apple.com/documentation/swiftui/material) — SwiftUI

[UIVisualEffectView](https://developer.apple.com/documentation/uikit/uivisualeffectview) — UIKit

[NSVisualEffectView](https://developer.apple.com/documentation/appkit/nsvisualeffectview) — AppKit

#### Vídeos

- [Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219)
- [Get to know the new design system](https://developer.apple.com/videos/play/wwdc2025/356)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de setembro de 2025 | Atualizadas as orientações para o Liquid Glass. |
| 9 de junho de 2025 | Adicionadas orientações para o Liquid Glass. |
| 6 de agosto de 2024 | Adicionada arte específica de cada plataforma. |
| 5 de dezembro de 2023 | Atualizadas as descrições dos vários tipos de material e esclarecidos termos relacionados a vibrancy e espessura de material. |
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
| 5 de junho de 2023 | Adicionadas orientações sobre o uso de materiais para fornecer contexto e orientação em apps para watchOS. |
