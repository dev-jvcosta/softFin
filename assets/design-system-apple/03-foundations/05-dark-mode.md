# Dark Mode

> Fonte: https://developer.apple.com/design/human-interface-guidelines/dark-mode
>
> Plataformas: ios,ipados,macos,tvos

*O Dark Mode é uma configuração de aparência em todo o sistema que usa uma paleta de cores escuras para oferecer uma experiência de visualização confortável, pensada para ambientes com pouca luz.*

![Um esboço de círculos concêntricos com áreas semipreenchidas, sugerindo a presença de luz e escuridão. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo que reflete sutilmente o amarelo do logotipo original da Apple, de seis cores.](../../images/dark-mode/foundations-dark-mode-intro@2x.png) ![Um esboço de círculos concêntricos com áreas semipreenchidas, sugerindo a presença de luz e escuridão. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo que reflete sutilmente o amarelo do logotipo original da Apple, de seis cores. (escuro)](../../images/dark-mode/foundations-dark-mode-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-dark-mode-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-dark-mode-intro~dark@2x.png)*

No iOS, iPadOS, macOS e tvOS, as pessoas costumam escolher o Dark Mode como estilo de interface padrão e, em geral, esperam que todos os apps e jogos respeitem essa preferência. No Dark Mode, o sistema usa uma paleta de cores escuras em todas as telas, visualizações, menus e controles e também pode usar maior contraste perceptivo para destacar o conteúdo em primeiro plano contra os fundos mais escuros.

## Boas práticas

**Evite oferecer uma configuração de aparência específica do app.** Uma opção de modo de aparência específica do app dá mais trabalho às pessoas, porque elas precisam ajustar mais de uma configuração para obter a aparência desejada. Pior ainda, elas podem achar que seu app está com defeito porque ele não responde à escolha de aparência feita em todo o sistema.

**Garanta que seu app tenha boa aparência nos dois modos de aparência.** Além de usar um modo ou outro, as pessoas podem escolher a configuração de aparência Automática, que alterna entre as aparências clara e escura conforme as condições mudam ao longo do dia, possivelmente enquanto seu app está em execução.

