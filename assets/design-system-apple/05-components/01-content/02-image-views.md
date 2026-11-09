# Visualizações de imagem (Image views)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/image-views
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Uma image view exibe uma única imagem — ou, em alguns casos, uma sequência animada de imagens — sobre um fundo transparente ou opaco.*

![Uma representação estilizada de uma foto. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/image-views/components-image-view-intro@2x.png) ![Uma representação estilizada de uma foto. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/image-views/components-image-view-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-image-view-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-image-view-intro~dark@2x.png)*

Dentro de uma image view, você pode esticar, dimensionar, ajustar ao tamanho ou fixar a imagem em um local específico. As image views normalmente não são interativas.

## Boas práticas

**Use uma image view quando o objetivo principal da view for simplesmente exibir uma imagem.** Nos raros casos em que você queira que uma imagem seja interativa, configure um [botão](https://developer.apple.com/design/human-interface-guidelines/buttons) fornecido pelo sistema para exibir a imagem, em vez de adicionar comportamentos de botão a uma image view.

**Se quiser exibir um ícone na sua interface, considere usar um símbolo ou ícone de interface em vez de uma image view.** O [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) oferece uma grande biblioteca de imagens simplificadas e baseadas em vetores que você pode renderizar com várias cores e opacidades. Um [ícone](https://developer.apple.com/design/human-interface-guidelines/icons) (também chamado de glifo ou imagem modelo) é normalmente uma imagem bitmap em que os pixels não transparentes podem receber cor. Tanto símbolos quanto ícones de interface podem usar as cores de destaque escolhidas pelas pessoas.

## Conteúdo

Uma image view pode conter dados de imagem ricos em vários formatos, como PNG, JPEG e PDF. Para mais orientações, consulte [Imagens](https://developer.apple.com/design/human-interface-guidelines/images).

**Tenha cuidado ao sobrepor texto a imagens.** Compor texto sobre imagens pode diminuir tanto a nitidez da imagem quanto a legibilidade do texto. Para ajudar a melhorar os resultados, garanta que o texto contraste bem com a imagem e considere maneiras de destacar o objeto de texto, como adicionar uma sombra de texto ou uma camada de fundo.

**Procure usar um tamanho consistente para todas as imagens de uma sequência animada.** Quando você pré-dimensiona as imagens para caberem na view, o sistema não precisa fazer nenhum dimensionamento. Nos casos em que o sistema precisa fazer o dimensionamento, o desempenho geralmente é melhor quando todas as imagens têm o mesmo tamanho e formato.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS ou iPadOS.*

### macOS

**Se seu app precisar de uma image view editável, use um image well.** Um [image well](https://developer.apple.com/design/human-interface-guidelines/image-wells) é uma image view que oferece suporte a copiar, colar, arrastar e usar a tecla Delete para limpar seu conteúdo.

**Use um botão de imagem em vez de uma image view para criar uma imagem clicável.** Um [botão de imagem](https://developer.apple.com/design/human-interface-guidelines/buttons#Image-buttons) contém uma imagem ou ícone, aparece em uma view e inicia uma ação instantânea específica do app.

### tvOS

Muitas imagens do tvOS combinam várias camadas com transparência para criar uma sensação de profundidade. Para orientações, consulte [Imagens em camadas](https://developer.apple.com/design/human-interface-guidelines/images#Layered-images).

### visionOS

As janelas em apps e jogos do visionOS podem usar image views para exibir imagens 2D e estereoscópicas, além de fotos espaciais. Se seu app usar o RealityKit, você também pode exibir imagens de qualquer tipo fora de image views, ao lado de conteúdo 3D, ou gerar uma cena espacial a partir de uma imagem 2D existente. Para orientações de design, consulte [Imagens > visionOS](https://developer.apple.com/design/human-interface-guidelines/images#visionOS); para orientações a desenvolvedores, consulte [ImagePresentationComponent](https://developer.apple.com/documentation/realitykit/imagepresentationcomponent).

Para orientações sobre como apresentar outros conteúdos 3D em uma janela ou volume, consulte [Janelas > visionOS](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS).

### watchOS

**Use o SwiftUI para criar animações sempre que possível.** Alternativamente, você pode usar o WatchKit para animar uma sequência de imagens dentro de um elemento de imagem, se necessário. Para orientações a desenvolvedores, consulte [WKImageAnimatable](https://developer.apple.com/documentation/watchkit/wkimageanimatable).

## Recursos

#### Relacionados

[Imagens](https://developer.apple.com/design/human-interface-guidelines/images)

[Image wells](https://developer.apple.com/design/human-interface-guidelines/image-wells)

[Botões de imagem](https://developer.apple.com/design/human-interface-guidelines/buttons#Image-buttons)

[SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols)

#### Documentação para desenvolvedores

[Image](https://developer.apple.com/documentation/swiftui/image) — SwiftUI

[UIImageView](https://developer.apple.com/documentation/uikit/uiimageview) — UIKit

[NSImageView](https://developer.apple.com/documentation/appkit/nsimageview) — AppKit

#### Vídeos

- [Ofereça suporte a imagens HDR no seu app](https://developer.apple.com/videos/play/wwdc2023/10181)
- [Adicione gráficos ricos ao seu app SwiftUI](https://developer.apple.com/videos/play/wwdc2021/10021)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
