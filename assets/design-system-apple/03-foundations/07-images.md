# Imagens (Images)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/images
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Para garantir que sua arte tenha ótima aparência em todos os dispositivos compatíveis, aprenda como o sistema exibe o conteúdo e como entregar a arte nas escalas apropriadas.*

![Um esboço de uma foto, sugerindo imagética. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple em seis cores.](../../images/images/foundations-images-intro@2x.png) ![Um esboço de uma foto, sugerindo imagética. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple em seis cores. (escuro)](../../images/images/foundations-images-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-images-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-images-intro~dark@2x.png)*

## Resolução

Diferentes dispositivos podem exibir imagens em diferentes resoluções. Por exemplo, um dispositivo 2D exibe imagens de acordo com a resolução da sua tela.

Um *ponto* é uma unidade de medida abstrata que ajuda o conteúdo visual a permanecer consistente independentemente de como é exibido. Em plataformas 2D, um ponto corresponde a um número de pixels que pode variar de acordo com a resolução da tela; no visionOS, um ponto é um valor angular que permite que o conteúdo visual seja dimensionado de acordo com sua distância do observador.

Ao criar imagens bitmap, você especifica um *fator de escala* que determina a resolução de uma imagem. Você pode visualizar o fator de escala considerando a densidade de pixels por ponto em telas 2D de várias resoluções. Por exemplo, um fator de escala de 1 (também chamado @1x) descreve uma densidade de pixels de 1:1, em que um pixel equivale a um ponto. Telas 2D de alta resolução têm densidades de pixels maiores, como 2:1 ou 3:1. Uma densidade de 2:1 (chamada @2x) tem fator de escala 2, e uma densidade de 3:1 (chamada @3x) tem fator de escala 3. Por causa das densidades de pixels maiores, telas de alta resolução exigem imagens com mais pixels.

![Imagem de um círculo em resolução padrão com fator de escala @1x, com 10 por 10 pixels.](../../images/images/image-resolution-1x@2x.png) ![Imagem de um círculo em resolução padrão com fator de escala @1x, com 10 por 10 pixels. (escuro)](../../images/images/image-resolution-1x~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/image-resolution-1x@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/image-resolution-1x~dark@2x.png)*

![Imagem de um círculo em alta resolução com fator de escala @2x, com 20 por 20 pixels.](../../images/images/image-resolution-2x@2x.png) ![Imagem de um círculo em alta resolução com fator de escala @2x, com 20 por 20 pixels. (escuro)](../../images/images/image-resolution-2x~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/image-resolution-2x@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/image-resolution-2x~dark@2x.png)*

![Imagem de um círculo em alta resolução com fator de escala @3x, com 30 por 30 pixels.](../../images/images/image-resolution-3x@2x.png) ![Imagem de um círculo em alta resolução com fator de escala @3x, com 30 por 30 pixels. (escuro)](../../images/images/image-resolution-3x~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/image-resolution-3x@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/image-resolution-3x~dark@2x.png)*

