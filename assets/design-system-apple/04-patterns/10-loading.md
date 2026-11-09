# Carregamento (Loading)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/loading
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*A melhor experiência de carregamento de conteúdo termina antes que as pessoas percebam.*

![Um esboço de um indicador de atividade indeterminado girando, sugerindo o carregamento de dados. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que remete sutilmente ao laranja do logotipo original da Apple de seis cores.](../../images/loading/patterns-loading-intro@2x.png) ![Um esboço de um indicador de atividade indeterminado girando, sugerindo o carregamento de dados. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que remete sutilmente ao laranja do logotipo original da Apple de seis cores. (escuro)](../../images/loading/patterns-loading-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-loading-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-loading-intro~dark@2x.png)*

Se o seu app ou jogo carrega recursos, fases ou outros conteúdos, projete o comportamento de modo que ele não atrapalhe nem prejudique a experiência do usuário.

## Boas práticas

**Mostre algo o mais rápido possível.** Se você obriga as pessoas a esperar o carregamento terminar antes de exibir qualquer coisa, elas podem interpretar a falta de conteúdo como um problema no seu app ou jogo. Em vez disso, considere mostrar textos, gráficos ou animações provisórios enquanto o conteúdo carrega, substituindo esses elementos à medida que o conteúdo ficar disponível.

**Deixe as pessoas fazerem outras coisas no seu app ou jogo enquanto esperam o conteúdo carregar.** Carregar o conteúdo em segundo plano ajuda a dar acesso a outras ações. Por exemplo, um jogo pode carregar conteúdo em segundo plano enquanto os jogadores aprendem sobre a próxima fase ou veem um menu dentro do jogo. Para orientações para desenvolvedores, consulte [Improving the player experience for games with large downloads](https://developer.apple.com/documentation/gamekit/improving-the-player-experience-for-games-with-large-downloads).

**Se o carregamento levar um tempo inevitavelmente longo, dê às pessoas algo interessante para ver enquanto esperam.** Por exemplo, você pode oferecer dicas de jogabilidade, exibir sugestões ou apresentar novos recursos às pessoas. Estime o tempo restante de carregamento com a maior precisão possível para evitar dar tempo de menos para que as pessoas aproveitem o conteúdo provisório ou tempo demais, a ponto de precisar repeti-lo.

**Melhore o tempo de instalação e de abertura baixando recursos grandes em segundo plano.** Considere usar o framework [Background Assets](https://developer.apple.com/documentation/backgroundassets) para agendar downloads de recursos — como pacotes de fases de jogos, modelos 3D de personagens e texturas — para ocorrerem imediatamente após a instalação, durante atualizações ou em outros momentos que não causem interrupção.

## Exibição de progresso

**Comunique claramente que o conteúdo está carregando e quanto tempo isso pode levar.** O ideal é que o conteúdo apareça instantaneamente, mas, em situações em que o carregamento leva mais que um ou dois instantes, você pode usar componentes fornecidos pelo sistema — chamados *indicadores de progresso* — para mostrar que o carregamento está em andamento. Em geral, você usa um indicador de progresso *determinado* quando sabe quanto tempo o carregamento vai levar e um indicador de progresso *indeterminado* quando não sabe. Para orientações, consulte [Indicadores de progresso](https://developer.apple.com/design/human-interface-guidelines/progress-indicators).

**Em jogos, considere criar uma visualização de carregamento personalizada.** Os indicadores de progresso padrão funcionam bem na maioria dos apps, mas às vezes podem parecer deslocados em um jogo. Considere projetar uma experiência mais envolvente usando animações e elementos personalizados que combinem com o estilo do seu jogo.

## Considerações por plataforma

*Sem considerações adicionais para iOS, iPadOS, macOS, tvOS ou visionOS.*

### watchOS

**Sempre que possível, evite mostrar um indicador de carregamento na sua experiência para watchOS.** As pessoas esperam interações rápidas com o Apple Watch, então procure exibir o conteúdo imediatamente. Em situações em que o conteúdo precisa de um ou dois segundos para carregar, é melhor exibir um indicador de carregamento do que uma tela em branco.

## Recursos

#### Relacionados

[Abertura (Launching)](https://developer.apple.com/design/human-interface-guidelines/launching)

[Indicadores de progresso](https://developer.apple.com/design/human-interface-guidelines/progress-indicators)

#### Documentação para desenvolvedores

[Background Assets](https://developer.apple.com/documentation/backgroundassets)

#### Vídeos

- [Discover Apple-Hosted Background Assets](https://developer.apple.com/videos/play/wwdc2025/325)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de junho de 2025 | Orientações revisadas sobre o armazenamento de downloads para refletir o download de recursos grandes em segundo plano. |
| 10 de junho de 2024 | Adicionadas diretrizes para exibição de progresso e armazenamento de downloads, e orientações aprimoradas para jogos. |
