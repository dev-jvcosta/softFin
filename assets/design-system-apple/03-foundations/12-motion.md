# Movimento (Motion)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/motion
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Movimentos belos e fluidos dão vida à interface, transmitindo status, oferecendo feedback e instruções e enriquecendo a experiência visual do seu app ou jogo.*

![Um esboço de três losangos sobrepostos, sugerindo o movimento de um elemento da esquerda para a direita. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple, de seis cores.](../../images/motion/foundations-motion-intro@2x.png) ![Um esboço de três losangos sobrepostos, sugerindo o movimento de um elemento da esquerda para a direita. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple, de seis cores. (escuro)](../../images/motion/foundations-motion-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-motion-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-motion-intro~dark@2x.png)*

Muitos componentes do sistema incluem movimento automaticamente, permitindo que você ofereça experiências familiares e consistentes em todo o seu app ou jogo. Os componentes do sistema também podem ajustar seu movimento em resposta a fatores como ajustes de acessibilidade ou diferentes métodos de entrada. Por exemplo, o movimento do [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass) responde à interação por toque direto com mais ênfase, para reforçar a sensação de uma experiência tátil, mas produz um efeito mais discreto quando a pessoa interage usando um trackpad.

Se você projetar movimento personalizado, siga as diretrizes abaixo.

## Boas práticas

**Adicione movimento com propósito, apoiando a experiência sem ofuscá-la.** Não adicione movimento apenas por adicionar. Animações gratuitas ou excessivas podem distrair as pessoas e fazê-las se sentirem desconectadas ou fisicamente desconfortáveis.

