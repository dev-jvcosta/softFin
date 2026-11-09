# Inicialização (Launching)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/launching
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Uma experiência de inicialização simplificada ajuda as pessoas a começar a usar seu app ou jogo imediatamente.*

![Um esboço de um quadrado contendo uma seta apontando para o canto superior direito, sugerindo uma transição para um novo estado. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores.](../../images/launching/patterns-launching-intro@2x.png) ![Um esboço de um quadrado contendo uma seta apontando para o canto superior direito, sugerindo uma transição para um novo estado. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores. (escuro)](../../images/launching/patterns-launching-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-launching-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-launching-intro~dark@2x.png)*

A inicialização começa quando alguém abre seu app ou jogo, inclui um download inicial e termina quando a primeira tela está pronta. Depois que a inicialização é concluída, você pode oferecer uma experiência de [onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding), que pode dar às pessoas uma visão geral do seu app ou jogo.

## Boas práticas

**Inicialize instantaneamente.** As pessoas querem começar a interagir com seu app ou jogo imediatamente e, às vezes, não querem esperar mais do que alguns segundos.

**Se a plataforma exigir, forneça uma tela de inicialização.** No iOS, iPadOS e tvOS, o sistema exibe sua tela de inicialização no momento em que seu app ou jogo começa e a substitui rapidamente pela primeira tela, dando às pessoas a impressão de que sua experiência é rápida e responsiva. Para orientações, consulte [Telas de inicialização](https://developer.apple.com/design/human-interface-guidelines/launching#Launch-screens). macOS, visionOS e watchOS não exigem telas de inicialização.

**Se precisar de uma splash screen, considere exibi-la no início do fluxo de onboarding.** Uma splash screen é um gráfico bonito que comunica de forma concisa a marca e outras informações que você precisa fornecer. Se você não oferecer uma experiência de onboarding, pode exibir a splash screen assim que a inicialização for concluída.

**Restaure o estado anterior quando seu app for reiniciado para que as pessoas possam continuar de onde pararam.** Evite fazer as pessoas refazerem etapas para chegar à localização anterior no seu app ou jogo. Restaure o máximo possível de detalhes do estado anterior. Por exemplo, role a visualização até a posição mais recente das pessoas e exiba as janelas no mesmo estado e local em que elas as deixaram.

## Telas de inicialização

*Não se aplica a macOS, visionOS ou watchOS.*

**Minimize a experiência de inicialização.** Uma tela de inicialização não faz parte de uma experiência de onboarding nem de uma splash screen, e não é uma oportunidade de expressão artística. A única função de uma tela de inicialização é reforçar a percepção de que sua experiência inicia rapidamente e está pronta para uso imediato.

**Projete uma tela de inicialização quase idêntica à primeira tela do seu app ou jogo.** Se você incluir elementos que parecem diferentes quando a inicialização é concluída, as pessoas podem perceber um flash desagradável entre a tela de inicialização e a primeira tela. Se seu app ou jogo exibe uma cor sólida antes de fazer a transição para a primeira tela, crie uma tela de inicialização que exiba somente essa cor sólida. Certifique-se também de que a tela de inicialização corresponda à orientação atual e ao modo de aparência do dispositivo.

**Evite incluir texto na tela de inicialização, mesmo que a primeira tela exiba texto.** Como o conteúdo de uma tela de inicialização não muda, qualquer texto exibido não será localizado.

**Não faça propaganda.** A tela de inicialização não é uma oportunidade de branding. Evite criar uma tela que se pareça com uma splash screen ou com uma janela “Sobre” e não inclua logotipos ou outros elementos de marca, a menos que façam parte fixa da primeira tela do seu app.

## Considerações por plataforma

*Nenhuma consideração adicional para macOS ou watchOS.*

### iOS, iPadOS

**Inicialize na orientação apropriada.** Se seu app ou jogo oferece suporte aos modos retrato e paisagem, inicialize usando a orientação atual do dispositivo. Se sua interface funciona em apenas uma orientação, inicialize nessa orientação e deixe as pessoas girarem o dispositivo, se necessário. Garanta que uma interface somente paisagem responda corretamente, independentemente de as pessoas entrarem na orientação paisagem girando o dispositivo para a esquerda ou para a direita. Para orientações, consulte [Layout](https://developer.apple.com/design/human-interface-guidelines/layout).

### tvOS

> **Observação:** Diferentemente das [imagens em camadas](https://developer.apple.com/design/human-interface-guidelines/images#Layered-images) presentes em grande parte de um app tvOS, a tela de inicialização é estática.

**Em um app de visualização ao vivo, considere iniciar a reprodução automaticamente logo após as pessoas abrirem o app.** As pessoas vão ao seu app para assistir TV, então você pode querer começar a reproduzir conteúdo ao vivo novo ou visto recentemente após alguns segundos de inatividade. Para orientações, consulte [Apps de visualização ao vivo](https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps).

### visionOS

**Considere inicializar no Shared Space, mesmo que seu app seja totalmente imersivo.** Abrir uma janela no Shared Space permite fornecer mais contexto sobre seu app ou jogo enquanto ele carrega, e também permite apresentar um controle que as pessoas podem usar para abrir sua experiência totalmente imersiva. Em geral, as pessoas apreciam poder escolher quando fazer a transição para um Full Space, especialmente se estiverem executando outros apps no Shared Space. Para orientações, consulte [Experiências imersivas](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences).

## Recursos

#### Relacionados

[Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding)

[Carregamento](https://developer.apple.com/design/human-interface-guidelines/loading)

#### Documentação para desenvolvedores

[Specifying your app’s launch screen](https://developer.apple.com/documentation/xcode/specifying-your-apps-launch-screen) — Xcode

[Responding to the launch of your app](https://developer.apple.com/documentation/uikit/responding-to-the-launch-of-your-app) — UIKit

#### Vídeos

- [Optimizing App Launch](https://developer.apple.com/videos/play/wwdc2019/423)
- [Love at First Launch](https://developer.apple.com/videos/play/wwdc2017/816)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 10 de junho de 2024 | Adicionadas orientações sobre a exibição de uma splash screen. |
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
