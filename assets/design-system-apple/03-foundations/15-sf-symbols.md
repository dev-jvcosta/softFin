# SF Symbols

> Fonte: https://developer.apple.com/design/human-interface-guidelines/sf-symbols
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*O SF Symbols oferece milhares de símbolos consistentes e altamente configuráveis que se integram perfeitamente à fonte do sistema San Francisco, alinhando-se automaticamente ao texto em todos os pesos e tamanhos.*

![Um esboço do ícone do SF Symbols. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple de seis cores.](../../images/sf-symbols/foundations-sf-symbols-intro@2x.png) ![Um esboço do ícone do SF Symbols. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple de seis cores. (escuro)](../../images/sf-symbols/foundations-sf-symbols-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-sf-symbols-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-sf-symbols-intro~dark@2x.png)*

Você pode usar um símbolo para transmitir um objeto ou conceito em qualquer lugar onde ícones de interface possam aparecer, como em barras de ferramentas, barras de abas, menus de contexto e dentro de textos.

A disponibilidade de símbolos e recursos individuais varia conforme a versão do sistema que você tem como alvo. Símbolos e recursos de símbolos introduzidos em determinado ano não estão disponíveis em sistemas operacionais anteriores.

Visite [SF Symbols](https://developer.apple.com/sf-symbols/) para baixar o app e navegar pelo conjunto completo de símbolos. Certifique-se de entender os termos e condições de uso do SF Symbols, incluindo a proibição de usar símbolos — ou imagens que sejam confusamente semelhantes — em ícones de app, logotipos ou qualquer outro uso de marca registrada. Para orientações a desenvolvedores, consulte [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui).

## Modos de renderização

O SF Symbols oferece quatro modos de renderização — monocromático, hierárquico, paleta e multicolorido — que dão várias opções ao aplicar cor a símbolos. Por exemplo, você pode querer usar várias opacidades da cor de destaque do seu app para dar profundidade e ênfase aos símbolos, ou especificar uma paleta de cores contrastantes para exibir símbolos que combinem com diferentes esquemas de cores.

Para oferecer suporte aos modos de renderização, o SF Symbols organiza os caminhos de um símbolo em camadas distintas. Por exemplo, o símbolo `cloud.sun.rain.fill` consiste em três camadas: a camada primária contém os caminhos da nuvem, a camada secundária contém os caminhos que definem o sol e seus raios, e a camada terciária contém os caminhos das gotas de chuva.

![Uma imagem do símbolo cloud sun rain fill. A nuvem é preta e as gotas de chuva e o sol são cinza para indicar que a nuvem está na camada primária.](../../images/sf-symbols/sf-three-layers-primary@2x.png) ![Uma imagem do símbolo cloud sun rain fill. A nuvem é preta e as gotas de chuva e o sol são cinza para indicar que a nuvem está na camada primária. (escuro)](../../images/sf-symbols/sf-three-layers-primary~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-three-layers-primary@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-three-layers-primary~dark@2x.png)*

![Uma imagem do símbolo cloud sun rain fill. O sol é preto e as gotas de chuva e a nuvem são cinza para indicar que o sol está na camada secundária.](../../images/sf-symbols/sf-three-layers-secondary@2x.png) ![Uma imagem do símbolo cloud sun rain fill. O sol é preto e as gotas de chuva e a nuvem são cinza para indicar que o sol está na camada secundária. (escuro)](../../images/sf-symbols/sf-three-layers-secondary~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-three-layers-secondary@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-three-layers-secondary~dark@2x.png)*

![Uma imagem do símbolo cloud sun rain fill. As gotas de chuva são pretas e o sol e a nuvem são cinza para indicar que as gotas de chuva estão na camada primária.](../../images/sf-symbols/sf-three-layers-tertiary@2x.png) ![Uma imagem do símbolo cloud sun rain fill. As gotas de chuva são pretas e o sol e a nuvem são cinza para indicar que as gotas de chuva estão na camada primária. (escuro)](../../images/sf-symbols/sf-three-layers-tertiary~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-three-layers-tertiary@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-three-layers-tertiary~dark@2x.png)*

Dependendo do modo de renderização escolhido, um símbolo pode produzir várias aparências. Por exemplo, o modo de renderização Hierarchical atribui uma opacidade diferente de uma única cor a cada camada, criando uma hierarquia visual que dá profundidade ao símbolo.

![Uma imagem do símbolo cloud sun rain fill que usa três opacidades diferentes da cor azul do sistema nas três camadas do símbolo: a nuvem é totalmente opaca, o sol tem cerca de 50% de opacidade e as gotas de chuva têm cerca de 25% de opacidade.](../../images/sf-symbols/sf-three-layers-color@2x.png) ![Uma imagem do símbolo cloud sun rain fill que usa três opacidades diferentes da cor azul do sistema nas três camadas do símbolo: a nuvem é totalmente opaca, o sol tem cerca de 50% de opacidade e as gotas de chuva têm cerca de 25% de opacidade. (escuro)](../../images/sf-symbols/sf-three-layers-color~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-three-layers-color@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-three-layers-color~dark@2x.png)*

Para saber mais sobre o suporte a modos de renderização em símbolos personalizados, consulte [Símbolos personalizados](https://developer.apple.com/design/human-interface-guidelines/sf-symbols#Custom-symbols).

O SF Symbols oferece suporte aos seguintes modos de renderização.

**Monochrome** — Aplica uma cor a todas as camadas de um símbolo. Dentro de um símbolo, os caminhos são renderizados na cor que você especificar ou como uma forma transparente dentro de um caminho preenchido com cor.

![Um diagrama mostrando uma fileira de oito símbolos, todos usando uma única opacidade da cor azul do sistema.](../../images/sf-symbols/sf-monochrome@2x.png) ![Um diagrama mostrando uma fileira de oito símbolos, todos usando uma única opacidade da cor azul do sistema. (escuro)](../../images/sf-symbols/sf-monochrome~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-monochrome@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-monochrome~dark@2x.png)*

**Hierarchical** — Aplica uma cor a todas as camadas de um símbolo, variando a opacidade da cor de acordo com o nível hierárquico de cada camada.

![Um diagrama mostrando uma fileira de oito símbolos, cada um usando diferentes opacidades da cor azul do sistema. Da esquerda para a direita, o símbolo square and arrow up usa opacidade total na seta e baixa opacidade no quadrado. Em seguida, folder badge plus usa opacidade total no selo e baixa opacidade na pasta. Trash slash usa opacidade total na barra diagonal e baixa opacidade na lixeira. Calendar day timeline right usa opacidade total no indicador horizontal e baixa opacidade no quadrado e nos pontos. List number usa opacidade total na coluna de números e baixa opacidade nas linhas horizontais. Text format A B C dotted underline usa opacidade total nos pontos sob as letras de baixa opacidade. iPhone radio waves left and right usa opacidade total no contorno do dispositivo, opacidade média na área da tela e baixa opacidade nas linhas das ondas de rádio. Por fim, o símbolo de PC usa opacidade total no contorno do dispositivo e no rosto triste e nas linhas horizontais exibidos na tela, e opacidade média no fundo da tela.](../../images/sf-symbols/sf-hierarchical@2x.png) ![Um diagrama mostrando uma fileira de oito símbolos, cada um usando diferentes opacidades da cor azul do sistema. Da esquerda para a direita, o símbolo square and arrow up usa opacidade total na seta e baixa opacidade no quadrado. Em seguida, folder badge plus usa opacidade total no selo e baixa opacidade na pasta. Trash slash usa opacidade total na barra diagonal e baixa opacidade na lixeira. Calendar day timeline right usa opacidade total no indicador horizontal e baixa opacidade no quadrado e nos pontos. List number usa opacidade total na coluna de números e baixa opacidade nas linhas horizontais. Text format A B C dotted underline usa opacidade total nos pontos sob as letras de baixa opacidade. iPhone radio waves left and right usa opacidade total no contorno do dispositivo, opacidade média na área da tela e baixa opacidade nas linhas das ondas de rádio. Por fim, o símbolo de PC usa opacidade total no contorno do dispositivo e no rosto triste e nas linhas horizontais exibidos na tela, e opacidade média no fundo da tela. (escuro)](../../images/sf-symbols/sf-hierarchical~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-hierarchical@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-hierarchical~dark@2x.png)*

**Palette** — Aplica duas ou mais cores a um símbolo, usando uma cor por camada. Especificar apenas duas cores para um símbolo que define três níveis de hierarquia significa que as camadas secundária e terciária usam a mesma cor.

![Um diagrama mostrando uma fileira de oito símbolos, cada um usando uma combinação de cinza e da cor azul do sistema. Da esquerda para a direita, o símbolo square and arrow up usa azul na seta e cinza-claro no quadrado. Em seguida, folder badge plus usa azul no selo e cinza-claro na pasta. Trash slash usa azul na barra diagonal e cinza-claro na lixeira. Calendar day timeline right usa azul no indicador horizontal e cinza-claro no quadrado e nos pontos. List number usa azul na coluna de números e cinza-claro nas linhas horizontais. Text format A B C dotted underline usa azul nos pontos sob as letras em cinza-claro. iPhone radio waves left and right usa azul no contorno do dispositivo, cinza-médio na área da tela e cinza-claro nas linhas das ondas de rádio. Por fim, o símbolo de PC usa azul no contorno do dispositivo e no rosto triste e nas linhas horizontais exibidos na tela, e cinza-médio no fundo da tela.](../../images/sf-symbols/sf-palette@2x.png) ![Um diagrama mostrando uma fileira de oito símbolos, cada um usando uma combinação de cinza e da cor azul do sistema. Da esquerda para a direita, o símbolo square and arrow up usa azul na seta e cinza-claro no quadrado. Em seguida, folder badge plus usa azul no selo e cinza-claro na pasta. Trash slash usa azul na barra diagonal e cinza-claro na lixeira. Calendar day timeline right usa azul no indicador horizontal e cinza-claro no quadrado e nos pontos. List number usa azul na coluna de números e cinza-claro nas linhas horizontais. Text format A B C dotted underline usa azul nos pontos sob as letras em cinza-claro. iPhone radio waves left and right usa azul no contorno do dispositivo, cinza-médio na área da tela e cinza-claro nas linhas das ondas de rádio. Por fim, o símbolo de PC usa azul no contorno do dispositivo e no rosto triste e nas linhas horizontais exibidos na tela, e cinza-médio no fundo da tela. (escuro)](../../images/sf-symbols/sf-palette~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-palette@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-palette~dark@2x.png)*

**Multicolor** — Aplica cores intrínsecas a alguns símbolos para reforçar o significado. Por exemplo, o símbolo `leaf` usa verde para refletir a aparência das folhas no mundo físico, enquanto o símbolo `trash.slash` usa vermelho para sinalizar perda de dados. Alguns símbolos multicoloridos incluem camadas que podem receber outras cores.

![Um diagrama mostrando uma fileira de oito símbolos, usando combinações de várias cores. Da esquerda para a direita, o símbolo square and arrow up usa azul em todas as linhas. Em seguida, folder badge plus usa verde no selo e azul na pasta. Trash slash usa vermelho tanto na barra diagonal quanto na lixeira. Calendar day timeline right usa vermelho no indicador horizontal, cinza-escuro no quadrado e cinza-claro nos pontos. List number usa preto na coluna de números e cinza-médio nas linhas horizontais. Text format A B C dotted underline usa vermelho nos pontos sob as letras pretas. iPhone radio waves left and right usa azul em todas as linhas. Por fim, o símbolo de PC usa amarelo no contorno do dispositivo, branco no rosto triste e nas linhas horizontais exibidos na tela e azul no fundo da tela.](../../images/sf-symbols/sf-multicolor@2x.png) ![Um diagrama mostrando uma fileira de oito símbolos, usando combinações de várias cores. Da esquerda para a direita, o símbolo square and arrow up usa azul em todas as linhas. Em seguida, folder badge plus usa verde no selo e azul na pasta. Trash slash usa vermelho tanto na barra diagonal quanto na lixeira. Calendar day timeline right usa vermelho no indicador horizontal, cinza-escuro no quadrado e cinza-claro nos pontos. List number usa preto na coluna de números e cinza-médio nas linhas horizontais. Text format A B C dotted underline usa vermelho nos pontos sob as letras pretas. iPhone radio waves left and right usa azul em todas as linhas. Por fim, o símbolo de PC usa amarelo no contorno do dispositivo, branco no rosto triste e nas linhas horizontais exibidos na tela e azul no fundo da tela. (escuro)](../../images/sf-symbols/sf-multicolor~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-multicolor@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-multicolor~dark@2x.png)*

Independentemente do modo de renderização, usar as cores fornecidas pelo sistema garante que os símbolos se adaptem automaticamente a recursos de acessibilidade e a modos de aparência como vibrancy e Dark Mode. Para orientações a desenvolvedores, consulte [renderingMode(_:)](https://developer.apple.com/documentation/swiftui/image/renderingmode(_:)).

**Confirme que o modo de renderização de um símbolo funciona bem em todos os contextos.** Dependendo de fatores como o tamanho do símbolo e seu contraste com a cor de fundo atual, diferentes modos de renderização podem afetar o quanto as pessoas conseguem distinguir os detalhes do símbolo. Você pode usar a configuração automática para obter o modo de renderização preferido de um símbolo, mas ainda é uma boa ideia verificar os resultados em locais onde um modo de renderização diferente poderia melhorar a legibilidade do símbolo.

## Gradientes

No SF Symbols 7 e posterior, a renderização com gradiente gera um gradiente linear suave a partir de uma única cor de origem. Você pode usar gradientes em todos os modos de renderização, tanto para cores do sistema quanto personalizadas, e em símbolos personalizados. Os gradientes são renderizados em símbolos de qualquer tamanho, mas ficam melhores em tamanhos maiores.

![O símbolo sun com preenchimento amarelo sólido.](../../images/sf-symbols/sf-symbols-sun-solid-fill@2x.png) ![O símbolo sun com preenchimento amarelo sólido. (escuro)](../../images/sf-symbols/sf-symbols-sun-solid-fill~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-symbols-sun-solid-fill@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-symbols-sun-solid-fill~dark@2x.png)*

![O símbolo sun com preenchimento em gradiente derivado de uma única cor amarela de origem. A cor do gradiente é brilhante na borda esquerda do símbolo e escurece sutilmente ao se aproximar da borda direita.](../../images/sf-symbols/sf-symbols-sun-gradient-fill@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-symbols-sun-gradient-fill@2x.png)*

## Cor variável

Com a cor variável, você pode representar uma característica que pode mudar ao longo do tempo — como capacidade ou intensidade — independentemente do modo de renderização. Para comunicar visualmente essa mudança, a cor variável aplica cor a diferentes camadas de um símbolo conforme um valor atinge diferentes limiares entre zero e 100 por cento.

Por exemplo, você poderia usar a cor variável com o símbolo `speaker.wave.3` para comunicar três faixas diferentes de som — mais o estado em que não há som — mapeando as camadas que representam os caminhos curvos das ondas para diferentes faixas de valores de decibéis. No caso de ausência de som, nenhuma camada de onda recebe cor. Em todos os outros casos, uma camada de onda recebe cor quando o som atinge um limiar que o sistema define com base no número de estados diferentes de zero que você deseja representar.

![Um diagrama mostrando quatro versões do símbolo speaker wave three, cada uma exibindo cor em um número diferente de caminhos de onda. Da esquerda para a direita, o número de ondas com cor é zero, um, dois e três.](../../images/sf-symbols/sf-variable-color@2x.png) ![Um diagrama mostrando quatro versões do símbolo speaker wave three, cada uma exibindo cor em um número diferente de caminhos de onda. Da esquerda para a direita, o número de ondas com cor é zero, um, dois e três. (escuro)](../../images/sf-symbols/sf-variable-color~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-variable-color@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-variable-color~dark@2x.png)*

Às vezes, pode fazer sentido que algumas camadas de um símbolo não participem da cor variável. Por exemplo, no símbolo `speaker.wave.3` mostrado acima, a camada que contém o caminho do alto-falante não recebe cor variável porque um alto-falante não muda conforme o nível de som muda. Um símbolo pode oferecer suporte à cor variável em qualquer número de camadas.

**Use a cor variável para comunicar mudança — não a use para comunicar profundidade.** Para transmitir profundidade e hierarquia visual, use o modo de renderização Hierarchical para dar destaque a certas camadas e distinguir elementos de primeiro plano e de fundo em um símbolo.

## Pesos e escalas

O SF Symbols oferece símbolos em uma ampla variedade de pesos e escalas para ajudar você a criar designs adaptáveis.

![Um diagrama mostrando o símbolo square and arrow up em todos os 27 pesos e escalas.](../../images/sf-symbols/sf-scales-weights@2x.png) ![Um diagrama mostrando o símbolo square and arrow up em todos os 27 pesos e escalas. (escuro)](../../images/sf-symbols/sf-scales-weights~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-scales-weights@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-scales-weights~dark@2x.png)*

Cada um dos nove pesos de símbolo — de ultralight a black — corresponde a um peso da fonte do sistema San Francisco, ajudando você a obter uma correspondência precisa de peso entre símbolos e o texto adjacente, ao mesmo tempo que oferece flexibilidade para diferentes tamanhos e contextos.

Cada símbolo também está disponível em três escalas: pequena, média (a padrão) e grande. As escalas são definidas em relação à altura das maiúsculas da fonte do sistema San Francisco.

![Um diagrama mostrando a primeira de três imagens do símbolo plus circle seguido da palavra Add em maiúsculas. Em cada imagem, a palavra usa o mesmo tamanho, mas o símbolo usa um tamanho diferente. Nesta imagem, o tamanho do símbolo é pequeno. Duas linhas horizontais paralelas aparecem nas três imagens. A linha superior mostra a altura da letra A maiúscula e a linha inferior é a linha de base sob a palavra Add. Neste símbolo pequeno, o círculo toca as duas linhas.](../../images/sf-symbols/sf-symbol-scale-small@2x.png) ![Um diagrama mostrando a primeira de três imagens do símbolo plus circle seguido da palavra Add em maiúsculas. Em cada imagem, a palavra usa o mesmo tamanho, mas o símbolo usa um tamanho diferente. Nesta imagem, o tamanho do símbolo é pequeno. Duas linhas horizontais paralelas aparecem nas três imagens. A linha superior mostra a altura da letra A maiúscula e a linha inferior é a linha de base sob a palavra Add. Neste símbolo pequeno, o círculo toca as duas linhas. (escuro)](../../images/sf-symbols/sf-symbol-scale-small~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-symbol-scale-small@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-symbol-scale-small~dark@2x.png)*

![A segunda de três imagens do símbolo plus circle seguido da palavra Add em maiúsculas. Neste símbolo médio, o círculo se estende ligeiramente acima e abaixo das linhas.](../../images/sf-symbols/sf-symbol-scale-medium@2x.png) ![A segunda de três imagens do símbolo plus circle seguido da palavra Add em maiúsculas. Neste símbolo médio, o círculo se estende ligeiramente acima e abaixo das linhas. (escuro)](../../images/sf-symbols/sf-symbol-scale-medium~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-symbol-scale-medium@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-symbol-scale-medium~dark@2x.png)*

![A terceira de três imagens do símbolo plus circle seguido da palavra Add em maiúsculas. Neste símbolo grande, a linha vertical do sinal de mais quase toca as duas linhas.](../../images/sf-symbols/sf-symbol-scale-large@2x.png) ![A terceira de três imagens do símbolo plus circle seguido da palavra Add em maiúsculas. Neste símbolo grande, a linha vertical do sinal de mais quase toca as duas linhas. (escuro)](../../images/sf-symbols/sf-symbol-scale-large~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-symbol-scale-large@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-symbol-scale-large~dark@2x.png)*

Especificar uma escala permite ajustar a ênfase de um símbolo em relação ao texto adjacente, sem interromper a correspondência de peso com o texto que usa o mesmo tamanho em pontos. Para orientações a desenvolvedores, consulte [imageScale(_:)](https://developer.apple.com/documentation/swiftui/view/imagescale(_:)) (SwiftUI), [UIImage.SymbolScale](https://developer.apple.com/documentation/uikit/uiimage/symbolscale) (UIKit) e [NSImage.SymbolConfiguration](https://developer.apple.com/documentation/appkit/nsimage/symbolconfiguration-swift.class) (AppKit).

## Variantes de design

O SF Symbols define várias variantes de design — como fill, slash e enclosed — que podem ajudar você a comunicar estados e ações precisos, mantendo a consistência visual e a simplicidade da interface. Por exemplo, você pode usar a variante slash de um símbolo para mostrar que um item ou ação não está disponível, ou usar a variante fill para indicar seleção.

O contorno (outline) é a variante mais comum no SF Symbols. Um símbolo em contorno não tem áreas sólidas, assemelhando-se à aparência de texto. A maioria dos símbolos também está disponível em uma variante fill, na qual as áreas dentro de algumas formas são sólidas.

Além de outline e fill, o SF Symbols também define variantes que incluem uma barra diagonal ou que envolvem um símbolo em uma forma como círculo, quadrado ou retângulo. Em muitos casos, as variantes enclosed e slash podem ser combinadas com as variantes outline ou fill.

![Um diagrama mostrando duas fileiras dos mesmos cinco símbolos. Na fileira superior, todos os símbolos usam a variante outline; a fileira inferior mostra a variante fill de cada símbolo. Da esquerda para a direita, os símbolos são heart, heart slash, heart circle, heart square e um coração em um retângulo.](../../images/sf-symbols/sf-variants@2x.png) ![Um diagrama mostrando duas fileiras dos mesmos cinco símbolos. Na fileira superior, todos os símbolos usam a variante outline; a fileira inferior mostra a variante fill de cada símbolo. Da esquerda para a direita, os símbolos são heart, heart slash, heart circle, heart square e um coração em um retângulo. (escuro)](../../images/sf-symbols/sf-variants~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-variants@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-variants~dark@2x.png)*

O SF Symbols oferece muitas variantes para idiomas e sistemas de escrita específicos, incluindo latino, árabe, hebraico, hindi, tailandês, chinês, japonês, coreano, cirílico, devanágari e vários sistemas numéricos indianos. As variantes específicas de idioma e de escrita se adaptam automaticamente quando o idioma do dispositivo muda. Para orientações, consulte [Imagens](https://developer.apple.com/design/human-interface-guidelines/right-to-left#Images).

![Um diagrama com oito fileiras dos mesmos doze símbolos, em que cada fileira mostra uma versão localizada do símbolo. Da esquerda para a direita, os símbolos são doc rich text, doc rich text fill, character book closed, character book closed fill, character bubble, character bubble fill, character, text format superscript, text format subscript, text format size, character text box e character cursor I beam.](../../images/sf-symbols/sf-localized@2x.png) ![Um diagrama com oito fileiras dos mesmos doze símbolos, em que cada fileira mostra uma versão localizada do símbolo. Da esquerda para a direita, os símbolos são doc rich text, doc rich text fill, character book closed, character book closed fill, character bubble, character bubble fill, character, text format superscript, text format subscript, text format size, character text box e character cursor I beam. (escuro)](../../images/sf-symbols/sf-localized~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-localized@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sf-localized~dark@2x.png)*

As variantes de símbolos atendem a uma série de objetivos de design. Por exemplo:

- A variante outline funciona bem em barras de ferramentas, listas e outros locais em que você exibe um símbolo ao lado de texto.
- Símbolos que usam uma forma envolvente — como um quadrado ou um círculo — podem melhorar a legibilidade em tamanhos pequenos.
- As áreas sólidas em uma variante fill tendem a dar mais ênfase visual a um símbolo, tornando-a uma boa escolha para barras de abas do iOS, ações de deslizar e locais em que você usa uma cor de destaque para comunicar seleção.

Em muitos casos, a view que exibe um símbolo determina se deve usar outline ou fill, de modo que você não precisa especificar uma variante. Por exemplo, uma barra de abas do iOS prefere a variante fill, enquanto uma barra de ferramentas adota a variante outline.

## Animações

O SF Symbols oferece uma coleção de animações expressivas e configuráveis que aprimoram sua interface e dão vitalidade ao seu app. As animações de símbolos ajudam a comunicar ideias, fornecem retorno em resposta às ações das pessoas e sinalizam mudanças de status ou atividades em andamento.

As animações funcionam em todos os SF Symbols da biblioteca, em todos os modos de renderização, pesos e escalas, e em símbolos personalizados. Para considerações ao animar símbolos personalizados, consulte [Símbolos personalizados](https://developer.apple.com/design/human-interface-guidelines/sf-symbols#Custom-symbols). Você pode controlar a reprodução de uma animação, seja para que ela rode do início ao fim, seja para que rode indefinidamente, repetindo seu efeito até que uma condição seja atendida. Você pode personalizar comportamentos, como alterar a velocidade de reprodução de uma animação ou determinar se ela deve ser revertida antes de repetir. Para orientações a desenvolvedores, consulte [Symbols](https://developer.apple.com/documentation/symbols) e [SymbolEffect](https://developer.apple.com/documentation/symbols/symboleffect).

**Appear** — Faz um símbolo surgir gradualmente na visualização.

![Um vídeo mostrando três símbolos com o mesmo efeito de animação appear aplicado a cada um. Em cada animação, as camadas do símbolo surgem gradualmente. Da esquerda para a direita, os símbolos são uma antena com ondas de rádio que se animam do centro para fora, uma pilha de fotos com linhas representando uma pilha que se anima de baixo para cima e uma forma de onda que se anima da esquerda para a direita.](../../images/sf-symbols/sf-animation-appear@2x.png)

*Vídeo: Um vídeo mostrando três símbolos com o mesmo efeito de animação appear aplicado a cada um. Em cada animação, as camadas do símbolo surgem gradualmente. Da esquerda para a direita, os símbolos são uma antena com ondas de rádio que se animam do centro para fora, uma pilha de fotos com linhas representando uma pilha que se anima de baixo para cima e uma forma de onda que se anima da esquerda para a direita.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-appear.mp4)

**Disappear** — Faz um símbolo sair gradualmente da visualização.

![Um vídeo mostrando três símbolos com o mesmo efeito de animação disappear aplicado a cada um. Em cada animação, todas as camadas do símbolo desaparecem gradualmente. Da esquerda para a direita, os símbolos são uma pasta com um ícone de selo com sinal de mais, duas lâmpadas sobrepostas e dois balões de conversa sobrepostos](../../images/sf-symbols/sf-animation-disappear@2x.png)

*Vídeo: Um vídeo mostrando três símbolos com o mesmo efeito de animação disappear aplicado a cada um. Em cada animação, todas as camadas do símbolo desaparecem gradualmente. Da esquerda para a direita, os símbolos são uma pasta com um ícone de selo com sinal de mais, duas lâmpadas sobrepostas e dois balões de conversa sobrepostos* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-disappear.mp4)

**Bounce** — Escala brevemente um símbolo com um movimento elástico que vai para cima ou para baixo e depois retorna ao estado inicial do símbolo. A animação bounce é reproduzida uma vez por padrão e pode ajudar a comunicar que uma ação ocorreu ou precisa ocorrer.

![Um vídeo mostrando três símbolos com o mesmo efeito de animação bounce aplicado a cada um. Em cada animação, as camadas do símbolo quicam individualmente. Da esquerda para a direita, os símbolos são uma nota musical com três linhas, um texto que diz haha e o ícone de Live Photos.](../../images/sf-symbols/sf-animation-bounce@2x.png)

*Vídeo: Um vídeo mostrando três símbolos com o mesmo efeito de animação bounce aplicado a cada um. Em cada animação, as camadas do símbolo quicam individualmente. Da esquerda para a direita, os símbolos são uma nota musical com três linhas, um texto que diz haha e o ícone de Live Photos.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-bounce.mp4)

**Scale** — Altera o tamanho de um símbolo, aumentando ou diminuindo sua escala. Ao contrário da animação bounce, que devolve o símbolo ao estado original, a animação scale persiste até que você defina uma nova escala ou remova o efeito. Você pode usar a animação scale para chamar a atenção das pessoas para um item selecionado ou como retorno quando as pessoas escolhem um símbolo.

![Um vídeo mostrando três símbolos com o mesmo efeito de animação scale aplicado a cada um. Em cada animação, o símbolo diminui de tamanho e, após uma pausa, volta ao tamanho original. Da esquerda para a direita, os símbolos são uma janela PIP de saída, uma pilha 3D de três quadrados posicionados na diagonal e um HomePod e um HomePod mini sobrepostos.](../../images/sf-symbols/sf-animation-scale@2x.png)

*Vídeo: Um vídeo mostrando três símbolos com o mesmo efeito de animação scale aplicado a cada um. Em cada animação, o símbolo diminui de tamanho e, após uma pausa, volta ao tamanho original. Da esquerda para a direita, os símbolos são uma janela PIP de saída, uma pilha 3D de três quadrados posicionados na diagonal e um HomePod e um HomePod mini sobrepostos.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-scale.mp4)

**Pulse** — Varia a opacidade de um símbolo ao longo do tempo. Essa animação pulsa automaticamente apenas as camadas de um símbolo que estejam anotadas para pulsar e, opcionalmente, pode pulsar todas as camadas de um símbolo. Você pode usar a animação pulse para comunicar atividade em andamento, reproduzindo-a continuamente até que uma condição seja atendida.

![Um vídeo mostrando três símbolos com o mesmo efeito de animação pulse aplicado a cada um. Em cada animação, uma camada pulsa sua opacidade. Da esquerda para a direita, os símbolos são o ícone do AirPlay com a tela pulsando, um balão de conversa com uma forma de onda sobreposto por um botão de pausa pulsando e um retângulo pulsando para representar uma tela sobreposta por um ícone de pessoa.](../../images/sf-symbols/sf-animation-pulse@2x.png)

*Vídeo: Um vídeo mostrando três símbolos com o mesmo efeito de animação pulse aplicado a cada um. Em cada animação, uma camada pulsa sua opacidade. Da esquerda para a direita, os símbolos são o ícone do AirPlay com a tela pulsando, um balão de conversa com uma forma de onda sobreposto por um botão de pausa pulsando e um retângulo pulsando para representar uma tela sobreposta por um ícone de pessoa.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-pulse.mp4)

**Variable color** — Varia incrementalmente a opacidade das camadas de um símbolo. Essa animação pode ser cumulativa ou iterativa. Quando cumulativa, as mudanças de cor persistem em cada camada até que o ciclo da animação seja concluído. Quando iterativa, as mudanças de cor ocorrem uma camada por vez. Você pode usar a cor variável para comunicar progresso ou atividade em andamento, como reprodução, conexão ou transmissão. Você pode personalizar a animação para reverter automaticamente (autoreverse) — ou seja, reverter a animação até o ponto inicial e reproduzir a sequência novamente — bem como ocultar as camadas inativas em vez de reduzir sua opacidade.

A disposição das camadas dentro de um símbolo determina como a cor variável se comporta durante uma animação repetida. Símbolos com camadas dispostas linearmente, nas quais os pontos de início e fim não se encontram, são anotados como *open loop*. Símbolos com camadas que seguem uma forma completa, na qual os pontos de início e fim se encontram, como em um indicador de progresso circular, são anotados como *closed loop*. As animações de cor variável para símbolos com designs closed loop apresentam reprodução contínua e sem emendas.

![Um vídeo mostrando três símbolos com o mesmo efeito de animação variable color aplicado a cada um. Em cada animação, a cor é adicionada um caminho por vez. Da esquerda para a direita, os símbolos são um alto-falante com a cor percorrendo três ondas sonoras, um símbolo de Wi-Fi com a cor percorrendo dois caminhos que representam a intensidade do sinal antes de reverter e reproduzir a animação novamente e um ícone de irrigador com a cor percorrendo as gotas.](../../images/sf-symbols/sf-animation-variable-color@2x.png)

*Vídeo: Um vídeo mostrando três símbolos com o mesmo efeito de animação variable color aplicado a cada um. Em cada animação, a cor é adicionada um caminho por vez. Da esquerda para a direita, os símbolos são um alto-falante com a cor percorrendo três ondas sonoras, um símbolo de Wi-Fi com a cor percorrendo dois caminhos que representam a intensidade do sinal antes de reverter e reproduzir a animação novamente e um ícone de irrigador com a cor percorrendo as gotas.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-variable-color.mp4)