**Teste seu conteúdo para garantir que ele continue confortavelmente legível nos dois modos de aparência.** Por exemplo, no Dark Mode com Aumentar Contraste e Reduzir Transparência ativados (separadamente e em conjunto), você pode encontrar lugares em que o texto escuro fica menos legível sobre um fundo escuro. Você também pode descobrir que ativar Aumentar Contraste no Dark Mode pode resultar em menor contraste visual entre o texto escuro e o fundo escuro. Embora pessoas com boa visão ainda possam conseguir ler texto de menor contraste, esse texto pode ser ilegível para muitas outras. Para obter orientações, consulte [Acessibilidade](https://developer.apple.com/design/human-interface-guidelines/accessibility).

**Em casos raros, considere usar somente uma aparência escura na interface.** Por exemplo, pode fazer sentido que um app que oferece visualização de mídia imersiva use uma aparência permanentemente escura, que deixa a interface em segundo plano e ajuda as pessoas a se concentrarem na mídia.

![Uma captura de tela do app Bolsa no iPhone em sua aparência padrão exclusivamente escura, mostrando em detalhe as ações da Apple Inc. A visualização inclui um resumo do preço atual da ação, junto com um gráfico de seu desempenho no último ano.](../../images/dark-mode/dark-mode-stocks-app-dark-only-mode@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/dark-mode-stocks-app-dark-only-mode@2x.png)*

## Cores do Dark Mode

A paleta de cores do Dark Mode inclui cores de fundo mais escuras e cores de primeiro plano mais brilhantes. É importante perceber que essas cores não são necessariamente inversões de suas equivalentes claras: embora muitas cores sejam invertidas, algumas não são. Para mais informações, consulte [Especificações](https://developer.apple.com/design/human-interface-guidelines/color#Specifications).

**Adote cores que se adaptam à aparência atual.** As cores semânticas (como [labelColor](https://developer.apple.com/documentation/appkit/nscolor/labelcolor) e [controlColor](https://developer.apple.com/documentation/appkit/nscolor/controlcolor) no macOS ou [separator](https://developer.apple.com/documentation/uikit/uicolor/separator) no iOS e iPadOS) se adaptam automaticamente à aparência atual. Quando precisar de uma cor personalizada, adicione um recurso Color Set ao catálogo de recursos do seu app no Xcode e especifique as variantes clara e escura da cor. Evite usar valores de cor fixos no código ou cores que não se adaptam.

![Uma ilustração de um quadrado com fundo claro e quatro amostras de cor representando cores do sistema na aparência clara.](../../images/dark-mode/dark-mode-system-colors-light@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/dark-mode-system-colors-light@2x.png)*

![Uma ilustração de um quadrado com fundo escuro e quatro amostras de cor representando cores do sistema na aparência escura.](../../images/dark-mode/dark-mode-system-colors-dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/dark-mode-system-colors-dark@2x.png)*

**Busque contraste de cor suficiente em todas as aparências.** Usar cores definidas pelo sistema pode ajudar você a obter uma boa taxa de contraste entre o conteúdo de primeiro plano e o de fundo. No mínimo, garanta que a taxa de contraste entre as cores não seja inferior a 4,5:1. Para cores personalizadas de primeiro plano e de fundo, procure atingir uma taxa de contraste de 7:1, especialmente em textos pequenos. Essa taxa garante que o conteúdo em primeiro plano se destaque do fundo e ajuda seu conteúdo a atender às diretrizes de acessibilidade recomendadas.

**Suavize a cor dos fundos brancos.** Se você exibir uma imagem de conteúdo que inclui um fundo branco, considere escurecer levemente a imagem para evitar que o fundo brilhe no contexto circundante do Dark Mode.

### Ícones e imagens

O sistema usa [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) (que se adaptam automaticamente ao Dark Mode) e imagens em cores otimizadas para as aparências clara e escura.

**Use SF Symbols sempre que possível.** Os símbolos funcionam bem nos dois modos de aparência quando você usa cores dinâmicas para tingi-los ou quando adiciona vibrancy. Para obter orientações, consulte [Cor](https://developer.apple.com/design/human-interface-guidelines/color).

**Projete ícones de interface separados para as aparências clara e escura, se necessário.** Por exemplo, um ícone que representa uma lua cheia pode precisar de um contorno escuro sutil para contrastar bem com um fundo claro, mas não precisar de contorno quando exibido sobre um fundo escuro. Da mesma forma, um ícone que representa uma gota de óleo pode precisar de uma borda leve para tornar a extremidade visível contra um fundo escuro.

![Uma ilustração de um ícone de gota preta sobre um fundo claro.](../../images/dark-mode/dark-mode-icon-in-light-mode@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/dark-mode-icon-in-light-mode@2x.png)*

![Uma ilustração de um ícone de gota preta sobre um fundo escuro. O ícone tem uma borda branca para distingui-lo da cor semelhante ao redor.](../../images/dark-mode/dark-mode-icon-in-dark-mode@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/dark-mode-icon-in-dark-mode@2x.png)*

**Garanta que imagens e ícones em cores tenham boa aparência nas duas aparências.** Use o mesmo recurso se ele ficar bem nas aparências clara e escura. Se um recurso ficar bom em apenas um modo, modifique-o ou crie recursos separados para o claro e o escuro. Use catálogos de recursos para combinar seus recursos em uma única imagem nomeada.

![Uma ilustração de duas pessoas sentadas à mesa de um restaurante, feita em um estilo simples e abstrato. A ilustração tem um fundo claro e seus detalhes são claramente visíveis.](../../images/dark-mode/dark-mode-illustration-in-light-mode@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/dark-mode-illustration-in-light-mode@2x.png)*

![Uma ilustração de duas pessoas sentadas à mesa de um restaurante, feita em um estilo simples e abstrato. A ilustração tem um fundo escuro, e as partes mais escuras da imagem são difíceis de distinguir do fundo.](../../images/dark-mode/dark-mode-illustration-in-dark-mode-incorrect@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/dark-mode-illustration-in-dark-mode-incorrect@2x.png)*

![Uma ilustração de duas pessoas sentadas à mesa de um restaurante, feita em um estilo simples e abstrato. A ilustração tem um fundo escuro, e seus valores de cor são ajustados para ficarem claramente visíveis em contraste com o fundo.](../../images/dark-mode/dark-mode-illustration-in-dark-mode-correct@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/dark-mode-illustration-in-dark-mode-correct@2x.png)*

### Texto

O sistema usa vibrancy e contraste aumentado para manter a legibilidade do texto sobre fundos mais escuros.

**Use as cores de rótulo fornecidas pelo sistema para rótulos.** As cores de rótulo primária, secundária, terciária e quaternária se adaptam automaticamente às aparências clara e escura.

![Uma ilustração de um botão na aparência clara com texto de rótulo primário escuro.](../../images/dark-mode/dark-mode-label-in-light-mode@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/dark-mode-label-in-light-mode@2x.png)*

![Uma ilustração de um botão na aparência escura com texto de rótulo secundário claro.](../../images/dark-mode/dark-mode-label-in-dark-mode@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/dark-mode-label-in-dark-mode@2x.png)*

**Use visualizações do sistema para desenhar campos de texto e visualizações de texto.** As visualizações e os controles do sistema fazem o texto do seu app ficar bem em todos os fundos, ajustando-se automaticamente à presença ou ausência de vibrancy. Quando possível, use uma visualização fornecida pelo sistema para exibir texto em vez de desenhá-lo você mesmo.

## Considerações por plataforma

*Nenhuma consideração adicional para o tvOS. O Dark Mode não é compatível com o visionOS nem com o watchOS.*

### iOS, iPadOS

No Dark Mode, o sistema usa dois conjuntos de cores de fundo — chamados *base* e *elevated* — para reforçar a percepção de profundidade quando uma interface escura é sobreposta a outra. As cores base são mais escuras, fazendo as interfaces de fundo parecerem recuar, e as cores elevated são mais claras, fazendo as interfaces em primeiro plano parecerem avançar.

![Um diagrama que mostra uma pilha de 4 termos sobre um fundo preto. O termo no topo mostra o maior contraste com o fundo e o termo na base mostra o menor.](../../images/dark-mode/base-with-four-semantic-colors@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/base-with-four-semantic-colors@2x.png)*

![Um diagrama que mostra uma pilha de 4 termos sobre um fundo quase preto. O termo no topo mostra o maior contraste com o fundo e o termo na base mostra o menor.](../../images/dark-mode/elevated-with-four-semantic-colors@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/elevated-with-four-semantic-colors@2x.png)*

![Um diagrama que mostra uma pilha de 4 termos sobre um fundo branco. O termo no topo mostra o maior contraste com o fundo e o termo na base mostra o menor.](../../images/dark-mode/light-with-four-semantic-colors@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/light-with-four-semantic-colors@2x.png)*

**Prefira as cores de fundo do sistema.** O Dark Mode é dinâmico, o que significa que a cor de fundo muda automaticamente de base para elevated quando uma interface está em primeiro plano, como um popover ou uma folha modal. O sistema também usa a cor de fundo elevated para criar separação visual entre apps em um ambiente de multitarefa e entre janelas em um contexto de várias janelas. Usar uma cor de fundo personalizada pode dificultar a percepção dessas distinções visuais fornecidas pelo sistema.

### macOS

Quando as pessoas escolhem a cor de destaque grafite nos ajustes Geral, o macOS faz os fundos das janelas absorverem a cor da imagem atual da mesa. O resultado — chamado de *desktop tinting* — é um efeito sutil que ajuda as janelas a se misturarem de forma mais harmoniosa ao conteúdo ao redor.

**Inclua alguma transparência nos fundos de componentes personalizados quando apropriado.** A transparência permite que seus componentes absorvam a cor do fundo da janela quando o desktop tinting está ativo, criando uma harmonia visual que pode persistir mesmo quando a imagem da mesa muda. Para ajudar a obter essa harmonia, adicione transparência apenas a um componente personalizado que tenha um fundo ou moldura visível, e somente quando o componente estiver em um estado neutro, como um estado que não usa cor. Você não deve adicionar transparência quando o componente estiver em um estado que usa cor, porque isso pode fazer a cor do componente oscilar quando o fundo da janela se ajusta a um local diferente da mesa ou quando a imagem da mesa muda.

## Recursos

#### Relacionados

[Cor](https://developer.apple.com/design/human-interface-guidelines/color)

[Materiais](https://developer.apple.com/design/human-interface-guidelines/materials)

[Tipografia](https://developer.apple.com/design/human-interface-guidelines/typography)

#### Vídeos

- [Conheça o Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219)
- [Implementando o Dark Mode no iOS](https://developer.apple.com/videos/play/wwdc2019/214)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 6 de agosto de 2024 | Adicionadas imagens que contrastam as aparências clara e escura. |
