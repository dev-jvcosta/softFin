# Acessibilidade (Accessibility)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/accessibility
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Interfaces de usuário acessíveis permitem que todas as pessoas tenham uma ótima experiência com o seu app ou jogo.*

![Um esboço do ícone de Acessibilidade. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo que remete sutilmente ao amarelo do logotipo original da Apple de seis cores.](../../images/accessibility/foundations-accessibility-intro@2x.png) ![Um esboço do ícone de Acessibilidade. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo que remete sutilmente ao amarelo do logotipo original da Apple de seis cores. (escuro)](../../images/accessibility/foundations-accessibility-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-accessibility-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-accessibility-intro~dark@2x.png)*

Quando você projeta pensando em acessibilidade, alcança um público maior e cria uma experiência mais inclusiva. Uma interface acessível permite que as pessoas vivenciem o seu app ou jogo independentemente de suas capacidades ou da forma como usam seus dispositivos. A acessibilidade torna informações e interações disponíveis para todos. Uma interface acessível é:

- **Intuitiva.** Sua interface usa interações familiares e consistentes que tornam as tarefas simples de executar.
- **Perceptível.** Sua interface não depende de um único método para transmitir informações. As pessoas podem acessar e interagir com o seu conteúdo, seja usando visão, audição, fala ou toque.
- **Adaptável.** Sua interface se adapta à forma como as pessoas querem usar o dispositivo, seja oferecendo suporte aos recursos de acessibilidade do sistema ou permitindo que as pessoas personalizem os ajustes.

