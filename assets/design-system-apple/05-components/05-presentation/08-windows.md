# Janelas (Windows)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/windows
>
> Plataformas: ipados,macos,visionos

*Uma janela apresenta views e componentes de interface do seu app ou jogo.*

![Uma representação estilizada de uma janela com botões de fechar, minimizar e tela cheia. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/windows/components-window-intro@2x.png) ![Uma representação estilizada de uma janela com botões de fechar, minimizar e tela cheia. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/windows/components-window-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-window-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-window-intro~dark@2x.png)*

No iPadOS, macOS e visionOS, as janelas ajudam a definir os limites visuais do conteúdo do app e a separá-lo de outras áreas do sistema, além de possibilitar fluxos de trabalho de multitarefa tanto dentro de apps quanto entre eles. As janelas incluem elementos de interface fornecidos pelo sistema, como molduras e controles de janela, que permitem às pessoas abri-las, fechá-las, redimensioná-las e reposicioná-las.

Conceitualmente, os apps usam dois tipos de janelas para exibir conteúdo:

- Uma janela *primária* apresenta a navegação e o conteúdo principais de um app, e as ações associadas a eles.
- Uma janela *auxiliar* apresenta uma tarefa ou área específica de um app. Dedicada a uma única experiência, uma janela auxiliar não permite navegar para outras áreas do app e normalmente inclui um botão que as pessoas usam para fechá-la depois de concluir a tarefa.

