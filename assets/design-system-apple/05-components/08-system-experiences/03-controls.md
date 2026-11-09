# Controles (Controls)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/controls
>
> Plataformas: ios,ipados,macos

*Um controle oferece acesso rápido a um recurso do seu app a partir da Central de Controle, da Tela Bloqueada ou do botão de Ação.*

![Uma captura de tela parcial de controles na Central de Controle, como o toggle do Modo Avião, o toggle do Wi-Fi e o botão do AirPlay. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores.](../../../images/controls/components-controls-intro@2x.png) ![Uma captura de tela parcial de controles na Central de Controle, como o toggle do Modo Avião, o toggle do Wi-Fi e o botão do AirPlay. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores. (escuro)](../../../images/controls/components-controls-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-controls-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-controls-intro~dark@2x.png)*

Um controle é um botão ou toggle que oferece acesso rápido aos recursos do seu app a partir de outras áreas do sistema. Os botões de controle executam uma ação, levam a uma área específica do seu app ou iniciam uma [experiência de câmera em um dispositivo bloqueado](https://developer.apple.com/design/human-interface-guidelines/controls#Camera-experiences-on-a-locked-device). Os toggles de controle alternam entre dois estados, como ligado e desligado.

As pessoas podem adicionar controles à Central de Controle pressionando e segurando uma área vazia da Central de Controle, à Tela Bloqueada personalizando a Tela Bloqueada e ao botão de Ação configurando o botão de Ação no app Ajustes.

## Anatomia

Os controles contêm uma imagem de símbolo, um título e, opcionalmente, um valor. O símbolo representa visualmente o que o controle faz e pode ser um símbolo do [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) ou um símbolo personalizado. O título descreve a que o controle se relaciona, e o valor representa o estado do controle. Por exemplo, o título pode exibir o nome de uma luz em um cômodo, enquanto o valor pode exibir se ela está ligada ou desligada.

![Um diagrama mostrando o posicionamento da imagem de símbolo, do título e do valor de um toggle de controle.](../../../images/controls/control-medium-anatomy@2x.png) ![Um diagrama mostrando o posicionamento da imagem de símbolo, do título e do valor de um toggle de controle. (escuro)](../../../images/controls/control-medium-anatomy~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/control-medium-anatomy@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/control-medium-anatomy~dark@2x.png)*

Os controles exibem suas informações de maneiras diferentes, dependendo de onde aparecem:

- Na Central de Controle, um controle exibe seu símbolo e, em tamanhos maiores, seu título e valor.
- Na Tela Bloqueada, um controle exibe seu símbolo.
- Em iPhones com um controle atribuído ao botão de Ação, pressionar e segurar o botão exibe o símbolo do controle na Dynamic Island, bem como seu valor (se houver).

![Uma captura de tela parcial da Central de Controle no iPhone, destacando que o controle do modo Silencioso está ativo, com um símbolo de um sino riscado por uma linha e com tom vermelho.](../../../images/controls/control-control-center@2x.png) ![Uma captura de tela parcial da Central de Controle no iPhone, destacando que o controle do modo Silencioso está ativo, com um símbolo de um sino riscado por uma linha e com tom vermelho. (escuro)](../../../images/controls/control-control-center~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/control-control-center@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/control-control-center~dark@2x.png)*

![Uma captura de tela parcial da parte inferior da Tela Bloqueada no iPhone, destacando que o controle do modo Silencioso está ativo à direita, com um símbolo de um sino riscado por uma linha e com tom vermelho.](../../../images/controls/control-lock-screen@2x.png) ![Uma captura de tela parcial da parte inferior da Tela Bloqueada no iPhone, destacando que o controle do modo Silencioso está ativo à direita, com um símbolo de um sino riscado por uma linha e com tom vermelho. (escuro)](../../../images/controls/control-lock-screen~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/control-lock-screen@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/control-lock-screen~dark@2x.png)*

![Uma captura de tela parcial que exibe a Dynamic Island na parte superior da Tela de Início no iPhone, mostrando que o controle do modo Silencioso está ativo, com um símbolo de sino riscado por uma linha, em tom vermelho, na área inicial e um texto em tom vermelho que diz Silencioso na área final.](../../../images/controls/control-dynamic-island@2x.png) ![Uma captura de tela parcial que exibe a Dynamic Island na parte superior da Tela de Início no iPhone, mostrando que o controle do modo Silencioso está ativo, com um símbolo de sino riscado por uma linha, em tom vermelho, na área inicial e um texto em tom vermelho que diz Silencioso na área final. (escuro)](../../../images/controls/control-dynamic-island~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/control-dynamic-island@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/control-dynamic-island~dark@2x.png)*

## Boas práticas

**Ofereça controles para ações que proporcionem o maior benefício sem precisar abrir o seu app.** Por exemplo, iniciar uma Live Activity a partir de um controle cria uma experiência fácil e fluida que informa alguém sobre o progresso sem precisar navegar até o seu app para se manter atualizado. Para orientações, consulte [Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities).

**Atualize os controles quando alguém interagir com eles, quando uma ação for concluída ou remotamente com uma notificação push.** Atualize o conteúdo de um controle para refletir com precisão o estado e mostrar se uma ação ainda está em andamento.

**Escolha um símbolo descritivo que sugira o comportamento do controle.** Dependendo de onde uma pessoa adiciona um controle, ele pode não exibir o título e o valor, por isso o símbolo precisa transmitir informações suficientes sobre a ação do controle. Para toggles de controle, forneça um símbolo para os estados ligado e desligado. Por exemplo, use os SF Symbols `door.garage.open` e `door.garage.closed` para representar um controle que abre e fecha a porta de uma garagem. Para orientações, consulte [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols).

**Use animações de símbolo para destacar mudanças de estado.** Para toggles de controle, anime a transição entre os estados ligado e desligado. Para botões de controle com ações que têm duração, anime indefinidamente enquanto a ação é executada e pare de animar quando ela for concluída. Para orientações para desenvolvedores, consulte [Symbols](https://developer.apple.com/documentation/symbols) e [SymbolEffect](https://developer.apple.com/documentation/symbols/symboleffect).

**Selecione uma cor de tom que funcione com a marca do seu app.** O sistema aplica essa cor de tom ao símbolo de um toggle de controle em seu estado ligado. Quando uma pessoa executa a ação de um controle a partir do botão de Ação, o sistema também usa essa cor de tom para exibir o valor e o símbolo na Dynamic Island. Para orientações, consulte [Branding](https://developer.apple.com/design/human-interface-guidelines/branding).

![Um toggle de controle inativo com um símbolo de lâmpada sem tom de cor.](../../../images/controls/control-lightbulb-not-tinted@2x.png) ![Um toggle de controle inativo com um símbolo de lâmpada sem tom de cor. (escuro)](../../../images/controls/control-lightbulb-not-tinted~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/control-lightbulb-not-tinted@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/control-lightbulb-not-tinted~dark@2x.png)*

![Um toggle de controle ativo com um símbolo de lâmpada em tom amarelo.](../../../images/controls/control-lightbulb-tinted@2x.png) ![Um toggle de controle ativo com um símbolo de lâmpada em tom amarelo. (escuro)](../../../images/controls/control-lightbulb-tinted~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/control-lightbulb-tinted@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/control-lightbulb-tinted~dark@2x.png)*

**Ajude as pessoas a fornecer informações adicionais de que o sistema precisa para executar uma ação.** Uma pessoa pode precisar configurar um controle para executar uma ação desejada — por exemplo, selecionar uma luz específica de uma casa para ligar e desligar. Se um controle exige configuração, peça às pessoas que concluam essa etapa quando o adicionarem pela primeira vez. As pessoas podem reconfigurar o controle a qualquer momento. Para orientações para desenvolvedores, consulte [promptsForUserConfiguration()](https://developer.apple.com/documentation/swiftui/controlwidgetconfiguration/promptsforuserconfiguration()).

![Uma representação de um controle com a capacidade de definir uma opção para um valor que a pessoa escolhe.](../../../images/controls/control-configuration-options@2x.png) ![Uma representação de um controle com a capacidade de definir uma opção para um valor que a pessoa escolhe. (escuro)](../../../images/controls/control-configuration-options~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/control-configuration-options@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/control-configuration-options~dark@2x.png)*

**Forneça um texto de dica para o botão de Ação.** Quando uma pessoa pressiona o botão de Ação, o sistema exibe um texto de dica para ajudá-la a entender o que acontece ao pressionar e segurar. Quando alguém pressiona e segura o botão de Ação, o sistema executa a ação configurada para ele. Use verbos para construir o texto de dica. Para orientações para desenvolvedores, consulte [controlWidgetActionHint(_:)](https://developer.apple.com/documentation/swiftui/view/controlwidgetactionhint(_:)-5yoyh).

![Uma captura de tela parcial da Tela de Início no iPhone que exibe o texto de dica do botão de Ação. O texto de dica é Segure para Silenciar.](../../../images/controls/controls-action-button-coaching-text-on@2x.png) ![Uma captura de tela parcial da Tela de Início no iPhone que exibe o texto de dica do botão de Ação. O texto de dica é Segure para Silenciar. (escuro)](../../../images/controls/controls-action-button-coaching-text-on~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/controls-action-button-coaching-text-on@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/controls-action-button-coaching-text-on~dark@2x.png)*

![Uma captura de tela parcial da Tela de Início no iPhone que exibe o texto de dica do botão de Ação. O texto de dica é Segure para Tocar.](../../../images/controls/controls-action-button-coaching-text-off@2x.png) ![Uma captura de tela parcial da Tela de Início no iPhone que exibe o texto de dica do botão de Ação. O texto de dica é Segure para Tocar. (escuro)](../../../images/controls/controls-action-button-coaching-text-off~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/controls-action-button-coaching-text-off@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/controls-action-button-coaching-text-off~dark@2x.png)*

**Se o título ou o valor do seu controle puderem variar, inclua um espaço reservado.** As informações de espaço reservado dizem às pessoas o que o seu controle faz quando o título e o valor são situacionais. O sistema exibe essas informações quando alguém abre a galeria de controles na Central de Controle ou na Tela Bloqueada e escolhe o seu controle, ou antes de atribuí-lo ao botão de Ação.

**Oculte informações sensíveis quando o dispositivo estiver bloqueado.** Quando o dispositivo estiver bloqueado, considere fazer o sistema ocultar o título e o valor para esconder informações pessoais ou relacionadas à segurança. Especifique se o sistema também precisa ocultar o estado do símbolo. Se especificado, o sistema oculta o título e o valor e exibe o símbolo em seu estado desligado.

![Um toggle de controle de tamanho médio exibindo um símbolo de lâmpada, um título e um texto de valor.](../../../images/controls/control-regular-text@2x.png) ![Um toggle de controle de tamanho médio exibindo um símbolo de lâmpada, um título e um texto de valor. (escuro)](../../../images/controls/control-regular-text~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/control-regular-text@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/control-regular-text~dark@2x.png)*

![Um toggle de controle de tamanho médio com texto oculto.](../../../images/controls/control-redacted-text@2x.png) ![Um toggle de controle de tamanho médio com texto oculto. (escuro)](../../../images/controls/control-redacted-text~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/control-redacted-text@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/control-redacted-text~dark@2x.png)*

**Exija autenticação para ações que afetam a segurança.** Por exemplo, exija que as pessoas desbloqueiem o dispositivo para acessar controles que trancam ou destrancam a porta de casa ou ligam o carro. Para orientações para desenvolvedores, consulte [IntentAuthenticationPolicy](https://developer.apple.com/documentation/appintents/intentauthenticationpolicy).

## Experiências de câmera em um dispositivo bloqueado

Se o seu app oferece suporte à captura de câmera, a partir do iOS 18 você pode criar um controle que abre diretamente a experiência de câmera do seu app enquanto o dispositivo está bloqueado. Para qualquer tarefa além da captura, uma pessoa deve se autenticar e desbloquear o dispositivo para concluir a tarefa no seu app. Para orientações para desenvolvedores, consulte [LockedCameraCapture](https://developer.apple.com/documentation/lockedcameracapture).

**Use a mesma interface de câmera no seu app e na sua experiência de câmera.** Compartilhar a interface aproveita a familiaridade das pessoas com o app. Usando a mesma interface, a transição para o app é contínua quando alguém captura conteúdo e toca em um botão para executar tarefas adicionais, como publicar em uma rede social ou editar uma foto.

**Forneça instruções para adicionar o controle.** Ajude as pessoas a entender como adicionar o controle que inicia essa experiência de câmera.

## Considerações por plataforma

*Sem considerações adicionais para iOS, iPadOS ou macOS. Não compatível com watchOS, tvOS ou visionOS.*

## Recursos

#### Relacionados

[Widgets](https://developer.apple.com/design/human-interface-guidelines/widgets)

[Botão de Ação](https://developer.apple.com/design/human-interface-guidelines/action-button)

#### Documentação para desenvolvedores

[LockedCameraCapture](https://developer.apple.com/documentation/lockedcameracapture)

[WidgetKit](https://developer.apple.com/documentation/widgetkit)

## Histórico de alterações

| Data | Alterações |
|---|---|
| June 10, 2024 | Nova página. |
