# Ícones de app (App icons)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/app-icons
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um ícone único e memorável expressa o propósito e a personalidade do seu app ou jogo e ajuda as pessoas a reconhecê-lo num relance.*

![Um esboço do ícone da App Store. A imagem está sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original de seis cores da Apple.](../../images/app-icons/foundations-app-icons-intro@2x.png) ![Um esboço do ícone da App Store. A imagem está sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original de seis cores da Apple. (escuro)](../../images/app-icons/foundations-app-icons-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-app-icons-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-app-icons-intro~dark@2x.png)*

O ícone do seu app é um aspecto fundamental da marca e da experiência do usuário do seu app ou jogo. Ele aparece na Tela de Início e em locais importantes do sistema, incluindo resultados de busca, notificações, ajustes do sistema e folhas de compartilhamento. Um ícone de app bem projetado transmite a identidade do seu app ou jogo de forma clara e consistente em todas as plataformas da Apple.

![Uma imagem que mostra três variações do ícone do app Fotos conforme ele aparece em diferentes plataformas. A primeira variação tem formato de retângulo arredondado e representa os ícones do iOS, iPadOS e macOS. A segunda variação tem formato de retângulo arredondado alongado e representa o ícone do tvOS. A terceira variação tem formato circular e representa os ícones do visionOS e do watchOS. Todas as variações têm o mesmo design geral sobre diferentes formatos de fundo.](../../images/app-icons/app-icons-platform-appearance-overview@2x.png) ![Uma imagem que mostra três variações do ícone do app Fotos conforme ele aparece em diferentes plataformas. A primeira variação tem formato de retângulo arredondado e representa os ícones do iOS, iPadOS e macOS. A segunda variação tem formato de retângulo arredondado alongado e representa o ícone do tvOS. A terceira variação tem formato circular e representa os ícones do visionOS e do watchOS. Todas as variações têm o mesmo design geral sobre diferentes formatos de fundo. (escuro)](../../images/app-icons/app-icons-platform-appearance-overview~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-platform-appearance-overview@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-platform-appearance-overview~dark@2x.png)*

## Design de camadas

Embora você possa fornecer uma imagem achatada para o seu ícone, as camadas oferecem mais controle sobre como o design do ícone é representado. Um ícone de app em camadas se une para produzir uma sensação de profundidade e vitalidade. Em cada plataforma, o sistema aplica efeitos visuais que respondem ao ambiente e às interações das pessoas.

Os ícones de app do iOS, iPadOS, macOS e watchOS incluem uma camada de fundo e uma ou mais camadas de primeiro plano que se fundem para criar dimensionalidade. Esses ícones assumem atributos do Liquid Glass, como realces especulares, refração e translucidez. Esses efeitos se adaptam automaticamente ao tamanho do ícone, são aplicados de maneira consistente entre as plataformas e podem aparecer de forma diferente entre versões do sistema.

Os ícones de app do tvOS usam de duas a cinco camadas para criar uma sensação de dinamismo quando as pessoas os colocam em foco. Quando em foco, o ícone do app se eleva para o primeiro plano em resposta ao movimento do dedo da pessoa no controle remoto e balança suavemente enquanto a superfície se ilumina. A separação entre as camadas e o uso de transparência produzem uma sensação de profundidade durante o efeito de paralaxe.

Um ícone de app do visionOS inclui uma camada de fundo e uma ou duas camadas por cima, produzindo um objeto tridimensional que se expande sutilmente quando as pessoas olham para ele. O sistema aprimora a dimensionalidade visual do ícone adicionando sombras que transmitem uma sensação de profundidade entre as camadas e usando o canal alfa das camadas superiores para criar uma aparência em relevo.

![Uma animação do ícone do app Fotos no visionOS se movendo para mostrar o efeito de paralaxe.](../../images/app-icons/visionos-app-icon-showcase@2x.png)