**Forneça recursos de alta resolução para todas as imagens bitmap do seu app, para cada dispositivo compatível.** Ao adicionar cada imagem ao catálogo de recursos do seu projeto, identifique seu fator de escala acrescentando “@1x”, “@2x” ou “@3x” ao nome do arquivo. Use os valores a seguir como orientação; para fatores de escala adicionais, consulte [Layout](https://developer.apple.com/design/human-interface-guidelines/layout).

| Plataforma | Fatores de escala |
|---|---|
| iPadOS, watchOS | @2x |
| iOS | @2x e @3x |
| visionOS | @2x ou superior (consulte [visionOS](https://developer.apple.com/design/human-interface-guidelines/images#visionOS)) |
| macOS, tvOS | @1x e @2x |

**Em geral, projete as imagens na menor resolução e amplie-as para criar recursos de alta resolução.** Ao usar formas vetorizadas redimensionáveis, convém posicionar os pontos de controle em valores inteiros para que fiquem bem alinhados em 1x. Esse posicionamento permite que os pontos permaneçam bem alinhados à grade raster em resoluções maiores, porque 2x e 3x são múltiplos de 1x.

## Formatos

Ao criar diferentes tipos de imagens, considere as recomendações a seguir.

| Tipo de imagem | Formato |
|---|---|
| Trabalho bitmap ou raster | Arquivos PNG sem entrelaçamento |
| Gráficos PNG que não exigem cor de 24 bits completa | Uma paleta de cores de 8 bits |
| Fotos | Arquivos JPEG, otimizados conforme necessário, ou arquivos HEIC |
| Fotos estéreo ou espaciais | HEIC estéreo |
| Ícones planos, ícones de interface e outras artes planas que exigem escala em alta resolução | Arquivos PDF ou SVG |

## Boas práticas

**Inclua um perfil de cor em cada imagem.** Perfis de cor ajudam a garantir que as cores do seu app apareçam como pretendido em diferentes telas. Para orientações, consulte [Color management](https://developer.apple.com/design/human-interface-guidelines/color#Color-management).

**Sempre teste as imagens em uma variedade de dispositivos reais.** Uma imagem que parece ótima durante o design pode aparecer pixelada, esticada ou comprimida quando vista em vários dispositivos.

## Considerações por plataforma

*Sem considerações adicionais para iOS, iPadOS ou macOS.*

### tvOS

As imagens em camadas são o centro da experiência do usuário no Apple TV. O sistema combina imagens em camadas, transparência, escala e movimento para produzir uma sensação de realismo e vigor que evoca uma conexão pessoal enquanto as pessoas interagem com o conteúdo na tela.

#### Efeito de paralaxe

*Paralaxe* é um efeito visual sutil que o sistema usa para transmitir profundidade e dinamismo quando um elemento está em foco. Quando um elemento entra em foco, o sistema o eleva para o primeiro plano, balançando-o suavemente enquanto aplica uma iluminação que faz a superfície do elemento parecer brilhar. Após um período de inatividade, o conteúdo fora de foco escurece e o elemento em foco se expande.

Imagens em camadas são necessárias para oferecer suporte ao efeito de paralaxe.

![Uma animação de um ícone de app do tvOS se movendo para mostrar o efeito de paralaxe.](../../images/images/tvos-app-icon-parallax-effect-animation@2x.png)

*Vídeo: Uma animação de um ícone de app do tvOS se movendo para mostrar o efeito de paralaxe.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/tvos-app-icon-parallax-effect-animation.mp4)

#### Imagens em camadas

Uma *imagem em camadas* consiste em duas a cinco camadas distintas que se combinam para formar uma única imagem. A separação entre as camadas, junto com o uso de transparência, cria uma sensação de profundidade. Quando alguém interage com uma imagem, as camadas mais próximas da superfície se elevam e escalam, sobrepondo as camadas inferiores mais ao fundo e produzindo um efeito 3D.

> **Importante:** O [ícone de app](https://developer.apple.com/design/human-interface-guidelines/app-icons#tvOS) do seu app tvOS deve usar uma imagem em camadas. Para outras imagens focalizáveis no seu app, incluindo imagens do [Top Shelf](https://developer.apple.com/design/human-interface-guidelines/top-shelf), imagens em camadas são fortemente incentivadas, mas opcionais.

Você pode incorporar imagens em camadas no seu app ou obtê-las de um servidor de conteúdo em tempo de execução. Para orientações sobre como adicionar imagens em camadas ao seu app, consulte o [Parallax Previewer User Guide](https://help.apple.com/itc/parallaxpreviewer/).

> **Nota para desenvolvedores:** Se o seu app obtém imagens em camadas de um servidor de conteúdo em tempo de execução, você deve fornecer imagens em camadas de runtime (`.lcr`). Você pode gerá-las a partir de arquivos LSR ou arquivos do Photoshop usando a ferramenta de linha de comando `layerutil` fornecida pelo Xcode. As imagens em camadas de runtime são destinadas a ser baixadas — não as incorpore no seu app.

**Use elementos de interface padrão para exibir imagens em camadas.** Se você usa views padrão e APIs de foco fornecidas pelo sistema — como [FocusState](https://developer.apple.com/documentation/swiftui/focusstate) — as imagens em camadas recebem automaticamente o tratamento de paralaxe quando as pessoas as colocam em foco.

**Identifique elementos lógicos de primeiro plano, plano intermediário e fundo.** Nas camadas de primeiro plano, exiba elementos de destaque, como um personagem em um jogo ou o texto na capa de um álbum ou pôster de filme. As camadas intermediárias são perfeitas para conteúdo secundário e efeitos como sombras. As camadas de fundo são pano de fundo opacos que destacam as camadas de primeiro plano e intermediárias sem roubar a atenção delas.

**Em geral, mantenha o texto no primeiro plano.** A menos que você queira obscurecer o texto, leve-o para a camada de primeiro plano para maior clareza.

**Mantenha a camada de fundo opaca.** Usar níveis variados de opacidade para deixar o conteúdo transparecer pelas camadas superiores é aceitável, mas a camada de fundo deve ser opaca — você receberá um erro se não for. Uma camada de fundo opaca garante que sua arte tenha ótima aparência com paralaxe, sombras projetadas e fundos do sistema.

**Mantenha as camadas simples e sutis.** A paralaxe foi projetada para ser quase imperceptível. Efeitos 3D excessivos podem parecer irreais e desagradáveis. Mantenha a profundidade simples para dar vida ao seu conteúdo e proporcionar prazer.

**Deixe uma zona de segurança ao redor das camadas de primeiro plano da sua imagem.** Quando em foco, o conteúdo de algumas camadas pode ser cortado conforme a imagem em camadas é escalada e se move. Para garantir que o conteúdo essencial esteja sempre visível, mantenha-o dentro de uma zona de segurança. Para orientações, consulte [App icons](https://developer.apple.com/design/human-interface-guidelines/app-icons).

**Sempre visualize as imagens em camadas.** Para garantir que suas imagens em camadas tenham ótima aparência no Apple TV, visualize-as ao longo do processo de design usando o Xcode, o app Parallax Previewer para macOS ou o plug-in Parallax Exporter para Adobe Photoshop. Preste atenção especial à escala e ao recorte e reajuste suas imagens conforme necessário para manter o conteúdo importante seguro. Depois que suas imagens em camadas estiverem finalizadas, visualize-as em uma TV real para ter a representação mais precisa do que as pessoas verão. Para baixar o Parallax Previewer e o Parallax Exporter, consulte [Recursos](https://developer.apple.com/design/resources/#parallax-previewer).

### visionOS

No visionOS, as pessoas podem ver imagens em uma gama de tamanhos muito maior do que em qualquer outra plataforma, e o sistema dimensiona dinamicamente a resolução da imagem para corresponder ao tamanho atual. Como você pode posicionar imagens em ângulos específicos no ambiente de alguém, os pixels da imagem podem não corresponder 1:1 aos pixels da tela.

**Crie um ícone de app em camadas.** Os ícones de app no visionOS são compostos por duas a três camadas que dão a aparência de profundidade ao se moverem em velocidades sutilmente diferentes quando o ícone está em foco. Para orientações, consulte [Layer design](https://developer.apple.com/design/human-interface-guidelines/app-icons#Layer-design).

**Prefira arte vetorial para imagens 2D.** Evite conteúdo bitmap porque ele pode não ter boa aparência quando o sistema o amplia. Se você usa camadas do Core Animation, consulte [Drawing sharp layer-based content in visionOS](https://developer.apple.com/documentation/visionos/drawing-sharp-layer-based-content) para orientações para desenvolvedores.

**Se precisar usar imagens rasterizadas, equilibre qualidade e desempenho ao escolher uma resolução.** Embora uma imagem @2x tenha boa aparência em distâncias de visualização comuns, sua resolução fixa significa que o sistema não a dimensiona dinamicamente e ela pode não parecer nítida de perto. Para ajudar uma imagem rasterizada a parecer nítida quando vista de uma ampla gama de distâncias, você pode usar uma resolução maior, mas cada aumento de resolução resulta em um arquivo maior e pode afetar o desempenho em tempo de execução do seu app, especialmente para resoluções acima de @6x. Se você usa imagens com resoluções maiores que @2x, aplique também filtragem de imagem de alta qualidade para ajudar a equilibrar qualidade e desempenho (para orientações para desenvolvedores, consulte [filters](https://developer.apple.com/documentation/quartzcore/calayer/filters)).

#### Fotos espaciais e cenas espaciais

Além de imagens 2D e estereoscópicas, apps e jogos do visionOS podem usar o RealityKit para exibir fotos espaciais e cenas espaciais. Uma *foto espacial* é uma foto estereoscópica com metadados espaciais adicionais, capturada no iPhone 15 Pro ou posterior, no Apple Vision Pro ou em outra câmera compatível. Uma *cena espacial* é uma imagem 3D gerada a partir de uma imagem 2D para adicionar um efeito de paralaxe que responde ao movimento da cabeça. Para orientações para desenvolvedores, consulte [ImagePresentationComponent](https://developer.apple.com/documentation/realitykit/imagepresentationcomponent).

**Garanta que as fotos espaciais sejam renderizadas corretamente no seu app.** Use o formato High-Efficiency Image Codec (HEIC) estéreo para exibir uma foto espacial no seu app. Quando você adiciona metadados espaciais a um HEIC estéreo, o visionOS reconhece a foto como espacial e inclui tratamentos visuais que ajudam a minimizar causas comuns de desconforto na visualização estéreo.

**Prefira o efeito de fundo de vidro com bordas suavizadas para exibir texto sobre fotos espaciais.** Se você precisa colocar texto sobre uma foto espacial no seu app ou jogo, use o efeito de fundo de vidro com bordas suavizadas. O efeito adiciona contraste para tornar o texto legível e desfoca os detalhes para ajudar a reduzir o desconforto visual quando as pessoas veem texto sobre fotos espaciais. Para orientações para desenvolvedores, consulte [GlassBackgroundEffect](https://developer.apple.com/documentation/swiftui/glassbackgroundeffect).

**Leve em conta o conforto visual ao criar fotos espaciais a partir de conteúdo 2D existente.** Ao ajustar os metadados espaciais de uma foto para seu app ou jogo, considere como você quer que as pessoas vejam seu conteúdo. Metadados como o ajuste de disparidade podem alterar como as pessoas percebem a cena 3D e podem causar desconforto visual a partir de certas posições de visualização. Para orientações para desenvolvedores, consulte [Creating spatial photos and videos with spatial metadata](https://developer.apple.com/documentation/imageio/creating-spatial-photos-and-videos-with-spatial-metadata).

**Exiba fotos espaciais e cenas espaciais em views independentes.** Evite exibir fotos espaciais em linha com outro conteúdo, pois isso pode causar desconforto visual. Em vez disso, apresente fotos espaciais ou cenas espaciais em uma view separada, como uma sheet ou janela. Se for necessário exibir imagens estereoscópicas em linha, ofereça um espaçamento generoso entre a imagem e qualquer conteúdo em linha para ajudar os olhos das pessoas a se ajustarem às mudanças de profundidade.

**Use cenas espaciais no seu app para momentos específicos.** Cada cena espacial pode levar até vários segundos para ser gerada a partir de uma imagem existente. Projete experiências levando essa limitação em conta. Por exemplo, o app Fotos oferece uma ação explícita para criar uma cena espacial enquanto se está imerso em uma única foto. Evite exibir muitas cenas espaciais ao mesmo tempo. Em vez disso, use scroll views, paginação ou ações explícitas para passar a novas fotos e manter simples a hierarquia de informações visuais.

**Ao exibir de forma imersiva, prefira uma interface mínima.** Por exemplo, o app Spatial Gallery exibe um único conteúdo com uma legenda pequena e um único botão Voltar, contando com gestos de deslizar para navegar entre os itens.

**Prefira exibir cenas espaciais maiores e centralizadas no campo de visão de alguém.** Quando as pessoas veem uma cena espacial, podem mover a cabeça lateralmente para ver o efeito de paralaxe. Cenas espaciais menores oferecem menos efeito de paralaxe e podem não ter o mesmo impacto sobre quem as vê.

### watchOS

**Em geral, evite transparência para manter pequenos os arquivos de imagem.** Se você sempre compõe uma imagem sobre a mesma cor de fundo sólida, é mais eficiente incluir o fundo na imagem. No entanto, a transparência é necessária em imagens de complicações, ícones de menu e outros ícones de interface que servem como imagens de modelo, porque o sistema a usa para determinar onde aplicar a cor.

**Use PDFs com escala automática para fornecer um único recurso para todos os tamanhos de tela.** Projete sua imagem para as telas de 40 mm e 42 mm em 2x. Ao carregar o PDF, o WatchKit dimensiona automaticamente a imagem com base no tamanho da tela do dispositivo, usando os valores mostrados abaixo:

| Tamanho da tela | Escala da imagem |
|---|---|
| 38 mm | 90% |
| 40 mm | 100% |
| 41 mm | 106% |
| 42 mm | 100% |
| 44 mm | 110% |
| 45 mm | 119% |
| 49 mm | 119% |

## Recursos

#### Relacionados

[Apple Design Resources](https://developer.apple.com/design/resources/)

#### Documentação para desenvolvedores

[Drawing sharp layer-based content in visionOS](https://developer.apple.com/documentation/visionos/drawing-sharp-layer-based-content) — visionOS

[Images](https://developer.apple.com/documentation/swiftui/images) — SwiftUI

[UIImageView](https://developer.apple.com/documentation/uikit/uiimageview) — UIKit

[NSImageView](https://developer.apple.com/documentation/appkit/nsimageview) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| December 16, 2025 | Adicionadas orientações para fotos espaciais e cenas espaciais no visionOS. |
| December 5, 2023 | Esclarecidas as orientações sobre a escolha de uma resolução para uma imagem rasterizada em um app visionOS. |
| June 21, 2023 | Atualizado para incluir orientações para o visionOS. |
| September 14, 2022 | Adicionadas especificações para o Apple Watch Ultra. |
