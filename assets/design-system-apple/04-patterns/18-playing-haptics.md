# Reprodução de hápticos (Playing haptics)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/playing-haptics
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Reproduzir hápticos pode envolver o sentido do tato das pessoas e trazer a familiaridade delas com o mundo físico para o seu app ou jogo.*

![Um esboço de uma linha horizontal de três círculos ligeiramente sobrepostos, sugerindo vibração. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que remete sutilmente ao laranja do logotipo original da Apple de seis cores.](../../images/playing-haptics/patterns-playing-haptics-intro@2x.png) ![Um esboço de uma linha horizontal de três círculos ligeiramente sobrepostos, sugerindo vibração. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que remete sutilmente ao laranja do logotipo original da Apple de seis cores. (escuro)](../../images/playing-haptics/patterns-playing-haptics-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-playing-haptics-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-playing-haptics-intro~dark@2x.png)*

Dependendo da plataforma e do dispositivo que as pessoas estão usando, o sistema pode reproduzir hápticos além do feedback visual e auditivo. Por exemplo, componentes como interruptores, controles deslizantes e seletores reproduzem automaticamente feedback háptico em modelos de iPhone compatíveis; no Apple Watch, o Taptic Engine gera hápticos para vários padrões de feedback integrados, que o watchOS combina com um tom audível. Em um Mac equipado com um trackpad Force Touch, um app pode reproduzir hápticos enquanto as pessoas arrastam conteúdo ou quando fazem um clique forçado para alterar a velocidade dos controles de mídia.

Além dos recursos hápticos integrados, alguns dispositivos de entrada externos também podem reproduzir hápticos. Por exemplo:

