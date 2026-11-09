# Visualizações em estrutura de tópicos (Outline views)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/outline-views
>
> Plataformas: macos

*Uma visualização em estrutura de tópicos apresenta dados hierárquicos em uma lista rolável de células organizadas em colunas e linhas.*

![Representação estilizada de uma lista de pastas e imagens, exibida em uma visualização em estrutura de tópicos com quatro colunas: (Nome), (Data de modificação), (Tamanho) e (Tipo). A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/outline-views/components-outline-view-intro@2x.png) ![Representação estilizada de uma lista de pastas e imagens, exibida em uma visualização em estrutura de tópicos com quatro colunas: (Nome), (Data de modificação), (Tamanho) e (Tipo). A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/outline-views/components-outline-view-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-outline-view-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-outline-view-intro~dark@2x.png)*

Uma visualização em estrutura de tópicos inclui pelo menos uma coluna que contém os dados hierárquicos principais, como um conjunto de contêineres pai e seus filhos. Você pode adicionar colunas, conforme necessário, para exibir atributos que complementam os dados principais; por exemplo, tamanhos e datas de modificação. Os contêineres pai têm triângulos de divulgação que se expandem para revelar seus filhos.

As janelas do Finder oferecem uma visualização em estrutura de tópicos para navegar pelo sistema de arquivos.

## Boas práticas

As visualizações em estrutura de tópicos funcionam bem para exibir conteúdo baseado em texto e frequentemente aparecem no lado inicial de uma [visualização dividida](https://developer.apple.com/design/human-interface-guidelines/split-views), com o conteúdo relacionado no lado oposto.

**Use uma tabela em vez de uma visualização em estrutura de tópicos para apresentar dados que não sejam hierárquicos.** Para orientações, consulte [Listas e tabelas](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables).

**Exponha a hierarquia dos dados somente na primeira coluna.** As outras colunas podem exibir atributos que se aplicam aos dados hierárquicos da coluna principal.

**Use títulos de coluna descritivos para fornecer contexto.** Use substantivos ou locuções nominais curtas, com [capitalização no estilo de título](https://help.apple.com/applestyleguide/#/apsgb744e4a3?sub=apdca93e113f1d64) e sem pontuação; em particular, evite adicionar dois-pontos no final. Sempre forneça títulos de coluna em uma visualização em estrutura de tópicos com várias colunas. Se você não incluir um título de coluna em uma visualização de coluna única, use um rótulo ou outro meio para garantir que haja contexto suficiente.

**Considere permitir que as pessoas cliquem nos títulos de coluna para ordenar uma visualização em estrutura de tópicos.** Em uma visualização ordenável, as pessoas podem clicar no título de uma coluna para fazer uma ordenação crescente ou decrescente com base nela. Se necessário, você pode implementar ordenações adicionais com base em colunas secundárias nos bastidores. Se as pessoas clicarem no título da coluna principal, a ordenação ocorre em cada nível da hierarquia. Por exemplo, no Finder, todas as pastas de nível superior são ordenadas e, em seguida, os itens dentro de cada pasta são ordenados. Se as pessoas clicarem no título de uma coluna que já está ordenada, as pastas e seus conteúdos são ordenados novamente na direção oposta.

**Permita que as pessoas redimensionem as colunas.** Os dados exibidos em uma visualização em estrutura de tópicos costumam variar em largura. É importante permitir que as pessoas ajustem a largura das colunas conforme necessário para revelar dados mais largos que a coluna.

**Facilite a expansão e o recolhimento de contêineres aninhados.** Por exemplo, clicar no triângulo de divulgação de uma pasta em uma janela do Finder expande apenas essa pasta. Já clicar no triângulo de divulgação com a tecla Option pressionada expande todas as suas subpastas.

**Mantenha as escolhas de expansão das pessoas.** Se as pessoas expandirem vários níveis de uma visualização em estrutura de tópicos para chegar a um item específico, armazene o estado para poder exibi-lo novamente da próxima vez. Dessa forma, as pessoas não precisarão navegar de volta ao mesmo lugar.

**Considere usar cores de linha alternadas em visualizações em estrutura de tópicos com várias colunas.** Cores alternadas podem facilitar o acompanhamento dos valores de uma linha entre as colunas, especialmente em visualizações largas.

**Permita que as pessoas editem os dados, se fizer sentido no seu app.** Em uma célula editável de uma visualização em estrutura de tópicos, as pessoas esperam poder clicar uma vez na célula para editar seu conteúdo. Observe que uma célula pode responder de forma diferente a um clique duplo. Por exemplo, uma visualização que lista arquivos pode permitir que as pessoas cliquem uma vez no nome de um arquivo para editá-lo, mas cliquem duas vezes no nome para abrir o arquivo. Você também pode permitir que as pessoas reordenem, adicionem e removam linhas, se isso for útil.

**Considere usar reticências centralizadas para truncar o texto das células em vez de cortá-lo.** Reticências no meio preservam o início e o fim do texto da célula, o que pode tornar o conteúdo mais distinto e reconhecível do que um texto cortado.

**Considere oferecer um campo de busca para ajudar as pessoas a encontrar valores rapidamente em uma visualização em estrutura de tópicos extensa.** Janelas que têm uma visualização em estrutura de tópicos como recurso principal frequentemente incluem um campo de busca na barra de ferramentas. Para orientações, consulte [Campos de busca](https://developer.apple.com/design/human-interface-guidelines/search-fields).

## Considerações por plataforma

*Não compatível com iOS, iPadOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Visualizações em colunas](https://developer.apple.com/design/human-interface-guidelines/column-views)

[Listas e tabelas](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

[Visualizações divididas](https://developer.apple.com/design/human-interface-guidelines/split-views)

#### Documentação para desenvolvedores

[OutlineGroup](https://developer.apple.com/documentation/swiftui/outlinegroup) — SwiftUI

[NSOutlineView](https://developer.apple.com/documentation/appkit/nsoutlineview) — AppKit

#### Vídeos

- [Stacks, Grids, and Outlines in SwiftUI](https://developer.apple.com/videos/play/wwdc2020/10031)
