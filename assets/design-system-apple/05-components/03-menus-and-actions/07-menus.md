# Menus

> Fonte: https://developer.apple.com/design/human-interface-guidelines/menus
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um menu revela suas opções quando as pessoas interagem com ele, sendo uma forma econômica em espaço de apresentar comandos no seu app ou jogo.*

![Uma representação estilizada de um menu contendo um item selecionado e exibindo um submenu. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores.](../../../images/menus/components-menus-intro@2x.png) ![Uma representação estilizada de um menu contendo um item selecionado e exibindo um submenu. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores. (escuro)](../../../images/menus/components-menus-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-menus-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-menus-intro~dark@2x.png)*

Os menus são onipresentes em apps e jogos, então a maioria das pessoas já sabe usá-los. Sejam componentes fornecidos pelo sistema ou personalizados, as pessoas esperam que os menus se comportem de maneiras familiares. Por exemplo, as pessoas entendem que abrir um menu revela um ou mais *itens de menu*, cada um representando um comando, uma opção ou um estado que afeta a seleção ou o contexto atual. As orientações para nomear e organizar itens de menu se aplicam a todos os tipos de menus em todas as experiências.

> **Observação:** Vários componentes fornecidos pelo sistema também incluem menus que atendem a casos de uso específicos. Por exemplo, um [botão pop-up](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons) ou um [botão suspenso](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons) pode revelar um menu de opções diretamente relacionadas à sua ação; um [menu de contexto](https://developer.apple.com/design/human-interface-guidelines/context-menus) permite que as pessoas acessem um pequeno número de ações usadas com frequência e relevantes para a visualização ou tarefa atual; e, no macOS e no iPadOS, os menus da [barra de menus](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar) contêm todos os comandos que as pessoas podem executar no app ou jogo.

## Rótulos

O rótulo de um item de menu descreve o que ele faz e pode incluir um símbolo se isso ajudar a esclarecer o significado. Em um app, um item de menu também pode exibir o comando de teclado associado, se houver; em um jogo, um item de menu raramente exibe um comando de teclado, porque um jogo normalmente precisa lidar com entradas de uma variedade maior de dispositivos e pode oferecer mapeamentos específicos do jogo para várias teclas.

> **Observação:** Dependendo do layout do menu, um app para iOS, iPadOS ou visionOS pode exibir alguns itens de menu sem rótulo, que usam apenas símbolos ou ícones para identificá-los. Para orientações, consulte [visionOS](https://developer.apple.com/design/human-interface-guidelines/menus#visionOS) e [iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/menus#iOS-iPadOS).

**Para cada item de menu, escreva um rótulo que o descreva de forma clara e sucinta.** Em geral, nomeie um item de menu que inicia uma ação usando um verbo ou locução verbal que descreva a ação, como Visualizar, Fechar ou Selecionar. Para orientações sobre como nomear itens de menu que mostram e ocultam algo na interface ou que mostram o estado atualmente selecionado de algo, consulte [Itens alternáveis](https://developer.apple.com/design/human-interface-guidelines/menus#Toggled-items). Como em todo texto que você escreve, deixe que o estilo de comunicação do seu app ou jogo guie o tom dos rótulos de itens de menu que você criar.

**Para manter a consistência com as experiências da plataforma, use capitalização no estilo de título.** Embora um jogo possa ter um estilo de escrita diferente, em geral prefira usar a capitalização no estilo de título, que coloca em maiúscula todas as palavras, exceto artigos, conjunções coordenativas e preposições curtas, e coloca em maiúscula a última palavra do rótulo, independentemente da classe gramatical. Para orientações completas sobre esse estilo de capitalização em inglês, consulte [title-style capitalization](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64).

**Remova artigos como *a*, *an* e *the* dos rótulos de itens de menu para economizar espaço.** Em inglês, os artigos sempre alongam os rótulos, mas raramente melhoram a compreensão. Por exemplo, mudar o rótulo de um item de menu de View Settings para View the Settings não oferece nenhum esclarecimento adicional.

**Mostre às pessoas quando um item de menu estiver indisponível.** Um item de menu indisponível costuma aparecer esmaecido e não responde a interações. Se todos os itens de um menu estiverem indisponíveis, o próprio menu precisa permanecer disponível para que as pessoas possam abri-lo e conhecer os comandos que ele contém.

**Acrescente reticências ao rótulo de um item de menu quando a ação exigir mais informações antes de ser concluída.** O caractere de reticências (…) sinaliza que as pessoas precisam informar dados ou fazer escolhas adicionais, normalmente em outra visualização.

## Ícones

**Represente ações comuns de forma consistente.** O sistema oferece ícones padrão para representar ações comuns como Compartilhar, Imprimir e Buscar. Usar ícones padrão torna seu app mais fácil de usar e mais familiar. Para uma lista de ícones que representam ações comuns, consulte [Ícones padrão](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons).

**Use ícones em itens de menu com moderação e com propósito.** Os ícones permitem que as pessoas encontrem itens de menu mais rapidamente e ajudam a esclarecer o que a seleção de um item faz. Use um ícone para destacar as ações mais comuns e os principais recursos do seu app, locais do sistema de arquivos, dispositivos conectados, conceitos visuais como girar ou inverter uma imagem e conteúdo gerado pelo usuário, como pastas e documentos. Não exiba um ícone se não encontrar um que represente claramente o item de menu.

![Uma ilustração de um menu contendo os dias da semana. Cada item de menu é representado por um símbolo diferente, sem relação com o dia correspondente.](../../../images/menus/menus-days-of-the-week-incorrect-icons@2x.png) ![Uma ilustração de um menu contendo os dias da semana. Cada item de menu é representado por um símbolo diferente, sem relação com o dia correspondente. (escuro)](../../../images/menus/menus-days-of-the-week-incorrect-icons~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/menus-days-of-the-week-incorrect-icons@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/menus-days-of-the-week-incorrect-icons~dark@2x.png)*

![Um X dentro de um círculo para indicar o uso incorreto.](../../../images/menus/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de um menu contendo os dias da semana sem símbolos acompanhando.](../../../images/menus/menus-days-of-the-week-correct-no-icons@2x.png) ![Uma ilustração de um menu contendo os dias da semana sem símbolos acompanhando. (escuro)](../../../images/menus/menus-days-of-the-week-correct-no-icons~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/menus-days-of-the-week-correct-no-icons@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/menus-days-of-the-week-correct-no-icons~dark@2x.png)*

![Uma marca de seleção dentro de um círculo para indicar o uso correto.](../../../images/menus/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Aplique um tratamento visual uniforme aos itens de menu do mesmo grupo.** Para manter a consistência e o equilíbrio visual, forneça ícones para todos os itens de menu de um grupo ou para nenhum deles.

![Uma ilustração de um menu contendo dois grupos. O grupo superior contém quatro itens, e nenhum deles tem um ícone correspondente. O grupo inferior contém dois itens, e cada um deles tem um ícone.](../../../images/menus/menus-groups-visual-treatment@2x.png) ![Uma ilustração de um menu contendo dois grupos. O grupo superior contém quatro itens, e nenhum deles tem um ícone correspondente. O grupo inferior contém dois itens, e cada um deles tem um ícone. (escuro)](../../../images/menus/menus-groups-visual-treatment~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/menus-groups-visual-treatment@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/menus-groups-visual-treatment~dark@2x.png)*

## Organização

Organizar os itens de menu de maneiras que reflitam como as pessoas usam seu app ou jogo pode fazer com que a experiência pareça direta e fácil de usar.

**Prefira listar primeiro os itens de menu importantes ou usados com frequência.** As pessoas tendem a começar a percorrer um menu pelo topo, então listar primeiro os itens de alta prioridade muitas vezes significa que elas encontram o que querem sem ler o menu inteiro.

**Considere agrupar itens logicamente relacionados.** Por exemplo, agrupar comandos de edição como Copiar, Recortar e Colar, ou comandos de câmera como Olhar para cima, Olhar para baixo e Olhar para a esquerda, pode ajudar as pessoas a se lembrar de onde encontrá-los. Para ajudar as pessoas a distinguir visualmente esses grupos, use um separador. Dependendo da plataforma e do tipo de menu, um *separador* aparece entre grupos de itens como uma linha horizontal ou um pequeno intervalo na aparência de fundo do menu.

**Prefira manter todos os comandos logicamente relacionados no mesmo grupo, mesmo que nem todos tenham a mesma importância.** Por exemplo, as pessoas geralmente usam Colar e Corresponder Estilo com muito menos frequência do que usam Colar, mas esperam encontrar ambos os comandos no mesmo grupo que contém comandos de edição usados com mais frequência, como Copiar e Recortar.

**Atenção ao tamanho do menu.** As pessoas precisam de mais tempo e atenção para ler um menu longo, o que significa que podem não ver o comando que querem. Se um menu for muito longo, considere dividi-lo em menus separados. Como alternativa, você pode usar um submenu para encurtar a lista, como listar níveis de dificuldade em um submenu de um item de menu Novo Jogo. A exceção é quando um menu contém conteúdo definido pelo usuário ou gerado dinamicamente, como os menus Histórico e Favoritos do Safari. As pessoas esperam que esse tipo de menu acomode todos os itens que adicionam a ele, então um menu longo é aceitável, assim como a rolagem.

## Submenus

Às vezes, um item de menu pode revelar um conjunto de itens intimamente relacionados em uma lista subordinada chamada *submenu*. Um item de menu indica a presença de um submenu exibindo um símbolo, como um chevron, após seu rótulo. Os submenus são funcionalmente idênticos aos menus, exceto por sua posição hierárquica.

**Use submenus com moderação.** Cada submenu acrescenta complexidade à interface e oculta os itens que contém. Você pode considerar criar um submenu quando um termo aparece em mais de dois itens de menu do mesmo grupo. Por exemplo, em vez de oferecer itens de menu separados para Ordenar por Data, Ordenar por Pontuação e Ordenar por Tempo, um jogo poderia apresentar um item de menu que usa um submenu para listar as opções de ordenação Data, Pontuação e Tempo. Geralmente funciona bem usar o termo repetido (neste caso, *Ordenar por*) no rótulo do item de menu para ajudar as pessoas a prever o conteúdo do submenu.

**Limite a profundidade e o comprimento dos submenus.** Pode ser difícil para as pessoas revelar vários níveis de submenus hierárquicos, então geralmente é melhor restringi-los a um único nível. Além disso, se um submenu contiver mais de cerca de cinco itens, considere criar um novo menu.

**Garanta que um submenu permaneça disponível mesmo quando seus itens de menu aninhados estiverem indisponíveis.** Um item de submenu, como todos os itens de menu, precisa permitir que as pessoas o abram e conheçam os comandos que ele contém.

**Prefira usar um submenu a recuar itens de menu.** Usar recuo é inconsistente com o sistema e não expressa claramente as relações entre os itens de menu.

## Itens alternáveis

Os itens de menu frequentemente representam atributos ou objetos que as pessoas podem ativar ou desativar. Se você quiser evitar listar um item de menu separado para cada estado, pode ser eficiente criar um único item de menu alternável que comunique o estado atual e permita que as pessoas o alterem.

![Uma ilustração de um menu contendo quatro itens, com um ícone de marca de seleção na borda inicial do segundo item.](../../../images/menus/menus-toggled-item@2x.png) ![Uma ilustração de um menu contendo quatro itens, com um ícone de marca de seleção na borda inicial do segundo item. (escuro)](../../../images/menus/menus-toggled-item~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/menus-toggled-item@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/menus-toggled-item~dark@2x.png)*

**Considere usar um rótulo variável que descreva o estado atual de um item.** Por exemplo, em vez de listar dois itens de menu como Mostrar Mapa e Ocultar Mapa, você poderia incluir um único item de menu cujo rótulo muda de Mostrar Mapa para Ocultar Mapa, dependendo de o mapa estar visível ou não.

**Inclua um verbo se um rótulo variável não for claro o suficiente.** Por exemplo, as pessoas podem não saber se os rótulos variáveis HDR Ativado e HDR Desativado descrevem ações ou estados. Se precisar esclarecer que esses itens representam ações, você poderia adicionar verbos aos rótulos, como Ativar HDR e Desativar HDR.

**Se necessário, exiba ambos os itens de menu em vez de um único item alternável.** Às vezes, ajuda as pessoas ver ambas as ações ou estados ao mesmo tempo. Por exemplo, um jogo poderia listar os itens Colocar Conta Online e Colocar Conta Offline, de modo que, quando a conta de alguém estiver online, apenas o item de menu Colocar Conta Offline apareça disponível.

**Considere usar uma marca de seleção para mostrar que um atributo está em vigor no momento.** É fácil para as pessoas procurar marcas de seleção em uma lista de atributos para encontrar os que estão selecionados. Por exemplo, no menu padrão Formatar > Fonte, as marcas de seleção podem facilitar que as pessoas percebam os estilos aplicados ao texto selecionado.

**Considere oferecer um item de menu que facilite remover vários atributos alternáveis.** Por exemplo, se você permitir que as pessoas apliquem vários estilos ao texto selecionado, pode funcionar bem oferecer um item de menu, como Simples, que remove todos os atributos de formatação aplicados de uma só vez.

## Menus dentro do jogo

Os menus dentro do jogo dão aos jogadores formas de controlar a jogabilidade, além de determinar os [ajustes](https://developer.apple.com/design/human-interface-guidelines/settings) do jogo como um todo.

**Permita que os jogadores naveguem pelos menus dentro do jogo usando o método de interação padrão da plataforma.** As pessoas esperam usar as mesmas interações para navegar pelos seus menus que usam para navegar por outros menus do dispositivo. Por exemplo, os jogadores esperam navegar pelos menus do seu jogo usando toque no iOS e no iPadOS, e gestos diretos e indiretos no visionOS.

**Garanta que seus menus continuem fáceis de abrir e ler em todas as plataformas compatíveis.** Cada plataforma define tamanhos específicos que funcionam melhor para fontes e alvos de interação. Às vezes, redimensionar o conteúdo do jogo para exibi-lo em outra tela, especialmente a de um dispositivo móvel, pode deixar os menus dentro do jogo pequenos demais para serem lidos ou usados. Se isso acontecer, modifique o tamanho dos alvos de toque e considere formas alternativas de comunicar o conteúdo do menu. Para orientações, consulte [Tipografia](https://developer.apple.com/design/human-interface-guidelines/typography) e [Controles por toque](https://developer.apple.com/design/human-interface-guidelines/game-controls#Touch-controls).

## Considerações por plataforma

*Nenhuma consideração adicional para macOS, tvOS ou watchOS.*

### iOS, iPadOS

No iOS e no iPadOS, um menu pode exibir itens em um dos três layouts a seguir.

![Um diagrama mostrando layouts de menu pequeno, médio e grande, cada um contendo o mesmo conjunto de itens de menu.](../../../images/menus/small-medium-large-menu-layouts@2x.png) ![Um diagrama mostrando layouts de menu pequeno, médio e grande, cada um contendo o mesmo conjunto de itens de menu. (escuro)](../../../images/menus/small-medium-large-menu-layouts~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/small-medium-large-menu-layouts@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/small-medium-large-menu-layouts~dark@2x.png)*

- **Pequeno.** Uma linha de quatro itens aparece na parte superior do menu, acima de uma lista que contém os demais itens. Para cada item da linha superior, o menu exibe um símbolo ou ícone, mas nenhum rótulo.
- **Médio.** Uma linha de três itens aparece na parte superior do menu, acima de uma lista que contém os demais itens. Para cada item da linha superior, o menu exibe um símbolo ou ícone acima de um rótulo curto.
- **Grande (o padrão).** O menu exibe todos os itens em uma lista.

Para orientações aos desenvolvedores, consulte [preferredElementSize](https://developer.apple.com/documentation/uikit/uimenu/preferredelementsize).

**Escolha um layout de menu pequeno ou médio quando isso puder simplificar as escolhas das pessoas.** Considere usar o layout médio se seu app tiver três ações importantes que as pessoas costumam querer executar. Por exemplo, o Notas usa o layout médio para oferecer às pessoas uma forma rápida de executar as ações Digitalizar, Bloquear e Fixar. Use o layout pequeno somente para ações intimamente relacionadas que normalmente aparecem como um grupo, como Negrito, Itálico, Sublinhado e Tachado. Para cada ação, use um símbolo reconhecível que ajude as pessoas a identificá-la sem um rótulo.

### visionOS

No visionOS, um menu pode exibir itens usando os estilos de layout pequeno ou grande definidos pelo iOS e pelo iPadOS (para orientações, consulte [iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/menus#iOS-iPadOS)). Você pode apresentar um menu no seu app ou jogo a partir de conteúdo 3D usando uma visualização SwiftUI. Para garantir que seu menu esteja sempre visível para as pessoas, mesmo quando outro conteúdo o oculte, você pode aplicar um [breakthrough effect](https://developer.apple.com/documentation/swiftui/view/presentationbreakthrougheffect(_:)). Como no macOS, um menu aberto em uma janela do visionOS pode aparecer fora dos limites da janela.

**Prefira exibir um menu perto do conteúdo que ele controla.** Como as pessoas precisam olhar para um item de menu antes de tocá-lo, elas podem não perceber o efeito do item se o conteúdo que ele controla estiver muito distante.

![Uma captura de tela parcial mostrando uma janela de app no visionOS. A janela contém vários botões, incluindo um botão 'Mais', que está selecionado. Um menu contendo uma lista de ações é exibido abaixo do botão.](../../../images/menus/visionos-notes-menu-popover-style@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-notes-menu-popover-style@2x.png)*

**Prefira o breakthrough effect sutil na maioria dos casos.** Esse efeito mescla a apresentação com o conteúdo ao redor, para manter a legibilidade e a usabilidade preservando a profundidade e o contexto da cena. Quando você seleciona [automatic](https://developer.apple.com/documentation/swiftui/breakthrougheffect/automatic) para o breakthrough effect de um menu que se sobrepõe a conteúdo 3D, o sistema aplica [subtle](https://developer.apple.com/documentation/swiftui/breakthrougheffect/subtle) por padrão. Você pode usar [prominent](https://developer.apple.com/documentation/swiftui/breakthrougheffect/prominent) se for importante exibir um menu com destaque sobre toda a cena no seu app ou jogo, mas isso pode atrapalhar a experiência das pessoas e potencialmente causar desconforto. Como alternativa, você pode usar [none](https://developer.apple.com/documentation/swiftui/breakthrougheffect/none) para ocultar totalmente seu menu atrás de outro conteúdo 3D, por exemplo, em um jogo de quebra-cabeça que exige que as pessoas contornem barreiras, mas isso pode dificultar que as pessoas vejam e acessem o menu.

## Recursos

#### Relacionados

[Botões pop-up (Pop-up buttons)](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons)

[Botões suspensos (Pull-down buttons)](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

[Menus de contexto (Context menus)](https://developer.apple.com/design/human-interface-guidelines/context-menus)

[A barra de menus (The menu bar)](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar)

#### Documentação para desenvolvedores

[Menu](https://developer.apple.com/documentation/swiftui/menu) — SwiftUI

[Menus and shortcuts](https://developer.apple.com/documentation/uikit/menus-and-shortcuts) — UIKit

[Menus](https://developer.apple.com/documentation/appkit/menus) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 8 de junho de 2026 | Atualizadas as orientações para ícones de itens de menu. |
| 16 de dezembro de 2025 | Adicionadas orientações para apresentar menus com breakthrough effects no visionOS. |
| 28 de julho de 2025 | Adicionadas orientações para representar itens de menu com ícones. |
| 10 de junho de 2024 | Adicionadas orientações para menus dentro do jogo e incluídos exemplos específicos de jogos. |
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
