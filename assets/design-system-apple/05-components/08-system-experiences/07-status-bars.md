# Barras de status (Status bars)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/status-bars
>
> Plataformas: ios,ipados

*Uma barra de status aparece ao longo da borda superior da tela e exibe informações sobre o estado atual do dispositivo, como a hora, a operadora de celular e o nível da bateria.*

![Uma representação estilizada de uma barra de status do iPhone com rótulos mostrando a hora e os níveis de celular, Wi-Fi e bateria. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/status-bars/components-status-bar-intro@2x.png) ![Uma representação estilizada de uma barra de status do iPhone com rótulos mostrando a hora e os níveis de celular, Wi-Fi e bateria. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/status-bars/components-status-bar-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-status-bar-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-status-bar-intro~dark@2x.png)*

## Boas práticas

**Obscureça o conteúdo sob a barra de status.** Por padrão, o fundo da barra de status é transparente, permitindo que o conteúdo abaixo apareça através dela. Essa transparência pode dificultar a visualização das informações apresentadas na barra de status. Se controles estiverem visíveis atrás da barra de status, as pessoas podem tentar interagir com eles e não conseguir. Mantenha a barra de status legível e não sugira que o conteúdo atrás dela seja interativo. Prefira usar um efeito de borda de rolagem para posicionar uma view desfocada atrás da barra de status. Para orientações a desenvolvedores, consulte [ScrollEdgeEffectStyle](https://developer.apple.com/documentation/swiftui/scrolledgeeffectstyle) e [UIScrollEdgeEffect](https://developer.apple.com/documentation/uikit/uiscrolledgeeffect).

**Considere ocultar temporariamente a barra de status ao exibir mídia em tela inteira.** Uma barra de status pode distrair quando as pessoas estão prestando atenção na mídia. Oculte temporariamente esses elementos para oferecer uma experiência mais imersiva. O app Fotos, por exemplo, oculta a barra de status e outros elementos da interface quando as pessoas navegam por fotos em tela inteira.

![Uma captura de tela da metade superior do app Fotos no iPhone, mostrando uma foto preenchendo a tela. A barra de status está visível na parte superior da tela.](../../../images/status-bars/status-bar-visible@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/status-bar-visible@2x.png)*

![Uma captura de tela da metade superior do app Fotos no iPhone, mostrando uma foto preenchendo a tela. A barra de status está oculta e somente a foto está visível.](../../../images/status-bars/status-bar-hidden@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/status-bar-hidden@2x.png)*

**Evite ocultar a barra de status de forma permanente.** Sem uma barra de status, as pessoas precisam sair do seu app para verificar a hora ou ver se têm uma conexão Wi-Fi. Permita que as pessoas exibam novamente uma barra de status oculta com um gesto simples e fácil de descobrir. Por exemplo, ao navegar por fotos em tela inteira no app Fotos, um único toque exibe a barra de status novamente.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS ou iPadOS. Não compatível com macOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Documentação para desenvolvedores

[UIStatusBarStyle](https://developer.apple.com/documentation/uikit/uistatusbarstyle) — UIKit

[preferredStatusBarStyle](https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredstatusbarstyle) — UIKit
