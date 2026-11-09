# Layout espacial (Spatial layout)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/spatial-layout
>
> Plataformas: visionos

*As técnicas de layout espacial ajudam você a aproveitar o canvas infinito do Apple Vision Pro e a apresentar seu conteúdo de maneiras envolventes e confortáveis.*

![Um esboço de eixos nas dimensões X, Y e Z, sugerindo um layout tridimensional. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple, de seis cores.](../../images/spatial-layout/foundations-spatial-layout-intro@2x.png) ![Um esboço de eixos nas dimensões X, Y e Z, sugerindo um layout tridimensional. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple, de seis cores. (escuro)](../../images/spatial-layout/foundations-spatial-layout-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-spatial-layout-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-spatial-layout-intro~dark@2x.png)*

## Campo de visão

O *campo de visão* de uma pessoa é o espaço que ela consegue enxergar sem mover a cabeça. As dimensões do campo de visão de um indivíduo ao usar o Apple Vision Pro variam de acordo com fatores como a forma como a pessoa configura o Light Seal e a extensão de sua acuidade periférica.

![Uma captura de tela de uma janela de app em branco no visionOS. Uma série de círculos concêntricos sobrepõe a imagem, representando campos de visão de 30, 60 e 90 graus.](../../images/spatial-layout/visionos-field-of-view-layout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-field-of-view-layout@2x.png)*

> **Importante:** O sistema não fornece informações sobre o campo de visão de uma pessoa.

**Centralize o conteúdo importante dentro do campo de visão.** Por padrão, o visionOS abre um app diretamente à frente das pessoas, posicionando-o dentro do campo de visão delas. Em uma experiência imersiva, você pode ajudar as pessoas a manter a atenção no conteúdo importante mantendo-o centralizado e evitando exibir movimentos que distraiam ou objetos brilhantes e de alto contraste na periferia.

**Visualização na vertical**

![Uma animação de uma pessoa usando o Apple Vision Pro e sentada ereta em uma cadeira. A pessoa está de frente para um quadrado que representa uma janela de app no visionOS, centralizada no campo de visão da pessoa. Uma linha pontilhada se anima dos olhos da pessoa até o centro da janela.](../../images/spatial-layout/visionos-window-placement-standard@2x.png)

*Vídeo: Uma animação de uma pessoa usando o Apple Vision Pro e sentada ereta em uma cadeira. A pessoa está de frente para um quadrado que representa uma janela de app no visionOS, centralizada no campo de visão da pessoa. Uma linha pontilhada se anima dos olhos da pessoa até o centro da janela.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-window-placement-standard.mp4)

**Visualização inclinada**

![Uma animação de uma pessoa usando o Apple Vision Pro e reclinada em uma cadeira. A pessoa está olhando para um quadrado que representa uma janela de app no visionOS. A janela do app está posicionada a uma curta distância da pessoa, elevada no ar e inclinada em direção a ela, de modo que fique centralizada no campo de visão. Uma linha pontilhada se anima dos olhos da pessoa até o centro da janela.](../../images/spatial-layout/visionos-window-placement-tilted@2x.png)

*Vídeo: Uma animação de uma pessoa usando o Apple Vision Pro e reclinada em uma cadeira. A pessoa está olhando para um quadrado que representa uma janela de app no visionOS. A janela do app está posicionada a uma curta distância da pessoa, elevada no ar e inclinada em direção a ela, de modo que fique centralizada no campo de visão. Uma linha pontilhada se anima dos olhos da pessoa até o centro da janela.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-window-placement-tilted.mp4)

**Evite ancorar o conteúdo à cabeça de quem usa o dispositivo.** Embora você geralmente queira que seu app permaneça dentro do campo de visão, ancorar o conteúdo de modo que ele fique estaticamente à frente de alguém pode fazer a pessoa se sentir presa, confinada e desconfortável, especialmente se o conteúdo ocultar muito do passthrough e diminuir a estabilidade aparente do ambiente ao redor. Em vez disso, ancore o conteúdo no espaço das pessoas, dando a elas a liberdade de olhar ao redor naturalmente e ver diferentes objetos em diferentes locais.

