# Treinos (Workouts)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/workouts
>
> Plataformas: ios,ipados,watchos

*Uma ótima experiência de treino ou de exercícios incentiva as pessoas a se envolverem com a atividade atual e as ajuda a acompanhar seu progresso nos dispositivos.*

![Um esboço de uma pessoa correndo, sugerindo exercício. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple, de seis cores.](../../images/workouts/patterns-workouts-intro@2x.png) ![Um esboço de uma pessoa correndo, sugerindo exercício. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple, de seis cores. (escuro)](../../images/workouts/patterns-workouts-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-workouts-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-workouts-intro~dark@2x.png)*

As pessoas podem usar o Apple Watch durante muitos tipos de treino e podem levar o iPhone ou o iPad durante atividades físicas como caminhar, impulsionar uma cadeira de rodas e correr. Em contraste, as pessoas tendem a usar dispositivos maiores ou mais estacionários, como iPad Pro, Mac e Apple TV, para participar de sessões de treino ao vivo ou gravadas sozinhas ou com outras pessoas.

Você pode criar uma experiência de treino para Apple Watch, iPhone ou iPad que ajude as pessoas a alcançar seus objetivos, aproveitando os dados de atividade do dispositivo e usando componentes familiares para exibir métricas de condicionamento físico.

## Boas práticas

**Em um app de condicionamento físico para watchOS, use sessões de treino para fornecer dados úteis e controles relevantes.** Durante as sessões de treino ativas de um app de condicionamento físico, o watchOS continua exibindo o app à medida que o tempo passa entre os levantamentos de pulso, por isso é importante fornecer os dados do treino com os quais as pessoas mais provavelmente se importam. Por exemplo, você pode mostrar o tempo decorrido ou restante, as calorias queimadas ou a distância percorrida, e oferecer controles relevantes, como marcadores de volta ou de intervalo.

**Evite distrair as pessoas durante um treino com informações irrelevantes.** Por exemplo, as pessoas não precisam rever a lista de treinos que você oferece nem acessar outras partes do seu app enquanto treinam. Esta é uma disposição que muitos apps de treino para watchOS usam, incluindo o Treino:

![Uma captura de tela da tela mais à esquerda do Treino para um treino de Caminhada ao ar livre. No sentido horário, a partir do canto superior esquerdo, estão os botões Finalizar, Retomar, Novo e Segmento.](../../images/workouts/workouts-large-buttons@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/workouts-large-buttons@2x.png)*

![Uma captura de tela da tela central do Treino para um treino de Caminhada ao ar livre. Cinco linhas de dados estão visíveis. De cima para baixo, a tela mostra o tempo decorrido, as calorias ativas, a frequência cardíaca atual, o ritmo médio e a elevação.](../../images/workouts/workouts-metrics@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/workouts-metrics@2x.png)*

![Uma captura de tela da tela mais à direita do Treino, que mostra informações sobre a música que está tocando no momento.](../../images/workouts/workouts-media-playback@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/workouts-media-playback@2x.png)*

**Use uma aparência visual distinta para indicar um treino ativo.** Durante um treino, as pessoas gostam de poder reconhecer uma sessão ativa de relance. A página de métricas pode ser uma boa forma de mostrar que uma sessão está ativa, pois os valores são atualizados em tempo real. Além de exibir valores que se atualizam, você pode diferenciar ainda mais a tela de métricas usando um layout exclusivo.

**Ofereça controles de treino fáceis de encontrar e tocar.** Além de facilitar que as pessoas pausem, retomem e interrompam um treino, forneça um feedback claro que indique quando uma sessão começa ou termina.

**Ajude as pessoas a entender as informações de saúde que seu app registra caso os dados dos sensores não estejam disponíveis durante um treino.** Por exemplo, a água pode impedir a medição da frequência cardíaca, mas seu app ainda pode registrar dados como a distância que as pessoas nadaram e o número de calorias que queimaram. Se seu app oferecer suporte aos tipos de treino *Natação* ou *Outro*, explique a situação usando uma linguagem semelhante à usada no app Treino fornecido pelo sistema, como mostrado abaixo:

|  | Texto de exemplo do app Treino |  |  |
|---|---|---|---|
| ![Uma marca de seleção dentro de um círculo para indicar o uso correto.](../../images/workouts/checkmark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)* | O GPS não é usado durante a Natação em piscina e a água pode impedir a medição da frequência cardíaca, mas o Apple Watch ainda registrará suas calorias, voltas e distância usando o acelerômetro integrado. |  |  |
| ![Uma marca de seleção dentro de um círculo para indicar o uso correto.](../../images/workouts/checkmark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)* | Neste tipo de treino, você ganha o equivalente em calorias a uma caminhada rápida sempre que as leituras dos sensores não estiverem disponíveis. |  |  |
| ![Uma marca de seleção dentro de um círculo para indicar o uso correto.](../../images/workouts/checkmark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)* | O GPS só fornecerá a distância quando você nadar estilo livre. A água pode impedir a medição da frequência cardíaca, mas as calorias ainda serão registradas usando o acelerômetro integrado. |  |  |

**Ofereça um resumo ao final de uma sessão.** Uma tela de resumo confirma que um treino terminou e exibe as informações registradas. Considere enriquecer o resumo incluindo os anéis de Atividade (Activity rings), para que as pessoas possam verificar facilmente seu progresso atual.

**Descarte sessões de treino extremamente breves.** Se uma sessão terminar poucos segundos depois de começar, descarte os dados automaticamente ou pergunte às pessoas se desejam registrar os dados como um treino.

**Garanta que o texto seja legível quando as pessoas estiverem em movimento.** Quando uma sessão exigir movimento, use tamanhos de fonte grandes, cores de alto contraste e organize o texto de modo que as informações mais importantes sejam fáceis de ler.

**Use os anéis de Atividade corretamente.** A visualização dos anéis de Atividade é um elemento projetado pela Apple com um ou mais anéis cujas cores e significados correspondem aos do app Atividade. Use-os apenas para a finalidade documentada.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS ou watchOS. Não é compatível com macOS, tvOS nem visionOS.*

## Recursos

#### Relacionados

[Anéis de Atividade (Activity rings)](https://developer.apple.com/design/human-interface-guidelines/activity-rings)

#### Documentação para desenvolvedores

[WorkoutKit](https://developer.apple.com/documentation/workoutkit)

[Workouts and activity rings](https://developer.apple.com/documentation/healthkit/workouts-and-activity-rings) — HealthKit

#### Vídeos

- [Track workouts with HealthKit on iOS and iPadOS](https://developer.apple.com/videos/play/wwdc2025/322)
- [Build custom workouts with WorkoutKit](https://developer.apple.com/videos/play/wwdc2023/10016)
- [Build a workout app for Apple Watch](https://developer.apple.com/videos/play/wwdc2021/10009)
