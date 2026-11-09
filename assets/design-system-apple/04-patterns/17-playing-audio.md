# Reprodução de áudio (Playing audio)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/playing-audio
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*As pessoas esperam experiências de áudio ricas que se ajustam automaticamente quando o contexto muda no dispositivo.*

![Um esboço de um alto-falante emitindo ondas sonoras, sugerindo a reprodução de áudio. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores.](../../images/playing-audio/patterns-playing-audio-intro@2x.png) ![Um esboço de um alto-falante emitindo ondas sonoras, sugerindo a reprodução de áudio. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores. (escuro)](../../images/playing-audio/patterns-playing-audio-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-playing-audio-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-playing-audio-intro~dark@2x.png)*

Os dispositivos podem reproduzir áudio de várias maneiras, como por alto-falantes internos ou externos, fones de ouvido e sem fio por dispositivos que usam Bluetooth ou AirPlay. Para manipular o som em seus dispositivos, as pessoas usam vários tipos de controles, incluindo botões de volume, o interruptor de Toque/Silencioso do iPhone, controles dos fones de ouvido, o controle deslizante de volume da Central de Controle e controles de som em acessórios de terceiros. Seja o som uma parte principal da sua experiência ou um enfeite, você precisa garantir que ele se comporte como as pessoas esperam quando alteram o volume e a saída.

**Silêncio.** As pessoas colocam um dispositivo no modo silencioso quando querem evitar ser interrompidas por sons inesperados, como toques de chamada e tons de mensagens recebidas. Nesse cenário, elas também querem silenciar sons não essenciais, como cliques do teclado, efeitos sonoros, trilhas sonoras de jogos e outros feedbacks audíveis. Quando um dispositivo está no modo silencioso, ele reproduz apenas o áudio que as pessoas iniciam explicitamente, como reprodução de mídia, alarmes e mensagens de áudio/vídeo.

**Volume.** As pessoas esperam que suas configurações de volume afetem todo o som do sistema, incluindo música e efeitos sonoros dentro dos apps, independentemente do método usado para ajustar o volume. Uma exceção é o volume do toque no iPhone, que as pessoas podem ajustar separadamente em Ajustes.

**Fones de ouvido.** As pessoas usam fones de ouvido para manter a audição privada e, em alguns casos, para deixar as mãos livres. Ao conectar fones de ouvido, as pessoas esperam que o som seja redirecionado automaticamente sem interrupção; ao desconectá-los, esperam que a reprodução seja pausada imediatamente.

## Boas práticas

**Ajuste os níveis automaticamente quando necessário, mas não ajuste o volume geral.** Seu app pode ajustar níveis de volume relativos e independentes para obter uma ótima mixagem de áudio, mas o volume do sistema sempre governa a saída final.

**Permita o redirecionamento do áudio sempre que possível.** As pessoas muitas vezes querem selecionar um dispositivo de saída de áudio diferente. Por exemplo, podem querer ouvir música pelo aparelho de som da sala, pelo rádio do carro ou pela Apple TV. Ofereça suporte a esse recurso, a menos que haja um motivo convincente para não fazê-lo.

