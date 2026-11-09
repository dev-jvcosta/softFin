# Alertas (Alerts)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/alerts
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um alerta fornece às pessoas informações críticas de que elas precisam imediatamente.*

![Uma representação estilizada de um mockup de alerta que inclui um título, uma descrição, um botão primário e um botão secundário. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/alerts/components-alert-intro@2x.png) ![Uma representação estilizada de um mockup de alerta que inclui um título, uma descrição, um botão primário e um botão secundário. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/alerts/components-alert-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-alert-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-alert-intro~dark@2x.png)*

Por exemplo, um alerta pode informar as pessoas sobre um problema, avisá-las quando a ação delas puder destruir dados e dar a elas a oportunidade de confirmar uma compra ou outra ação importante que iniciaram.

## Boas práticas

**Use alertas com moderação.** Os alertas dão às pessoas informações importantes, mas interrompem a tarefa atual para fazer isso. Incentive as pessoas a prestar atenção aos seus alertas garantindo que cada um ofereça apenas informações essenciais e ações úteis.

**Evite usar um alerta apenas para fornecer informações.** As pessoas não gostam de ser interrompidas por um alerta informativo, mas sem ação possível. Se você só precisa fornecer informações, prefira encontrar uma forma alternativa de comunicá-las dentro do contexto relevante. Por exemplo, quando uma conexão com o servidor não está disponível, o Mail exibe um indicador que as pessoas podem escolher para saber mais.

**Evite exibir alertas para ações comuns e que podem ser desfeitas, mesmo quando são destrutivas.** Por exemplo, você não precisa alertar as pessoas sobre perda de dados toda vez que elas excluem um e-mail ou arquivo, pois elas fazem isso com a intenção de descartar dados e podem desfazer a ação. Em comparação, quando as pessoas realizam uma ação destrutiva incomum que não podem desfazer, é importante exibir um alerta caso tenham iniciado a ação acidentalmente.

**Evite mostrar um alerta quando seu app é iniciado.** Se você precisar informar as pessoas sobre informações novas ou importantes no momento em que abrem seu app, crie uma maneira de tornar essas informações facilmente detectáveis. Se seu app detectar um problema na inicialização, como a falta de conexão de rede, considere maneiras alternativas de informar as pessoas. Por exemplo, você poderia mostrar dados em cache ou de espaço reservado e um rótulo discreto que descreva o problema.

## Anatomia

Um alerta é uma visualização modal que pode ter aparências diferentes em plataformas e dispositivos diferentes.

**iOS**

![Uma ilustração de um alerta no meio da tela do iPhone.](../../../images/alerts/alert-ios@2x.png) ![Uma ilustração de um alerta no meio da tela do iPhone. (escuro)](../../../images/alerts/alert-ios~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/alert-ios@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/alert-ios~dark@2x.png)*

**macOS**

![Uma ilustração de um alerta no meio da tela de um Mac.](../../../images/alerts/alert-macos@2x.png) ![Uma ilustração de um alerta no meio da tela de um Mac. (escuro)](../../../images/alerts/alert-macos~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/alert-macos@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/alert-macos~dark@2x.png)*

**tvOS**

![Uma ilustração de um alerta no tvOS.](../../../images/alerts/alert-tvos@2x.jpg) ![Uma ilustração de um alerta no tvOS. (escuro)](../../../images/alerts/alert-tvos~dark@2x.jpg)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/alert-tvos@2x.jpg) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/alert-tvos~dark@2x.jpg)*

**visionOS**

![Uma ilustração de um alerta no Apple Vision Pro.](../../../images/alerts/alert-visionos@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/alert-visionos@2x.png)*

**watchOS**

![Uma ilustração de um alerta no Apple Watch.](../../../images/alerts/alert-watchos@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/alert-watchos@2x.png)*

## Conteúdo

Em todas as plataformas, os alertas exibem um título, texto informativo opcional e até três botões. Em algumas plataformas, os alertas podem incluir elementos adicionais.

