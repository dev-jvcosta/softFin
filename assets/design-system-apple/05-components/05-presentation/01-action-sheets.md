# Folhas de ação (Action sheets)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/action-sheets
>
> Plataformas: ios,ipados,macos,tvos,watchos

*Uma folha de ação é uma visualização modal que apresenta opções relacionadas a uma ação iniciada pelas pessoas.*

![Uma representação estilizada de um conjunto de botões de folha de ação na parte inferior de um iPhone. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores.](../../../images/action-sheets/components-action-sheet-intro@2x.png) ![Uma representação estilizada de um conjunto de botões de folha de ação na parte inferior de um iPhone. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores. (escuro)](../../../images/action-sheets/components-action-sheet-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-action-sheet-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-action-sheet-intro~dark@2x.png)*

> **Nota para desenvolvedores:** Ao usar o SwiftUI, você pode oferecer a funcionalidade de folha de ação em todas as plataformas especificando um [modificador de apresentação](https://developer.apple.com/documentation/swiftui/view-presentation) para uma caixa de diálogo de confirmação. Se você usa o UIKit, utilize [UIAlertController.Style.actionSheet](https://developer.apple.com/documentation/uikit/uialertcontroller/style/actionsheet) para exibir uma folha de ação no iOS, iPadOS e tvOS.

## Boas práticas

**Use uma folha de ação — e não um alerta — para oferecer opções relacionadas a uma ação intencional.** Por exemplo, quando as pessoas cancelam a mensagem que estão editando no Mail no iPhone, uma folha de ação oferece duas opções: excluir o rascunho ou salvar o rascunho. Embora um alerta também possa ajudar as pessoas a confirmar ou cancelar uma ação com consequências destrutivas, ele não oferece opções adicionais relacionadas à ação. Mais importante, um alerta geralmente é inesperado e normalmente informa às pessoas sobre um problema ou uma mudança na situação atual que pode exigir uma ação delas. Para obter orientações, consulte [Alertas](https://developer.apple.com/design/human-interface-guidelines/alerts).

![Uma captura de tela parcial de uma nova mensagem sendo redigida no Mail no iPhone.](../../../images/action-sheets/action-sheet-iphone-mail@2x.png) ![Uma captura de tela parcial de uma nova mensagem sendo redigida no Mail no iPhone. (escuro)](../../../images/action-sheets/action-sheet-iphone-mail~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/action-sheet-iphone-mail@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/action-sheet-iphone-mail~dark@2x.png)*

![Uma captura de tela parcial de uma nova mensagem sendo redigida no Mail no iPhone, com a folha de ação aberta após a escolha de cancelar a mensagem. A folha de ação apresenta as opções de excluir o rascunho ou salvar o rascunho.](../../../images/action-sheets/action-sheet-iphone-mail-delete-action@2x.png) ![Uma captura de tela parcial de uma nova mensagem sendo redigida no Mail no iPhone, com a folha de ação aberta após a escolha de cancelar a mensagem. A folha de ação apresenta as opções de excluir o rascunho ou salvar o rascunho. (escuro)](../../../images/action-sheets/action-sheet-iphone-mail-delete-action~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/action-sheet-iphone-mail-delete-action@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/action-sheet-iphone-mail-delete-action~dark@2x.png)*

**Use folhas de ação com moderação.** As folhas de ação fornecem às pessoas informações e opções importantes, mas interrompem a tarefa atual para isso. Para incentivar as pessoas a prestar atenção às folhas de ação, evite usá-las mais do que o necessário.

**Procure manter os títulos curtos o suficiente para serem exibidos em uma única linha.** Um título longo é difícil de ler rapidamente e pode ser truncado ou exigir que as pessoas rolem a tela.

**Forneça uma mensagem somente se necessário.** Em geral, o título — combinado com o contexto da ação atual — fornece informações suficientes para ajudar as pessoas a entender suas opções.

**Se necessário, forneça um botão Cancelar que permita às pessoas rejeitar uma ação que possa destruir dados.** Posicione o botão Cancelar na parte inferior da folha de ação (ou no canto superior esquerdo da folha no watchOS). Uma caixa de diálogo de confirmação do SwiftUI inclui um botão Cancelar por padrão.

**Torne as opções destrutivas visualmente proeminentes.** Use o estilo destrutivo para botões que executam ações destrutivas e posicione esses botões no topo da folha de ação, onde tendem a ser mais notados. Para obter orientações para desenvolvedores, consulte [destructive](https://developer.apple.com/documentation/swiftui/buttonrole/destructive) (SwiftUI) ou [UIAlertAction.Style.destructive](https://developer.apple.com/documentation/uikit/uialertaction/style-swift.enum/destructive) (UIKit).

## Considerações por plataforma

*Nenhuma consideração adicional para macOS ou tvOS. Não compatível com visionOS.*

### iOS, iPadOS

**Use uma folha de ação — e não um menu — para oferecer opções relacionadas a uma ação.** As pessoas estão acostumadas a ver uma folha de ação aparecer quando realizam uma ação que pode exigir opções de esclarecimento. Em contraste, as pessoas esperam que um menu apareça quando escolhem revelá-lo.

**Evite deixar uma folha de ação rolar.** Quanto mais botões uma folha de ação tem, mais tempo e esforço as pessoas levam para fazer uma escolha. Além disso, rolar uma folha de ação pode ser difícil de fazer sem tocar inadvertidamente em um botão.

### watchOS

O estilo de folha de ação definido pelo sistema inclui um título, uma mensagem opcional, um botão Cancelar e um ou mais botões adicionais. A aparência dessa interface é diferente dependendo do dispositivo.

![Uma ilustração de uma folha de ação no Apple Watch, mostrando conteúdo que representa texto na metade superior da tela do relógio e dois botões empilhados na metade inferior.](../../../images/action-sheets/action-sheet-watch-system-defined@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/action-sheet-watch-system-defined@2x.png)*

Cada botão tem um estilo associado que transmite informações sobre o efeito do botão. Há três estilos de botão definidos pelo sistema:

| Estilo | Significado |
|---|---|
| Padrão | O botão não tem nenhum significado especial. |
| Destrutivo | O botão destrói dados do usuário ou executa uma ação destrutiva no app. |
| Cancelar | O botão dispensa a visualização sem realizar nenhuma ação. |

**Evite exibir mais de quatro botões em uma folha de ação, incluindo o botão Cancelar.** Quando há menos botões na tela, é mais fácil para as pessoas ver todas as opções de uma só vez. Como o botão Cancelar é obrigatório, procure oferecer no máximo três opções adicionais.

## Recursos

#### Relacionados

[Modalidade](https://developer.apple.com/design/human-interface-guidelines/modality)

[Folhas](https://developer.apple.com/design/human-interface-guidelines/sheets)

[Alertas](https://developer.apple.com/design/human-interface-guidelines/alerts)

#### Documentação para desenvolvedores

[confirmationDialog(_:isPresented:titleVisibility:actions:)](https://developer.apple.com/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:actions:)-46zbb) — SwiftUI

[UIAlertController.Style.actionSheet](https://developer.apple.com/documentation/uikit/uialertcontroller/style/actionsheet) — UIKit