**Replace** — Substitui um símbolo por outro. A animação replace funciona entre símbolos arbitrários e em todos os pesos e modos de renderização. Essa animação tem três configurações:

- Down-up, em que o símbolo que sai diminui de escala e o símbolo que entra aumenta de escala, comunicando uma mudança de estado.
- Up-up, em que tanto o símbolo que sai quanto o que entra aumentam de escala. Essa configuração comunica uma mudança de estado que inclui uma sensação de progressão para a frente.
- Off-up, em que o símbolo que sai se oculta imediatamente e o símbolo que entra aumenta de escala. Essa configuração comunica uma mudança de estado que enfatiza o próximo estado ou ação disponível.

![Um vídeo mostrando três símbolos com o mesmo efeito de animação replace aplicado a cada um. Em cada animação, um símbolo é substituído por um novo símbolo e depois substituído novamente pelo símbolo original. Da esquerda para a direita, os símbolos são uma grade de quatro quadrados substituída por uma lista com marcadores, uma nuvem com chuva substituída por uma nuvem cobrindo parcialmente o sol e um símbolo de microfone substituído por um símbolo de x em um círculo.](../../images/sf-symbols/sf-animation-replace@2x.png)

*Vídeo: Um vídeo mostrando três símbolos com o mesmo efeito de animação replace aplicado a cada um. Em cada animação, um símbolo é substituído por um novo símbolo e depois substituído novamente pelo símbolo original. Da esquerda para a direita, os símbolos são uma grade de quatro quadrados substituída por uma lista com marcadores, uma nuvem com chuva substituída por uma nuvem cobrindo parcialmente o sol e um símbolo de microfone substituído por um símbolo de x em um círculo.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-replace.mp4)