## Profundidade

As pessoas dependem de pistas visuais como distância, oclusão e sombra para perceber a profundidade e dar sentido ao ambiente ao redor. No Apple Vision Pro, o sistema usa automaticamente efeitos visuais como temperatura de cor, reflexos e sombra para ajudar as pessoas a perceber a profundidade do conteúdo virtual. Quando as pessoas movem um objeto virtual no espaço, ou quando mudam de posição em relação a esse objeto, os efeitos visuais alteram a profundidade aparente do objeto, tornando a experiência mais realista.

Como as pessoas podem ver seu conteúdo de qualquer ângulo, incorporar pequenas quantidades de profundidade em toda a sua interface, mesmo em janelas padrão, pode ajudá-la a parecer mais natural. Ao usar o SwiftUI, o sistema adiciona efeitos visuais às visualizações em uma janela 2D, fazendo com que pareçam ter profundidade. Para orientações aos desenvolvedores, consulte [Adding 3D content to your app](https://developer.apple.com/documentation/visionos/adding-3d-content-to-your-app).

![Uma captura de tela de uma janela 2D do app Notas no visionOS. Uma nota intitulada Nature Walks está aberta no lado final da visualização, com esboços de folhas acompanhados de descrições manuscritas.](../../images/spatial-layout/visionos-spatial-layout-2d-window@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-spatial-layout-2d-window@2x.png)*

Se precisar apresentar conteúdo com profundidade adicional, use o RealityKit para criar um objeto 3D (para orientações aos desenvolvedores, consulte [RealityKit](https://developer.apple.com/documentation/realitykit)). Você pode exibir o objeto 3D em qualquer lugar ou usar um *volume*, que é um componente que exibe conteúdo 3D. Um volume é semelhante a uma janela, mas sem moldura visível. Para orientações, consulte [Volumes do visionOS](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS-volumes).

![Uma gravação mostrando um modelo 3D de um satélite dentro de um volume do visionOS. Conforme o espectador se aproxima do satélite e manipula sua orientação, os reflexos de luz se ajustam com base na posição do espectador e no ângulo do satélite.](../../images/spatial-layout/visionos-spatial-layout-3d-volume@2x.png)

*Vídeo: Uma gravação mostrando um modelo 3D de um satélite dentro de um volume do visionOS. Conforme o espectador se aproxima do satélite e manipula sua orientação, os reflexos de luz se ajustam com base na posição do espectador e no ângulo do satélite.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-spatial-layout-3d-volume.mp4)

**Forneça pistas visuais que comuniquem com precisão a profundidade do seu conteúdo.** Se as pistas visuais estiverem ausentes ou entrarem em conflito com a experiência de uma pessoa no mundo real, as pessoas podem sentir desconforto visual.

**Use a profundidade para comunicar hierarquia.** A profundidade ajuda um objeto a se destacar do conteúdo ao redor, tornando-o mais perceptível. As pessoas também tendem a perceber mudanças de profundidade: por exemplo, quando uma sheet aparece sobre uma janela, a janela recua ao longo do eixo z, permitindo que a sheet avance e ganhe destaque visual.

**Em geral, evite adicionar profundidade ao texto.** O texto que parece flutuar acima do fundo é difícil de ler, o que deixa as pessoas mais lentas e às vezes pode causar desconforto visual.

**Garanta que a profundidade agregue valor.** Em geral, você quer usar a profundidade para esclarecer e encantar; não é preciso usá-la em todo lugar. Ao adicionar profundidade ao seu design, pense no tamanho e na importância relativa dos objetos. A profundidade é ótima para separar visualmente elementos grandes e importantes do seu app, como destacar uma barra de abas ou uma barra de ferramentas em relação a uma janela, mas pode não funcionar tão bem em objetos pequenos. Por exemplo, usar profundidade para destacar o símbolo de um botão em relação ao fundo pode tornar o botão menos legível e mais difícil de usar. Revise também com que frequência você usa diferentes profundidades ao longo do app. As pessoas precisam refocalizar os olhos para perceber cada diferença de profundidade, e fazer isso com muita frequência ou rapidez pode ser cansativo.

## Escala

O visionOS define dois tipos de escala para preservar a aparência de profundidade e, ao mesmo tempo, otimizar a usabilidade.

A *escala dinâmica* ajuda o conteúdo a permanecer confortavelmente legível e interativo independentemente de sua proximidade em relação às pessoas. Especificamente, o visionOS aumenta automaticamente a escala de uma janela conforme ela se afasta de quem usa o dispositivo e a diminui conforme a janela se aproxima, fazendo com que a janela pareça manter o mesmo tamanho em todas as distâncias.

![Uma animação que mostra um quadrado representando uma janela de app em um espaço 3D. O quadrado se move para trás ao longo de seu plano a partir da posição inicial. Conforme se move, ele aumenta de tamanho dinamicamente. Uma moldura que representa a posição original permanece visível para comparação. Após a conclusão do movimento, todo o ambiente gira para transmitir que, do ângulo do espectador, a janela sempre permanece do mesmo tamanho.](../../images/spatial-layout/visionos-dynamic-window-scaling@2x.png)

*Vídeo: Uma animação que mostra um quadrado representando uma janela de app em um espaço 3D. O quadrado se move para trás ao longo de seu plano a partir da posição inicial. Conforme se move, ele aumenta de tamanho dinamicamente. Uma moldura que representa a posição original permanece visível para comparação. Após a conclusão do movimento, todo o ambiente gira para transmitir que, do ângulo do espectador, a janela sempre permanece do mesmo tamanho.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-dynamic-window-scaling.mp4)

A *escala fixa* significa que um objeto mantém a mesma escala independentemente de sua proximidade em relação às pessoas. Um objeto de escala fixa parece menor quando se afasta do espectador ao longo do eixo z, de maneira semelhante a como um objeto no ambiente físico de uma pessoa parece menor quando está longe do que quando está perto.

![Uma animação que mostra um quadrado representando uma janela de app em um espaço 3D. O quadrado se move para trás ao longo de seu plano a partir da posição inicial. Conforme se move, ele fica menor. Uma moldura que representa a posição original permanece visível para comparação. Após a conclusão do movimento, todo o ambiente gira para transmitir que, do ângulo do espectador, a janela parece ter recuado para a distância.](../../images/spatial-layout/visionos-fixed-window-scaling@2x.png)

*Vídeo: Uma animação que mostra um quadrado representando uma janela de app em um espaço 3D. O quadrado se move para trás ao longo de seu plano a partir da posição inicial. Conforme se move, ele fica menor. Uma moldura que representa a posição original permanece visível para comparação. Após a conclusão do movimento, todo o ambiente gira para transmitir que, do ângulo do espectador, a janela parece ter recuado para a distância.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-fixed-window-scaling.mp4)