- Em um app ou jogo para iPadOS, macOS, tvOS ou visionOS, os [controles de jogo](https://developer.apple.com/design/human-interface-guidelines/game-controls) podem fornecer feedback háptico (para orientações para desenvolvedores, consulte [Playing Haptics on Game Controllers](https://developer.apple.com/documentation/corehaptics/playing-haptics-on-game-controllers)).
- O [Apple Pencil Pro](https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble) e alguns trackpads podem fornecer feedback háptico quando conectados a certos modelos de iPad. (Para detalhes sobre os recursos e a compatibilidade do Apple Pencil, consulte [Apple Pencil](https://www.apple.com/apple-pencil/).)

## Boas práticas

**Use os padrões hápticos fornecidos pelo sistema de acordo com os significados documentados.** As pessoas reconhecem os hápticos padrão porque o sistema os reproduz de forma consistente nas interações com controles padrão. Se o caso de uso documentado de um padrão não fizer sentido no seu app ou jogo, evite usar o padrão para significar outra coisa. Em vez disso, use um padrão genérico ou crie o seu próprio, onde houver suporte. Para orientações, consulte [Hápticos personalizados](https://developer.apple.com/design/human-interface-guidelines/playing-haptics#Custom-haptics).

**Use hápticos de forma consistente em todo o seu app ou jogo.** É importante construir uma relação causal clara entre cada háptico e a ação que o provoca, para que as pessoas aprendam a associar certos padrões hápticos a certas experiências. Se um háptico não reforça uma relação de causa e efeito, ele pode ser confuso e parecer gratuito. Por exemplo, se o seu jogo reproduz um padrão háptico específico quando um personagem fracassa em concluir uma missão, as pessoas associam esse padrão a um resultado negativo. Se você usar o mesmo padrão háptico para um resultado positivo, como a conclusão de uma fase, as pessoas ficarão confusas.

**Prefira usar hápticos para complementar outros feedbacks no seu app ou jogo.** Quando o feedback visual, auditivo e tátil estão em harmonia — como geralmente estão no mundo físico —, a experiência do usuário é mais coerente e pode parecer mais natural. Por exemplo, em geral você quer combinar a intensidade e a nitidez de um háptico com a intensidade e a nitidez da animação que ele acompanha. Você também pode sincronizar o som com os hápticos; para orientações para desenvolvedores, consulte [Delivering Rich App Experiences with Haptics](https://developer.apple.com/documentation/corehaptics/delivering-rich-app-experiences-with-haptics).

**Evite o uso excessivo de hápticos.** Às vezes, um háptico pode parecer perfeito quando ocorre ocasionalmente, mas se tornar cansativo quando é reproduzido com frequência. Fazer testes com usuários pode ajudar a descobrir um equilíbrio que a maioria das pessoas aprecie. Muitas vezes, a melhor experiência háptica é aquela de que as pessoas talvez nem tenham consciência, mas da qual sentem falta quando é desativada.

**Na maioria dos apps, prefira reproduzir hápticos curtos que complementem eventos pontuais.** Embora hápticos de longa duração que acompanham o fluxo de uma partida possam melhorar a experiência, hápticos de longa duração em um app podem diluir o significado do feedback e distrair as pessoas da tarefa. No Apple Pencil Pro, por exemplo, hápticos contínuos ou prolongados tendem a não esclarecer a experiência de escrever ou desenhar e podem até tornar menos agradável segurar a caneta.

**Torne os hápticos opcionais.** Deixe as pessoas desativarem ou silenciarem os hápticos e garanta que elas ainda possam aproveitar o seu app ou jogo sem eles.

**Tenha em mente que reproduzir hápticos pode afetar outras experiências do usuário.** Por design, os hápticos produzem força física suficiente para que as pessoas sintam a vibração. Garanta que as vibrações hápticas não prejudiquem experiências que envolvam recursos do dispositivo, como a câmera, o giroscópio ou o microfone.

## Hápticos personalizados

Os jogos costumam usar hápticos personalizados para melhorar a jogabilidade. Embora seja menos comum, apps que não são jogos também podem usar hápticos personalizados para oferecer uma experiência mais rica e agradável.

Você pode projetar padrões hápticos personalizados que variam dinamicamente, com base na entrada do usuário ou no contexto. Por exemplo, o impacto que os jogadores sentem quando um personagem do jogo pula de uma árvore pode ser mais forte do que quando o personagem pula no mesmo lugar, e experiências marcantes — como uma colisão ou uma pancada — podem parecer muito diferentes de experiências sutis, como a aproximação de passos ou um perigo iminente.

Há dois blocos de construção básicos que você pode usar para gerar padrões hápticos personalizados.

- Os eventos *transitórios* são breves e compactos, muitas vezes parecendo toques ou impulsos. A experiência de tocar no botão Lanterna na Tela de Início é um exemplo de evento transitório.
- Os eventos *contínuos* parecem vibrações sustentadas, como a experiência do efeito de lasers em uma mensagem.

Independentemente do tipo de evento háptico usado para gerar um háptico personalizado, você também pode controlar sua *nitidez* e sua *intensidade*. Você pode pensar na nitidez como uma forma de abstrair uma experiência háptica na forma de onda que produz as sensações físicas correspondentes. Especificar a nitidez permite transmitir ao sistema a sua intenção para a experiência. Por exemplo, você pode usar valores de nitidez para transmitir uma experiência suave, arredondada ou orgânica, ou uma experiência nítida, precisa ou mecânica. Como o termo sugere, a intensidade significa a força do háptico.

Combinando eventos transitórios e contínuos, variando a nitidez e a intensidade e incluindo conteúdo de áudio opcional, você pode criar uma ampla gama de experiências hápticas diferentes. Para orientações para desenvolvedores, consulte [Core Haptics](https://developer.apple.com/documentation/corehaptics).

## Considerações por plataforma

### iOS

Em modelos de iPhone compatíveis, você pode adicionar hápticos à sua experiência das seguintes formas:

- Use componentes de interface padrão — como [interruptores](https://developer.apple.com/design/human-interface-guidelines/toggles), [controles deslizantes](https://developer.apple.com/design/human-interface-guidelines/sliders) e [seletores](https://developer.apple.com/design/human-interface-guidelines/pickers) — que reproduzem por padrão hápticos do sistema projetados pela Apple.
- Quando fizer sentido, use um gerador de feedback para reproduzir um de vários padrões hápticos predefinidos nas categorias de [notificação](https://developer.apple.com/design/human-interface-guidelines/playing-haptics#Notification), [impacto](https://developer.apple.com/design/human-interface-guidelines/playing-haptics#Impact) e [seleção](https://developer.apple.com/design/human-interface-guidelines/playing-haptics#Selection) (para orientações para desenvolvedores, consulte [UIFeedbackGenerator](https://developer.apple.com/documentation/uikit/uifeedbackgenerator)).

#### Notificação

Os hápticos de notificação dão feedback sobre o resultado de uma tarefa ou ação, como depositar um cheque ou destravar um veículo.

![Uma animação que representa uma série de dois pulsos hápticos de várias durações e intensidades, mostrando barras de tamanhos diferentes e reproduzindo tons de áudio de alturas diferentes. Este padrão em particular representa um sucesso.](../../images/playing-haptics/success@2x.png)

*Vídeo: Uma animação que representa uma série de dois pulsos hápticos de várias durações e intensidades, mostrando barras de tamanhos diferentes e reproduzindo tons de áudio de alturas diferentes. Este padrão em particular representa um sucesso.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/success.mp4)

![Uma animação que representa uma série de dois pulsos hápticos de várias durações e intensidades, mostrando barras de tamanhos diferentes e reproduzindo tons de áudio de alturas diferentes. Este padrão em particular representa um aviso.](../../images/playing-haptics/warning@2x.png)

*Vídeo: Uma animação que representa uma série de dois pulsos hápticos de várias durações e intensidades, mostrando barras de tamanhos diferentes e reproduzindo tons de áudio de alturas diferentes. Este padrão em particular representa um aviso.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/warning.mp4)

![Uma animação que representa uma série de quatro pulsos hápticos de várias durações e intensidades, mostrando barras de tamanhos diferentes e reproduzindo tons de áudio de alturas diferentes. Este padrão em particular representa um erro.](../../images/playing-haptics/error@2x.png)

*Vídeo: Uma animação que representa uma série de quatro pulsos hápticos de várias durações e intensidades, mostrando barras de tamanhos diferentes e reproduzindo tons de áudio de alturas diferentes. Este padrão em particular representa um erro.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/error.mp4)

#### Impacto

Os hápticos de impacto oferecem uma metáfora física que você pode usar para complementar uma experiência visual. Por exemplo, as pessoas podem sentir um toque quando uma visualização se encaixa no lugar ou uma pancada quando dois objetos pesados colidem.

![Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa um impacto leve.](../../images/playing-haptics/impact-light@2x.png)

*Vídeo: Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa um impacto leve.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/impact-light.mp4)

![Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa um impacto médio.](../../images/playing-haptics/impact-medium@2x.png)

*Vídeo: Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa um impacto médio.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/impact-medium.mp4)

![Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa um impacto pesado.](../../images/playing-haptics/impact-heavy@2x.png)

*Vídeo: Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa um impacto pesado.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/impact-heavy.mp4)

![Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa um impacto rígido.](../../images/playing-haptics/impact-rigid@2x.png)

*Vídeo: Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa um impacto rígido.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/impact-rigid.mp4)

![Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa um impacto suave.](../../images/playing-haptics/impact-soft@2x.png)

*Vídeo: Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa um impacto suave.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/impact-soft.mp4)

