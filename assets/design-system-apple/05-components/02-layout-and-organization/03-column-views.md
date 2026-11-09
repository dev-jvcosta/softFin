# Visualizações em colunas (Column views)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/column-views
>
> Plataformas: macos

*Uma visualização em colunas — também chamada de *browser* — permite que as pessoas vejam e naveguem por uma hierarquia de dados usando uma série de colunas verticais.*

![Uma representação estilizada de três colunas contendo uma lista de pastas, imagens e informações de arquivo. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/column-views/components-column-view-intro@2x.png) ![Uma representação estilizada de três colunas contendo uma lista de pastas, imagens e informações de arquivo. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/column-views/components-column-view-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-column-view-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-column-view-intro~dark@2x.png)*

Cada coluna representa um nível da hierarquia e contém linhas horizontais de itens de dados. Dentro de uma coluna, qualquer item pai que contenha itens filhos aninhados é marcado com um ícone de triângulo. Quando as pessoas selecionam um item pai, a coluna seguinte exibe seus filhos. As pessoas podem continuar navegando dessa forma até chegar a um item sem filhos e também podem voltar na hierarquia para explorar outros ramos de dados.

> **Observação:** Se você precisar gerenciar a apresentação de conteúdo hierárquico no seu app para iPadOS ou visionOS, considere usar uma [visualização dividida](https://developer.apple.com/design/human-interface-guidelines/split-views).

## Boas práticas

Considere usar uma visualização em colunas quando você tiver uma hierarquia de dados profunda na qual as pessoas costumam navegar com frequência para frente e para trás entre os níveis e você não precisar dos recursos de ordenação que uma [lista ou tabela](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables) oferece. Por exemplo, o Finder oferece uma visualização em colunas (além das visualizações em ícones, lista e galeria) para navegar por estruturas de diretórios.

**Mostre o nível raiz da sua hierarquia de dados na primeira coluna.** As pessoas sabem que podem rolar rapidamente de volta à primeira coluna para começar a navegar pela hierarquia novamente a partir do topo.

**Considere mostrar informações sobre o item selecionado quando não houver itens aninhados para exibir.** O Finder, por exemplo, mostra uma pré-visualização do item selecionado e informações como data de criação, data de modificação, tipo de arquivo e tamanho.

**Permita que as pessoas redimensionem as colunas.** Isso é especialmente importante se os nomes de alguns itens de dados forem longos demais para caber na largura padrão da coluna.

## Considerações por plataforma

*Não é compatível com iOS, iPadOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Listas e tabelas](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

[Visualizações em estrutura de tópicos](https://developer.apple.com/design/human-interface-guidelines/outline-views)

[Visualizações divididas](https://developer.apple.com/design/human-interface-guidelines/split-views)

#### Documentação para desenvolvedores

[NSBrowser](https://developer.apple.com/documentation/appkit/nsbrowser) — AppKit
