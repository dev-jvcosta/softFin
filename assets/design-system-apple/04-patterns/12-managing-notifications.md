# Gerenciamento de notificações (Managing notifications)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/managing-notifications
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*As notificações podem fornecer às pessoas informações oportunas e importantes, quer o dispositivo esteja bloqueado ou em uso.*

![Um esboço de um sino com um pequeno círculo sobreposto, sugerindo um som de notificação. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que reflete sutilmente o laranja do logotipo original da Apple, de seis cores.](../../images/managing-notifications/patterns-managing-notifications-intro@2x.png) ![Um esboço de um sino com um pequeno círculo sobreposto, sugerindo um som de notificação. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que reflete sutilmente o laranja do logotipo original da Apple, de seis cores. (escuro)](../../images/managing-notifications/patterns-managing-notifications-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-managing-notifications-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-managing-notifications-intro~dark@2x.png)*

Você precisa obter permissão antes de enviar qualquer notificação. O sistema permite que as pessoas mudem essa decisão nos ajustes, onde também podem silenciar todas as notificações (exceto os alertas governamentais em algumas localidades).

## Integração com o Focus

As pessoas gostam de receber uma notificação sobre algo que lhes interessa, mas nem sempre gostam de ser interrompidas. Para ajudar as pessoas a gerenciar a experiência, o sistema permite que elas especifiquem horários de entrega e configurem um Focus.

- Um Focus ajuda as pessoas a filtrar notificações durante um período que reservam para uma atividade como dormir, trabalhar, ler ou dirigir.
- O agendamento de entrega permite que as pessoas escolham se querem receber os alertas de notificação imediatamente ou em um resumo entregue nos horários que escolherem.

As pessoas identificam os contatos e apps que podem romper um Focus para entregar alertas de notificação. Em um Focus de Trabalho, por exemplo, as pessoas podem querer receber alertas de colegas de trabalho, familiares e apps relacionados ao trabalho assim que as notificações chegarem. As pessoas também podem querer receber todos os alertas de notificação Time Sensitive durante um Focus. Uma notificação *Time Sensitive* contém informações essenciais que as pessoas gostam de receber imediatamente.

> **Importante:** Mesmo que um Focus possa atrasar a entrega de um alerta de notificação, a notificação em si fica disponível assim que chega.

