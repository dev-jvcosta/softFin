# Lockups

> Fonte: https://developer.apple.com/design/human-interface-guidelines/lockups
>
> Plataformas: tvos

*Lockups combinam várias visualizações separadas em uma única unidade interativa.*

![Uma representação estilizada de um ícone de pessoa acima de uma linha de texto de título e uma linha de texto de rodapé. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/lockups/components-lockups-intro@2x.png) ![Uma representação estilizada de um ícone de pessoa acima de uma linha de texto de título e uma linha de texto de rodapé. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/lockups/components-lockups-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-lockups-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-lockups-intro~dark@2x.png)*

Cada lockup consiste em uma visualização de conteúdo, um cabeçalho e um rodapé. Os cabeçalhos aparecem acima do conteúdo principal de um lockup, e os rodapés aparecem abaixo dele. Todas as três visualizações se expandem e se contraem juntas quando o lockup recebe o foco.

De acordo com as necessidades do seu app, você pode combinar quatro tipos de lockup: cards, botões de legenda, monogramas e pôsteres.

## Boas práticas

**Deixe espaço adequado entre os lockups.** Um lockup em foco aumenta de tamanho, então deixe espaço suficiente entre os lockups para evitar sobreposição ou o deslocamento de outros lockups. Para orientações, consulte [Layout](https://developer.apple.com/design/human-interface-guidelines/layout).

![Uma ilustração que mostra três linhas de cinco lockups igualmente espaçados. Em cada linha, o lockup do meio está em foco e é um pouco maior que os demais.](../../../images/lockups/lockups-generic@2x.png) ![Uma ilustração que mostra três linhas de cinco lockups igualmente espaçados. Em cada linha, o lockup do meio está em foco e é um pouco maior que os demais. (escuro)](../../../images/lockups/lockups-generic~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/lockups-generic@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/lockups-generic~dark@2x.png)*

**Use tamanhos de lockup consistentes dentro de uma linha ou grupo.** Um grupo de botões ou uma linha de imagens de conteúdo fica visualmente mais agradável quando as larguras e alturas de todos os elementos são iguais.

Para orientações para desenvolvedores, consulte [TVLockupView](https://developer.apple.com/documentation/tvuikit/tvlockupview) e [TVLockupHeaderFooterView](https://developer.apple.com/documentation/tvuikit/tvlockupheaderfooterview).

## Cards

Um card combina um cabeçalho, um rodapé e uma visualização de conteúdo para apresentar avaliações e resenhas de itens de mídia.

![Uma ilustração de uma tela da Apple TV que contém vários cards, um dos quais está destacado. Dentro do card destacado, de cima para baixo, um conteúdo de espaço reservado mostra a posição de uma avaliação e de várias linhas de texto.](../../../images/lockups/lockups-background@2x.png) ![Uma ilustração de uma tela da Apple TV que contém vários cards, um dos quais está destacado. Dentro do card destacado, de cima para baixo, um conteúdo de espaço reservado mostra a posição de uma avaliação e de várias linhas de texto. (escuro)](../../../images/lockups/lockups-background~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/lockups-background@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/lockups-background~dark@2x.png)*

Para orientações para desenvolvedores, consulte [TVCardView](https://developer.apple.com/documentation/tvuikit/tvcardview).

## Botões de legenda

Um botão de legenda pode incluir um título e um subtítulo abaixo do botão. Um botão de legenda pode conter uma imagem ou texto.

Certifique-se de que, quando as pessoas colocarem o foco neles, os botões de legenda se inclinem de acordo com o movimento do deslize. Quando alinhados verticalmente, os botões de legenda se inclinam para cima e para baixo. Quando alinhados horizontalmente, os botões de legenda se inclinam para a esquerda e para a direita. Quando exibidos em uma grade, os botões de legenda se inclinam tanto na vertical quanto na horizontal.

![Uma ilustração de uma tela da Apple TV destacada para mostrar quatro botões de legenda em uma linha. O botão mais à esquerda está em foco, fazendo com que se expanda ligeiramente e pareça flutuar acima do plano de fundo.](../../../images/lockups/lockups-caption-button@2x.png) ![Uma ilustração de uma tela da Apple TV destacada para mostrar quatro botões de legenda em uma linha. O botão mais à esquerda está em foco, fazendo com que se expanda ligeiramente e pareça flutuar acima do plano de fundo. (escuro)](../../../images/lockups/lockups-caption-button~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/lockups-caption-button@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/lockups-caption-button~dark@2x.png)*

Para orientações para desenvolvedores, consulte [TVCaptionButtonView](https://developer.apple.com/documentation/tvuikit/tvcaptionbuttonview).

## Monogramas

Os monogramas identificam pessoas, geralmente o elenco e a equipe de um item de mídia. Cada monograma consiste em uma imagem circular da pessoa e seu nome. Se não houver imagem disponível, as iniciais da pessoa aparecem no lugar da imagem.

**Prefira imagens a iniciais.** Uma imagem de uma pessoa cria uma conexão mais íntima do que um texto.

![Uma ilustração de uma tela da Apple TV que contém uma linha de vários monogramas, dos quais o mais à esquerda está destacado. Cada monograma contém o símbolo de pessoa. Abaixo de cada monograma há um conteúdo de espaço reservado que representa duas linhas de texto.](../../../images/lockups/lockups-monogram@2x.png) ![Uma ilustração de uma tela da Apple TV que contém uma linha de vários monogramas, dos quais o mais à esquerda está destacado. Cada monograma contém o símbolo de pessoa. Abaixo de cada monograma há um conteúdo de espaço reservado que representa duas linhas de texto. (escuro)](../../../images/lockups/lockups-monogram~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/lockups-monogram@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/lockups-monogram~dark@2x.png)*

Para orientações para desenvolvedores, consulte [TVMonogramContentView](https://developer.apple.com/documentation/tvuikit/tvmonogramcontentview).

## Pôsteres

Os pôsteres consistem em uma imagem e em um título e subtítulo opcionais, que ficam ocultos até que o pôster receba o foco. Os pôsteres podem ter qualquer tamanho, mas o tamanho precisa ser adequado ao conteúdo. Para orientações relacionadas, consulte [Visualizações de imagem](https://developer.apple.com/design/human-interface-guidelines/image-views).

![Uma ilustração de uma tela da Apple TV que mostra uma linha de vários pôsteres perto da borda inferior. Um pôster está em foco e, abaixo dele, há um conteúdo de espaço reservado que representa uma linha de texto.](../../../images/lockups/lockups-poster@2x.png) ![Uma ilustração de uma tela da Apple TV que mostra uma linha de vários pôsteres perto da borda inferior. Um pôster está em foco e, abaixo dele, há um conteúdo de espaço reservado que representa uma linha de texto. (escuro)](../../../images/lockups/lockups-poster~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/lockups-poster@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/lockups-poster~dark@2x.png)*

Para orientações para desenvolvedores, consulte [TVPosterView](https://developer.apple.com/documentation/tvuikit/tvposterview).

## Considerações por plataforma

*Não é compatível com iOS, iPadOS, macOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Projetando para tvOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Documentação para desenvolvedores

[TVLockupView](https://developer.apple.com/documentation/tvuikit/tvlockupview) — TVUIKit

[TVLockupHeaderFooterView](https://developer.apple.com/documentation/tvuikit/tvlockupheaderfooterview) — TVUIKit
