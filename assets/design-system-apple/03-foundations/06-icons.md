# Ícones (Icons)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/icons
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um ícone eficaz é um recurso gráfico que expressa um único conceito de maneiras que as pessoas entendem instantaneamente.*

![Um esboço do ícone da tecla Command. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple de seis cores.](../../images/icons/foundations-icons-intro@2x.png) ![Um esboço do ícone da tecla Command. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple de seis cores. (escuro)](../../images/icons/foundations-icons-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-icons-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-icons-intro~dark@2x.png)*

Apps e jogos usam uma variedade de ícones simples para ajudar as pessoas a entender os itens, ações e modos que podem escolher. Diferentemente dos [ícones de app](https://developer.apple.com/design/human-interface-guidelines/app-icons), que podem usar detalhes visuais ricos como sombreamento, texturas e realces para evocar a personalidade do app, um *ícone de interface* normalmente usa formas simplificadas e toques de cor para comunicar uma ideia direta.

Você pode projetar ícones de interface, também chamados de *glifos*, ou escolher símbolos do app SF Symbols, usando-os como estão ou personalizando-os para atender às suas necessidades. Tanto os ícones de interface quanto os símbolos usam as cores preto e transparente para definir suas formas; o sistema pode aplicar outras cores às áreas pretas de cada imagem. Para orientações, consulte [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols).

## Boas práticas

**Crie um design reconhecível e altamente simplificado.** Detalhes demais podem tornar um ícone de interface confuso ou ilegível. Procure um design simples e universal que a maioria das pessoas reconheça rapidamente. Em geral, os ícones funcionam melhor quando usam metáforas visuais familiares diretamente relacionadas às ações que iniciam ou ao conteúdo que representam.

**Mantenha a consistência visual entre todos os ícones de interface do seu app.** Quer você use apenas ícones personalizados ou misture ícones personalizados e fornecidos pelo sistema, todos os ícones de interface do seu app precisam usar tamanho, nível de detalhe, espessura de traço (ou peso) e perspectiva consistentes. Dependendo do peso visual de um ícone, pode ser necessário ajustar suas dimensões para garantir que ele pareça visualmente consistente com os outros ícones.

![Diagrama de quatro glifos em uma linha. Da esquerda, os glifos são uma câmera, um coração, um envelope e um despertador. Duas linhas tracejadas horizontais mostram os limites inferior e superior da linha e uma linha vermelha horizontal mostra o ponto médio. Os quatro glifos são pretos sólidos; alguns incluem linhas de detalhe internas em branco. Partes do despertador se estendem acima da linha tracejada superior porque seu peso visual mais leve exige maior altura para alcançar equilíbrio com os outros glifos.](../../images/icons/custom-icon-sizes@2x.png) ![Diagrama de quatro glifos em uma linha. Da esquerda, os glifos são uma câmera, um coração, um envelope e um despertador. Duas linhas tracejadas horizontais mostram os limites inferior e superior da linha e uma linha vermelha horizontal mostra o ponto médio. Os quatro glifos são pretos sólidos; alguns incluem linhas de detalhe internas em branco. Partes do despertador se estendem acima da linha tracejada superior porque seu peso visual mais leve exige maior altura para alcançar equilíbrio com os outros glifos. (escuro)](../../images/icons/custom-icon-sizes~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/custom-icon-sizes@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/custom-icon-sizes~dark@2x.png)*

![Diagrama dos mesmos quatro glifos mostrados acima, com as mesmas linhas tracejadas horizontais no topo e na base e a linha vermelha horizontal no meio. Neste diagrama, os quatro glifos são cinza sólido; as linhas de detalhe internas são pretas para enfatizar que todas as linhas usam o mesmo peso.](../../images/icons/custom-icon-line-weights@2x.png) ![Diagrama dos mesmos quatro glifos mostrados acima, com as mesmas linhas tracejadas horizontais no topo e na base e a linha vermelha horizontal no meio. Neste diagrama, os quatro glifos são cinza sólido; as linhas de detalhe internas são pretas para enfatizar que todas as linhas usam o mesmo peso. (escuro)](../../images/icons/custom-icon-line-weights~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/custom-icon-line-weights@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/custom-icon-line-weights~dark@2x.png)*

**Em geral, combine os pesos dos ícones de interface e do texto adjacente.** A menos que você queira enfatizar os ícones ou o texto, usar o mesmo peso para ambos dá ao conteúdo uma aparência e um nível de ênfase consistentes.

**Se necessário, adicione espaçamento interno a um ícone de interface personalizado para obter alinhamento óptico.** Alguns ícones, especialmente os assimétricos, podem parecer desequilibrados quando centralizados geometricamente em vez de opticamente. Por exemplo, o ícone de download mostrado abaixo tem mais peso visual na parte inferior do que na superior, o que pode fazê-lo parecer baixo demais se for centralizado geometricamente.

![Duas imagens de uma seta branca que aponta para baixo, em direção a um segmento de linha horizontal branco, dentro de um disco preto. A imagem da direita inclui duas barras horizontais rosa, uma entre o topo do glifo e o topo do disco e outra entre a base do glifo e a base do disco, que mostram que o glifo está centralizado geometricamente dentro do disco.](../../images/icons/asymmetric-glyph@2x.png) ![Duas imagens de uma seta branca que aponta para baixo, em direção a um segmento de linha horizontal branco, dentro de um disco preto. A imagem da direita inclui duas barras horizontais rosa, uma entre o topo do glifo e o topo do disco e outra entre a base do glifo e a base do disco, que mostram que o glifo está centralizado geometricamente dentro do disco. (escuro)](../../images/icons/asymmetric-glyph~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/asymmetric-glyph@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/asymmetric-glyph~dark@2x.png)*

Nesses casos, você pode ajustar ligeiramente a posição do ícone até que ele fique centralizado opticamente. Quando você cria um recurso que inclui seus ajustes como espaçamento interno ao redor de um ícone de interface (como mostrado abaixo, à direita), pode centralizar o ícone opticamente centralizando geometricamente o recurso.

![Duas imagens de uma seta branca que aponta para baixo, em direção a um segmento de linha horizontal branco, dentro de um disco preto. A imagem da esquerda inclui as duas barras horizontais rosa nos mesmos locais da ilustração anterior, mas o glifo foi movido para cima alguns pixels. A imagem da direita inclui um retângulo rosa sobreposto ao glifo para representar uma área de espaçamento interno, que inclui os pixels extras abaixo do glifo.](../../images/icons/asymmetric-glyph-optically-centered@2x.png) ![Duas imagens de uma seta branca que aponta para baixo, em direção a um segmento de linha horizontal branco, dentro de um disco preto. A imagem da esquerda inclui as duas barras horizontais rosa nos mesmos locais da ilustração anterior, mas o glifo foi movido para cima alguns pixels. A imagem da direita inclui um retângulo rosa sobreposto ao glifo para representar uma área de espaçamento interno, que inclui os pixels extras abaixo do glifo. (escuro)](../../images/icons/asymmetric-glyph-optically-centered~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/asymmetric-glyph-optically-centered@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/asymmetric-glyph-optically-centered~dark@2x.png)*

Os ajustes para centralização óptica costumam ser muito pequenos, mas podem ter um grande impacto na aparência do seu app.

![Duas imagens de uma seta branca que aponta para baixo, em direção a um segmento de linha horizontal branco, dentro de um disco preto. O glifo da esquerda está centralizado geometricamente e o da direita está centralizado opticamente.](../../images/icons/asymmetric-glyph-before-and-after@2x.png) ![Duas imagens de uma seta branca que aponta para baixo, em direção a um segmento de linha horizontal branco, dentro de um disco preto. O glifo da esquerda está centralizado geometricamente e o da direita está centralizado opticamente. (escuro)](../../images/icons/asymmetric-glyph-before-and-after~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/asymmetric-glyph-before-and-after@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/asymmetric-glyph-before-and-after~dark@2x.png)*

**Forneça uma versão de estado selecionado de um ícone de interface somente se necessário.** Você não precisa fornecer aparências selecionada e não selecionada para um ícone usado em componentes padrão do sistema, como barras de ferramentas, barras de abas e botões. O sistema atualiza automaticamente a aparência visual do estado selecionado.

![Uma imagem de dois botões da barra de ferramentas que compartilham um fundo. O botão da esquerda mostra o ícone Filtro em estado selecionado, usando uma cor de tom azul no fundo. O botão da direita mostra o ícone Mais em estado não selecionado, usando a aparência padrão dos botões da barra de ferramentas.](../../images/icons/icons-selection-correct@2x.png) ![Uma imagem de dois botões da barra de ferramentas que compartilham um fundo. O botão da esquerda mostra o ícone Filtro em estado selecionado, usando uma cor de tom azul no fundo. O botão da direita mostra o ícone Mais em estado não selecionado, usando a aparência padrão dos botões da barra de ferramentas. (escuro)](../../images/icons/icons-selection-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-selection-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-selection-correct~dark@2x.png)*

**Use imagens inclusivas.** Considere como seus ícones podem ser compreensíveis e acolhedores para todos. Prefira retratar figuras humanas neutras em termos de gênero e evite imagens que possam ser difíceis de reconhecer entre diferentes culturas ou idiomas. Para orientações, consulte [Inclusão](https://developer.apple.com/design/human-interface-guidelines/inclusion).

**Inclua texto no seu design somente quando for essencial para transmitir significado.** Por exemplo, usar um caractere em um ícone de interface que representa formatação de texto pode ser a forma mais direta de comunicar o conceito. Se precisar exibir caracteres individuais no seu ícone, localize-os. Se precisar sugerir uma passagem de texto, projete uma representação abstrata dela e inclua uma versão invertida do ícone para usar quando o contexto for da direita para a esquerda. Para orientações, consulte [Da direita para a esquerda](https://developer.apple.com/design/human-interface-guidelines/right-to-left).

![Uma captura de tela parcial do app SF Symbols mostrando o painel de informações do símbolo de caractere, que se parece com a letra A maiúscula. Abaixo da imagem, estão listadas as oito versões localizadas do símbolo a seguir: latino, árabe, hebraico, híndi, japonês, coreano, tailandês e chinês.](../../images/icons/character-in-glyph@2x.png) ![Uma captura de tela parcial do app SF Symbols mostrando o painel de informações do símbolo de caractere, que se parece com a letra A maiúscula. Abaixo da imagem, estão listadas as oito versões localizadas do símbolo a seguir: latino, árabe, hebraico, híndi, japonês, coreano, tailandês e chinês. (escuro)](../../images/icons/character-in-glyph~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/character-in-glyph@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/character-in-glyph~dark@2x.png)*

![Uma captura de tela parcial do app SF Symbols mostrando o painel de informações do símbolo de página com texto e pontos, que se parece com três linhas horizontais alinhadas à esquerda dentro de um retângulo arredondado. Abaixo da imagem, são mostradas as versões localizadas da esquerda para a direita e da direita para a esquerda.](../../images/icons/abstract-text-in-glyph@2x.png) ![Uma captura de tela parcial do app SF Symbols mostrando o painel de informações do símbolo de página com texto e pontos, que se parece com três linhas horizontais alinhadas à esquerda dentro de um retângulo arredondado. Abaixo da imagem, são mostradas as versões localizadas da esquerda para a direita e da direita para a esquerda. (escuro)](../../images/icons/abstract-text-in-glyph~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/abstract-text-in-glyph@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/abstract-text-in-glyph~dark@2x.png)*

**Se você criar um ícone de interface personalizado, use um formato vetorial como PDF ou SVG.** O sistema escala automaticamente um ícone de interface vetorial para telas de alta resolução, então você não precisa fornecer versões de alta resolução dele. Em contraste, o PNG, usado para ícones de app e outras imagens que incluem efeitos como sombreamento, texturas e realces, não oferece suporte a escalonamento, então você precisa fornecer várias versões de cada ícone de interface baseado em PNG. Como alternativa, você pode criar um SF Symbol personalizado e especificar uma escala que garanta que a ênfase do símbolo corresponda ao texto adjacente. Para orientações, consulte [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols).

**Forneça rótulos de texto alternativo para ícones de interface personalizados.** Os rótulos de texto alternativo, ou descrições de acessibilidade, não são visíveis, mas permitem que o VoiceOver descreva em áudio o que está na tela, simplificando a navegação para pessoas com deficiência visual. Para orientações, consulte [VoiceOver](https://developer.apple.com/design/human-interface-guidelines/voiceover).

**Evite usar réplicas de produtos de hardware da Apple.** Os designs de hardware tendem a mudar com frequência e podem fazer seus ícones de interface e outros conteúdos parecerem ultrapassados. Se precisar exibir hardware da Apple, use apenas as imagens disponíveis em [Apple Design Resources](https://developer.apple.com/design/resources/) ou os SF Symbols que representam diversos produtos da Apple.

## Ícones padrão

Para ícones que representam ações comuns em [menus](https://developer.apple.com/design/human-interface-guidelines/menus), [barras de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars), [botões](https://developer.apple.com/design/human-interface-guidelines/buttons) e outros lugares em interfaces das plataformas da Apple, você pode usar estes [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols).

### Edição


| Ação | Ícone | Nome do símbolo |
|---|---|---|
| Recortar | ![Um ícone mostrando uma tesoura.](../../images/icons/icons-symbols-meaning-cut@2x.png) ![Um ícone mostrando uma tesoura. (escuro)](../../images/icons/icons-symbols-meaning-cut~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-cut@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-cut~dark@2x.png)* | `scissors` |
| Copiar | ![Um ícone mostrando duas cópias de um documento.](../../images/icons/icons-symbols-meaning-copy@2x.png) ![Um ícone mostrando duas cópias de um documento. (escuro)](../../images/icons/icons-symbols-meaning-copy~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-copy@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-copy~dark@2x.png)* | `document.on.document` |
| Colar | ![Um ícone mostrando um documento na frente de uma prancheta.](../../images/icons/icons-symbols-meaning-paste@2x.png) ![Um ícone mostrando um documento na frente de uma prancheta. (escuro)](../../images/icons/icons-symbols-meaning-paste~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-paste@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-paste~dark@2x.png)* | `document.on.clipboard` |
| Concluído | ![Um ícone mostrando uma marca de seleção.](../../images/icons/icons-symbols-meaning-done-save@2x.png) ![Um ícone mostrando uma marca de seleção. (escuro)](../../images/icons/icons-symbols-meaning-done-save~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-done-save@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-done-save~dark@2x.png)* | `checkmark ` |
| Salvar |  |  |
| Cancelar | ![Um ícone mostrando um X.](../../images/icons/icons-symbols-meaning-close-cancel@2x.png) ![Um ícone mostrando um X. (escuro)](../../images/icons/icons-symbols-meaning-close-cancel~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-close-cancel@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-close-cancel~dark@2x.png)* | `xmark` |
| Fechar |  |  |
| Excluir | ![Um ícone mostrando uma lixeira.](../../images/icons/icons-symbols-meaning-delete@2x.png) ![Um ícone mostrando uma lixeira. (escuro)](../../images/icons/icons-symbols-meaning-delete~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-delete@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-delete~dark@2x.png)* | `trash` |
| Desfazer | ![Um ícone mostrando uma seta curvando-se para o canto superior esquerdo.](../../images/icons/icons-symbols-meaning-undo@2x.png) ![Um ícone mostrando uma seta curvando-se para o canto superior esquerdo. (escuro)](../../images/icons/icons-symbols-meaning-undo~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-undo@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-undo~dark@2x.png)* | `arrow.uturn.backward` |
| Refazer | ![Um ícone mostrando uma seta curvando-se para o canto superior direito.](../../images/icons/icons-symbols-meaning-redo@2x.png) ![Um ícone mostrando uma seta curvando-se para o canto superior direito. (escuro)](../../images/icons/icons-symbols-meaning-redo~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-redo@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-redo~dark@2x.png)* | `arrow.uturn.forward` |
| Redigir | ![Um ícone mostrando um lápis posicionado sobre um quadrado.](../../images/icons/icons-symbols-meaning-compose@2x.png) ![Um ícone mostrando um lápis posicionado sobre um quadrado. (escuro)](../../images/icons/icons-symbols-meaning-compose~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-compose@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-compose~dark@2x.png)* | `square.and.pencil` |
| Duplicar | ![Um ícone mostrando um quadrado com um sinal de mais sobre outro quadrado.](../../images/icons/icons-symbols-meaning-duplicate@2x.png) ![Um ícone mostrando um quadrado com um sinal de mais sobre outro quadrado. (escuro)](../../images/icons/icons-symbols-meaning-duplicate~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-duplicate@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-duplicate~dark@2x.png)* | `plus.square.on.square` |
| Renomear | ![Um ícone mostrando um lápis.](../../images/icons/icons-symbols-meaning-rename@2x.png) ![Um ícone mostrando um lápis. (escuro)](../../images/icons/icons-symbols-meaning-rename~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-rename@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-rename~dark@2x.png)* | `pencil` |
| Mover para | ![Um ícone mostrando uma pasta.](../../images/icons/icons-symbols-meaning-move-to-folder@2x.png) ![Um ícone mostrando uma pasta. (escuro)](../../images/icons/icons-symbols-meaning-move-to-folder~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-move-to-folder@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-move-to-folder~dark@2x.png)* | `folder` |
| Pasta |  |  |
| Anexar | ![Um ícone mostrando um clipe de papel.](../../images/icons/icons-symbols-meaning-attach@2x.png) ![Um ícone mostrando um clipe de papel. (escuro)](../../images/icons/icons-symbols-meaning-attach~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-attach@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-attach~dark@2x.png)* | `paperclip` |
| Adicionar | ![Um ícone mostrando um sinal de mais.](../../images/icons/icons-symbols-meaning-add@2x.png) ![Um ícone mostrando um sinal de mais. (escuro)](../../images/icons/icons-symbols-meaning-add~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-add@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-add~dark@2x.png)* | `plus` |
| Mais | ![Um ícone mostrando reticências.](../../images/icons/icons-symbols-meaning-more@2x.png) ![Um ícone mostrando reticências. (escuro)](../../images/icons/icons-symbols-meaning-more~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-more@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-more~dark@2x.png)* | `ellipsis` |

### Seleção

| Ação | Ícone | Nome do símbolo |
|---|---|---|
| Selecionar | ![Um ícone mostrando uma marca de seleção em um círculo.](../../images/icons/icons-symbols-meaning-select-all@2x.png) ![Um ícone mostrando uma marca de seleção em um círculo. (escuro)](../../images/icons/icons-symbols-meaning-select-all~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-select-all@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-select-all~dark@2x.png)* | `checkmark.circle` |
| Desmarcar | ![Um ícone mostrando um X.](../../images/icons/icons-symbols-meaning-deselect-close@2x.png) ![Um ícone mostrando um X. (escuro)](../../images/icons/icons-symbols-meaning-deselect-close~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-deselect-close@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-deselect-close~dark@2x.png)* | `xmark` |
| Fechar |  |  |
| Excluir | ![Um ícone mostrando uma lixeira.](../../images/icons/icons-symbols-meaning-delete@2x.png) ![Um ícone mostrando uma lixeira. (escuro)](../../images/icons/icons-symbols-meaning-delete~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-delete@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-delete~dark@2x.png)* | `trash` |

### Formatação de texto

| Ação | Ícone | Nome do símbolo |
|---|---|---|
| Sobrescrito | ![Um ícone mostrando a letra A maiúscula com o número 1 no canto superior direito.](../../images/icons/icons-symbols-meaning-superscript@2x.png) ![Um ícone mostrando a letra A maiúscula com o número 1 no canto superior direito. (escuro)](../../images/icons/icons-symbols-meaning-superscript~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-superscript@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-superscript~dark@2x.png)* | `textformat.superscript` |
| Subscrito | ![Um ícone mostrando a letra A maiúscula com o número 1 no canto inferior direito.](../../images/icons/icons-symbols-meaning-subscript@2x.png) ![Um ícone mostrando a letra A maiúscula com o número 1 no canto inferior direito. (escuro)](../../images/icons/icons-symbols-meaning-subscript~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-subscript@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-subscript~dark@2x.png)* | `textformat.subscript` |
| Negrito | ![Um ícone mostrando a letra B maiúscula em negrito.](../../images/icons/icons-symbols-meaning-bold@2x.png) ![Um ícone mostrando a letra B maiúscula em negrito. (escuro)](../../images/icons/icons-symbols-meaning-bold~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-bold@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-bold~dark@2x.png)* | `bold` |
| Itálico | ![Um ícone mostrando a letra I maiúscula em itálico.](../../images/icons/icons-symbols-meaning-italic@2x.png) ![Um ícone mostrando a letra I maiúscula em itálico. (escuro)](../../images/icons/icons-symbols-meaning-italic~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-italic@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-italic~dark@2x.png)* | `italic` |
| Sublinhado | ![Um ícone mostrando a letra U maiúscula com um sublinhado.](../../images/icons/icons-symbols-meaning-underline@2x.png) ![Um ícone mostrando a letra U maiúscula com um sublinhado. (escuro)](../../images/icons/icons-symbols-meaning-underline~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-underline@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-underline~dark@2x.png)* | `underline` |
| Alinhar à esquerda | ![Um ícone mostrando uma pilha de quatro linhas horizontais de larguras variadas alinhadas à borda esquerda.](../../images/icons/icons-symbols-meaning-align-left@2x.png) ![Um ícone mostrando uma pilha de quatro linhas horizontais de larguras variadas alinhadas à borda esquerda. (escuro)](../../images/icons/icons-symbols-meaning-align-left~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-align-left@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-align-left~dark@2x.png)* | `text.alignleft` |
| Centralizar | ![Um ícone mostrando uma pilha de quatro linhas horizontais de larguras variadas alinhadas ao centro.](../../images/icons/icons-symbols-meaning-align-center@2x.png) ![Um ícone mostrando uma pilha de quatro linhas horizontais de larguras variadas alinhadas ao centro. (escuro)](../../images/icons/icons-symbols-meaning-align-center~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-align-center@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-align-center~dark@2x.png)* | `text.aligncenter` |
| Justificado | ![Um ícone mostrando uma pilha de quatro linhas horizontais de larguras idênticas.](../../images/icons/icons-symbols-meaning-align-justified@2x.png) ![Um ícone mostrando uma pilha de quatro linhas horizontais de larguras idênticas. (escuro)](../../images/icons/icons-symbols-meaning-align-justified~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-align-justified@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-align-justified~dark@2x.png)* | `text.justify` |
| Alinhar à direita | ![Um ícone mostrando uma pilha de quatro linhas horizontais de larguras variadas alinhadas à borda direita.](../../images/icons/icons-symbols-meaning-align-right@2x.png) ![Um ícone mostrando uma pilha de quatro linhas horizontais de larguras variadas alinhadas à borda direita. (escuro)](../../images/icons/icons-symbols-meaning-align-right~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-align-right@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-align-right~dark@2x.png)* | `text.alignright` |

### Busca

| Ação | Ícone | Nome do símbolo |
|---|---|---|
| Buscar | ![Um ícone mostrando uma lupa.](../../images/icons/icons-symbols-meaning-search@2x.png) ![Um ícone mostrando uma lupa. (escuro)](../../images/icons/icons-symbols-meaning-search~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-search@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-search~dark@2x.png)* | `magnifyingglass` |
| Localizar | ![Um ícone mostrando uma lupa acima de um documento.](../../images/icons/icons-symbols-meaning-find@2x.png) ![Um ícone mostrando uma lupa acima de um documento. (escuro)](../../images/icons/icons-symbols-meaning-find~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-find@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-find~dark@2x.png)* | `text.page.badge.magnifyingglass` |
| Localizar e substituir |  |  |
| Localizar próximo |  |  |
| Localizar anterior |  |  |
| Usar seleção para localizar |  |  |
| Filtrar | ![Um ícone mostrando uma pilha de três linhas horizontais com largura decrescente de cima para baixo.](../../images/icons/icons-symbols-meaning-filter@2x.png) ![Um ícone mostrando uma pilha de três linhas horizontais com largura decrescente de cima para baixo. (escuro)](../../images/icons/icons-symbols-meaning-filter~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-filter@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-filter~dark@2x.png)* | `line.3.horizontal.decrease` |

### Compartilhamento e exportação

| Ação | Ícone | Nome do símbolo |
|---|---|---|
| Compartilhar | ![Um ícone mostrando uma seta apontando para cima a partir do meio de um quadrado.](../../images/icons/icons-symbols-meaning-sharing@2x.png) ![Um ícone mostrando uma seta apontando para cima a partir do meio de um quadrado. (escuro)](../../images/icons/icons-symbols-meaning-sharing~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-sharing@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-sharing~dark@2x.png)* | `square.and.arrow.up` |
| Exportar |  |  |
| Imprimir | ![Um ícone mostrando uma impressora.](../../images/icons/icons-symbols-meaning-print@2x.png) ![Um ícone mostrando uma impressora. (escuro)](../../images/icons/icons-symbols-meaning-print~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-print@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-print~dark@2x.png)* | `printer` |

### Usuários e contas

| Ação | Ícone | Nome do símbolo |
|---|---|---|
| Conta | ![Um ícone mostrando uma representação abstrata da cabeça e dos ombros de uma pessoa em um contorno circular.](../../images/icons/icons-symbols-meaning-account-user@2x.png) ![Um ícone mostrando uma representação abstrata da cabeça e dos ombros de uma pessoa em um contorno circular. (escuro)](../../images/icons/icons-symbols-meaning-account-user~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-account-user@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-account-user~dark@2x.png)* | `person.crop.circle` |
| Usuário |  |  |
| Perfil |  |  |

### Avaliações

| Ação | Ícone | Nome do símbolo |
|---|---|---|
| Não curtir | ![Um ícone mostrando uma mão fazendo o gesto de polegar para baixo.](../../images/icons/icons-symbols-meaning-dislike@2x.png) ![Um ícone mostrando uma mão fazendo o gesto de polegar para baixo. (escuro)](../../images/icons/icons-symbols-meaning-dislike~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-dislike@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-dislike~dark@2x.png)* | `hand.thumbsdown` |
| Curtir | ![Um ícone mostrando uma mão fazendo o gesto de polegar para cima.](../../images/icons/icons-symbols-meaning-like@2x.png) ![Um ícone mostrando uma mão fazendo o gesto de polegar para cima. (escuro)](../../images/icons/icons-symbols-meaning-like~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-like@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-like~dark@2x.png)* | `hand.thumbsup` |

### Ordem das camadas

| Ação | Ícone | Nome do símbolo |
|---|---|---|
| Trazer para a frente | ![Um ícone mostrando uma pilha de três quadrados sobrepostos, com o quadrado superior em preenchimento sólido enquanto os outros quadrados são apenas contornos.](../../images/icons/icons-symbols-meaning-bring-to-front@2x.png) ![Um ícone mostrando uma pilha de três quadrados sobrepostos, com o quadrado superior em preenchimento sólido enquanto os outros quadrados são apenas contornos. (escuro)](../../images/icons/icons-symbols-meaning-bring-to-front~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-bring-to-front@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-bring-to-front~dark@2x.png)* | `square.3.layers.3d.top.filled` |
| Enviar para trás | ![Um ícone mostrando uma pilha de três quadrados sobrepostos, com o quadrado inferior em preenchimento sólido enquanto os outros quadrados são apenas contornos.](../../images/icons/icons-symbols-meaning-send-to-back@2x.png) ![Um ícone mostrando uma pilha de três quadrados sobrepostos, com o quadrado inferior em preenchimento sólido enquanto os outros quadrados são apenas contornos. (escuro)](../../images/icons/icons-symbols-meaning-send-to-back~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-send-to-back@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-send-to-back~dark@2x.png)* | `square.3.layers.3d.bottom.filled` |
| Avançar | ![Um ícone mostrando uma pilha de dois quadrados sobrepostos, com o quadrado superior em preenchimento sólido enquanto o outro quadrado é apenas um contorno.](../../images/icons/icons-symbols-meaning-bring-forward@2x.png) ![Um ícone mostrando uma pilha de dois quadrados sobrepostos, com o quadrado superior em preenchimento sólido enquanto o outro quadrado é apenas um contorno. (escuro)](../../images/icons/icons-symbols-meaning-bring-forward~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-bring-forward@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-bring-forward~dark@2x.png)* | `square.2.layers.3d.top.filled` |
| Recuar | ![Um ícone mostrando uma pilha de dois quadrados sobrepostos, com o quadrado inferior em preenchimento sólido enquanto o outro quadrado é apenas um contorno.](../../images/icons/icons-symbols-meaning-send-backwards@2x.png) ![Um ícone mostrando uma pilha de dois quadrados sobrepostos, com o quadrado inferior em preenchimento sólido enquanto o outro quadrado é apenas um contorno. (escuro)](../../images/icons/icons-symbols-meaning-send-backwards~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-send-backwards@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-send-backwards~dark@2x.png)* | `square.2.layers.3d.bottom.filled` |

### Outros

| Ação | Ícone | Nome do símbolo |
|---|---|---|
| Alarme | ![Um ícone mostrando um despertador.](../../images/icons/icons-symbols-meaning-alarm@2x.png) ![Um ícone mostrando um despertador. (escuro)](../../images/icons/icons-symbols-meaning-alarm~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-alarm@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-alarm~dark@2x.png)* | `alarm` |
| Arquivar | ![Um ícone mostrando uma caixa de arquivo.](../../images/icons/icons-symbols-meaning-archive@2x.png) ![Um ícone mostrando uma caixa de arquivo. (escuro)](../../images/icons/icons-symbols-meaning-archive~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-archive@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-archive~dark@2x.png)* | `archivebox` |
| Calendário | ![Um ícone mostrando um calendário.](../../images/icons/icons-symbols-meaning-calendar@2x.png) ![Um ícone mostrando um calendário. (escuro)](../../images/icons/icons-symbols-meaning-calendar~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-calendar@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/icons-symbols-meaning-calendar~dark@2x.png)* | `calendar` |

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, tvOS, visionOS ou watchOS.*

### macOS

#### Ícones de documento

Se seu app macOS pode usar um tipo de documento personalizado, você pode criar um ícone de documento para representá-lo. Tradicionalmente, um ícone de documento se parece com uma folha de papel com o canto superior direito dobrado. Essa aparência distintiva ajuda as pessoas a distinguir documentos de apps e de outros conteúdos, mesmo quando os ícones são pequenos.

Se você não fornecer um ícone de documento para um tipo de arquivo que suporta, o macOS cria um para você compondo o ícone do seu app e a extensão do arquivo no canvas. Por exemplo, o Preview usa um ícone de documento gerado pelo sistema para representar arquivos JPG.

![Uma imagem do ícone de documento do Preview para um arquivo JPG.](../../images/icons/doc-icon-generated@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-generated@2x.png)*

Em alguns casos, pode fazer sentido criar um conjunto de ícones de documento para representar uma variedade de tipos de arquivo que seu app manipula. Por exemplo, o Xcode usa ícones de documento personalizados para ajudar as pessoas a distinguir projetos, objetos de RA e arquivos de código Swift.

![Imagem de um ícone de documento de projeto do Xcode.](../../images/icons/doc-icon-custom-1@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-custom-1@2x.png)*

![Imagem de um ícone de documento de um objeto de RA.](../../images/icons/doc-icon-custom-2@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-custom-2@2x.png)*

![Imagem de um ícone de documento de um arquivo Swift.](../../images/icons/doc-icon-custom-3@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-custom-3@2x.png)*

Para criar um ícone de documento personalizado, você pode fornecer qualquer combinação de preenchimento de fundo, imagem central e texto. O sistema sobrepõe em camadas, posiciona e mascara esses elementos conforme necessário e os compõe na familiar forma de ícone com canto dobrado.

![Um canvas quadrado que contém uma grade de linhas rosa e uma linha de ECG branca irregular que percorre horizontalmente o meio. A grade rosa fica mais clara em direção à borda inferior.](../../images/icons/doc-icon-parts-background-fill@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-parts-background-fill@2x.png)*

![Um coração rosa sólido.](../../images/icons/doc-icon-parts-center-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-parts-center-image@2x.png)*

![A palavra heart em letras maiúsculas.](../../images/icons/doc-icon-parts-text@2x.png) ![A palavra heart em letras maiúsculas. (escuro)](../../images/icons/doc-icon-parts-text~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-parts-text@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-parts-text~dark@2x.png)*

![Um ícone de documento personalizado que exibe o coração rosa e a palavra heart sobre a grade rosa e a linha de ECG branca.](../../images/icons/doc-icon-parts@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-parts@2x.png)*

**Projete imagens simples que comuniquem claramente o tipo de documento.** Quer você use um preenchimento de fundo, uma imagem central ou ambos, prefira formas descomplicadas e uma paleta reduzida de cores distintas. Seu ícone de documento pode ser exibido em apenas 16x16 px, então você precisa criar designs que continuem reconhecíveis em todos os tamanhos.

**Projetar uma única imagem expressiva para o preenchimento de fundo pode ser uma ótima maneira de ajudar as pessoas a entender e reconhecer um tipo de documento.** Por exemplo, o Xcode e o TextEdit usam imagens de fundo ricas que não incluem uma imagem central.

![Imagem de um ícone de documento de projeto do Xcode.](../../images/icons/doc-icon-custom-1@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-custom-1@2x.png)*

![Imagem de um ícone de documento de texto formatado do TextEdit.](../../images/icons/doc-icon-fill-only@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-fill-only@2x.png)*

**Considere reduzir a complexidade nas versões pequenas do seu ícone de documento.** Detalhes do ícone que são nítidos nas versões grandes podem ficar borrados e difíceis de reconhecer nas versões pequenas. Por exemplo, para garantir que as linhas da grade no ícone de documento personalizado de coração continuem nítidas em tamanhos intermediários, você pode usar menos linhas e engrossá-las alinhando-as à grade de pixels reduzida. No tamanho 16x16 px, você pode remover as linhas completamente.

![Imagem pixelada do ícone de documento de coração. A grade, a linha de ECG, a forma de coração e a palavra heart estão visíveis, mas borradas.](../../images/icons/doc-icon-fewer-details-1@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-fewer-details-1@2x.png)*

![Imagem pixelada do ícone de documento de coração, na qual somente a forma de coração borrada e a linha de ECG estão visíveis.](../../images/icons/doc-icon-fewer-details-2@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-fewer-details-2@2x.png)*

![Imagem pixelada do ícone de documento de coração, na qual somente a forma de coração borrada está visível.](../../images/icons/doc-icon-fewer-details-3@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-fewer-details-3@2x.png)*

**Evite colocar conteúdo importante no canto superior direito do preenchimento de fundo.** O sistema mascara automaticamente sua imagem para ajustá-la à forma do ícone de documento e desenha o canto dobrado branco sobre o preenchimento. Crie um conjunto de imagens de fundo nos tamanhos listados abaixo.

- 512x512 px @1x, 1024x1024 px @2x
- 256x256 px @1x, 512x512 px @2x
- 128x128 px @1x, 256x256 px @2x
- 32x32 px @1x, 64x64 px @2x
- 16x16 px @1x, 32x32 px @2x

**Se um objeto familiar puder transmitir o tipo de um documento ou sua conexão com seu app, considere criar uma imagem central que o represente.** Projete uma imagem simples e inequívoca, clara e reconhecível em todos os tamanhos. A imagem central mede metade do tamanho do canvas total do ícone de documento. Por exemplo, para criar uma imagem central para um ícone de documento de 32x32 px, use um canvas de imagem de 16x16 px. Você pode fornecer imagens centrais nos seguintes tamanhos:

- 256x256 px @1x, 512x512 px @2x
- 128x128 px @1x, 256x256 px @2x
- 32x32 px @1x, 64x64 px @2x
- 16x16 px @1x, 32x32 px @2x

**Defina uma margem de cerca de 10% do canvas da imagem e mantenha a maior parte da imagem dentro dela.** Embora partes da imagem possam se estender para essa margem para alinhamento óptico, é melhor quando a imagem ocupa cerca de 80% do canvas. Por exemplo, a maior parte da imagem central em um canvas de 256x256 px caberia em uma área de 205x205 px.

![Diagrama da forma de coração rosa sólido dentro de margens azuis que medem 10 por cento da largura do canvas.](../../images/icons/doc-icon-parts-margins@2x.png) ![Diagrama da forma de coração rosa sólido dentro de margens azuis que medem 10 por cento da largura do canvas. (escuro)](../../images/icons/doc-icon-parts-margins~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-parts-margins@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-parts-margins~dark@2x.png)*

**Especifique um termo sucinto se isso ajudar as pessoas a entender seu tipo de documento.** Por padrão, o sistema exibe a extensão de um documento na borda inferior do ícone de documento, mas se a extensão não for familiar, você pode fornecer um termo mais descritivo. Por exemplo, o ícone de documento de um arquivo de cena do SceneKit usa o termo *scene* em vez da extensão de arquivo *scn*. O sistema escala automaticamente o texto da extensão para caber no ícone de documento, então use um termo curto o bastante para ser legível em tamanhos pequenos. Por padrão, o sistema coloca em maiúsculas todas as letras do texto.

![Imagem de um ícone de documento de arquivo de cena do SceneKit.](../../images/icons/doc-icon-custom-extension@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-icon-custom-extension@2x.png)*

## Recursos

#### Relacionados

[Ícones de app](https://developer.apple.com/design/human-interface-guidelines/app-icons)

[SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols)

#### Vídeos

- [Designing Glyphs](https://developer.apple.com/videos/play/wwdc2017/823)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de junho de 2025 | Adicionada uma tabela de SF Symbols que representam ações comuns. |
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
