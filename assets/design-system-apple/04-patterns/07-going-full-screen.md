# Tela inteira (Going full screen)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/going-full-screen
>
> Plataformas: ios,ipados,macos

*iPhone, iPad e Mac oferecem modos de tela inteira que permitem às pessoas expandir uma janela para preencher a tela, ocultando os controles do sistema e proporcionando um ambiente livre de distrações.*

![Um esboço de duas setas apontando para fora, dispostas em uma linha vertical que se estende do canto superior esquerdo ao canto inferior direito, sugerindo expansão. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple em seis cores.](../../images/going-full-screen/patterns-going-full-screen-intro@2x.png) ![Um esboço de duas setas apontando para fora, dispostas em uma linha vertical que se estende do canto superior esquerdo ao canto inferior direito, sugerindo expansão. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple em seis cores. (escuro)](../../images/going-full-screen/patterns-going-full-screen-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-going-full-screen-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-going-full-screen-intro~dark@2x.png)*

O Apple TV e o Apple Watch não oferecem modos de tela inteira porque apps e jogos já preenchem a tela por padrão. O Apple Vision Pro não oferece um modo de tela inteira porque as pessoas podem expandir uma janela para preencher mais do campo de visão ou usar a Digital Crown para ocultar o passthrough e passar para uma experiência mais imersiva (para orientações, consulte [Immersive experiences](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences)).

## Boas práticas

**Ofereça suporte ao modo de tela inteira quando fizer sentido para a sua experiência.** As pessoas apreciam o modo de tela inteira quando querem se concentrar em uma tarefa ou se imergir no conteúdo. Considere oferecer um modo de tela inteira se a sua experiência permite jogar; ver mídia, como vídeos ou apresentações de fotos; ou executar uma tarefa aprofundada que se beneficia de um ambiente livre de distrações.

**Se necessário, ajuste o layout no modo de tela inteira, mas não redimensione a janela programaticamente.** Quando uma janela é maior no modo de tela inteira do que fora dele, você quer manter o conteúdo essencial em destaque enquanto aproveita bem o espaço extra. Por exemplo, pode fazer sentido ajustar as proporções da interface sem alterar quais itens aparecem. Se fizer esses ajustes, certifique-se de que sejam sutis o bastante para manter uma interface consistente e evitar transições visualmente desagradáveis entre os modos.

**Continue oferecendo acesso aos recursos e controles essenciais para que as pessoas possam concluir a tarefa sem sair do modo de tela inteira.** Por exemplo, uma experiência de mídia em tela inteira precisa deixar os controles de reprodução disponíveis de forma persistente ou fáceis de revelar quando as pessoas precisarem deles.

