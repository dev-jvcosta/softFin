# Indicadores de progresso (Progress indicators)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/progress-indicators
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Os indicadores de progresso permitem que as pessoas saibam que seu app não travou enquanto carrega conteúdo ou executa operações demoradas.*

![Uma representação estilizada de um indicador de atividade indeterminado girando acima de uma barra de progresso. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/progress-indicators/components-progress-indicators-intro@2x.png) ![Uma representação estilizada de um indicador de atividade indeterminado girando acima de uma barra de progresso. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/progress-indicators/components-progress-indicators-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-progress-indicators-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-progress-indicators-intro~dark@2x.png)*

Alguns indicadores de progresso também dão às pessoas uma maneira de estimar quanto tempo precisam esperar para que algo seja concluído. Todos os indicadores de progresso são transitórios: aparecem somente enquanto uma operação está em andamento e desaparecem depois que ela termina.

Como a duração de uma operação é conhecida ou desconhecida, existem dois tipos de indicadores de progresso:

- *Determinado*, para uma tarefa com duração bem definida, como a conversão de um arquivo
- *Indeterminado*, para tarefas não quantificáveis, como carregar ou sincronizar dados complexos

Tanto os indicadores de progresso determinados quanto os indeterminados podem ter aparências diferentes dependendo da plataforma. Um indicador de progresso determinado mostra o progresso de uma tarefa preenchendo uma trilha linear ou circular conforme a tarefa é concluída. As *barras de progresso* incluem uma trilha que se preenche do lado inicial para o lado final. Os *indicadores de progresso circulares* têm uma trilha que se preenche no sentido horário.

![Uma imagem de uma barra de progresso horizontal no macOS preenchida quase até o ponto médio com cor sólida.](../../../images/progress-indicators/progress-indicator-determinate-bar@2x.png) ![Uma imagem de uma barra de progresso horizontal no macOS preenchida quase até o ponto médio com cor sólida. (escuro)](../../../images/progress-indicators/progress-indicator-determinate-bar~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-indicator-determinate-bar@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-indicator-determinate-bar~dark@2x.png)*

![Uma imagem de um indicador de progresso circular no macOS preenchido quase até a posição das oito horas com cor sólida.](../../../images/progress-indicators/progress-indicator-determinate-circle@2x.png) ![Uma imagem de um indicador de progresso circular no macOS preenchido quase até a posição das oito horas com cor sólida. (escuro)](../../../images/progress-indicators/progress-indicator-determinate-circle~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-indicator-determinate-circle@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-indicator-determinate-circle~dark@2x.png)*

Um indicador de progresso indeterminado — também chamado de *indicador de atividade* — usa uma imagem animada para indicar progresso. Todas as plataformas oferecem suporte a uma imagem circular que parece girar; no entanto, o macOS também oferece suporte a uma barra de progresso indeterminada.

![Uma imagem de um indicador de atividade circular girando no macOS.](../../../images/progress-indicators/progress-indicator-intermediate-spinner@2x.png) ![Uma imagem de um indicador de atividade circular girando no macOS. (escuro)](../../../images/progress-indicators/progress-indicator-intermediate-spinner~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-indicator-intermediate-spinner@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-indicator-intermediate-spinner~dark@2x.png)*

![Uma imagem de um indicador de atividade girando no watchOS.](../../../images/progress-indicators/activity-indicators-watch@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-indicators-watch@2x.png)*