#### Seleção

Os hápticos de seleção dão feedback enquanto os valores de um elemento da interface estão mudando.

![Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa uma seleção.](../../images/playing-haptics/retarget@2x.png)

*Vídeo: Uma animação que representa um único pulso háptico de uma duração e intensidade específicas, mostrando uma barra de um tamanho específico e reproduzindo um tom de áudio de uma altura específica. Este padrão em particular representa uma seleção.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/retarget.mp4)

### macOS

Quando um Magic Trackpad está disponível, seu app pode fornecer um dos três padrões hápticos a seguir em resposta a uma operação de arrastar ou a um clique forçado.

| Padrão de feedback háptico | Descrição |
|---|---|
| Alinhamento | Indica o alinhamento de um item arrastado. Por exemplo, esse padrão poderia ser usado em um app de desenho quando as pessoas arrastam uma forma até alinhá-la com outra forma. Outros cenários em que esse tipo de feedback poderia ser usado incluem dimensionar um objeto para caber em dimensões específicas, posicionar um objeto em um local preferido ou chegar ao início/fim ou ao mínimo/máximo de algo como um controle de navegação em um app de vídeo. |
| Mudança de nível | Indica o movimento entre níveis discretos de pressão. Por exemplo, à medida que as pessoas pressionam um botão de avanço rápido em um player de vídeo, a reprodução poderia acelerar ou desacelerar e o feedback háptico poderia ser fornecido conforme diferentes níveis de pressão são alcançados. |
| Genérico | Destinado a fornecer feedback geral quando os outros padrões não se aplicam. |

