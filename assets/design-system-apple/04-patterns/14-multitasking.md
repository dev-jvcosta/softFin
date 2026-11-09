# Multitarefa (Multitasking)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/multitasking
>
> Plataformas: ios,ipados,macos,tvos,visionos

*A multitarefa permite que as pessoas alternem rapidamente de um app para outro, executando tarefas em cada um.*

![Um esboço de duas janelas lado a lado em um arranjo de visualização dividida, sugerindo multitarefa. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que remete sutilmente ao laranja do logotipo original da Apple de seis cores.](../../images/multitasking/patterns-multitasking-intro@2x.png) ![Um esboço de duas janelas lado a lado em um arranjo de visualização dividida, sugerindo multitarefa. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que remete sutilmente ao laranja do logotipo original da Apple de seis cores. (escuro)](../../images/multitasking/patterns-multitasking-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-multitasking-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-multitasking-intro~dark@2x.png)*

As pessoas esperam usar multitarefa em seus dispositivos e podem achar que há algo errado se o seu app não permitir isso. Com raras exceções — como alguns jogos e apps do Apple Vision Pro executados em um Full Space —, todo app precisa funcionar bem com multitarefa.

Além da alternância entre apps, a multitarefa pode apresentar experiências diferentes em dispositivos diferentes; consulte [Considerações por plataforma](https://developer.apple.com/design/human-interface-guidelines/multitasking#Platform-considerations).

## Boas práticas

Uma ótima experiência de multitarefa ajuda as pessoas a realizar tarefas em vários apps, gerenciando o conteúdo em diversos contextos simultâneos. Como você não sabe quando as pessoas vão iniciar a multitarefa, seu app ou jogo sempre precisa estar preparado para salvar e restaurar o contexto delas.

**Pause as atividades que exigem a atenção ou a participação ativa das pessoas quando elas saírem do app.** Se o seu app for um jogo ou um app de visualização de mídia, por exemplo, garanta que as pessoas não percam nada quando alternarem para outro app. Quando voltarem, deixe-as continuar como se nunca tivessem saído.

**Responda de forma fluida a interrupções de áudio.** Ocasionalmente, o áudio de outro app ou do próprio sistema pode interromper o áudio do seu app. Por exemplo, uma chamada telefônica recebida ou uma playlist de músicas iniciada pela Siri pode interromper o áudio do seu app. Quando situações como essas ocorrem, as pessoas esperam que o seu app responda das seguintes formas:

- Pausar o áudio por tempo indefinido nas interrupções de áudio primário, como reproduzir músicas, podcasts ou audiolivros.
- Reduzir temporariamente o volume ou pausar o áudio nas interrupções mais curtas, como notificações de direções do GPS, e retomar o volume ou a reprodução originais quando a interrupção terminar.

Para orientações, consulte [Reprodução de áudio](https://developer.apple.com/design/human-interface-guidelines/playing-audio).

**Conclua em segundo plano as tarefas iniciadas pelo usuário.** Quando alguém inicia uma tarefa como baixar recursos ou processar um arquivo de vídeo, espera que ela termine mesmo que saia do seu app. Se o seu app estiver no meio de uma tarefa que não precisa de entrada adicional, conclua-a em segundo plano antes de ser suspenso.

**Use notificações com moderação.** Seu app pode enviar notificações quando está suspenso ou em execução em segundo plano. Se as pessoas iniciarem uma tarefa importante ou urgente no seu app e depois saírem dele, elas podem gostar de receber uma notificação quando a tarefa for concluída para poderem voltar ao seu app e dar o próximo passo. Por outro lado, as pessoas geralmente não precisam saber no instante em que uma tarefa de rotina ou secundária é concluída. Nesse cenário, evite enviar uma notificação desnecessária; em vez disso, deixe as pessoas verificarem a tarefa quando voltarem ao seu app. Para orientações, consulte [Gerenciamento de notificações](https://developer.apple.com/design/human-interface-guidelines/managing-notifications).

## Considerações por plataforma

*Não compatível com watchOS.*

### iOS

No iPhone, a multitarefa permite que as pessoas usem o FaceTime ou assistam a um vídeo em Picture in Picture enquanto também usam outro app.

![Uma captura de tela do seletor de apps no iPhone, mostrando quatro apps abertos.](../../images/multitasking/multitasking-app-switcher-iphone@2x.png) ![Uma captura de tela do seletor de apps no iPhone, mostrando quatro apps abertos. (escuro)](../../images/multitasking/multitasking-app-switcher-iphone~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/multitasking-app-switcher-iphone@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/multitasking-app-switcher-iphone~dark@2x.png)*

![Uma captura de tela do Mail no iPhone, mostrando um e-mail individual. Sobre o conteúdo do corpo do e-mail, uma pequena imagem no canto inferior esquerdo mostra a pessoa em uma chamada de FaceTime.](../../images/multitasking/multitasking-pip-iphone@2x.png) ![Uma captura de tela do Mail no iPhone, mostrando um e-mail individual. Sobre o conteúdo do corpo do e-mail, uma pequena imagem no canto inferior esquerdo mostra a pessoa em uma chamada de FaceTime. (escuro)](../../images/multitasking/multitasking-pip-iphone~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/multitasking-pip-iphone@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/multitasking-pip-iphone~dark@2x.png)*

### iPadOS

No iPad, as pessoas podem visualizar e interagir com as [janelas](https://developer.apple.com/design/human-interface-guidelines/windows) de vários apps diferentes ao mesmo tempo. Um app individual também pode oferecer suporte a várias janelas abertas, o que permite que as pessoas visualizem e interajam com mais de uma janela do mesmo app ao mesmo tempo.

As pessoas podem usar o iPad com apps em tela inteira ou em janelas. Em tela inteira, os apps ocupam a tela toda, e as pessoas podem alternar entre as janelas individuais dos apps usando o seletor de apps.

![Uma captura de tela do seletor de apps do iPad na orientação horizontal, mostrando cinco apps abertos. Representações em miniatura dos apps estão dispostas em uma grade.](../../images/multitasking/multitasking-ipad-app-switcher@2x.png) ![Uma captura de tela do seletor de apps do iPad na orientação horizontal, mostrando cinco apps abertos. Representações em miniatura dos apps estão dispostas em uma grade. (escuro)](../../images/multitasking/multitasking-ipad-app-switcher~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/multitasking-ipad-app-switcher@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/multitasking-ipad-app-switcher~dark@2x.png)*

Ao usar apps em janelas, as janelas dos apps podem ser redimensionadas, e as pessoas podem organizá-las conforme suas necessidades, com um comportamento semelhante ao do macOS. O sistema oferece controles de janela para configurações comuns de lado a lado, entrada em tela inteira, minimização e fechamento de janelas. O sistema identifica a janela da frente colorindo seus controles de janela e projetando uma sombra nas janelas que ficam atrás dela. Para orientações, consulte [Janelas > iPadOS](https://developer.apple.com/design/human-interface-guidelines/windows#iPadOS).

![Uma captura de tela de dois apps em janelas no iPad na orientação horizontal. A janela do app da frente sobrepõe a que está atrás e projeta uma sombra sobre ela, e tem controles de janela coloridos para indicar que a janela está ativa. As duas janelas ficam sobre o fundo da Tela de Início, e o Dock aparece na parte inferior.](../../images/multitasking/multitasking-ipad-windows-maps-landmarks@2x.png) ![Uma captura de tela de dois apps em janelas no iPad na orientação horizontal. A janela do app da frente sobrepõe a que está atrás e projeta uma sombra sobre ela, e tem controles de janela coloridos para indicar que a janela está ativa. As duas janelas ficam sobre o fundo da Tela de Início, e o Dock aparece na parte inferior. (escuro)](../../images/multitasking/multitasking-ipad-windows-maps-landmarks~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/multitasking-ipad-windows-maps-landmarks@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/multitasking-ipad-windows-maps-landmarks~dark@2x.png)*

Além disso, vídeos e chamadas de FaceTime também podem ser reproduzidos em uma sobreposição de Picture in Picture acima de outros conteúdos, independentemente de os apps estarem em tela inteira ou em janelas.

> **Observação:** Os apps não controlam as configurações de multitarefa nem recebem qualquer indicação das que as pessoas escolhem.

Para ajudar o seu app a responder corretamente quando as pessoas o abrirem em uma janela, garanta que ele se adapte de forma elegante a diferentes tamanhos de tela. Para orientações, consulte [Layout](https://developer.apple.com/design/human-interface-guidelines/layout) e [Janelas](https://developer.apple.com/design/human-interface-guidelines/windows); para orientações para desenvolvedores, consulte [Multitasking on iPad, Mac, and Apple Vision Pro](https://developer.apple.com/documentation/uikit/multitasking-on-ipad-mac-and-apple-vision-pro). Para saber mais sobre como as pessoas usam os recursos de multitarefa do iPad, consulte [Use multitasking on your iPad](https://support.apple.com/en-us/HT207582).

### macOS

No Mac, a multitarefa é a experiência padrão, porque as pessoas normalmente executam mais de um app ao mesmo tempo, alternando entre janelas e tarefas enquanto trabalham. Quando várias janelas de apps estão abertas, o macOS aplica sombras que fazem as janelas parecerem em camadas sobre a mesa e aplica outros efeitos visuais para ajudar as pessoas a distinguir os diferentes estados das janelas; para orientações, consulte [Estados de janela do macOS](https://developer.apple.com/design/human-interface-guidelines/windows#macOS-window-states).

### tvOS

Na Apple TV, as pessoas podem reproduzir ou navegar por conteúdo enquanto também reproduzem filmes ou programas de TV em Picture in Picture (onde houver suporte).

### visionOS

No Apple Vision Pro, as pessoas podem executar vários apps ao mesmo tempo no Shared Space, visualizando e alternando entre janelas e volumes em todo o espaço.

Apenas uma janela fica ativa por vez no Shared Space. Quando as pessoas olham de uma janela para outra, a janela que estão olhando no momento se torna ativa, enquanto a janela anterior fica mais translúcida e parece recuar ao longo do eixo z. Fechar uma janela de app no Shared Space faz o app passar para segundo plano sem encerrá-lo.

> **Observação:** Quando um app é o app de Reprodução em Andamento (Now Playing), fechar sua janela pausa automaticamente a reprodução de áudio; se as pessoas quiserem retomar a reprodução, podem fazê-lo na Central de Controle sem abrir a janela.

**Evite interferir no comportamento de multitarefa fornecido pelo sistema.** Quando as pessoas olham de uma janela para outra, o visionOS aplica uma máscara esfumada à janela da qual elas desviam o olhar para esclarecer seu estado alterado. Para evitar interferir nesse feedback visual, não altere a aparência das bordas de uma janela.

![Uma gravação mostrando o app Notas e o app Ajustes no Shared Space do visionOS. Primeiro, o espectador reposiciona a janela do Notas para sobrepor ligeiramente a janela do Ajustes, depois ativa o Ajustes e em seguida volta ao Notas. Cada vez que um app se torna ativo, o sistema aplica um esfumado à janela do app inativo.](../../images/multitasking/visionos-multiple-windows@2x.png)

*Vídeo: Uma gravação mostrando o app Notas e o app Ajustes no Shared Space do visionOS. Primeiro, o espectador reposiciona a janela do Notas para sobrepor ligeiramente a janela do Ajustes, depois ativa o Ajustes e em seguida volta ao Notas. Cada vez que um app se torna ativo, o sistema aplica um esfumado à janela do app inativo.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-multiple-windows.mp4)

**Não pause a reprodução de vídeo de uma janela quando as pessoas desviarem o olhar dela.** No visionOS, assim como no macOS, as pessoas esperam que a reprodução iniciada em uma janela continue enquanto elas visualizam ou executam uma tarefa em outra janela.

**Esteja preparado para situações em que o seu áudio pode ser reduzido (ducking).** A menos que um app seja o app de Reprodução em Andamento, o áudio dele pode ser reduzido quando as pessoas desviam o olhar dele para outro app.

## Recursos

#### Relacionados

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

[Janelas](https://developer.apple.com/design/human-interface-guidelines/windows)

[Reprodução de vídeo](https://developer.apple.com/design/human-interface-guidelines/playing-video)

#### Documentação para desenvolvedores

[Responding to the launch of your app](https://developer.apple.com/documentation/uikit/responding-to-the-launch-of-your-app) — UIKit

[Multitasking on iPad, Mac, and Apple Vision Pro](https://developer.apple.com/documentation/uikit/multitasking-on-ipad-mac-and-apple-vision-pro) — UIKit

#### Vídeos

- [Elevate the design of your iPad app](https://developer.apple.com/videos/play/wwdc2025/208)
- [Make your UIKit app more flexible](https://developer.apple.com/videos/play/wwdc2025/282)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de junho de 2025 | Orientações reorganizadas em considerações por plataforma e adicionadas orientações para multitarefa com várias janelas no iPadOS. |
| 5 de dezembro de 2023 | Adicionadas ilustrações para janelas primárias e auxiliares no iPadOS. |
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
