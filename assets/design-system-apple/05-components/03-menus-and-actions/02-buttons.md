# Botões (Buttons)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/buttons
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um botão inicia uma ação instantânea.*

![Uma representação estilizada de dois botões alinhados horizontalmente. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/buttons/components-buttons-intro@2x.png) ![Uma representação estilizada de dois botões alinhados horizontalmente. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/buttons/components-buttons-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-buttons-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-buttons-intro~dark@2x.png)*

Versáteis e altamente personalizáveis, os botões oferecem às pessoas maneiras simples e familiares de realizar tarefas no seu app. Em geral, um botão combina três atributos para comunicar claramente sua função:

- **Estilo.** Um estilo visual baseado em tamanho, cor e forma.
- **Conteúdo.** Um símbolo (ou ícone), um rótulo de texto, ou ambos, que um botão exibe para transmitir sua finalidade.
- **Função.** Uma função definida pelo sistema que identifica o significado semântico de um botão e pode afetar sua aparência.

Também existem muitos componentes semelhantes a botões que têm aparências e comportamentos distintos para casos de uso específicos, como [interruptores](https://developer.apple.com/design/human-interface-guidelines/toggles), [botões pop-up](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons) e [controles segmentados](https://developer.apple.com/design/human-interface-guidelines/segmented-controls).

## Boas práticas

Quando os botões são imediatamente reconhecíveis e fáceis de entender, o app tende a parecer intuitivo e bem projetado.

**Torne os botões fáceis de usar.** É essencial deixar espaço suficiente ao redor de um botão para que as pessoas possam distingui-lo visualmente dos componentes e do conteúdo ao redor. Dar espaço suficiente a um botão também é fundamental para ajudar as pessoas a selecioná-lo ou ativá-lo, independentemente do método de entrada que usem. Como regra geral, um botão precisa de uma região de toque de pelo menos 44x44 pt — no visionOS, 60x60 pt — para garantir que as pessoas possam selecioná-lo com facilidade, seja com a ponta do dedo, um ponteiro, os olhos ou um controle remoto.

**Sempre inclua um estado de pressionado em um botão personalizado.** Sem um estado de pressionado, um botão pode parecer sem resposta, fazendo as pessoas se perguntarem se ele está aceitando sua entrada.

## Estilo

Os botões do sistema oferecem uma variedade de estilos que permitem personalização e, ao mesmo tempo, fornecem estados de interação integrados, suporte à acessibilidade e adaptação da aparência. Diferentes plataformas definem estilos diferentes que ajudam você a comunicar hierarquias de ações no seu app.

**Em geral, use um botão com estilo visual de destaque para a ação mais provável em uma visualização.** Para chamar a atenção das pessoas para um botão específico, use um estilo de botão de destaque para que o sistema possa aplicar uma cor de destaque ao plano de fundo do botão. Botões que usam cor tendem a ser os mais visualmente distintos, ajudando as pessoas a identificar rapidamente as ações que provavelmente usarão. Mantenha o número de botões de destaque em um ou dois por visualização. Apresentar botões de destaque demais aumenta a carga cognitiva, exigindo que as pessoas gastem mais tempo considerando as opções antes de fazer uma escolha.

**Use o estilo — e não o tamanho — para distinguir visualmente a escolha preferida entre várias opções.** Quando você usa botões do mesmo tamanho para oferecer duas ou mais opções, sinaliza que as opções formam um conjunto coerente de escolhas. Por outro lado, colocar dois botões de tamanhos diferentes próximos um do outro pode deixar a interface confusa e inconsistente. Se quiser destacar a opção preferida ou mais provável em um conjunto, use um estilo de botão mais proeminente para essa opção e um estilo menos proeminente para as demais.

**Evite aplicar uma cor semelhante aos rótulos dos botões e aos planos de fundo da camada de conteúdo.** Se seu app já tem conteúdo vivo e colorido na camada de conteúdo, prefira usar a aparência monocromática padrão dos rótulos dos botões. Para mais orientações, consulte [Cor do Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/color#Liquid-Glass-color).

## Conteúdo

**Garanta que cada botão comunique claramente sua finalidade.** Dependendo da plataforma, um botão pode conter um símbolo (ou ícone), um rótulo de texto, ou ambos, para ajudar as pessoas a entender o que ele faz.

> **Observação:** No macOS e no visionOS, o sistema exibe uma dica de ferramenta (tooltip) depois que as pessoas posicionam o ponteiro sobre um botão por um instante. Uma dica de ferramenta exibe uma frase curta que explica o que o botão faz; para orientações, consulte [Oferecendo ajuda](https://developer.apple.com/design/human-interface-guidelines/offering-help).

**Procure associar ações familiares a ícones familiares.** Por exemplo, as pessoas conseguem prever que um botão contendo o símbolo `square.and.arrow.up` as ajudará a realizar atividades relacionadas a compartilhamento. Se fizer sentido usar um ícone no seu botão, considere usar um [símbolo](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) existente ou personalizado. Para ver uma lista de símbolos que representam ações comuns, consulte [Ícones padrão](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons).

**Considere usar texto quando um rótulo curto comunicar com mais clareza do que um ícone.** Para usar texto, escreva algumas palavras que descrevam sucintamente o que o botão faz. Usando [capitalização no estilo de título](https://help.apple.com/applestyleguide/#/apsgb744e4a3?sub=apdca93e113f1d64), considere começar o rótulo com um verbo para ajudar a transmitir a ação do botão — por exemplo, um botão que permite às pessoas adicionar itens ao carrinho de compras pode usar o rótulo “Adicionar ao Carrinho”.

## Função

Um botão do sistema pode ter uma das seguintes funções:

- **Normal.** Sem significado específico.
- **Primária.** O botão é o botão padrão — o botão que as pessoas têm maior probabilidade de escolher.
- **Cancelar.** O botão cancela a ação atual.
- **Destrutiva.** O botão executa uma ação que pode resultar na destruição de dados.

A função de um botão pode ter efeitos adicionais em sua aparência. Por exemplo, um botão primário usa a cor de destaque do app, enquanto um botão destrutivo usa a cor vermelha do sistema.

![Um exemplo de alerta com três botões do sistema, rotulados Botão Primário, Botão Destrutivo e Botão Secundário. O botão primário usa uma cor de destaque azul, o botão destrutivo usa texto na cor vermelha do sistema e o botão secundário aparece como um botão padrão.](../../../images/buttons/buttons-roles-alert@2x.png) ![Um exemplo de alerta com três botões do sistema, rotulados Botão Primário, Botão Destrutivo e Botão Secundário. O botão primário usa uma cor de destaque azul, o botão destrutivo usa texto na cor vermelha do sistema e o botão secundário aparece como um botão padrão. (escuro)](../../../images/buttons/buttons-roles-alert~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/buttons-roles-alert@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/buttons-roles-alert~dark@2x.png)*

**Atribua a função primária ao botão que as pessoas têm maior probabilidade de escolher.** Quando um botão primário responde à tecla Return, é fácil para as pessoas confirmarem rapidamente sua escolha. Além disso, quando o botão está em uma visualização temporária — como uma [sheet](https://developer.apple.com/design/human-interface-guidelines/sheets), uma visualização editável ou um [alerta](https://developer.apple.com/design/human-interface-guidelines/alerts) —, atribuir a ele a função primária significa que a visualização pode ser fechada automaticamente quando as pessoas pressionam Return.

**Não atribua a função primária a um botão que executa uma ação destrutiva, mesmo que essa ação seja a escolha mais provável.** Por causa de sua proeminência visual, as pessoas às vezes escolhem um botão primário sem lê-lo antes. Ajude as pessoas a evitar a perda de conteúdo atribuindo a função primária a botões não destrutivos.

## Considerações por plataforma

*Nenhuma consideração adicional para tvOS.*

### iOS, iPadOS

**Configure um botão para exibir um indicador de atividade quando precisar fornecer feedback sobre uma ação que não é concluída instantaneamente.** Exibir um indicador de atividade dentro de um botão pode economizar espaço na interface e, ao mesmo tempo, comunicar claramente o motivo da demora. Para ajudar a esclarecer o que está acontecendo, você também pode configurar o botão para exibir um rótulo diferente ao lado do indicador de atividade. Por exemplo, o rótulo “Finalizar compra” poderia mudar para “Finalizando compra…” enquanto o indicador de atividade estiver visível. Quando ocorre uma demora depois que as pessoas clicam ou tocam no botão configurado, o sistema exibe o indicador de atividade ao lado do rótulo original ou alternativo, ocultando a imagem do botão, se houver.

![Uma ilustração de um botão rotulado Finalizar compra.](../../../images/buttons/button-activity-indicator-hidden@2x.png) ![Uma ilustração de um botão rotulado Finalizar compra. (escuro)](../../../images/buttons/button-activity-indicator-hidden~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/button-activity-indicator-hidden@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/button-activity-indicator-hidden~dark@2x.png)*

![Uma ilustração de um botão rotulado Finalizando compra, com um indicador de atividade no lado inicial do rótulo.](../../../images/buttons/button-activity-indicator-visible@2x.png) ![Uma ilustração de um botão rotulado Finalizando compra, com um indicador de atividade no lado inicial do rótulo. (escuro)](../../../images/buttons/button-activity-indicator-visible~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/button-activity-indicator-visible@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/button-activity-indicator-visible~dark@2x.png)*

### macOS

Vários tipos específicos de botão são exclusivos do macOS.

#### Botões de pressionar (Push buttons)

O tipo de botão padrão no macOS é conhecido como *push button* (botão de pressionar). Você pode configurar um botão de pressionar para exibir texto, um símbolo, um ícone ou uma imagem, ou uma combinação de texto e imagem. Os botões de pressionar podem atuar como o botão padrão em uma visualização e você pode aplicar cor a eles.

**Use um botão de pressionar de altura flexível somente quando precisar exibir conteúdo alto ou de altura variável.** Os botões de altura flexível oferecem suporte às mesmas configurações dos botões de pressionar normais — e usam o mesmo raio de canto e o mesmo preenchimento de conteúdo — para que tenham aparência consistente com os outros botões da sua interface. Se você precisar apresentar um botão que contenha duas linhas de texto ou um ícone alto, use um botão de altura flexível; caso contrário, use um botão de pressionar padrão. Para orientações para desenvolvedores, consulte [NSButton.BezelStyle.flexiblePush](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/flexiblepush).

**Acrescente reticências no final do título quando um botão de pressionar abrir outra janela, visualização ou app.** Em todo o sistema, reticências no título de um controle indicam que as pessoas podem fornecer entradas adicionais. Por exemplo, os botões Editar no painel Preenchimento Automático dos Ajustes do Safari incluem reticências porque abrem outras visualizações que permitem às pessoas modificar os valores de preenchimento automático.

**Considere oferecer suporte a spring loading.** Em sistemas com um Magic Trackpad, o *spring loading* permite que as pessoas ativem um botão arrastando itens selecionados sobre ele e fazendo um clique forçado — ou seja, pressionando com mais força — sem soltar os itens selecionados. Depois do clique forçado, as pessoas podem continuar arrastando os itens, possivelmente para realizar ações adicionais.

#### Botões quadrados (Square buttons)

Um *botão quadrado* (também conhecido como *botão de gradiente*) inicia uma ação relacionada a uma visualização, como adicionar ou remover linhas em uma tabela.

Os botões quadrados contêm símbolos ou ícones — não texto — e você pode configurá-los para se comportarem como botões de pressionar, interruptores ou botões pop-up. Os botões aparecem bem próximos à visualização associada — geralmente dentro ou abaixo dela — para que as pessoas saibam quais visualizações os botões afetam.

**Use botões quadrados em uma visualização, não na moldura da janela.** Os botões quadrados não se destinam ao uso em barras de ferramentas ou barras de status. Se você precisar de um botão em uma [barra de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars), use um item de barra de ferramentas.

**Prefira usar um símbolo em um botão quadrado.** Os [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) oferecem uma ampla variedade de símbolos que recebem automaticamente a coloração adequada em seu estado padrão e em resposta à interação do usuário.

**Evite usar rótulos para apresentar botões quadrados.** Como os botões quadrados estão intimamente ligados a uma visualização específica, sua finalidade geralmente é clara sem a necessidade de texto descritivo.

Para orientações para desenvolvedores, consulte [NSButton.BezelStyle.smallSquare](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/smallsquare).

#### Botões de ajuda (Help buttons)

Um *botão de ajuda* aparece dentro de uma visualização e abre a documentação de ajuda específica do app.

Os botões de ajuda são botões circulares, de tamanho consistente, que contêm um ponto de interrogação. Para orientações sobre como criar documentação de ajuda, consulte [Oferecendo ajuda](https://developer.apple.com/design/human-interface-guidelines/offering-help).

**Use o botão de ajuda fornecido pelo sistema para exibir sua documentação de ajuda.** As pessoas estão familiarizadas com a aparência do botão de ajuda padrão e sabem que, ao escolhê-lo, o conteúdo de ajuda é aberto.

**Quando possível, abra o tópico de ajuda relacionado ao contexto atual.** Por exemplo, o botão de ajuda no painel Regras dos ajustes do Mail abre o Manual do Usuário do Mail em um tópico de ajuda que explica como alterar esses ajustes. Se nenhum tópico de ajuda específico se aplicar diretamente ao contexto atual, abra o nível superior da documentação de ajuda do seu app quando as pessoas escolherem um botão de ajuda.

**Inclua no máximo um botão de ajuda por janela.** Vários botões de ajuda no mesmo contexto dificultam que as pessoas prevejam o resultado ao clicar em um deles.

**Posicione os botões de ajuda onde as pessoas esperam encontrá-los.** Use os locais a seguir como orientação.

| Estilo de visualização | Local do botão de ajuda |
|---|---|
| Caixa de diálogo com botões de dispensa (como OK e Cancelar) | Canto inferior, oposto aos botões de dispensa e alinhado verticalmente a eles |
| Caixa de diálogo sem botões de dispensa | Canto inferior esquerdo ou inferior direito |
| Janela ou painel de ajustes | Canto inferior esquerdo ou inferior direito |

**Use um botão de ajuda dentro de uma visualização, não na moldura da janela.** Por exemplo, evite colocar um botão de ajuda em uma barra de ferramentas ou barra de status.

**Evite exibir texto que apresente um botão de ajuda.** As pessoas sabem o que um botão de ajuda faz, então não precisam de texto descritivo adicional.

#### Botões de imagem (Image buttons)

Um *botão de imagem* aparece em uma visualização e exibe uma imagem, um símbolo ou um ícone. Você pode configurar um botão de imagem para se comportar como um botão de pressionar, interruptor ou botão pop-up.

**Use um botão de imagem em uma visualização, não na moldura da janela.** Por exemplo, evite colocar um botão de imagem em uma barra de ferramentas ou barra de status. Se precisar usar uma imagem como botão em uma barra de ferramentas, use um item de barra de ferramentas. Consulte [Barras de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars).

**Inclua cerca de 10 pixels de preenchimento entre as bordas da imagem e as bordas do botão.** As bordas de um botão de imagem definem sua área clicável, mesmo quando não estão visíveis. Incluir preenchimento garante que um clique seja registrado corretamente mesmo que não ocorra exatamente sobre a imagem. Em geral, evite incluir uma borda fornecida pelo sistema em um botão de imagem; para orientações para desenvolvedores, consulte [isBordered](https://developer.apple.com/documentation/appkit/nsbutton/isbordered).

**Se precisar incluir um rótulo, posicione-o abaixo do botão de imagem.** Para orientações relacionadas, consulte [Rótulos](https://developer.apple.com/design/human-interface-guidelines/labels).

### visionOS

Um botão do visionOS normalmente inclui um plano de fundo visível que pode ajudar as pessoas a vê-lo, e o botão reproduz um som para dar feedback quando as pessoas interagem com ele.

![Uma gravação que mostra a parte superior de uma janela no visionOS. A janela contém vários botões, incluindo um botão “Mais”, que recebe o efeito de foco (hover). O botão é selecionado e aparece um menu contendo opções adicionais.](../../../images/buttons/visionos-button-styles-animation@2x.png)

*Vídeo: Uma gravação que mostra a parte superior de uma janela no visionOS. A janela contém vários botões, incluindo um botão “Mais”, que recebe o efeito de foco (hover). O botão é selecionado e aparece um menu contendo opções adicionais.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-button-styles-animation.mp4)

Há três formas de botão padrão no visionOS. Normalmente, um botão somente com ícone usa a forma [circle](https://developer.apple.com/documentation/swiftui/buttonbordershape/circle), um botão somente com texto usa a forma [roundedRectangle](https://developer.apple.com/documentation/swiftui/buttonbordershape/roundedrectangle) ou [capsule](https://developer.apple.com/documentation/swiftui/buttonbordershape/capsule), e um botão que inclui ícone e texto usa a forma capsule.

Os botões do visionOS usam diferentes estilos visuais para comunicar quatro estados de interação diferentes.

![Uma imagem de um botão circular que contém um ícone de um quadrado com contorno e cantos arredondados. O plano de fundo do botão é escuro e o contorno tracejado é branco.](../../../images/buttons/visionos-button-state-idle@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-button-state-idle@2x.png)*

![Uma imagem de um botão circular que contém um ícone de um quadrado com contorno e cantos arredondados. O plano de fundo do botão é medianamente escuro e o contorno é branco.](../../../images/buttons/visionos-button-state-hover@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-button-state-hover@2x.png)*

![Uma imagem de um botão circular que contém um ícone de um quadrado com contorno e cantos arredondados. O plano de fundo do botão é branco e o contorno é preto.](../../../images/buttons/visionos-button-state-selected@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-button-state-selected@2x.png)*

![Uma imagem de um botão circular que contém um ícone de um quadrado com contorno e cantos arredondados. O plano de fundo do botão é muito escuro e o contorno é claro.](../../../images/buttons/visionos-button-state-unavailable@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-button-state-unavailable@2x.png)*

> **Observação:** No visionOS, os botões não oferecem suporte a efeitos de foco (hover) personalizados.

Além dos quatro estados mostrados acima, um botão também pode revelar uma dica de ferramenta quando as pessoas olham para ele por um breve período. Em geral, os botões que contêm texto não precisam exibir uma dica de ferramenta porque o rótulo descritivo do botão comunica o que ele faz.

![Uma animação que mostra uma dica de ferramenta aparecendo abaixo de um botão do visionOS.](../../../images/buttons/visionos-button-dwell-tooltip@2x.png)

*Vídeo: Uma animação que mostra uma dica de ferramenta aparecendo abaixo de um botão do visionOS.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-button-dwell-tooltip.mp4)

No visionOS, os botões podem ter os seguintes tamanhos.

| Forma | Mini (28 pt) | Small (32 pt) | Regular (44 pt) | Large (52 pt) | Extra large (64 pt) |
|---|---|---|---|---|---|
| Circular | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* |
| Cápsula (somente texto) |  | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* |  |
| Cápsula (texto e ícone) |  |  | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* |  |
| Retângulo arredondado |  | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* | ![Um sinal de verificação que indica disponibilidade.](../../../images/buttons/table-availability-checkmark@2x.png) ![Um sinal de verificação que indica disponibilidade. (escuro)](../../../images/buttons/table-availability-checkmark~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/table-availability-checkmark~dark@2x.png)* |  |

**Prefira botões que tenham uma forma e um preenchimento de plano de fundo discerníveis.** Costuma ser mais fácil para as pessoas enxergarem um botão quando ele está dentro de uma forma que usa um preenchimento de plano de fundo contrastante. A exceção é um botão em uma barra de ferramentas, um menu de contexto, um alerta ou um [ornamento](https://developer.apple.com/design/human-interface-guidelines/ornaments), em que a forma e o material do componente maior tornam o botão confortavelmente visível. As diretrizes a seguir podem ajudar você a garantir que um botão tenha boa aparência em diferentes contextos:

- Quando um botão aparece sobre uma [janela](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS) de vidro, use o material [thin](https://developer.apple.com/documentation/swiftui/material/thin) como plano de fundo do botão.
- Quando um botão aparece flutuando no espaço, use o [material de vidro](https://developer.apple.com/design/human-interface-guidelines/materials#visionOS) como plano de fundo.

**Evite criar um botão personalizado que use preenchimento de plano de fundo branco e texto ou ícones pretos.** O sistema reserva esse estilo visual para transmitir o estado de alternado (ativado).

**Em geral, prefira botões circulares ou em forma de cápsula.** Os olhos das pessoas tendem a ser atraídos para os cantos de uma forma, dificultando manter o olhar no centro dela. Quanto mais arredondada for a forma de um botão, mais fácil é para as pessoas olharem para ele de forma constante. Quando precisar exibir um botão isolado, prefira um botão em forma de cápsula.

**Deixe espaço suficiente ao redor de um botão para facilitar que as pessoas olhem para ele.** Procure posicionar os botões de modo que seus centros fiquem sempre a pelo menos 60 pt de distância. Se seus botões medirem 60 pt ou mais, adicione 4 pt de preenchimento ao redor deles para evitar que o efeito de foco (hover) se sobreponha. Além disso, geralmente é melhor evitar exibir botões pequenos ou mini em uma pilha vertical ou em uma linha horizontal.

**Escolha a forma certa se precisar exibir botões com rótulo de texto em uma pilha ou linha.** Especificamente, prefira a forma de retângulo arredondado em uma pilha vertical de botões e prefira a forma de cápsula em uma linha horizontal de botões.

**Use controles padrão para aproveitar os sons de feedback audível que as pessoas já conhecem.** O feedback audível é especialmente importante no visionOS, porque o sistema não reproduz hápticos.

### watchOS

O watchOS exibe todos os botões em linha usando a forma de botão [capsule](https://developer.apple.com/documentation/swiftui/buttonbordershape/capsule). Quando você coloca um botão em linha com o conteúdo, ele ganha um efeito de material que contrasta com o plano de fundo para garantir a legibilidade.

![Uma ilustração que representa uma tela do Apple Watch, que inclui botões Primário e Secundário em forma de cápsula.](../../../images/buttons/buttons-watch-full-width@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/buttons-watch-full-width@2x.png)*

**Use uma barra de ferramentas para colocar botões nos cantos.** O sistema move automaticamente a hora e o título para acomodar os botões da barra de ferramentas. O sistema também aplica a aparência [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass) aos botões da barra de ferramentas, oferecendo uma distinção visual clara em relação ao conteúdo abaixo deles.

![Uma ilustração que mostra botões da barra de ferramentas nos cantos superiores inicial e final, além de três botões da barra de ferramentas na parte inferior da tela.](../../../images/buttons/buttons-watch-toolbar-corners@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/buttons-watch-toolbar-corners@2x.png)*

**Prefira botões que ocupem toda a largura da tela para as ações principais do seu app.** Botões de largura total ficam melhores e são mais fáceis de tocar. Se dois botões precisarem compartilhar o mesmo espaço horizontal, use a mesma altura para ambos e use imagens ou títulos de texto curtos como conteúdo de cada botão.

**Use botões da barra de ferramentas para oferecer navegação para áreas relacionadas ou ações contextuais para o conteúdo da visualização.** Esses botões dão acesso a informações adicionais ou a ações secundárias para o conteúdo da visualização.

**Use a mesma altura em pilhas verticais de botões de texto de uma e duas linhas.** Sempre que possível, use alturas de botão idênticas para manter a consistência visual.

## Recursos

#### Relacionados

[Botões pop-up](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons)

[Botões pull-down](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

[Interruptores](https://developer.apple.com/design/human-interface-guidelines/toggles)

[Controles segmentados](https://developer.apple.com/design/human-interface-guidelines/segmented-controls)

[Botão de localização](https://developer.apple.com/design/human-interface-guidelines/privacy#Location-button)

#### Documentação para desenvolvedores

[Button](https://developer.apple.com/documentation/swiftui/button) — SwiftUI

[UIButton](https://developer.apple.com/documentation/uikit/uibutton) — UIKit

[NSButton](https://developer.apple.com/documentation/appkit/nsbutton) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 16 de dezembro de 2025 | Atualizadas as orientações para o Liquid Glass. |
| 9 de junho de 2025 | Atualizadas as orientações para estilos e conteúdo de botões. |
| 2 de fevereiro de 2024 | Observado que os botões do visionOS não oferecem suporte a efeitos de foco (hover) personalizados. |
| 5 de dezembro de 2023 | Esclarecidas algumas terminologias e orientações para botões no visionOS. |
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
| 5 de junho de 2023 | Atualizadas as orientações para o uso de botões no watchOS. |
