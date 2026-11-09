# Barras de ferramentas (Toolbars)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/toolbars
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Uma barra de ferramentas oferece acesso conveniente a comandos, controles, navegação e busca de uso frequente.*

![Uma representação estilizada de uma barra de ferramentas, com um controle Voltar na borda inicial e Compor, Compartilhar e o menu Mais na borda final. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores.](../../../images/toolbars/components-toolbar-intro@2x.png) ![Uma representação estilizada de uma barra de ferramentas, com um controle Voltar na borda inicial e Compor, Compartilhar e o menu Mais na borda final. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores. (escuro)](../../../images/toolbars/components-toolbar-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-toolbar-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-toolbar-intro~dark@2x.png)*

Uma barra de ferramentas consiste em um ou mais conjuntos de controles dispostos horizontalmente ao longo da borda superior ou inferior da view, agrupados em seções lógicas.

As barras de ferramentas atuam sobre o conteúdo da view, facilitam a navegação e ajudam a orientar as pessoas no app. Elas incluem três tipos de conteúdo:

- O título da view atual
- Controles de navegação, como voltar e avançar, e [campos de busca](https://developer.apple.com/design/human-interface-guidelines/search-fields)
- Ações, ou itens de barra, como [botões](https://developer.apple.com/design/human-interface-guidelines/buttons) e [menus](https://developer.apple.com/design/human-interface-guidelines/menus)

Em contraste com uma barra de ferramentas, uma [barra de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars) serve especificamente para navegar entre áreas de um app.

## Boas práticas

**Escolha os itens com critério para evitar excesso.** As pessoas precisam conseguir distinguir e ativar cada item, então você não quer colocar itens demais na barra de ferramentas. Para acomodar larguras de view variáveis, defina quais itens vão para o menu de estouro à medida que a barra de ferramentas fica mais estreita.

> **Nota:** O sistema adiciona automaticamente um menu de estouro no macOS ou no iPadOS quando os itens deixam de caber. Não adicione um menu de estouro manualmente e evite layouts que façam os itens da barra de ferramentas transbordarem por padrão.

**Adicione um menu Mais para conter ações adicionais.** Dê prioridade às ações menos importantes para inclusão no menu Mais. Tente incluir todas as ações na barra de ferramentas, se possível, e só adicione esse menu se realmente precisar dele.

**Padrão**

![Uma captura de tela do app Notas no Mac, com a janela larga o bastante para que a barra de ferramentas inclua todos os itens disponíveis. Um botão de menu Mais aparece no lado final da barra de ferramentas, com o menu aberto abaixo dele.](../../../images/toolbars/toolbars-notes-app-expanded-icons@2x.png) ![Uma captura de tela do app Notas no Mac, com a janela larga o bastante para que a barra de ferramentas inclua todos os itens disponíveis. Um botão de menu Mais aparece no lado final da barra de ferramentas, com o menu aberto abaixo dele. (escuro)](../../../images/toolbars/toolbars-notes-app-expanded-icons~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-notes-app-expanded-icons@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-notes-app-expanded-icons~dark@2x.png)*

**Compacto**

![Uma captura de tela do app Notas no Mac, com a janela estreita o bastante para que o sistema mova vários itens da barra de ferramentas para um menu de estouro, incluindo o botão de menu Mais. O menu de estouro está aberto para mostrar os itens que ele inclui.](../../../images/toolbars/toolbars-notes-app-collapsed-icons@2x.png) ![Uma captura de tela do app Notas no Mac, com a janela estreita o bastante para que o sistema mova vários itens da barra de ferramentas para um menu de estouro, incluindo o botão de menu Mais. O menu de estouro está aberto para mostrar os itens que ele inclui. (escuro)](../../../images/toolbars/toolbars-notes-app-collapsed-icons~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-notes-app-collapsed-icons@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-notes-app-collapsed-icons~dark@2x.png)*

**Em apps de iPadOS e macOS, considere deixar as pessoas personalizarem a barra de ferramentas para incluir os itens mais usados.** A personalização da barra de ferramentas é especialmente útil em apps que oferecem muitos itens — ou que incluem funcionalidades avançadas de que nem todos precisam — e em apps que as pessoas tendem a usar por longos períodos. Por exemplo, funciona bem disponibilizar uma variedade de ações de edição para personalização da barra de ferramentas, porque as pessoas costumam usar diferentes tipos de comandos de edição de acordo com o estilo de trabalho e o projeto atual.

**Reduza o uso de fundos de barra de ferramentas e de controles com tom de cor.** Quaisquer fundos e aparências personalizados que você use podem se sobrepor ou interferir nos efeitos de fundo fornecidos pelo sistema. Em vez disso, use a camada de conteúdo para definir a cor e a aparência da barra de ferramentas e use um [ScrollEdgeEffectStyle](https://developer.apple.com/documentation/swiftui/scrolledgeeffectstyle) quando necessário para distinguir a área da barra de ferramentas da área de conteúdo. Essa abordagem ajuda o seu app a expressar sua personalidade única sem distrair do conteúdo.

**Evite aplicar uma cor semelhante aos rótulos dos itens da barra de ferramentas e aos fundos da camada de conteúdo.** Se o seu app já tem conteúdo brilhante e colorido na camada de conteúdo, prefira usar a aparência monocromática padrão das barras de ferramentas. Para mais orientações, consulte [Liquid Glass color](https://developer.apple.com/design/human-interface-guidelines/color#Liquid-Glass-color).

**Prefira usar componentes padrão em uma barra de ferramentas.** Por padrão, botões, campos de texto, cabeçalhos e rodapés padrão têm raios de canto concêntricos com os cantos das barras. Se você precisar criar um componente personalizado, garanta que o raio de canto dele também seja concêntrico com os cantos da barra.

**Considere ocultar temporariamente as barras de ferramentas para uma experiência livre de distrações.** Às vezes as pessoas apreciam uma interface mínima para reduzir distrações ou revelar mais conteúdo. Se você oferece esse suporte, faça-o de forma contextual, quando fizer mais sentido, e ofereça maneiras de restaurar de forma confiável os elementos de interface ocultos. Para orientações, consulte [Going full screen](https://developer.apple.com/design/human-interface-guidelines/going-full-screen). Para orientações específicas do visionOS, consulte [Immersive experiences](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences).

## Títulos

**Forneça um título útil para cada janela.** Um título ajuda as pessoas a confirmar onde estão ao navegar pelo seu app e diferencia o conteúdo de várias janelas abertas. Se dar título a uma barra de ferramentas parecer redundante, você pode deixar a área do título vazia. Por exemplo, o Notas não dá título à nota atual quando uma única janela está aberta, porque a primeira linha do conteúdo normalmente fornece contexto suficiente. No entanto, ao abrir notas em janelas separadas, o sistema as intitula com a primeira linha do conteúdo para que as pessoas possam diferenciá-las.

**Não dê às janelas o nome do seu app como título.** O nome do seu app não fornece informações úteis sobre a hierarquia de conteúdo nem sobre qualquer janela ou área do app, por isso não funciona bem como título.

**Escreva um título conciso.** Procure uma palavra ou frase curta que resuma a finalidade da janela ou view e mantenha o título com menos de 15 caracteres para deixar espaço suficiente para outros controles.

## Navegação

Uma barra de ferramentas com controles de navegação aparece na parte superior de uma janela, ajudando as pessoas a percorrer uma hierarquia de conteúdo. Uma barra de ferramentas também costuma conter um [campo de busca](https://developer.apple.com/design/human-interface-guidelines/search-fields) para navegação rápida entre áreas ou itens de conteúdo. No iOS, uma barra de ferramentas específica de navegação às vezes é chamada de barra de navegação.

**Use os botões padrão Voltar e Fechar.** As pessoas sabem que o botão padrão Voltar permite refazer seus passos por uma hierarquia de informações e que o botão padrão Fechar fecha uma view modal. Prefira os símbolos padrão para cada um e não use um rótulo de texto que diga *Voltar* ou *Fechar*. Se você criar uma versão personalizada de qualquer um deles, certifique-se de que ela ainda tenha a mesma aparência, se comporte como as pessoas esperam e combine com o restante da interface, e garanta que a implemente de forma consistente em todo o seu app ou jogo. Para orientações, consulte [Icons](https://developer.apple.com/design/human-interface-guidelines/icons).

![Uma ilustração de um botão Voltar em formato de cápsula que inclui o símbolo Voltar no lado inicial, agrupado com o texto Voltar no lado final.](../../../images/toolbars/toolbars-navigation-action-back-incorrect@2x.png) ![Uma ilustração de um botão Voltar em formato de cápsula que inclui o símbolo Voltar no lado inicial, agrupado com o texto Voltar no lado final. (escuro)](../../../images/toolbars/toolbars-navigation-action-back-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-navigation-action-back-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-navigation-action-back-incorrect~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/toolbars/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração do botão Voltar circular padrão que inclui o símbolo Voltar padrão.](../../../images/toolbars/toolbars-navigation-action-back-correct@2x.png) ![Uma ilustração do botão Voltar circular padrão que inclui o símbolo Voltar padrão. (escuro)](../../../images/toolbars/toolbars-navigation-action-back-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-navigation-action-back-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-navigation-action-back-correct~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/toolbars/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

## Ações

**Ofereça ações que deem suporte às principais tarefas que as pessoas executam.** Em geral, priorize os comandos que as pessoas têm mais probabilidade de querer. Esses comandos costumam ser os que as pessoas mais usam, mas, em alguns apps, pode fazer sentido priorizar comandos que correspondam aos objetos de nível mais alto ou mais importantes com que as pessoas trabalham.

**Garanta que o significado de cada controle seja claro.** Não faça as pessoas adivinharem ou experimentarem para descobrir o que um item da barra de ferramentas faz. Prefira símbolos simples e reconhecíveis para os itens em vez de texto, exceto para ações como *editar*, que não são bem representadas por símbolos. Para orientações sobre símbolos que representam ações comuns, consulte [Standard icons](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons).

![Uma ilustração de um grupo de itens com rótulos de botão em texto para Filtrar, Excluir e Novo.](../../../images/toolbars/toolbars-prefer-symbols-incorrect@2x.png) ![Uma ilustração de um grupo de itens com rótulos de botão em texto para Filtrar, Excluir e Novo. (escuro)](../../../images/toolbars/toolbars-prefer-symbols-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-prefer-symbols-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-prefer-symbols-incorrect~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/toolbars/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de um grupo de itens com rótulos de botão em símbolos para Filtrar, Excluir e Novo.](../../../images/toolbars/toolbars-prefer-symbols-correct@2x.png) ![Uma ilustração de um grupo de itens com rótulos de botão em símbolos para Filtrar, Excluir e Novo. (escuro)](../../../images/toolbars/toolbars-prefer-symbols-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-prefer-symbols-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-prefer-symbols-correct~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/toolbars/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Prefira símbolos fornecidos pelo sistema, sem bordas.** Os símbolos fornecidos pelo sistema são familiares, recebem automaticamente coloração e vibrancy apropriadas e respondem de forma consistente às interações do usuário. Bordas (como símbolos de círculo com contorno) não são necessárias porque a seção fornece um contêiner visível, e o sistema define automaticamente as aparências dos estados de foco e seleção. Para orientações, consulte [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols).

![Uma ilustração de um grupo de itens com botões para Filtrar e Mais. Os botões são rotulados com símbolos com bordas circulares.](../../../images/toolbars/toolbars-icons-circle-outline-incorrect@2x.png) ![Uma ilustração de um grupo de itens com botões para Filtrar e Mais. Os botões são rotulados com símbolos com bordas circulares. (escuro)](../../../images/toolbars/toolbars-icons-circle-outline-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-icons-circle-outline-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-icons-circle-outline-incorrect~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/toolbars/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de um grupo de itens com botões para Filtrar e Mais. Os botões são rotulados com símbolos sem bordas.](../../../images/toolbars/toolbars-icons-no-outline-correct@2x.png) ![Uma ilustração de um grupo de itens com botões para Filtrar e Mais. Os botões são rotulados com símbolos sem bordas. (escuro)](../../../images/toolbars/toolbars-icons-no-outline-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-icons-no-outline-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-icons-no-outline-correct~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/toolbars/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Use o estilo `.prominent` para ações-chave, como Concluído ou Enviar.** Isso separa e dá um tom de cor à ação, de modo que haja um ponto focal claro. Especifique apenas uma ação principal e coloque-a no lado final da barra de ferramentas.

![Uma ilustração de dois itens de barra de ferramentas, com um botão Filtrar no lado inicial e um botão Concluído no lado final. Os botões não estão agrupados, e o botão Concluído tem o estilo proeminente aplicado para indicar que é a ação principal.](../../../images/toolbars/toolbars-prominent-action-tinted@2x.png) ![Uma ilustração de dois itens de barra de ferramentas, com um botão Filtrar no lado inicial e um botão Concluído no lado final. Os botões não estão agrupados, e o botão Concluído tem o estilo proeminente aplicado para indicar que é a ação principal. (escuro)](../../../images/toolbars/toolbars-prominent-action-tinted~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-prominent-action-tinted@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-prominent-action-tinted~dark@2x.png)*

## Agrupamento de itens

Você pode posicionar os itens da barra de ferramentas em três locais: a borda inicial, a área central e a borda final da barra de ferramentas. Essas áreas oferecem lugares familiares para controles de navegação, títulos de janelas ou documentos, ações comuns e busca.

- **Borda inicial.** Os elementos que permitem às pessoas voltar ao documento anterior e mostrar ou ocultar uma barra lateral aparecem na extremidade inicial, seguidos do título da view. Ao lado do título, a barra de ferramentas pode incluir um menu de documento que contém comandos padrão e específicos do app que afetam o documento como um todo, como Duplicar, Renomear, Mover e Exportar. Para garantir que esses itens estejam sempre disponíveis, os itens na borda inicial da barra de ferramentas não são personalizáveis.
- **Área central.** Controles comuns e úteis aparecem na área central, e o título da view pode aparecer aqui se não estiver na borda inicial. No macOS e no iPadOS, as pessoas podem adicionar, remover e reorganizar itens aqui se você permitir que personalizem a barra de ferramentas, e os itens nesta seção são recolhidos automaticamente no menu de estouro gerenciado pelo sistema quando a janela diminui o suficiente de tamanho.
- **Borda final.** A borda final contém itens importantes que precisam permanecer disponíveis, botões que abrem inspetores próximos, um campo de busca opcional e o menu Mais, que contém itens adicionais e oferece suporte à personalização da barra de ferramentas. Ela também inclui uma ação principal, como Concluído, quando existe uma. Os itens na borda final permanecem visíveis em todos os tamanhos de janela.

![Um diagrama da barra de ferramentas superior do app Freeform no iPad. Textos de chamada indicam a localização dos agrupamentos de itens na borda inicial, na área central e na borda final da barra de ferramentas.](../../../images/toolbars/toolbars-ipad-anatomy@2x.png) ![Um diagrama da barra de ferramentas superior do app Freeform no iPad. Textos de chamada indicam a localização dos agrupamentos de itens na borda inicial, na área central e na borda final da barra de ferramentas. (escuro)](../../../images/toolbars/toolbars-ipad-anatomy~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-ipad-anatomy@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-ipad-anatomy~dark@2x.png)*

Para posicionar os itens nos agrupamentos desejados, fixe-os na borda inicial, no centro ou na borda final e insira espaço entre botões ou outros itens quando apropriado.

**Agrupe logicamente os itens da barra de ferramentas por função e frequência de uso.** Por exemplo, o Keynote inclui várias seções baseadas em funcionalidade, incluindo uma para comandos de nível de apresentação, uma para comandos de reprodução e uma para inserção de objetos.

**Agrupe os controles de navegação e as ações críticas, como Concluído, Fechar ou Salvar, em seções dedicadas, familiares e visualmente distintas.** Isso reflete sua importância e ajuda as pessoas a descobrir e entender essas ações.

![Uma ilustração de uma barra de ferramentas superior no iPhone, com controles de voltar, avançar, seleção de ferramenta e o menu Mais agrupados em uma única seção na borda final.](../../../images/toolbars/toolbars-layout-grouping-incorrect@2x.png) ![Uma ilustração de uma barra de ferramentas superior no iPhone, com controles de voltar, avançar, seleção de ferramenta e o menu Mais agrupados em uma única seção na borda final. (escuro)](../../../images/toolbars/toolbars-layout-grouping-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-layout-grouping-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-layout-grouping-incorrect~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/toolbars/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de uma barra de ferramentas superior no iPhone, com controles de voltar e avançar agrupados na borda inicial e controles de seleção de ferramenta e o menu Mais agrupados na borda final.](../../../images/toolbars/toolbars-layout-grouping-correct@2x.png) ![Uma ilustração de uma barra de ferramentas superior no iPhone, com controles de voltar e avançar agrupados na borda inicial e controles de seleção de ferramenta e o menu Mais agrupados na borda final. (escuro)](../../../images/toolbars/toolbars-layout-grouping-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-layout-grouping-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-layout-grouping-correct~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/toolbars/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Mantenha agrupamentos e posicionamentos consistentes entre as plataformas.** Isso ajuda as pessoas a se familiarizarem com o seu app e a confiarem que ele se comporta de maneira semelhante, independentemente de onde o usem.

**Minimize o número de grupos.** Grupos de controles demais podem fazer uma barra de ferramentas parecer desorganizada e confusa, mesmo com o espaço adicional no iPad e no Mac. Em geral, procure ter no máximo três.

**Mantenha separadas as ações com rótulos de texto.** Colocar uma ação com rótulo de texto ao lado de uma ação com símbolo pode criar a ilusão de uma única ação com texto e símbolo combinados, levando a confusão e interpretação equivocada. Se a sua barra de ferramentas inclui vários botões com rótulo de texto, o texto desses botões pode parecer emendado, tornando os botões indistinguíveis. Adicione separação inserindo espaço fixo entre os botões. Para orientações para desenvolvedores, consulte [UIBarButtonItem.SystemItem.fixedSpace](https://developer.apple.com/documentation/uikit/uibarbuttonitem/systemitem/fixedspace).

![Uma ilustração de uma barra de ferramentas superior no iPhone, com um controle Editar com rótulo de texto e um controle Compartilhar com símbolo agrupados na borda final.](../../../images/toolbars/toolbars-layout-text-action-grouping-incorrect@2x.png) ![Uma ilustração de uma barra de ferramentas superior no iPhone, com um controle Editar com rótulo de texto e um controle Compartilhar com símbolo agrupados na borda final. (escuro)](../../../images/toolbars/toolbars-layout-text-action-grouping-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-layout-text-action-grouping-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-layout-text-action-grouping-incorrect~dark@2x.png)*

![Um X em um círculo para indicar o uso incorreto.](../../../images/toolbars/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de uma barra de ferramentas superior no iPhone, com um controle Editar com rótulo de texto e um controle Compartilhar com símbolo agrupados em seções individuais na borda final.](../../../images/toolbars/toolbars-layout-text-action-grouping-correct@2x.png) ![Uma ilustração de uma barra de ferramentas superior no iPhone, com um controle Editar com rótulo de texto e um controle Compartilhar com símbolo agrupados em seções individuais na borda final. (escuro)](../../../images/toolbars/toolbars-layout-text-action-grouping-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-layout-text-action-grouping-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-layout-text-action-grouping-correct~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar o uso correto.](../../../images/toolbars/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

## Considerações por plataforma

*Sem considerações adicionais para tvOS.*

### iOS

**Priorize apenas os itens mais importantes para inclusão na área principal da barra de ferramentas.** Como o espaço é muito limitado, considere com cuidado quais ações são essenciais para o seu app e inclua-as primeiro. Crie um menu Mais para incluir itens adicionais.

**Use um título grande para ajudar as pessoas a se manterem orientadas enquanto navegam e rolam.** Por padrão, um título grande faz a transição para um título padrão quando as pessoas começam a rolar o conteúdo e volta a ser grande quando elas rolam até o topo, lembrando-as de sua localização atual. Para orientações para desenvolvedores, consulte [prefersLargeTitles](https://developer.apple.com/documentation/uikit/uinavigationbar/preferslargetitles).

### iPadOS

**Considere combinar uma barra de ferramentas com uma barra de abas.** No iPadOS, uma barra de ferramentas e uma [barra de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars) podem coexistir no mesmo espaço horizontal na parte superior da view. Isso é particularmente útil para layouts em que você quer navegar entre algumas áreas principais do app mantendo toda a largura da janela disponível para o conteúdo. Para orientações, consulte [Layout](https://developer.apple.com/design/human-interface-guidelines/layout) e [Windows](https://developer.apple.com/design/human-interface-guidelines/windows).

### macOS

Em um app macOS, a barra de ferramentas fica na moldura na parte superior de uma janela, abaixo da barra de título ou integrada a ela. Observe que os títulos das janelas podem ser exibidos em linha com os controles e que os itens da barra de ferramentas não incluem moldura.

![Um diagrama de uma janela do Finder no macOS com textos de chamada mostrando a localização da barra de ferramentas e da moldura da janela.](../../../images/toolbars/toolbars-mac-window-anatomy@2x.png) ![Um diagrama de uma janela do Finder no macOS com textos de chamada mostrando a localização da barra de ferramentas e da moldura da janela. (escuro)](../../../images/toolbars/toolbars-mac-window-anatomy~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-mac-window-anatomy@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-mac-window-anatomy~dark@2x.png)*

**Disponibilize todos os itens da barra de ferramentas como comandos na barra de menus.** Como as pessoas podem personalizar a barra de ferramentas ou ocultá-la, ela não pode ser o único lugar que apresenta um comando. Em contrapartida, não faz sentido oferecer um item de barra de ferramentas para cada item de menu, porque nem todos os comandos de menu são importantes o bastante ou usados com frequência suficiente para justificar espaço na barra de ferramentas.

### visionOS

No visionOS, a barra de ferramentas fornecida pelo sistema aparece ao longo da borda inferior de uma janela, acima dos controles de gerenciamento da janela, e em um plano paralelo que fica ligeiramente à frente da janela ao longo do eixo z.

![Uma captura de tela de uma barra de ferramentas ao longo da parte inferior da janela do app Notas no visionOS.](../../../images/toolbars/visionos-toolbar-notes-app@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-toolbar-notes-app@2x.png)*

Para manter a legibilidade dos itens da barra de ferramentas enquanto o conteúdo rola atrás deles, o visionOS usa um desfoque variável no fundo da barra. O desfoque variável ancora a barra acima do conteúdo em rolagem, enquanto permite que o material de vidro da view permaneça uniforme e não dividido.

No visionOS, você pode fornecer um símbolo ou um rótulo de texto para cada item da barra de ferramentas. Quando as pessoas olham para um item da barra de ferramentas que contém um símbolo, o visionOS revela o rótulo de texto, fornecendo informações adicionais.

**Prefira usar uma barra de ferramentas fornecida pelo sistema.** A barra de ferramentas padrão tem uma aparência consistente e familiar e é otimizada para funcionar bem com entrada por olhar e por mãos. Além disso, o sistema posiciona automaticamente uma barra de ferramentas padrão na posição correta em relação à janela.

![Uma captura de tela de uma barra de ferramentas no visionOS.](../../../images/toolbars/visionos-toolbar-standard-layout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-toolbar-standard-layout@2x.png)*

**Evite criar uma barra de ferramentas vertical.** No visionOS, as [barras de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars) são verticais, portanto apresentar uma barra de ferramentas vertical poderia confundir as pessoas.

**Tente impedir que as janelas sejam redimensionadas abaixo da largura da barra de ferramentas.** O visionOS não inclui uma barra de menus em que cada app lista todas as suas ações, por isso é importante que a barra de ferramentas ofereça acesso confiável aos controles essenciais, independentemente do tamanho da janela.

**Se o seu app puder entrar em um estado modal, considere oferecer controles de barra de ferramentas relevantes para o contexto.** Por exemplo, um app de edição de fotos pode entrar em um estado modal para ajudar as pessoas a executar uma tarefa de edição de várias etapas. Nesse cenário, os controles na view modal de edição são diferentes dos controles da janela principal. Reinstale os controles padrão da barra de ferramentas da janela quando o app sair do estado modal.

**Evite usar um menu pull-down em uma barra de ferramentas.** Um menu pull-down permite oferecer ações adicionais relacionadas a um item da barra de ferramentas, mas pode ser difícil de descobrir e pode poluir a interface. Como uma barra de ferramentas fica na borda inferior de uma janela no visionOS, um menu pull-down pode obscurecer os controles padrão da janela que aparecem abaixo da borda inferior. Para orientações, consulte [Pull-down buttons](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons).

### watchOS

Um botão de barra de ferramentas permite oferecer funcionalidades importantes do app em uma view que exibe conteúdo relacionado. Você pode colocar botões de barra de ferramentas nos cantos superiores ou ao longo da parte inferior. Se você colocar esses botões acima do conteúdo rolável, eles sempre permanecem visíveis, enquanto o conteúdo rola por baixo deles.

![Uma captura de tela mostrando botões de barra de ferramentas nos cantos superiores inicial e final.](../../../images/toolbars/toolbars-watch-top-buttons@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-watch-top-buttons@2x.png)*

![Uma captura de tela mostrando dois botões de barra de ferramentas nos cantos inferiores inicial e final.](../../../images/toolbars/toolbars-watch-bottom-buttons@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-watch-bottom-buttons@2x.png)*

Para orientações para desenvolvedores, consulte [topBarLeading](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/topbarleading), [topBarTrailing](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/topbartrailing) ou [bottomBar](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/bottombar).

Você também pode colocar um botão na view rolável. Por padrão, um botão de barra de ferramentas rolável permanece oculto até que as pessoas o revelem rolando para cima. As pessoas costumam rolar até o topo de uma view rolável, então a descoberta de um botão de barra de ferramentas é automática.

![Uma captura de tela mostrando dois botões de barra de ferramentas nos cantos superiores inicial e final. A barra de ferramentas também tem um botão de ação principal na scroll view, mas ele está oculto.](../../../images/toolbars/toolbars-watch-primary-button-hidden@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-watch-primary-button-hidden@2x.png)*

![Uma captura de tela mostrando dois botões de barra de ferramentas nos cantos superiores inicial e final. A barra de ferramentas também exibe um botão de ação principal na scroll view.](../../../images/toolbars/toolbars-watch-primary-button-visible@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/toolbars-watch-primary-button-visible@2x.png)*

Para orientações para desenvolvedores, consulte [primaryAction](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/primaryaction).

**Use um botão de barra de ferramentas rolável para uma ação importante que não seja uma função principal do app.** Um botão de barra de ferramentas dá a flexibilidade de oferecer funcionalidades importantes em uma view cuja finalidade principal está relacionada a essa funcionalidade, mas pode não ser a mesma. Por exemplo, o Mail oferece a ação essencial Nova Mensagem em um botão de barra de ferramentas na parte superior da view Caixa de Entrada. A finalidade principal da Caixa de Entrada é exibir uma lista rolável de mensagens de e-mail, então faz sentido oferecer a ação de compor, estreitamente relacionada, em um botão de barra de ferramentas na parte superior da view.

## Recursos

#### Relacionados

[Barras laterais](https://developer.apple.com/design/human-interface-guidelines/sidebars)

[Barras de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

[Botões](https://developer.apple.com/design/human-interface-guidelines/buttons)

[Campos de busca](https://developer.apple.com/design/human-interface-guidelines/search-fields)

[Apple Design Resources](https://developer.apple.com/design/resources/)

#### Documentação para desenvolvedores

[Toolbars](https://developer.apple.com/documentation/swiftui/toolbars) — SwiftUI

[UIToolbar](https://developer.apple.com/documentation/uikit/uitoolbar) — UIKit

[NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) — AppKit

#### Vídeos

- [Get to know the new design system](https://developer.apple.com/videos/play/wwdc2025/356)

## Histórico de alterações

| Data | Alterações |
|---|---|
| December 16, 2025 | Atualizadas as orientações para o Liquid Glass. |
| June 9, 2025 | Adicionadas orientações para agrupar itens de barra, atualizadas as orientações para uso de símbolos e incorporadas as orientações da barra de navegação. |
| June 21, 2023 | Atualizado para incluir orientações para o visionOS. |
| June 5, 2023 | Atualizadas as orientações para usar barras de ferramentas no watchOS. |