**Magic Replace** — Realiza uma transição inteligente entre dois símbolos com formas relacionadas. Por exemplo, barras diagonais podem ser desenhadas e apagadas, selos podem aparecer ou desaparecer, ou você pode substituí-los independentemente do símbolo base. O Magic Replace é a nova animação replace padrão, mas não ocorre entre símbolos não relacionados; nesses casos, ocorre a animação down-up padrão. Você pode escolher uma direção personalizada para a animação de fallback nessas situações, se preferir uma diferente da padrão.

![Um vídeo mostrando três símbolos, cada um com uma forma sendo adicionada, removida ou substituída por meio do efeito de animação Magic Replace. Em cada animação, o símbolo é transformado e, em seguida, a transformação é revertida. Da esquerda para a direita, os símbolos são um cartão de crédito com uma forma de triângulo de alerta adicionada, um microfone com uma barra diagonal adicionada e uma identidade circular com um selo de marca de verificação substituído por um selo de X.](../../images/sf-symbols/sf-animation-magic-replace@2x.png)

*Vídeo: Um vídeo mostrando três símbolos, cada um com uma forma sendo adicionada, removida ou substituída por meio do efeito de animação Magic Replace. Em cada animação, o símbolo é transformado e, em seguida, a transformação é revertida. Da esquerda para a direita, os símbolos são um cartão de crédito com uma forma de triângulo de alerta adicionada, um microfone com uma barra diagonal adicionada e uma identidade circular com um selo de marca de verificação substituído por um selo de X.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-magic-replace.mp4)