**Exceto em jogos, deixe as pessoas revelarem o Dock enquanto seu app do iPadOS ou macOS está em tela inteira.** No iPadOS e no macOS, é importante preservar o acesso ao Dock para que as pessoas possam abrir rapidamente outros apps e itens do Dock. Para ajudar a evitar que as pessoas revelem o Dock acidentalmente enquanto jogam seu jogo em tela inteira, você pode pedir ao iPadOS que ignore um primeiro deslizar para cima a partir da borda inferior da tela ou ocultar totalmente o Dock no macOS. Para orientações para desenvolvedores, consulte [preferredScreenEdgesDeferringSystemGestures](https://developer.apple.com/documentation/swiftui/uihostingcontroller/preferredscreenedgesdeferringsystemgestures) (SwiftUI), [preferredScreenEdgesDeferringSystemGestures](https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredscreenedgesdeferringsystemgestures) (UIKit) e [hideDock](https://developer.apple.com/documentation/appkit/nsapplication/presentationoptions-swift.struct/hidedock) (AppKit).

**Depois que as pessoas saírem da sua experiência em tela inteira, ajude-as a retomar de onde pararam quando voltarem.** Por exemplo, um jogo ou uma apresentação de slides precisa pausar automaticamente quando as pessoas saem da experiência, para que não percam nada.

**Deixe as pessoas escolherem quando sair do modo de tela inteira.** As pessoas geralmente não esperam que o modo de tela inteira termine automaticamente quando mudam para outra experiência ou terminam uma atividade absorvente, como jogar ou assistir a um filme.

**Priorize o conteúdo ocultando temporariamente barras de ferramentas e controles de navegação.** Você pode oferecer um ambiente livre de distrações ocultando elementos quando o conteúdo é o foco principal, como ao ver fotos em tela inteira ou ler um documento. Se implementar esse comportamento, deixe as pessoas restaurarem os elementos ocultos com um gesto ou ação familiar, como tocar, deslizar para baixo ou mover o cursor para a parte superior da tela. Mantenha os controles visíveis quando forem essenciais para a navegação ou para a execução de tarefas. Embora uma janela do visionOS possa ocultar suas barras de ferramentas ou controles de navegação, as pessoas geralmente esperam diferentes tipos de experiências imersivas ao usar o Apple Vision Pro; para orientações, consulte [Immersive experiences](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences).

## Considerações por plataforma

*Não compatível com tvOS, visionOS ou watchOS.*

### iOS, iPadOS

**Considere adiar os gestos do sistema para evitar saídas acidentais em um app ou jogo em tela inteira.** Por padrão, o indicador da Tela de Início se oculta automaticamente pouco depois de alguém mudar para o seu app ou jogo. Ele reaparece quando alguém interage com a parte inferior da tela, permitindo sair com um único deslizar. Sempre que possível, mantenha esse comportamento porque ele é familiar e é o que as pessoas esperam. Se oferecer esse suporte resultar em saídas inesperadas, você pode habilitar dois deslizares em vez de um para sair. Para orientações para desenvolvedores, consulte [preferredScreenEdgesDeferringSystemGestures](https://developer.apple.com/documentation/swiftui/uihostingcontroller/preferredscreenedgesdeferringsystemgestures).

### macOS

**Use a experiência de tela inteira fornecida pelo sistema.** Usar o suporte de tela inteira do sistema garante que sua janela em tela inteira funcione bem em todos os contextos. Por exemplo, alguns modelos de Mac incluem um recorte de câmera que ocupa uma área no centro superior da tela. Usar o suporte de tela inteira do sistema acomoda essa área automaticamente. Para orientações para desenvolvedores, consulte [toggleFullScreen(_:)](https://developer.apple.com/documentation/appkit/nswindow/togglefullscreen(_:)).

**Em um jogo, não altere o modo de exibição quando os jogadores entrarem em tela inteira.** As pessoas esperam ter controle sobre o modo de exibição, e alterá-lo automaticamente não melhora o desempenho.

Para mais orientações para desenvolvedores, consulte [Managing your game window for Metal in macOS](https://developer.apple.com/documentation/metal/managing-your-game-window-for-metal-in-macos).

**Sempre deixe as pessoas escolherem quando entrar no modo de tela inteira.** Prefira deixar as pessoas usarem o botão Entrar em Tela Inteira da janela, o item de menu Visualizar ou o atalho de teclado Control-Command-F. Evite oferecer um menu personalizado de modos de janela. Em um jogo, você também pode oferecer um [toggle](https://developer.apple.com/design/human-interface-guidelines/toggles) personalizado que ativa e desativa o modo de tela inteira.

## Recursos

#### Relacionados

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

[Multitarefa](https://developer.apple.com/design/human-interface-guidelines/multitasking)

[Janelas](https://developer.apple.com/design/human-interface-guidelines/windows)

[A barra de menus](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar)

#### Documentação para desenvolvedores

[fullScreenCover(item:onDismiss:content:)](https://developer.apple.com/documentation/swiftui/view/fullscreencover(item:ondismiss:content:)) — SwiftUI

[NSScreen](https://developer.apple.com/documentation/appkit/nsscreen) — AppKit

[NSWindow.CollectionBehavior](https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct) — AppKit

[Managing your game window for Metal in macOS](https://developer.apple.com/documentation/metal/managing-your-game-window-for-metal-in-macos) — Swift, Objective-C

#### Vídeos

- [Elevate the design of your iPad app](https://developer.apple.com/videos/play/wwdc2025/208)

## Histórico de alterações

| Data | Alterações |
|---|---|
| June 9, 2025 | Atualizadas as orientações para ocultar barras de ferramentas e controles de navegação e para adiar os gestos do indicador da Tela de Início em apps e jogos de iOS e iPadOS em tela inteira. |
| June 10, 2024 | Aprimoradas as orientações para jogar em modo de tela inteira. |
