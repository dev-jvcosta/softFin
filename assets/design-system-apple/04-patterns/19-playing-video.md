# Reprodução de vídeo (Playing video)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/playing-video
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*As pessoas esperam aproveitar experiências de vídeo ricas em seus dispositivos, independentemente do app ou jogo que estejam usando.*

![Um esboço de um botão de reproduzir, sugerindo reprodução de vídeo. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple em seis cores.](../../images/playing-video/patterns-playing-video-intro@2x.png) ![Um esboço de um botão de reproduzir, sugerindo reprodução de vídeo. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple em seis cores. (escuro)](../../images/playing-video/patterns-playing-video-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-playing-video-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-playing-video-intro~dark@2x.png)*

O sistema fornece players de vídeo projetados para você incorporar experiências de reprodução no seu app ou jogo no iOS, iPadOS, macOS, tvOS e visionOS. Você também pode oferecer seu conteúdo por meio do app Apple TV nessas plataformas, o que proporciona às pessoas uma experiência de visualização conveniente e consistente.

Os players de vídeo fornecidos pelo sistema oferecem suporte a diferentes modos de reprodução por proporção de tela e, na maioria das plataformas, ao modo de visualização Picture in Picture (PiP). Embora as pessoas possam alternar entre os modos durante a reprodução, por padrão o sistema seleciona um dos seguintes modos de reprodução com base na proporção do vídeo:

