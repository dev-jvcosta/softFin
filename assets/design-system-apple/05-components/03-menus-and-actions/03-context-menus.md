# Menus de contexto (Context menus)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/context-menus
>
> Plataformas: ios,ipados,macos,tvos,visionos

*Um menu de contexto dá acesso a funcionalidades diretamente relacionadas a um item, sem poluir a interface.*

![Uma representação estilizada de um menu contextual abaixo de um ponteiro que clica. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores.](../../../images/context-menus/components-context-menu-intro@2x.png) ![Uma representação estilizada de um menu contextual abaixo de um ponteiro que clica. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores. (escuro)](../../../images/context-menus/components-context-menu-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-context-menu-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-context-menu-intro~dark@2x.png)*

Embora um menu de contexto ofereça acesso conveniente a itens usados com frequência, ele fica oculto por padrão, então as pessoas podem não saber que ele existe. Para revelar um menu de contexto, as pessoas geralmente escolhem uma visualização ou selecionam algum conteúdo e depois realizam uma ação, usando os modos de entrada compatíveis com a configuração atual. Por exemplo:

- O gesto de tocar e segurar, ou de pinça e segurar, definido pelo sistema no visionOS, iOS e iPadOS
- Pressionar a tecla Control ao clicar com um dispositivo apontador no macOS e no iPadOS
- Usar um clique secundário em um Magic Trackpad no macOS ou no iPadOS

## Boas práticas

**Priorize a relevância ao escolher os itens a incluir em um menu de contexto.** Um menu de contexto não serve para oferecer itens avançados ou raramente usados; em vez disso, ele ajuda as pessoas a acessar rapidamente os comandos de que mais provavelmente precisarão em seu contexto atual. Por exemplo, o menu de contexto de uma mensagem do Mail na Caixa de Entrada inclui comandos para responder e mover a mensagem, mas não comandos para editar o conteúdo da mensagem, gerenciar caixas de correio ou filtrar mensagens.

**Procure manter um número pequeno de itens de menu.** Um menu de contexto longo demais pode ser difícil de percorrer visualmente e de rolar.

**Ofereça suporte a menus de contexto de forma consistente em todo o seu app.** Se você oferece menus de contexto para itens em alguns lugares e em outros não, as pessoas não saberão onde podem usar o recurso e podem achar que há um problema.

**Sempre disponibilize os itens do menu de contexto também na interface principal.** Por exemplo, no Mail no iOS e no iPadOS, os itens do menu de contexto disponíveis para uma mensagem na Caixa de Entrada também estão disponíveis na barra de ferramentas da visualização da mensagem. No macOS, os menus da barra de menus de um app listam todos os comandos do app, inclusive os que aparecem em vários menus de contexto.