Para oferecer suporte à escala dinâmica e à aparência de profundidade, o visionOS define um ponto como um ângulo, em contraste com outras plataformas, que definem um ponto como um número de pixels que pode variar com a [resolução](https://developer.apple.com/design/human-interface-guidelines/images#Resolution) de uma tela 2D.

**Considere usar escala fixa quando quiser que um objeto virtual tenha exatamente a aparência de um objeto físico.** Por exemplo, você pode querer manter a escala real de um produto que oferece, para que ele pareça mais realista quando as pessoas o virem no espaço delas. Como o conteúdo interativo precisa mudar de escala para manter a usabilidade conforme se aproxima ou se afasta, prefira aplicar a escala fixa com moderação, reservando-a para objetos não interativos que precisem dela.

## Boas práticas

**Evite exibir janelas demais.** Janelas demais podem ocultar o ambiente ao redor das pessoas, fazendo-as se sentirem sobrecarregadas, restringidas e até desconfortáveis. Isso também pode tornar trabalhoso reposicionar um app, pois significa mover muitas janelas.

**Priorize gestos padrão e indiretos.** As pessoas podem fazer um gesto *indireto* sem mover a mão para o campo de visão. Em contraste, fazer um gesto *direto* exige que as pessoas toquem o objeto virtual com o dedo, o que pode ser cansativo, especialmente quando o objeto está posicionado na altura da linha de visão ou acima dela. No visionOS, as pessoas usam gestos indiretos para realizar os gestos padrão que já conhecem. Quando você prioriza gestos indiretos, as pessoas podem usá-los para interagir com qualquer objeto para o qual estejam olhando, seja qual for a distância. Se você oferecer suporte a gestos diretos, considere reservá-los para objetos próximos que convidem a uma inspeção ou manipulação de perto por curtos períodos. Para orientações, consulte [Gestos > visionOS](https://developer.apple.com/design/human-interface-guidelines/gestures#visionOS).

**Conte com a Digital Crown para ajudar as pessoas a recentralizar janelas em seu campo de visão.** Quando as pessoas movem ou viram a cabeça, o conteúdo pode deixar de aparecer onde elas querem. Se isso acontecer, as pessoas podem pressionar a [Digital Crown](https://developer.apple.com/design/human-interface-guidelines/digital-crown) quando quiserem recentralizar o conteúdo à sua frente. Seu app não precisa fazer nada para oferecer suporte a essa ação.

**Inclua espaço suficiente ao redor dos componentes interativos para que seja fácil olhar para eles.** Quando as pessoas olham para um elemento interativo, o visionOS exibe um efeito visual de foco (hover) que as ajuda a confirmar que o elemento é o que desejam. É fundamental incluir espaço suficiente ao redor de um componente interativo para que olhar para ele seja fácil e confortável, evitando ao mesmo tempo que o efeito de foco se aproxime demais de outros conteúdos. Por exemplo, posicione vários [botões](https://developer.apple.com/design/human-interface-guidelines/buttons#visionOS) de tamanho regular de modo que seus centros fiquem a pelo menos 60 pontos de distância, deixando 16 pontos ou mais de espaço entre eles. Além disso, não deixe que os controles se sobreponham a outros elementos ou visualizações interativas, pois isso pode dificultar a seleção de um único elemento.

**Permita que as pessoas usem seu app com movimento físico mínimo ou nenhum.** A menos que algum movimento físico seja essencial para a sua experiência, ajude todas as pessoas a aproveitá-la permanecendo paradas.

**Use o piso para ajudar a posicionar uma grande experiência imersiva.** Se sua experiência imersiva incluir conteúdo que se estende para cima a partir do piso, posicione-o usando um plano horizontal plano. Alinhar esse plano com o piso pode ajudá-lo a se integrar perfeitamente ao ambiente das pessoas e oferecer uma experiência mais intuitiva.

Para saber mais sobre janelas e volumes no visionOS, consulte [Janelas > visionOS](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS); para orientações sobre como organizar o conteúdo dentro de uma janela, consulte [Layout > visionOS](https://developer.apple.com/design/human-interface-guidelines/layout#visionOS).

## Considerações por plataforma

*Não é compatível com iOS, iPadOS, macOS, tvOS nem watchOS.*

## Recursos

#### Relacionados

[Olhos (Eyes)](https://developer.apple.com/design/human-interface-guidelines/eyes)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

[Experiências imersivas](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences)

#### Documentação para desenvolvedores

[Presenting windows and spaces](https://developer.apple.com/documentation/visionos/presenting-windows-and-spaces) — visionOS

[Positioning and sizing windows](https://developer.apple.com/documentation/visionos/positioning-and-sizing-windows) — visionOS

[Adding 3D content to your app](https://developer.apple.com/documentation/visionos/adding-3d-content-to-your-app) — visionOS

#### Vídeos

- [Meet SwiftUI spatial layout](https://developer.apple.com/videos/play/wwdc2025/273)
- [Principles of spatial design](https://developer.apple.com/videos/play/wwdc2023/10072)
- [Design for spatial user interfaces](https://developer.apple.com/videos/play/wwdc2023/10076)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 29 de março de 2024 | Enfatizada a importância de evitar que elementos interativos se sobreponham. |
| 21 de junho de 2023 | Nova página. |
