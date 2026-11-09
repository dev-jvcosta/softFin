# Experiências imersivas (Immersive experiences)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences
>
> Plataformas: visionos

*No visionOS, você pode projetar apps e jogos que vão além de janelas e volumes, imergindo as pessoas no seu conteúdo.*

![Um esboço que sugere o Apple Vision Pro. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo que reflete sutilmente o amarelo do logotipo original da Apple, de seis cores.](../../images/immersive-experiences/foundations-immersive-experiences-intro@2x.png) ![Um esboço que sugere o Apple Vision Pro. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo que reflete sutilmente o amarelo do logotipo original da Apple, de seis cores. (escuro)](../../images/immersive-experiences/foundations-immersive-experiences-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-immersive-experiences-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-immersive-experiences-intro~dark@2x.png)*

Você pode escolher se seu app ou jogo para visionOS é iniciado no Shared Space ou em um Full Space. No *Shared Space*, seu software é executado ao lado de outras experiências, e as pessoas podem alternar entre elas de forma muito parecida com o que fazem em um Mac; em um *Full Space*, seu app ou jogo é executado sozinho, ocultando outras experiências e ajudando as pessoas a se imergirem no seu conteúdo. Apps e jogos podem oferecer suporte a diferentes tipos de imersão e podem fazer a transição fluida entre o Shared Space e um Full Space a qualquer momento.

## Imersão e passthrough

No visionOS, as pessoas usam o passthrough para ver o ambiente físico ao redor. O *passthrough* fornece vídeo em tempo real das câmeras externas do dispositivo, ajudando as pessoas a se sentirem confortáveis e conectadas ao seu contexto físico.

