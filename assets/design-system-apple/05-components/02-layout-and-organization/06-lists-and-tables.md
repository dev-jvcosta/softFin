# Listas e tabelas (Lists and tables)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/lists-and-tables
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Listas e tabelas apresentam dados em uma ou mais colunas de linhas.*

![Uma representação estilizada de uma tabela de três linhas com texto de cabeçalho e de rodapé. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores.](../../../images/lists-and-tables/components-lists-and-tables-intro@2x.png) ![Uma representação estilizada de uma tabela de três linhas com texto de cabeçalho e de rodapé. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/lists-and-tables/components-lists-and-tables-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-lists-and-tables-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-lists-and-tables-intro~dark@2x.png)*

Uma tabela ou lista pode representar dados organizados em grupos ou hierarquias e pode oferecer suporte a interações do usuário como selecionar, adicionar, excluir e reordenar. Apps e jogos em todas as plataformas podem usar tabelas para apresentar conteúdo e opções; muitos apps usam listas para expressar uma hierarquia geral de informações e ajudar as pessoas a navegar por ela. Por exemplo, os Ajustes do iOS usam uma hierarquia de listas para ajudar as pessoas a escolher opções, e vários apps — como o Mail no iPadOS e no macOS — usam uma tabela dentro de uma [visualização dividida](https://developer.apple.com/design/human-interface-guidelines/split-views).

Às vezes, as pessoas precisam trabalhar com dados complexos em uma tabela de várias colunas ou em uma planilha. Apps que oferecem tarefas de produtividade costumam usar uma tabela para representar várias características ou atributos dos dados em colunas separadas e ordenáveis.

## Boas práticas

**Prefira exibir texto em uma lista ou tabela.** Uma tabela pode incluir qualquer tipo de conteúdo, mas o formato baseado em linhas é especialmente adequado para tornar o texto fácil de percorrer e ler. Se você tem itens que variam muito de tamanho — ou precisa exibir um grande número de imagens — considere usar uma [coleção](https://developer.apple.com/design/human-interface-guidelines/collections).

**Deixe as pessoas editarem uma tabela quando fizer sentido.** As pessoas gostam de poder reordenar uma lista, mesmo que não possam adicionar ou remover itens. No iOS e no iPadOS, as pessoas precisam entrar em um modo de edição antes de poder selecionar itens da tabela.

**Dê um feedback apropriado quando as pessoas selecionarem um item da lista.** O feedback pode variar dependendo de a seleção do item revelar uma nova visualização ou alternar o estado do item. Em geral, uma tabela que ajuda as pessoas a navegar por uma hierarquia destaca de forma persistente a linha selecionada para esclarecer o caminho que elas estão seguindo. Já uma tabela que lista opções costuma destacar uma linha apenas brevemente antes de adicionar uma imagem — como uma marca de seleção — indicando que o item está selecionado.

## Conteúdo

**Mantenha o texto dos itens conciso para que o conteúdo das linhas seja confortável de ler.** Um texto curto e conciso pode ajudar a minimizar truncamentos e quebras de linha, tornando o texto mais fácil de ler e percorrer. Se cada item consistir em uma grande quantidade de texto, considere alternativas que ajudem a evitar linhas de tabela grandes demais. Por exemplo, você poderia listar apenas os títulos dos itens, deixando as pessoas escolherem um item para revelar seu conteúdo em uma visualização de detalhes.

**Considere formas de preservar a legibilidade de textos que de outra forma seriam cortados ou truncados.** Quando uma tabela é estreita — por exemplo, se as pessoas podem variar sua largura —, você quer que o conteúdo continue reconhecível e fácil de ler. Às vezes, reticências no meio do texto podem tornar um item mais fácil de distinguir, porque preservam tanto o início quanto o fim do conteúdo.

**Use títulos de coluna descritivos em uma tabela de várias colunas.** Use substantivos ou locuções nominais curtas com [capitalização de estilo de título](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64) e não adicione pontuação final. Se você não incluir um título de coluna em uma visualização de tabela de coluna única, use um rótulo ou um cabeçalho para ajudar as pessoas a entender o contexto.

## Estilo

**Escolha um estilo de tabela ou lista que combine com os seus dados e com a plataforma.** Alguns estilos usam detalhes visuais para ajudar a comunicar agrupamento e hierarquia ou para oferecer experiências específicas. No iOS e no iPadOS, por exemplo, o estilo agrupado usa cabeçalhos, rodapés e espaço adicional para separar grupos de dados; o estilo elíptico disponível no watchOS faz os itens parecerem rolar de uma superfície arredondada conforme as pessoas rolam a tela; e o macOS define um estilo com bordas que usa fundos de linha alternados para tornar tabelas grandes mais fáceis de usar. Para orientações para desenvolvedores, consulte [ListStyle](https://developer.apple.com/documentation/swiftui/liststyle).

**Escolha um estilo de linha que se ajuste às informações que você precisa exibir.** Por exemplo, você pode precisar exibir uma imagem pequena na extremidade inicial de uma linha, seguida por um breve rótulo explicativo. Algumas plataformas oferecem estilos de linha integrados que você pode usar para organizar o conteúdo nas linhas de uma lista, como a API [UIListContentConfiguration](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct), que você pode usar para dispor o conteúdo nas linhas, cabeçalhos e rodapés de uma lista no iOS, iPadOS e tvOS.

## Considerações por plataforma

### iOS, iPadOS, visionOS

**Use um botão de informações apenas para revelar mais informações sobre o conteúdo de uma linha.** Um botão de informações — chamado de *botão de divulgação de detalhes* quando aparece em uma linha de lista — não oferece suporte à navegação por uma tabela ou lista hierárquica. Se você precisa permitir que as pessoas se aprofundem nas subvisualizações de uma linha de lista ou tabela, use um controle acessório indicador de divulgação. Para orientações para desenvolvedores, consulte [UITableViewCell.AccessoryType.disclosureIndicator](https://developer.apple.com/documentation/uikit/uitableviewcell/accessorytype-swift.enum/disclosureindicator).

![Uma ilustração de uma lista agrupada de linhas. Cada item da lista inclui um botão de informações na extremidade final da linha.](../../../images/lists-and-tables/info-button-in-list@2x.png) ![Uma ilustração de uma lista agrupada de linhas. Cada item da lista inclui um botão de informações na extremidade final da linha. (escuro)](../../../images/lists-and-tables/info-button-in-list~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/info-button-in-list@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/info-button-in-list~dark@2x.png)*

![Uma ilustração de uma lista agrupada de linhas. Cada item da lista inclui uma divisa apontando para a direita na extremidade final da linha.](../../../images/lists-and-tables/disclosure-indicator-in-list@2x.png) ![Uma ilustração de uma lista agrupada de linhas. Cada item da lista inclui uma divisa apontando para a direita na extremidade final da linha. (escuro)](../../../images/lists-and-tables/disclosure-indicator-in-list~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/disclosure-indicator-in-list@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/disclosure-indicator-in-list~dark@2x.png)*

**Evite adicionar um índice a uma tabela que exibe controles — como indicadores de divulgação — nas extremidades finais de suas linhas.** Um *índice* normalmente consiste nas letras de um alfabeto, exibidas verticalmente no lado final de uma lista. As pessoas podem ir direto a uma seção específica da lista escolhendo a letra do índice correspondente. Como tanto o índice quanto elementos como os indicadores de divulgação aparecem no lado final de uma lista, pode ser difícil para as pessoas usar um elemento sem ativar o outro.

### macOS

**Quando agregar valor, deixe as pessoas clicarem no título de uma coluna para ordenar uma visualização de tabela com base nessa coluna**. Se as pessoas clicarem no título de uma coluna que já está ordenada, reordene os dados na direção oposta.

**Deixe as pessoas redimensionarem as colunas.** Os dados exibidos em uma visualização de tabela costumam variar em largura. As pessoas gostam de redimensionar colunas para se concentrar em diferentes áreas ou revelar dados cortados.

**Considere usar cores de linha alternadas em uma tabela de várias colunas.** Cores alternadas podem ajudar as pessoas a acompanhar os valores de uma linha ao longo das colunas, especialmente em uma tabela larga.

**Use uma visualização em estrutura de tópicos em vez de uma visualização de tabela para apresentar dados hierárquicos.** Uma [visualização em estrutura de tópicos](https://developer.apple.com/design/human-interface-guidelines/outline-views) se parece com uma visualização de tabela, mas inclui triângulos de divulgação para expor níveis aninhados de dados. Por exemplo, uma visualização em estrutura de tópicos pode exibir pastas e os itens que elas contêm.

### tvOS

**Confirme que as imagens próximas a uma tabela continuam boas conforme cada linha é destacada e aumenta ligeiramente de tamanho ao receber foco.** Os cantos de uma linha com foco também podem ficar arredondados, o que pode afetar a aparência das imagens de cada lado dela. Leve esse efeito em conta ao preparar as imagens e não adicione suas próprias máscaras para arredondar os cantos.

### watchOS

**Sempre que possível, limite o número de linhas.** Listas curtas são mais fáceis de percorrer, mas às vezes as pessoas esperam uma lista longa de itens. Por exemplo, se as pessoas assinam um grande número de podcasts, podem achar que há algo errado se não conseguirem ver todos os seus itens. Você pode ajudar a tornar uma lista longa mais gerenciável listando os itens mais relevantes e oferecendo uma forma de as pessoas verem mais.

**Limite o comprimento das visualizações de detalhes se quiser oferecer suporte à navegação vertical baseada em páginas.** As pessoas usam a navegação vertical baseada em páginas para deslizar verticalmente entre os itens de detalhes de diferentes linhas de lista. Navegar dessa forma economiza tempo porque as pessoas não precisam voltar à lista para tocar em um novo item de detalhes, mas só funciona quando as visualizações de detalhes são curtas. Se suas visualizações de detalhes rolarem, as pessoas não poderão usar a navegação vertical baseada em páginas para deslizar entre elas.

## Recursos

#### Relacionados

[Coleções](https://developer.apple.com/design/human-interface-guidelines/collections)

[Visualizações em estrutura de tópicos](https://developer.apple.com/design/human-interface-guidelines/outline-views)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Documentação para desenvolvedores

[List](https://developer.apple.com/documentation/swiftui/list) — SwiftUI

[Tables](https://developer.apple.com/documentation/swiftui/tables) — SwiftUI

[UITableView](https://developer.apple.com/documentation/uikit/uitableview) — UIKit

[NSTableView](https://developer.apple.com/documentation/appkit/nstableview) — AppKit

#### Vídeos

- [Stacks, Grids, and Outlines in SwiftUI](https://developer.apple.com/videos/play/wwdc2020/10031)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
| 5 de junho de 2023 | Orientações atualizadas para refletir as mudanças no watchOS 10. |