*Vídeo: Uma animação do ícone do app Fotos no visionOS se movendo para mostrar o efeito de paralaxe.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-app-icon-showcase.mp4)

Você usa a sua ferramenta de design favorita para criar as camadas individuais de primeiro plano do ícone do seu app. Para os ícones do iOS, iPadOS, macOS e watchOS, você então importa as camadas do ícone para o Icon Composer, uma ferramenta de design incluída no Xcode e disponível no [site do Apple Developer](https://developer.apple.com/icon-composer). No Icon Composer, você define a camada de fundo do ícone, ajusta o posicionamento das camadas de primeiro plano, aplica efeitos visuais como realces especulares e refração, anota as variantes de aparência padrão, escura e monocromática, testa e visualiza seu ícone em diferentes versões do sistema e exporta o ícone para uso no Xcode. Para mais orientações, consulte [Creating your app icon using Icon Composer](https://developer.apple.com/documentation/xcode/creating-your-app-icon-using-icon-composer).

![Uma captura de tela do ícone do app Fotos no Icon Composer.](../../images/app-icons/app-icons-icon-composer-overview-photos@2x.png) ![Uma captura de tela do ícone do app Fotos no Icon Composer. (escuro)](../../images/app-icons/app-icons-icon-composer-overview-photos~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-icon-composer-overview-photos@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-icon-composer-overview-photos~dark@2x.png)*

Para os ícones de app do tvOS e do visionOS, você adiciona as camadas do ícone diretamente a uma pilha de imagens no Xcode para formar o ícone completo. Você pode baixar o Parallax Previewer e o plug-in Parallax Exporter em [Apple Design Resources](https://developer.apple.com/design/resources/) para visualizar e testar os efeitos visuais de paralaxe. Para orientações voltadas a desenvolvedores, consulte [Configuring your app icon using an asset catalog](https://developer.apple.com/documentation/xcode/configuring-your-app-icon).

**Prefira bordas bem definidas nas camadas de primeiro plano.** Para garantir que os realces e sombras desenhados pelo sistema tenham a melhor aparência, evite bordas suaves e esfumadas nas formas das camadas de primeiro plano.

**Varie a opacidade nas camadas de primeiro plano para aumentar a sensação de profundidade e vivacidade.** Por exemplo, o ícone do Fotos separa sua peça central em várias camadas que contêm partes translúcidas, trazendo mais dinamismo ao design. Importar camadas totalmente opacas e ajustar a transparência no Icon Composer permite visualizar e fazer ajustes no design com base em como a transparência e os efeitos do sistema impactam um ao outro.

**Crie um fundo que se destaque e, ao mesmo tempo, enfatize o conteúdo de primeiro plano.** Se você escolher um gradiente para a camada de fundo, garanta que ele responda bem aos efeitos de iluminação do sistema. O Icon Composer oferece suporte a cores sólidas e gradientes para camadas de fundo, tornando desnecessário importar imagens de fundo personalizadas na maioria dos casos. Se você importar uma camada de fundo, certifique-se de que ela seja de sangria total (full-bleed) e opaca.

**Prefira gráficos vetoriais ao trazer camadas para o Icon Composer.** Ao contrário das imagens raster, os gráficos vetoriais (como SVG ou PDF) escalam bem e aparecem nítidos em qualquer tamanho. Converta a arte em contornos e o texto em contornos no seu design. Para gradientes de malha e arte raster, prefira o formato PNG, pois é um formato de imagem sem perdas.

## Formato do ícone

O formato do ícone de um app varia conforme a linguagem visual de cada plataforma. No iOS, iPadOS e macOS, os ícones são quadrados, e o sistema aplica uma máscara para produzir cantos arredondados que correspondem precisamente à curvatura de outros elementos de interface arredondados em todo o sistema e à moldura do próprio dispositivo físico. No tvOS, os ícones são retangulares, também com bordas concêntricas. No visionOS e no watchOS, os ícones são quadrados e o sistema aplica uma máscara circular.

**iOS, iPadOS, macOS**

![Uma imagem do ícone de Ajustes para iOS. A grade de ícones do iOS, iPadOS e macOS está sobreposta ao ícone para mostrar como o formato do ícone e seus elementos se encaixam na grade.](../../images/app-icons/app-icons-settings-app-grid-square@2x.png) ![Uma imagem do ícone de Ajustes para iOS. A grade de ícones do iOS, iPadOS e macOS está sobreposta ao ícone para mostrar como o formato do ícone e seus elementos se encaixam na grade. (escuro)](../../images/app-icons/app-icons-settings-app-grid-square~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-settings-app-grid-square@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-settings-app-grid-square~dark@2x.png)*

**tvOS**

![Uma imagem do ícone de Ajustes para tvOS. A grade de ícones do tvOS está sobreposta ao ícone para mostrar como o formato do ícone e seus elementos se encaixam na grade.](../../images/app-icons/app-icons-settings-app-grid-rectangle@2x.png) ![Uma imagem do ícone de Ajustes para tvOS. A grade de ícones do tvOS está sobreposta ao ícone para mostrar como o formato do ícone e seus elementos se encaixam na grade. (escuro)](../../images/app-icons/app-icons-settings-app-grid-rectangle~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-settings-app-grid-rectangle@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-settings-app-grid-rectangle~dark@2x.png)*

**visionOS, watchOS**

![Uma imagem do ícone de Ajustes para watchOS. A grade de ícones do visionOS e do watchOS está sobreposta ao ícone para mostrar como o formato do ícone e seus elementos se encaixam na grade.](../../images/app-icons/app-icons-settings-app-grid-circle@2x.png) ![Uma imagem do ícone de Ajustes para watchOS. A grade de ícones do visionOS e do watchOS está sobreposta ao ícone para mostrar como o formato do ícone e seus elementos se encaixam na grade. (escuro)](../../images/app-icons/app-icons-settings-app-grid-circle~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-settings-app-grid-circle@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-settings-app-grid-circle~dark@2x.png)*

**Produza camadas com o formato apropriado e sem máscara.** O sistema aplica máscara a todas as bordas das camadas para produzir o formato final do ícone. Para os ícones do iOS, iPadOS e macOS, forneça camadas quadradas para que o sistema possa aplicar os cantos arredondados. Para o visionOS e o watchOS, forneça camadas quadradas para que o sistema possa criar o formato circular do ícone. Para o tvOS, forneça camadas retangulares para que o sistema possa aplicar os cantos arredondados. Fornecer camadas com máscara predefinida prejudica os efeitos de realce especular e faz com que as bordas pareçam serrilhadas.

**Mantenha o conteúdo principal centralizado para evitar truncamento quando o sistema ajusta os cantos ou aplica a máscara.** Preste atenção especial à centralização do conteúdo nos ícones do visionOS e do watchOS. Para ajudar no posicionamento do ícone, use as grades dos modelos de produção de ícones de app, que você encontra em [Apple Design Resources](https://developer.apple.com/design/resources/).

## Design

Adote a simplicidade no design do seu ícone. Ícones simples tendem a ser os mais fáceis de entender e reconhecer. Um ícone com características visuais finas pode parecer carregado quando renderizado com as sombras e os realces fornecidos pelo sistema, e os detalhes podem ser difíceis de distinguir em tamanhos menores. Encontre um conceito ou elemento que capture a essência do seu app ou jogo, faça dele a ideia central do seu ícone e expresse-o de maneira simples e única, com um número mínimo de formas. Prefira um fundo simples, como uma cor sólida ou um gradiente, que dê ênfase ao seu design principal — você não precisa preencher toda a tela do ícone com conteúdo.

![Uma imagem do ícone do app Podcasts.](../../images/app-icons/app-icons-embrace-simplicity-podcasts@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-embrace-simplicity-podcasts@2x.png)*

![Uma imagem do ícone do app Casa.](../../images/app-icons/app-icons-embrace-simplicity-home@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-embrace-simplicity-home@2x.png)*

**Ofereça um design de ícone visualmente consistente em todas as plataformas que o seu app suporta.** Um design consistente ajuda as pessoas a encontrar rapidamente o seu app onde quer que ele apareça e evita que as pessoas o confundam com vários apps.

**Considere basear o design do seu ícone em formas preenchidas e sobrepostas.** Formas sólidas sobrepostas no primeiro plano, principalmente quando combinadas com transparência e desfoque, podem dar ao ícone uma sensação de profundidade.

![Uma ilustração de dois círculos centralizados acima de uma grade. Um círculo envolve o outro. O círculo interno tem preenchimento sólido. O círculo externo é maior que o interno, deixando algum espaço entre eles. O círculo externo não tem preenchimento e mostra apenas um contorno.](../../images/app-icons/app-icons-element-outline-shape@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-element-outline-shape@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../images/app-icons/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de dois círculos centralizados acima de uma grade. Um círculo envolve o outro. O círculo interno tem preenchimento sólido. O círculo externo é maior que o interno, não tem contorno e tem um preenchimento semitransparente que permite ver a grade ao fundo. Juntos, os dois círculos dão a impressão de que o círculo interno está apoiado sobre o externo.](../../images/app-icons/app-icons-element-filled-shape@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-element-filled-shape@2x.png)*

![Uma marca de verificação em um círculo para indicar uso correto.](../../images/app-icons/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Inclua texto somente quando for essencial para a sua experiência ou marca.** O texto em ícones não oferece suporte a acessibilidade nem a localização, costuma ser pequeno demais para ser lido com facilidade e pode fazer o ícone parecer poluído. Em alguns contextos, o nome do seu app já aparece por perto, tornando redundante exibir o nome dentro do próprio ícone. Embora exibir um recurso mnemônico, como a primeira letra do nome do seu app, possa ajudar as pessoas a reconhecer o seu app ou jogo, evite incluir palavras não essenciais que dizem às pessoas o que fazer com ele — como “Assistir” ou “Jogar” — ou termos específicos de contexto, como “Novo” ou “Para visionOS”. Se você incluir texto em um ícone de app do tvOS, certifique-se de que ele esteja acima das outras camadas para que não seja cortado pelo efeito de paralaxe.

**Prefira ilustrações a fotos e evite replicar componentes de interface.** As fotos estão cheias de detalhes que não funcionam bem quando exibidas em diferentes aparências, vistas em tamanhos pequenos ou divididas em camadas. Em vez de usar fotos, crie uma representação gráfica do conteúdo que enfatize os recursos que você quer que as pessoas percebam. Evite espessuras de linha extremamente finas e cantos agudos, pois eles tendem a perder detalhe e nitidez em tamanhos de ícone menores e em resoluções mais baixas. Se o seu app tem uma interface que as pessoas reconhecem, não se limite a replicar componentes de interface padrão nem a usar capturas de tela do app no seu ícone.

**Não use réplicas de produtos de hardware da Apple.** Os produtos da Apple são protegidos por direitos autorais e não podem ser reproduzidos nos ícones do seu app.

## Efeitos visuais

**Deixe o sistema cuidar do desfoque e de outros efeitos visuais.** O sistema aplica dinamicamente efeitos visuais às camadas do ícone do seu app, portanto não há necessidade de incluir realces especulares, sombras projetadas entre camadas, bordas chanfradas, desfoques, brilhos e outros efeitos. Além de interferir nos efeitos fornecidos pelo sistema, os efeitos personalizados são estáticos, enquanto os do sistema são dinâmicos. Se você incluir efeitos visuais personalizados nas camadas do ícone, use-os de forma intencional e teste com cuidado no Icon Composer, em um dispositivo simulado no Device Hub ou em um dispositivo físico para garantir que apareçam como esperado e não entrem em conflito com os efeitos do sistema.

**Crie agrupamentos de camadas para aplicar efeitos a várias camadas de uma só vez.** Os efeitos do sistema normalmente ocorrem em camadas individuais. Se fizer sentido para o seu design, porém, você pode agrupar várias camadas no Icon Composer ou na sua ferramenta de design para que os efeitos ocorram no nível do grupo. Para um grupo, o Icon Composer oferece opções adicionais de personalização para efeitos do Liquid Glass, para que você possa configurar atributos como realces especulares, refração e translucidez.

## Aparências

No iOS, iPadOS e macOS, as pessoas podem escolher se os ícones de app na Tela de Início têm aparência padrão, escura, clara (clear) ou colorida (tinted). Por exemplo, alguém pode querer personalizar a aparência do ícone do app para combinar com o papel de parede. Você pode projetar variantes do ícone do app para cada variante de aparência, e o sistema gera automaticamente as variantes que você não fornecer.

![Uma grade mostrando as seis diferentes aparências do ícone do app Fotos no iOS. A linha superior mostra as variantes de ícone padrão, clear claro e tinted claro. A linha inferior mostra as variantes escuro, clear escuro e tinted escuro.](../../images/app-icons/app-icons-rendering-modes@2x.png) ![Uma grade mostrando as seis diferentes aparências do ícone do app Fotos no iOS. A linha superior mostra as variantes de ícone padrão, clear claro e tinted claro. A linha inferior mostra as variantes escuro, clear escuro e tinted escuro. (escuro)](../../images/app-icons/app-icons-rendering-modes~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-rendering-modes@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-icons-rendering-modes~dark@2x.png)*

**Mantenha as características do seu ícone consistentes entre as aparências.** Para criar uma experiência fluida, mantenha as principais características visuais do ícone iguais nas aparências padrão, escura, clear e tinted. Evite criar variantes personalizadas de ícone que troquem elementos a cada variante, o que pode dificultar para as pessoas encontrarem o seu app quando mudam de aparência.

**Projete ícones escuros e tinted que combinem com os ícones de apps e widgets do sistema.** Você pode preservar a paleta de cores do seu ícone padrão, mas lembre-se de que os ícones escuros são mais discretos, e os ícones clear e tinted são ainda mais. Um ótimo ícone de app é visível, legível e reconhecível, independentemente da variante de aparência.

**Use o seu ícone claro como base para o ícone escuro.** Escolha cores complementares que reflitam o design padrão e evite imagens excessivamente brilhantes. Fundos coloridos geralmente oferecem o maior contraste em ícones escuros. Para orientações, consulte [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode).

**Considere oferecer ícones de app alternativos.** No iOS, iPadOS, tvOS e em apps compatíveis executados no visionOS, é possível deixar que as pessoas acessem os ajustes do seu app para escolher uma versão alternativa do ícone do app. Por exemplo, um app de esportes pode oferecer ícones para diferentes times, permitindo que alguém escolha o seu favorito. Se você oferecer esse recurso, certifique-se de que cada ícone que você projetar permaneça estreitamente relacionado ao seu conteúdo e à sua experiência. Evite criar um que alguém possa confundir com outro app.

> **Observação:** Os ícones de app alternativos no iOS e iPadOS exigem suas próprias variantes escura, clear e tinted. Assim como o ícone padrão do seu app, todos os ícones alternativos e variantes estão sujeitos à revisão do app e devem seguir as [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/#design).

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS ou macOS.*

### tvOS

**Inclua uma zona de segurança para garantir que o sistema não corte o seu conteúdo.** Quando alguém coloca o ícone do seu app em foco, o sistema pode cortar o conteúdo ao redor das bordas à medida que o ícone é escalado e se move. Para garantir que o conteúdo do ícone esteja sempre visível, mantenha uma zona de segurança ao redor dele. Lembre-se de que a zona de segurança pode variar, dependendo do tamanho da imagem, da profundidade da camada e do movimento, e que o sistema corta mais as camadas de primeiro plano do que as de fundo.

![Um diagrama do ícone de Ajustes no tvOS com uma linha pontilhada branca dentro da borda externa, que indica a zona de segurança.](../../images/app-icons/tvos-app-icon-safe-zone@2x.png) ![Um diagrama do ícone de Ajustes no tvOS com uma linha pontilhada branca dentro da borda externa, que indica a zona de segurança. (escuro)](../../images/app-icons/tvos-app-icon-safe-zone~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/tvos-app-icon-safe-zone@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/tvos-app-icon-safe-zone~dark@2x.png)*

### visionOS

**Evite adicionar à camada de fundo uma forma que pareça um buraco ou uma área côncava.** A sombra e os realces especulares adicionados pelo sistema podem fazer essa forma se destacar em vez de recuar.

### watchOS

**Evite usar preto como fundo do ícone.** Clareie um fundo preto para que o ícone não se misture ao fundo da tela.

## Especificações

O layout, o tamanho, o estilo e as aparências dos ícones de app variam conforme a plataforma.

| Plataforma | Formato do layout | Formato do ícone após a máscara do sistema | Tamanho do layout | Estilo | Aparências |
|---|---|---|---|---|---|
| iOS, iPadOS, macOS | Quadrado | Retângulo arredondado (quadrado) | 1024x1024 px | Em camadas | Padrão, escura, clear clara, clear escura, tinted clara, tinted escura |
| tvOS | Retângulo (paisagem) | Retângulo arredondado (retangular) | 800x480 px | Em camadas (paralaxe) | N/D |
| visionOS | Quadrado | Circular | 1024x1024 px | Em camadas (3D) | N/D |
| watchOS | Quadrado | Circular | 1088x1088 px | Em camadas | N/D |

O sistema escala automaticamente o seu ícone para produzir variantes menores que aparecem em determinados locais, como Ajustes e notificações.

Os ícones de app oferecem suporte aos seguintes espaços de cor:

- sRGB (colorido)
- Gray Gamma 2.2 (escala de cinza)
- Display P3 (cor de gama ampla apenas no iOS, iPadOS, macOS, tvOS e watchOS)

## Recursos

#### Relacionados

[Apple Design Resources](https://developer.apple.com/design/resources/)

[Icon Composer](https://developer.apple.com/icon-composer/)

[Ícones](https://developer.apple.com/design/human-interface-guidelines/icons)

[Imagens](https://developer.apple.com/design/human-interface-guidelines/images)

[Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode)

#### Documentação para desenvolvedores

[Creating your app icon using Icon Composer](https://developer.apple.com/documentation/xcode/creating-your-app-icon-using-icon-composer)

[Configuring your app icon using an asset catalog](https://developer.apple.com/documentation/xcode/configuring-your-app-icon)

#### Vídeos

- [Say hello to the new look of app icons](https://developer.apple.com/videos/play/wwdc2025/220)
- [Create icons with Icon Composer](https://developer.apple.com/videos/play/wwdc2025/361)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 8 de junho de 2026 | Orientações refinadas para o Liquid Glass. |
| 9 de junho de 2025 | Orientações atualizadas para refletir ícones em camadas, consistência entre plataformas e boas práticas para o Liquid Glass. |
| 10 de junho de 2024 | Adicionadas orientações para criar variantes escuras e tinted de ícones de app para iOS e iPadOS. |
| 31 de janeiro de 2024 | Esclarecida a disponibilidade por plataforma dos ícones de app alternativos. |
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
| 14 de setembro de 2022 | Adicionadas especificações para o Apple Watch Ultra. |