**Use a visualização de volume fornecida pelo sistema para que as pessoas façam ajustes de áudio.** A visualização de volume inclui um controle deslizante de nível de volume e um controle para redirecionar a saída de áudio. Você pode personalizar a aparência do controle deslizante. Para orientações para desenvolvedores, consulte [MPVolumeView](https://developer.apple.com/documentation/mediaplayer/mpvolumeview).

**Escolha uma categoria de áudio que se adapte à forma como seu app ou jogo usa o som.** Dependendo da categoria de áudio escolhida, os sons do seu app podem se misturar com outros áudios, ser reproduzidos enquanto o app está em segundo plano ou parar quando as pessoas colocam o interruptor de Toque/Silencioso no modo silencioso. Na medida do possível, escolha uma categoria que ajude seu app a atender às expectativas das pessoas. Por exemplo, não faça as pessoas pararem de ouvir música de outro app se não for necessário. Para orientações para desenvolvedores, consulte [AVAudioSession.Category](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct).

| Categoria | Significado | Comportamento |
|---|---|---|
| Solo ambient | O som não é essencial, mas silencia outros áudios. Por exemplo, um jogo com trilha sonora. | Responde ao interruptor de silêncio. Não se mistura com outros sons. Não é reproduzido em segundo plano. |
| Ambient | O som não é essencial e não silencia outros áudios. Por exemplo, um jogo que permite que as pessoas reproduzam música de outro app durante a jogabilidade no lugar da trilha sonora do jogo. | Responde ao interruptor de silêncio. Mistura-se com outros sons. Não é reproduzido em segundo plano. |
| Playback | O som é essencial e pode se misturar com outros áudios. Por exemplo, um audiolivro ou um app educacional que ensina um idioma estrangeiro, que as pessoas podem querer ouvir depois de sair do app. | Não responde ao interruptor de silêncio. Pode ou não se misturar com outros sons. Pode ser reproduzido em segundo plano. |
| Record | O som é gravado. Por exemplo, um app de anotações que oferece um modo de gravação de áudio. Um app desse tipo pode mudar sua categoria para playback se permitir que as pessoas reproduzam as anotações gravadas. | Não responde ao interruptor de silêncio. Não se mistura com outros sons. Pode gravar em segundo plano. |
| Play and record | O som é gravado e reproduzido, possivelmente ao mesmo tempo. Por exemplo, um app de mensagens de áudio ou de chamadas de vídeo. | Não responde ao interruptor de silêncio. Pode ou não se misturar com outros sons. Pode gravar e reproduzir em segundo plano. |

**Responda aos controles de áudio somente quando fizer sentido.** As pessoas podem controlar a reprodução de áudio fora da interface do seu app, como na Central de Controle ou com os controles dos fones de ouvido, independentemente de seu app estar em primeiro ou segundo plano. Se seu app está reproduzindo áudio ativamente, está em um contexto claramente relacionado a áudio ou está conectado a um dispositivo que usa Bluetooth ou AirPlay, não há problema em responder aos controles de áudio. Caso contrário, quando as pessoas ativarem um controle, evite interromper o áudio que está sendo reproduzido por outro app.

**Evite reaproveitar os controles de áudio para outras finalidades.** As pessoas esperam que os controles de áudio se comportem de forma consistente em todos os apps, por isso é essencial evitar redefinir o significado de um controle de áudio no seu app. Se seu app não oferece suporte a determinados controles, não responda a eles.

**Considere criar controles personalizados de reprodutor de áudio somente se precisar oferecer comandos que o sistema não suporta.** Por exemplo, você pode querer definir incrementos personalizados para avançar ou retroceder, ou apresentar conteúdo relacionado ao áudio em reprodução, como o placar de um jogo.

**Informe a outros apps quando seu app terminar de reproduzir um áudio temporário.** Se seu app pode interromper temporariamente o áudio de outros apps, sinalize sua sessão de áudio de forma a informar aos outros apps quando eles podem retomar. Para orientações para desenvolvedores, consulte [notifyOthersOnDeactivation](https://developer.apple.com/documentation/avfaudio/avaudiosession/setactiveoptions/notifyothersondeactivation).

## Tratamento de interrupções

Embora a maioria dos apps e jogos dependa do comportamento padrão de interrupção do sistema, você pode personalizar esse comportamento para atender melhor às suas necessidades.

**Determine como responder às interrupções da sessão de áudio.** Por exemplo, se seu app oferece suporte à gravação ou a outras tarefas relacionadas a áudio que as pessoas não querem que sejam interrompidas, você pode instruir o sistema a evitar interromper o áudio em reprodução quando chegar uma chamada, a menos que as pessoas escolham atendê-la. Outro exemplo é um app VoIP, que deve encerrar uma chamada quando as pessoas fecham o Smart Folio do iPad enquanto usam o microfone integrado. Fechar o Smart Folio silencia automaticamente o microfone do iPad e, por padrão, interrompe a sessão de áudio associada a ele. Se um app VoIP reiniciar a sessão de áudio quando as pessoas reabrirem o Smart Folio, ele corre o risco de invadir a privacidade das pessoas ao reativar o microfone sem que elas saibam. Você pode inspecionar uma interrupção da sessão de áudio para ajudar a determinar a forma correta de responder; para orientações para desenvolvedores, consulte [Handling audio interruptions](https://developer.apple.com/documentation/avfaudio/handling-audio-interruptions).

**Quando uma interrupção terminar, determine se a reprodução de áudio deve ser retomada automaticamente.** Às vezes, o áudio de outro app pode interromper o áudio que seu app está reproduzindo. Uma interrupção pode ser *retomável*, como uma chamada telefônica recebida, ou *não retomável*, como quando as pessoas iniciam uma nova playlist de música. Use o tipo de interrupção e o tipo do seu app para decidir se a reprodução deve ser retomada automaticamente. Por exemplo, um app de reprodução de mídia que está reproduzindo áudio ativamente quando ocorre uma interrupção pode verificar se o tipo é retomável antes de continuar a reprodução quando a interrupção terminar. Por outro lado, um jogo não precisa verificar o tipo de interrupção antes de retomar a reprodução automaticamente, porque um jogo reproduz áudio sem uma escolha explícita do usuário. Para orientações para desenvolvedores, consulte [shouldResume](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptionoptions/shouldresume).

## Considerações por plataforma

### iOS, iPadOS

**Use os serviços de som do sistema para reproduzir sons curtos e vibrações.** Para orientações para desenvolvedores, consulte [Audio Services](https://developer.apple.com/documentation/audiotoolbox/audio-services).

### macOS

No macOS, os sons de notificação se misturam com outros áudios por padrão.

### tvOS

No tvOS, o sistema reproduz áudio somente quando as pessoas o iniciam, por meio de interações dentro de apps e jogos ou ao realizar calibrações do dispositivo. Por exemplo, o tvOS não reproduz sons para acompanhar componentes como alertas ou notificações.

### visionOS

Sons sutis e expressivos estão por toda parte no visionOS, aprimorando as experiências e fornecendo feedback essencial quando as pessoas olham para um objeto virtual e usam gestos para interagir com ele. O sistema combina algoritmos de áudio com informações sobre o ambiente físico de uma pessoa para produzir o *Spatial Audio*, um som que as pessoas percebem como vindo de locais específicos no espaço, e não apenas dos alto-falantes.

> **Importante:** No visionOS, como em todas as plataformas, evite comunicar informações importantes usando apenas som. Sempre forneça formas adicionais de ajudar as pessoas a entender seu app. Para orientações, consulte [Acessibilidade](https://developer.apple.com/design/human-interface-guidelines/accessibility).

No visionOS, a reprodução de áudio do app Now Playing é pausada automaticamente quando as pessoas fecham a janela do app, e o áudio de um app que não é o Now Playing pode ser atenuado quando as pessoas desviam o olhar dele para outro app.

**Prefira reproduzir som.** As pessoas geralmente optam por manter os sons audíveis enquanto usam o dispositivo, então um app que não reproduz som, especialmente em um momento imersivo, pode parecer sem vida e até parecer defeituoso. Durante todo o processo de design, procure oportunidades de criar sons significativos que auxiliem a navegação e ajudem as pessoas a entender as qualidades espaciais do seu app.

**Projete sons personalizados para elementos de interface personalizados.** Em geral, um elemento fornecido pelo sistema reproduz som para ajudar as pessoas a localizá-lo e receber feedback quando interagem com ele. Para ajudar as pessoas a interagir com seus elementos personalizados, projete sons que forneçam feedback e aprimorem a experiência espacial do seu app.

**Use o Spatial Audio para criar uma experiência intuitiva e envolvente.** Como as pessoas podem perceber o Spatial Audio como vindo de qualquer lugar ao redor delas, ele funciona especialmente bem em um contexto totalmente imersivo como forma de ajudar uma experiência a parecer realista. O *áudio ambiente* fornece sons onipresentes que podem ajudar a ancorar as pessoas em um mundo virtual, e uma *fonte de áudio* pode soar como se viesse de um objeto específico. Ao construir a paisagem sonora do seu app, considere usar os dois tipos de áudio.

**Considere definir um intervalo de lugares de onde os sons do seu app podem se originar.** O Spatial Audio ajuda as pessoas a localizar o objeto que está emitindo som, seja ele estacionário ou em movimento no espaço. Por exemplo, quando as pessoas movem a janela de um app que está reproduzindo áudio, o som continua vindo diretamente da janela, para onde quer que as pessoas a movam.

**Considere variar os sons que as pessoas poderiam perceber como repetitivos ao longo do tempo.** Por exemplo, o sistema varia sutilmente o tom e o volume dos sons do teclado virtual, sugerindo os diferentes sons que um teclado físico pode fazer à medida que as pessoas variam naturalmente a velocidade e a força da digitação. Uma maneira eficiente de obter uma variação agradável de som é randomizar o tom e o volume de um arquivo de som durante a reprodução, em vez de criar arquivos diferentes.

**Decida se você precisa reproduzir som fixo em relação a quem usa o dispositivo ou rastreado por essa pessoa.** As pessoas percebem o som *fixo* como se estivesse direcionado a elas, independentemente da direção em que olham ou dos objetos virtuais que movem. Em contraste, as pessoas tendem a perceber o som *rastreado* como vindo de um objeto específico, de modo que aproximar ou afastar o objeto altera o que elas ouvem. Em geral, você deve usar som rastreado para aumentar o realismo da sua experiência, mas pode haver casos em que o som fixo seja uma boa escolha. Por exemplo, o Mindfulness usa som fixo para envolver quem usa o dispositivo em um ambiente envolvente e tranquilo.

### watchOS

No watchOS, o sistema gerencia a reprodução de áudio. Um app pode reproduzir clipes de áudio curtos enquanto está ativo e em execução em primeiro plano, ou pode reproduzir áudio mais longo que continua mesmo quando as pessoas abaixam o pulso ou mudam para outro app. Para orientações para desenvolvedores, consulte [Playing Background Audio](https://developer.apple.com/documentation/watchkit/playing-background-audio).

**Use os valores de codificação recomendados para os recursos de mídia.** Especificamente, use o formato HE-AAC (High-Efficiency Advanced Audio Coding) de 64 kbps para produzir áudio de boa qualidade com menores requisitos de dados.

**Considere** **apresentar uma visualização Now Playing para que as pessoas possam controlar o áudio atual ou recentemente reproduzido sem sair do seu app.** A visualização Now Playing fornecida pelo sistema também exibe informações sobre a fonte de áudio atual, que pode ser outro app no Apple Watch ou no iPhone de uma pessoa, e seleciona automaticamente a fonte atual ou usada mais recentemente. Para orientações para desenvolvedores, consulte [Adding a Now Playing View](https://developer.apple.com/documentation/watchkit/adding-a-now-playing-view).

## Recursos

#### Relacionados

[Reprodução de vídeo](https://developer.apple.com/design/human-interface-guidelines/playing-video)

[Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

#### Documentação para desenvolvedores

[Configuring your app for media playback](https://developer.apple.com/documentation/avfoundation/configuring-your-app-for-media-playback) — AVFoundation

[AVAudioSession](https://developer.apple.com/documentation/avfaudio/avaudiosession) — AVFAudio

[MusicKit](https://developer.apple.com/documentation/musickit) — MusicKit

#### Vídeos

- [Integrate MusicKit into your app](https://developer.apple.com/videos/play/wwdc2026/254)
- [Explore immersive sound design](https://developer.apple.com/videos/play/wwdc2023/10271)
- [Immerse your app in Spatial Audio](https://developer.apple.com/videos/play/wwdc2021/10265)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
