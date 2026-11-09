# Complicações (Complications)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/complications
>
> Plataformas: watchos

*Uma complicação exibe informações oportunas e relevantes no mostrador do relógio, onde as pessoas podem vê-las toda vez que levantam o pulso.*

![Uma representação estilizada de um mostrador do Apple Watch que inclui a hora e um conjunto de complicações de tamanhos diferentes com rótulos. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores.](../../../images/complications/components-complications-intro@2x.png) ![Uma representação estilizada de um mostrador do Apple Watch que inclui a hora e um conjunto de complicações de tamanhos diferentes com rótulos. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/complications/components-complications-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-complications-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-complications-intro~dark@2x.png)*

As pessoas costumam preferir apps que oferecem várias complicações poderosas, porque isso dá a elas formas rápidas de ver os dados que lhes interessam, mesmo sem abrir o app.

A maioria dos mostradores do relógio pode exibir pelo menos uma complicação; alguns podem exibir quatro ou mais.

A partir do watchOS 9, o sistema organiza as complicações (também conhecidas como *acessórios*) em várias famílias — como [circular](https://developer.apple.com/design/human-interface-guidelines/complications#Circular) e [inline](https://developer.apple.com/design/human-interface-guidelines/complications#Inline) — e define alguns layouts recomendados que você pode usar para exibir os dados da sua complicação. Um mostrador do relógio pode especificar a família com a qual oferece suporte em cada espaço de complicação. As complicações que funcionam em versões anteriores do watchOS podem usar os [modelos legados](https://developer.apple.com/design/human-interface-guidelines/complications#Legacy-templates), que definem estilos de complicação não gráficos que não assumem a cor selecionada por quem usa o relógio.

> **Nota para desenvolvedores:** Prefira usar o [WidgetKit](https://developer.apple.com/documentation/widgetkit) para desenvolver complicações para o watchOS 9 e posteriores. Para orientações, consulte [Migrating ClockKit complications to WidgetKit](https://developer.apple.com/documentation/widgetkit/converting-a-clockkit-app). Para oferecer suporte a versões anteriores do watchOS, continue implementando o protocolo de fonte de dados de complicações do ClockKit (consulte [CLKComplicationDataSource](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource)).

## Boas práticas

**Identifique conteúdo essencial e dinâmico que as pessoas queiram ver rapidamente.** Embora as pessoas possam usar uma complicação para abrir um app rapidamente, o comportamento de complicação que elas mais apreciam é a exibição de informações relevantes que sempre parecem atualizadas. Uma complicação estática que não exibe dados significativos pode ter menos chances de permanecer em uma posição de destaque no mostrador do relógio.

**Ofereça suporte a todas as famílias de complicações sempre que possível.** Oferecer suporte a mais famílias significa que as suas complicações ficam disponíveis em mais mostradores do relógio. Se você não puder exibir informações úteis para uma determinada família de complicações, forneça uma imagem que represente o seu app — como o ícone do app — que ainda permita às pessoas abrir o seu app a partir do mostrador do relógio.

**Considere criar várias complicações para cada família.** Oferecer suporte a várias complicações ajuda você a aproveitar os mostradores do relógio compartilháveis e permite que as pessoas configurem um mostrador centrado em um app de que gostam. Por exemplo, um app que ajuda as pessoas a treinar para triatlos poderia oferecer três complicações circulares — uma para cada etapa da prova — cada uma com um link direto para a área específica da etapa no app. Esse app também poderia oferecer um mostrador compartilhável pré-configurado para incluir suas complicações de natação, ciclismo e corrida e usar suas imagens e cores personalizadas. Quando as pessoas escolhem esse mostrador, não precisam fazer nenhuma configuração antes de começar a usá-lo. Para orientações, consulte [Mostradores do relógio](https://developer.apple.com/design/human-interface-guidelines/watch-faces).

**Defina um link direto diferente para cada complicação com a qual você oferece suporte.** Funciona bem quando cada complicação abre o seu app na área mais relevante. Se todas as complicações oferecidas abrirem a mesma área do seu app, elas podem parecer menos úteis.

**Tenha a privacidade em mente.** Com o visor Retina Always-On, as informações no mostrador do relógio podem ficar visíveis para outras pessoas além de quem usa o relógio. Certifique-se de ajudar as pessoas a evitar que informações potencialmente sensíveis fiquem visíveis para outros. Para orientações, consulte [Always On](https://developer.apple.com/design/human-interface-guidelines/always-on).

**Considere cuidadosamente quando atualizar os dados.** Você fornece os dados de uma complicação na forma de uma linha do tempo em que cada entrada tem um valor que especifica o momento em que seus dados serão exibidos no mostrador do relógio. Diferentes conjuntos de dados podem exigir valores de tempo diferentes. Por exemplo, um app de reuniões pode exibir informações sobre uma reunião próxima uma hora antes de ela começar, mas um app de clima pode exibir informações de previsão no momento em que se espera que aquelas condições ocorram. Você pode atualizar a linha do tempo um número limitado de vezes por dia, e o sistema armazena um número limitado de entradas da linha do tempo para cada app, então você precisa escolher momentos que aumentem a utilidade dos seus dados. Para orientações para desenvolvedores, consulte [Migrating ClockKit complications to WidgetKit](https://developer.apple.com/documentation/widgetkit/converting-a-clockkit-app).

## Design visual

**Escolha um estilo de anel ou de medidor com base nos dados que você precisa exibir.** Muitas famílias oferecem suporte a um layout de anel ou de medidor que fornece formas consistentes de representar valores numéricos que podem mudar com o tempo. Por exemplo:

- O estilo fechado pode transmitir um valor que é uma porcentagem de um todo, como em um medidor de bateria.
- O estilo aberto funciona bem quando os valores mínimo e máximo são arbitrários — ou não representam uma porcentagem do todo — como em um indicador de velocidade.
- De forma semelhante ao estilo aberto, o estilo segmentado também exibe valores dentro de um intervalo definido pelo app e pode transmitir mudanças rápidas de valor, como na complicação Ruído.

**Garanta que as imagens fiquem boas no modo com tonalidade (tinted).** No modo com tonalidade, o sistema aplica uma cor sólida ao texto, aos medidores e às imagens de uma complicação e dessatura as imagens em cores plenas, a menos que você forneça versões delas com tonalidade. Para orientações para desenvolvedores, consulte [WidgetRenderingMode](https://developer.apple.com/documentation/widgetkit/widgetrenderingmode). (Se você usa modelos legados, o modo com tonalidade se aplica apenas às complicações gráficas.) Para ajudar suas complicações a ter bom desempenho no modo com tonalidade:

- Evite usar a cor como a única forma de comunicar informações importantes. Você quer que as pessoas recebam as mesmas informações no modo com tonalidade que recebem no modo sem tonalidade.
- Quando necessário, forneça uma versão alternativa para o modo com tonalidade de uma imagem em cores plenas. Se a sua imagem em cores plenas não ficar boa quando dessaturada, você pode fornecer uma versão diferente da imagem para o sistema usar no modo com tonalidade.

**Reconheça que as pessoas podem preferir usar o modo com tonalidade para as complicações, em vez de vê-las em cores plenas.** Quando as pessoas escolhem o modo com tonalidade, o sistema dessatura automaticamente a sua complicação, convertendo-a para tons de cinza e aplicando tonalidade às suas imagens, medidores e texto com uma única cor baseada na cor selecionada por quem usa o relógio.

**Ao criar o conteúdo de uma complicação, use em geral larguras de linha de dois pontos ou mais.** Linhas mais finas podem ser difíceis de ver rapidamente, especialmente quando quem usa o relógio está em movimento. Use espessuras de linha adequadas ao tamanho e à complexidade da imagem.

**Forneça um conjunto de imagens provisórias estáticas para cada complicação com a qual você oferece suporte.** O sistema usa imagens provisórias quando não há outro conteúdo para exibir nos dados da sua complicação. Por exemplo, quando as pessoas instalam o seu app pela primeira vez, o sistema pode exibir uma imagem provisória estática enquanto verifica se o seu app consegue gerar uma imagem provisória localizada para usar no lugar. As imagens provisórias também podem aparecer no carrossel em que as pessoas selecionam complicações. Observe que os tamanhos das imagens das complicações variam por layout (e por modelo legado), e o tamanho de uma imagem provisória pode não corresponder ao tamanho da imagem real que você fornece para aquela complicação. Para orientações para desenvolvedores, consulte [placeholder(in:)](https://developer.apple.com/documentation/widgetkit/timelineprovider/placeholder(in:)).

## Circular

Os layouts circulares podem incluir texto, medidores e imagens em cores plenas em áreas circulares nos mostradores Infograph e Infograph Modular. A família circular também define layouts extragrandes para exibir conteúdo no mostrador X-Large.

![Um ícone branco de notas musicais exibido dentro de um círculo vermelho. O contorno do círculo é vermelho vivo em cerca de noventa por cento da circunferência e vermelho opaco em cerca de dez por cento, mostrando o progresso atual.](../../../images/complications/circular-closed-gauge-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/circular-closed-gauge-image@2x.png)*

![O número cem em texto branco exibido dentro de um círculo verde. O contorno do círculo parece se sobrepor ao ponto de partida da circunferência em cerca de cinco por cento, mostrando o progresso atual.](../../../images/complications/circular-closed-gauge-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/circular-closed-gauge-text@2x.png)*

![O número um ponto zero em texto branco, cercado por um círculo parcial que começa por volta da posição das 8:00 e termina por volta da posição das 4:00. O contorno do círculo parcial passa gradualmente do verde na posição das 8:00 ao violeta na posição das 4:00. Um pequeno ícone de sol verde aparece por volta da posição das 6:00.](../../../images/complications/circular-open-gauge-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/circular-open-gauge-image@2x.png)*

![O número quarenta e dois em texto branco, cercado por um círculo parcial que começa por volta da posição das 8:00 e termina por volta da posição das 4:00. O contorno do círculo parcial passa gradualmente do azul na posição das 8:00 ao violeta na posição das 4:00. As letras A, Q, I aparecem em texto verde por volta da posição das 6:00.](../../../images/complications/circular-open-gauge-simple-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/circular-open-gauge-simple-text@2x.png)*

![O número setenta e dois em texto branco, cercado por um círculo parcial que começa por volta da posição das 8:00 e termina por volta da posição das 4:00. O contorno do círculo parcial passa gradualmente do verde na posição das 8:00 ao amarelo na posição das 4:00. Dois números aparecem lado a lado por volta da posição das 6:00. Cinquenta e cinco aparece em texto verde à esquerda e setenta e seis aparece em texto laranja à direita.](../../../images/complications/circular-open-gauge-range-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/circular-open-gauge-range-text@2x.png)*

![Uma imagem do ícone do app Respirar.](../../../images/complications/graphic-circular-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/graphic-circular-image@2x.png)*

![Um ícone de pôr do sol exibido acima da hora sete e vinte e quatro da noite, centralizado em uma área circular.](../../../images/complications/complication-graphic-circular-stack@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-graphic-circular-stack@2x.png)*

![Duas linhas de texto centralizadas em uma área circular. A linha superior é o símbolo de ações da Apple, A A P L, em branco, e a segunda linha é o número 121.96 em verde.](../../../images/complications/complication-graphic-circular-stack-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-graphic-circular-stack-text@2x.png)*

Você também pode adicionar texto para acompanhar uma imagem circular de tamanho normal, usando um design que curva o texto ao longo do aro de alguns mostradores, como o Infograph. O texto pode preencher quase 180 graus do aro antes de ser truncado.

![Uma linha de texto branco que parece seguir a curva do terço superior de um círculo. O texto diz 8:00 AM yoga, flow studio. Centralizada abaixo do texto está a data do calendário, sexta-feira, vinte e três, exibida em uma área circular.](../../../images/complications/bezel-circular-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/bezel-circular-text@2x.png)*

Ao projetar imagens para uma complicação circular de tamanho normal, use os valores a seguir como referência.

| Imagem | 40mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|
| Imagem | 42x42 pt (84x84 px @2x) | 44.5x44.5 pt (89x89 px @2x) | 47x47 pt (94x94 px @2x) | 50x50 pt (100x100 px @2x) |
| Medidor fechado | 27x27 pt (54x54 px @2x) | 28.5x28.5 pt (57x57 px @2x) | 31x31 pt (62x62 px @2x) | 32x32 pt (64x64 px @2x) |
| Medidor aberto | 11x11 pt (22x22 px @2x) | 11.5x11.5 pt (23x23 px @2x) | 12x12 pt (24x24 px @2x) | 13x13 pt (26x26 px @2x) |
| Pilha (não texto) | 28x14 pt (56x28 px @2x) | 29.5x15 pt (59X30 px @2x) | 31x16 pt (62x32px @ 2x) | 33.5x16.5 pt (67x33 px @2x) |

> **Observação:** O sistema aplica uma máscara circular a cada imagem.

Uma visualização SwiftUI que implementa uma complicação circular de tamanho normal usa os seguintes valores de texto padrão:

- Estilo: Arredondado
- Peso: Médio
- Tamanho do texto: 12 pt (40mm), 12.5 pt (41mm), 13 pt (44mm), 14.5 pt (45mm/49mm)

Se você quiser projetar um tratamento superdimensionado para informações importantes que possa aparecer no mostrador X-Large — por exemplo, a complicação Contatos, que apresenta uma foto de contato —, use as versões extragrandes dos layouts da família circular. Os layouts a seguir permitem exibir imagens em cores plenas, texto e medidores em uma grande região circular que preenche a maior parte do mostrador X-Large. Alguns dos campos de texto podem oferecer suporte a texto multicolorido.

![Um ícone branco de notas musicais exibido dentro de um círculo vermelho. O contorno do círculo é vermelho vivo em cerca de sessenta e seis por cento da circunferência e vermelho opaco em cerca de dez por cento, mostrando o progresso atual.](../../../images/complications/complication-graphic-xl-circular-closed-gauge-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-graphic-xl-circular-closed-gauge-image@2x.png)*

![O número cento e oitenta e cinco em texto azul exibido dentro de um círculo azul. O contorno do círculo é azul vivo em oitenta e cinco por cento da circunferência e azul opaco em quinze por cento, mostrando o progresso atual.](../../../images/complications/complication-graphic-xl-circular-closed-gauge-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-graphic-xl-circular-closed-gauge-text@2x.png)*

![O número cinquenta em texto azul-claro, cercado por um círculo parcial azul-claro que inclui o formato de uma gota na parte inferior.](../../../images/complications/complication-graphic-xl-circular-open-gauge-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-graphic-xl-circular-open-gauge-image@2x.png)*

![O número vinte e nove em texto verde, cercado por um círculo parcial branco que inclui as letras A, Q, I em texto verde na parte inferior.](../../../images/complications/complication-graphic-xl-circular-open-gauge-simple-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-graphic-xl-circular-open-gauge-simple-text@2x.png)*

![O número cinquenta e seis em texto branco, cercado por um círculo parcial que passa gradualmente do verde na posição das 8:00 ao vermelho na posição das 4:00. Dois números aparecem lado a lado na parte inferior do círculo parcial. Cinquenta e dois aparece em texto verde à esquerda e oitenta e nove aparece em texto vermelho à direita.](../../../images/complications/complication-graphic-xl-circular-open-gauge-range-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-graphic-xl-circular-open-gauge-range-text@2x.png)*

![Uma imagem do ícone do app Respirar.](../../../images/complications/complication-graphic-xl-circular-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-graphic-xl-circular-image@2x.png)*

![Um ícone vermelho de pôr do sol exibido acima da hora sete e vinte e quatro da noite, centralizado em uma área circular.](../../../images/complications/complication-graphic-xl-circular-stack-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-graphic-xl-circular-stack-image@2x.png)*

![Duas linhas de texto centralizadas em uma área circular. A linha superior é o símbolo de ações da Apple, A A P L, em branco, e a segunda linha é o número 121.96 em verde.](../../../images/complications/complication-graphic-xl-circular-stack-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-graphic-xl-circular-stack-text@2x.png)*

Use os valores a seguir como referência ao criar imagens para uma complicação circular extragrande.

| Imagem | 40mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|
| Imagem | 120x120 pt (240x240 px @2x) | 127x127 pt (254x254 px @2x) | 132x132 pt (264x264 px @2x) | 143x143 pt (286x286 px @2x) |
| Medidor aberto | 31x31 pt (62x62 px @2x) | 33x33 pt (66x66 px @2x) | 33x33 pt (66x66 px @2x) | 37x37 pt (74x74 px @2x) |
| Medidor fechado | 77x77 pt (154x154 px @2x) | 81.5x81.5 (163x163 px @2x) | 87x87 pt (174x174 px @2x) | 91.5x91.5 (183x183 px @2x) |
| Pilha | 80x40 pt (160x80 px @2x) | 85x42 (170x84 px @2x) | 87x44 pt (174x88 px @2x) | 95x48 pt (190x96 px @2x ) |

> **Observação:** O sistema aplica uma máscara circular às imagens circulares, de medidor aberto e de medidor fechado.

Use os valores a seguir para criar imagens provisórias sem conteúdo para as suas complicações da família circular.

| Layout | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|---|
| Circular | – | 42x42 pt (84x84 px @2x) | 44.5x44.5 pt (89x89 px @2x) | 47x47 pt (94x94 px @2x) | 50x50 pt (100x100 px @2x) |
| Aro (Bezel) | – | 42x42 pt (84x84 px @2x) | 44.5x44.5 pt (89x89 px @2x) | 47x47 pt (94x94 px @2x) | 50x50 pt (100x100 px @2x) |
| Extragrande | – | 120x120 pt (240x240 px @2x) | 127x127 pt (254x254 px @2x) | 132x132 pt (264x264 px @2x) | 143x143 pt (286x286 px @2x) |

Uma visualização SwiftUI que implementa um layout circular extragrande usa os seguintes valores de texto padrão:

- Estilo: Arredondado
- Peso: Médio
- Tamanho do texto: 34.5 pt (40mm), 36.5 pt (41mm), 36.5 pt (44mm), 41 pt (45mm/49mm)

## Canto (Corner)

Os layouts de canto permitem exibir imagens em cores plenas, texto e medidores nos cantos do mostrador do relógio, como no Infograph. Alguns dos modelos também oferecem suporte a texto multicolorido.

![Um ícone mostrando um sol amarelo parcialmente encoberto por uma nuvem branca dentro de uma área circular.](../../../images/complications/corner-circular-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/corner-circular-image@2x.png)*

![O valor quatorze minutos e cinquenta e nove segundos exibido ao lado de uma barra sólida fina. O texto e a barra parecem seguir a curva do quadrante inferior direito de um círculo. O ícone do app Timer aparece abaixo do valor de tempo.](../../../images/complications/corner-gauge-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/corner-gauge-image@2x.png)*

![Os valores de clima cinquenta e cinco, exibido em verde, e setenta e seis, exibido em laranja, mostrados com uma barra sólida em degradê entre eles. A barra passa do verde ao laranja para combinar com os valores. O texto e a barra parecem seguir a curva do quadrante superior direito de um círculo. O valor setenta e dois graus aparece em texto branco grande acima da faixa de temperatura.](../../../images/complications/corner-gauge-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/corner-gauge-text@2x.png)*

![Duas linhas de texto, ambas parecendo seguir a curva do quadrante superior esquerdo de um círculo. A linha superior contém a palavra cup em texto branco grande. A linha inferior contém a hora dez e nove da manhã seguida de um sinal de mais e zero horas, tudo em texto laranja.](../../../images/complications/corner-stack-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/corner-stack-text@2x.png)*

![Uma linha exibindo zero horas, zero minutos e zero segundos em texto laranja. A linha parece seguir a curva do quadrante inferior esquerdo de um círculo. O ícone do app Cronômetro aparece abaixo da linha de texto.](../../../images/complications/corner-text-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/corner-text-image@2x.png)*

Ao projetar imagens para uma complicação de canto, use os valores a seguir como referência.

| Imagem | 40mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|
| Circular | 32x32 pt (64x64 px @2x) | 34x34 pt (68x68 px @2x) | 36x36 pt (72x72 px @2x) | 38x38 pt (76x76 px @2x ) |
| Medidor | 20x20 pt (40x40 px @2x) | 21x21 pt (42x42 px @2x) | 22x22 pt (44x44 px @2x) | 24x24 pt (48x48 px @2x) |
| Texto | 20x20 pt (40x40 px @2x) | 21x21 pt (42x42 px @2x) | 22x22 pt (44x44 px @2x) | 24x24 pt (48x48 px @2x) |

> **Observação:** O sistema aplica uma máscara circular a cada imagem.

Use os valores a seguir para criar imagens provisórias sem conteúdo para as suas complicações da família de canto.

| 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|
| – | 20x20 pt (40x40 px @2x) | 21x21 pt (42x42 px @2x) | 22x22 pt (44x44 px @2x) | 24x24 pt (48x48 px @2x) |

Uma visualização SwiftUI que implementa um layout de canto usa os seguintes valores de texto padrão:

- Estilo: Arredondado
- Peso: Seminegrito
- Tamanho do texto: 10 pt (40mm), 10.5 pt (41mm), 11 pt (44mm), 12 pt (45mm/49mm)

## Inline

Os layouts inline incluem layouts utilitários pequenos e grandes.

Os layouts utilitários pequenos se destinam a ocupar uma área retangular no canto de um mostrador do relógio, como nos mostradores Cronógrafo e Simples. O conteúdo pode incluir uma imagem, um ícone de interface ou um gráfico circular.

![As letras L, O, N exibidas acima da hora seis e nove.](../../../images/complications/complication-utility-small-flat@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-utility-small-flat@2x.png)*

![Dois ícones de gota, cada um centralizado em um anel parcial.](../../../images/complications/complication-utility-small-ring-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-utility-small-ring-image@2x.png)*

![Dois anéis parciais, cada um exibindo o número sessenta e três centralizado dentro deles.](../../../images/complications/complication-utility-small-ring-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-utility-small-ring-text@2x.png)*

![Uma imagem da lua.](../../../images/complications/complication-utility-small-square@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-utility-small-square@2x.png)*

Ao projetar imagens para um layout utilitário pequeno, use os valores a seguir como referência.

| Conteúdo | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|---|
| Plano (Flat) | 9-21x9 pt (18-42x18 px @2x) | 10-22x10 pt (20-44x20 px @2x) | 10.5-23.5x21 pt (21-47x21 @2x) | N/A | 12-26x12 pt (24-52x24 px @2x) |
| Anel | 14x14 pt (28x28 px @2x) | 14x14 pt (28x28 px @2x) | 15x15 pt (30x30 px @2x) | 16x16 pt (32x32 px @2x) | 16.5x16.5 pt (33x33 px @2x) |
| Quadrado | 20x20 pt (40x40 px @2x) | 22x22 pt (44x44 px @2x) | 23.5x23.5 pt (47x47 px @2x) | 25x25 pt (50x50 px @2x) | 26x26 pt (52x52 px @2x) |

O layout utilitário grande é baseado principalmente em texto, mas também oferece suporte a um ícone de interface colocado no lado inicial do texto. Esse layout se estende pela parte inferior de um mostrador do relógio, como nos mostradores Utilitário ou Movimento.

![O texto eleven AM photo shoot exibido em uma linha em um tamanho de texto grande.](../../../images/complications/complication-utility-large-flat@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-utility-large-flat@2x.png)*

Ao projetar imagens para um layout utilitário grande, use os valores a seguir como referência.

| Conteúdo | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|---|
| Plano (Flat) | 9-21x9 pt (18-42x18 px @2x) | 10-22x10 pt (20-44x20 px @2x) | 10.5-23.5x10.5 pt (21-47x21 px @2x) | N/A | 12-26x12 pt (24-52x24 px @2x) |

## Retangular

Os layouts retangulares podem exibir imagens em cores plenas, texto, um medidor e um título opcional em uma grande região retangular. Alguns dos campos de texto podem oferecer suporte a texto multicolorido.

A grande região retangular funciona bem para mostrar detalhes sobre um valor ou processo que muda com o tempo, porque oferece espaço para gráficos, diagramas e tabelas ricos em informações. Por exemplo, a complicação Frequência Cardíaca exibe um gráfico dos valores de frequência cardíaca em um período de 24 horas. O gráfico usa branco e vermelho de alto contraste para o conteúdo principal e um cinza de menor contraste para as linhas e rótulos do gráfico, tornando os dados fáceis de entender rapidamente.

A partir do watchOS 10, se você criou um layout retangular para o seu app para watchOS, o sistema pode exibi-lo no Smart Stack. Você pode otimizar essa apresentação de algumas formas:

- Fornecendo uma cor de fundo ou um conteúdo que comunique informações ou ajude no reconhecimento
- Usando [intents](https://developer.apple.com/documentation/appintents/app-intents) para especificar a relevância e ajudar a garantir que o seu widget seja exibido no Smart Stack nos momentos mais apropriados e úteis para as pessoas
- Criando um layout personalizado das suas informações que seja otimizado para o Smart Stack

Para orientações para desenvolvedores, consulte [WidgetFamily.accessoryRectangular](https://developer.apple.com/documentation/widgetkit/widgetfamily/accessoryrectangular). Consulte [Widgets](https://developer.apple.com/design/human-interface-guidelines/widgets) para orientações adicionais sobre o design de widgets para o Smart Stack.

![Três linhas de texto alinhadas à esquerda. A primeira linha usa texto azul para exibir as palavras water reminders. A segunda linha usa texto branco para exibir as palavras thirty-two ounces consumed. A terceira linha usa texto cinza para exibir as palavras four day streak, woo hoo.](../../../images/complications/rectangular-standard-body@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/rectangular-standard-body@2x.png)*

![Duas linhas de texto exibidas acima de uma barra que pode ser preenchida com cor para indicar progresso. A primeira linha usa texto azul para exibir um ícone de gota seguido das palavras water reminder. A segunda linha usa texto branco para exibir as palavras thirty-two ounces consumed. A barra usa a mesma cor azul da primeira linha de texto para preencher a barra da esquerda até cerca de setenta por cento do comprimento total.](../../../images/complications/rectangular-text-gauge@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/rectangular-text-gauge@2x.png)*

![Uma linha de texto exibida acima de um gráfico. O texto exibe em branco as palavras sixty-eight B, P, M, seguidas das palavras two minutes ago, em texto vermelho. O gráfico mostra muitos valores de frequência cardíaca ao longo do tempo.](../../../images/complications/rectangular-large-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/rectangular-large-image@2x.png)*

Use os valores a seguir como referência ao criar imagens para um layout retangular.

| Conteúdo | 40mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|
| Imagem grande com título * | 150x47 pt (300x94 px @2x) | 159x50 pt (318x100 px @2x) | 171x54 pt (342x108 px @2x) | 178.5x56 pt (357x112 px @2x) |
| Imagem grande sem título * | 162x69 pt (324x138 px @2x) | 171.5x73 pt (343x146 px @2x) | 184x78 pt (368x156 px @2x) | 193x82 pt (386x164 px @2x) |
| Corpo padrão | 12x12 pt (24x24 px @2x) | 12.5x12.5 pt (25x25 px @2x) | 13.5x13.5 pt (27x27 px @2x) | 14.5x14.5 pt (29x29 px @2x) |
| Medidor de texto | 12x12 pt (24x24 px @2x) | 12.5x12.5 pt (25x25 px @2x) | 13.5x13.5 pt (27x27 px @2x) | 14.5x14.5 pt (29x29 px @2x) |

> **Observação:** Os dois layouts de imagem grande incluem automaticamente um raio de canto de quatro pontos.

Uma visualização SwiftUI que implementa um layout retangular usa os seguintes valores de texto padrão:

- Estilo: Arredondado
- Peso: Médio
- Tamanho do texto: 16.5 pt (40mm), 17.5 pt (41mm), 18 pt (44mm), 19.5 pt (45mm/49mm)

## Modelos legados

### Circular pequeno

Os modelos circulares pequenos exibem uma imagem pequena ou alguns caracteres de texto. Eles aparecem no canto do mostrador do relógio (por exemplo, no mostrador Cor).

![Um ícone de gota centralizado em um anel parcial.](../../../images/complications/complication-circular-small-ring-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-circular-small-ring-image@2x.png)*

![O número sessenta e três centralizado em um anel parcial.](../../../images/complications/complication-circular-small-ring-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-circular-small-ring-text@2x.png)*

![Um ícone de cronômetro centralizado em uma área circular.](../../../images/complications/complication-circular-small-simple-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-circular-small-simple-image@2x.png)*

![O número sessenta e oito e o símbolo de grau centralizados em uma área circular.](../../../images/complications/complication-circular-small-simple-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-circular-small-simple-text@2x.png)*

![Um ícone de pôr do sol exibido acima da hora sete e vinte e quatro da noite, centralizado em uma área circular.](../../../images/complications/complication-circular-small-stack-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-circular-small-stack-image@2x.png)*

![As letras L, O, N exibidas acima da hora seis e nove.](../../../images/complications/complication-circular-small-stack-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-circular-small-stack-text@2x.png)*

Ao projetar imagens para uma complicação circular pequena, use os valores a seguir como referência.

| Imagem | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|---|
| Anel | 20x20 pt (40x40 px @2x) | 22x22 pt (44x44 px @2x) | 23.5x23.5 pt (47x47 px @2x) | 24x24 pt (48x48 px @2x) | 26x26 pt (52x52 px @2x) |
| Simples | 16x16 pt (32x32 px @2x) | 18x18 pt (36x36 px @2x) | 19x19 pt (38x38 px @2x) | 20x20 pt (40x40 px @2x) | 21.5x21.5 pt (43x43 px @2x) |
| Pilha | 16x7 pt (32x14 px @2x) | 17x8 pt (34x16 px @2x) | 18x8.5 pt (36x17 px @2x) | 19x9 pt (38x18 px @2x) | 19x9.5 pt (38x19 px @2x) |
| Provisória | 16x16 pt (32x32 px @2x) | 18x18x pt (36x36 px @2x) | 19x19 pt (38x38 px @2x) | 20x20 pt (40x40 px @2x) | 21.5x21.5 pt (43x43 px @2x) |

> **Observação:** Em cada medida de pilha, o valor da largura representa o tamanho máximo.

### Modular pequeno

Os modelos modulares pequenos exibem duas linhas empilhadas compostas por um ícone e conteúdo, um gráfico circular ou um único item maior (por exemplo, a linha inferior de complicações no mostrador Modular).

![Texto e números dispostos em uma coluna de duas linhas. A linha superior exibe as letras C e P e o número quatorze. A linha inferior exibe as letras M e H e o número vinte e oito.](../../../images/complications/complication-modular-small-columns-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-small-columns-text@2x.png)*

![Um ícone de gota centralizado em um anel parcial.](../../../images/complications/complication-modular-small-ring-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-small-ring-image@2x.png)*

![O número sessenta e três centralizado em um anel parcial.](../../../images/complications/complication-modular-small-ring-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-small-ring-text@2x.png)*

![Uma imagem da lua.](../../../images/complications/complication-modular-small-simple-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-small-simple-image@2x.png)*

![O número sessenta e oito e o símbolo de grau.](../../../images/complications/complication-modular-small-simple-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-small-simple-text@2x.png)*

![Um ícone de pôr do sol exibido acima da hora sete e vinte e quatro da noite.](../../../images/complications/complication-modular-small-stack-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-small-stack-image@2x.png)*

![As letras L, O, N exibidas acima da hora seis e nove.](../../../images/complications/complication-modular-small-stack-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-small-stack-text@2x.png)*

Ao projetar ícones e imagens para uma complicação modular pequena, use os valores a seguir como referência.

| Imagem | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|---|
| Anel | 18x18 pt (36x36 px @2x) | 19x19 pt (38x38 px @2x) | 20x20 pt (40x40 px @2x) | 21x21 pt (42x42 px @2x) | 22.5x22.5 pt (45x45 px @2x) |
| Simples | 26x26 pt (52x52 px @2x) | 29x29 pt (58x58 px @2x) | 30.5x30.5 pt (61x61 px @2x) | 32x32 pt (64x64 px @2x) | 34.5x34.5 pt (69x69 px @2x) |
| Pilha | 26x14 pt (52x28 px @2x) | 29x15 pt (58x30 px @2x) | 30.5x16 pt (61x32 px @2x) | 32x17 pt (64x34 px @2x) | 34.5x18 pt (69x36 px @2x) |
| Provisória | 26x26 pt (52x52 px @2x) | 29x29 pt (58x58 px @2x) | 30.5x30.5 pt (61x61 px @2x) | 32x32 pt (64x64 px @2x) | 34.5x34.5 pt (69x69 px @2x) |

> **Observação:** Em cada medida de pilha, o valor da largura representa o tamanho máximo.

### Modular grande

Os modelos modulares grandes oferecem uma tela ampla para exibir até três linhas de conteúdo (por exemplo, no centro do mostrador Modular).

![Informações relacionadas a atividade exibidas em uma coluna de três linhas. A linha superior exibe uma contagem de calorias de 396 de 660. A linha do meio exibe uma contagem de minutos de 13 de 30. A linha inferior exibe uma contagem de horas de 3 de 12.](../../../images/complications/complication-modular-large-columns@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-large-columns@2x.png)*

![Informações relacionadas ao clima exibidas em três linhas de texto alinhadas à esquerda. A linha superior exibe o local Cupertino, Califórnia. A linha do meio exibe sessenta e oito graus e nublado. A linha inferior exibe uma previsão de máxima de setenta e dois graus e mínima de sessenta e dois graus.](../../../images/complications/complication-modular-large-standard-body@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-large-standard-body@2x.png)*

![Informações relacionadas a esportes exibidas em uma tabela de duas colunas e duas linhas com um título. O título da tabela é Final Score. A primeira linha da tabela contém o número 14 seguido do texto Central Prep. A segunda linha da tabela contém o número 28 seguido do texto Mission High.](../../../images/complications/complication-modular-large-table@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-large-table@2x.png)*

![Informações relacionadas ao calendário exibidas em duas linhas de texto totalmente justificado. A primeira linha exibe a palavra wednesday. A segunda linha exibe a abreviação mar e o número nove em um texto com cerca do dobro da altura do texto da primeira linha.](../../../images/complications/complication-modular-large-tall-body@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-modular-large-tall-body@2x.png)*

Ao projetar ícones e imagens para uma complicação modular grande, use os valores a seguir como referência.

| Conteúdo | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|---|
| Colunas | 11-32x11 pt (22-64x22 px @2x) | 12-37x12 pt (24-74x24 px @2x) | 12.5-39x12.5 pt (25-78x25 px @2x) | 14-42x14 pt (28-84x28 px @2x) | 14.5-44x14.5 pt (29-88x29 px @2x) |
| Corpo padrão | 11-32x11 pt (22-64x22 px @2x) | 12-37x12 pt (24-74x24 px @2x) | 12.5-39x12.5 pt (25-78x25 px @2x) | 14-42x14 pt (28-84x28 px @2x) | 14.5-44x14.5 pt (29-88x29 px @2x) |
| Tabela | 11-32x11 pt (22-64x22 px @2x) | 12-37x12 pt (24-74x24 px @2x) | 12.5-39x12.5 pt (25-78x25 px @2x) | 14-42x14 pt (28-84x28 px @2x) | 14.5-44x14.5 pt (29-88x29 px @2x) |

### Extragrande

Os modelos extragrandes exibem texto e imagens maiores (por exemplo, nos mostradores X-Large).

![Um ícone de gota centralizado em um anel parcial.](../../../images/complications/complication-extralarge-ring-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-extralarge-ring-image@2x.png)*

![O número sessenta e três centralizado em um anel parcial.](../../../images/complications/complication-extralarge-ring-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-extralarge-ring-text@2x.png)*

![Uma imagem da lua.](../../../images/complications/complication-extralarge-simple-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-extralarge-simple-image@2x.png)*

![O número sessenta e oito e o símbolo de grau.](../../../images/complications/complication-extralarge-simple-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-extralarge-simple-text@2x.png)*

![Um ícone de pôr do sol exibido acima da hora sete e vinte e quatro da noite.](../../../images/complications/complication-extralarge-stack-image@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-extralarge-stack-image@2x.png)*

![As letras L, O, N exibidas acima da hora seis e nove.](../../../images/complications/complication-extralarge-stack-text@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/complication-extralarge-stack-text@2x.png)*

Ao projetar ícones e imagens para uma complicação extragrande, use os valores a seguir como referência.

| Imagem | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
|---|---|---|---|---|---|
| Anel | 63x63 pt (126x126 px @2x) | 66.5x66.5 pt (133x133 px @2x) | 70.5x70.5 pt (141x141 px @2x) | 73x73 pt (146x146 px @2x) | 79x79 pt (158x158 px @2x) |
| Simples | 91x91 pt (182x182 px @2x) | 101.5x101.5 pt (203x203 px @2x) | 107.5x107.5 pt (215x215 px @2x) | 112x112 pt (224x224 px @2x) | 121x121 pt (242x242 px @2x ) |
| Pilha | 78x42 pt (156x84 px @2x) | 87x45 pt (174x90 px @2x) | 92x47.5 pt (184x95 px @2x) | 96x51 pt (192x102 px @2x) | 103.5x53.5 pt (207x107 px @2x) |
| Provisória | 91x91 pt (182x182 px @2x) | 101.5x101.5 pt (203x203 px @2x) | 107.5x107.5 pt (215x215 px @2x) | 112x112 pt (224x224 px @2x) | 121x121 pt (242x242 px @2x) |

> **Observação:** Em cada medida de pilha, o valor da largura representa o tamanho máximo.

## Considerações por plataforma

*Não compatível com iOS, iPadOS, macOS, tvOS ou visionOS.*

## Recursos

#### Relacionados

[Mostradores do relógio](https://developer.apple.com/design/human-interface-guidelines/watch-faces)

#### Documentação para desenvolvedores

[WidgetKit](https://developer.apple.com/documentation/widgetkit)

#### Vídeos

- [Design widgets for the Smart Stack on Apple Watch](https://developer.apple.com/videos/play/wwdc2023/10309)
- [Go further with Complications in WidgetKit](https://developer.apple.com/videos/play/wwdc2022/10051)
- [Complications and widgets: Reloaded](https://developer.apple.com/videos/play/wwdc2022/10050)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 24 de outubro de 2023 | Substituídos os links para a documentação obsoleta do ClockKit por links para a documentação do WidgetKit. |
| 5 de junho de 2023 | Orientações atualizadas para complicações retangulares, para oferecer suporte a elas como widgets no Smart Stack. |
| 14 de setembro de 2022 | Adicionadas especificações para o Apple Watch Ultra. |
