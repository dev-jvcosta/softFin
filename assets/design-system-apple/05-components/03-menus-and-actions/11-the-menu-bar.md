# A barra de menus (The menu bar)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/the-menu-bar
>
> Plataformas: ipados,macos

*Em um Mac ou iPad, a barra de menus no topo da tela exibe os menus de nível superior do seu app ou jogo.*

![Uma representação estilizada da barra de menus do macOS exibindo um menu selecionado. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple.](../../../images/the-menu-bar/components-the-menu-bar-intro@2x.png) ![Uma representação estilizada da barra de menus do macOS exibindo um menu selecionado. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple. (escuro)](../../../images/the-menu-bar/components-the-menu-bar-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-the-menu-bar-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-the-menu-bar-intro~dark@2x.png)*

Os usuários de Mac conhecem muito bem a barra de menus do macOS e dependem dela para aprender o que um app faz e encontrar os comandos de que precisam. Para que o seu app ou jogo pareça nativo no macOS, é essencial oferecer uma experiência consistente de barra de menus.

Os menus da barra de menus no iPad são semelhantes aos do Mac, aparecendo na mesma ordem e com conjuntos familiares de itens de menu. Quando você adota a estrutura de menus que as pessoas esperam com base na experiência no Mac, isso as ajuda a entender e aproveitar imediatamente a barra de menus no iPad também.

