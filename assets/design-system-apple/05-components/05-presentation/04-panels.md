# Painéis (Panels)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/panels
>
> Plataformas: macos

*Em um app macOS, um painel normalmente flutua acima de outras janelas abertas, fornecendo controles, opções ou informações complementares relacionados à janela ativa ou à seleção atual.*

![Representação estilizada de um painel flutuando acima de uma janela. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/panels/components-panel-intro@2x.png) ![Representação estilizada de um painel flutuando acima de uma janela. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/panels/components-panel-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-panel-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-panel-intro~dark@2x.png)*

Em geral, um painel tem uma aparência menos proeminente do que a [janela principal](https://developer.apple.com/design/human-interface-guidelines/windows#macOS-window-states) de um app. Quando a situação exige, um painel também pode usar um estilo escuro e translúcido para oferecer uma experiência de heads-up display (ou *HUD*).

Quando seu app é executado em outras plataformas, considere usar uma visualização modal para apresentar conteúdo complementar relevante para a tarefa ou a seleção atual. Para orientações, consulte [Modalidade](https://developer.apple.com/design/human-interface-guidelines/modality).

## Boas práticas

**Use um painel para dar às pessoas acesso rápido a controles ou informações importantes relacionados ao conteúdo com o qual estão trabalhando.** Por exemplo, você pode usar um painel para fornecer controles ou ajustes que afetam o item selecionado no documento ou na janela ativa.

**Considere usar um painel para apresentar a funcionalidade de inspetor.** Um *inspetor* exibe os detalhes do item atualmente selecionado, atualizando automaticamente seu conteúdo quando o item muda ou quando as pessoas selecionam um novo item. Em contraste, se você precisa apresentar uma janela de *Informações*, que sempre mantém o mesmo conteúdo, mesmo quando o item selecionado muda, use uma janela comum, não um painel. Dependendo do layout do seu app, você também pode considerar usar um painel de [visualização dividida](https://developer.apple.com/design/human-interface-guidelines/split-views) para apresentar um inspetor.

**Prefira controles de ajuste simples em um painel.** Na medida do possível, evite incluir controles que exijam digitar texto ou selecionar itens para agir sobre eles, pois essas ações podem exigir várias etapas. Em vez disso, considere usar controles como controles deslizantes e steppers, pois esses componentes podem dar às pessoas um controle mais direto.

**Escreva um título breve que descreva a finalidade do painel.** Como um painel costuma flutuar acima de outras janelas abertas no seu app, ele precisa de uma barra de título para que as pessoas possam posicioná-lo onde quiserem. Crie um título curto usando um substantivo, ou uma locução nominal com [capitalização no estilo de título](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64), que ajude as pessoas a reconhecer o painel na tela. Por exemplo, o macOS oferece painéis conhecidos intitulados “Fontes” e “Cores”, e muitos apps usam o título “Inspetor”.

**Mostre e oculte os painéis de forma apropriada.** Quando seu app se torna ativo, traga todos os seus painéis abertos para a frente, independentemente de qual janela estava ativa quando o painel foi aberto. Quando seu app está inativo, oculte todos os seus painéis.

**Evite incluir painéis na lista de documentos do menu Janela.** Não há problema em incluir comandos para mostrar ou ocultar painéis no [menu Janela](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Window-menu), mas painéis não são documentos nem janelas padrão do app e não pertencem à lista do menu Janela.

**Em geral, evite disponibilizar o botão de minimizar de um painel.** As pessoas normalmente não precisam minimizar um painel, pois ele é exibido apenas quando necessário e desaparece quando o app está inativo.

**Refira-se aos painéis pelo título na interface e na documentação de ajuda.** Nos menus, use o título do painel sem incluir o termo *painel*: por exemplo, “Mostrar Fontes”, “Mostrar Cores” e “Mostrar Inspetor”. Na documentação de ajuda, pode ser confuso apresentar “painel” como um tipo diferente de janela, então geralmente é melhor se referir a um painel pelo título ou, quando isso trouxer clareza, acrescentando *janela* ao título. Por exemplo, o título “Inspetor” costuma fornecer contexto suficiente por si só, ao passo que pode ser mais claro usar “janela Fontes” e “janela Cores” em vez de apenas “Fontes” e “Cores”.

## Painéis estilo HUD

Um painel estilo HUD tem a mesma função de um painel padrão, mas sua aparência é mais escura e translúcida. Os HUDs funcionam bem em apps que apresentam conteúdo altamente visual ou que oferecem uma experiência imersiva, como edição de mídia ou uma apresentação de slides em tela inteira. Por exemplo, o QuickTime Player usa um HUD para exibir informações de inspetor sem obstruir muito o conteúdo.

![Uma captura de tela de um painel HUD translúcido, usado para exibir informações de inspetor de um arquivo de filme, incluindo o nome do arquivo, o formato, os quadros por segundo, a taxa de dados e o tamanho do quadro do conteúdo do filme.](../../../images/panels/hud-style-panel@2x.png) ![Uma captura de tela de um painel HUD translúcido, usado para exibir informações de inspetor de um arquivo de filme, incluindo o nome do arquivo, o formato, os quadros por segundo, a taxa de dados e o tamanho do quadro do conteúdo do filme. (escuro)](../../../images/panels/hud-style-panel~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/hud-style-panel@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/hud-style-panel~dark@2x.png)*

**Prefira painéis padrão.** As pessoas podem se distrair ou ficar confusas com um HUD quando não há um motivo lógico para sua presença. Além disso, um HUD pode não corresponder à configuração de aparência atual. Em geral, use um HUD somente:

- Em um app voltado para mídia que apresenta filmes, fotos ou slides
- Quando um painel padrão ocultaria conteúdo essencial
- Quando você não precisa incluir controles; com exceção do triângulo de divulgação, a maioria dos controles fornecidos pelo sistema não combina com a aparência de um HUD.

**Mantenha um único estilo de painel quando seu app alternar entre modos.** Por exemplo, se você usa um HUD quando seu app está no modo de tela inteira, prefira manter o estilo HUD quando as pessoas tirarem seu app da tela inteira.

**Use cor com moderação nos HUDs.** Cor demais na aparência escura de um HUD pode distrair. Muitas vezes, você precisa apenas de pequenas quantidades de cor de alto contraste para destacar informações importantes em um HUD.

**Mantenha os HUDs pequenos.** Os HUDs são projetados para serem discretamente úteis, então deixá-los crescer demais anula sua finalidade principal. Não deixe um HUD ocultar o conteúdo que ele ajusta e garanta que ele não compita com o conteúdo pela atenção das pessoas.

Para orientações para desenvolvedores, consulte [hudWindow](https://developer.apple.com/documentation/appkit/nswindow/stylemask-swift.struct/hudwindow).

## Considerações por plataforma

*Não compatível com iOS, iPadOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Janelas](https://developer.apple.com/design/human-interface-guidelines/windows)

[Modalidade](https://developer.apple.com/design/human-interface-guidelines/modality)

#### Documentação para desenvolvedores

[NSPanel](https://developer.apple.com/documentation/appkit/nspanel) — AppKit

[hudWindow](https://developer.apple.com/documentation/appkit/nswindow/stylemask-swift.struct/hudwindow) — AppKit
