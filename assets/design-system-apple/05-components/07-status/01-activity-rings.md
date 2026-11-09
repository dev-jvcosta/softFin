# Anéis de Atividade (Activity rings)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/activity-rings
>
> Plataformas: ios,ipados,watchos

*Os anéis de Atividade mostram o progresso diário de uma pessoa em direção às metas de Movimento, Exercício e Em Pé.*

![Uma representação estilizada de um conjunto de anéis de atividade de movimento, exercício e em pé indicando progresso. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple.](../../../images/activity-rings/components-activity-ring-intro@2x.png) ![Uma representação estilizada de um conjunto de anéis de atividade de movimento, exercício e em pé indicando progresso. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple. (escuro)](../../../images/activity-rings/components-activity-ring-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-activity-ring-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-activity-ring-intro~dark@2x.png)*

No watchOS, o elemento de anel de Atividade sempre contém três anéis, cujas cores e significados correspondem aos fornecidos pelo app Atividade. No iOS, o elemento de anel de Atividade contém um único anel de Movimento, que representa uma aproximação da atividade, ou os três anéis se houver um Apple Watch pareado.

## Boas práticas

**Exiba os anéis de Atividade quando forem relevantes para o propósito do seu app.** Se o seu app está relacionado a saúde ou condicionamento físico, e especialmente se ele contribui com informações para o HealthKit, as pessoas geralmente esperam encontrar anéis de Atividade na sua interface. Por exemplo, se você estrutura um treino ou uma sessão de saúde em torno da conclusão dos anéis de Atividade, considere exibir o elemento em uma tela de métricas do treino para que as pessoas possam acompanhar o progresso durante a sessão. Da mesma forma, se você oferece uma tela de resumo que aparece ao final de um treino, pode exibir os anéis de Atividade para ajudar as pessoas a verificar o progresso em direção às metas diárias.

![Uma captura de tela de uma tela de treino em andamento que exibe o valor atual do cronômetro, seguido de uma lista dos valores atuais de Movimento, Exercício e Em Pé. A tela também exibe uma imagem dos anéis de Atividade, em que o estado de cada anel representa o valor atual.](../../../images/activity-rings/activity-rings-summary@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-rings-summary@2x.png)*

**Use os anéis de Atividade somente para mostrar informações de Movimento, Exercício e Em Pé.** Os anéis de Atividade foram projetados para representar de forma consistente o progresso nessas áreas específicas. Não replique nem modifique os anéis de Atividade para outros fins. Nunca use os anéis de Atividade para exibir outros tipos de dados. Nunca mostre o progresso de Movimento, Exercício e Em Pé em outro elemento semelhante a um anel.

**Use os anéis de Atividade para mostrar o progresso de uma única pessoa.** Nunca use os anéis de Atividade para representar dados de mais de uma pessoa e garanta que fique óbvio de quem é o progresso que você está mostrando, usando um rótulo, uma foto ou um avatar.

**Mantenha sempre a aparência visual dos anéis de Atividade igual, independentemente de onde você os exiba.** Siga estas diretrizes para oferecer uma experiência consistente:

- Nunca altere as cores dos anéis; por exemplo, não use filtros nem modifique a opacidade.
- Exiba sempre os anéis de Atividade sobre um fundo preto.
- Prefira envolver os anéis e o fundo dentro de um círculo. Para isso, ajuste o raio dos cantos da visualização que os envolve, em vez de aplicar uma máscara circular.
- Garanta que o fundo preto permaneça visível ao redor do anel mais externo. Se necessário, adicione um contorno preto fino ao redor da borda externa do anel e evite incluir gradiente, sombra ou qualquer outro efeito visual.
- Dimensione sempre os anéis de forma apropriada para que não pareçam desconectados ou fora de lugar.
- Quando necessário, projete a interface ao redor para combinar com os anéis; nunca altere os anéis para combinar com a interface ao redor.

**Para exibir um rótulo ou valor diretamente associado a um anel de Atividade, use as cores correspondentes a ele.** Para exibir os rótulos específicos de cada anel, *Movimento*, *Exercício* e *Em Pé*, ou para exibir os valores atual e de meta de uma pessoa para cada anel, use as cores a seguir, especificadas como valores RGB.

