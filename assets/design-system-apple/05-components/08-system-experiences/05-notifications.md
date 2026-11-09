# Notificações (Notifications)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/notifications
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Uma notificação oferece às pessoas informações oportunas e de alto valor que elas conseguem entender de relance.*

![Uma representação estilizada de um mockup de notificação. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/notifications/components-notification-intro@2x.png) ![Uma representação estilizada de um mockup de notificação. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/notifications/components-notification-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-notification-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-notification-intro~dark@2x.png)*

Antes de enviar qualquer notificação às pessoas, você precisa obter o consentimento delas (para orientações para desenvolvedores, consulte [Asking permission to use notifications](https://developer.apple.com/documentation/usernotifications/asking-permission-to-use-notifications)). Depois de concordar, as pessoas geralmente usam os ajustes para especificar os estilos de notificação que desejam receber e os horários de entrega das notificações com diferentes níveis de urgência. Para saber mais sobre as formas como as pessoas podem personalizar a experiência de notificações, consulte [Gerenciando notificações](https://developer.apple.com/design/human-interface-guidelines/managing-notifications).

## Anatomia

Dependendo da plataforma, uma notificação pode usar vários estilos, como:

- Um banner ou uma visualização na Tela Bloqueada, na Tela de Início, na Visualização da Casa (Home View) ou na mesa
- Um selo no ícone de um app
- Um item na Central de Notificações

Além disso, uma notificação relacionada a comunicação direta — como uma chamada telefônica ou mensagem — pode oferecer uma interface distinta das notificações que não são de comunicação, com imagens de contato (ou *avatares*) proeminentes e nomes de grupos em vez do ícone do app.

## Boas práticas

**Forneça notificações concisas e informativas.** As pessoas ativam as notificações para receber atualizações rápidas, então você deve fornecer informações valiosas de forma sucinta.

**Evite enviar várias notificações sobre a mesma coisa, mesmo que alguém não tenha respondido.** As pessoas atendem às notificações quando lhes é conveniente. Se você enviar várias notificações sobre a mesma coisa, enche a Central de Notificações, e as pessoas podem desativar todas as notificações do seu app.

**Evite enviar uma notificação que diga às pessoas para realizar tarefas específicas dentro do seu app.** Se fizer sentido oferecer tarefas simples que as pessoas possam realizar sem abrir seu app, você pode fornecer [ações de notificação](https://developer.apple.com/design/human-interface-guidelines/notifications#Notification-actions). Caso contrário, evite dizer às pessoas o que fazer, pois é difícil para elas se lembrarem dessas instruções depois de dispensarem a notificação.

**Use um alerta — e não uma notificação — para exibir uma mensagem de erro.** As pessoas conhecem tanto alertas quanto notificações, então você não quer causar confusão usando o componente errado. Para orientações, consulte [Alertas](https://developer.apple.com/design/human-interface-guidelines/alerts).

**Trate as notificações com elegância quando seu app estiver em primeiro plano.** As notificações do seu app não aparecem quando ele está em primeiro plano, mas ele ainda recebe as informações. Nesse cenário, apresente as informações de uma forma descobrível, mas que não distraia nem seja invasiva, como incrementar um selo ou inserir sutilmente novos dados na visualização atual. Por exemplo, quando uma nova mensagem chega a uma caixa de correio que as pessoas estão vendo, o Mail simplesmente a adiciona à lista de mensagens não lidas, pois enviar uma notificação sobre isso seria desnecessário e incômodo.

**Evite incluir informações sensíveis, pessoais ou confidenciais em uma notificação.** Você não consegue prever o que as pessoas estarão fazendo quando receberem uma notificação, então é essencial evitar incluir informações privadas que possam ficar visíveis para outras pessoas.

## Conteúdo

Quando uma notificação inclui um título, o sistema o exibe na parte superior, onde fica mais visível. Em uma notificação relacionada a comunicação direta, o sistema exibe automaticamente o nome do remetente na área do título; em uma notificação que não é de comunicação, o sistema exibe o nome do seu app se você não fornecer um título.

**Crie um título curto se ele oferecer contexto para o conteúdo da notificação.** Prefira títulos breves que as pessoas consigam ler de relance, especialmente no Apple Watch, onde o espaço é limitado. Quando possível, aproveite a área de título proeminente da notificação para fornecer informações úteis, como um título de manchete, o nome de um evento ou o assunto de um e-mail. Se você só puder fornecer um título genérico para uma notificação que não é de comunicação — como Novo Documento —, pode ser melhor deixar o sistema exibir o nome do seu app. Use [capitalização](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64) no estilo de título e nenhuma pontuação final.

**Escreva o conteúdo da notificação de forma sucinta e fácil de ler.** Use frases completas, capitalização no estilo de frase e pontuação adequada, e não trunque sua mensagem — o sistema faz isso automaticamente quando necessário.

**Forneça um texto genericamente descritivo para exibir quando as pré-visualizações de notificações não estiverem disponíveis.** Em Ajustes, as pessoas podem optar por ocultar as pré-visualizações de notificações de todos os apps. Nessa situação, o sistema mostra apenas o ícone do seu app e o título padrão *Notificação*. Para dar às pessoas contexto suficiente para saber se querem ver a notificação completa, escreva um texto de corpo que descreva sucintamente o conteúdo da notificação sem revelar detalhes demais, como “Solicitação de amizade”, “Novo comentário”, “Lembrete” ou “Encomenda” (para orientações para desenvolvedores, consulte [hiddenPreviewsBodyPlaceholder](https://developer.apple.com/documentation/usernotifications/unnotificationcategory/hiddenpreviewsbodyplaceholder)). Use [capitalização](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64) no estilo de frase para esse texto.

**Evite incluir o nome ou o ícone do seu app.** O sistema exibe automaticamente uma versão grande do ícone do seu app na borda inicial de cada notificação; em uma notificação de comunicação, o sistema exibe a imagem de contato do remetente com um selo contendo uma versão pequena do seu ícone.

**Considere fornecer um som para complementar suas notificações.** O som pode ser uma ótima maneira de distinguir as notificações do seu app e chamar a atenção de alguém quando a pessoa não está olhando para o dispositivo. Você pode criar um som personalizado que combine com o estilo do seu app ou usar um som de alerta fornecido pelo sistema. Se usar um som personalizado, certifique-se de que seja curto, distintivo e produzido profissionalmente. O som de uma notificação pode melhorar a experiência do usuário, mas não dependa dele para comunicar informações importantes, pois as pessoas podem não ouvi-lo. Embora as pessoas também possam querer uma vibração acompanhando os sons de alerta, você não pode fornecer essa vibração de forma programática. Para orientações para desenvolvedores, consulte [UNNotificationSound](https://developer.apple.com/documentation/usernotifications/unnotificationsound).

## Ações de notificação

Uma notificação pode apresentar uma visualização de detalhes personalizável que contém até quatro botões que as pessoas usam para realizar ações sem abrir seu app. Por exemplo, uma notificação de evento do Calendário oferece um botão Adiar, que posterga o alarme do evento por alguns minutos. Para orientações para desenvolvedores, consulte [Handling notifications and notification-related actions](https://developer.apple.com/documentation/usernotifications/handling-notifications-and-notification-related-actions).

**Ofereça ações benéficas que façam sentido no contexto da sua notificação.** Prefira ações que permitam às pessoas realizar tarefas comuns e que economizem tempo, eliminando a necessidade de abrir seu app. Para cada botão, use um termo ou frase curta, com iniciais maiúsculas, que descreva claramente o resultado da ação. Não inclua o nome do seu app nem informações desnecessárias no rótulo do botão, mantenha o texto breve para evitar truncamento e leve a localização em conta ao escrevê-lo.

**Evite oferecer uma ação que apenas abra seu app.** Quando as pessoas tocam em uma notificação ou em sua pré-visualização, esperam que seu app exiba o conteúdo relacionado, então apresentar um botão de ação que faz a mesma coisa sobrecarrega a visualização de detalhes e pode ser confuso.

**Prefira ações não destrutivas.** Se precisar oferecer uma ação destrutiva, certifique-se de que as pessoas tenham contexto suficiente para evitar consequências indesejadas. O sistema dá uma aparência distinta às ações que você identifica como destrutivas.

**Forneça um ícone de interface simples e reconhecível para cada ação de notificação.** Um ícone de interface reforça o significado de uma ação, ajudando as pessoas a entender instantaneamente o que ela faz. O sistema exibe seu ícone de interface no lado final do título da ação. Ao usar [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols), você pode escolher um símbolo existente que represente seu comando ou editar um símbolo relacionado para criar um ícone personalizado.

## Selos (Badging)

Um selo é um pequeno oval preenchido contendo um número que pode aparecer no ícone de um app para indicar o número de notificações não lidas disponíveis. Depois que as pessoas tratam as notificações não lidas, o selo desaparece do ícone do app e reaparece quando novas notificações chegam. As pessoas podem escolher se querem permitir que um app exiba selos nos ajustes de notificações.

**Use um selo somente para mostrar às pessoas quantas notificações não lidas elas têm.** Não use um selo para transmitir informações numéricas que não estejam relacionadas a notificações, como dados meteorológicos, datas e horas, cotações de ações ou pontuações de jogos.

**Certifique-se de que o selo não seja o único método usado para comunicar informações essenciais.** As pessoas podem desativar os selos do seu app, então, se você depender deles para mostrar quando há informações importantes, as pessoas podem perder a mensagem. Sempre garanta que as informações importantes sejam fáceis de encontrar assim que as pessoas abrirem seu app.

**Mantenha os selos atualizados.** Atualize o selo do seu app assim que as pessoas abrirem as notificações correspondentes. Você não quer que as pessoas pensem que há novas notificações disponíveis e descubram que já as visualizaram todas. Observe que reduzir a contagem de um selo a zero remove todas as notificações relacionadas da Central de Notificações.

**Evite criar uma imagem ou um componente personalizado que imite a aparência ou o comportamento de um selo.** As pessoas podem desativar os selos de notificação se quiserem e ficarão frustradas se tiverem feito isso e depois virem o que parece ser um selo.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS ou visionOS.*

### watchOS

No Apple Watch, as notificações ocorrem em duas etapas: *short look* (visualização curta) e *long look* (visualização longa). As pessoas também podem ver as notificações na Central de Notificações. Em dispositivos compatíveis, as pessoas podem tocar duas vezes para responder às notificações.

Você pode ajudar as pessoas a ter uma ótima experiência de notificações projetando recursos e ações específicos do app que sejam relevantes no Apple Watch. Se seu app para watchOS tem um app complementar para iPhone que oferece suporte a notificações, o watchOS pode fornecer automaticamente interfaces padrão de short look e long look, se necessário.

#### Short looks

Um short look aparece quando o pulso de quem usa o relógio é levantado e desaparece quando é abaixado.

![Uma ilustração que representa uma notificação short look de um app genérico. Ela inclui uma imagem principal grande no centro, um título e uma breve pré-visualização do conteúdo da notificação.](../../../images/notifications/notifications-short-looks@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/notifications-short-looks@2x.png)*

**Evite usar um short look como a única forma de comunicar informações importantes.** Um short look aparece apenas por um breve momento, dando às pessoas tempo apenas suficiente para ver do que trata a notificação e qual app a enviou. Se as informações da sua notificação forem críticas, certifique-se de entregá-las também de outras maneiras.

**Tenha a privacidade em mente.** Os short looks são destinados a ser discretos, então é importante fornecer apenas informações básicas. Evite incluir informações potencialmente sensíveis no título da notificação.

#### Long looks

Os long looks fornecem mais detalhes sobre uma notificação. Se necessário, as pessoas podem deslizar na vertical ou usar a Digital Crown para rolar um long look. Depois de ver um long look, as pessoas podem dispensá-lo tocando nele ou simplesmente abaixando o pulso.

![Uma ilustração que representa uma notificação long look de um app genérico. Ela inclui uma imagem principal pequena no canto superior esquerdo, com selo, sobre uma bandeja com o título e o conteúdo da notificação. Abaixo da notificação há dois botões de ação de largura total, o segundo dos quais se estende para fora da tela para indicar que a visualização é rolável.](../../../images/notifications/notifications-long-looks@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/notifications-long-looks@2x.png)*

Uma interface de long look personalizada pode ser estática ou dinâmica. A interface *estática* permite exibir a mensagem de uma notificação junto com texto e imagens estáticos adicionais. A interface *dinâmica* dá acesso ao conteúdo completo da notificação e oferece mais opções para configurar a aparência da interface.

Você pode personalizar a área de conteúdo tanto em long looks estáticos quanto dinâmicos, mas não pode alterar a estrutura geral da interface. A estrutura definida pelo sistema inclui uma *sash* (faixa) na parte superior da interface e um botão Dispensar na parte inferior, abaixo de todos os botões personalizados.

**Considere usar uma notificação de long look personalizada e rica para permitir que as pessoas obtenham as informações de que precisam sem abrir seu app.** Você pode usar as [Animations](https://developer.apple.com/documentation/swiftui/animations) do SwiftUI para criar animações envolventes e interrompíveis; como alternativa, pode usar [SpriteKit](https://developer.apple.com/documentation/spritekit) ou [SceneKit](https://developer.apple.com/documentation/scenekit).

**No mínimo, forneça uma interface estática; prefira fornecer também uma interface dinâmica.** O sistema recorre por padrão à interface estática quando a interface dinâmica não está disponível, como quando não há rede ou o app complementar do iPhone está inacessível. Certifique-se de criar com antecedência os recursos da sua interface estática e empacotá-los com seu app.

**Escolha uma aparência de plano de fundo para a sash.** A sash fornecida pelo sistema, na parte superior da interface de long look, exibe o ícone e o nome do seu app. Você pode personalizar a cor da sash ou dar a ela uma aparência desfocada. Se você exibir uma foto na parte superior da área de conteúdo, provavelmente vai querer usar a sash desfocada, que tem uma aparência clara e translúcida que dá a ilusão de sobrepor a imagem.

**Escolha uma cor de plano de fundo para a área de conteúdo.** Por padrão, o plano de fundo do long look é transparente. Se quiser combinar com a cor de plano de fundo de outras notificações do sistema, use branco com 18% de opacidade; caso contrário, você pode usar uma cor personalizada, como uma cor da paleta da sua marca.

**Forneça até quatro ações personalizadas abaixo da área de conteúdo.** Para cada long look, o sistema usa o tipo da notificação para determinar quais das suas ações personalizadas exibir como botões na interface da notificação. Além disso, o sistema sempre exibe um botão Dispensar na parte inferior da interface do long look, abaixo de todos os botões personalizados. Se seu app para watchOS tem um app complementar para iPhone que oferece suporte a notificações, o sistema compartilha os tipos de notificação acionáveis já registrados pelo seu app para iPhone e os usa para configurar seus botões de ação personalizados.

#### Toque duplo (Double tap)

As pessoas podem tocar duas vezes para responder às notificações em dispositivos compatíveis. Quando uma pessoa responde a uma notificação com um toque duplo, o sistema seleciona a primeira ação não destrutiva como resposta.

**Tenha o toque duplo em mente ao escolher a ordem das ações personalizadas que você apresenta como respostas a uma notificação.** Como um toque duplo executa a primeira ação não destrutiva, considere colocar no topo da lista a ação que as pessoas usam com mais frequência. Por exemplo, um app de estacionamento que oferece ações personalizadas para estender o tempo de uma vaga paga poderia oferecer opções para estender o tempo por 5 minutos, 15 minutos ou uma hora, com a escolha mais comum listada primeiro.

## Recursos

#### Relacionados

[Gerenciando notificações](https://developer.apple.com/design/human-interface-guidelines/managing-notifications)

[Alertas](https://developer.apple.com/design/human-interface-guidelines/alerts)

#### Documentação para desenvolvedores

[Asking permission to use notifications](https://developer.apple.com/documentation/usernotifications/asking-permission-to-use-notifications) — User Notifications

[User Notifications UI](https://developer.apple.com/documentation/usernotificationsui)

[User Notifications](https://developer.apple.com/documentation/usernotifications)

#### Vídeos

- [Envie notificações de comunicação e Time Sensitive](https://developer.apple.com/videos/play/wwdc2021/10091)
- [Introdução às Push Notifications](https://developer.apple.com/videos/play/wwdc2020/10095)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 24 de outubro de 2023 | Atualizadas as considerações por plataforma do watchOS com orientações para apresentar respostas de notificação ao toque duplo. |