Para orientações para desenvolvedores, consulte [NSHapticFeedbackPerformer](https://developer.apple.com/documentation/appkit/nshapticfeedbackperformer).

### watchOS

O Apple Watch Series 4 e posteriores oferecem feedback háptico para a Digital Crown, o que dá às pessoas uma experiência mais tátil ao rolar o conteúdo. Por padrão, o sistema fornece batentes hápticos lineares que as pessoas podem sentir ao girar a Digital Crown. Alguns controles do sistema, como visualizações de tabela, fornecem batentes à medida que novos itens rolam para a tela. Para orientações para desenvolvedores, consulte [WKHapticType](https://developer.apple.com/documentation/watchkit/wkhaptictype).

O watchOS define o seguinte conjunto de hápticos, cada um dos quais transmite um significado específico às pessoas.

**Notificação**

*Vídeo: Uma animação que representa um arranjo de pulsos hápticos de várias durações e intensidades, mostrando um conjunto de linhas verticais finas que simbolizam ondas sonoras.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/haptics-notification.mp4)

**Notificação.** Informa à pessoa que algo significativo ou fora do comum aconteceu e exige a atenção dela. O sistema reproduz esse mesmo háptico quando chega uma notificação local ou remota.

**Subir**

*Vídeo: Uma animação que representa um arranjo de pulsos hápticos de várias durações e intensidades, mostrando um conjunto de linhas verticais finas que simbolizam ondas sonoras.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/haptics-levelup.mp4)

**Subir.** Informa à pessoa que um valor importante aumentou acima de um limite significativo.

**Descer**

*Vídeo: Uma animação que representa um arranjo de pulsos hápticos de várias durações e intensidades, mostrando um conjunto de linhas verticais finas que simbolizam ondas sonoras.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/haptics-leveldown.mp4)

**Descer.** Informa à pessoa que um valor importante diminuiu abaixo de um limite significativo.

**Sucesso**

*Vídeo: Uma animação que representa um arranjo de pulsos hápticos de várias durações e intensidades, mostrando um conjunto de linhas verticais finas que simbolizam ondas sonoras.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/haptics-success.mp4)

**Sucesso.** Informa à pessoa que uma ação foi concluída com êxito.

**Falha**

*Vídeo: Uma animação que representa um arranjo de pulsos hápticos de várias durações e intensidades, mostrando um conjunto de linhas verticais finas que simbolizam ondas sonoras.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/haptics-failure.mp4)

**Falha.** Informa à pessoa que uma ação falhou.

**Tentar novamente**

*Vídeo: Uma animação que representa um arranjo de pulsos hápticos de várias durações e intensidades, mostrando um conjunto de linhas verticais finas que simbolizam ondas sonoras.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/haptics-retry.mp4)

**Tentar novamente.** Informa à pessoa que uma ação falhou, mas que ela pode tentar de novo.

**Iniciar**

*Vídeo: Uma animação que representa um arranjo de pulsos hápticos de várias durações e intensidades, mostrando um conjunto de linhas verticais finas que simbolizam ondas sonoras.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/haptics-start.mp4)

**Iniciar.** Informa à pessoa que uma atividade começou. Use esse háptico ao iniciar um cronômetro ou qualquer outra atividade que a pessoa possa iniciar e parar explicitamente. O háptico de parar normalmente vem depois desse háptico.

**Parar**

*Vídeo: Uma animação que representa um arranjo de pulsos hápticos de várias durações e intensidades, mostrando um conjunto de linhas verticais finas que simbolizam ondas sonoras.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/haptics-stop.mp4)

**Parar.** Informa à pessoa que uma atividade foi interrompida. Use esse háptico ao parar um cronômetro ou outra atividade que a pessoa tenha iniciado anteriormente.

**Clique**

*Vídeo: Uma animação que representa um arranjo de pulsos hápticos de várias durações e intensidades, mostrando um conjunto de linhas verticais finas que simbolizam ondas sonoras.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/haptics-click.mp4)

**Clique.** Proporciona a sensação de um seletor giratório clicando, ajudando a comunicar o progresso em incrementos ou intervalos predefinidos. O uso excessivo do háptico de clique tende a diminuir sua utilidade e pode até causar confusão quando os cliques se sobrepõem.

## Recursos

#### Relacionados

[Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

[Gestos](https://developer.apple.com/design/human-interface-guidelines/gestures)

#### Documentação para desenvolvedores

[Core Haptics](https://developer.apple.com/documentation/corehaptics)

#### Vídeos

- [Practice audio haptic design](https://developer.apple.com/videos/play/wwdc2021/10278)
- [Introducing Core Haptics](https://developer.apple.com/videos/play/wwdc2019/520)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 7 de maio de 2024 | Adicionadas orientações para reprodução de hápticos no Apple Pencil Pro. |
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
