# Visualizações de rolagem (Scroll views)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/scroll-views
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Uma visualização de rolagem permite que as pessoas vejam conteúdo maior que os limites da visualização, movendo o conteúdo vertical ou horizontalmente.*

![Uma representação estilizada de uma visualização de imagem rolável. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores.](../../../images/scroll-views/components-scroll-view-intro@2x.png) ![Uma representação estilizada de uma visualização de imagem rolável. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/scroll-views/components-scroll-view-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-scroll-view-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-scroll-view-intro~dark@2x.png)*

A própria visualização de rolagem não tem aparência, mas pode exibir um *indicador de rolagem* translúcido que normalmente aparece depois que as pessoas começam a rolar o conteúdo da visualização. Embora a aparência e o comportamento dos indicadores de rolagem possam variar por plataforma, todos os indicadores dão feedback visual sobre a ação de rolagem. Por exemplo, no iOS, iPadOS, macOS, visionOS e watchOS, o indicador mostra se o conteúdo atualmente visível está perto do início, do meio ou do fim da visualização.

## Boas práticas

**Ofereça suporte aos gestos de rolagem e aos atalhos de teclado padrão.** As pessoas estão acostumadas ao comportamento de rolagem em todo o sistema e esperam que ele funcione em todo lugar. Se você criar uma rolagem personalizada para uma visualização, garanta que os indicadores de rolagem usem o comportamento elástico que as pessoas esperam.

**Deixe evidente quando o conteúdo é rolável.** Como os indicadores de rolagem nem sempre estão visíveis, pode ser útil deixar óbvio quando o conteúdo se estende além da visualização. Por exemplo, exibir parte do conteúdo na borda de uma visualização indica que há mais conteúdo naquela direção. Embora a maioria das pessoas tente imediatamente rolar uma visualização para descobrir se há conteúdo adicional disponível, é uma gentileza chamar a atenção delas para isso.

**Evite colocar uma visualização de rolagem dentro de outra visualização de rolagem com a mesma orientação.** Aninhar visualizações de rolagem com a mesma orientação pode criar uma interface imprevisível e difícil de controlar. No entanto, não há problema em colocar uma visualização de rolagem horizontal dentro de uma visualização de rolagem vertical (ou vice-versa).