Para orientações sobre como organizar o conteúdo dentro de uma janela em qualquer plataforma, consulte [Layout](https://developer.apple.com/design/human-interface-guidelines/layout); para orientações sobre como organizar o conteúdo no espaço do Apple Vision Pro, consulte [Layout espacial](https://developer.apple.com/design/human-interface-guidelines/spatial-layout). Para orientações a desenvolvedores, consulte [Windows](https://developer.apple.com/documentation/swiftui/windows).

## Boas práticas

**Garanta que suas janelas se adaptem de forma fluida a diferentes tamanhos para oferecer suporte a fluxos de trabalho de multitarefa e de várias janelas.** Para orientações, consulte [Layout](https://developer.apple.com/design/human-interface-guidelines/layout) e [Multitarefa](https://developer.apple.com/design/human-interface-guidelines/multitasking).

**Escolha o momento certo para abrir uma nova janela.** Abrir conteúdo em uma janela separada é ótimo para ajudar as pessoas a fazer várias tarefas ao mesmo tempo ou a preservar o contexto. Por exemplo, o Mail abre uma nova janela sempre que alguém seleciona a ação Escrever, de modo que a nova mensagem e o e-mail existente fiquem visíveis ao mesmo tempo. No entanto, abrir janelas novas em excesso cria bagunça e pode tornar a navegação no app mais confusa. Evite abrir novas janelas como comportamento padrão, a menos que faça sentido para o seu app.

**Considere oferecer a opção de ver o conteúdo em uma nova janela.** Embora seja melhor evitar abrir novas janelas como comportamento padrão, a menos que isso beneficie sua experiência de usuário, também é ótimo dar às pessoas a flexibilidade de ver o conteúdo de várias maneiras. Considere permitir que as pessoas vejam o conteúdo em uma nova janela por meio de um comando em um [menu de contexto](https://developer.apple.com/design/human-interface-guidelines/context-menus) ou no [menu Arquivo](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#File-menu). Para orientações a desenvolvedores, consulte [OpenWindowAction](https://developer.apple.com/documentation/swiftui/openwindowaction).

**Evite criar interfaces de janela personalizadas.** As janelas fornecidas pelo sistema têm aparência e comportamento que as pessoas entendem e reconhecem. Evite criar molduras ou controles de janela personalizados e não tente replicar a aparência fornecida pelo sistema. Fazer isso sem igualar perfeitamente a aparência e o comportamento do sistema pode fazer seu app parecer quebrado.

**Use o termo *janela* no conteúdo voltado ao usuário.** O sistema se refere às janelas de apps como *janelas* independentemente do tipo. Usar termos diferentes — incluindo *cena* (scene), que se refere à implementação da janela — provavelmente confundirá as pessoas.

## Considerações por plataforma

*Não compatível com iOS, tvOS ou watchOS.*

### iPadOS

As janelas são apresentadas de uma de duas maneiras, dependendo da escolha da pessoa nos ajustes de Multitarefa e Gestos.

- **Tela cheia.** As janelas dos apps preenchem toda a tela, e as pessoas alternam entre elas — ou entre várias janelas do mesmo app — usando o seletor de apps.
- **Em janelas.** As pessoas podem redimensionar livremente as janelas dos apps. Várias janelas podem estar na tela ao mesmo tempo, e as pessoas podem reposicioná-las e trazê-las para a frente. O sistema se lembra do tamanho e da posição das janelas mesmo quando um app é fechado.

**Tela cheia**

![Uma captura de tela do app Notas em tela cheia no iPad, com um documento aberto intitulado Nature Walks. A interface do app preenche toda a tela, sem borda visível para a janela.](../../../images/windows/windows-ipad-notes-fullscreen@2x.png) ![Uma captura de tela do app Notas em tela cheia no iPad, com um documento aberto intitulado Nature Walks. A interface do app preenche toda a tela, sem borda visível para a janela. (escuro)](../../../images/windows/windows-ipad-notes-fullscreen~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/windows-ipad-notes-fullscreen@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/windows-ipad-notes-fullscreen~dark@2x.png)*

**Em janelas**

![Uma captura de tela do app Notas em uma janela no iPad, com um documento aberto intitulado Nature Walks. A janela do documento ocupa o centro da tela, com o fundo da Tela de Início preenchendo o resto da tela atrás dela e o Dock na parte inferior.](../../../images/windows/windows-ipad-notes-windowed@2x.png) ![Uma captura de tela do app Notas em uma janela no iPad, com um documento aberto intitulado Nature Walks. A janela do documento ocupa o centro da tela, com o fundo da Tela de Início preenchendo o resto da tela atrás dela e o Dock na parte inferior. (escuro)](../../../images/windows/windows-ipad-notes-windowed~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/windows-ipad-notes-windowed@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/windows-ipad-notes-windowed~dark@2x.png)*

**Garanta que os controles de janela não se sobreponham aos itens da barra de ferramentas.** Quando em janela, as janelas dos apps incluem controles de janela na borda inicial da barra de ferramentas. Se seu app tiver botões de barra de ferramentas na borda inicial, eles podem ficar ocultos pelos controles de janela quando estes aparecerem. Para evitar isso, em vez de posicionar botões diretamente na borda inicial, mova-os para dentro quando os controles de janela aparecerem.

**Considere permitir que as pessoas usem um gesto para abrir conteúdo em uma nova janela.** Por exemplo, as pessoas podem usar o gesto de pinça para expandir um item do Notas em uma nova janela. Para orientações a desenvolvedores, consulte [collectionView(_:sceneActivationConfigurationForItemAt:point:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:sceneactivationconfigurationforitemat:point:)) (para fazer a transição a partir de um item de collection view) ou [UIWindowScene.ActivationInteraction](https://developer.apple.com/documentation/uikit/uiwindowscene/activationinteraction) (para fazer a transição a partir de um item em qualquer outra view).

> **Dica:** Se você só precisa permitir que as pessoas vejam um arquivo, pode apresentá-lo sem criar sua própria janela, mas deve oferecer suporte a várias janelas no seu app. Para orientações a desenvolvedores, consulte [QLPreviewSceneActivationConfiguration](https://developer.apple.com/documentation/quicklook/qlpreviewsceneactivationconfiguration).

### macOS

No macOS, as pessoas normalmente executam vários apps ao mesmo tempo, muitas vezes vendo janelas de vários apps em uma única mesa e alternando com frequência entre diferentes janelas — movendo, redimensionando, minimizando e revelando as janelas de acordo com seu estilo de trabalho.

Para saber como configurar uma janela para exibir seu jogo no macOS, consulte [Managing your game window for Metal in macOS](https://developer.apple.com/documentation/metal/managing-your-game-window-for-metal-in-macos).

#### Anatomia de uma janela do macOS

Uma janela do macOS consiste em uma moldura e uma área de corpo. As pessoas podem mover uma janela arrastando a moldura e, muitas vezes, podem redimensioná-la arrastando suas bordas.

A *moldura* de uma janela aparece acima da área do corpo e pode incluir controles de janela e uma [barra de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars). Em casos raros, uma janela também pode exibir uma barra inferior, que é uma parte da moldura que aparece abaixo do conteúdo do corpo.

#### Estados de uma janela do macOS

Uma janela do macOS pode ter um de três estados:

- **Principal (Main).** A janela mais à frente que as pessoas veem é a janela principal de um app. Pode haver apenas uma janela principal por app.
- **Chave (Key).** Também chamada de *janela ativa*, a janela chave aceita a entrada das pessoas. Só pode haver uma janela chave na tela por vez. Embora a janela principal do app em primeiro plano geralmente seja a janela chave, outra janela — como um painel flutuando acima da janela principal — pode ser a chave. As pessoas normalmente clicam em uma janela para torná-la chave; quando clicam no ícone do app no Dock para trazer todas as janelas desse app para a frente, somente a janela acessada mais recentemente se torna chave.
- **Inativa (Inactive).** Uma janela que não está em primeiro plano é uma janela inativa.

O sistema dá às janelas principal, chave e inativa aparências diferentes para ajudar as pessoas a identificá-las visualmente. Por exemplo, a janela chave usa cor nas opções da barra de título para fechar, minimizar e dar zoom; janelas inativas e janelas principais que não são chave usam cinza nessas opções. Além disso, janelas inativas não usam [vibrancy](https://developer.apple.com/design/human-interface-guidelines/materials) (um efeito que pode trazer cor para uma janela a partir do conteúdo abaixo dela), o que as faz parecer discretas e visualmente mais distantes que as janelas principal e chave.

![Uma ilustração de uma pilha de três janelas, da seguinte forma: uma janela inativa ao fundo, a janela principal de um app no meio e uma janela chave aparecendo acima das outras duas janelas.](../../../images/windows/window-states@2x.png) ![Uma ilustração de uma pilha de três janelas, da seguinte forma: uma janela inativa ao fundo, a janela principal de um app no meio e uma janela chave aparecendo acima das outras duas janelas. (escuro)](../../../images/windows/window-states~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/window-states@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/window-states~dark@2x.png)*

> **Observação:** Algumas janelas — normalmente painéis como Cores ou Fontes — se tornam a janela chave somente quando as pessoas clicam na barra de título da janela ou em um componente que exige entrada de teclado, como um campo de texto.

**Garanta que as janelas personalizadas usem as aparências definidas pelo sistema.** As pessoas dependem das diferenças visuais entre as janelas para identificar a janela em primeiro plano e saber qual janela aceitará sua entrada. Quando você usa componentes fornecidos pelo sistema, o fundo da janela e a aparência dos botões são atualizados automaticamente quando a janela muda de estado; se você usar implementações personalizadas, precisará fazer esse trabalho por conta própria.

**Evite colocar informações ou ações críticas em uma barra inferior, porque as pessoas costumam reposicionar uma janela de modo a ocultar sua borda inferior.** Se precisar incluir uma, use-a apenas para exibir uma pequena quantidade de informações diretamente relacionadas ao conteúdo da janela ou a um item selecionado nela. Por exemplo, o Finder usa uma barra inferior (chamada de barra de status) para exibir o número total de itens em uma janela, o número de itens selecionados e quanto espaço está disponível no disco. Uma barra inferior é pequena, portanto, se você tiver mais informações a exibir, considere usar um inspetor, que normalmente apresenta informações no lado final de uma split view.

### visionOS

O visionOS define dois estilos principais de janela: padrão e volumétrico. Tanto uma janela padrão (chamada de *janela*) quanto uma janela volumétrica (chamada de *volume*) podem exibir conteúdo 2D e 3D, e as pessoas podem ver várias janelas e volumes ao mesmo tempo, tanto no Shared Space quanto em um Full Space.

![Uma ilustração que representa uma janela no visionOS. A ilustração consiste em dois retângulos arredondados paralelos, ligeiramente separados e exibidos em ângulo, posicionados acima de uma barra de janela.](../../../images/windows/visionos-window-style-2d-window@2x.png) ![Uma ilustração que representa uma janela no visionOS. A ilustração consiste em dois retângulos arredondados paralelos, ligeiramente separados e exibidos em ângulo, posicionados acima de uma barra de janela. (escuro)](../../../images/windows/visionos-window-style-2d-window~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-window-style-2d-window@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-window-style-2d-window~dark@2x.png)*

![Uma ilustração que representa um volume no visionOS. A ilustração consiste em um cubo translúcido. A base do cubo é mais escura que os outros lados. A frente do cubo está posicionada acima de uma barra de janela.](../../../images/windows/visionos-window-style-3d-volume@2x.png) ![Uma ilustração que representa um volume no visionOS. A ilustração consiste em um cubo translúcido. A base do cubo é mais escura que os outros lados. A frente do cubo está posicionada acima de uma barra de janela. (escuro)](../../../images/windows/visionos-window-style-3d-volume~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-window-style-3d-volume@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-window-style-3d-volume~dark@2x.png)*

> **Observação:** O visionOS também define o estilo de janela *plain*, que é semelhante ao estilo padrão, exceto que o plano vertical não usa o fundo de vidro. Para orientações a desenvolvedores, consulte [PlainWindowStyle](https://developer.apple.com/documentation/swiftui/plainwindowstyle).

O sistema define a posição inicial da primeira janela ou volume que as pessoas abrem no seu app ou jogo. Tanto no Shared Space quanto em um Full Space, as pessoas podem mover janelas e volumes para novos locais.

#### Janelas do visionOS

O estilo de janela padrão consiste em um plano vertical que usa um [material](https://developer.apple.com/design/human-interface-guidelines/materials) de fundo não modificável chamado *glass* e inclui um botão de fechar, uma barra de janela e controles de redimensionamento que permitem às pessoas fechar, mover e redimensionar a janela. Uma janela também pode incluir um botão Compartilhar, uma [barra de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars), uma [barra de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars) e um ou mais [ornamentos](https://developer.apple.com/design/human-interface-guidelines/ornaments). Por padrão, o visionOS usa [escala](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Scale) dinâmica para ajudar o tamanho de uma janela a parecer consistente, independentemente de sua proximidade em relação ao observador. Para orientações a desenvolvedores, consulte [DefaultWindowStyle](https://developer.apple.com/documentation/swiftui/defaultwindowstyle).

![Uma captura de tela de uma janela de um app chamado 'Hello World' no visionOS. A janela inclui texto e botões para entrar em diferentes experiências.](../../../images/windows/visionos-window-2d@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-window-2d@2x.png)*

**Prefira usar uma janela para apresentar uma interface familiar e oferecer suporte a tarefas familiares.** Ajude as pessoas a se sentirem em casa no seu app exibindo uma interface com a qual já estão à vontade, reservando [experiências imersivas](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences) para o conteúdo e as atividades significativos que você oferece. Se quiser mostrar conteúdo 3D delimitado, como um tabuleiro de jogo, considere usar um [volume](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS-volumes).

**Mantenha o fundo de vidro da janela.** O fundo de vidro padrão ajuda seu conteúdo a parecer parte do ambiente das pessoas, adaptando-se dinamicamente à iluminação e usando reflexos especulares e sombras para comunicar a escala e a posição da janela. Remover o material de vidro tende a fazer os elementos de interface e o texto ficarem menos legíveis e deixarem de parecer relacionados entre si; usar um fundo opaco obscurece o ambiente das pessoas e pode fazer uma janela parecer restritiva e pesada.

**Escolha um tamanho inicial de janela que minimize áreas vazias dentro dela.** Por padrão, uma janela mede 1280x720 pt. Quando uma janela é aberta pela primeira vez, o sistema a posiciona a cerca de dois metros à frente de quem usa o dispositivo, dando-lhe uma largura aparente de cerca de três metros. Espaço vazio demais dentro de uma janela pode fazê-la parecer desnecessariamente grande, além de obscurecer outros conteúdos no espaço das pessoas.

**Procure um formato inicial que combine com o conteúdo da janela.** Por exemplo, uma janela padrão do Keynote é larga porque os slides são largos, enquanto uma janela padrão do Safari é alta porque a maioria das páginas da web é muito mais longa do que larga. Em jogos, um jogo de construção de torres provavelmente será aberto em uma janela mais alta do que um jogo de corrida.

**Escolha um tamanho mínimo e máximo para cada janela para ajudar seu conteúdo a continuar ótimo.** As pessoas gostam de poder redimensionar janelas ao personalizar seu espaço, mas você precisa garantir que seu layout se ajuste bem em todos os tamanhos. Se você não definir um tamanho mínimo e máximo para uma janela, as pessoas poderiam deixá-la tão pequena que os elementos de interface se sobreponham, ou tão grande que seu app ou jogo se torne inutilizável. Para orientações a desenvolvedores, consulte [Positioning and sizing windows](https://developer.apple.com/documentation/visionos/positioning-and-sizing-windows).

![Uma captura de tela de uma janela de um app no visionOS. A janela inclui um texto que fala sobre objetos em órbita e botões para ver um satélite, a Lua e um telescópio. O botão do satélite está selecionado e um satélite 3D é exibido.](../../../images/windows/visionos-window-2d-with-volume@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-window-2d-with-volume@2x.png)*

**Minimize a profundidade do conteúdo 3D que você exibe em uma janela.** O sistema adiciona realces e sombras às views e aos controles dentro de uma janela, dando-lhes a aparência de [profundidade](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Depth) e ajudando-os a parecer mais substanciais, especialmente quando as pessoas veem a janela de um ângulo. Embora você possa exibir conteúdo 3D em uma janela, o sistema o recorta se o conteúdo se estender demais além da superfície da janela. Para exibir conteúdo 3D com maior profundidade, use um volume.

#### Volumes do visionOS

Você pode usar um volume para exibir conteúdo 2D ou 3D que as pessoas podem ver de qualquer ângulo. Um volume inclui controles de gerenciamento de janela assim como uma janela, mas, diferentemente de uma janela, o botão de fechar e a barra de janela de um volume mudam de posição para ficar de frente para o observador conforme ele se move ao redor do volume. Para orientações a desenvolvedores, consulte [VolumetricWindowStyle](https://developer.apple.com/documentation/swiftui/volumetricwindowstyle).

![Uma captura de tela de um volume contendo um globo 3D no visionOS, ao lado de uma janela.](../../../images/windows/visionos-window-3d@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/visionos-window-3d@2x.png)*

**Prefira usar um volume para exibir conteúdo 3D rico.** Em contraste, se quiser apresentar uma interface familiar e centrada na interface do usuário, geralmente funciona melhor usar uma [janela](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS-windows).

**Posicione o conteúdo 2D para que fique bom de vários ângulos.** Como a perspectiva de uma pessoa muda conforme ela se move ao redor de um volume, a localização do conteúdo 2D dentro dele pode parecer mudar de maneiras que não fazem sentido. Para fixar conteúdo 2D em áreas específicas de conteúdo 3D dentro de um volume, você pode usar um attachment.

**Em geral, use escala dinâmica.** A escala dinâmica ajuda o conteúdo de um volume a permanecer confortavelmente legível e fácil de interagir, mesmo quando está longe do observador. Por outro lado, se você quiser que o conteúdo de um volume represente um objeto do mundo real, como um produto em um app de varejo, pode usar escala fixa (que é o padrão).

**Aproveite a aparência padrão da base (baseplate) para ajudar as pessoas a distinguir as bordas de um volume.** No visionOS 2 e posterior, o sistema torna automaticamente visível o “piso” horizontal de um volume, ou *baseplate*, exibindo um brilho suave ao redor de sua borda quando as pessoas olham para ela. Se seu conteúdo não preencher o volume, o brilho fornecido pelo sistema pode ajudar as pessoas a perceber as bordas do volume, o que pode ser particularmente útil para manter o controle de redimensionamento fácil de encontrar. Por outro lado, se seu conteúdo for de sangria total ou preencher os limites do volume — ou se você exibir uma aparência personalizada de baseplate —, talvez você não queira o brilho padrão.

**Considere oferecer conteúdo de alto valor em um ornamento.** No visionOS 2 e posterior, um volume pode incluir um ornamento além de uma barra de ferramentas e de uma barra de abas. Você pode usar um ornamento para reduzir a desordem em um volume e dar destaque a views ou controles importantes. Quando você usa uma âncora de attachment para especificar a localização do ornamento, como `topBack` ou `bottomFront`, o ornamento permanece na mesma posição, em relação à perspectiva do observador, conforme ele se move ao redor do volume. Evite posicionar um ornamento na mesma borda que uma barra de ferramentas ou barra de abas e prefira criar apenas um ornamento adicional para evitar ofuscar o conteúdo importante do seu volume. Para orientações a desenvolvedores, consulte [ornament(visibility:attachmentAnchor:contentAlignment:ornament:)](https://developer.apple.com/documentation/swiftui/view/ornament(visibility:attachmentanchor:contentalignment:ornament:)).

**Escolha um alinhamento que ofereça suporte à maneira como as pessoas interagem com seu volume.** Conforme as pessoas movem um volume, a baseplate pode permanecer paralela ao piso do ambiente da pessoa ou pode se inclinar para acompanhar o ângulo em que a pessoa está olhando. Em geral, um volume que permanece paralelo ao piso funciona bem para conteúdo com o qual as pessoas não interagem muito, enquanto um volume que se inclina para acompanhar para onde a pessoa está olhando pode manter o conteúdo confortavelmente utilizável, mesmo quando o observador está reclinado.

## Recursos

#### Relacionados

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

[Split views](https://developer.apple.com/design/human-interface-guidelines/split-views)

[Multitarefa](https://developer.apple.com/design/human-interface-guidelines/multitasking)

#### Documentação para desenvolvedores

[Windows](https://developer.apple.com/documentation/swiftui/windows) — SwiftUI

[WindowGroup](https://developer.apple.com/documentation/swiftui/windowgroup) — SwiftUI

[UIWindow](https://developer.apple.com/documentation/uikit/uiwindow) — UIKit

[NSWindow](https://developer.apple.com/documentation/appkit/nswindow) — AppKit

#### Vídeos

- [Eleve o design do seu app para iPad](https://developer.apple.com/videos/play/wwdc2025/208)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de junho de 2025 | Adicionadas boas práticas e atualizado com orientações para janelas redimensionáveis no iPadOS. |
| 10 de junho de 2024 | Atualizado para incluir orientações sobre o uso de volumes no visionOS 2 e adicionados exemplos específicos para jogos. |
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