**Torne o movimento opcional.** Nem todas as pessoas podem ou querem vivenciar o movimento no seu app ou jogo, por isso é essencial evitar usá-lo como a única forma de comunicar informações importantes. Para ajudar todos a aproveitar seu app ou jogo, complemente o feedback visual usando também alternativas como [háptico](https://developer.apple.com/design/human-interface-guidelines/playing-haptics) e [áudio](https://developer.apple.com/design/human-interface-guidelines/playing-audio) para se comunicar.

## Fornecendo feedback

**Busque um movimento de feedback realista que acompanhe os gestos e as expectativas das pessoas.** Em apps que não são jogos, um movimento preciso e realista pode ajudar as pessoas a entender como algo funciona, mas um movimento de feedback que não faz sentido pode deixá-las desorientadas. Por exemplo, se alguém revela uma visualização deslizando-a de cima para baixo, não espera dispensá-la deslizando-a para o lado.

**Procure brevidade e precisão nas animações de feedback.** Quando o feedback animado é breve e preciso, tende a parecer leve e discreto, e muitas vezes pode transmitir informações com mais eficácia do que uma animação proeminente. Por exemplo, quando um jogo exibe uma animação sucinta vinculada com precisão a uma ação bem-sucedida, os jogadores entendem a mensagem instantaneamente, sem se distrair da jogabilidade. Outro exemplo está no visionOS: quando as pessoas tocam em uma panorama no Fotos, ela se expande de forma rápida e suave para preencher o espaço à frente delas, ajudando-as a acompanhar a transição sem precisar esperar para aproveitar o conteúdo.

**Em apps, geralmente evite adicionar movimento a interações da interface que ocorrem com frequência.** O sistema já fornece animações sutis para interações com elementos de interface padrão. Para um elemento personalizado, geralmente você quer evitar que as pessoas gastem tempo extra prestando atenção a movimentos desnecessários toda vez que interagirem com ele.

**Permita que as pessoas cancelem o movimento.** Na medida do possível, não faça as pessoas esperarem a conclusão de uma animação antes de poderem fazer qualquer coisa, especialmente se tiverem que ver a animação mais de uma vez.

**Considere usar símbolos animados quando fizer sentido.** Ao usar o SF Symbols 5 ou posterior, você pode aplicar animações a SF Symbols ou a símbolos personalizados. Para orientações, consulte [Animações](https://developer.apple.com/design/human-interface-guidelines/sf-symbols#Animations).

## Aproveitando os recursos da plataforma

**Garanta que o movimento do seu jogo tenha uma ótima aparência por padrão em cada plataforma compatível.** Na maioria dos jogos, manter uma taxa de quadros consistente de 30 a 60 fps normalmente resulta em uma experiência fluida e visualmente agradável. Para cada plataforma compatível, use os recursos gráficos do dispositivo para habilitar ajustes padrão que permitam às pessoas aproveitar seu jogo sem precisar alterá-los antes.

**Permita que as pessoas personalizem a experiência visual do seu jogo para otimizar o desempenho ou a duração da bateria.** Por exemplo, considere permitir que as pessoas alternem entre modos de energia quando o sistema detectar a presença de uma fonte de energia externa.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS ou tvOS.*

### visionOS

Além de comunicar contexto de forma sutil, chamar a atenção para informações e enriquecer experiências imersivas, o movimento no visionOS pode se combinar com a [profundidade](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Depth) para fornecer feedback essencial quando as pessoas olham para elementos interativos. Como o movimento provavelmente será uma grande parte da sua experiência no visionOS, é fundamental evitar causar distração, confusão ou desconforto.

**Na medida do possível, evite exibir movimento nas bordas do campo de visão da pessoa.** As pessoas podem ser particularmente sensíveis a movimentos que ocorrem na visão periférica: além de distrair, esse movimento pode até causar desconforto, pois pode fazer as pessoas sentirem que elas ou o ambiente ao redor estão se movendo. Se precisar mostrar um objeto se movendo na periferia durante uma experiência imersiva, garanta que o nível de brilho do objeto seja semelhante ao do restante do conteúdo visível.

**Ajude as pessoas a se manterem confortáveis ao mostrar o movimento de objetos virtuais grandes.** Se um objeto for grande o bastante para preencher grande parte do [campo de visão](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Field-of-view), ocultando a maior parte ou a totalidade do [passthrough](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences#Immersion-and-passthrough), as pessoas podem naturalmente percebê-lo como parte do ambiente ao redor. Para ajudar as pessoas a perceber o movimento do objeto sem fazê-las pensar que elas ou o ambiente estão se movendo, você pode aumentar a translucidez do objeto, ajudando as pessoas a enxergar através dele, ou reduzir seu contraste para tornar seu movimento menos perceptível.

> **Observação:** As pessoas podem sentir desconforto mesmo quando são elas que movem um objeto virtual grande, como uma janela. Embora ajustar a translucidez e o contraste possa ajudar nesse cenário, considere também manter o tamanho de uma janela relativamente pequeno.

**Considere usar esmaecimentos quando precisar reposicionar um objeto.** Quando um objeto se move de um local para outro, as pessoas naturalmente acompanham o movimento. Se esse movimento não comunica nada útil às pessoas, você pode esmaecer o objeto antes de movê-lo e fazê-lo reaparecer gradualmente depois que ele estiver no novo local.

**Em geral, evite permitir que as pessoas girem um mundo virtual.** Quando um mundo virtual gira, a experiência normalmente perturba a sensação de estabilidade das pessoas, mesmo quando elas controlam a rotação e o movimento é sutil. Em vez disso, considere usar mudanças instantâneas de direção durante um rápido esmaecimento.

**Considere dar às pessoas um referencial estacionário.** Pode ser mais fácil para as pessoas lidar com o movimento visual quando ele está contido em uma área que não se move. Em contraste, se toda a área ao redor parece se mover (por exemplo, em um jogo que move automaticamente o jogador pelo espaço), as pessoas podem se sentir mal.

**Evite mostrar objetos que oscilam de forma contínua.** Em particular, evite mostrar uma oscilação com frequência em torno de 0,2 Hz, pois as pessoas podem ser muito sensíveis a essa frequência. Se precisar mostrar objetos oscilando, procure manter a amplitude baixa e considere tornar o conteúdo translúcido.

### watchOS

O SwiftUI oferece uma maneira poderosa e simplificada de adicionar movimento ao seu app. Se precisar usar o WatchKit para animar mudanças de layout e de aparência, ou criar sequências de imagens animadas, consulte [WKInterfaceImage](https://developer.apple.com/documentation/watchkit/wkinterfaceimage).

> **Observação:** Todas as animações baseadas em layout e aparência incluem automaticamente um suavizamento (easing) integrado que é reproduzido no início e no fim da animação. Não é possível desativar nem personalizar o easing.

## Recursos

#### Relacionados

[Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

[Acessibilidade](https://www.apple.com/accessibility/)

[Layout espacial](https://developer.apple.com/design/human-interface-guidelines/spatial-layout)

[Experiências imersivas](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences)

#### Documentação para desenvolvedores

[Animating views and transitions](https://developer.apple.com/tutorials/swiftui/animating-views-and-transitions) — SwiftUI

#### Vídeos

- [Enhance your UI animations and transitions](https://developer.apple.com/videos/play/wwdc2024/10145)
- [Create custom visual effects with SwiftUI](https://developer.apple.com/videos/play/wwdc2024/10151)
- [Design considerations for vision and motion](https://developer.apple.com/videos/play/wwdc2023/10078)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de setembro de 2025 | Adicionadas orientações para o Liquid Glass. |
| 10 de junho de 2024 | Adicionados exemplos específicos de jogos e orientações aprimoradas para o uso de movimento em jogos. |
| 2 de fevereiro de 2024 | Orientações aprimoradas para minimizar o movimento periférico em apps para visionOS. |
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
