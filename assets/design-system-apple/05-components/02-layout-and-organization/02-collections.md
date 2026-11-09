# Coleções (Collections)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/collections
>
> Plataformas: ios,ipados,macos,tvos,visionos

*Uma coleção gerencia um conjunto ordenado de conteúdo e o apresenta em um layout personalizável e altamente visual.*

![Uma representação estilizada de oito ícones de imagem, separados em duas fileiras de quatro. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores.](../../../images/collections/components-collection-view-intro@2x.png) ![Uma representação estilizada de oito ícones de imagem, separados em duas fileiras de quatro. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/collections/components-collection-view-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-collection-view-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-collection-view-intro~dark@2x.png)*

De modo geral, as coleções são ideais para mostrar conteúdo baseado em imagens.

## Boas práticas

**Use o layout padrão em linha ou em grade sempre que possível.** Por padrão, as coleções exibem o conteúdo em uma linha horizontal ou em uma grade, que são aparências simples e eficazes, e que as pessoas esperam. Evite criar um layout personalizado que possa confundir as pessoas ou chamar atenção excessiva para si mesmo.

**Considere usar uma tabela em vez de uma coleção para texto.** Em geral, é mais simples e eficiente visualizar e assimilar informações textuais quando elas são exibidas em uma lista rolável.

**Facilite a escolha de um item.** Se for difícil demais chegar a um item da sua coleção, as pessoas ficarão frustradas e perderão o interesse antes de chegar ao conteúdo que desejam. Use espaçamento adequado ao redor das imagens para manter os efeitos de foco ou de passar o cursor fáceis de ver e evitar que o conteúdo se sobreponha.

**Adicione interações personalizadas quando necessário.** Por padrão, as pessoas podem tocar para selecionar, tocar e manter pressionado para editar e deslizar para rolar. Se o seu app precisar, você pode adicionar mais gestos para executar ações personalizadas.

**Considere usar animações para dar feedback quando as pessoas inserirem, excluírem ou reordenarem itens.** As coleções oferecem suporte a animações padrão para essas ações, e você também pode usar animações personalizadas.

## Considerações por plataforma

*Sem considerações adicionais para macOS, tvOS ou visionOS. Não compatível com watchOS.*

### iOS, iPadOS

**Tenha cuidado ao fazer mudanças dinâmicas de layout.** O layout de uma coleção pode mudar dinamicamente. Certifique-se de que qualquer mudança faça sentido e seja fácil de acompanhar. Se possível, evite mudar o layout enquanto as pessoas o estão visualizando e interagindo com ele, a menos que seja em resposta a uma ação explícita.

## Recursos

#### Relacionados

[Listas e tabelas](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

[Visualizações de imagem](https://developer.apple.com/design/human-interface-guidelines/image-views)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Documentação para desenvolvedores

[UICollectionView](https://developer.apple.com/documentation/uikit/uicollectionview) — UIKit

[NSCollectionView](https://developer.apple.com/documentation/appkit/nscollectionview) — AppKit