**Wiggle** — Move o símbolo para a frente e para trás ao longo de um eixo direcional. Você pode usar a animação wiggle para destacar uma mudança ou uma chamada para ação que uma pessoa possa deixar passar. O wiggle também pode adicionar uma ênfase dinâmica a uma interação ou reforçar o que o símbolo representa, como quando uma seta aponta em uma direção específica.

![Um vídeo mostrando três símbolos que balançam lateralmente, de forma rotacional ou ao longo de um eixo linear. Da esquerda para a direita, os símbolos são uma seta apontando para baixo em direção a um recipiente que balança verticalmente; uma pilha de duas fotos que balança de forma rotacional; e um carro visto de cima entre duas marcações de faixa com setas apontando para dentro, que balança horizontalmente.](../../images/sf-symbols/sf-animation-wiggle@2x.png)

*Vídeo: Um vídeo mostrando três símbolos que balançam lateralmente, de forma rotacional ou ao longo de um eixo linear. Da esquerda para a direita, os símbolos são uma seta apontando para baixo em direção a um recipiente que balança verticalmente; uma pilha de duas fotos que balança de forma rotacional; e um carro visto de cima entre duas marcações de faixa com setas apontando para dentro, que balança horizontalmente.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-wiggle.mp4)

**Breathe** — Aumenta e diminui suavemente a presença de um símbolo, dando-lhe uma qualidade viva. Você pode usar a animação breathe para transmitir mudanças de status ou sinalizar que uma atividade está acontecendo, como uma sessão de gravação em andamento. O breathe é semelhante ao pulse; porém, o pulse se anima alterando apenas a opacidade, enquanto o breathe altera tanto a opacidade quanto o tamanho para transmitir atividade em andamento.