- No iOS, iPadOS, macOS e visionOS, um alerta pode incluir um campo de texto.
- Os alertas no macOS e no visionOS podem incluir um ícone e uma visualização acessória.
- Os alertas do macOS podem adicionar uma [caixa de seleção](https://developer.apple.com/design/human-interface-guidelines/toggles#Checkboxes) de supressão e um [botão de Ajuda](https://developer.apple.com/design/human-interface-guidelines/buttons#Help-buttons).

**Em todo o texto dos alertas, seja direto e use um tom neutro e acessível.** Os alertas muitas vezes descrevem problemas e situações graves, então evite ser indireto ou acusatório, ou mascarar a gravidade do problema.

**Escreva um título que descreva a situação de forma clara e sucinta.** Você precisa ajudar as pessoas a entender rapidamente a situação, então seja completo e específico, sem ser prolixo. Na medida do possível, descreva o que aconteceu, o contexto em que aconteceu e por quê. Evite escrever um título que não transmita informações úteis — como “Erro” ou “Ocorreu o erro 329347” —, mas também evite títulos excessivamente longos que se estendam por mais de duas linhas. Se o título for uma frase completa, use [capitalização no estilo de frase](https://help.apple.com/applestyleguide/#/apsgb744e4a3?sub=apdca93e113f1d64) e pontuação final apropriada. Se o título for um fragmento de frase, use capitalização no estilo de título e não adicione pontuação final.

**Inclua texto informativo somente se ele agregar valor.** Se precisar adicionar uma mensagem informativa, mantenha-a o mais curta possível, usando frases completas, capitalização no estilo de frase e pontuação apropriada.

**Evite explicar os botões do alerta.** Se o texto do alerta e os títulos dos botões forem claros, você não precisa explicar o que os botões fazem. Nos raros casos em que precisar orientar sobre a escolha de um botão, use um termo como *escolha* para considerar o dispositivo e o método de interação atuais das pessoas, e refira-se a um botão usando seu título exato, sem aspas. Para orientações, consulte [Botões](https://developer.apple.com/design/human-interface-guidelines/alerts#Buttons).

**Se houver suporte, inclua um campo de texto somente se precisar da entrada das pessoas para resolver a situação.** Por exemplo, você pode precisar apresentar um campo de texto seguro para receber uma senha.

## Botões

**Crie títulos de botão sucintos e lógicos.** Procure usar um título de uma ou duas palavras que descreva o resultado de selecionar o botão. Prefira verbos e locuções verbais que se relacionem diretamente com o texto do alerta — por exemplo, “Ver Tudo”, “Responder” ou “Ignorar”. Somente em alertas informativos você pode usar “OK” para aceitação, evitando “Sim” e “Não”. Use sempre “Cancelar” como título de um botão que cancela a ação do alerta. Como em todos os títulos de botão, use [capitalização no estilo de título](https://help.apple.com/applestyleguide/#/apsgb744e4a3?sub=apdca93e113f1d64) e nenhuma pontuação final.

**Evite usar OK como título do botão padrão, a menos que o alerta seja puramente informativo.** O significado de “OK” pode ser pouco claro mesmo em alertas que pedem às pessoas para confirmar que querem fazer algo. Por exemplo, “OK” significa “OK, quero concluir a ação” ou “OK, agora entendo os resultados negativos que minha ação teria causado”? Um título de botão específico como “Apagar”, “Converter”, “Limpar” ou “Excluir” ajuda as pessoas a entender a ação que estão realizando.

**Posicione os botões onde as pessoas esperam.** Em geral, coloque o botão que as pessoas têm maior probabilidade de escolher no lado final de uma linha de botões ou na parte superior de uma pilha de botões. Sempre coloque o botão padrão no lado final de uma linha ou na parte superior de uma pilha. Os botões Cancelar normalmente ficam no lado inicial de uma linha ou na parte inferior de uma pilha.

**Use o estilo destrutivo para identificar um botão que executa uma ação destrutiva que as pessoas não escolheram deliberadamente.** Por exemplo, quando as pessoas escolhem deliberadamente uma ação destrutiva — como Esvaziar Lixeira —, o alerta resultante não aplica o estilo destrutivo ao botão Esvaziar Lixeira, pois o botão executa a intenção original da pessoa. Nesse cenário, a conveniência de pressionar Return para confirmar a ação deliberadamente escolhida de Esvaziar Lixeira supera o benefício de reafirmar que o botão é destrutivo. Em contrapartida, as pessoas apreciam um alerta que chame sua atenção para um botão que pode executar uma ação destrutiva que elas não pretendiam originalmente.

**Se houver uma ação destrutiva, inclua um botão Cancelar para dar às pessoas uma forma clara e segura de evitar a ação.** Use sempre o título “Cancelar” para um botão que cancela a ação de um alerta. Observe que você não deve tornar um botão Cancelar o botão padrão. Se quiser incentivar as pessoas a ler um alerta, e não apenas pressionar Return automaticamente para dispensá-lo, evite tornar qualquer botão o botão padrão. Da mesma forma, se precisar exibir um alerta com um único botão que também seja o padrão, use um botão Concluído, não um botão Cancelar.

**Ofereça maneiras alternativas de cancelar um alerta quando fizer sentido.** Além de escolher um botão Cancelar, as pessoas gostam de usar atalhos de teclado ou outras formas rápidas de cancelar um alerta na tela. Por exemplo:

| Ação | Plataforma |
|---|---|
| Sair para a Tela de Início | iOS, iPadOS |
| Pressionar Escape (Esc) ou Command-Ponto (.) em um teclado conectado | iOS, iPadOS, macOS, visionOS |
| Pressionar Menu no controle remoto | tvOS |

## Considerações por plataforma

*Nenhuma consideração adicional para tvOS ou watchOS.*

### iOS, iPadOS

**Use um menu de ações (action sheet) — e não um alerta — para oferecer escolhas relacionadas a uma ação intencional.** Por exemplo, quando as pessoas cancelam a mensagem do Mail que estão editando, um menu de ações oferece três escolhas: excluir as edições (ou o rascunho inteiro), salvar o rascunho ou voltar à edição. Embora um alerta também possa ajudar as pessoas a confirmar ou cancelar uma ação com consequências destrutivas, ele não oferece escolhas adicionais relacionadas à ação. Para orientações, consulte [Menus de ações](https://developer.apple.com/design/human-interface-guidelines/action-sheets).

**Quando possível, evite exibir um alerta que role.** Embora um alerta possa rolar se o tamanho do texto for grande o suficiente, minimize a possibilidade de rolagem mantendo os títulos dos alertas curtos e incluindo uma mensagem breve somente quando necessário.

### macOS

O macOS exibe automaticamente o ícone do seu app em um alerta, mas você pode fornecer um ícone ou símbolo alternativo. Além disso, o macOS permite:

- Configurar alertas repetidos para permitir que as pessoas suprimam ocorrências subsequentes do mesmo alerta.
- Anexar uma visualização personalizada, se for necessário fornecer informações adicionais (para orientações para desenvolvedores, consulte [accessoryView](https://developer.apple.com/documentation/appkit/nsalert/accessoryview)).
- Incluir um botão de Ajuda que abre sua documentação de ajuda (consulte [Botões de ajuda](https://developer.apple.com/design/human-interface-guidelines/buttons#Help-buttons)).

**Use um símbolo de cuidado com moderação.** Usar um símbolo de cuidado como `exclamationmark.triangle` com muita frequência nos seus alertas diminui seu significado. Use o símbolo somente quando for realmente necessária atenção extra, como ao confirmar uma ação que pode resultar em perda inesperada de dados. Não use o símbolo para tarefas cujo único objetivo seja sobrescrever ou remover dados, como salvar ou esvaziar a lixeira.

### visionOS

Quando seu app está sendo executado no Shared Space, o visionOS exibe um alerta na frente da janela do app, ligeiramente adiantado ao longo do eixo z.

![Um vídeo de um alerta no app Freeform em execução no Shared Space do visionOS. Quando o vídeo é reproduzido, alguém escolhe excluir permanentemente um quadro do Freeform excluído recentemente. Um alerta então aparece na frente da janela do Freeform para pedir confirmação.](../../../images/alerts/alerts-freeform-delete-warning@2x.png)

*Vídeo: Um vídeo de um alerta no app Freeform em execução no Shared Space do visionOS. Quando o vídeo é reproduzido, alguém escolhe excluir permanentemente um quadro do Freeform excluído recentemente. Um alerta então aparece na frente da janela do Freeform para pedir confirmação.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/alerts-freeform-delete-warning.mp4)

Se alguém mover uma janela sem dispensar o alerta, o alerta permanece ancorado à janela. Se seu app estiver sendo executado em um Full Space, o sistema exibe o alerta centralizado no [campo de visão](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Field-of-view) de quem usa o dispositivo.

![Um vídeo de um alerta no app Freeform em execução no Shared Space do visionOS. Quando o vídeo é reproduzido, alguém escolhe excluir permanentemente um quadro do Freeform excluído recentemente. Um alerta então aparece na frente da janela do Freeform para pedir confirmação. O alerta não é dispensado e permanece ancorado à janela do Freeform enquanto ela é movida pelo Shared Space.](../../../images/alerts/alerts-shared-space-pinning-to-window@2x.png)

*Vídeo: Um vídeo de um alerta no app Freeform em execução no Shared Space do visionOS. Quando o vídeo é reproduzido, alguém escolhe excluir permanentemente um quadro do Freeform excluído recentemente. Um alerta então aparece na frente da janela do Freeform para pedir confirmação. O alerta não é dispensado e permanece ancorado à janela do Freeform enquanto ela é movida pelo Shared Space.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/alerts-shared-space-pinning-to-window.mp4)

Se precisar exibir uma visualização acessória em um alerta do visionOS, crie uma visualização com altura máxima de 154 pt e raio de canto de 16 pt.

## Recursos

#### Relacionados

[Modalidade](https://developer.apple.com/design/human-interface-guidelines/modality)

[Menus de ações](https://developer.apple.com/design/human-interface-guidelines/action-sheets)

[Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)

#### Documentação para desenvolvedores

[alert(_:isPresented:actions:)](https://developer.apple.com/documentation/swiftui/view/alert(_:ispresented:actions:)-1bkka) — SwiftUI

[UIAlertController](https://developer.apple.com/documentation/uikit/uialertcontroller) — UIKit

[NSAlert](https://developer.apple.com/documentation/appkit/nsalert) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 2 de fevereiro de 2024 | Aprimoradas as orientações para o uso dos botões padrão e Cancelar. |
| 12 de setembro de 2023 | Adicionada arte de anatomia para visionOS. |
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