Para orientações a desenvolvedores, consulte [ProgressView](https://developer.apple.com/documentation/swiftui/progressview).

## Boas práticas

**Sempre que possível, use um indicador de progresso determinado.** Um indicador de progresso indeterminado mostra que um processo está ocorrendo, mas não ajuda as pessoas a estimar quanto tempo uma tarefa levará. Um indicador de progresso determinado pode ajudar as pessoas a decidir se vão fazer outra coisa enquanto esperam a conclusão da tarefa, reiniciar a tarefa em outro momento ou abandoná-la.

**Seja o mais preciso possível ao informar o avanço em um indicador de progresso determinado.** Considere uniformizar o ritmo de avanço para ajudar as pessoas a se sentirem confiantes quanto ao tempo necessário para concluir a tarefa. Mostrar 90 por cento de conclusão em cinco segundos e os últimos 10 por cento em 5 minutos pode fazer as pessoas se perguntarem se seu app ainda está funcionando e pode até parecer enganoso.

**Mantenha os indicadores de progresso em movimento para que as pessoas saibam que algo continua acontecendo.** As pessoas tendem a associar um indicador parado a um processo travado ou a um app congelado. Se um processo travar por algum motivo, forneça um retorno que ajude as pessoas a entender o problema e o que podem fazer a respeito.

**Sempre que possível, mude uma barra de progresso de indeterminada para determinada.** Se um processo indeterminado chegar a um ponto em que você possa determinar sua duração, mude para uma barra de progresso determinada. As pessoas geralmente preferem um indicador de progresso determinado, porque ele as ajuda a avaliar o que está acontecendo e quanto tempo levará.

**Não mude do estilo circular para o estilo de barra.** Os indicadores de atividade (também chamados de *spinners*) e as barras de progresso têm formas e tamanhos diferentes, portanto fazer a transição entre eles pode atrapalhar sua interface e confundir as pessoas.

**Se for útil, exiba uma descrição que forneça contexto adicional sobre a tarefa.** Seja preciso e sucinto. Evite termos vagos como *carregando* ou *autenticando*, pois raramente agregam valor.

**Exiba um indicador de progresso em um local consistente.** Escolher um local consistente para um indicador de progresso ajuda as pessoas a encontrar de forma confiável o status de uma operação entre plataformas ou dentro de apps ou entre eles.

**Quando viável, permita que as pessoas interrompam o processamento.** Se as pessoas puderem interromper um processo sem causar efeitos colaterais negativos, inclua um botão Cancelar. Se interromper o processo puder causar efeitos colaterais negativos — como perder a parte baixada de um arquivo —, pode ser útil fornecer um botão Pausar além do botão Cancelar.

**Informe às pessoas quando interromper um processo tiver uma consequência negativa.** Quando cancelar um processo resultar em perda de progresso, é útil fornecer um [alerta](https://developer.apple.com/design/human-interface-guidelines/alerts) que inclua uma opção para confirmar o cancelamento ou retomar o processo.

## Considerações por plataforma

*Nenhuma consideração adicional para tvOS ou visionOS.*

### iOS, iPadOS

#### Controles de atualização de conteúdo

Um controle de atualização permite que as pessoas recarreguem o conteúdo imediatamente, normalmente em uma table view, sem esperar que ocorra a próxima atualização automática de conteúdo. Um controle de atualização é um tipo especializado de indicador de atividade que fica oculto por padrão, tornando-se visível quando as pessoas arrastam para baixo a view que desejam recarregar. No Mail, por exemplo, as pessoas podem arrastar para baixo a lista de mensagens da Caixa de Entrada para verificar se há novas mensagens.

![Uma captura de tela de um controle de atualização de conteúdo girando enquanto o Mail verifica se há novas mensagens.](../../../images/progress-indicators/refresh-controls@2x.png) ![Uma captura de tela de um controle de atualização de conteúdo girando enquanto o Mail verifica se há novas mensagens. (escuro)](../../../images/progress-indicators/refresh-controls~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/refresh-controls@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/refresh-controls~dark@2x.png)*

**Execute atualizações automáticas de conteúdo.** Embora as pessoas gostem de poder atualizar o conteúdo imediatamente, elas também esperam que atualizações automáticas ocorram periodicamente. Não torne as pessoas responsáveis por iniciar cada atualização. Mantenha os dados atualizados fazendo atualizações regulares.

**Forneça um título curto somente se ele agregar valor.** Opcionalmente, um controle de atualização pode incluir um título. Na maioria dos casos, isso é desnecessário, pois a animação do controle indica que o conteúdo está sendo carregado. Se você incluir um título, não o use para explicar como realizar uma atualização. Em vez disso, forneça informações de valor sobre o conteúdo que está sendo atualizado. Um controle de atualização no Podcasts, por exemplo, usa um título para informar às pessoas quando ocorreu a última atualização de podcasts.

Para orientações a desenvolvedores, consulte [UIRefreshControl](https://developer.apple.com/documentation/uikit/uirefreshcontrol).

### macOS

No macOS, um indicador de progresso indeterminado pode ter aparência de barra ou circular. Ambas as versões usam uma imagem animada para indicar que o app está executando uma tarefa.

![Uma imagem de uma barra de progresso horizontal totalmente preenchida no macOS. O preenchimento é animado para percorrer várias mudanças de tom conforme o progresso continua.](../../../images/progress-indicators/progress-indicator-intermediate-bar@2x.png) ![Uma imagem de uma barra de progresso horizontal totalmente preenchida no macOS. O preenchimento é animado para percorrer várias mudanças de tom conforme o progresso continua. (escuro)](../../../images/progress-indicators/progress-indicator-intermediate-bar~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-indicator-intermediate-bar@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-indicator-intermediate-bar~dark@2x.png)*

![Uma imagem de um indicador de atividade circular girando no macOS.](../../../images/progress-indicators/progress-indicator-intermediate-spinner@2x.png) ![Uma imagem de um indicador de atividade circular girando no macOS. (escuro)](../../../images/progress-indicators/progress-indicator-intermediate-spinner~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-indicator-intermediate-spinner@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-indicator-intermediate-spinner~dark@2x.png)*

**Prefira um indicador de atividade (spinner) para comunicar o status de uma operação em segundo plano ou quando o espaço for limitado.** Os spinners são pequenos e discretos, por isso são úteis para tarefas assíncronas em segundo plano, como recuperar mensagens de um servidor. Os spinners também são bons para comunicar progresso em uma área pequena, como dentro de um campo de texto ou ao lado de um controle específico, como um botão.

**Evite rotular um indicador de progresso giratório.** Como um spinner normalmente aparece quando as pessoas iniciam um processo, um rótulo geralmente é desnecessário.

### watchOS

Por padrão, o sistema exibe os indicadores de progresso em branco sobre a cor de fundo da cena. Você pode alterar a cor do indicador de progresso definindo sua cor de matiz.

![Uma imagem de uma barra de progresso preenchendo da esquerda para a direita no watchOS.](../../../images/progress-indicators/progress-bar-watch@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-bar-watch@2x.png)*

![Uma imagem de um indicador de progresso circular preenchendo no sentido horário no watchOS.](../../../images/progress-indicators/progress-ring-watch@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/progress-ring-watch@2x.png)*

![Uma imagem de um indicador de atividade girando no watchOS.](../../../images/progress-indicators/activity-indicators-watch@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-indicators-watch@2x.png)*

## Recursos

#### Documentação para desenvolvedores

[ProgressView](https://developer.apple.com/documentation/swiftui/progressview) — SwiftUI

[UIProgressView](https://developer.apple.com/documentation/uikit/uiprogressview) — UIKit

[UIActivityIndicatorView](https://developer.apple.com/documentation/uikit/uiactivityindicatorview) — UIKit

[UIRefreshControl](https://developer.apple.com/documentation/uikit/uirefreshcontrol) — UIKit

[NSProgressIndicator](https://developer.apple.com/documentation/appkit/nsprogressindicator) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 12 de setembro de 2023 | Orientações comuns a todas as plataformas combinadas. |
| 5 de junho de 2023 | Atualizado para refletir as mudanças no watchOS 10. |