![Um vídeo mostrando três símbolos que respiram, crescendo e diminuindo de tamanho e mudando de opacidade em um ritmo suave. Da esquerda para a direita, os símbolos são uma forma de onda estilizada de linhas verticais que se expandem e se contraem da esquerda para a direita com um pulso de opacidade variável; um par de balões de palavras de tradução que crescem com opacidade reduzida e depois diminuem com opacidade aumentada; e três anéis concêntricos de mindfulness que pulsam para fora com opacidade reduzida e depois para dentro com opacidade aumentada.](../../images/sf-symbols/sf-animation-breathe@2x.png)

*Vídeo: Um vídeo mostrando três símbolos que respiram, crescendo e diminuindo de tamanho e mudando de opacidade em um ritmo suave. Da esquerda para a direita, os símbolos são uma forma de onda estilizada de linhas verticais que se expandem e se contraem da esquerda para a direita com um pulso de opacidade variável; um par de balões de palavras de tradução que crescem com opacidade reduzida e depois diminuem com opacidade aumentada; e três anéis concêntricos de mindfulness que pulsam para fora com opacidade reduzida e depois para dentro com opacidade aumentada.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-breathe.mp4)

**Rotate** — Gira o símbolo para atuar como um indicador visual ou imitar o comportamento de um objeto no mundo real. Por exemplo, quando uma tarefa está em andamento, a rotação confirma que ela está funcionando como esperado. A animação rotate faz alguns símbolos girarem por inteiro, enquanto em outros apenas certas partes do símbolo giram. Símbolos como o ventilador de mesa, por exemplo, usam a opção de rotação By Layer para girar apenas as pás do ventilador.