As pessoas também podem usar a [Digital Crown](https://developer.apple.com/design/human-interface-guidelines/digital-crown) a qualquer momento para gerenciar o conteúdo do app ou jogo ou ajustar o passthrough. Por exemplo, as pessoas podem pressionar e manter pressionada a Digital Crown para recentralizar o conteúdo em seu campo de visão ou clicar duas vezes nela para ocultar brevemente todo o conteúdo e mostrar o passthrough, obtendo uma visão clara do ambiente ao redor.

O sistema também ajuda as pessoas a permanecerem confortáveis alterando automaticamente a opacidade do conteúdo em determinadas situações. Por exemplo, se alguém se aproxima demais de um objeto físico na imersão `mixed`, o conteúdo à sua frente escurece brevemente para que a pessoa veja com mais clareza o ambiente físico imediato. Em experiências mais imersivas — como nos estilos `progressive` e `full` descritos abaixo — o sistema define um limite que se estende por cerca de 1,5 metro a partir da posição inicial da cabeça de quem usa o dispositivo. À medida que a cabeça se aproxima desse limite, toda a experiência começa a se desvanecer e o passthrough aumenta. Quando a cabeça ultrapassa esse limite, os visuais imersivos são substituídos no espaço pelo ícone do app e são restaurados quando a pessoa retorna à sua posição original ou recentraliza a visão usando a Digital Crown.

### Estilos de imersão

Quando seu app ou jogo faz a transição para um Full Space, o sistema oculta os outros apps para que as pessoas possam se concentrar no seu. Em um Full Space, você pode exibir conteúdo 3D que não está preso a uma janela, além do conteúdo em janelas e volumes padrão. Para obter orientações para desenvolvedores, consulte [automatic](https://developer.apple.com/documentation/swiftui/immersionstyle/automatic).

O visionOS oferece várias maneiras de imergir as pessoas no seu conteúdo, tanto no Shared Space quanto ao fazer a transição para um Full Space. Por exemplo, você pode:

- **Usar passthrough atenuado para chamar a atenção para o seu conteúdo.** Você pode atenuar ou tingir sutilmente o passthrough e outros conteúdos visíveis para chamar a atenção para o seu app no Shared Space sem ocultar outros apps e jogos, ou criar uma experiência mais focada em um Full Space. Embora o passthrough seja tingido de preto por padrão, você pode aplicar uma cor de matiz personalizada para criar uma experiência dinâmica no seu app. Para obter orientações para desenvolvedores, consulte [SurroundingsEffect](https://developer.apple.com/documentation/swiftui/surroundingseffect).

**Sem passthrough atenuado**

![Uma captura de tela de uma janela no Shared Space.](../../images/immersive-experiences/immersive-spaces-shared-space-regular-content@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/immersive-spaces-shared-space-regular-content@2x.png)*

**Com passthrough atenuado**

![Uma captura de tela de uma janela em destaque no Shared Space com passthrough atenuado.](../../images/immersive-experiences/immersive-spaces-shared-space-dimmed-content@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/immersive-spaces-shared-space-dimmed-content@2x.png)*

- **Criar experiências 3D sem limites.** Use o estilo de imersão `mixed` em um Full Space para mesclar seu conteúdo com o passthrough. Quando seu app ou jogo é executado em um Full Space, você pode solicitar acesso a informações sobre objetos físicos próximos e o layout do ambiente, ajudando a exibir conteúdo virtual no entorno da pessoa. O estilo de imersão `mixed` não define um limite. Em vez disso, quando uma pessoa chega perto demais de um objeto físico, o sistema torna automaticamente semiopaco o conteúdo próximo para ajudá-la a manter a percepção do ambiente. Para obter orientações para desenvolvedores, consulte [mixed](https://developer.apple.com/documentation/swiftui/immersionstyle/mixed) e [ARKit](https://developer.apple.com/documentation/arkit).
- **Usar a imersão `progressive` para mesclar seu ambiente personalizado com o entorno da pessoa.** Você pode usar o estilo `progressive` em um Full Space para exibir um ambiente personalizado que substitui parcialmente o passthrough. Você também pode definir uma faixa específica de imersão que funcione melhor com seu app ou jogo e exibir conteúdo na orientação vertical ou horizontal. Durante a experiência imersiva, as pessoas podem usar a Digital Crown para ajustar o nível de imersão dentro da faixa padrão de 120 a 360 graus ou de uma faixa personalizada, se você especificar uma. O sistema define automaticamente um limite de aproximadamente 1,5 metro quando uma experiência faz a transição para o estilo `progressive`. Para obter orientações para desenvolvedores, consulte [progressive](https://developer.apple.com/documentation/swiftui/immersionstyle/progressive).

![Uma gravação de uma experiência totalmente imersiva em que uma janela de reprodutor de vídeo aparece sobre um Environment. Conforme a pessoa ajusta a Digital Crown, o passthrough aumenta para revelar mais do ambiente físico ao redor.](../../images/immersive-experiences/visionos-immersion-level-adjustment.png)

*Vídeo: Uma gravação de uma experiência totalmente imersiva em que uma janela de reprodutor de vídeo aparece sobre um Environment. Conforme a pessoa ajusta a Digital Crown, o passthrough aumenta para revelar mais do ambiente físico ao redor.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/visionos-immersion-level-adjustment.mp4)

- **Usar a imersão `full` para criar uma experiência totalmente imersiva.** Você pode usar o estilo `full` em um Full Space para exibir um ambiente personalizado de 360 graus que substitui completamente o passthrough e transporta as pessoas para um novo lugar. Assim como no estilo `progressive`, o sistema define um limite de aproximadamente 1,5 metro quando uma experiência totalmente imersiva começa. Para obter orientações para desenvolvedores, consulte [full](https://developer.apple.com/documentation/swiftui/immersionstyle/full).

**Full Space (Mixed)**

![Uma captura de tela de um app em execução em um Full Space usando o estilo de imersão mixed no visionOS.](../../images/immersive-experiences/immersive-spaces-full-space-mixed-style@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/immersive-spaces-full-space-mixed-style@2x.png)*

**Full Space (Progressive)**

![Uma captura de tela de um app em execução em um Full Space usando o estilo de imersão progressive no visionOS.](../../images/immersive-experiences/immersive-spaces-full-space-progressive-style@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/immersive-spaces-full-space-progressive-style@2x.png)*

**Full Space (Immersive)**

![Uma captura de tela de um app em execução em um Full Space usando o estilo de imersão full no visionOS.](../../images/immersive-experiences/immersive-spaces-full-space-full-style@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/immersive-spaces-full-space-full-style@2x.png)*

## Boas práticas

**Ofereça várias maneiras de usar seu app ou jogo.** Além de dar às pessoas a liberdade de escolher suas experiências, é essencial projetar seu software para oferecer suporte aos recursos de acessibilidade que as pessoas usam para personalizar a maneira como interagem com seus dispositivos. Para obter orientações, consulte [Acessibilidade](https://developer.apple.com/design/human-interface-guidelines/accessibility).

**Prefira iniciar seu app ou jogo no Shared Space ou usando o estilo de imersão `mixed`.** Iniciar no Shared Space permite que as pessoas consultem seu app ou jogo enquanto usam outros softwares em execução e possibilita a alternância fluida entre eles. Se seu app ou jogo oferece uma experiência totalmente imersiva ou no estilo `progressive`, iniciar no estilo de imersão `mixed` ou com uma experiência baseada em janelas no Shared Space dá mais controle às pessoas, permitindo que escolham quando aumentar a imersão.

**Reserve a imersão para momentos e conteúdos significativos.** Nem toda tarefa se beneficia da imersão, e nem toda tarefa imersiva precisa ser totalmente imersiva. Embora as pessoas às vezes queiram entrar em outro mundo, muitas vezes querem permanecer conectadas ao seu entorno enquanto usam seu app ou jogo e podem apreciar poder usar outros softwares e recursos do sistema ao mesmo tempo. Em vez de presumir que seu app ou jogo precisa ser totalmente imersivo na maior parte do tempo, projete maneiras de as pessoas se imergirem nas tarefas e nos conteúdos individuais que tornam sua experiência única. Por exemplo, as pessoas podem navegar pelos álbuns no app Fotos usando uma janela de app familiar no Shared Space, mas, quando querem examinar uma única foto, podem fazer a transição temporária para uma experiência mais imersiva em um Full Space, na qual podem ampliar a foto e apreciar seus detalhes.

**Ajude as pessoas a se envolverem com momentos-chave do seu app ou jogo, independentemente do nível de imersão.** Indicações como atenuação, matiz, [movimento](https://developer.apple.com/design/human-interface-guidelines/motion), [escala](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Scale) e [Spatial Audio](https://developer.apple.com/design/human-interface-guidelines/playing-audio#visionOS) podem ajudar a atrair a atenção das pessoas para uma área específica do conteúdo, seja em uma janela no Shared Space ou em uma experiência completamente imersiva em um Full Space. Comece com indicações sutis que orientem suavemente a atenção das pessoas e reforce-as somente quando houver um bom motivo para isso.

**Prefira cores de matiz sutis para o passthrough.** No visionOS 2 e posterior, você pode tingir o passthrough para ajudar o ambiente da pessoa a se coordenar visualmente com seu conteúdo, ao mesmo tempo que faz as mãos dela parecerem pertencer à sua experiência. Evite matizes brilhantes ou dramáticos que possam distrair as pessoas e diminuir a sensação de imersão. Para obter orientações para desenvolvedores, consulte [SurroundingsEffect](https://developer.apple.com/documentation/swiftui/surroundingseffect).

## Promovendo o conforto

**Esteja atento ao conforto visual das pessoas.** Por exemplo, embora você possa posicionar conteúdo 3D em qualquer lugar enquanto seu app ou jogo é executado em um Full Space, prefira posicioná-lo dentro do [campo de visão](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Field-of-view) das pessoas. Além disso, certifique-se de exibir movimento de maneiras confortáveis enquanto seu software é executado em um Full Space, para evitar distração, confusão ou desconforto. Para obter orientações, consulte [Movimento](https://developer.apple.com/design/human-interface-guidelines/motion).

**Escolha um estilo de imersão que ofereça suporte aos movimentos que as pessoas possam fazer enquanto estão no seu app ou jogo.** É essencial escolher o estilo certo para sua experiência imersiva, pois isso permite que o sistema responda de forma adequada quando as pessoas se movem. Embora as pessoas possam fazer pequenos movimentos físicos durante uma experiência imersiva — como mudar o peso do corpo, virar-se ou alternar entre sentado e em pé —, movimentos excessivos podem fazer o sistema interromper algumas experiências. Em particular, evite usar os estilos de imersão `progressive` ou `full`, ou volte ao estilo de imersão `mixed`, se você acha que as pessoas podem precisar se mover além do limite de 1,5 metro.

**Evite incentivar as pessoas a se moverem enquanto estão em uma experiência progressiva ou totalmente imersiva.** Algumas pessoas podem não querer se mover ou não conseguir fazê-lo por causa de uma deficiência ou do ambiente físico. Projete maneiras de as pessoas interagirem com o conteúdo sem se mover. Por exemplo, deixe que as pessoas tragam um objeto virtual para perto delas em vez de esperar que elas se aproximem do objeto.

**Se usar o estilo de imersão `mixed`, evite obstruir demais o passthrough.** As pessoas usam o passthrough para entender e se orientar no ambiente físico, por isso é importante evitar exibir objetos virtuais que bloqueiem grande parte da visão. Se seu app ou jogo exibe objetos virtuais que possam obstruir substancialmente o passthrough, use os estilos de imersão `full` ou `progressive` em vez de `mixed`.

**Adote o ARKit se quiser mesclar conteúdo personalizado com o entorno de alguém.** Por exemplo, você pode querer integrar conteúdo virtual ao entorno de alguém ou usar as posições das mãos de quem usa o dispositivo para orientar sua experiência. Se precisar de acesso a esses tipos de dados sensíveis, é necessário solicitar a permissão das pessoas. Para obter orientações, consulte [Privacidade](https://developer.apple.com/design/human-interface-guidelines/privacy); para obter orientações para desenvolvedores, consulte [SceneReconstructionProvider](https://developer.apple.com/documentation/arkit/scenereconstructionprovider).

## Transição entre estilos imersivos

**Projete transições suaves e previsíveis ao mudar a imersão.** Ajude as pessoas a se preparar para diferentes experiências oferecendo transições suaves que permitam acompanhar visualmente as mudanças. Evite transições bruscas e abruptas que possam causar desorientação ou desconforto. Para obter orientações para desenvolvedores, consulte [CoordinateSpaceProtocol](https://developer.apple.com/documentation/swiftui/coordinatespaceprotocol).

**Deixe as pessoas escolherem quando entrar ou sair de uma experiência mais imersiva.** Pode ser desorientador para alguém entrar de repente em uma experiência mais imersiva quando não a espera. Em vez disso, ofereça uma ação clara para entrar ou sair da imersão, para que as pessoas decidam quando querem estar mais imersas no seu conteúdo e quando querem sair. Por exemplo, o Keynote oferece um botão Sair em destaque em seu ambiente de Ensaio totalmente imersivo, para ajudar as pessoas a voltar à janela de visualização dos slides. Evite exigir que as pessoas usem os controles do sistema para reduzir a imersão na sua experiência.

**Indique a finalidade de um controle de saída.** Certifique-se de que seu botão deixe claro se ele leva as pessoas de volta a um contexto anterior, menos imersivo, ou se encerra totalmente uma experiência. Se sair da sua experiência imersiva também encerra seu app ou jogo, considere oferecer controles que permitam às pessoas pausar ou voltar a um ponto em que possam salvar seu progresso antes de sair.

## Exibição de mãos virtuais

Quando seu app ou jogo imersivo faz a transição para um Full Space, ele pode pedir permissão para ocultar as mãos da pessoa e, em vez disso, mostrar mãos virtuais que a representem.

**Prefira mãos virtuais que correspondam a características familiares.** Por exemplo, faça corresponder as posições e os gestos das mãos de quem está usando o dispositivo, para que a pessoa possa continuar interagindo com seu app ou jogo de maneiras que pareçam naturais. Mãos que funcionam de maneiras familiares ajudam as pessoas a permanecerem imersas na experiência em mundos totalmente virtuais.

**Tenha cautela ao criar mãos virtuais maiores que as de quem está usando o dispositivo.** Mãos virtuais significativamente maiores que mãos humanas podem impedir que as pessoas vejam o conteúdo que lhes interessa e podem tornar as interações desajeitadas. Além disso, mãos virtuais grandes podem parecer desproporcionais em relação ao espaço, aparecendo muito próximas do rosto de quem usa o dispositivo.

**Se houver uma interrupção nos dados de rastreamento das mãos, faça as mãos virtuais desaparecerem gradualmente e revele as mãos reais da pessoa.** Não deixe as mãos virtuais ficarem sem resposta e parecerem congeladas. Quando os dados de rastreamento das mãos voltarem, faça as mãos virtuais reaparecerem gradualmente.

## Criação de um ambiente

Quando seu app ou jogo faz a transição para um Full Space, você pode substituir o passthrough por um ambiente personalizado que envolve parcial ou completamente uma pessoa, transportando-a para um novo lugar. As diretrizes a seguir podem ajudar você a projetar um ambiente bonito, que as pessoas apreciem.

**Minimize conteúdo que distraia.** Para ajudar a imergir as pessoas em uma tarefa principal, como assistir a um vídeo, evite exibir muito movimento ou detalhes de alto contraste no seu ambiente. Por outro lado, quando quiser chamar a atenção das pessoas para determinadas áreas do ambiente, considere técnicas como usar as texturas e formas de maior qualidade na área importante e recursos de menor qualidade e atenuação nas áreas menos importantes.

**Ajude as pessoas a distinguir objetos interativos no seu ambiente.** As pessoas costumam usar a proximidade de um objeto para decidir se podem interagir com ele. Por exemplo, quando você posiciona um objeto 3D longe das pessoas, elas geralmente não tentam tocá-lo nem se aproximar dele, mas, quando você posiciona um objeto 3D perto das pessoas, é mais provável que tentem interagir com ele.

**Mantenha a animação sutil.** Movimentos pequenos e suaves, como nuvens que se deslocam ou se transformam, podem enriquecer seu ambiente personalizado sem distrair as pessoas nem deixá-las desconfortáveis. Evite sempre exibir movimento excessivo perto das bordas do campo de visão da pessoa. Para obter orientações, consulte [Movimento](https://developer.apple.com/design/human-interface-guidelines/motion).

**Crie um ambiente amplo, independentemente do lugar que ele represente.** Um ambiente pequeno e restritivo pode deixar as pessoas desconfortáveis e até claustrofóbicas.

**Use Spatial Audio para criar atmosfera.** No visionOS, você usa o Spatial Audio para reproduzir som que as pessoas percebem como vindo de locais específicos no espaço, e não apenas dos alto-falantes (para obter orientações, consulte [Reprodução de áudio](https://developer.apple.com/design/human-interface-guidelines/playing-audio)). Ao projetar uma paisagem sonora que reforce seu ambiente personalizado, mantenha a experiência renovada e cativante evitando repetição ou loops em excesso. Se as pessoas puderem reproduzir outros áudios enquanto estão no seu ambiente — por exemplo, ao assistir a um filme —, reduza o volume da paisagem sonora ou interrompa-a completamente.

**Em geral, evite usar uma imagem plana de 360 graus para criar seu ambiente.** Uma imagem de 360 graus tende a não dar às pessoas uma noção de escala quando a veem em um ambiente, o que pode reduzir o caráter imersivo da experiência. Prefira criar malhas de objetos que incluam iluminação e use shaders para implementar animações sutis, como o movimento de nuvens ou folhas ou os reflexos de objetos.

**Ajude as pessoas a se sentirem ancoradas.** Forneça sempre uma malha de plano de solo para que as pessoas não sintam que estão flutuando. Se for necessário usar uma imagem plana de 360 graus no seu ambiente, adicionar uma malha de plano de solo pode ajudá-la a parecer mais realista.

**Minimize a redundância de recursos.** Usar os mesmos recursos ou modelos com muita frequência tende a tornar um ambiente menos realista.

## Considerações por plataforma

*Não compatível com iOS, iPadOS, macOS, tvOS nem watchOS.*

## Recursos

#### Relacionados

[Layout espacial](https://developer.apple.com/design/human-interface-guidelines/spatial-layout)

[Movimento](https://developer.apple.com/design/human-interface-guidelines/motion)

#### Documentação para desenvolvedores

[Criando experiências totalmente imersivas no seu app](https://developer.apple.com/documentation/visionos/creating-fully-immersive-experiences) — visionOS

[Incorporando o entorno do mundo real em uma experiência imersiva](https://developer.apple.com/documentation/visionos/incorporating-real-world-surroundings-in-an-immersive-experience) — visionOS

[ImmersionStyle](https://developer.apple.com/documentation/swiftui/immersionstyle) — visionOS

[Espaços imersivos](https://developer.apple.com/documentation/swiftui/immersive-spaces) — SwiftUI

#### Vídeos

- [Projete ambientes imersivos para apps visionOS e a web espacial](https://developer.apple.com/videos/play/wwdc2026/234)
- [Princípios do design espacial](https://developer.apple.com/videos/play/wwdc2023/10072)
- [Projete experiências espaciais do SharePlay](https://developer.apple.com/videos/play/wwdc2023/10075)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 9 de junho de 2025 | Orientações esclarecidas e anotada a disponibilidade da imersão progressive na orientação vertical. |
| 19 de novembro de 2024 | Orientações sobre estilos de imersão refinadas e imagens adicionadas. |
| 10 de junho de 2024 | Adicionadas orientações para tingir o passthrough e especificar níveis de imersão inicial, mínimo e máximo. |
| 7 de maio de 2024 | Adicionadas orientações para criar um ambiente. |
| 2 de fevereiro de 2024 | Esclarecidas as orientações para escolher um estilo de imersão que corresponda à experiência oferecida pelo seu app. |
| 24 de outubro de 2023 | Imagens atualizadas. |
| 21 de junho de 2023 | Nova página. |