| Movimento | Exercício | Em Pé |
|---|---|---|
| ![R-250,G-17,B-79](../../../images/activity-rings/activity-rings-color-swatch-red@2x.png) ![R-250,G-17,B-79 (escuro)](../../../images/activity-rings/activity-rings-color-swatch-red~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-rings-color-swatch-red@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-rings-color-swatch-red~dark@2x.png)* | ![R-166,G-255,B-0](../../../images/activity-rings/activity-rings-color-swatch-green@2x.png) ![R-166,G-255,B-0 (escuro)](../../../images/activity-rings/activity-rings-color-swatch-green~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-rings-color-swatch-green@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-rings-color-swatch-green~dark@2x.png)* | ![R-0,G-255,B-246](../../../images/activity-rings/activity-rings-color-swatch-blue@2x.png) ![R-0,G-255,B-246 (escuro)](../../../images/activity-rings/activity-rings-color-swatch-blue~dark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-rings-color-swatch-blue@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-rings-color-swatch-blue~dark@2x.png)* |

**Mantenha as margens dos anéis de Atividade.** Um elemento de anel de Atividade deve incluir uma margem externa mínima não inferior à distância entre os anéis. Nunca permita que outros elementos cortem, obstruam ou invadam essa margem ou os próprios anéis.

**Diferencie outros elementos semelhantes a anéis dos anéis de Atividade.** Misturar diferentes estilos de anel pode levar a uma interface visualmente confusa. Se você precisar incluir outros anéis, use espaçamento, linhas ou rótulos para separá-los dos anéis de Atividade. Cor e escala também podem ajudar a criar separação visual.

**Não envie notificações que repitam as mesmas informações que o app Atividade envia.** O sistema já entrega atualizações de progresso de Movimento, Exercício e Em Pé, então é confuso para as pessoas receber informações redundantes do seu app. Além disso, não mostre um elemento de anel de Atividade nas notificações do seu app. Não há problema em fazer referência ao progresso de Atividade em uma notificação, mas faça isso de uma forma exclusiva do seu app e que não replique as mesmas informações fornecidas pelo sistema.

**Não use os anéis de Atividade como decoração.** Os anéis de Atividade fornecem informações às pessoas; eles não servem apenas para embelezar o design do seu app. Nunca exiba os anéis de Atividade em rótulos ou gráficos de fundo.

**Não use os anéis de Atividade como marca.** Use os anéis de Atividade estritamente para exibir o progresso de Atividade no seu app. Nunca use os anéis de Atividade no ícone do seu app nem em materiais de marketing.

## Considerações por plataforma

*Nenhuma consideração adicional para iPadOS ou watchOS. Sem suporte no macOS, tvOS ou visionOS.*

### iOS

Os anéis de Atividade estão disponíveis no iOS com [HKActivityRingView](https://developer.apple.com/documentation/healthkitui/hkactivityringview). A aparência do elemento de anel de Atividade muda automaticamente dependendo de haver ou não um Apple Watch pareado:

- Com um Apple Watch pareado, o iOS mostra os três anéis de Atividade.
- Sem um Apple Watch pareado, o iOS mostra apenas o anel de Movimento, que representa uma aproximação da atividade de uma pessoa com base nos passos e nas informações de treino de outros apps.

![Uma captura de tela do resumo de Atividade no app Fitness do iOS com o Apple Watch pareado. Os três anéis de Atividade são exibidos.](../../../images/activity-rings/activity-rings-watch-paired@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-rings-watch-paired@2x.png)*

![Uma captura de tela do resumo de Atividade no app Fitness do iOS sem Apple Watch pareado. Apenas o anel de Movimento é exibido.](../../../images/activity-rings/activity-rings-no-watch-paired@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-rings-no-watch-paired@2x.png)*

Como o iOS mostra os anéis de Atividade com ou sem um Apple Watch pareado, o histórico de atividades pode incluir uma combinação de ambos os estilos. Por exemplo, os anéis de Atividade no Fitness têm três anéis quando uma pessoa se exercita com o Apple Watch pareado e apenas o anel de Movimento quando ela se exercita sem o Apple Watch.

## Recursos

#### Relacionados

[Treinos](https://developer.apple.com/design/human-interface-guidelines/workouts)

#### Documentação para desenvolvedores

[HKActivityRingView](https://developer.apple.com/documentation/healthkitui/hkactivityringview) — HealthKit

#### Vídeos

- [Track workouts with HealthKit on iOS and iPadOS](https://developer.apple.com/videos/play/wwdc2025/322)
- [Build a workout app for Apple Watch](https://developer.apple.com/videos/play/wwdc2021/10009)
- [Build custom workouts with WorkoutKit](https://developer.apple.com/videos/play/wwdc2023/10016)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 29 de março de 2024 | Orientações aprimoradas para a exibição dos anéis de Atividade e listagem de cores específicas para exibir conteúdo relacionado. |
| 5 de dezembro de 2023 | Adicionada arte representando os anéis de Atividade no iOS. |