![Um vídeo mostrando três símbolos que giram por completo ou contêm uma forma que gira. Da esquerda para a direita, os símbolos são uma engrenagem girando; um ventilador de mesa com pás girando; e dois pontos girando em trajetórias orbitais concêntricas ao redor de um círculo central.](../../images/sf-symbols/sf-animation-rotate@2x.png)

*Vídeo: Um vídeo mostrando três símbolos que giram por completo ou contêm uma forma que gira. Da esquerda para a direita, os símbolos são uma engrenagem girando; um ventilador de mesa com pás girando; e dois pontos girando em trajetórias orbitais concêntricas ao redor de um círculo central.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/sf-animation-rotate.mp4)

**Draw On / Draw Off** — No SF Symbols 7 e posterior, desenha o símbolo ao longo de um caminho por meio de um conjunto de pontos-guia, seja de fora da tela para dentro dela (Draw On) ou de dentro da tela para fora dela (Draw Off). Você pode desenhar todas as camadas de uma vez, escalonadas, ou desenhar cada camada uma de cada vez. Você pode usar a animação draw para transmitir progresso, como em um download, ou para reforçar o significado de um símbolo, como uma seta direcional.

**Aplique animações de símbolos com critério.** Embora não haja limite para quantas animações você pode adicionar a uma view, animações demais podem sobrecarregar a interface e distrair as pessoas.

