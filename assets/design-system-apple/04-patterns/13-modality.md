# Modalidade (Modality)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/modality
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Modalidade é uma técnica de design que apresenta o conteúdo em um modo separado e dedicado, que impede a interação com a visualização pai e exige uma ação explícita para ser dispensado.*

![Um esboço de uma janela ativa acima de uma janela inativa, sugerindo foco na janela da frente. A imagem está sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original de seis cores da Apple.](../../images/modality/patterns-modality-intro@2x.png) ![Um esboço de uma janela ativa acima de uma janela inativa, sugerindo foco na janela da frente. A imagem está sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original de seis cores da Apple. (escuro)](../../images/modality/patterns-modality-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-modality-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-modality-intro~dark@2x.png)*

Apresentar conteúdo de forma modal pode:

- Garantir que as pessoas recebam informações críticas e, se necessário, ajam com base nelas
- Oferecer opções que permitam às pessoas confirmar ou modificar a ação mais recente
- Ajudar as pessoas a realizar uma tarefa distinta e de escopo restrito sem perder o fio do contexto anterior
- Proporcionar às pessoas uma experiência imersiva ou ajudá-las a se concentrar em uma tarefa complexa

Dependendo da plataforma, você pode usar diferentes componentes para apresentar esses tipos de experiências modais. Por exemplo, todas as plataformas podem apresentar um *alerta*, que é uma visualização modal que entrega informações importantes relacionadas ao seu app ou jogo. Além disso, cada plataforma pode definir vários tipos de visualizações modais para apresentar opções específicas do contexto, como *visualizações de atividade*, *folhas* e *caixas de diálogo de confirmação* ou *folhas de ações*. Para ajudar as pessoas a realizar uma tarefa distinta, os apps do iOS, iPadOS e macOS tendem a usar folhas ou popovers, mas os apps do iPadOS, macOS e visionOS também podem simplesmente usar uma janela separada.

Para oferecer uma experiência temporária, como visualizar mídia, ou para ajudar as pessoas a realizar uma tarefa distinta de várias etapas, como editar conteúdo, os apps podem oferecer uma experiência modal em tela inteira. Em contrapartida, os apps também podem oferecer tipos não modais de experiências em tela inteira; para orientações, consulte [Entrando em tela inteira](https://developer.apple.com/design/human-interface-guidelines/going-full-screen). Os apps do visionOS podem oferecer uma variedade de experiências imersivas; para orientações, consulte [Experiências imersivas](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences).

## Boas práticas

**Apresente conteúdo de forma modal somente quando houver um benefício claro.** Uma experiência modal tira as pessoas do contexto atual e exige uma ação para ser dispensada, então é importante usar a modalidade somente quando ela ajudar as pessoas a se concentrar ou a fazer escolhas que afetem o conteúdo ou o dispositivo delas.

**Procure manter as tarefas modais simples, curtas e objetivas.** Se uma tarefa modal for complicada demais, as pessoas podem perder o fio da tarefa que suspenderam ao entrar na visualização modal, especialmente se a visualização modal ocultar o contexto anterior.

**Tome cuidado para não criar uma experiência modal que pareça um app dentro do seu app.** Em particular, apresentar uma hierarquia de visualizações dentro de uma tarefa modal pode fazer as pessoas esquecerem como refazer seus passos. Se uma tarefa modal precisar conter subvisualizações, ofereça um caminho único pela hierarquia e evite incluir botões que as pessoas possam confundir com o botão que dispensa a visualização modal.

**Considere usar um estilo modal em tela inteira para conteúdo aprofundado ou uma tarefa complexa.** Uma experiência modal que preenche uma janela ou a tela do dispositivo minimiza distrações, então pode funcionar bem para apresentar vídeos, fotos ou visualizações da câmera, ou para dar suporte a uma tarefa de várias etapas, como fazer anotações em um documento ou editar uma foto. Quando um app do visionOS é executado junto com outros apps no Shared Space, uma apresentação modal em tela inteira preenche uma janela; se as pessoas fizerem a transição do app para um Full Space, a apresentação modal em tela inteira pode se tornar uma experiência mais imersiva.

**Sempre dê às pessoas uma maneira óbvia de dispensar uma visualização modal.** Em geral, funciona bem seguir as convenções da plataforma que as pessoas já conhecem. Por exemplo, em apps do iOS, iPadOS e watchOS, as pessoas normalmente esperam encontrar um botão na barra de ferramentas superior ou deslizar para baixo; em apps do macOS e tvOS, as pessoas esperam encontrar um botão na visualização de conteúdo principal.

**Quando necessário, ajude as pessoas a evitar a perda de dados pedindo confirmação antes de fechar uma visualização modal.** Independentemente de as pessoas usarem um gesto de dispensar ou um botão, se o fechamento da visualização puder resultar na perda de conteúdo gerado pelo usuário, explique a situação e dê às pessoas formas de resolvê-la. Por exemplo, no iOS, você pode apresentar uma folha de ações que inclua uma opção de salvar.

**Facilite a identificação da tarefa de uma visualização modal.** Quando as pessoas entram em uma visualização modal, elas saem do contexto anterior e podem não voltar a ele imediatamente. Quando você fornece um título que nomeia a tarefa da visualização modal — ou um texto adicional que descreve a tarefa ou oferece orientação —, você ajuda as pessoas a se situarem no seu app.

**Permita que as pessoas dispensem uma visualização modal antes de apresentar outra.** Permitir que várias visualizações modais fiquem visíveis ao mesmo tempo tende a criar poluição visual e pode fazer o seu app parecer disperso e desorganizado. As pessoas precisam se lembrar do contexto em que estavam antes de uma visualização modal aparecer, então apresentar várias visualizações aumenta a carga cognitiva delas, especialmente quando uma visualização modal esconde outra ao aparecer sobre ela. Embora um alerta possa aparecer sobre todo o outro conteúdo — incluindo outras visualizações modais —, você nunca deve exibir mais de um alerta ao mesmo tempo.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Folhas](https://developer.apple.com/design/human-interface-guidelines/sheets)

[Alertas](https://developer.apple.com/design/human-interface-guidelines/alerts)

[Popovers](https://developer.apple.com/design/human-interface-guidelines/popovers)

[Folhas de ações](https://developer.apple.com/design/human-interface-guidelines/action-sheets)

[Visualizações de atividade](https://developer.apple.com/design/human-interface-guidelines/activity-views)

#### Documentação para desenvolvedores

[Presentation modifiers](https://developer.apple.com/documentation/swiftui/view-presentation) — SwiftUI

[UIModalPresentationStyle](https://developer.apple.com/documentation/uikit/uimodalpresentationstyle) — UIKit

[Modal Windows and Panels](https://developer.apple.com/documentation/appkit/modal-windows-and-panels) — AppKit

#### Vídeos

- [Get to know the new design system](https://developer.apple.com/videos/play/wwdc2025/356)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 5 de dezembro de 2023 | Orientações aprimoradas para experiências modais aprofundadas e esclarecimento das orientações sobre várias visualizações modais. |
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