**Se precisar usar submenus para gerenciar a complexidade de um menu, mantenha-os em um único nível.** Um submenu é um item de menu que revela um menu secundário de comandos logicamente relacionados. Embora os submenus possam encurtar um menu de contexto e esclarecer seus comandos, mais de um nível de submenu complica a experiência e pode ser difícil de navegar. Se precisar incluir um submenu, dê a ele um título intuitivo que ajude as pessoas a prever seu conteúdo sem abri-lo. Para obter orientações, consulte [Submenus](https://developer.apple.com/design/human-interface-guidelines/menus#Submenus).

**Oculte os itens de menu indisponíveis, não os esmaeça.** Ao contrário de um menu comum, que ajuda as pessoas a descobrir ações que podem realizar mesmo quando a ação não está disponível, um menu de contexto exibe apenas as ações relevantes para a visualização ou o conteúdo atualmente selecionado. No macOS, as exceções são os itens de menu Cortar, Copiar e Colar, que podem aparecer como indisponíveis se não se aplicarem ao contexto atual.

**Procure posicionar os itens de menu mais usados onde as pessoas provavelmente os encontrarão primeiro.** Quando um menu de contexto é aberto, as pessoas costumam lê-lo a partir da parte mais próxima de onde o dedo ou o ponteiro o revelou. Dependendo da localização do conteúdo selecionado, um menu de contexto pode abrir acima ou abaixo dele, então talvez você também precise inverter a ordem dos itens para corresponder à posição do menu.

**Mostre atalhos de teclado nos menus principais do seu app, não nos menus de contexto.** Os menus de contexto já oferecem um atalho para comandos específicos da tarefa, portanto é redundante exibir também atalhos de teclado.

**Siga as boas práticas para o uso de separadores.** Como em outros tipos de menu, você pode usar separadores para agrupar itens em um menu de contexto e ajudar as pessoas a percorrer o menu mais rapidamente. Em geral, você não deve ter mais de cerca de três grupos em um menu de contexto. Para obter orientações, consulte [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

**No iOS, iPadOS e visionOS, avise as pessoas sobre itens do menu de contexto que podem destruir dados.** Se precisar incluir itens potencialmente destrutivos no seu menu de contexto — como Excluir ou Remover —, liste-os no final do menu e identifique-os como destrutivos (para obter orientações para desenvolvedores, consulte [destructive](https://developer.apple.com/documentation/uikit/uimenuelement/attributes/destructive)). O sistema pode exibir um item de menu destrutivo com texto na cor vermelha.

## Conteúdo

Um menu de contexto raramente exibe um título. Em contraste, cada item de um menu de contexto precisa exibir um rótulo curto que descreva claramente o que ele faz. Para obter orientações, consulte [Menus > Rótulos](https://developer.apple.com/design/human-interface-guidelines/menus#Labels).

**Inclua um título em um menu de contexto somente se isso esclarecer o efeito do menu.** Por exemplo, quando as pessoas selecionam várias mensagens do Mail e tocam no botão Marcar da barra de ferramentas no iOS e no iPadOS, o menu de contexto resultante exibe um título que indica o número de mensagens selecionadas, lembrando às pessoas que o comando escolhido afeta todas as mensagens selecionadas.

**Represente as ações dos itens de menu com ícones familiares.** Os ícones ajudam as pessoas a reconhecer ações comuns em todo o seu app. Use os mesmos ícones do sistema para representar ações como Copiar, Compartilhar e Excluir, onde quer que apareçam. Para uma lista de ícones que representam ações comuns, consulte [Ícones padrão](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons). Para obter orientações adicionais, consulte [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

## Considerações por plataforma

*Nenhuma consideração adicional para o tvOS. Não compatível com watchOS.*

### iOS, iPadOS

**Ofereça um menu de contexto ou um menu de edição para um item, mas não ambos.** Se você oferecer os dois recursos para o mesmo item, isso pode confundir as pessoas — e dificultar a detecção da intenção delas pelo sistema. Consulte [Menus de edição](https://developer.apple.com/design/human-interface-guidelines/edit-menus).

**No iPadOS, considere usar um menu de contexto para permitir que as pessoas criem um novo objeto no seu app.** O iPadOS permite revelar um menu de contexto quando as pessoas fazem um toque longo na tela sensível ao toque ou usam um clique secundário com um trackpad ou teclado conectado. Por exemplo, o app Arquivos permite que as pessoas criem uma nova pasta revelando um menu de contexto em uma área entre arquivos e pastas existentes.

No iOS e no iPadOS, um menu de contexto pode exibir uma pré-visualização do conteúdo atual perto da lista de comandos. As pessoas podem escolher um comando no menu ou — em alguns casos — tocar na pré-visualização para abri-la ou arrastá-la para outra área.

**Prefira uma pré-visualização gráfica que esclareça o alvo dos comandos de um menu de contexto.** Por exemplo, quando as pessoas revelam um menu de contexto em um item de lista nos apps Notas ou Mail, a pré-visualização mostra uma versão condensada do conteúdo real para ajudar as pessoas a confirmar que estão trabalhando com o item pretendido.

**Garanta que sua pré-visualização tenha boa aparência durante a animação.** Quando as pessoas revelam um menu de contexto em um objeto na tela, o sistema anima a imagem de pré-visualização à medida que ela emerge do conteúdo, escurecendo a tela atrás da pré-visualização e do menu. É importante ajustar o caminho de recorte da pré-visualização para corresponder à forma da imagem de pré-visualização, de modo que seus contornos, como os cantos arredondados, não pareçam mudar durante a animação. Para obter orientações para desenvolvedores, consulte [UIContextMenuInteractionDelegate](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate).

### macOS

Em um Mac, um menu de contexto às vezes é chamado de menu *contextual*.

### visionOS

**Considere usar um menu de contexto em vez de um painel ou janela de inspetor para apresentar funcionalidades usadas com frequência.** Minimizar o número de visualizações ou janelas separadas que seu app abre pode ajudar as pessoas a manter o espaço delas organizado.

**Em geral, evite deixar a altura de um menu de contexto exceder a altura da janela.** No visionOS, uma janela inclui componentes fornecidos pelo sistema acima e abaixo de suas bordas superior e inferior, como controles de gerenciamento de janelas e o menu Compartilhar, portanto um menu de contexto alto demais pode obscurecê-los. Ao considerar o número de itens a incluir, oriente-se pelas maneiras como as pessoas provavelmente usarão seu app. Por exemplo, pessoas que usam um app para realizar tarefas especializadas e aprofundadas costumam esperar dedicar tempo a aprender um grande número de comandos sofisticados e podem apreciar o acesso contextual a eles. Por outro lado, pessoas que usam um app para realizar algumas ações simples podem apreciar menus contextuais curtos, rápidos de percorrer e usar.

## Recursos

#### Relacionados

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

[Menus de edição](https://developer.apple.com/design/human-interface-guidelines/edit-menus)

[Botões pop-up](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons)

[Botões pull-down](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

#### Documentação para desenvolvedores

[contextMenu(menuItems:)](https://developer.apple.com/documentation/swiftui/view/contextmenu(menuitems:)) — SwiftUI

[UIContextMenuInteraction](https://developer.apple.com/documentation/uikit/uicontextmenuinteraction) — UIKit

[popUpContextMenu(_:with:for:)](https://developer.apple.com/documentation/appkit/nsmenu/popupcontextmenu(_:with:for:)) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 5 de dezembro de 2023 | Adicionadas orientações sobre como ocultar itens de menu indisponíveis. |
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
| 14 de setembro de 2022 | Orientações refinadas sobre a inclusão de um submenu e adicionada uma diretriz sobre o uso de um menu de contexto para oferecer suporte à criação de objetos em um app para iPadOS. |