**Certifique-se de que as animações tenham um propósito claro para comunicar a intenção de um símbolo.** Cada tipo de animação tem um movimento distinto que comunica um certo tipo de ação ou provoca uma certa resposta. Considere como as pessoas podem interpretar um símbolo animado e se a animação, ou a combinação de animações, pode causar confusão.

**Use animações de símbolos para comunicar informações com mais eficiência.** As animações fornecem retorno visual, reforçando que algo aconteceu na sua interface. Você pode usar animações para apresentar informações complexas de maneira simples e sem ocupar muito espaço visual.

**Considere o tom do seu app ao adicionar animações.** Ao animar um símbolo, pense no que a animação pode transmitir e em como isso pode se alinhar à identidade da sua marca e ao estilo e tom gerais do seu app. Para orientações, consulte [Identidade de marca](https://developer.apple.com/design/human-interface-guidelines/branding).

## Símbolos personalizados

Se você precisar de um símbolo que o SF Symbols não oferece, pode criar o seu próprio. Para criar um símbolo personalizado, primeiro exporte o modelo de um símbolo semelhante ao design desejado e depois use uma ferramenta de edição vetorial para modificá-lo. Para orientações a desenvolvedores, consulte [Creating custom symbols](https://developer.apple.com/documentation/technologyoverviews/custom-sf-symbols).

> **Importante:** O SF Symbols inclui símbolos protegidos por direitos autorais que representam produtos e recursos da Apple. Você pode exibir esses símbolos no seu app, mas não pode personalizá-los. Para ajudar a identificar um símbolo não personalizável, o app SF Symbols o marca com um ícone de Info; para ajudar a usar o símbolo corretamente, o painel inspetor descreve suas restrições de uso.

Usando um processo chamado *anotação* (annotating), você pode atribuir uma cor específica — ou um nível hierárquico específico, como primário, secundário ou terciário — a cada camada de um símbolo personalizado. Dependendo dos modos de renderização que você suporta, é possível usar um modo diferente em cada instância do símbolo no seu app.

**Use o modelo como guia.** Crie um símbolo personalizado que seja consistente com os fornecidos pelo sistema em nível de detalhe, peso óptico, alinhamento, posição e perspectiva. Procure projetar um símbolo que seja:

- Simples
- Reconhecível
- Inclusivo
- Diretamente relacionado à ação ou ao conteúdo que representa

Para orientações, consulte [Ícones](https://developer.apple.com/design/human-interface-guidelines/icons).

**Atribua margens laterais negativas ao seu símbolo personalizado, se necessário.** O SF Symbols oferece suporte a margens laterais negativas para auxiliar o alinhamento horizontal óptico quando um símbolo contém um selo ou outros elementos que aumentam sua largura. Por exemplo, margens laterais negativas podem ajudar a alinhar horizontalmente uma pilha de símbolos de pasta, alguns dos quais incluem um selo. O nome de cada margem inclui a configuração relevante — como “left-margin-Regular-M” — portanto, use esse padrão de nomenclatura se adicionar margens aos seus símbolos personalizados.

**Otimize as camadas para usar animações com símbolos personalizados.** Se você quiser animar seu símbolo por camada, anote as camadas no app SF Symbols. A ordem Z determina a ordem em que você deseja aplicar cores às camadas de um símbolo de cor variável, e você pode escolher se essas mudanças serão animadas da frente para trás ou de trás para a frente. Você também pode animar por grupos de camadas para que camadas relacionadas se movam juntas.

**Teste as animações em símbolos personalizados.** É importante testar seus símbolos personalizados com todos os presets de animação, porque as formas e os caminhos podem não aparecer como você espera quando as camadas estão em movimento. Para tirar o máximo proveito desse recurso, considere desenhar seus símbolos personalizados com formas inteiras. Por exemplo, um símbolo personalizado semelhante ao símbolo `person.2.fill` não precisa criar um recorte para a forma que representa a pessoa à esquerda. Em vez disso, você pode desenhar a forma completa da pessoa e, além disso, desenhar um caminho deslocado (offset) da pessoa à direita para ajudar a representar o espaço entre elas. Mais tarde, você pode anotar esse caminho deslocado como uma camada de apagamento (erase) para renderizar o símbolo como deseja. Esse método de desenho ajuda a preservar informações adicionais de camada que permitem que as animações funcionem como você espera.

**Evite criar símbolos personalizados que incluam variantes comuns, como envoltórios ou selos.** O app SF Symbols oferece uma biblioteca de componentes para criar variantes do seu símbolo personalizado. Usar a biblioteca de componentes permite criar variantes comumente usadas do seu símbolo personalizado, mantendo a consistência de design com os SF Symbols incluídos.

**Forneça rótulos de texto alternativos para símbolos personalizados.** Rótulos de texto alternativos — ou descrições de acessibilidade — permitem que o VoiceOver descreva a interface e o conteúdo visíveis, facilitando a navegação para pessoas com deficiência visual. Para orientações, consulte [VoiceOver](https://developer.apple.com/design/human-interface-guidelines/voiceover).

**Não crie réplicas de produtos Apple.** Os produtos Apple são protegidos por direitos autorais e você não pode reproduzi-los em seus símbolos personalizados. Além disso, você não pode personalizar um símbolo que o SF Symbols identifica como representando um recurso ou produto Apple.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Baixar o SF Symbols](https://developer.apple.com/sf-symbols/)

[Tipografia](https://developer.apple.com/design/human-interface-guidelines/typography)

[Ícones](https://developer.apple.com/design/human-interface-guidelines/icons)

#### Documentação para desenvolvedores

[Symbols](https://developer.apple.com/documentation/symbols) — Symbols framework

[Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui) — UIKit

[Creating custom symbols](https://developer.apple.com/documentation/technologyoverviews/custom-sf-symbols) — UIKit

#### Vídeos

- [Novidades no SF Symbols 7](https://developer.apple.com/videos/play/wwdc2025/337)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 28 de julho de 2025 | Atualizado com orientações sobre animações Draw e renderização com gradiente no SF Symbols 7. |
| 10 de junho de 2024 | Atualizado com orientações sobre novas animações e recursos do SF Symbols 6. |
| 5 de junho de 2023 | Adicionada uma nova seção sobre animações. Incluídas orientações de animação para símbolos personalizados. |
| 14 de setembro de 2022 | Adicionada uma nova seção sobre cor variável. Removidas as instruções sobre como criar caminhos de símbolos personalizados, exportar modelos e criar camadas de caminhos, remetendo aos artigos para desenvolvedores que tratam desses temas. |