Para oferecer suporte a essas personalizações de comportamento, primeiro você identifica os tipos de notificações que seu app ou jogo pode enviar. Se você oferece suporte a comunicações diretas — como chamadas telefônicas e mensagens —, use notificações de *comunicação*; para todos os outros tipos de tarefas, use notificações de *não comunicação*. Para oferecer suporte a notificações de comunicação, você adota SiriKit intents, o que significa que as pessoas podem usar a Siri para personalizar os comportamentos das notificações; para obter orientações para desenvolvedores, consulte [INSendMessageIntent](https://developer.apple.com/documentation/intents/insendmessageintent) e [UNNotificationContentProviding](https://developer.apple.com/documentation/usernotifications/unnotificationcontentproviding).

Você precisa especificar um nível de interrupção definido pelo sistema para cada notificação de não comunicação que enviar. O sistema usa o nível de interrupção para ajudar a determinar quando entregar o alerta; quando uma notificação de comunicação chega, o sistema usa o remetente para determinar quando entregar o alerta.

O sistema define quatro níveis de interrupção para notificações de não comunicação:

- *Passive*. Informações que as pessoas podem ver com calma, como uma recomendação de restaurante.
- *Active* (o padrão). Informações que as pessoas podem gostar de saber assim que chegam, como uma atualização do placar do time esportivo favorito.
- *Time Sensitive*. Informações que afetam diretamente a pessoa e exigem sua atenção imediata, como um problema de segurança da conta ou a entrega de um pacote.
- *Critical*. Informações urgentes sobre saúde e segurança que afetam diretamente a pessoa e exigem sua atenção imediata. As notificações críticas são extremamente raras e normalmente vêm de órgãos governamentais e públicos ou de apps que ajudam as pessoas a gerenciar sua saúde ou sua casa.

Os alertas de notificação em cada nível de interrupção definido pelo sistema podem se comportar das seguintes maneiras:

| Nível de interrupção | Substitui a entrega agendada | Rompe o Focus | Substitui o interruptor Toque/Silencioso no iPhone e no iPad |
|---|---|---|---|
| Passive | Não | Não | Não |
| Active | Não | Não | Não |
| Time Sensitive | Sim | Sim | Não |
| Critical | Sim | Sim | Sim |

> **Observação:** Como uma notificação Critical pode substituir o interruptor Toque/Silencioso e romper a entrega agendada e o Focus, você precisa obter uma autorização (entitlement) para enviar uma.

## Boas práticas

**Construa confiança representando com precisão a urgência de cada notificação.** As pessoas têm várias maneiras de ajustar como recebem suas notificações — inclusive desativando todas elas —, portanto é essencial ser o mais realista possível ao atribuir um nível de interrupção. Você não quer que as pessoas sintam que uma notificação usa um alto nível de urgência para interrompê-las com informações de baixa prioridade.

**Use o nível de interrupção Time Sensitive apenas para notificações relevantes no momento.** Para ajudar as pessoas a entender os benefícios de permitir que notificações Time Sensitive rompam um Focus ou a entrega agendada, certifique-se de que a notificação trate de um evento que está acontecendo agora ou que acontecerá dentro de uma hora. Na primeira vez que uma notificação Time Sensitive chegar do seu app, o sistema descreve como essa notificação funciona e oferece às pessoas uma maneira de desativá-la caso não concordem que a informação exija sua atenção imediata. A partir daí, o sistema oferece periodicamente às pessoas novas oportunidades de avaliar como sua notificação Time Sensitive está funcionando para elas. Para obter orientações para desenvolvedores, consulte [UNNotificationInterruptionLevel](https://developer.apple.com/documentation/usernotifications/unnotificationinterruptionlevel).

## Envio de notificações de marketing

Não use notificações para enviar conteúdo de marketing ou promocional, a menos que as pessoas concordem explicitamente em receber essas informações. Quando as pessoas querem saber sobre novos recursos, conteúdos ou eventos relacionados ao seu app ou jogo, elas podem conceder permissão para receber notificações de marketing. Por exemplo, pessoas que usam um app de assinatura podem gostar de receber uma oferta para se tornarem assinantes, e jogadores podem querer receber uma oferta especial relacionada a um evento ao vivo do jogo.

**Nunca use o nível de interrupção Time Sensitive para enviar uma notificação de marketing.** As pessoas podem ter concordado em receber notificações de marketing do seu app, mas uma notificação desse tipo nunca deve romper um Focus ou uma configuração de entrega agendada.

**Obtenha a permissão das pessoas se quiser enviar notificações promocionais ou de marketing.** Antes de enviar essas notificações, você precisa receber a permissão explícita das pessoas para isso. Crie um alerta, uma visualização modal ou outra interface que descreva os tipos de informação que você deseja enviar e ofereça às pessoas uma maneira clara de aceitar ou recusar.

**Garanta que as pessoas possam gerenciar suas configurações de notificação dentro do seu app.** Além de solicitar permissão para enviar notificações informativas ou de marketing, você também deve oferecer uma tela de ajustes no app que permita às pessoas mudar sua escolha. Para obter orientações, consulte [Ajustes](https://developer.apple.com/design/human-interface-guidelines/settings).

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS ou visionOS.*

### watchOS

Por padrão, os ajustes de notificação que as pessoas usam para apps no iPhone se aplicam aos mesmos apps no Apple Watch. As pessoas podem gerenciar esses ajustes no app Apple Watch no iPhone ou acessar opções por notificação — como Silenciar por 1 Hora ou Desativar Time Sensitive — deslizando para a esquerda quando uma notificação chega no Apple Watch.

## Recursos

#### Relacionados

[Privacidade](https://developer.apple.com/design/human-interface-guidelines/privacy)

#### Documentação para desenvolvedores

[User Notifications](https://developer.apple.com/documentation/usernotifications)

#### Vídeos

- [Envie notificações de comunicação e Time Sensitive](https://developer.apple.com/videos/play/wwdc2021/10091)
- [Introdução às notificações push](https://developer.apple.com/videos/play/wwdc2020/10095)