**Considere oferecer suporte à rolagem página por página se isso fizer sentido para o seu conteúdo.** Em algumas situações, as pessoas preferem rolar uma quantidade fixa de conteúdo por interação em vez de rolar continuamente. Na maioria das plataformas, você pode definir o tamanho dessa *página* — normalmente a altura ou largura atual da visualização — e definir uma interação que role uma página por vez. Para ajudar a manter o contexto durante a rolagem página por página, você pode definir uma unidade de sobreposição, como uma linha de texto, uma fileira de glifos ou parte de uma imagem, e subtrair essa unidade do tamanho da página. Para orientações para desenvolvedores, consulte [PagingScrollTargetBehavior](https://developer.apple.com/documentation/swiftui/pagingscrolltargetbehavior).

**Em alguns casos, role automaticamente para ajudar as pessoas a se localizarem.** Embora as pessoas iniciem quase toda rolagem, a rolagem automática pode ser útil quando o conteúdo relevante deixa de estar visível, como quando:

- Seu app executa uma operação que seleciona conteúdo ou coloca o ponto de inserção em uma área que está oculta no momento. Por exemplo, quando seu app localiza um texto que as pessoas estão procurando, role o conteúdo para trazer a nova seleção à vista.
- As pessoas começam a inserir informações em um local que não está visível no momento. Por exemplo, se o ponto de inserção está em uma página e as pessoas navegam para outra página, role de volta ao ponto de inserção assim que elas começarem a digitar texto.
- O ponteiro ultrapassa a borda da visualização enquanto as pessoas fazem uma seleção. Nesse caso, siga o ponteiro rolando na direção em que ele se move.
- As pessoas selecionam algo e rolam para um novo local antes de agir sobre a seleção. Nesse caso, role até a seleção ficar à vista antes de executar a operação.

Em todos os casos, role o conteúdo automaticamente apenas o necessário para ajudar as pessoas a manter o contexto. Por exemplo, se parte de uma seleção estiver visível, você não precisa rolar a seleção inteira para a vista.

**Se você oferece suporte a zoom, defina valores máximo e mínimo de escala apropriados.** Por exemplo, dar zoom em um texto até que um único caractere preencha a tela não faz sentido na maioria das situações.

## Efeitos de borda de rolagem

No iOS, iPadOS e macOS, um *efeito de borda de rolagem* (scroll edge effect) proporciona uma separação visual entre certos elementos da interface, como [barras de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars), e a área de conteúdo rolável atrás deles. Se você usa barras personalizadas, talvez queira adicionar esse efeito manualmente se a camada superior da sua interface precisar de clareza extra, ou ajustar seu estilo de automático para o estilo rígido ou suave.

![Uma captura de tela da metade superior de um app para iPhone, com uma fotografia de uma palmeira como fundo e uma barra de ferramentas superior com um botão Voltar, um rótulo de título e um botão Adicionar. A transição entre a barra de ferramentas e o fundo usa um efeito de borda de rolagem rígido, que aplica um desfoque mais opaco com uma borda definida na parte inferior da barra.](../../../images/scroll-views/scroll-views-scroll-edge-effect-hard@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/scroll-views-scroll-edge-effect-hard@2x.png)*

![Uma captura de tela da metade superior de um app para iPhone, com uma fotografia de uma palmeira como fundo e uma barra de ferramentas superior com um botão Voltar, um rótulo de título e um botão Adicionar. A transição entre a barra de ferramentas e o fundo usa um efeito de borda de rolagem suave, que aplica um desfoque variável que proporciona um esmaecimento mais suave em direção à parte inferior da barra.](../../../images/scroll-views/scroll-views-scroll-edge-effect-soft@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/scroll-views-scroll-edge-effect-soft@2x.png)*

**Prefira o estilo automático de efeito de borda de rolagem.** Sempre que possível, use o estilo [automático](https://developer.apple.com/documentation/swiftui/scrolledgeeffectstyle/automatic) padrão do efeito de borda de rolagem. Esse estilo proporciona uma separação visual mais opaca para barras de ferramentas superiores que contêm um grande número de controles, textos que aparecem fora de controles [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass) e cabeçalhos de tabela fixados. Se você usar o estilo suave do efeito de borda de rolagem, teste a fundo a sua interface para garantir que os controles mantenham a legibilidade em diversos contextos.

**Use um efeito de borda de rolagem apenas quando uma visualização de rolagem estiver atrás de elementos flutuantes da interface.** Os efeitos de borda de rolagem não são decorativos. Eles não bloqueiam nem escurecem como as sobreposições; existem para garantir que os controles permaneçam visualmente distintos.

**Aplique um efeito de borda de rolagem por visualização.** Em layouts de visualização dividida no iPad e no Mac, cada painel pode ter seu próprio efeito de borda de rolagem; nesse caso, mantenha-os consistentes em altura para preservar o alinhamento.

Para orientações para desenvolvedores, consulte [ScrollEdgeEffectStyle](https://developer.apple.com/documentation/swiftui/scrolledgeeffectstyle), [UIScrollEdgeEffect.Style](https://developer.apple.com/documentation/uikit/uiscrolledgeeffect/style-swift.class) e [NSScrollEdgeEffectStyle](https://developer.apple.com/documentation/appkit/nsscrolledgeeffectstyle).

## Considerações por plataforma

### iOS, iPadOS

**Considere mostrar um controle de página quando uma visualização de rolagem estiver no modo página por página.** Os [controles de página](https://developer.apple.com/design/human-interface-guidelines/page-controls) mostram quantas páginas, telas ou outros blocos de conteúdo estão disponíveis e indicam qual está visível no momento. Por exemplo, o Clima usa um controle de página para indicar a movimentação entre os locais salvos pelas pessoas. Se você mostrar um controle de página com uma visualização de rolagem, não mostre o indicador de rolagem no mesmo eixo, para evitar confundir as pessoas com controles redundantes.

### macOS

No macOS, um *indicador de rolagem* é comumente chamado de *barra de rolagem*.

**Se necessário, use barras de rolagem pequenas ou mini em um painel.** Quando o espaço é limitado, você pode usar barras de rolagem menores em painéis que precisam coexistir com outras janelas. Certifique-se de usar o mesmo tamanho para todos os controles em um painel desse tipo.

### tvOS

As visualizações no tvOS podem rolar, mas não são tratadas como objetos distintos com indicadores de rolagem. Em vez disso, quando o conteúdo excede o tamanho da tela, o sistema rola automaticamente a interface para manter os itens com foco visíveis.

### visionOS

No visionOS, o indicador de rolagem tem um tamanho pequeno e fixo para ajudar a comunicar que as pessoas podem rolar com eficiência sem fazer movimentos grandes. Para facilitar sua localização, o indicador de rolagem sempre aparece em um local previsível em relação à janela: centralizado verticalmente na borda final durante a rolagem vertical e centralizado horizontalmente na borda inferior da janela durante a rolagem horizontal.

Quando as pessoas começam a deslizar o conteúdo na direção em que querem que ele role, o indicador de rolagem aparece na borda da janela, reforçando visualmente o efeito do gesto e dando feedback sobre a posição atual e o comprimento total do conteúdo. Quando as pessoas olham para o indicador de rolagem e começam um gesto de arrastar, o indicador ativa uma experiência de jog bar que permite manipular a velocidade da rolagem em vez da posição do conteúdo. Nessa experiência, o indicador de rolagem revela marcas de graduação que aceleram ou desaceleram conforme as pessoas fazem pequenos ajustes no gesto, dando um feedback visual que ajuda a controlar com precisão a aceleração da rolagem.

![Uma gravação mostrando um indicador de rolagem em uma página longa no app Notas. À medida que o espectador arrasta a página rapidamente, o indicador mostra marcas de graduação que correspondem à velocidade da rolagem.](../../../images/scroll-views/visionos-scroll-indicator-jog-bar@2x.png)

*Vídeo: Uma gravação mostrando um indicador de rolagem em uma página longa no app Notas. À medida que o espectador arrasta a página rapidamente, o indicador mostra marcas de graduação que correspondem à velocidade da rolagem.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-scroll-indicator-jog-bar.mp4)

**Se necessário, leve em conta o tamanho do indicador de rolagem.** Embora o tamanho geral do indicador seja pequeno, ele é um pouco mais espesso que o mesmo componente no iOS. Se o seu conteúdo usa margens estreitas, considere aumentá-las para evitar que o indicador de rolagem se sobreponha ao conteúdo.

#### Olhar para rolar (Look to Scroll)

Em visualizações que oferecem suporte a Look to Scroll, as pessoas podem rolar usando apenas os olhos. A rolagem começa quando as pessoas olham perto do limite da visualização de rolagem — ao longo da parte superior e inferior em visualizações de rolagem verticais, ou ao longo das laterais em visualizações de rolagem horizontais. Por exemplo, uma pessoa pode olhar para a borda inferior de uma janela do Safari para rolar a página para baixo ou olhar para um álbum na borda final do app Música para rolá-lo horizontalmente em direção ao centro da página. O Look to Scroll funciona em conjunto com o comportamento existente, de modo que a pessoa pode escolher se usa um gesto ou os olhos para rolar. Para orientações para desenvolvedores, consulte [look](https://developer.apple.com/documentation/swiftui/scrollinputkind/look).

**Ofereça suporte ao Look to Scroll em visualizações de leitura ou navegação.** Como o Look to Scroll não funciona por padrão, você precisa adicionar suporte a ele em cada visualização de rolagem individual. Se o seu app contém visualizações de leitura ou navegação, adicione suporte ao Look to Scroll para oferecer uma experiência confortável e sem o uso das mãos. Para orientações para desenvolvedores, consulte [ScrollInputKind](https://developer.apple.com/documentation/swiftui/scrollinputkind).

**Evite usar o Look to Scroll para conteúdo secundário.** Em geral, ofereça suporte aos gestos padrão — mas não ao Look to Scroll — em visualizações que contêm controles de interface ou informações densas que exigem rolagem rápida e precisa. Por exemplo, o app Notas oferece Look to Scroll na visualização principal para permitir que as pessoas leiam facilmente o conteúdo, mas não oferece suporte a ele na lista de notas.

**Mantenha a consistência entre os conteúdos.** Se você oferece suporte ao Look to Scroll em uma visualização do seu app, garanta que ele seja aceito em todas as visualizações semelhantes. Por exemplo, se você oferece várias visualizações de coleção de vídeos ao longo do app, ofereça suporte ao Look to Scroll em cada uma delas para que as pessoas saibam o que esperar.

**Defina áreas de rolagem claras dentro do seu app.** Em visualizações que oferecem suporte ao Look to Scroll, prefira fazer a visualização ocupar toda a largura ou toda a altura da janela. Isso dá às pessoas bastante espaço para rolar e proporciona bordas claras. Se você recuar uma visualização de rolagem em relação a uma janela, como no app Notas, forneça limites claros para que as pessoas saibam para onde olhar.

**Se o seu app usa efeitos de rolagem ou animações personalizados, remova-os antes de oferecer suporte ao Look to Scroll.** Efeitos personalizados que usam a posição de rolagem para alterar o conteúdo, como efeitos de paralaxe e animações, podem fazer o Look to Scroll se comportar de maneira inesperada.

### watchOS

**Prefira conteúdo com rolagem vertical.** As pessoas estão acostumadas a usar a Digital Crown para navegar até os apps e dentro deles no Apple Watch. Se o seu app contém uma única lista ou visualização de conteúdo, girar a Digital Crown rola verticalmente quando o conteúdo do app é mais alto que a altura do visor.

**Use visualizações em abas para oferecer rolagem página por página.** O watchOS exibe as visualizações em abas como páginas. Se você colocar visualizações em abas em uma pilha vertical, as pessoas podem girar a Digital Crown para se mover verticalmente por páginas de conteúdo em tela inteira. Nesse cenário, o sistema exibe um indicador de página ao lado da Digital Crown que mostra às pessoas onde elas estão no conteúdo, tanto dentro da página atual quanto dentro de um conjunto de páginas. Para orientações, consulte [Visualizações em abas](https://developer.apple.com/design/human-interface-guidelines/tab-views).

**Ao exibir conteúdo paginado, considere limitar o conteúdo de cada página à altura de uma única tela.** Adotar essa restrição esclarece a finalidade de cada página, ajudando você a criar um design mais fácil de entender rapidamente. No entanto, se o seu app tiver páginas longas, as pessoas ainda poderão usar a Digital Crown tanto para navegar entre páginas mais curtas quanto para rolar o conteúdo de uma página mais longa, porque o indicador de página se expande em um indicador de rolagem quando necessário. Use páginas de altura variável com critério e coloque-as depois das páginas de altura fixa sempre que possível.

## Recursos

#### Relacionados

[Controles de página](https://developer.apple.com/design/human-interface-guidelines/page-controls)

[Gestos](https://developer.apple.com/design/human-interface-guidelines/gestures)

[Dispositivos apontadores](https://developer.apple.com/design/human-interface-guidelines/pointing-devices)

#### Documentação para desenvolvedores

[ScrollView](https://developer.apple.com/documentation/swiftui/scrollview) — SwiftUI

[UIScrollView](https://developer.apple.com/documentation/uikit/uiscrollview) — UIKit

[NSScrollView](https://developer.apple.com/documentation/appkit/nsscrollview) — AppKit

[WKPageOrientation](https://developer.apple.com/documentation/watchkit/wkpageorientation) — WatchKit

[look](https://developer.apple.com/documentation/swiftui/scrollinputkind/look) — SwiftUI

## Histórico de alterações

| Data | Alterações |
|---|---|
| 8 de junho de 2026 | Orientações atualizadas para efeitos de borda de rolagem. |
| 24 de março de 2026 | Adicionadas orientações para Look to Scroll no visionOS. |
| 28 de julho de 2025 | Adicionadas orientações para efeitos de borda de rolagem. |
| 2 de fevereiro de 2024 | Adicionada ilustração mostrando o comportamento do indicador de rolagem do visionOS. |
| 5 de dezembro de 2023 | Descrito o indicador de rolagem do visionOS e adicionadas orientações para integrá-lo ao layout da janela. |
| 5 de junho de 2023 | Orientações atualizadas para o uso de visualizações de rolagem no watchOS. |
