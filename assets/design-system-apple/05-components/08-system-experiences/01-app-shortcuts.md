# App Shortcuts

> Fonte: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts
>
> Plataformas: ios,ipados,visionos,watchos

*Um App Shortcut dá às pessoas acesso às principais funções ou ao conteúdo do seu app em todo o sistema.*

![Representação estilizada do app Notas aparecendo como resultado na área Melhor Resultado do Spotlight, junto com App Shortcuts para criar uma nova nota e abrir outras duas notas recentes. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/app-shortcuts/components-app-shortcuts-intro@2x.png) ![Representação estilizada do app Notas aparecendo como resultado na área Melhor Resultado do Spotlight, junto com App Shortcuts para criar uma nova nota e abrir outras duas notas recentes. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/app-shortcuts/components-app-shortcuts-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-app-shortcuts-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-app-shortcuts-intro~dark@2x.png)*

As pessoas podem iniciar App Shortcuts usando recursos como Siri, Spotlight e o app Atalhos; usando recursos de hardware como o [botão de Ação](https://developer.apple.com/design/human-interface-guidelines/action-button) no iPhone ou no Apple Watch; ou [apertando](https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble#Squeeze) o Apple Pencil.

Como os App Shortcuts fazem parte do seu app, eles ficam disponíveis imediatamente quando a instalação termina. Por exemplo, um app de diário poderia oferecer um App Shortcut para criar uma nova entrada no diário que fica disponível antes de a pessoa abrir o app pela primeira vez. Quando alguém começa a usar seu app, seus App Shortcuts podem refletir as escolhas da pessoa, como os do FaceTime para ligar para contatos recentes.

Os App Shortcuts usam [App Intents](https://developer.apple.com/documentation/appintents) para definir ações dentro do seu app que serão disponibilizadas ao sistema. Cada App Shortcut inclui uma ou mais ações que representam um conjunto de etapas que as pessoas podem querer realizar para concluir uma tarefa. Por exemplo, um app de segurança residencial poderia combinar as duas ações comuns de apagar as luzes e trancar as portas externas quando uma pessoa vai dormir à noite em um único App Shortcut. Cada app pode incluir até 10 App Shortcuts.

Para orientações para desenvolvedores, consulte [App Shortcuts](https://developer.apple.com/documentation/appintents/app-shortcuts).

> **Observação:** Quando você usa App Intents para disponibilizar as ações do seu app ao sistema, além dos App Shortcuts que seu app fornece, as pessoas também podem criar seus próprios atalhos personalizados combinando ações no app Atalhos. Os atalhos personalizados dão às pessoas flexibilidade para configurar o comportamento das ações e permitem fluxos de trabalho que executam tarefas em vários apps. Para orientações adicionais, consulte o [Guia do Usuário do Atalhos](https://support.apple.com/guide/shortcuts/welcome/ios).

## Boas práticas

**Para expor tipos comuns de funcionalidade do app em todo o sistema, considere adotar app schemas em vez disso.** Apps em áreas de domínio comuns podem adotar [app schemas](https://developer.apple.com/documentation/appintents/app-schema-domains) para disponibilizar suas ações e conteúdo ao Apple Intelligence. Em dispositivos compatíveis, isso permite que a Siri e outras experiências do sistema exponham recursos do app de forma contextual, sem a necessidade de adotar App Shortcuts individuais. Para orientações, consulte [Siri](https://developer.apple.com/design/human-interface-guidelines/siri). Para orientações para desenvolvedores, consulte [Apple Intelligence and Siri AI](https://developer.apple.com/documentation/appintents/apple-intelligence-and-siri-ai) e [Making actions and content discoverable by Apple Intelligence](https://developer.apple.com/documentation/appintents/making-actions-and-content-discoverable-by-apple-intelligence).

Os App Shortcuts são úteis para expor ao sistema recursos exclusivos ou conteúdo personalizado em áreas não cobertas por app schemas.

**Ofereça App Shortcuts para as tarefas mais comuns e importantes do seu app.** Tarefas simples que as pessoas podem concluir sem sair do contexto atual funcionam melhor, mas você também pode abrir seu app se isso ajudar as pessoas a concluir tarefas de várias etapas com mais facilidade.

**Adicione flexibilidade permitindo que as pessoas escolham entre um conjunto de opções.** Um App Shortcut pode incluir um único valor opcional, ou parâmetro, se fizer sentido. Por exemplo, um app de meditação poderia oferecer um App Shortcut que permite a alguém iniciar um tipo específico de meditação: “Iniciar meditação [matinal, diária, para dormir].” Inclua como opções valores previsíveis e familiares, porque as pessoas não terão a lista à frente para consulta. Para orientações para desenvolvedores, consulte [Adding parameters to an app intent](https://developer.apple.com/documentation/appintents/adding-parameters-to-an-app-intent).

![Um diagrama da frase de ativação de um atalho para pedir uma bebida em um app de café. A frase de ativação contém um valor opcional para o nome da bebida, que está sublinhado e destacado como o parâmetro do atalho.](../../../images/app-shortcuts/app-intents-parameter-diagram@2x.png) ![Um diagrama da frase de ativação de um atalho para pedir uma bebida em um app de café. A frase de ativação contém um valor opcional para o nome da bebida, que está sublinhado e destacado como o parâmetro do atalho. (escuro)](../../../images/app-shortcuts/app-intents-parameter-diagram~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/app-intents-parameter-diagram@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/app-intents-parameter-diagram~dark@2x.png)*

**Peça esclarecimentos em resposta a uma solicitação à qual faltam informações opcionais.** Por exemplo, alguém pode dizer “Iniciar meditação” sem especificar o tipo (matinal, diária ou para dormir); você poderia responder sugerindo a que a pessoa usou mais recentemente ou uma baseada no horário do dia. Se uma opção for a mais provável, considere apresentá-la como padrão e fornecer uma lista curta de alternativas para escolha caso a pessoa não queira a opção padrão.

**Mantenha as interações por voz simples.** Se sua frase parece complicada demais quando dita em voz alta, provavelmente é difícil demais de lembrar ou de dizer corretamente. Por exemplo, “Iniciar meditação [para dormir] com sons da natureza” parece ter dois parâmetros possíveis: o tipo de meditação e o som que a acompanha. Se informações adicionais forem absolutamente necessárias, peça-as em uma etapa posterior. Para orientações adicionais sobre como escrever o texto de diálogo para interações por voz, consulte [Siri](https://developer.apple.com/design/human-interface-guidelines/siri).

**Torne os App Shortcuts descobertos no seu app.** As pessoas têm mais probabilidade de lembrar e usar App Shortcuts para tarefas que realizam com frequência, depois de saberem que o atalho está disponível. Considere mostrar dicas ocasionais no seu app quando as pessoas realizarem ações comuns, para informá-las de que existe um App Shortcut. Para orientações para desenvolvedores, consulte [SiriTipUIView](https://developer.apple.com/documentation/appintents/siritipuiview).

### Respondendo a App Shortcuts

Quando uma pessoa interage com um App Shortcut, seu app pode responder de várias maneiras, incluindo com diálogo falado em voz alta pela Siri e elementos visuais personalizados, como snippets e Live Activities.

- Os [snippets](https://developer.apple.com/design/human-interface-guidelines/snippets) são ótimos para visualizações personalizadas que exibem informações estáticas ou opções de diálogo, como mostrar o clima no local de uma pessoa ou confirmar um pedido. Para orientações para desenvolvedores, consulte [Displaying static and interactive snippets](https://developer.apple.com/documentation/appintents/displaying-static-and-interactive-snippets).
- As [Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities) oferecem acesso contínuo a informações que provavelmente continuarão relevantes e mudarão ao longo de um período, e são ótimas para timers e contagens regressivas que aparecem até que um evento seja concluído. Para orientações para desenvolvedores, consulte [LiveActivityIntent](https://developer.apple.com/documentation/appintents/liveactivityintent).

**Forneça detalhes suficientes para interação em dispositivos somente de áudio.** As pessoas também podem receber respostas em dispositivos somente de áudio, como AirPods e HomePod, e nem sempre podem ver o conteúdo na tela. Inclua todas as informações críticas no texto completo de diálogo dos seus App Shortcuts. Para orientações para desenvolvedores, consulte [init(full:supporting:systemImageName:)](https://developer.apple.com/documentation/appintents/intentdialog/init(full:supporting:systemimagename:)).

## Diretrizes editoriais

**Forneça frases de ativação breves e memoráveis e variantes naturais.** Como a frase de um App Shortcut (ou uma variante que você define) é o que as pessoas dizem para executar um App Shortcut com a Siri, é importante mantê-la breve para facilitar a memorização. Você precisa incluir o nome do seu app, mas pode ser criativo com ele. Por exemplo, o Keynote aceita tanto “Criar um Keynote” quanto “Adicionar uma nova apresentação no Keynote” como frases de App Shortcut para criar um novo documento. Para orientações para desenvolvedores, consulte [AppShortcutPhrase](https://developer.apple.com/documentation/appintents/appshortcutphrase).

**Ao se referir a App Shortcuts ou ao app Atalhos, sempre use title case e certifique-se de que *Shortcuts* esteja no plural.** Por exemplo, *MyApp integrates with Shortcuts to provide a quick way to get things done with just a tap or by asking Siri, and offers App Shortcuts you can place on the Action button.*

**Ao se referir a atalhos individuais (não a App Shortcuts nem ao app Atalhos), use letras minúsculas.** Por exemplo, *Run a shortcut by asking Siri or tapping a suggestion on the Lock Screen.*

## Considerações por plataforma

*Nenhuma consideração adicional para visionOS ou watchOS. Não compatível com tvOS.*

### iOS, iPadOS

Os App Shortcuts podem aparecer na área Melhor Resultado do Spotlight quando as pessoas buscam seu app, ou na área Atalhos abaixo dela. Cada App Shortcut inclui um símbolo do [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) que você escolhe para representar sua funcionalidade, ou uma imagem de prévia de um item para o qual o atalho leva diretamente.

**Ordene os atalhos com base na importância.** A ordem que você escolhe determina como os App Shortcuts aparecem inicialmente tanto no Spotlight quanto no app Atalhos, então é útil incluir primeiro os mais úteis de modo geral. Quando as pessoas começam a usar seus App Shortcuts, o sistema se atualiza para priorizar os que elas usam com mais frequência.

### macOS

Os App Shortcuts não são compatíveis com o macOS. No entanto, as ações que você cria para seu app usando App Intents são compatíveis, e as pessoas podem criar atalhos personalizados com elas usando o app Atalhos no Mac.

## Recursos

#### Relacionados

[Siri](https://developer.apple.com/design/human-interface-guidelines/siri)

[Guia de Estilo da Siri](https://developer.apple.com/siri/style-guide/)

[Guia do Usuário do Atalhos](https://support.apple.com/guide/shortcuts/welcome/ios)

#### Documentação para desenvolvedores

[App Intents](https://developer.apple.com/documentation/appintents)

[SiriKit](https://developer.apple.com/documentation/sirikit)

[Getting started with the App Intents framework](https://developer.apple.com/documentation/appintents/getting-started-with-the-app-intents-framework) — App Intents

[Defining app entities for your custom data types](https://developer.apple.com/documentation/appintents/defining-app-entities-for-your-custom-data-types) — App Intents

#### Vídeos

- [What’s new in Shortcuts](https://developer.apple.com/videos/play/wwdc2026/310)
- [Design interactive snippets](https://developer.apple.com/videos/play/wwdc2025/281)
- [Get to know App Intents](https://developer.apple.com/videos/play/wwdc2025/244)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 8 de junho de 2026 | Adicionadas orientações para a adoção de app schemas. |
| 17 de janeiro de 2025 | Orientações atualizadas e simplificadas. |
| 5 de junho de 2023 | Nova página. |