Ao projetar o seu app, faça uma auditoria da acessibilidade da sua interface. Use o [Accessibility Inspector](https://developer.apple.com/documentation/accessibility/accessibility-inspector) para destacar problemas de acessibilidade na sua interface e entender como o seu app se apresenta às pessoas que usam os recursos de acessibilidade do sistema. Você também pode comunicar o nível de acessibilidade do seu app na App Store usando as Accessibility Nutrition Labels. Para saber mais sobre como avaliar e indicar o suporte a recursos de acessibilidade, consulte [Accessibility Nutrition Labels](https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels) na ajuda do App Store Connect.

## Visão

![Uma ilustração contendo cinco símbolos associados ao tema da visão, incluindo símbolos que representam tamanho de texto, ampliação, VoiceOver e diálogo falado.](../../images/accessibility/accessibility-vision-section-hero@2x.png) ![Uma ilustração contendo cinco símbolos associados ao tema da visão, incluindo símbolos que representam tamanho de texto, ampliação, VoiceOver e diálogo falado. (escuro)](../../images/accessibility/accessibility-vision-section-hero~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-vision-section-hero@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-vision-section-hero~dark@2x.png)*

As pessoas que usam a sua interface podem ser cegas, daltônicas ou ter baixa visão ou sensibilidade à luz. Elas também podem estar em situações em que as condições de iluminação e o brilho da tela afetam sua capacidade de interagir com a sua interface.

**Ofereça suporte a tamanhos de texto maiores.** Garanta que as pessoas possam ajustar o tamanho do texto ou dos ícones para torná-los mais legíveis, visíveis e confortáveis de ler. O ideal é dar às pessoas a opção de ampliar o texto em pelo menos 200 por cento (ou 140 por cento em apps para watchOS). Sua interface pode oferecer suporte à ampliação do tamanho da fonte por meio de uma interface personalizada ou adotando o Dynamic Type. O Dynamic Type é um ajuste de todo o sistema que permite às pessoas regular o tamanho do texto para ter conforto e legibilidade. Para mais orientações, consulte [Suporte ao Dynamic Type](https://developer.apple.com/design/human-interface-guidelines/typography#Supporting-Dynamic-Type).

**Use os padrões recomendados para tamanhos de fonte personalizados.** Cada plataforma tem tamanhos padrão e mínimos diferentes para os estilos de texto definidos pelo sistema, para promover a legibilidade. Se você usa estilos de texto personalizados, siga os padrões recomendados.

| Plataforma | Tamanho padrão | Tamanho mínimo |
|---|---|---|
| iOS, iPadOS | 17 pt | 11 pt |
| macOS | 13 pt | 10 pt |
| tvOS | 29 pt | 23 pt |
| visionOS | 17 pt | 12 pt |
| watchOS | 16 pt | 12 pt |

**Tenha em mente que o peso da fonte também pode afetar a facilidade de leitura do texto.** Se você usa uma fonte personalizada com peso fino, procure usar tamanhos maiores que os recomendados para aumentar a legibilidade. Para mais orientações, consulte [Tipografia](https://developer.apple.com/design/human-interface-guidelines/typography).

![Uma ilustração de uma visualização retangular contendo a palavra 'Hello,' formatada em negrito, em um tamanho de fonte pequeno.](../../images/accessibility/accessibility-font-weight-small-bold@2x.png) ![Uma ilustração de uma visualização retangular contendo a palavra 'Hello,' formatada em negrito, em um tamanho de fonte pequeno. (escuro)](../../images/accessibility/accessibility-font-weight-small-bold~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-font-weight-small-bold@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-font-weight-small-bold~dark@2x.png)*

![Uma ilustração de uma visualização retangular contendo a palavra 'Hello,' formatada com peso fino, em um tamanho de fonte grande.](../../images/accessibility/accessibility-font-weight-large-thin@2x.png) ![Uma ilustração de uma visualização retangular contendo a palavra 'Hello,' formatada com peso fino, em um tamanho de fonte grande. (escuro)](../../images/accessibility/accessibility-font-weight-large-thin~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-font-weight-large-thin@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-font-weight-large-thin~dark@2x.png)*

**Procure atender aos padrões mínimos de contraste de cor.** Para garantir que todas as informações do seu app sejam legíveis, é importante que haja contraste suficiente entre o texto e os ícones do primeiro plano e as cores de fundo. Dois padrões populares de medição do contraste de cor são as [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG/) e o Accessible Perceptual Contrast Algorithm (APCA). Use calculadoras de contraste padrão para garantir que a sua interface atinja níveis aceitáveis. O [Accessibility Inspector](https://developer.apple.com/documentation/accessibility/accessibility-inspector) usa os seguintes valores do nível AA das WCAG como referência para determinar se as cores do seu app têm um contraste aceitável.

| Tamanho do texto | Peso do texto | Taxa de contraste mínima |
|---|---|---|
| Até 17 pts | Todos | 4,5:1 |
| 18 pts | Todos | 3:1 |
| Todos | Negrito | 3:1 |

Se o seu app não oferecer esse contraste mínimo por padrão, garanta que ele ofereça pelo menos um esquema de cores de maior contraste quando o ajuste do sistema Aumentar Contraste estiver ativado. Se o seu app oferece suporte ao [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode), verifique o contraste mínimo nas aparências clara e escura.

![Uma ilustração de um botão que tem contraste insuficiente entre o título e o fundo do botão.](../../images/accessibility/accessibilty-button-poor-color-contrast@2x.png) ![Uma ilustração de um botão que tem contraste insuficiente entre o título e o fundo do botão. (escuro)](../../images/accessibility/accessibilty-button-poor-color-contrast~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibilty-button-poor-color-contrast@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibilty-button-poor-color-contrast~dark@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../images/accessibility/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de um botão que tem contraste suficiente entre o título e o fundo do botão.](../../images/accessibility/accessibilty-button-good-color-contrast@2x.png) ![Uma ilustração de um botão que tem contraste suficiente entre o título e o fundo do botão. (escuro)](../../images/accessibility/accessibilty-button-good-color-contrast~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibilty-button-good-color-contrast@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibilty-button-good-color-contrast~dark@2x.png)*

![Uma marca de seleção em um círculo para indicar uso correto.](../../images/accessibility/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Prefira as cores definidas pelo sistema.** Essas cores têm suas próprias variantes acessíveis que se adaptam automaticamente quando as pessoas ajustam suas preferências de cor, como ativar Aumentar Contraste ou alternar entre as aparências clara e escura. Para orientações, consulte [Cor](https://developer.apple.com/design/human-interface-guidelines/color).

![Uma ilustração que demonstra como a cor vermelha definida pelo sistema aparece sobre um fundo claro e um escuro. Na ilustração, um círculo está posicionado acima de um retângulo arredondado. O lado esquerdo do retângulo arredondado é de cor clara e o direito é escuro. O lado esquerdo do círculo é ligeiramente mais escuro que o direito.](../../images/accessibility/accessibility-system-red-ios-default@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-system-red-ios-default@2x.png)*

![Uma ilustração que demonstra como a cor vermelha de acessibilidade definida pelo sistema aparece sobre um fundo claro e um escuro. Na ilustração, um círculo está posicionado acima de um retângulo arredondado. O lado esquerdo do retângulo arredondado é de cor clara e o direito é escuro. O lado esquerdo do círculo é consideravelmente mais escuro que o direito.](../../images/accessibility/accessibility-system-red-ios-accessible@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-system-red-ios-accessible@2x.png)*

**Transmita informações com mais do que apenas a cor.** Algumas pessoas têm dificuldade em diferenciar certas cores e tons. Por exemplo, pessoas daltônicas podem ter dificuldade especial com combinações como vermelho-verde e azul-laranja. Ofereça indicadores visuais, como formas ou ícones distintos, além da cor, para ajudar as pessoas a perceber diferenças de função e mudanças de estado. Considere permitir que as pessoas personalizem esquemas de cores, como as cores de gráficos ou de personagens de jogos, para que possam personalizar a sua interface de uma forma que seja confortável para elas.

![Uma ilustração de um círculo verde à esquerda de um círculo vermelho.](../../images/accessibility/accessibility-differentiate-with-shapes-incorrect@2x.png) ![Uma ilustração de um círculo verde à esquerda de um círculo vermelho. (escuro)](../../images/accessibility/accessibility-differentiate-with-shapes-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-differentiate-with-shapes-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-differentiate-with-shapes-incorrect~dark@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../images/accessibility/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de um círculo verde contendo uma marca de seleção à esquerda de um octógono vermelho contendo um X.](../../images/accessibility/accessibility-differentiate-with-shapes-correct@2x.png) ![Uma ilustração de um círculo verde contendo uma marca de seleção à esquerda de um octógono vermelho contendo um X. (escuro)](../../images/accessibility/accessibility-differentiate-with-shapes-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-differentiate-with-shapes-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-differentiate-with-shapes-correct~dark@2x.png)*

![Uma marca de seleção em um círculo para indicar uso correto.](../../images/accessibility/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Descreva a interface e o conteúdo do seu app para o VoiceOver.** O VoiceOver é um leitor de tela que permite às pessoas vivenciar a interface do seu app sem precisar ver a tela. Para mais orientações, consulte [VoiceOver](https://developer.apple.com/design/human-interface-guidelines/voiceover).

## Audição

![Uma ilustração contendo cinco símbolos associados ao tema da audição, incluindo símbolos que representam som, formas de onda e legendas ocultas.](../../images/accessibility/accessibility-hearing-section-hero@2x.png) ![Uma ilustração contendo cinco símbolos associados ao tema da audição, incluindo símbolos que representam som, formas de onda e legendas ocultas. (escuro)](../../images/accessibility/accessibility-hearing-section-hero~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-hearing-section-hero@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-hearing-section-hero~dark@2x.png)*

As pessoas que usam a sua interface podem ser surdas ou ter deficiência auditiva. Elas também podem estar em ambientes ruidosos ou públicos.

**Ofereça formas baseadas em texto de aproveitar áudio e vídeo.** É importante que o diálogo e as informações cruciais sobre o seu app ou jogo não sejam comunicados apenas por áudio. Dependendo do contexto, dê às pessoas diferentes formas baseadas em texto de vivenciar sua mídia e permita que elas personalizem a apresentação visual desse texto:

- As **legendas ocultas** (captions) dão às pessoas o equivalente textual das informações audíveis em conteúdos de vídeo ou somente de áudio. As legendas ocultas são ótimas para cenários como cenas de jogos e clipes de vídeo em que o texto é sincronizado ao vivo com a mídia.
- As **legendas** (subtitles) permitem que as pessoas leiam o diálogo exibido na tela, ao vivo, no idioma de sua preferência. As legendas são ótimas para programas de TV e filmes.
- As **audiodescrições** são inseridas entre as pausas naturais do áudio principal de um vídeo e fornecem uma narração falada de informações importantes apresentadas apenas visualmente.
- As **transcrições** fornecem uma descrição textual completa de um vídeo, abrangendo informações audíveis e visuais. As transcrições são ótimas para mídias mais longas, como podcasts e audiolivros, em que as pessoas podem querer revisar o conteúdo como um todo ou destacar a transcrição enquanto a mídia é reproduzida.

Para orientações para desenvolvedores, consulte [Selecting subtitles and alternative audio tracks](https://developer.apple.com/documentation/avfoundation/selecting-subtitles-and-alternative-audio-tracks).

**Use hápticos além dos sinais de áudio.** Se a sua interface transmite informações por meio de sinais de áudio — como um som de sucesso, um som de erro ou o feedback de um jogo —, considere combinar esse som com hápticos correspondentes para pessoas que não conseguem perceber o áudio ou estão com o áudio desligado. No iOS e no iPadOS, você também pode usar [Music Haptics](https://developer.apple.com/documentation/mediaaccessibility/music-haptics) e [Audio graphs](https://developer.apple.com/documentation/accessibility/audio-graphs) para permitir que as pessoas vivenciem música e infográficos por meio de vibração e textura. Para orientações, consulte [Reprodução de hápticos](https://developer.apple.com/design/human-interface-guidelines/playing-haptics).

![Uma ilustração de um iPhone vibrando enquanto toca música no dispositivo.](../../images/accessibility/accessibility-haptic-audio-combo@2x.png) ![Uma ilustração de um iPhone vibrando enquanto toca música no dispositivo. (escuro)](../../images/accessibility/accessibility-haptic-audio-combo~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-haptic-audio-combo@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-haptic-audio-combo~dark@2x.png)*

**Complemente os sinais de áudio com sinais visuais.** Isso é especialmente importante para jogos e apps espaciais em que conteúdo importante pode estar acontecendo fora da tela. Ao usar áudio para guiar as pessoas em direção a uma ação específica, adicione também indicadores visuais que apontem para onde você quer que as pessoas interajam.

## Mobilidade

![Uma ilustração contendo cinco símbolos associados ao tema da mobilidade, incluindo símbolos que representam o teclado, o movimento e o toque.](../../images/accessibility/accessibility-mobility-section-hero@2x.png) ![Uma ilustração contendo cinco símbolos associados ao tema da mobilidade, incluindo símbolos que representam o teclado, o movimento e o toque. (escuro)](../../images/accessibility/accessibility-mobility-section-hero~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-mobility-section-hero@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-mobility-section-hero~dark@2x.png)*

Garanta que a sua interface ofereça uma experiência confortável para pessoas com destreza ou mobilidade limitadas.

**Ofereça controles com tamanho suficiente.** Controles pequenos demais são difíceis de usar e selecionar para muitas pessoas. Procure atender ao tamanho mínimo recomendado de controle para cada plataforma, para garantir que controles e menus sejam confortáveis para todos ao tocar e clicar.

| Plataforma | Tamanho padrão do controle | Tamanho mínimo do controle |
|---|---|---|
| iOS, iPadOS | 44x44 pt | 28x28 pt |
| macOS | 28x28 pt | 20x20 pt |
| tvOS | 66x66 pt | 56x56 pt |
| visionOS | 60x60 pt | 28x28 pt |
| watchOS | 44x44 pt | 28x28 pt |

**Considere o espaçamento entre os controles tão importante quanto o tamanho.** Inclua espaçamento suficiente entre os elementos para reduzir a chance de alguém tocar no controle errado. Em geral, funciona bem adicionar cerca de 12 pontos de espaçamento ao redor de elementos que incluem uma moldura. Para elementos sem moldura, cerca de 24 pontos de espaçamento funcionam bem ao redor das bordas visíveis do elemento.

![Uma ilustração mostrando três botões: retroceder, reproduzir e avançar. Os botões têm espaçamento insuficiente entre si.](../../images/accessibility/accessibility-controls-spacing-incorrect@2x.png) ![Uma ilustração mostrando três botões: retroceder, reproduzir e avançar. Os botões têm espaçamento insuficiente entre si. (escuro)](../../images/accessibility/accessibility-controls-spacing-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-controls-spacing-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-controls-spacing-incorrect~dark@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../images/accessibility/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração mostrando três botões: retroceder, reproduzir e avançar. Os botões estão afastados, com espaçamento suficiente entre si.](../../images/accessibility/accessibility-controls-spacing-correct@2x.png) ![Uma ilustração mostrando três botões: retroceder, reproduzir e avançar. Os botões estão afastados, com espaçamento suficiente entre si. (escuro)](../../images/accessibility/accessibility-controls-spacing-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-controls-spacing-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-controls-spacing-correct~dark@2x.png)*

![Uma marca de seleção em um círculo para indicar uso correto.](../../images/accessibility/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Ofereça suporte a gestos simples para interações comuns.** Para muitas pessoas, com ou sem deficiência, gestos complexos podem ser desafiadores. Para as interações que as pessoas fazem com frequência no seu app ou jogo, use o gesto mais simples possível — evite gestos personalizados com vários dedos e várias mãos — para que as ações repetitivas sejam confortáveis e fáceis de lembrar.

**Ofereça alternativas aos gestos.** Garanta que a funcionalidade principal da sua interface seja acessível por mais de um tipo de interação física. Os gestos podem ser menos confortáveis para pessoas com destreza limitada, então ofereça formas na tela de obter o mesmo resultado. Por exemplo, se você usa um gesto de deslizar para dispensar uma visualização, disponibilize também um botão para que as pessoas possam tocar ou usar um dispositivo assistivo.

![Uma ilustração de uma visualização de tabela no modo de edição. As linhas da tabela incluem botões de excluir.](../../images/accessibility/accessibility-tap-to-delete@2x.png) ![Uma ilustração de uma visualização de tabela no modo de edição. As linhas da tabela incluem botões de excluir. (escuro)](../../images/accessibility/accessibility-tap-to-delete~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-tap-to-delete@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-tap-to-delete~dark@2x.png)*

![Uma ilustração de uma visualização de tabela. Uma das linhas da tabela foi deslizada para a esquerda para revelar um botão de excluir.](../../images/accessibility/accessibility-swipe-to-delete@2x.png) ![Uma ilustração de uma visualização de tabela. Uma das linhas da tabela foi deslizada para a esquerda para revelar um botão de excluir. (escuro)](../../images/accessibility/accessibility-swipe-to-delete~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-swipe-to-delete@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-swipe-to-delete~dark@2x.png)*

**Deixe as pessoas usarem o Voice Control para dar orientações e inserir informações verbalmente.** Com o Voice Control, as pessoas podem interagir com seus dispositivos inteiramente por meio de comandos falados. Elas podem executar gestos, interagir com elementos da tela, ditar e editar texto e muito mais. Para garantir uma experiência fluida, nomeie os elementos da interface de forma apropriada. Para orientações para desenvolvedores, consulte [Voice Control](https://developer.apple.com/documentation/accessibility/voice-control).

**Integre com a Siri e os Atalhos para permitir que as pessoas executem tarefas somente por voz.** Quando o seu app oferece suporte à Siri e aos Atalhos, as pessoas podem automatizar as tarefas importantes e repetitivas que executam regularmente. Elas podem iniciar essas tarefas pela Siri, pelo botão de Ação do iPhone ou do Apple Watch e por atalhos na Tela de Início ou na Central de Controle. Para orientações, consulte [Siri](https://developer.apple.com/design/human-interface-guidelines/siri).

**Ofereça suporte a tecnologias assistivas relacionadas à mobilidade.** Recursos como [VoiceOver](https://developer.apple.com/design/human-interface-guidelines/voiceover), AssistiveTouch, Full Keyboard Access, Pointer Control e [Switch Control](https://developer.apple.com/documentation/accessibility/switch-control) oferecem formas alternativas para pessoas com mobilidade reduzida interagirem com seus dispositivos. Faça testes e verifique se o seu app ou jogo oferece suporte a essas tecnologias e se os elementos da sua interface estão nomeados de forma apropriada, para garantir uma ótima experiência. Para mais informações, consulte [Performing accessibility testing for your app](https://developer.apple.com/documentation/accessibility/performing-accessibility-testing-for-your-app).

## Fala

![Uma ilustração contendo cinco símbolos associados ao tema da fala, incluindo símbolos que representam formas de onda e fala.](../../images/accessibility/accessibility-speech-section-hero@2x.png) ![Uma ilustração contendo cinco símbolos associados ao tema da fala, incluindo símbolos que representam formas de onda e fala. (escuro)](../../images/accessibility/accessibility-speech-section-hero~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-speech-section-hero@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-speech-section-hero~dark@2x.png)*

Os recursos de acessibilidade da Apple ajudam pessoas com deficiências de fala e pessoas que preferem interações baseadas em texto a se comunicar de forma eficaz usando seus dispositivos.

**Deixe as pessoas usarem apenas o teclado para navegar e interagir com o seu app.** As pessoas podem ativar o Full Keyboard Access para navegar pelos apps usando o teclado físico. O sistema também define atalhos de teclado de acessibilidade e uma ampla variedade de outros [atalhos de teclado](https://support.apple.com/en-us/102650) que muitas pessoas usam o tempo todo. Evite substituir os atalhos de teclado definidos pelo sistema e avalie o seu app para garantir que ele funcione bem com o Full Keyboard Access. Para orientações adicionais, consulte [Teclados](https://developer.apple.com/design/human-interface-guidelines/keyboards). Para orientações para desenvolvedores, consulte [Support Full Keyboard Access in your iOS app](https://developer.apple.com/videos/play/wwdc2021/10120).

**Ofereça suporte ao Switch Control.** O Switch Control é uma tecnologia assistiva que permite às pessoas controlar seus dispositivos por meio de hardware separado, controles de jogo ou sons como um estalo ou um clique. As pessoas podem executar ações como selecionar, tocar, digitar e desenhar quando o seu app ou jogo oferece suporte à capacidade de navegar usando o Switch Control. Para orientações para desenvolvedores, consulte [Switch Control](https://developer.apple.com/documentation/accessibility/switch-control).

## Cognição

![Uma ilustração contendo cinco símbolos associados ao tema da cognição, incluindo símbolos que representam música, segurança e hierarquia de informações.](../../images/accessibility/accessibility-cognitive-section-hero@2x.png) ![Uma ilustração contendo cinco símbolos associados ao tema da cognição, incluindo símbolos que representam música, segurança e hierarquia de informações. (escuro)](../../images/accessibility/accessibility-cognitive-section-hero~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-cognitive-section-hero@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-cognitive-section-hero~dark@2x.png)*

Quando você minimiza a complexidade no seu app ou jogo, todas as pessoas se beneficiam.

**Mantenha as ações simples e intuitivas.** Garanta que as pessoas possam navegar pela sua interface usando interações fáceis de lembrar e consistentes. Prefira gestos e comportamentos do sistema com os quais as pessoas já estão familiarizadas a criar gestos personalizados que elas precisem aprender e reter.

**Minimize o uso de elementos de interface com limite de tempo.** Visualizações e controles que são dispensados automaticamente por um temporizador podem ser problemáticos para pessoas que precisam de mais tempo para processar informações e para pessoas que usam tecnologias assistivas que exigem mais tempo para percorrer a interface. Prefira dispensar as visualizações com uma ação explícita.

**Considere oferecer adaptações de dificuldade em jogos.** Cada pessoa tem sua própria forma de jogar e aproveitar os jogos. Para oferecer suporte a uma variedade de habilidades cognitivas, considere adicionar a possibilidade de personalizar o nível de dificuldade do seu jogo, como oferecer opções para que as pessoas reduzam os critérios para concluir uma fase com sucesso, ajustem o tempo de reação ou ativem a assistência de controle.

**Deixe as pessoas controlarem a reprodução de áudio e vídeo.** Evite reproduzir automaticamente conteúdo de áudio e vídeo sem também oferecer controles para iniciá-lo e pará-lo. Garanta que esses controles sejam fáceis de descobrir e de acionar, e considere ajustes globais que permitam às pessoas optar por não reproduzir automaticamente todo áudio e vídeo. Para orientações para desenvolvedores, consulte [Animated images](https://developer.apple.com/documentation/accessibility/animated-images) e [isVideoAutoplayEnabled](https://developer.apple.com/documentation/uikit/uiaccessibility/isvideoautoplayenabled).

**Permita que as pessoas optem por não ver luzes piscantes na reprodução de vídeo.** As pessoas podem querer evitar clarões de luz intensos e frequentes na mídia que consomem. Um ajuste de Reduzir Luzes Piscantes (Dim Flashing Lights) permite que o sistema calcule, atenue e informe as pessoas sobre luzes piscantes em uma mídia. Se o seu app oferece suporte à reprodução de vídeo, garanta que ele responda de forma apropriada ao ajuste Reduzir Luzes Piscantes. Para orientações para desenvolvedores, consulte [Flashing lights](https://developer.apple.com/documentation/mediaaccessibility/flashing-lights).

**Seja cauteloso com animações rápidas e piscantes.** Quando esses efeitos são usados em excesso, podem distrair, causar tontura e, em alguns casos, até provocar crises epilépticas. As pessoas propensas a esses efeitos podem ativar o ajuste de acessibilidade Reduzir Movimento. Quando esse ajuste está ativo, garanta que o seu app ou jogo responda reduzindo as animações automáticas e repetitivas, incluindo zoom, escala e movimento periférico. Outras boas práticas para reduzir o movimento incluem:

- Deixar as molas das animações mais rígidas para reduzir os efeitos de quique
- Acompanhar as animações diretamente com os gestos das pessoas
- Evitar animar mudanças de profundidade em camadas do eixo z
- Substituir transições nos eixos x, y e z por esmaecimentos, para evitar movimento
- Evitar animar entrando e saindo de desfoques

**Otimize a interface do seu app para o Assistive Access.** O Assistive Access é um recurso de acessibilidade do iOS e do iPadOS que permite que pessoas com deficiências cognitivas usem uma versão simplificada do seu app. O Assistive Access define um layout e uma apresentação de controles padrão para os apps que reduzem a carga cognitiva, como o layout a seguir do app Câmera.

![Uma captura de tela do app Câmera no Assistive Access, mostrando uma interface com três botões grandes: Foto, Vídeo e Voltar.](../../images/accessibility/accessibility-assistive-access-camera@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-assistive-access-camera@2x.png)*

![Uma captura de tela do app Câmera aberto na tela de foto no Assistive Access, mostrando uma interface com dois botões grandes: Tirar Foto e Voltar.](../../images/accessibility/accessibility-assistive-access-camera-photo-mode@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/accessibility-assistive-access-camera-photo-mode@2x.png)*

Para otimizar o seu app para esse modo, siga as diretrizes a seguir quando o Assistive Access estiver ativado:

- Identifique a funcionalidade principal do seu app e considere remover fluxos de trabalho e elementos de interface não críticos.
- Divida os fluxos de trabalho de várias etapas para que as pessoas possam se concentrar em uma única interação por tela.
- Sempre peça confirmação duas vezes quando as pessoas executarem uma ação da qual é difícil se recuperar, como excluir um arquivo.

Para orientações para desenvolvedores, consulte [Assistive Access](https://developer.apple.com/documentation/accessibility/assistive-access).

## Considerações por plataforma

*Sem considerações adicionais para iOS, iPadOS, macOS, tvOS ou watchOS.*

### visionOS

O visionOS oferece uma variedade de recursos de acessibilidade que as pessoas podem usar para interagir com o ambiente ao redor de maneiras confortáveis e que funcionem melhor para elas, incluindo o Pointer Control com a cabeça e com a mão e um recurso de Zoom.

**Pointer Control (mão)**

![Uma gravação da mão de uma pessoa usando o Pointer Control para interagir com o conteúdo na janela de um app do visionOS. Uma linha com um ponteiro na extremidade se estende a partir da mão da pessoa. Ela muda de posição dentro do campo de visão conforme a pessoa move a mão.](../../images/accessibility/visionos-accessibility-hand-pointer@2x.png)

*Vídeo: Uma gravação da mão de uma pessoa usando o Pointer Control para interagir com o conteúdo na janela de um app do visionOS. Uma linha com um ponteiro na extremidade se estende a partir da mão da pessoa. Ela muda de posição dentro do campo de visão conforme a pessoa move a mão.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-accessibility-hand-pointer.mp4)

**Pointer Control (cabeça)**

![Uma gravação de alguém usando o Pointer Control para interagir com o conteúdo na janela de um app do visionOS. A pessoa não está visível na gravação. Apenas o ponteiro está visível. Ele está centralizado no campo de visão, e a pessoa usa o movimento da cabeça para posicionar o conteúdo sob o ponteiro.](../../images/accessibility/visionos-accessibility-head-pointer@2x.png)

*Vídeo: Uma gravação de alguém usando o Pointer Control para interagir com o conteúdo na janela de um app do visionOS. A pessoa não está visível na gravação. Apenas o ponteiro está visível. Ele está centralizado no campo de visão, e a pessoa usa o movimento da cabeça para posicionar o conteúdo sob o ponteiro.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-accessibility-head-pointer.mp4)

**Zoom**

![Uma captura de tela da janela de um app no visionOS. Uma lente de zoom está visível sobre uma parte da janela e exibe uma versão ampliada do conteúdo que está sob a lente.](../../images/accessibility/visionos-accessibility-zoom-lens@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-accessibility-zoom-lens@2x.png)*

**Priorize o conforto.** A natureza imersiva do visionOS significa que interfaces, animações e interações têm maior chance de causar enjoo de movimento e desconforto visual e ergonômico nas pessoas. Para garantir a experiência mais confortável possível, considere estas dicas:

- Mantenha os elementos da interface dentro do campo de visão da pessoa. Prefira layouts horizontais a verticais, que podem causar tensão no pescoço, e evite exigir a atenção do espectador em locais diferentes em rápida sucessão.
- Reduza a velocidade e a intensidade dos objetos animados, particularmente na visão periférica da pessoa.
- Seja gentil com o movimento de câmera e de vídeo e evite situações em que alguém possa sentir que o mundo ao redor está se movendo sem o seu controle.
- Evite ancorar conteúdo à cabeça de quem usa o dispositivo, o que pode fazer a pessoa se sentir presa e confinada, além de impedi-la de usar tecnologias assistivas como o Pointer Control.
- Minimize a necessidade de gestos grandes e repetitivos, pois eles podem se tornar cansativos e podem ser difíceis dependendo do ambiente ao redor da pessoa.

Para orientações adicionais, consulte [Create accessible spatial experiences](https://developer.apple.com/videos/play/wwdc2023/10034) e [Design considerations for vision and motion](https://developer.apple.com/videos/play/wwdc2023/10078).

## Recursos

#### Relacionados

[Inclusão](https://developer.apple.com/design/human-interface-guidelines/inclusion)

[Tipografia](https://developer.apple.com/design/human-interface-guidelines/typography)

[VoiceOver](https://developer.apple.com/design/human-interface-guidelines/voiceover)

#### Documentação para desenvolvedores

[Building accessible apps](https://developer.apple.com/accessibility/)

[Accessibility framework](https://developer.apple.com/documentation/accessibility)

[Overview of Accessibility Nutrition Labels](https://devcms.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels)

#### Vídeos

- [Refine accessibility for custom controls](https://developer.apple.com/videos/play/wwdc2026/220)
- [Principles of inclusive app design](https://developer.apple.com/videos/play/wwdc2025/316)
- [Evaluate your app for Accessibility Nutrition Labels](https://developer.apple.com/videos/play/wwdc2025/224)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de junho de 2025 | Adicionadas orientações e links para Assistive Access, Switch Control e Accessibility Nutrition Labels. |
| 7 de março de 2025 | Todas as orientações foram ampliadas e refinadas. As orientações sobre Dynamic Type foram movidas para a página de Tipografia e as orientações sobre VoiceOver foram movidas para uma nova página do VoiceOver. |
| 10 de junho de 2024 | Adicionado um link para os plug-ins do Unity da Apple para oferecer suporte ao Dynamic Type. |
| 5 de dezembro de 2023 | Atualizada a ilustração da lente de Zoom do visionOS. |
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