- No modo de tela inteira — ou *aspect-fill* — o vídeo é dimensionado para preencher a tela, e pode ocorrer algum corte nas bordas. Esse modo é o padrão para vídeo largo (de 2:1 a 2,40:1). Para orientações para desenvolvedores, consulte [resizeAspectFill](https://developer.apple.com/documentation/avfoundation/avlayervideogravity/resizeaspectfill).
- No modo de ajuste à tela — ou *aspect* — o vídeo inteiro fica visível na tela, e ocorrem barras horizontais (letterboxing) ou verticais (pillarboxing) conforme necessário. Esse modo é o padrão para vídeo padrão (4:3, 16:9 e qualquer coisa até 2:1) e vídeo ultralargo (qualquer coisa acima de 2,40:1). Para orientações para desenvolvedores, consulte [resizeAspect](https://developer.apple.com/documentation/avfoundation/avlayervideogravity/resizeaspect).

No visionOS e no tvOS, o player de vídeo integrado também oferece *controles de transporte*, que permitem às pessoas executar tarefas de reprodução, como ativar legendas ou mudar o idioma do áudio, e ações, como adicionar um programa a uma biblioteca ou favoritar um clipe. Abaixo dos controles de transporte, o player de vídeo exibe *abas de conteúdo*, como Informações, Episódios ou Capítulos, que podem fornecer informações de apoio e ajudar a agilizar a navegação. No visionOS, os controles de transporte aparecem como um [ornamento](https://developer.apple.com/design/human-interface-guidelines/ornaments).

## Boas práticas

**Use o player de vídeo do sistema para oferecer uma experiência familiar e conveniente às pessoas.** O player de vídeo integrado oferece uma experiência de reprodução de vídeo excepcional, com interações e comportamentos consistentes que permitem às pessoas se concentrar em aproveitar o conteúdo imersivo. Se o seu app realmente exige um player de vídeo personalizado, tome como referência o comportamento e a interface do player de vídeo do sistema para ajudar a oferecer uma experiência que as pessoas entendam instantaneamente. Uma experiência personalizada que diverge um pouco da fornecida pelo sistema pode causar frustração, porque as pessoas não sabem quais das interações habituais ainda podem usar.

**Sempre exiba o conteúdo de vídeo em sua proporção original.** Quando o conteúdo de vídeo usa preenchimento embutido de letterbox ou pillarbox para se adequar a uma proporção específica, o sistema pode não conseguir dimensionar corretamente o vídeo com base no modo de reprodução atual. O preenchimento embutido no quadro do vídeo pode fazer com que os vídeos pareçam menores nos modos de tela inteira e de ajuste à tela. Ele também impede que os vídeos sejam exibidos corretamente em contextos de borda a borda que não sejam de tela inteira, como o modo Picture in Picture no iPad.

Veja alguns exemplos que mostram como o preenchimento pode afetar a exibição do vídeo no iPhone Xs.

**Resultado de preencher um vídeo 4:3**

![Uma ilustração de um iPhone na orientação paisagem. Um retângulo azul mostra a área segura do AVKit dentro da tela. Sobrepondo a área segura e se estendendo além dela em todos os lados há um retângulo roxo que representa a área de vídeo 4:3, que não inclui nenhum preenchimento embutido.](../../images/playing-video/video-fill-4-3-right@2x.png) ![Uma ilustração de um iPhone na orientação paisagem. Um retângulo azul mostra a área segura do AVKit dentro da tela. Sobrepondo a área segura e se estendendo além dela em todos os lados há um retângulo roxo que representa a área de vídeo 4:3, que não inclui nenhum preenchimento embutido. (escuro)](../../images/playing-video/video-fill-4-3-right~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/video-fill-4-3-right@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/video-fill-4-3-right~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../images/playing-video/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

![Uma ilustração de um iPhone na orientação paisagem. Um retângulo azul mostra a área segura do AVKit dentro da tela. Sobrepondo a área segura e se estendendo além das bordas superior e inferior dela há um retângulo roxo que representa a área de vídeo 4:3. Presos às bordas esquerda e direita do retângulo roxo há dois retângulos rosa verticais que se estendem até as bordas esquerda e direita do dispositivo, representando pillarboxes embutidos.](../../images/playing-video/video-fill-4-3-wrong@2x.png) ![Uma ilustração de um iPhone na orientação paisagem. Um retângulo azul mostra a área segura do AVKit dentro da tela. Sobrepondo a área segura e se estendendo além das bordas superior e inferior dela há um retângulo roxo que representa a área de vídeo 4:3. Presos às bordas esquerda e direita do retângulo roxo há dois retângulos rosa verticais que se estendem até as bordas esquerda e direita do dispositivo, representando pillarboxes embutidos. (escuro)](../../images/playing-video/video-fill-4-3-wrong~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/video-fill-4-3-wrong@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/video-fill-4-3-wrong~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../images/playing-video/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma legenda para as ilustrações, identificando o azul como a área segura do AVKit, o roxo como a área de vídeo e o rosa como o preenchimento embutido.](../../images/playing-video/legend-letter-pillar@2x.png) ![Uma legenda para as ilustrações, identificando o azul como a área segura do AVKit, o roxo como a área de vídeo e o rosa como o preenchimento embutido. (escuro)](../../images/playing-video/legend-letter-pillar~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/legend-letter-pillar@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/legend-letter-pillar~dark@2x.png)*

**Resultado de preencher um vídeo 21:9**

![Uma ilustração de um iPhone na orientação paisagem. Um retângulo azul mostra a área segura do AVKit dentro da tela. Sobrepondo a área segura e se estendendo até as bordas superior e inferior do dispositivo há um retângulo roxo que representa a área de vídeo 21:9, que não inclui nenhum preenchimento embutido.](../../images/playing-video/video-fit-21-9-right@2x.png) ![Uma ilustração de um iPhone na orientação paisagem. Um retângulo azul mostra a área segura do AVKit dentro da tela. Sobrepondo a área segura e se estendendo até as bordas superior e inferior do dispositivo há um retângulo roxo que representa a área de vídeo 21:9, que não inclui nenhum preenchimento embutido. (escuro)](../../images/playing-video/video-fit-21-9-right~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/video-fit-21-9-right@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/video-fit-21-9-right~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../images/playing-video/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

![Uma ilustração de um iPhone na orientação paisagem. Um retângulo azul mostra a área segura do AVKit dentro da tela. Sobrepondo a área segura há um retângulo roxo que representa a área de vídeo 21:9 mais dois retângulos rosa horizontais presos às bordas superior e inferior dele, representando letterboxes embutidos. A área que inclui o vídeo e os letterboxes se estende até as bordas superior e inferior do dispositivo, mas não se estende até as bordas esquerda e direita da área segura.](../../images/playing-video/video-fit-21-9-wrong@2x.png) ![Uma ilustração de um iPhone na orientação paisagem. Um retângulo azul mostra a área segura do AVKit dentro da tela. Sobrepondo a área segura há um retângulo roxo que representa a área de vídeo 21:9 mais dois retângulos rosa horizontais presos às bordas superior e inferior dele, representando letterboxes embutidos. A área que inclui o vídeo e os letterboxes se estende até as bordas superior e inferior do dispositivo, mas não se estende até as bordas esquerda e direita da área segura. (escuro)](../../images/playing-video/video-fit-21-9-wrong~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/video-fit-21-9-wrong@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/video-fit-21-9-wrong~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../images/playing-video/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma legenda para as ilustrações, identificando o azul como a área segura do AVKit, o roxo como a área de vídeo e o rosa como o preenchimento embutido.](../../images/playing-video/legend-letter-pillar@2x.png) ![Uma legenda para as ilustrações, identificando o azul como a área segura do AVKit, o roxo como a área de vídeo e o rosa como o preenchimento embutido. (escuro)](../../images/playing-video/legend-letter-pillar~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/legend-letter-pillar@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/legend-letter-pillar~dark@2x.png)*

**Forneça informações adicionais quando elas agregarem valor.** No iOS, iPadOS, tvOS e visionOS, você pode personalizar as informações adicionais de um vídeo fornecendo uma imagem, um título, uma descrição e outras informações úteis. Em geral, restrinja esse conteúdo para que ele não obstrua a reprodução da mídia. Para orientações para desenvolvedores, consulte [externalMetadata](https://developer.apple.com/documentation/avfoundation/avplayeritem/externalmetadata).

**Ofereça suporte às interações que as pessoas esperam, independentemente do dispositivo de entrada que estejam usando para controlar a reprodução.** Por exemplo, as pessoas esperam pressionar a barra de espaço em um teclado conectado para reproduzir ou pausar a mídia no Apple Vision Pro, Mac, iPhone, iPad e Apple TV. Da mesma forma, as pessoas esperam navegar pela mídia no Apple TV fazendo gestos familiares e intuitivos com o Siri Remote. Para orientações, consulte Teclados e Controles remotos.

**Se as pessoas precisarem acessar opções de reprodução ou informações específicas do conteúdo no seu app tvOS, considere adicionar um controle de transporte ou uma aba de conteúdo personalizada.** As pessoas normalmente abrem um controle de transporte ou uma aba de conteúdo enquanto assistem a um vídeo, por isso é essencial oferecer apenas as ações e informações mais úteis. Ajude as pessoas a voltar rapidamente à experiência de visualização garantindo que suas ações não exijam mais do que um ou dois passos e que seu conteúdo seja conciso. Use um controle de transporte para oferecer suporte a uma ação relacionada à reprodução, como favoritar um vídeo; use abas de conteúdo personalizadas para exibir informações complementares ou recomendações.

**Evite permitir que o áudio de fontes diferentes se misture quando os espectadores alternarem entre modos.** Áudio misturado é uma experiência desagradável e frustrante. Em geral, o áudio se mistura quando pelo menos uma das fontes de áudio não trata corretamente o áudio secundário. Eis um cenário típico: enquanto assiste a um vídeo em tela inteira, o espectador o move para a janela PiP, onde o sistema silencia automaticamente o vídeo. Na janela de tela inteira, o espectador inicia um jogo que toca música de fundo, depois passa para a janela PiP e ativa o som do vídeo. Se o jogo não tratar o áudio secundário adequadamente, seu áudio se mistura com o do vídeo reativado. Para orientações para desenvolvedores, consulte [silenceSecondaryAudioHintNotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/silencesecondaryaudiohintnotification).

## Integração com o app Apple TV

O app Apple TV oferece acesso global a conteúdo de vídeo favorito, reproduzido recentemente e recomendado de todo o sistema. Quando as pessoas iniciam a reprodução de conteúdo dentro do seu app, o app Apple TV abre automaticamente o seu app e faz a transição para ele. Siga estas diretrizes para ajudar a experiência do app Apple TV a parecer uma parte integrada do seu app.

**Garanta uma transição suave para o seu app.** O app Apple TV escurece até o preto ao fazer a transição para o seu app e não mostra a tela de abertura dele. Mantenha a continuidade visual nessa transição apresentando imediatamente a sua própria tela preta antes de começar a reproduzir ou retomar o conteúdo.

**Mostre imediatamente o conteúdo esperado.** As pessoas esperam que o conteúdo escolhido comece a ser reproduzido assim que a transição para o seu app terminar, especialmente ao retomar a reprodução. Passe diretamente da tela preta do seu app para o conteúdo e evite exibir telas de abertura, telas de detalhes, animações de introdução ou quaisquer outras barreiras que façam o acesso ao conteúdo demorar mais. Em raras situações em que você precisa exibir um elemento intersticial antes da mídia selecionada ser reproduzida, as pessoas podem escolher Selecionar para avançar pelo elemento ou escolher Reproduzir se quiserem pular o conteúdo intersticial e iniciar a reprodução.

**Evite perguntar às pessoas se querem retomar a reprodução.** Se a reprodução puder ser retomada, faça isso automaticamente, sem pedir confirmação.

**Reproduza ou pause a reprodução quando as pessoas pressionarem a barra de espaço em um teclado Bluetooth conectado.** Pressionar a barra de espaço para controlar a reprodução de mídia é uma interação que as pessoas esperam, independentemente do teclado que estejam usando.

**Garanta que o conteúdo seja reproduzido para o espectador correto.** Se o seu app oferece suporte a vários perfis de usuário, o app Apple TV pode especificar um perfil ao emitir uma solicitação de reprodução. Faça o seu app mudar automaticamente para esse perfil antes de iniciar a reprodução. Se uma solicitação de reprodução não especificar um perfil, peça ao espectador que escolha um antes de a reprodução começar, para que essa informação esteja disponível no futuro.

**Use o horário final anterior ao retomar a reprodução de um clipe de vídeo longo.** Retomar a reprodução no ponto em que ela parou permite que as pessoas continuem rapidamente de onde pararam.

### Carregamento de conteúdo

**Evite exibir telas de carregamento sempre que possível.** Uma tela de carregamento é desnecessária se o seu conteúdo carrega rapidamente, mas, se o carregamento levar mais de dois segundos, considere mostrar uma tela de carregamento preta com um indicador de atividade centralizado e sem conteúdo ao redor.

**Inicie a reprodução imediatamente.** Se for preciso exibir uma tela de carregamento, exiba-a apenas até que conteúdo suficiente seja carregado para que a reprodução comece. Continue carregando o restante do conteúdo em segundo plano.

**Minimize o conteúdo da tela de carregamento.** Se você incluir identidade visual ou imagens na tela de carregamento, faça-o de forma mínima, mantendo o fundo preto que ajuda a oferecer uma transição contínua para a reprodução.

### Saída da reprodução

Depois de sair da reprodução, as pessoas permanecem no seu app em vez de voltar ao app Apple TV, por isso é uma boa ideia ajudá-las a não ficarem desorientadas.

**Mostre uma tela relevante para o contexto.** Ao sair da reprodução, exiba uma view de detalhes do conteúdo que o espectador estava assistindo e inclua uma opção para retomar a reprodução. Se uma view de detalhes não estiver disponível, mostre um menu que liste esse conteúdo ou o menu principal do seu app.

**Esteja preparado para uma saída imediata.** Prepare uma view de saída o mais cedo possível depois de receber uma notificação de reprodução, para estar pronto para exibi-la caso as pessoas saiam logo após o início da reprodução.

## Considerações por plataforma

*Sem considerações adicionais para iOS, iPadOS ou macOS.*

### tvOS

**Dê preferência ao conteúdo ao exibir logotipos ou sobreposições não interativas sobre o vídeo.** Um logotipo pequeno e discreto ou um cronômetro regressivo pode ser apropriado para o seu vídeo, mas evite sobreposições grandes e distrativas que não melhorem a experiência de visualização. Além disso, esteja ciente de que alguns dispositivos são propensos à retenção de imagem, por isso geralmente é melhor manter as sobreposições breves e preferir gráficos translúcidos em Standard Dynamic Range (SDR) a conteúdo brilhante e opaco.

**Mostre sobreposições interativas com elegância.** Alguns vídeos exibem sobreposições interativas, como questionários, pesquisas e verificações de progresso. Para a melhor experiência do usuário, implemente um atraso mínimo de 0,5 segundo para pausar a mídia em reprodução e exibir uma sobreposição interativa. Dê às pessoas uma maneira clara de dispensar a sobreposição e retomar a reprodução da mídia depois de terminarem a interação.

### visionOS

**Ajude as pessoas a se manterem confortáveis ao reproduzir vídeo no seu app.** Muitas vezes, um app não controla o conteúdo dos vídeos que reproduz, mas você pode ajudar as pessoas a se manterem confortáveis:

- Deixando que escolham quando começar a reproduzir um vídeo
- Usando uma janela pequena para a reprodução, deixando as pessoas redimensioná-la se quiserem
- Garantindo que as pessoas possam ver o ambiente ao redor durante a reprodução

**Em uma experiência totalmente imersiva, evite deixar que conteúdo virtual obstrua os controles de reprodução ou de transporte.** Em um contexto totalmente imersivo, o sistema posiciona automaticamente o player de vídeo em um local previsível que proporciona uma experiência de visualização ideal. Use esse local para garantir que nenhum conteúdo virtual oculte os controles de reprodução ou de transporte padrão no ornamento próximo à parte inferior do player.

**Evite iniciar automaticamente uma experiência de reprodução de vídeo totalmente imersiva.** As pessoas precisam ter controle sobre a experiência e provavelmente não gostarão de ser lançadas em um vídeo totalmente imersivo sem aviso.

**Crie uma faixa de miniaturas se quiser oferecer suporte à navegação por arrasto (scrubbing).** O sistema exibe miniaturas enquanto as pessoas arrastam para diferentes momentos do vídeo, ajudando-as a escolher a seção desejada. Para melhorar o desempenho, forneça um conjunto de miniaturas com 160 px de largura cada. Para orientações para desenvolvedores, consulte [HTTP Live Streaming (HLS) Authoring Specification for Apple Devices > Trick Play](https://developer.apple.com/documentation/http-live-streaming/hls-authoring-specification-for-apple-devices#Trick-Play).

**Evite expandir um player de vídeo em linha para preencher uma janela.** Quando você exibe a view de player fornecida pelo sistema em uma janela, os controles de reprodução aparecem no mesmo plano que a view do player, e não em um ornamento que flutua acima da janela. O vídeo em linha precisa ser 2D e você deve garantir que o conteúdo da janela permaneça visível ao redor do player, para que as pessoas não esperem uma experiência de reprodução mais imersiva. Para orientações para desenvolvedores, consulte [AVPlayerViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller).

**Use um player de vídeo do RealityKit se precisar reproduzir vídeo em uma view como uma tela de abertura ou uma view de transição.** Em situações como essas, as pessoas geralmente esperam que o vídeo conduza à próxima experiência, por isso não precisam de controles de reprodução nem de integrações fornecidas pelo sistema, como escurecimento e ancoragem da view. O player de vídeo do RealityKit usa automaticamente a proporção correta tanto para vídeo 2D quanto 3D e oferece suporte a legendas ocultas. O RealityKit também pode ajudar a reproduzir vídeo como efeito especial na superfície de uma view ou objeto personalizado. Para orientações para desenvolvedores, consulte [RealityKit](https://developer.apple.com/documentation/realitykit).

### watchOS

No watchOS, o sistema gerencia a reprodução de vídeo. Os apps podem reproduzir clipes de vídeo curtos enquanto o app está ativo e em execução em primeiro plano. Você pode usar um elemento de filme para incorporar clipes na sua interface e reproduzir vídeo em linha, ou reproduzir um clipe em uma interface separada. Para orientações para desenvolvedores, consulte [VideoPlayer](https://developer.apple.com/documentation/avkit/videoplayer).

**Mantenha os clipes de vídeo curtos.** Prefira clipes mais curtos, de no máximo 30 segundos. Clipes longos consomem mais espaço em disco e exigem que as pessoas mantenham os pulsos levantados por períodos mais longos, o que pode causar fadiga.

**Use os tamanhos e valores de codificação recomendados para recursos de mídia.** Em particular, evite redimensionar clipes de vídeo, o que afeta o desempenho e resulta em uma aparência abaixo do ideal. A tabela a seguir lista os valores recomendados de codificação e resolução para recursos de vídeo. Os valores de codificação de áudio se aplicam tanto a filmes quanto a recursos somente de áudio.

| Atributo | Valor |
|---|---|
| Codec de vídeo | H.264 High Profile |
| Taxa de bits do vídeo | 160 kbps a até 30 fps |
| Resolução (tela inteira) | 208x260 px (orientação retrato) |
| Resolução (16:9) | 320x180 px (orientação paisagem) |
| Áudio | 64 kbps HE-AAC |

**Evite criar uma imagem de pôster que se pareça com um controle do sistema.** Você quer que as pessoas entendam que podem tocar em um elemento de filme para reproduzi-lo; não quer confundi-las fazendo os elementos de filme parecerem outra coisa.

**Considere criar uma imagem de pôster que represente o conteúdo de um clipe de vídeo.** Quando as pessoas tocam em uma imagem de pôster, o sistema a substitui pelo vídeo e inicia a reprodução em linha. Uma imagem de pôster relevante pode ajudar as pessoas a decidir de forma informada se querem ver o vídeo. Em geral, evite criar uma imagem de pôster que não tenha nada a ver com o conteúdo ou que as pessoas possam confundir com um controle.

## Recursos

#### Relacionados

[Reprodução de áudio](https://developer.apple.com/design/human-interface-guidelines/playing-audio)

[Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

#### Documentação para desenvolvedores

[Configuring your app for media playback](https://developer.apple.com/documentation/avfoundation/configuring-your-app-for-media-playback) — AVFoundation

[AVKit](https://developer.apple.com/documentation/avkit)

[HTTP Live Streaming](https://developer.apple.com/streaming/)

#### Vídeos

- [Create a great video playback experience](https://developer.apple.com/videos/play/wwdc2022/10147)
- [Explore video experiences for visionOS](https://developer.apple.com/videos/play/wwdc2025/304)
- [Deliver a great playback experience on tvOS](https://developer.apple.com/videos/play/wwdc2021/10191)

## Histórico de alterações

| Data | Alterações |
|---|---|
| September 12, 2023 | Corrigida a largura recomendada para uma miniatura no visionOS. |
| June 21, 2023 | Atualizado para incluir orientações para o visionOS. |
