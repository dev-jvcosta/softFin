# Live Activities

> Fonte: https://developer.apple.com/design/human-interface-guidelines/live-activities
>
> Plataformas: ios, ipados, macos, watchos

*Uma Live Activity permite às pessoas acompanhar o progresso de uma atividade, evento ou tarefa rapidamente.*

![Uma representação estilizada da Dynamic Island, nas formas recolhida e expandida, exibindo o placar de um evento esportivo ao vivo. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores.](../../../images/live-activities/components-live-activities-intro@2x.png) ![Uma representação estilizada da Dynamic Island, nas formas recolhida e expandida, exibindo o placar de um evento esportivo ao vivo. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores. (escuro)](../../../images/live-activities/components-live-activities-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-live-activities-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-live-activities-intro~dark@2x.png)*

As Live Activities permitem às pessoas acompanhar tarefas e eventos em locais de fácil visualização em todos os dispositivos. Elas vão além das notificações push, entregando atualizações frequentes de conteúdo e status ao longo de algumas horas e permitindo que as pessoas interajam com as informações exibidas.

Por exemplo, uma Live Activity pode mostrar o tempo restante até a chegada de um pedido de comida, informações ao vivo de uma partida de futebol ou métricas de condicionamento físico em tempo real e controles interativos para pausar ou cancelar um treino.

As Live Activities começam no iPhone ou iPad e aparecem automaticamente em locais do sistema nos dispositivos de uma pessoa:

| Plataforma ou experiência do sistema | Local |
|---|---|
| iPhone e iPad | Tela Bloqueada, Tela de Início, na Dynamic Island e no StandBy no iPhone |
| Mac | A barra de menus |
| Apple Watch | Smart Stack |
| CarPlay | Painel do CarPlay |

## Anatomia

As Live Activities aparecem em todo o sistema em vários locais, como a *Dynamic Island* e a Tela Bloqueada. Ela serve como um lar unificado para alertas e indicadores de atividade em andamento. Dependendo do dispositivo e do local do sistema em que uma Live Activity aparece, o sistema escolhe um estilo de *apresentação* ou uma combinação de estilos para compor a aparência da sua Live Activity. Como resultado, sua Live Activity deve oferecer suporte a:

- [Compacta](https://developer.apple.com/design/human-interface-guidelines/live-activities#Compact)
- [Mínima](https://developer.apple.com/design/human-interface-guidelines/live-activities#Minimal)
- [Expandida](https://developer.apple.com/design/human-interface-guidelines/live-activities#Expanded)
- [Tela Bloqueada](https://developer.apple.com/design/human-interface-guidelines/live-activities#Lock-Screen)

No iOS e no iPadOS, sua Live Activity aparece em todo o sistema usando essas apresentações. Além disso, o sistema as usa para criar aparências padrão para outros contextos. Por exemplo, a apresentação compacta aparece na Dynamic Island no iPhone e consiste em dois elementos que o sistema combina em uma única view para o Apple Watch e no CarPlay.

### Compacta

Na Dynamic Island, o sistema usa a apresentação compacta quando apenas uma Live Activity está ativa. A apresentação consiste em dois elementos separados: um no lado inicial da câmera TrueDepth e outro no lado final. Apesar do espaço limitado, a apresentação compacta exibe informações atualizadas sobre a Live Activity do seu app.

![Uma ilustração que mostra as views compacta inicial e compacta final na Dynamic Island.](../../../images/live-activities/type-compact@2x.png) ![Uma ilustração que mostra as views compacta inicial e compacta final na Dynamic Island. (escuro)](../../../images/live-activities/type-compact~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/type-compact@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/type-compact~dark@2x.png)*

Para orientações de design, consulte [Apresentação compacta](https://developer.apple.com/design/human-interface-guidelines/live-activities#Compact-presentation).

### Mínima

Quando várias Live Activities estão ativas, o sistema usa a apresentação mínima para exibir duas delas na Dynamic Island. Uma aparece anexada à Dynamic Island, enquanto a outra aparece separada. Dependendo do tamanho do conteúdo, a apresentação mínima separada aparece circular ou oval. Assim como na apresentação compacta, as pessoas tocam na apresentação mínima para abrir o app correspondente ou tocam e seguram para ver a apresentação expandida.

![Uma ilustração que mostra a apresentação mínima na Dynamic Island.](../../../images/live-activities/type-minimal@2x.png) ![Uma ilustração que mostra a apresentação mínima na Dynamic Island. (escuro)](../../../images/live-activities/type-minimal~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/type-minimal@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/type-minimal~dark@2x.png)*

Para orientações de design, consulte [Apresentação mínima](https://developer.apple.com/design/human-interface-guidelines/live-activities#Minimal-presentation).

### Expandida

Quando as pessoas tocam e seguram uma Live Activity na apresentação compacta ou mínima, o sistema exibe a apresentação expandida.

![Uma ilustração que mostra a view expandida na Dynamic Island.](../../../images/live-activities/type-expanded@2x.png) ![Uma ilustração que mostra a view expandida na Dynamic Island. (escuro)](../../../images/live-activities/type-expanded~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/type-expanded@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/type-expanded~dark@2x.png)*

Para orientações de design, consulte [Apresentação expandida](https://developer.apple.com/design/human-interface-guidelines/live-activities#Expanded-presentation).

### Tela Bloqueada

O sistema usa a apresentação da Tela Bloqueada para exibir um banner na parte inferior da Tela Bloqueada. Nessa apresentação, use um layout semelhante ao da apresentação expandida.

![Uma captura de tela de uma Live Activity na Tela Bloqueada de um iPhone que oferece suporte à Dynamic Island.](../../../images/live-activities/live-activity-lock-screen@2x.png) ![Uma captura de tela de uma Live Activity na Tela Bloqueada de um iPhone que oferece suporte à Dynamic Island. (escuro)](../../../images/live-activities/live-activity-lock-screen~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activity-lock-screen@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activity-lock-screen~dark@2x.png)*

Quando você alerta as pessoas sobre atualizações da Live Activity em dispositivos que não oferecem suporte à Dynamic Island, a apresentação da Tela Bloqueada aparece brevemente como um banner que se sobrepõe à Tela de Início ou a outros apps.

![Uma captura de tela de uma Live Activity que aparece como um banner na Tela de Início de um iPhone sem suporte à Dynamic Island.](../../../images/live-activities/live-activity-notch@2x.png) ![Uma captura de tela de uma Live Activity que aparece como um banner na Tela de Início de um iPhone sem suporte à Dynamic Island. (escuro)](../../../images/live-activities/live-activity-notch~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activity-notch@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activity-notch~dark@2x.png)*

Para orientações de design, consulte [Apresentação da Tela Bloqueada](https://developer.apple.com/design/human-interface-guidelines/live-activities#Lock-Screen-presentation).

### StandBy

No iPhone no StandBy, sua Live Activity aparece na apresentação mínima. Quando alguém toca nela, ela faz a transição para a apresentação da Tela Bloqueada, ampliada em 2x para preencher a tela. Se a apresentação da sua Tela Bloqueada usa uma cor de fundo personalizada, o sistema a estende automaticamente para toda a tela para criar um design contínuo em tela inteira.

![Uma imagem que mostra a apresentação da Tela Bloqueada de uma Live Activity no StandBy, ampliada em 2x, com uma borda pontilhada para indicar a ampliação de 2x da Live Activity.](../../../images/live-activities/live-activity-standby-default-outline@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activity-standby-default-outline@2x.png)*

Para orientações de design, consulte [Apresentação no StandBy](https://developer.apple.com/design/human-interface-guidelines/live-activities#StandBy-presentation).

## Boas práticas

**Ofereça Live Activities para tarefas e eventos que tenham início e fim definidos.** As Live Activities funcionam melhor para acompanhar atividades de duração curta a média, que não excedam oito horas.

**Concentre-se nas informações importantes que as pessoas precisam ver rapidamente.** Sua Live Activity não precisa exibir tudo. Pense em quais informações as pessoas consideram mais úteis e priorize compartilhá-las de forma concisa. Quando uma pessoa quiser saber mais, ela pode tocar na sua Live Activity para abrir o seu app, onde você pode fornecer detalhes adicionais.

**Não use uma Live Activity para exibir anúncios ou promoções.** As Live Activities ajudam as pessoas a se manterem informadas sobre eventos e tarefas em andamento, por isso é importante exibir apenas informações relacionadas a esses eventos e tarefas.

**Evite exibir informações sensíveis.** As Live Activities ficam bem visíveis e podem ser vistas por observadores casuais; por exemplo, na Tela Bloqueada ou no display Always-On. Para conteúdo que as pessoas possam considerar sensível ou privado, exiba um resumo inofensivo e deixe as pessoas tocarem na Live Activity para ver as informações sensíveis no seu app. Como alternativa, oculte as views que possam conter informações sensíveis e deixe as pessoas configurarem se querem mostrar dados sensíveis. Para orientações para desenvolvedores, consulte [Creating a widget extension](https://developer.apple.com/documentation/widgetkit/creating-a-widget-extension).

**Crie uma Live Activity que corresponda à estética visual e à personalidade do seu app nas aparências escura e clara.** Isso facilita que as pessoas reconheçam sua Live Activity e cria uma conexão visual com o seu app.

**Se você incluir uma marca de logotipo, exiba-a sem contêiner.** Isso integra melhor a marca de logotipo ao layout da sua Live Activity. Não use o ícone do app inteiro.

**Não adicione ao seu app elementos que chamem a atenção para a Dynamic Island.** Sua Live Activity aparece na Dynamic Island enquanto seu app não está em uso, e outros itens podem aparecer na Dynamic Island quando o seu app está aberto.

**Garanta que o texto seja fácil de ler.** Use texto grande e de peso mais forte — peso médio ou superior. Use texto pequeno com moderação e garanta que as informações-chave sejam legíveis rapidamente.

![Uma ilustração que mostra texto na Dynamic Island que é pequeno e difícil de ler.](../../../images/live-activities/live-activities-text-incorrect-size@2x.png) ![Uma ilustração que mostra texto na Dynamic Island que é pequeno e difícil de ler. (escuro)](../../../images/live-activities/live-activities-text-incorrect-size~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-text-incorrect-size@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-text-incorrect-size~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/live-activities/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração que mostra texto na Dynamic Island com pesos mais fortes e tamanho legível.](../../../images/live-activities/live-activities-text-correct-size@2x.png) ![Uma ilustração que mostra texto na Dynamic Island com pesos mais fortes e tamanho legível. (escuro)](../../../images/live-activities/live-activities-text-correct-size~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-text-correct-size@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-text-correct-size~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/live-activities/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

### Criação de layouts de Live Activity

**Adapte-se a diferentes tamanhos de tela e apresentações.** As Live Activities são dimensionadas para se ajustar a várias telas de dispositivos. Crie layouts e recursos para vários dispositivos e fatores de escala, reconhecendo que o tamanho real na tela pode variar ou mudar. Garanta que tenham ótima aparência em todos os lugares usando os valores em [Especificações](https://developer.apple.com/design/human-interface-guidelines/live-activities#Specifications) como orientação e fornecendo conteúdo com tamanho apropriado.

**Ajuste o tamanho e o posicionamento dos elementos para usar o espaço com eficiência.** Crie um layout que use apenas o espaço de que precisa para exibir claramente seu conteúdo. Adapte o tamanho e o posicionamento dos elementos na sua Live Activity para que se encaixem bem.

**Use layouts familiares para views e layouts personalizados.** Modelos com margens padrão do sistema e tamanhos de texto recomendados estão disponíveis em [Apple Design Resources](https://developer.apple.com/design/resources/). Usá-los ajuda sua Live Activity a permanecer legível rapidamente e a se encaixar na linguagem visual do ambiente em que aparece; por exemplo, o Smart Stack no Apple Watch.

![Uma ilustração que mostra conteúdo na Dynamic Island com margens uniformes.](../../../images/live-activities/live-activities-margins@2x.png) ![Uma ilustração que mostra conteúdo na Dynamic Island com margens uniformes. (escuro)](../../../images/live-activities/live-activities-margins~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-margins@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-margins~dark@2x.png)*

**Use margens consistentes e posicionamento concêntrico.** Use margens uniformes e correspondentes entre formas arredondadas e as bordas da Live Activity, incluindo os cantos, para garantir um encaixe harmonioso. Isso evita que elementos invadam a forma arredondada da Live Activity e criem tensão visual. Por exemplo, ao posicionar um retângulo arredondado perto de um canto da sua Live Activity, faça o raio de canto dele corresponder ao raio do canto externo da Live Activity subtraindo a margem e usando um contêiner SwiftUI para aplicar o raio de canto correto. Para orientações para desenvolvedores, consulte [ContainerRelativeShape](https://developer.apple.com/documentation/swiftui/containerrelativeshape).

![Uma ilustração de uma Live Activity que desenha o conteúdo até a borda da Dynamic Island.](../../../images/live-activities/live-activities-rounded-shapes@2x.png) ![Uma ilustração de uma Live Activity que desenha o conteúdo até a borda da Dynamic Island. (escuro)](../../../images/live-activities/live-activities-rounded-shapes~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-rounded-shapes@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-rounded-shapes~dark@2x.png)*

Mantenha o conteúdo compacto e justo dentro de uma margem concêntrica à borda externa da Live Activity.

![Uma ilustração que mostra como uma Live Activity posiciona um ícone longe demais da borda da Dynamic Island.](../../../images/live-activities/live-activities-content-incorrect-position@2x.png) ![Uma ilustração que mostra como uma Live Activity posiciona um ícone longe demais da borda da Dynamic Island. (escuro)](../../../images/live-activities/live-activities-content-incorrect-position~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-content-incorrect-position@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-content-incorrect-position~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/live-activities/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração que mostra como uma Live Activity posiciona um ícone perto da borda da Dynamic Island sem invadir a forma arredondada da Dynamic Island.](../../../images/live-activities/live-activities-content-correct-position@2x.png) ![Uma ilustração que mostra como uma Live Activity posiciona um ícone perto da borda da Dynamic Island sem invadir a forma arredondada da Dynamic Island. (escuro)](../../../images/live-activities/live-activities-content-correct-position~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-content-correct-position@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-content-correct-position~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/live-activities/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Ao separar um bloco de conteúdo, coloque-o em uma forma de contêiner recuada ou use uma linha grossa.** Não desenhe o conteúdo até a borda da Dynamic Island.

![Uma ilustração que mostra como uma Live Activity desenha o conteúdo até a borda da Dynamic Island para separar o conteúdo.](../../../images/live-activities/live-activities-separating-content-incorrect@2x.png) ![Uma ilustração que mostra como uma Live Activity desenha o conteúdo até a borda da Dynamic Island para separar o conteúdo. (escuro)](../../../images/live-activities/live-activities-separating-content-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-separating-content-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-separating-content-incorrect~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/live-activities/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de uma Live Activity com conteúdo em uma forma arredondada e recuada para agrupá-lo.](../../../images/live-activities/live-activities-separating-content-pill@2x.png) ![Uma ilustração de uma Live Activity com conteúdo em uma forma arredondada e recuada para agrupá-lo. (escuro)](../../../images/live-activities/live-activities-separating-content-pill~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-separating-content-pill@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-separating-content-pill~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/live-activities/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

![Uma ilustração de uma Live Activity que usa uma linha para separar um bloco de conteúdo.](../../../images/live-activities/live-activities-separating-content-separator@2x.png) ![Uma ilustração de uma Live Activity que usa uma linha para separar um bloco de conteúdo. (escuro)](../../../images/live-activities/live-activities-separating-content-separator~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-separating-content-separator@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-separating-content-separator~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/live-activities/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

> **Dica:** Para alinhar conteúdo não arredondado aos cantos arredondados da view da Live Activity, pode ser útil desfocar o conteúdo não arredondado na sua ferramenta de desenho. Quando o conteúdo está desfocado, pode ser mais fácil encontrar o posicionamento que melhor se alinha ao perímetro externo da view.

![Uma ilustração que mostra uma Live Activity com texto desfocado longe demais da borda da Dynamic Island.](../../../images/live-activities/live-activities-blur-content-incorrect-position@2x.png) ![Uma ilustração que mostra uma Live Activity com texto desfocado longe demais da borda da Dynamic Island. (escuro)](../../../images/live-activities/live-activities-blur-content-incorrect-position~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-blur-content-incorrect-position@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-blur-content-incorrect-position~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/live-activities/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração que mostra uma Live Activity com texto desfocado perto da borda da Dynamic Island sem invadir a forma arredondada da Dynamic Island.](../../../images/live-activities/live-activities-blur-content-correct-position@2x.png) ![Uma ilustração que mostra uma Live Activity com texto desfocado perto da borda da Dynamic Island sem invadir a forma arredondada da Dynamic Island. (escuro)](../../../images/live-activities/live-activities-blur-content-correct-position~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-blur-content-correct-position@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-blur-content-correct-position~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/live-activities/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Altere dinamicamente a altura da sua Live Activity na Tela Bloqueada ou na apresentação expandida.** Quando há menos informações a mostrar, reduza a altura da Live Activity para usar apenas o espaço necessário ao conteúdo. Quando mais informações ficarem disponíveis, aumente a altura para exibir conteúdo adicional. Por exemplo, um app de transporte por aplicativo pode exibir uma Live Activity mais compacta, sem detalhes adicionais, enquanto localiza um motorista. A altura aumenta à medida que mais informações ficam disponíveis para exibir o horário estimado de embarque, os detalhes do motorista e assim por diante.

### Escolha de cores

**Considere com cuidado o uso de uma cor de fundo e uma opacidade personalizadas.** Você não pode personalizar as cores de fundo das apresentações compacta, mínima e expandida. No entanto, pode usar uma cor de fundo personalizada para a apresentação da Tela Bloqueada. Se você definir uma cor ou imagem de fundo personalizada para a apresentação da Tela Bloqueada, garanta contraste suficiente — especialmente para cores de tom em dispositivos com display Always-On de luminância reduzida.

**Use a cor para expressar o caráter e a identidade do seu app.** As Live Activities na Dynamic Island usam um fundo preto opaco. Considere usar cores vibrantes para texto e objetos a fim de transmitir a personalidade e a marca do seu app. Cores vibrantes tornam sua Live Activity reconhecível rapidamente, destacam-na de outras Live Activities e fazem com que ela pareça uma pequena parte do seu app, de fácil visualização. Além disso, cores vibrantes podem ajudar a reforçar a relação entre os elementos na própria Live Activity.

**Dê à linha-chave da sua Live Activity um tom que combine com o seu conteúdo.** Quando o fundo é escuro — por exemplo, no Dark Mode — uma linha-chave aparece ao redor da Dynamic Island para distingui-la de outros conteúdos. Escolha uma cor de linha-chave consistente com a cor dos demais elementos da sua Live Activity. Para orientações para desenvolvedores, consulte [Creating custom views for Live Activities](https://developer.apple.com/documentation/activitykit/creating-custom-views-for-live-activities).

### Adição de transições e animação de atualizações de conteúdo

Além das transições de extensão e contração, as Live Activities usam animações do sistema e personalizadas com duração máxima de dois segundos. Observe que o sistema não executa animações em displays Always-On com luminância reduzida.

**Use animações para reforçar as informações que você está comunicando e chamar a atenção para atualizações.** Além de mover a posição dos elementos, você pode animar a entrada e a saída de elementos com a transição padrão de substituição de conteúdo ou criar transições personalizadas usando escala, opacidade e movimento. Por exemplo, um app de esportes pode usar transições de conteúdo numérico para mudanças de placar ou fazer um cronômetro aparecer e desaparecer gradualmente quando chega a zero.

**Anime as mudanças de layout.** As atualizações de conteúdo podem exigir uma mudança no layout da sua Live Activity — por exemplo, quando ela se expande para preencher a tela no StandBy ou quando mais informações ficam disponíveis. Durante a transição para um novo layout, preserve o máximo possível do layout existente, animando os elementos existentes para suas novas posições em vez de removê-los e animá-los de volta.

**Tente evitar elementos sobrepostos.** Às vezes, é melhor animar a saída de certos elementos e depois animá-los novamente em uma nova posição para evitar colisões com outras partes da transição. Por exemplo, ao animar itens em listas, anime apenas o elemento que se move para uma nova posição e use transições de aparecer e desaparecer gradualmente para os outros itens da lista.

Para orientações para desenvolvedores, consulte [Animating data updates in widgets and Live Activities](https://developer.apple.com/documentation/widgetkit/animating-data-updates-in-widgets-and-live-activities).

### Oferta de interatividade

**Garanta que tocar na Live Activity abra o seu app no local certo.** Leve as pessoas diretamente aos detalhes e ações relacionados — não as faça navegar para encontrar as informações relevantes. Para orientações para desenvolvedores sobre views do SwiftUI que oferecem suporte a deep linking para telas específicas, consulte [Linking to specific app scenes from your widget or Live Activity](https://developer.apple.com/documentation/widgetkit/linking-to-specific-app-scenes-from-your-widget-or-live-activity).

**Concentre-se em ações simples e diretas.** Botões ou toggles ocupam espaço que poderia exibir informações úteis. Inclua elementos interativos apenas para funcionalidades essenciais diretamente relacionadas à sua Live Activity e que as pessoas ativam uma vez ou pausam e retomam temporariamente, como reprodução de música, treinos ou apps que acessam o microfone para gravar áudio ao vivo. Se você oferecer interatividade, prefira limitá-la a um único elemento para ajudar as pessoas a evitar tocar acidentalmente no controle errado.

**Considere permitir que as pessoas respondam a atualizações de eventos ou de progresso.** Se uma atualização da sua Live Activity é algo a que uma pessoa poderia responder, considere oferecer um botão ou toggle para que ela possa agir. Por exemplo, a Live Activity de um app de transporte por aplicativo poderia incluir um botão para entrar em contato com o motorista enquanto se espera a chegada da corrida.

### Início, atualização e encerramento de uma Live Activity

**Inicie as Live Activities em momentos apropriados e facilite que as pessoas as desativem no seu app.** As pessoas esperam que as Live Activities comecem e forneçam atualizações importantes para uma tarefa em andamento ou em momentos específicos, até mesmo automaticamente. Por exemplo, podem esperar que uma Live Activity comece após um pedido de comida, ao solicitar uma corrida ou quando começa a partida do time esportivo favorito. No entanto, Live Activities que aparecem inesperadamente podem surpreender ou até ser indesejadas. Considere oferecer controles que permitam às pessoas desativar uma Live Activity na view do app correspondente à atividade. Por exemplo, um app de esportes pode oferecer um botão que permite deixar de seguir uma partida ou time. Quando as pessoas não conseguem controlar facilmente a aparência das Live Activities a partir do seu app, podem optar por desativar completamente as Live Activities nos Ajustes.

**Ofereça um App Shortcut que inicie a sua Live Activity.** Os App Shortcuts expõem funcionalidades ao sistema, permitindo acesso em vários contextos. Por exemplo, crie um App Shortcut que permita às pessoas iniciar sua Live Activity usando o botão de Ação no iPhone. Para mais informações, consulte [App Shortcuts](https://developer.apple.com/design/human-interface-guidelines/app-shortcuts).

**Atualize uma Live Activity somente quando houver novo conteúdo disponível.** Se o conteúdo ou status subjacente permanecer o mesmo, mantenha a mesma exibição até que o conteúdo ou status subjacente mude.

**Alerte as pessoas apenas sobre atualizações essenciais que exijam a atenção delas.** Os alertas de Live Activity acendem a tela e, por padrão, tocam o som de notificação para alertar as pessoas sobre atualizações que elas não deveriam perder. Os alertas também mostram a apresentação expandida na Dynamic Island ou um banner em dispositivos que não oferecem suporte à Dynamic Island. Para garantir que suas Live Activities ofereçam o máximo valor, evite alertar as pessoas com muita frequência ou com atualizações que não sejam cruciais e não use notificações push junto com Live Activities para as mesmas atualizações.

**Deixe as pessoas acompanharem vários eventos com eficiência em uma única Live Activity.** Em vez de criar Live Activities separadas entre as quais as pessoas precisam alternar para acompanhar eventos diferentes, prefira uma única Live Activity que use um layout dinâmico e alterne entre os eventos. Por exemplo, um app de esportes poderia oferecer uma única Live Activity que percorre pontos marcados, substituições e faltas em várias partidas.

**Sempre encerre uma Live Activity imediatamente quando a tarefa ou o evento terminar e considere definir um horário de dispensa personalizado.** Quando uma Live Activity termina, o sistema a remove imediatamente da Dynamic Island e do CarPlay. Na Tela Bloqueada, na barra de menus do Mac e no Smart Stack do watchOS, ela permanece por até quatro horas. Dependendo da Live Activity, exibir um resumo pode ser relevante apenas por um breve período após o término. Considere escolher um horário de dispensa personalizado proporcional à duração da sua Live Activity. Na maioria dos casos, de 15 a 30 minutos é adequado. Por exemplo, um app de transporte por aplicativo poderia encerrar sua Live Activity quando uma corrida termina e mantê-la visível por 30 minutos para permitir que as pessoas vejam o resumo da corrida e deixem uma gorjeta. Para orientações para desenvolvedores, consulte [Displaying live data with Live Activities](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities).

## Apresentação

Sua Live Activity precisa oferecer suporte a todos os locais, dispositivos e suas aparências correspondentes. Como ela aparece em vários sistemas com dimensões diferentes, crie layouts de Live Activity que ofereçam o melhor suporte a cada local em que aparecem.

**Comece com o design para iPhone e depois refine-o para outros contextos.** Crie primeiro designs padrão para cada apresentação. Depois, dependendo da funcionalidade que sua Live Activity oferece, projete layouts personalizados adicionais para contextos específicos, como o iPhone no StandBy, o CarPlay ou o Apple Watch. Para mais informações sobre layouts personalizados, consulte [StandBy](https://developer.apple.com/design/human-interface-guidelines/live-activities#StandBy), [CarPlay](https://developer.apple.com/design/human-interface-guidelines/live-activities#CarPlay) e [watchOS](https://developer.apple.com/design/human-interface-guidelines/live-activities#watchOS).

### Apresentação compacta

**Concentre-se nas informações mais importantes.** Use a apresentação compacta para mostrar informações dinâmicas e atualizadas que sejam essenciais para a Live Activity e fáceis de entender. Por exemplo, um app de esportes poderia exibir os logotipos de duas equipes e o placar.

**Garanta informações e design unificados nas apresentações compactas na Dynamic Island.** Embora a câmera TrueDepth separe os elementos inicial e final, projete-os para serem lidos como uma única informação e use cor e tipografia consistentes para ajudar a criar uma conexão entre os dois elementos.

**Mantenha o conteúdo o mais estreito possível e garanta que fique justo contra a câmera TrueDepth.** Tente não obscurecer informações importantes na barra de status e não adicione preenchimento entre o conteúdo e a câmera TrueDepth. Mantenha um layout equilibrado, com views de tamanho semelhante para os elementos inicial e final; por exemplo, use unidades abreviadas ou dados menos precisos para manter largura e equilíbrio apropriados.

![Uma ilustração que mostra uma apresentação compacta que parece desequilibrada e larga demais porque usa preenchimento ao redor da câmera TrueDepth.](../../../images/live-activities/live-activities-unbalanced-content@2x.png) ![Uma ilustração que mostra uma apresentação compacta que parece desequilibrada e larga demais porque usa preenchimento ao redor da câmera TrueDepth. (escuro)](../../../images/live-activities/live-activities-unbalanced-content~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-unbalanced-content@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-unbalanced-content~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/live-activities/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração que mostra uma apresentação compacta justa ao redor da câmera TrueDepth.](../../../images/live-activities/live-activities-balanced-content@2x.png) ![Uma ilustração que mostra uma apresentação compacta justa ao redor da câmera TrueDepth. (escuro)](../../../images/live-activities/live-activities-balanced-content~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-balanced-content@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-balanced-content~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/live-activities/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Vincule a conteúdo relevante do app.** Quando as pessoas tocam em uma Live Activity compacta, abra o seu app diretamente nos detalhes relacionados. Garanta que os elementos inicial e final levem à mesma tela.

### Apresentação mínima

**Garanta que sua Live Activity seja reconhecível na apresentação mínima.** Se possível, exiba informações atualizadas em vez de apenas um logotipo, garantindo ao mesmo tempo que as pessoas possam reconhecer rapidamente o seu app. Por exemplo, a apresentação mínima da Live Activity do app Relógio exibe o tempo restante em vez de um ícone estático.

### Apresentação expandida

**Mantenha o posicionamento relativo dos elementos para criar um layout coerente entre as apresentações.** A apresentação expandida é uma versão ampliada da apresentação compacta ou mínima. Garanta que as informações e os layouts se expandam de forma previsível quando a Live Activity se expande.

**Envolva o conteúdo de forma justa ao redor da câmera TrueDepth.** Disponha o conteúdo perto da câmera TrueDepth e tente evitar deixar espaço demais ao redor dela, para usar o espaço com mais eficiência e ajudar a diminuir a presença da câmera.

![Uma ilustração que mostra uma apresentação expandida de uma Live Activity que deixa espaço vazio ao lado da câmera TrueDepth.](../../../images/live-activities/live-activities-layout-incorrect@2x.png) ![Uma ilustração que mostra uma apresentação expandida de uma Live Activity que deixa espaço vazio ao lado da câmera TrueDepth. (escuro)](../../../images/live-activities/live-activities-layout-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-layout-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-layout-incorrect~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/live-activities/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração que mostra uma apresentação expandida de uma Live Activity que usa o espaço ao lado da câmera TrueDepth.](../../../images/live-activities/live-activities-layout-correct@2x.png) ![Uma ilustração que mostra uma apresentação expandida de uma Live Activity que usa o espaço ao lado da câmera TrueDepth. (escuro)](../../../images/live-activities/live-activities-layout-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-layout-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-layout-correct~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/live-activities/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

### Apresentação da Tela Bloqueada

**Não replique layouts de notificação.** Crie um layout exclusivo, específico para as informações que aparecem na Live Activity.

**Escolha cores que funcionem bem em uma Tela Bloqueada personalizada.** As pessoas personalizam a Tela Bloqueada com papéis de parede, cores de tom personalizadas e widgets. Para fazer uma Live Activity se adequar à estética de uma Tela Bloqueada personalizada sem perder a legibilidade, use com moderação cores de fundo ou de tom e opacidade personalizadas.

**Garanta que seu design, seus recursos e suas cores tenham ótima aparência e ofereçam contraste suficiente no Dark Mode e em um display Always-On.** Por padrão, uma Live Activity na Tela Bloqueada usa uma cor de fundo clara na aparência clara e uma cor de fundo escura na aparência escura. Se você usar uma cor de fundo personalizada, escolha uma cor que funcione bem nos dois modos ou uma cor diferente para cada aparência. Verifique suas escolhas em um dispositivo com display Always-On de luminância reduzida, porque o sistema adapta as cores conforme necessário nessa aparência. Para orientações, consulte [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode) e [Always On](https://developer.apple.com/design/human-interface-guidelines/always-on); para orientações para desenvolvedores, consulte [About asset catalogs](https://help.apple.com/xcode/mac/current/#/dev10510b1f7).

**Verifique a cor gerada do botão de dispensar.** O sistema gera automaticamente um botão de dispensar correspondente com base nas cores de fundo e de primeiro plano da sua Live Activity. Verifique se a cor gerada corresponde ao seu design e ajuste-a, se necessário, usando [activitySystemActionForegroundColor(_:)](https://developer.apple.com/documentation/swiftui/view/activitysystemactionforegroundcolor(_:)).

**Use margens padrão para alinhar seu design com as notificações.** A margem de layout padrão para Live Activities na Tela Bloqueada é de 14 pontos. Embora margens mais estreitas possam ser apropriadas para elementos como gráficos ou botões, evite sobrecarregar as bordas e criar uma aparência desorganizada. Para orientações para desenvolvedores, consulte [padding(_:_:)](https://developer.apple.com/documentation/swiftui/view/padding(_:_:)).

### Apresentação no StandBy

**Atualize seu layout para o StandBy.** Garanta que os recursos tenham ótima aparência na escala maior e considere criar um layout personalizado que aproveite o espaço extra. Para orientações para desenvolvedores, consulte [Creating custom views for Live Activities](https://developer.apple.com/documentation/activitykit/creating-custom-views-for-live-activities).

**Considere usar a cor de fundo padrão no StandBy.** A cor de fundo padrão mescla perfeitamente sua Live Activity com a moldura do dispositivo, alcança uma aparência mais suave que se integra ao ambiente da pessoa e permite que o sistema amplie um pouco mais a Live Activity porque não precisa considerar as margens ao redor da câmera TrueDepth.

**Use margens padrão e evite estender elementos gráficos até a borda da tela.** Sem margens padrão, o conteúdo é cortado quando a Live Activity se estende, fazendo-a parecer quebrada.

**Verifique seu design no Modo Noturno.** No Modo Noturno, o sistema aplica um tom vermelho à sua Live Activity. Verifique se o design da sua Live Activity usa cores que ofereçam contraste suficiente no Modo Noturno.

![Uma Live Activity, ampliada para preencher a tela do iPhone no StandBy.](../../../images/live-activities/live-activity-standby-night-mode@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activity-standby-night-mode@2x.png)*

## CarPlay

No CarPlay, o sistema combina automaticamente os elementos inicial e final da apresentação compacta em um único layout que aparece no Painel do CarPlay.

O design da sua Live Activity se aplica tanto ao CarPlay quanto ao Apple Watch, portanto projete para os dois contextos. Embora as Live Activities no Apple Watch possam ser interativas, o sistema desativa os elementos interativos no CarPlay. Para mais informações, consulte [watchOS](https://developer.apple.com/design/human-interface-guidelines/live-activities#watchOS) abaixo. Para orientações para desenvolvedores, consulte [Creating custom views for Live Activities](https://developer.apple.com/documentation/activitykit/creating-custom-views-for-live-activities).

**Considere criar um layout personalizado se a sua Live Activity se beneficiar de texto maior ou de informações adicionais.** Em vez de usar a aparência padrão no CarPlay, declare suporte a uma família de atividade complementar [ActivityFamily.small](https://developer.apple.com/documentation/widgetkit/activityfamily/small).

**Considere com cuidado incluir botões ou toggles no seu layout personalizado.** No CarPlay, o sistema desativa os elementos interativos da sua Live Activity. Se for provável que as pessoas iniciem ou acompanhem sua Live Activity enquanto dirigem, prefira exibir conteúdo oportuno em vez de botões e toggles.

## Considerações por plataforma

*Sem considerações adicionais para iOS ou iPadOS. Não compatível com tvOS ou visionOS.*

### macOS

As Live Activities ativas aparecem automaticamente na barra de menus de um Mac pareado usando as apresentações compacta, mínima e expandida. Clicar na Live Activity inicia o Espelhamento do iPhone para exibir o seu app.

### watchOS

Quando uma Live Activity começa no iPhone, ela aparece em um Apple Watch pareado na parte superior do Smart Stack. Por padrão, a view exibida no Smart Stack combina os elementos inicial e final da apresentação compacta da Live Activity no iPhone.

Se você oferece um app watchOS e alguém toca na Live Activity no Smart Stack, o app watchOS é aberto. Sem um app watchOS, tocar abre uma view em tela inteira com um botão para abrir o seu app no iPhone pareado.

**Considere criar um layout personalizado para o watchOS.** Embora o sistema forneça automaticamente uma view padrão, um layout personalizado projetado para o Apple Watch pode mostrar mais informações e adicionar funcionalidades interativas, como um botão ou toggle.

**Considere com cuidado incluir botões ou toggles no seu layout personalizado.** O layout personalizado do watchOS também se aplica à sua Live Activity no CarPlay, onde o sistema desativa os elementos interativos. Se for provável que as pessoas iniciem ou acompanhem sua Live Activity enquanto dirigem, não inclua botões ou toggles no seu layout personalizado do watchOS. Para orientações para desenvolvedores, consulte [Creating custom views for Live Activities](https://developer.apple.com/documentation/activitykit/creating-custom-views-for-live-activities).

![Uma ilustração que mostra a apresentação compacta de uma Live Activity na Dynamic Island no iPhone.](../../../images/live-activities/live-activities-ios-dynamic-island-default@2x.png) ![Uma ilustração que mostra a apresentação compacta de uma Live Activity na Dynamic Island no iPhone. (escuro)](../../../images/live-activities/live-activities-ios-dynamic-island-default~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-ios-dynamic-island-default@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activities-ios-dynamic-island-default~dark@2x.png)*

![Uma ilustração que mostra a apresentação padrão gerada automaticamente de uma Live Activity em uma view do Smart Stack, com os elementos inicial e final da view compacta do iPhone espaçados nos cantos inferiores.](../../../images/live-activities/live-activity-watch-default-implementation@2x.png) ![Uma ilustração que mostra a apresentação padrão gerada automaticamente de uma Live Activity em uma view do Smart Stack, com os elementos inicial e final da view compacta do iPhone espaçados nos cantos inferiores. (escuro)](../../../images/live-activities/live-activity-watch-default-implementation~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activity-watch-default-implementation@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activity-watch-default-implementation~dark@2x.png)*

![Uma ilustração que mostra uma apresentação personalizada de uma Live Activity em uma view do Smart Stack, com um design equilibrado que mostra um cronômetro regressivo gráfico equilibrado com texto explicativo.](../../../images/live-activities/live-activity-watch-custom-implementation@2x.png) ![Uma ilustração que mostra uma apresentação personalizada de uma Live Activity em uma view do Smart Stack, com um design equilibrado que mostra um cronômetro regressivo gráfico equilibrado com texto explicativo. (escuro)](../../../images/live-activities/live-activity-watch-custom-implementation~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activity-watch-custom-implementation@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/live-activity-watch-custom-implementation~dark@2x.png)*

**Concentre-se nas informações essenciais e nas atualizações significativas.** Use o espaço no Smart Stack da forma mais eficiente possível e pense nas informações mais úteis que uma Live Activity pode transmitir:

- Progresso, como o horário estimado de chegada de uma entrega
- Elementos interativos, como controles de cronômetro ou temporizador
- Atualizações significativas, como mudanças de placar esportivo

## Especificações

Ao projetar suas Live Activities, use os valores a seguir como orientação.

### Dimensões do CarPlay

O sistema pode dimensionar sua Live Activity para melhor se ajustar ao tamanho e à resolução da tela de um veículo. Use os valores listados para verificar seu design:

| Tamanho da Live Activity (pt) |
|---|
| 240x78 |
| 240x100 |
| 170x78 |

Teste seus designs com o simulador do CarPlay e as seguintes configurações de Smart Display Zoom — disponíveis em Ajustes > Tela no CarPlay:

| Configuração | Resolução (pt) |
|---|---|
| Widescreen | 1920x720 |
| Retrato | 900x1200 |
| Padrão | 800x480 |

### Dimensões do iOS

Todos os valores listados nas tabelas abaixo estão em pontos.

| Dimensões da tela (retrato) | Compacta inicial | Compacta final | Mínima (largura dada como intervalo) | Expandida (altura dada como intervalo) | Tela Bloqueada (altura dada como intervalo) |
|---|---|---|---|---|---|
| 430x932 | 62.33x36.67 | 62.33x36.67 | 36.67–45x36.67 | 408x84–160 | 408x84–160 |
| 393x852 | 52.33x36.67 | 52.33x36.67 | 36.67–45x36.67 | 371x84–160 | 371x84–160 |

A Dynamic Island usa um raio de canto de 44 pontos, e sua forma de cantos arredondados corresponde à câmera TrueDepth.

| Tipo de apresentação | Dispositivo | Largura da Dynamic Island (pt) |
|---|---|---|
| Compacta ou mínima | iPhone 17 Pro Max | 250 |
|  | iPhone 17 Pro | 230 |
|  | iPhone Air | 250 |
|  | iPhone 17 | 230 |
|  | iPhone 16 Pro Max | 250 |
|  | iPhone 16 Pro | 230 |
|  | iPhone 16 Plus | 250 |
|  | iPhone 16 | 230 |
|  | iPhone 15 Pro Max | 250 |
|  | iPhone 15 Pro | 230 |
|  | iPhone 15 Plus | 250 |
|  | iPhone 15 | 230 |
|  | iPhone 14 Pro Max | 250 |
|  | iPhone 14 Pro | 230 |
| Expandida | iPhone 17 Pro Max | 408 |
|  | iPhone 17 Pro | 371 |
|  | iPhone Air | 408 |
|  | iPhone 17 | 371 |
|  | iPhone 16 Pro Max | 408 |
|  | iPhone 16 Pro | 371 |
|  | iPhone 16 Plus | 408 |
|  | iPhone 16 | 371 |
|  | iPhone 15 Pro Max | 408 |
|  | iPhone 15 Pro | 371 |
|  | iPhone 15 Plus | 408 |
|  | iPhone 15 | 371 |
|  | iPhone 14 Pro Max | 408 |
|  | iPhone 14 Pro | 371 |

### Dimensões do iPadOS

Todos os valores listados na tabela abaixo estão em pontos.

| Dimensões da tela (retrato) | Tela Bloqueada (altura dada como intervalo) |
|---|---|
| 1366x1024 | 500x84–160 |
| 1194x834 | 425x84–160 |
| 1012x834 | 425x84–160 |
| 1080x810 | 425x84–160 |
| 1024x768 | 425x84–160 |

### Dimensões do macOS

Use as dimensões do iOS fornecidas.

### Dimensões do watchOS

As Live Activities no Smart Stack usam as mesmas dimensões dos widgets do watchOS.

| Tamanho do Apple Watch | Tamanho de uma Live Activity no Smart Stack (pt) |
|---|---|
| 40 mm | 152x69.5 |
| 41 mm | 165x72.5 |
| 44 mm | 173x76.5 |
| 45 mm | 184x80.5 |
| 49 mm | 191x81.5 |

## Recursos

#### Documentação para desenvolvedores

[ActivityKit](https://developer.apple.com/documentation/activitykit)

[SwiftUI](https://developer.apple.com/documentation/swiftui)

[WidgetKit](https://developer.apple.com/documentation/widgetkit)

[Developing a WidgetKit strategy](https://developer.apple.com/documentation/widgetkit/developing-a-widgetkit-strategy) — WidgetKit

#### Vídeos

- [Live Activities essentials](https://developer.apple.com/videos/play/wwdc2026/223)
- [Turbocharge your app for CarPlay](https://developer.apple.com/videos/play/wwdc2025/216)
- [What’s new in widgets](https://developer.apple.com/videos/play/wwdc2025/278)

## Histórico de alterações

| Data | Alterações |
|---|---|
| December 16, 2025 | Atualizadas as orientações para todas as plataformas e adicionadas orientações para macOS e CarPlay. |
| June 10, 2024 | Adicionadas orientações para Live Activities no watchOS. |
| October 24, 2023 | Orientações ampliadas e atualizadas e nova arte adicionada. |
| June 5, 2023 | Orientações atualizadas para incluir recursos do iOS 17 e do iPadOS 17. |
| November 3, 2022 | Arte e especificações atualizadas. |
| September 23, 2022 | Nova página. |