Os atalhos de teclado no iPadOS usam os mesmos padrões do macOS. Para orientações, consulte [Atalhos de teclado padrão](https://developer.apple.com/design/human-interface-guidelines/keyboards#Standard-keyboard-shortcuts).

![Uma ilustração de uma janela de app no iPad, com a barra de menus aparecendo no topo da tela e o menu Editar aberto.](../../../images/the-menu-bar/menu-bar-ipad-overview@2x.png) ![Uma ilustração de uma janela de app no iPad, com a barra de menus aparecendo no topo da tela e o menu Editar aberto. (escuro)](../../../images/the-menu-bar/menu-bar-ipad-overview~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/menu-bar-ipad-overview@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/menu-bar-ipad-overview~dark@2x.png)*

Os menus da barra de menus compartilham a maior parte das características de aparência e comportamento que todos os tipos de menu têm. Para saber mais sobre menus em geral — e como organizar e nomear itens de menu —, consulte [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

## Anatomia

Quando presentes na barra de menus, os menus a seguir aparecem na ordem listada abaixo.

- *NomeDoSeuApp* (você fornece uma versão curta do nome do seu app para o título deste menu)
- Arquivo
- Editar
- Formatar
- Visualizar
- Menus específicos do app, se houver
- Janela
- Ajuda

Além disso, a barra de menus do macOS inclui o menu Apple no lado inicial e extras da barra de menus no lado final. Consulte as [Considerações por plataforma do macOS](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#macOS) para orientações.

## Boas práticas

**Ofereça suporte aos menus padrão definidos pelo sistema e à ordem deles.** As pessoas esperam encontrar menus e itens de menu em uma ordem que lhes seja familiar. Em muitos casos, o sistema implementa a funcionalidade dos itens de menu padrão para que você não precise fazê-lo. Por exemplo, quando as pessoas selecionam texto em um campo de texto padrão, o sistema disponibiliza o item de menu Editar > Copiar.

**Mostre sempre o mesmo conjunto de itens de menu.** Manter os itens de menu visíveis ajuda as pessoas a aprender quais ações o seu app oferece, mesmo que elas não estejam disponíveis no contexto atual. Se um item da barra de menus não puder ser acionado, desative a ação em vez de ocultá-la do menu.

**Represente as ações dos itens de menu com ícones familiares.** Os ícones ajudam as pessoas a reconhecer ações comuns em todo o seu app. Use os mesmos ícones do sistema para representar ações como Copiar, Compartilhar e Apagar, onde quer que apareçam. Para uma lista de ícones que representam ações comuns, consulte [Ícones padrão](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons). Para mais orientações, consulte [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

**Ofereça suporte aos atalhos de teclado definidos para os itens de menu padrão que você incluir.** As pessoas esperam usar os atalhos de teclado que já conhecem para itens de menu padrão, como Copiar, Recortar, Colar, Salvar e Imprimir. Defina atalhos de teclado personalizados somente quando necessário. Para orientações, consulte [Atalhos de teclado padrão](https://developer.apple.com/design/human-interface-guidelines/keyboards#Standard-keyboard-shortcuts).

**Prefira títulos de menu curtos, de uma só palavra.** Vários fatores — como diferentes tamanhos de tela e a presença de extras da barra de menus — podem afetar o espaçamento e a aparência dos seus menus. Títulos de menu de uma só palavra funcionam especialmente bem na barra de menus porque ocupam pouco espaço e são fáceis de percorrer visualmente. Se você precisar usar mais de uma palavra no título do menu, use maiúsculas no estilo de título.

## Menu do app

O menu do app lista itens que se aplicam ao seu app ou jogo como um todo, e não a uma tarefa, documento ou janela específicos. Para ajudar as pessoas a identificar rapidamente o app ativo, a barra de menus exibe o nome do seu app em negrito.

O menu do app normalmente contém os itens de menu a seguir, listados na ordem abaixo.

| Item de menu | Ação | Orientação |
|---|---|---|
| Sobre *NomeDoSeuApp* | Exibe a janela Sobre do seu app, que inclui informações de direitos autorais e de versão. | Prefira um nome curto de 16 caracteres ou menos. Não inclua um número de versão. |
| Ajustes… | Abre a janela de [ajustes](https://developer.apple.com/design/human-interface-guidelines/settings) do app ou a página do seu app nos Ajustes do iPadOS. | Use apenas para ajustes no nível do app. Se você também oferece ajustes específicos de documento, coloque-os no menu Arquivo. |
| Itens opcionais específicos do app | Executa ações personalizadas de ajuste ou configuração no nível do app. | Liste os itens personalizados de configuração do app após o item Ajustes e dentro do mesmo grupo. |
| Serviços (somente macOS) | Exibe um submenu de serviços do sistema e de outros apps que se aplicam ao contexto atual. |  |
| Ocultar *NomeDoSeuApp* (somente macOS) | Oculta o seu app e todas as suas janelas e, em seguida, ativa o app usado mais recentemente. | Use o mesmo nome curto de app que você fornece para o item Sobre. |
| Ocultar Outros (somente macOS) | Oculta todos os outros apps abertos e as respectivas janelas. |  |
| Mostrar Tudo (somente macOS) | Mostra todos os outros apps abertos e as respectivas janelas atrás das janelas do seu app. |  |
| Encerrar *NomeDoSeuApp* | Encerra o seu app. Pressionar Option altera Encerrar *NomeDoSeuApp* para Encerrar e Manter Janelas. | Use o mesmo nome curto de app que você fornece para o item Sobre. |

**Exiba o item de menu Sobre primeiro.** Inclua um separador após o item de menu Sobre para que ele apareça sozinho em um grupo.

## Menu Arquivo

O menu Arquivo contém comandos que ajudam as pessoas a gerenciar os arquivos ou documentos que um app suporta. Se o seu app não lida com nenhum tipo de arquivo, você pode renomear ou eliminar esse menu.

O menu Arquivo normalmente contém os itens de menu a seguir, listados na ordem abaixo.

| Item de menu | Ação | Orientação |
|---|---|---|
| Novo *Item* | Cria um novo documento, arquivo ou janela. | Para *Item*, use um termo que nomeie o tipo de item que o seu app cria. Por exemplo, o Calendário usa *Evento* e *Calendário*. |
| Abrir | Pode abrir o item selecionado ou apresentar uma interface na qual as pessoas selecionam um item para abrir. | Se as pessoas precisarem selecionar um item em uma interface separada, reticências seguem o comando para indicar que é necessária mais informação. |
| Abrir Recente | Exibe um submenu que lista documentos e arquivos abertos recentemente que as pessoas podem selecionar e normalmente inclui um item *Limpar Menu*. | Liste no submenu nomes de documentos e arquivos que as pessoas reconheçam; não exiba caminhos de arquivo. Liste os documentos na ordem em que as pessoas os abriram pela última vez, com o documento aberto mais recentemente em primeiro lugar. |
| Fechar | Fecha a janela ou o documento atual. Pressionar Option altera Fechar para Fechar Tudo. Em uma janela com abas, Fechar Aba substitui Fechar. | Em uma janela com abas, considere adicionar um item Fechar Janela para permitir que as pessoas fechem a janela inteira com um clique ou toque. |
| Fechar Aba | Fecha a aba atual em uma janela com abas. Pressionar Option altera Fechar Aba para Fechar Outras Abas. |  |
| Fechar Arquivo | Fecha o arquivo atual e todas as janelas associadas a ele. | Considere oferecer suporte a este item de menu se o seu app puder abrir várias visualizações do mesmo arquivo. |
| Salvar | Salva o documento ou arquivo atual. | Salve as alterações automaticamente e de forma periódica enquanto as pessoas trabalham, para que elas não precisem escolher Arquivo > Salvar o tempo todo. Para um novo documento, peça às pessoas um nome e um local. Se você precisar permitir que as pessoas salvem um arquivo em vários formatos, prefira um menu pop-up que permita escolher um formato na folha Salvar. |
| Salvar Tudo | Salva todos os documentos abertos. |  |
| Duplicar | Duplica o documento atual, deixando ambos os documentos abertos. Pressionar Option altera Duplicar para Salvar Como. | Prefira Duplicar a itens de menu como Salvar Como, Exportar, Copiar Para e Salvar Em, porque esses itens não esclarecem a relação entre o arquivo original e o novo. |
| Renomear… | Permite que as pessoas alterem o nome do documento atual. |  |
| Mover Para… | Pede que as pessoas escolham um novo local para o documento. |  |
| Exportar Como… | Pede às pessoas um nome, um local de saída e um formato de arquivo de exportação. Depois de exportar o arquivo, o documento atual permanece aberto; o arquivo exportado não é aberto. | Reserve o item Exportar Como para quando você precisar permitir que as pessoas exportem conteúdo em um formato que o seu app normalmente não manipula. |
| Reverter Para | Quando as pessoas ativam o salvamento automático, exibe um submenu que lista versões recentes do documento e uma opção para exibir o navegador de versões. Depois que as pessoas escolhem uma versão para restaurar, ela substitui o documento atual. |  |
| Configurar Página… | Abre um painel para especificar parâmetros de impressão, como tamanho do papel e orientação de impressão. Um documento pode salvar os parâmetros de impressão que as pessoas especificarem. | Inclua o item Configurar Página se você precisar oferecer suporte a parâmetros de impressão que se apliquem a um documento específico. Parâmetros de natureza global, como o nome de uma impressora, ou que as pessoas alteram com frequência, como o número de cópias a imprimir, pertencem ao painel Imprimir. |
| Imprimir… | Abre o painel Imprimir padrão, que permite que as pessoas imprimam em uma impressora, enviem um fax ou salvem como PDF. |  |

## Menu Editar

O menu Editar permite que as pessoas façam alterações no conteúdo do documento ou do contêiner de texto atual e oferece comandos para interagir com a Área de Transferência. Como muitos comandos de edição se aplicam a qualquer conteúdo editável, o menu Editar é útil até em apps que não são baseados em documentos.

**Determine se os itens de menu Buscar pertencem ao menu Editar.** Por exemplo, se o seu app permite que as pessoas busquem arquivos ou outros tipos de objetos, os itens de menu Buscar podem ser mais apropriados no menu Arquivo.

O menu Editar normalmente contém os itens de menu de nível superior a seguir, listados na ordem abaixo.

| Item de menu | Ação | Orientação |
|---|---|---|
| Desfazer | Reverte o efeito da operação anterior do usuário. | Esclareça o alvo do desfazer. Por exemplo, se as pessoas acabaram de selecionar um item de menu, você pode acrescentar o título do item, como Desfazer Colar e Corresponder Estilo. Para uma operação de entrada de texto, você pode acrescentar a palavra *Digitação* para formar Desfazer Digitação. |
| Refazer | Reverte o efeito da operação Desfazer anterior. | Esclareça o alvo do refazer. Por exemplo, se as pessoas acabaram de reverter a seleção de um item de menu, você pode acrescentar o título do item, como Refazer Colar e Corresponder Estilo. Para uma operação de entrada de texto, você pode acrescentar a palavra *Digitação* para formar Refazer Digitação. |
| Recortar | Remove os dados selecionados e os armazena na Área de Transferência, substituindo o conteúdo anterior da Área de Transferência. |  |
| Copiar | Duplica os dados selecionados e os armazena na Área de Transferência. |  |
| Colar | Insere o conteúdo da Área de Transferência no ponto de inserção atual. O conteúdo da Área de Transferência permanece inalterado, permitindo que as pessoas escolham Colar várias vezes. |  |
| Colar e Corresponder Estilo | Insere o conteúdo da Área de Transferência no ponto de inserção atual, fazendo o estilo do texto inserido corresponder ao do texto ao redor. |  |
| Apagar | Remove os dados selecionados, mas não os coloca na Área de Transferência. | Ofereça um item de menu Apagar em vez de um item Eliminar ou Limpar. Escolher Apagar equivale a pressionar a tecla Delete, então é importante que a nomenclatura seja consistente. |
| Selecionar Tudo | Destaca todo o conteúdo selecionável no documento ou contêiner de texto atual. |  |
| Buscar | Exibe um submenu contendo itens de menu para executar operações de busca no documento ou contêiner de texto atual. Os submenus padrão incluem: Buscar, Buscar e Substituir, Buscar Próximo, Buscar Anterior, Usar Seleção para Busca e Ir para a Seleção. |  |
| Ortografia e Gramática | Exibe um submenu contendo itens de menu para verificar e corrigir a ortografia e a gramática no documento ou contêiner de texto atual. Os submenus padrão incluem: Mostrar Ortografia e Gramática, Verificar Documento Agora, Verificar Ortografia Durante a Digitação, Verificar Gramática com Ortografia e Corrigir Ortografia Automaticamente. |  |
| Substituições | Exibe um submenu contendo itens que permitem às pessoas ativar ou desativar substituições automáticas enquanto digitam em um documento ou contêiner de texto. Os submenus padrão incluem: Mostrar Substituições, Copiar/Colar Inteligente, Aspas Inteligentes, Traços Inteligentes, Links Inteligentes, Detectores de Dados e Substituição de Texto. |  |
| Transformações | Exibe um submenu contendo itens que transformam o texto selecionado. Os submenus padrão incluem: Tornar Maiúsculas, Tornar Minúsculas e Capitalizar. |  |
| Fala | Exibe um submenu contendo os itens Iniciar Fala e Interromper Fala, que controlam quando o sistema lê em voz alta o texto selecionado. |  |
| Iniciar Ditado | Abre a janela de ditado e converte palavras faladas em texto adicionado ao ponto de inserção atual. O sistema adiciona automaticamente o item de menu Iniciar Ditado na parte inferior do menu Editar. |  |
| Emoji e Símbolos | Exibe um Visualizador de Caracteres, que inclui emoji, símbolos e outros caracteres que as pessoas podem inserir no ponto de inserção atual. O sistema adiciona automaticamente o item de menu Emoji e Símbolos na parte inferior do menu Editar. |  |

## Menu Formatar

O menu Formatar permite que as pessoas ajustem atributos de formatação de texto no documento ou contêiner de texto atual. Você pode excluir esse menu se o seu app não oferecer suporte à edição de texto formatado.

O menu Formatar normalmente contém os itens de menu de nível superior a seguir, listados na ordem abaixo.

| Item de menu | Ação |
|---|---|
| Fonte | Exibe um submenu contendo itens para ajustar os atributos de fonte do texto selecionado. Os submenus padrão incluem: Mostrar Fontes, Negrito, Itálico, Sublinhado, Maior, Menor, Mostrar Cores, Copiar Estilo e Colar Estilo. |
| Texto | Exibe um submenu contendo itens para ajustar os atributos de texto do texto selecionado. Os submenus padrão incluem: Alinhar à Esquerda, Centralizar, Justificar, Alinhar à Direita, Direção da Escrita, Mostrar Régua, Copiar Régua e Colar Régua. |

## Menu Visualizar

O menu Visualizar permite que as pessoas personalizem a aparência de todas as janelas de um app, independentemente do tipo.

> **Importante:** O menu Visualizar não inclui itens para navegar entre janelas específicas ou gerenciá-las; o [menu Janela](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Window-menu) oferece esses comandos.

**Ofereça um menu Visualizar mesmo que o seu app ofereça suporte a apenas um subconjunto das funções de visualização padrão.** Por exemplo, se o seu app não inclui uma barra de abas, uma barra de ferramentas ou uma barra lateral, mas oferece suporte ao modo de tela inteira, ofereça um menu Visualizar que inclua apenas o item de menu Entrar/Sair da Tela Inteira.

**Garanta que o título de cada item de mostrar/ocultar reflita o estado atual da visualização correspondente.** Por exemplo, quando a barra de ferramentas está oculta, ofereça um item de menu Mostrar Barra de Ferramentas; quando a barra de ferramentas está visível, ofereça um item de menu Ocultar Barra de Ferramentas.

O menu Visualizar normalmente contém os itens de menu de nível superior a seguir, listados na ordem abaixo.

| Item de menu | Ação |
|---|---|
| Mostrar/Ocultar Barra de Abas | Alterna a visibilidade da [barra de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars) acima da área do corpo em uma janela com abas |
| Mostrar Todas as Abas/Sair da Visão Geral das Abas | Entra e sai de uma visualização (semelhante ao Mission Control) que oferece uma visão geral de todas as abas abertas em uma janela com abas |
| Mostrar/Ocultar Barra de Ferramentas | Em uma janela que inclui uma [barra de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars), alterna a visibilidade da barra de ferramentas |
| Personalizar Barra de Ferramentas | Em uma janela que inclui uma barra de ferramentas, abre uma visualização que permite às pessoas personalizar os itens da barra de ferramentas |
| Mostrar/Ocultar Barra Lateral | Em uma janela que inclui uma [barra lateral](https://developer.apple.com/design/human-interface-guidelines/sidebars), alterna a visibilidade da barra lateral |
| Entrar/Sair da Tela Inteira | Em um app que oferece suporte a uma [experiência em tela inteira](https://developer.apple.com/design/human-interface-guidelines/going-full-screen), abre a janela em tamanho de tela inteira em um novo espaço |

## Menus específicos do app

Os menus personalizados do seu app aparecem na barra de menus entre o menu Visualizar e o menu Janela. Por exemplo, a barra de menus do Safari inclui os menus específicos do app Histórico e Favoritos.

**Ofereça menus específicos do app para comandos personalizados.** As pessoas procuram na barra de menus quando buscam comandos específicos do app, especialmente ao usar um app pela primeira vez. Mesmo quando os comandos estão disponíveis em outros lugares do seu app, é importante listá-los na barra de menus. Colocar comandos na barra de menus facilita que as pessoas os encontrem, permite que você atribua atalhos de teclado a eles e os torna mais acessíveis para pessoas que usam o Acesso Total ao Teclado. Excluir comandos da barra de menus — mesmo os pouco usados ou avançados — corre o risco de dificultar que todos os encontrem.

**Na medida do possível, reflita a hierarquia do seu app nos menus específicos do app.** Por exemplo, o Mail lista os menus Caixa de Correio, Mensagem e Formatar em uma ordem que espelha as relações entre esses itens: caixas de correio contêm mensagens, e mensagens contêm formatação.

**Procure listar os menus específicos do app em ordem do mais geral ou usado com mais frequência para o menos geral ou usado.** As pessoas tendem a esperar que os menus no início da lista sejam mais especializados do que os menus no final.

## Menu Janela

O menu Janela permite que as pessoas naveguem, organizem e gerenciem as janelas de um app.

> **Importante:** O menu Janela não ajuda as pessoas a personalizar a aparência das janelas nem a fechá-las. Para personalizar uma janela, as pessoas usam comandos no [menu Visualizar](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#View-menu); para fechar uma janela, as pessoas escolhem Fechar no [menu Arquivo](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#File-menu).

**Ofereça um menu Janela mesmo que o seu app tenha apenas uma janela.** Inclua os itens de menu Minimizar e Zoom para que as pessoas que usam o Acesso Total ao Teclado possam usar o teclado para acionar essas funções.

**Considere incluir itens de menu para mostrar e ocultar painéis.** Um [painel](https://developer.apple.com/design/human-interface-guidelines/panels) fornece informações, opções de configuração ou ferramentas para interagir com o conteúdo de uma janela principal e normalmente aparece apenas quando as pessoas precisam dele. Não há necessidade de oferecer acesso ao painel de fontes ou ao painel de cor do texto, porque o menu Formatar lista esses painéis.

O menu Janela normalmente contém os itens de menu de nível superior a seguir, listados na ordem abaixo.

| Item de menu | Ação | Orientação |
|---|---|---|
| Minimizar | Minimiza a janela ativa no Dock. Pressionar a tecla Option altera este item para Minimizar Tudo. |  |
| Zoom | Alterna entre um tamanho predefinido apropriado ao conteúdo da janela e o tamanho de janela definido pelas pessoas. Pressionar a tecla Option altera este item para Zoom em Tudo. | Evite usar Zoom para entrar ou sair do modo de tela inteira. O [menu Visualizar](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#View-menu) oferece suporte a essas funções. |
| Mostrar Aba Anterior | Mostra a aba anterior à aba atual em uma janela com abas. |  |
| Mostrar Próxima Aba | Mostra a aba posterior à aba atual em uma janela com abas. |  |
| Mover Aba para Nova Janela | Abre a aba atual em uma nova janela. |  |
| Mesclar Todas as Janelas | Combina todas as janelas abertas em uma única janela com abas. |  |
| Entrar/Sair da Tela Inteira | Em um app que oferece suporte a uma [experiência em tela inteira](https://developer.apple.com/design/human-interface-guidelines/going-full-screen), abre a janela em tamanho de tela inteira em um novo espaço. | Inclua este item no menu Janela somente se o seu app não tiver um menu Visualizar. Nesse cenário, continue oferecendo itens de menu Minimizar e Zoom separados. |
| Trazer Tudo para a Frente | Traz todas as janelas abertas de um app para a frente, mantendo a localização na tela, o tamanho e a ordem de sobreposição delas. (Clicar no ícone do app no Dock tem o mesmo efeito.) Pressionar a tecla Option altera este item para Organizar na Frente, que traz as janelas de um app para a frente em um arranjo organizado em mosaico. |  |
| *Nome de uma janela aberta específica do app* | Traz a janela selecionada para a frente. | Liste as janelas abertas no momento em ordem alfabética para facilitar a leitura. Evite listar painéis ou outras visualizações modais. |

## Menu Ajuda

O menu Ajuda — localizado no final da barra de menus — dá acesso à documentação de ajuda de um app. Quando você usa o formato Help Book para essa documentação, o macOS inclui automaticamente um campo de busca no topo do menu Ajuda.

| Item de menu | Ação | Orientação |
|---|---|---|
| Enviar Feedback sobre o *NomeDoSeuApp* à Apple | Abre o Assistente de Feedback, no qual as pessoas podem enviar feedback. |  |
| Ajuda do *NomeDoSeuApp* | Quando o conteúdo usa o formato Help Book, abre o conteúdo no Visualizador de Ajuda integrado. |  |
| *Item Adicional* |  | Use um separador entre a sua documentação de ajuda principal e os itens adicionais, que podem incluir informações de registro ou notas de versão. Mantenha pequeno o número total de itens listados no menu Ajuda para evitar sobrecarregar as pessoas com escolhas demais quando elas precisarem de ajuda. Como alternativa, considere vincular os itens adicionais a partir da sua documentação de ajuda. |

Para orientações, consulte [Oferecendo ajuda](https://developer.apple.com/design/human-interface-guidelines/offering-help); para orientações voltadas a desenvolvedores, consulte [NSHelpManager](https://developer.apple.com/documentation/appkit/nshelpmanager).

## Itens de menu dinâmicos

Em casos raros, pode fazer sentido apresentar um *item de menu dinâmico*, que é um item de menu que muda seu comportamento quando as pessoas o escolhem enquanto pressionam uma tecla modificadora (Control, Option, Shift ou Command). Por exemplo, o item *Minimizar* no menu Janela muda para *Minimizar Tudo* quando as pessoas pressionam a tecla Option.

**Evite fazer de um item de menu dinâmico a única maneira de realizar uma tarefa.** Os itens de menu dinâmicos ficam ocultos por padrão, então são mais adequados para oferecer atalhos para ações avançadas que as pessoas podem realizar de outras maneiras. Por exemplo, se alguém não descobriu o item de menu dinâmico *Minimizar Tudo* no menu Janela, ainda pode minimizar cada janela aberta.

**Use itens de menu dinâmicos principalmente em menus da barra de menus.** Adicionar um item de menu dinâmico a menus contextuais ou do Dock pode tornar o item ainda mais difícil de descobrir.

**Exija apenas uma tecla modificadora para revelar um item de menu dinâmico.** Pode ser fisicamente desconfortável pressionar mais de uma tecla ao mesmo tempo em que se abre um menu e se escolhe um item de menu, além de reduzir a descobribilidade do comportamento dinâmico. Para orientações voltadas a desenvolvedores, consulte [isAlternate](https://developer.apple.com/documentation/appkit/nsmenuitem/isalternate).

> **Dica:** O macOS define automaticamente a largura de um menu para acomodar o item mais largo, incluindo os itens de menu dinâmicos.

## Considerações por plataforma

*Sem suporte no iOS, tvOS, visionOS ou watchOS.*

### iPadOS

A barra de menus exibe os menus de nível superior do seu app ou jogo, incluindo tanto os menus fornecidos pelo sistema quanto quaisquer menus personalizados que você optar por adicionar. As pessoas revelam a barra de menus movendo o ponteiro até a borda superior da tela ou deslizando para baixo a partir dela. Quando visível, a barra de menus ocupa o mesmo espaço vertical que a [barra de status](https://developer.apple.com/design/human-interface-guidelines/status-bars) na borda superior da tela.

Assim como a barra de menus do macOS, a barra de menus do iPadOS oferece uma maneira familiar para as pessoas aprenderem o que um app faz, encontrarem os comandos de que precisam e descobrirem atalhos de teclado. Embora sejam semelhantes na maioria dos aspectos, há algumas diferenças importantes entre as barras de menus de cada plataforma.

|  | iPadOS | macOS |
|---|---|---|
| Visibilidade da barra de menus | Oculta até ser revelada | Visível por padrão |
| Alinhamento horizontal | Centralizado | Lado inicial |
| Extras da barra de menus | Não disponíveis | Padrão do sistema e personalizados |
| Controles de janela | Na barra de menus quando o app está em tela inteira | Nunca na barra de menus |
| Menu Apple | Não disponível | Sempre disponível |
| Menu do app | Sobre, Serviços e itens relacionados à visibilidade do app não disponíveis | Sempre disponível |

**Como a barra de menus costuma ficar oculta quando um app é executado em tela inteira, garanta que as pessoas possam acessar todas as funções do seu app por meio da interface.** Em particular, ofereça sempre outras maneiras de realizar as tarefas atribuídas a itens de menu dinâmicos, já que eles só estão disponíveis quando um teclado físico está conectado. Evite usar a barra de menus como um local genérico para funcionalidades que não se encaixam em outro lugar.

**Reserve o item de menu NomeDoSeuApp > Ajustes para abrir a página do seu app nos Ajustes do iPadOS.** Se o seu app inclui uma área interna de preferências própria, crie um vínculo para ela com um item de menu separado abaixo de Ajustes, no mesmo grupo. Coloque também nessa seção quaisquer outras opções de configuração personalizadas que valham para todo o app.

**Para apps com navegação em estilo de abas, considere adicionar cada aba como um item de menu no menu Visualizar.** Como cada aba é uma visualização diferente do app, o menu Visualizar é um lugar natural para oferecer uma maneira adicional de navegar entre as abas. Se você fizer isso, considere atribuir atalhos de teclado a cada aba para tornar a navegação ainda mais conveniente.

**Considere agrupar itens de menu em submenus para economizar espaço vertical.** As linhas de itens de menu no iPad usam mais espaço do que no Mac para facilitar o toque. Por isso, e por causa das telas menores de alguns iPads, pode ser útil agrupar itens relacionados em submenus com mais frequência do que na barra de menus do Mac.

### macOS

A barra de menus no macOS inclui o menu Apple, que é sempre o primeiro item no lado inicial da barra de menus. O menu Apple inclui itens de menu definidos pelo sistema que estão sempre disponíveis, e você não pode modificá-lo nem removê-lo. Se houver espaço, o sistema também pode exibir extras da barra de menus no final da barra de menus. Para orientações, consulte [Extras da barra de menus](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Menu-bar-extras).

Quando o espaço na barra de menus é limitado, o sistema prioriza a exibição de menus e de extras essenciais da barra de menus. Para garantir que os menus permaneçam legíveis, o sistema pode diminuir o espaço entre os títulos, truncando-os se necessário.

Quando as pessoas entram no modo de tela inteira, a barra de menus normalmente fica oculta até que elas a revelem movendo o ponteiro até o topo da tela. Para orientações, consulte [Entrando em tela inteira](https://developer.apple.com/design/human-interface-guidelines/going-full-screen).

#### Extras da barra de menus

Um extra da barra de menus expõe funcionalidades específicas do app por meio de um ícone que aparece na barra de menus quando o seu app está em execução, mesmo quando ele não é o app em primeiro plano. Os extras da barra de menus ficam no lado oposto da barra de menus em relação aos menus do seu app. Para orientações voltadas a desenvolvedores, consulte [MenuBarExtra](https://developer.apple.com/documentation/swiftui/menubarextra).

Quando necessário, o sistema oculta extras da barra de menus para abrir espaço para os menus do app. Da mesma forma, se houver extras demais na barra de menus, o sistema pode ocultar alguns para evitar a aglomeração dos menus do app.

![Uma captura de tela do extra da barra de menus Entrada e do seu menu.](../../../images/the-menu-bar/menu-bar-extras@2x.png) ![Uma captura de tela do extra da barra de menus Entrada e do seu menu. (escuro)](../../../images/the-menu-bar/menu-bar-extras~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/menu-bar-extras@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/menu-bar-extras~dark@2x.png)*

**Considere usar um símbolo para representar o seu extra da barra de menus.** Você pode criar um [ícone](https://developer.apple.com/design/human-interface-guidelines/icons) ou escolher um dos [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols), usando-o como está ou personalizando-o para atender às suas necessidades. Tanto os ícones de interface quanto os símbolos usam as cores preto e transparente para definir suas formas; o sistema pode aplicar outras cores às áreas pretas de cada imagem para que fique bem tanto em barras de menus escuras quanto claras e quando o seu extra da barra de menus está selecionado. A altura da barra de menus é de 24 pt.

**Exiba um menu — não um popover — quando as pessoas clicarem no seu extra da barra de menus.** A menos que a funcionalidade do app que você quer expor seja complexa demais para um menu, evite apresentá-la em um [popover](https://developer.apple.com/design/human-interface-guidelines/popovers).

**Deixe que as pessoas — e não o seu app — decidam se colocam o seu extra da barra de menus na barra de menus.** Normalmente, as pessoas adicionam um extra da barra de menus à barra de menus alterando um ajuste na janela de ajustes de um app. Para garantir a descoberta, porém, considere dar às pessoas a opção de fazer isso durante a configuração inicial.

**Evite depender da presença de extras da barra de menus.** O sistema oculta e mostra extras da barra de menus regularmente, e você não pode ter certeza de quais outros extras as pessoas escolheram exibir nem prever a localização do seu extra da barra de menus.

**Considere expor funcionalidades específicas do app de outras maneiras também.** Por exemplo, você pode oferecer um [menu do Dock](https://developer.apple.com/design/human-interface-guidelines/dock-menus) que aparece quando as pessoas clicam com a tecla Control pressionada no ícone do seu app no Dock. As pessoas podem ocultar ou optar por não usar o seu extra da barra de menus, mas um menu do Dock está sempre disponível quando o seu app está em execução.

## Recursos

#### Relacionados

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

[Menus do Dock](https://developer.apple.com/design/human-interface-guidelines/dock-menus)

[Atalhos de teclado padrão](https://developer.apple.com/design/human-interface-guidelines/keyboards#Standard-keyboard-shortcuts)

#### Documentação para desenvolvedores

[CommandMenu](https://developer.apple.com/documentation/swiftui/commandmenu) — SwiftUI

[Adding menus and shortcuts to the menu bar and user interface](https://developer.apple.com/documentation/uikit/adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface) — UIKit

[NSStatusBar](https://developer.apple.com/documentation/appkit/nsstatusbar) — AppKit

#### Vídeos

- [Elevate the design of your iPad app](https://developer.apple.com/videos/play/wwdc2025/208)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de junho de 2025 | Adicionadas orientações para a barra de menus no iPadOS. |
