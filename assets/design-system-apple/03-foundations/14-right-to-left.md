# Da direita para a esquerda (Right to left)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/right-to-left
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Ofereça suporte a idiomas escritos da direita para a esquerda, como árabe e hebraico, invertendo a interface conforme necessário para corresponder à direção de leitura dos respectivos sistemas de escrita.*

![Um esboço de uma lista com marcadores alinhada à direita dentro de uma janela, sugerindo uma interface exibida em um idioma da direita para a esquerda. A imagem está sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original de seis cores da Apple.](../../images/right-to-left/foundations-rtl-intro@2x.png) ![Um esboço de uma lista com marcadores alinhada à direita dentro de uma janela, sugerindo uma interface exibida em um idioma da direita para a esquerda. A imagem está sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original de seis cores da Apple. (escuro)](../../images/right-to-left/foundations-rtl-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-rtl-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-rtl-intro~dark@2x.png)*

Quando as pessoas escolhem um idioma para o dispositivo — ou apenas para o seu app ou jogo —, elas esperam que a interface se adapte de várias maneiras (para saber mais, consulte [Localização](https://developer.apple.com/localization/)).

Os frameworks de interface fornecidos pelo sistema oferecem suporte à escrita da direita para a esquerda (RTL) por padrão, permitindo que os componentes de interface fornecidos pelo sistema se invertam automaticamente no contexto RTL. Se você usa elementos fornecidos pelo sistema e layouts padrão, talvez não precise fazer nenhuma alteração na interface do seu app, que é invertida automaticamente.

Se você quiser ajustar com precisão o seu layout ou aprimorar localizações específicas para se adaptar a diferentes moedas, numerais ou símbolos matemáticos que podem ocorrer em vários locais de países que usam idiomas RTL, siga estas diretrizes.

## Alinhamento de texto

**Ajuste o alinhamento do texto para corresponder à direção da interface, se o sistema não fizer isso automaticamente.** Por exemplo, se você alinha à esquerda o texto com conteúdo no contexto da esquerda para a direita (LTR), alinhe o texto à direita para corresponder à posição espelhada do conteúdo no contexto RTL.

![Uma ilustração que mostra um layout de texto e imagens em uma interface. Três barras que representam texto estão alinhadas à esquerda acima de uma área retangular com cantos arredondados. Uma imagem provisória está centralizada na área, acima de outra barra na borda inferior. A barra dentro da área está alinhada à esquerda.](../../images/right-to-left/text-alignment-ltr-screen@2x.png) ![Uma ilustração que mostra um layout de texto e imagens em uma interface. Três barras que representam texto estão alinhadas à esquerda acima de uma área retangular com cantos arredondados. Uma imagem provisória está centralizada na área, acima de outra barra na borda inferior. A barra dentro da área está alinhada à esquerda. (escuro)](../../images/right-to-left/text-alignment-ltr-screen~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/text-alignment-ltr-screen@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/text-alignment-ltr-screen~dark@2x.png)*

![Uma ilustração que mostra um layout de texto e imagens em uma interface. Três barras que representam texto estão alinhadas à direita acima de uma área retangular com cantos arredondados. Uma imagem provisória está centralizada na área, acima de outra barra na borda inferior. A barra dentro da área está alinhada à direita. A imagem provisória não está invertida.](../../images/right-to-left/text-alignment-rtl-screen@2x.png) ![Uma ilustração que mostra um layout de texto e imagens em uma interface. Três barras que representam texto estão alinhadas à direita acima de uma área retangular com cantos arredondados. Uma imagem provisória está centralizada na área, acima de outra barra na borda inferior. A barra dentro da área está alinhada à direita. A imagem provisória não está invertida. (escuro)](../../images/right-to-left/text-alignment-rtl-screen~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/text-alignment-rtl-screen@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/text-alignment-rtl-screen~dark@2x.png)*

**Alinhe um parágrafo com base no idioma dele, não no contexto atual.** Quando o alinhamento de um parágrafo — definido como três ou mais linhas de texto — não corresponde ao idioma, ele pode ser difícil de ler. Por exemplo, alinhar à direita um parágrafo que consiste em texto LTR pode dificultar a visualização do início de cada linha. Para melhorar a legibilidade, continue alinhando blocos de texto de uma ou duas linhas para corresponder à direção de leitura do contexto atual, mas alinhe um parágrafo para corresponder ao idioma dele.

![Uma imagem que mostra dois parágrafos de texto provisório. O primeiro parágrafo está em árabe e alinhado à direita. O segundo parágrafo está em inglês e alinhado à esquerda.](../../images/right-to-left/paragraph-alignment-correct@2x.png) ![Uma imagem que mostra dois parágrafos de texto provisório. O primeiro parágrafo está em árabe e alinhado à direita. O segundo parágrafo está em inglês e alinhado à esquerda. (escuro)](../../images/right-to-left/paragraph-alignment-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/paragraph-alignment-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/paragraph-alignment-correct~dark@2x.png)*

![Uma marca de verificação em um círculo para indicar um exemplo correto.](../../images/right-to-left/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

![Uma imagem que mostra dois parágrafos de texto provisório. O primeiro parágrafo está em árabe e o segundo está em inglês. Ambos os parágrafos estão alinhados à direita.](../../images/right-to-left/paragraph-alignment-wrong@2x.png) ![Uma imagem que mostra dois parágrafos de texto provisório. O primeiro parágrafo está em árabe e o segundo está em inglês. Ambos os parágrafos estão alinhados à direita. (escuro)](../../images/right-to-left/paragraph-alignment-wrong~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/paragraph-alignment-wrong@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/paragraph-alignment-wrong~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../images/right-to-left/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

**Use um alinhamento consistente para todos os itens de texto de uma lista.** Para garantir uma experiência confortável de leitura e varredura, inverta o alinhamento de todos os itens de uma lista, incluindo itens exibidos em um sistema de escrita diferente.

![Uma ilustração de uma lista alinhada à direita de barras cinza que representam texto da direita para a esquerda.](../../images/right-to-left/mixed-script-list-alignment-correct@2x.png) ![Uma ilustração de uma lista alinhada à direita de barras cinza que representam texto da direita para a esquerda. (escuro)](../../images/right-to-left/mixed-script-list-alignment-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/mixed-script-list-alignment-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/mixed-script-list-alignment-correct~dark@2x.png)*

![Uma marca de verificação em um círculo para indicar um exemplo correto.](../../images/right-to-left/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

![Uma ilustração de uma lista de barras cinza. A primeira, a terceira, a quarta e a quinta barras representam texto da direita para a esquerda. A segunda barra está incorretamente alinhada à esquerda.](../../images/right-to-left/mixed-script-list-alignment-wrong@2x.png) ![Uma ilustração de uma lista de barras cinza. A primeira, a terceira, a quarta e a quinta barras representam texto da direita para a esquerda. A segunda barra está incorretamente alinhada à esquerda. (escuro)](../../images/right-to-left/mixed-script-list-alignment-wrong~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/mixed-script-list-alignment-wrong@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/mixed-script-list-alignment-wrong~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../images/right-to-left/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

## Números e caracteres

Diferentes idiomas RTL podem usar diferentes sistemas numéricos. Por exemplo, o texto em hebraico usa algarismos arábicos ocidentais, enquanto o texto em árabe pode usar algarismos arábicos ocidentais ou orientais. O uso de algarismos arábicos ocidentais e orientais varia entre países e regiões e até entre áreas dentro do mesmo país ou região.

Se o seu app abrange conceitos matemáticos ou outros tópicos centrados em números, é uma boa ideia identificar a maneira apropriada de exibir essas informações em cada localidade que você oferece suporte. Em contrapartida, apps que não tratam de tópicos relacionados a números geralmente podem usar as representações numéricas fornecidas pelo sistema.

![Da esquerda, os numerais um, dois e três em algarismos arábicos ocidentais.](../../images/right-to-left/textformat-123-ltr@2x.png) ![Da esquerda, os numerais um, dois e três em algarismos arábicos ocidentais. (escuro)](../../images/right-to-left/textformat-123-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/textformat-123-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/textformat-123-ltr~dark@2x.png)*

![Da direita, os numerais um, dois e três em algarismos arábicos orientais.](../../images/right-to-left/textformat-123-ar@2x.png) ![Da direita, os numerais um, dois e três em algarismos arábicos orientais. (escuro)](../../images/right-to-left/textformat-123-ar~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/textformat-123-ar@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/textformat-123-ar~dark@2x.png)*

**Não inverta a ordem dos numerais em um número específico.** Independentemente do idioma atual ou do conteúdo ao redor, os dígitos de um número específico — como “541”, um número de telefone ou um número de cartão de crédito — sempre aparecem na mesma ordem.

![Da esquerda, as duas palavras “order” e “number” seguidas do número 123456 em escrita latina.](../../images/right-to-left/latin-numerals@2x.png) ![Da esquerda, as duas palavras “order” e “number” seguidas do número 123456 em escrita latina. (escuro)](../../images/right-to-left/latin-numerals~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/latin-numerals@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/latin-numerals~dark@2x.png)*

![Da direita, as duas palavras “order” e “number” seguidas do número 12345 em escrita hebraica.](../../images/right-to-left/hebrew-numerals@2x.png) ![Da direita, as duas palavras “order” e “number” seguidas do número 12345 em escrita hebraica. (escuro)](../../images/right-to-left/hebrew-numerals~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/hebrew-numerals@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/hebrew-numerals~dark@2x.png)*

![Da direita, as duas palavras “order” e “number” em escrita árabe, seguidas do número 12345 em algarismos arábicos ocidentais.](../../images/right-to-left/western-arabic-numerals@2x.png) ![Da direita, as duas palavras “order” e “number” em escrita árabe, seguidas do número 12345 em algarismos arábicos ocidentais. (escuro)](../../images/right-to-left/western-arabic-numerals~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/western-arabic-numerals@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/western-arabic-numerals~dark@2x.png)*

![Da direita, as duas palavras “order” e “number” em escrita árabe, seguidas do número 12345 em algarismos arábicos orientais.](../../images/right-to-left/eastern-arabic-numerals@2x.png) ![Da direita, as duas palavras “order” e “number” em escrita árabe, seguidas do número 12345 em algarismos arábicos orientais. (escuro)](../../images/right-to-left/eastern-arabic-numerals~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/eastern-arabic-numerals@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/eastern-arabic-numerals~dark@2x.png)*

**Inverta a ordem dos numerais que mostram progresso ou uma direção de contagem; nunca inverta os próprios numerais.** Controles como barras de progresso, controles deslizantes e controles de avaliação costumam incluir numerais para esclarecer seu significado. Se você usa numerais dessa forma, inverta a ordem dos numerais para corresponder à direção do controle invertido. Inverta também uma sequência de numerais se você a usa para comunicar uma ordem específica.

![Uma fileira horizontal de cinco estrelas. Da esquerda, as três primeiras estrelas e meia estão preenchidas. Abaixo das estrelas há uma fileira de numerais latinos, cada numeral alinhado verticalmente com uma estrela acima. Da esquerda, os numerais são um, dois, três, quatro e cinco.](../../images/right-to-left/match-numeral-order-to-directional-controls-latin@2x.png) ![Uma fileira horizontal de cinco estrelas. Da esquerda, as três primeiras estrelas e meia estão preenchidas. Abaixo das estrelas há uma fileira de numerais latinos, cada numeral alinhado verticalmente com uma estrela acima. Da esquerda, os numerais são um, dois, três, quatro e cinco. (escuro)](../../images/right-to-left/match-numeral-order-to-directional-controls-latin~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/match-numeral-order-to-directional-controls-latin@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/match-numeral-order-to-directional-controls-latin~dark@2x.png)*

![Uma fileira horizontal de cinco estrelas. Da direita, as três primeiras estrelas e meia estão preenchidas. Abaixo das estrelas há uma fileira de numerais arábicos orientais, cada numeral alinhado verticalmente com uma estrela acima. Da direita, os numerais são um, dois, três, quatro e cinco.](../../images/right-to-left/match-numeral-order-to-directional-controls-eastern-arabic@2x.png) ![Uma fileira horizontal de cinco estrelas. Da direita, as três primeiras estrelas e meia estão preenchidas. Abaixo das estrelas há uma fileira de numerais arábicos orientais, cada numeral alinhado verticalmente com uma estrela acima. Da direita, os numerais são um, dois, três, quatro e cinco. (escuro)](../../images/right-to-left/match-numeral-order-to-directional-controls-eastern-arabic~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/match-numeral-order-to-directional-controls-eastern-arabic@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/match-numeral-order-to-directional-controls-eastern-arabic~dark@2x.png)*

![Uma fileira horizontal de cinco estrelas. Da direita, as três primeiras estrelas e meia estão preenchidas. Abaixo das estrelas há uma fileira de numerais arábicos ocidentais, cada numeral alinhado verticalmente com uma estrela acima. Da direita, os numerais são um, dois, três, quatro e cinco.](../../images/right-to-left/match-numeral-order-to-directional-controls-western-arabic-hebrew@2x.png) ![Uma fileira horizontal de cinco estrelas. Da direita, as três primeiras estrelas e meia estão preenchidas. Abaixo das estrelas há uma fileira de numerais arábicos ocidentais, cada numeral alinhado verticalmente com uma estrela acima. Da direita, os numerais são um, dois, três, quatro e cinco. (escuro)](../../images/right-to-left/match-numeral-order-to-directional-controls-western-arabic-hebrew~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/match-numeral-order-to-directional-controls-western-arabic-hebrew@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/match-numeral-order-to-directional-controls-western-arabic-hebrew~dark@2x.png)*

![Uma fileira horizontal de cinco estrelas. Da direita, as três primeiras estrelas e meia estão preenchidas. Abaixo das estrelas há uma fileira de numerais arábicos ocidentais, cada numeral alinhado verticalmente com uma estrela acima. Da direita, os numerais são um, dois, três, quatro e cinco.](../../images/right-to-left/match-numeral-order-to-directional-controls-western-arabic-hebrew@2x.png) ![Uma fileira horizontal de cinco estrelas. Da direita, as três primeiras estrelas e meia estão preenchidas. Abaixo das estrelas há uma fileira de numerais arábicos ocidentais, cada numeral alinhado verticalmente com uma estrela acima. Da direita, os numerais são um, dois, três, quatro e cinco. (escuro)](../../images/right-to-left/match-numeral-order-to-directional-controls-western-arabic-hebrew~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/match-numeral-order-to-directional-controls-western-arabic-hebrew@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/match-numeral-order-to-directional-controls-western-arabic-hebrew~dark@2x.png)*

## Controles

**Inverta os controles que mostram progresso de um valor para outro.** Como as pessoas tendem a ver o progresso para a frente como um movimento na mesma direção do idioma que leem, faz sentido inverter controles como controles deslizantes e indicadores de progresso no contexto RTL. Ao fazer isso, inverta também as posições dos glifos ou imagens que acompanham o controle e representam seus valores inicial e final.

![Uma ilustração de um controle deslizante de volume. O lado esquerdo tem um glifo de alto-falante voltado para a direita sem som saindo, e o lado direito tem um glifo de alto-falante voltado para a direita com ondas sonoras saindo dele, mostrando que mover o indicador da esquerda para a direita aumenta o volume.](../../images/right-to-left/flipped-directional-control-ltr@2x.png) ![Uma ilustração de um controle deslizante de volume. O lado esquerdo tem um glifo de alto-falante voltado para a direita sem som saindo, e o lado direito tem um glifo de alto-falante voltado para a direita com ondas sonoras saindo dele, mostrando que mover o indicador da esquerda para a direita aumenta o volume. (escuro)](../../images/right-to-left/flipped-directional-control-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/flipped-directional-control-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/flipped-directional-control-ltr~dark@2x.png)*

![Uma ilustração de um controle deslizante de volume. O lado direito tem um glifo de alto-falante voltado para a esquerda sem som saindo, e o lado esquerdo tem um glifo de alto-falante voltado para a esquerda com ondas sonoras saindo dele, mostrando que mover o indicador da direita para a esquerda aumenta o volume.](../../images/right-to-left/flipped-directional-control-rtl@2x.png) ![Uma ilustração de um controle deslizante de volume. O lado direito tem um glifo de alto-falante voltado para a esquerda sem som saindo, e o lado esquerdo tem um glifo de alto-falante voltado para a esquerda com ondas sonoras saindo dele, mostrando que mover o indicador da direita para a esquerda aumenta o volume. (escuro)](../../images/right-to-left/flipped-directional-control-rtl~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/flipped-directional-control-rtl@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/flipped-directional-control-rtl~dark@2x.png)*

**Inverta os controles que ajudam as pessoas a navegar ou acessar itens em uma ordem fixa.** Por exemplo, no contexto RTL, um botão de voltar deve apontar para a direita para que o fluxo das telas corresponda à ordem de leitura do idioma RTL. Da mesma forma, os botões de próximo ou anterior que permitem acessar itens de uma lista ordenada precisam ser invertidos no contexto RTL para corresponder à ordem de leitura.

**Preserve a direção de um controle que se refere a uma direção real ou aponta para uma área na tela.** Por exemplo, se você oferece um controle que significa “para a direita”, ele deve sempre apontar para a direita, independentemente do contexto atual.

**Equilibre visualmente os sistemas de escrita latino e RTL adjacentes quando necessário.** Em botões, rótulos e títulos, o texto em árabe ou hebraico pode parecer pequeno demais ao lado de texto latino em maiúsculas, porque o árabe e o hebraico não têm letras maiúsculas. Para equilibrar visualmente o texto em árabe ou hebraico com texto latino que usa todas as letras maiúsculas, costuma funcionar bem aumentar o tamanho da fonte RTL em cerca de 2 pontos.

![Uma fileira horizontal de três botões ovais azuis. Cada botão tem o rótulo com a palavra “download”. Da esquerda, os rótulos estão em escrita latina, árabe e hebraica, com o rótulo em inglês usando todas as letras maiúsculas. Duas linhas vermelhas horizontais atravessam os três botões: a linha superior é a linha das ascendentes e a inferior é a linha de base. Todas as letras do rótulo em inglês tocam ambas as linhas. Apenas as duas últimas letras do rótulo em árabe tocam ou se estendem abaixo da linha de base; apenas a última letra toca a linha das ascendentes. Nenhuma letra do rótulo em hebraico toca qualquer uma das linhas. Em comparação com o rótulo latino, tanto o rótulo em árabe quanto o em hebraico parecem pequenos.](../../images/right-to-left/download-uneven-vertical-height@2x.png) ![Uma fileira horizontal de três botões ovais azuis. Cada botão tem o rótulo com a palavra “download”. Da esquerda, os rótulos estão em escrita latina, árabe e hebraica, com o rótulo em inglês usando todas as letras maiúsculas. Duas linhas vermelhas horizontais atravessam os três botões: a linha superior é a linha das ascendentes e a inferior é a linha de base. Todas as letras do rótulo em inglês tocam ambas as linhas. Apenas as duas últimas letras do rótulo em árabe tocam ou se estendem abaixo da linha de base; apenas a última letra toca a linha das ascendentes. Nenhuma letra do rótulo em hebraico toca qualquer uma das linhas. Em comparação com o rótulo latino, tanto o rótulo em árabe quanto o em hebraico parecem pequenos. (escuro)](../../images/right-to-left/download-uneven-vertical-height~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/download-uneven-vertical-height@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/download-uneven-vertical-height~dark@2x.png)*

![Uma fileira horizontal de três botões ovais azuis. Cada botão tem o rótulo com a palavra “download”. Da esquerda, os rótulos estão em escrita latina, árabe e hebraica, com o rótulo em inglês usando todas as letras maiúsculas. Duas linhas vermelhas horizontais atravessam os três botões: a linha superior é a linha das ascendentes e a inferior é a linha de base. Todas as letras do rótulo em inglês tocam ambas as linhas. As duas últimas letras do rótulo em árabe tocam ou se estendem abaixo da linha de base, e a primeira e a última letras se estendem acima da linha das ascendentes. Todas as letras do rótulo em hebraico tocam a linha de base e a linha das ascendentes. O tamanho aumentado dos rótulos em árabe e hebraico faz com que pareçam ter tamanho semelhante ao do rótulo latino.](../../images/right-to-left/download-even-vertical-height@2x.png) ![Uma fileira horizontal de três botões ovais azuis. Cada botão tem o rótulo com a palavra “download”. Da esquerda, os rótulos estão em escrita latina, árabe e hebraica, com o rótulo em inglês usando todas as letras maiúsculas. Duas linhas vermelhas horizontais atravessam os três botões: a linha superior é a linha das ascendentes e a inferior é a linha de base. Todas as letras do rótulo em inglês tocam ambas as linhas. As duas últimas letras do rótulo em árabe tocam ou se estendem abaixo da linha de base, e a primeira e a última letras se estendem acima da linha das ascendentes. Todas as letras do rótulo em hebraico tocam a linha de base e a linha das ascendentes. O tamanho aumentado dos rótulos em árabe e hebraico faz com que pareçam ter tamanho semelhante ao do rótulo latino. (escuro)](../../images/right-to-left/download-even-vertical-height~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/download-even-vertical-height@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/download-even-vertical-height~dark@2x.png)*

## Imagens

**Evite inverter imagens como fotografias, ilustrações e arte em geral.** Inverter uma imagem muitas vezes altera o significado dela; inverter uma imagem protegida por direitos autorais pode ser uma violação. Se o conteúdo de uma imagem estiver fortemente ligado à direção de leitura, considere criar uma nova versão da imagem em vez de inverter a original.

![Uma ilustração simplificada de um globo que usa formas pretas sólidas para mostrar a maior parte da África, Europa, Ásia, Austrália e Antártida.](../../images/right-to-left/image-displayed-right@2x.png) ![Uma ilustração simplificada de um globo que usa formas pretas sólidas para mostrar a maior parte da África, Europa, Ásia, Austrália e Antártida. (escuro)](../../images/right-to-left/image-displayed-right~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/image-displayed-right@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/image-displayed-right~dark@2x.png)*

![Uma marca de verificação em um círculo para indicar um exemplo correto.](../../images/right-to-left/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

![Uma ilustração simplificada de um globo que mostra um hemisfério oriental invertido horizontalmente, com a África na extrema direita e a Austrália na extrema esquerda.](../../images/right-to-left/image-displayed-wrong@2x.png) ![Uma ilustração simplificada de um globo que mostra um hemisfério oriental invertido horizontalmente, com a África na extrema direita e a Austrália na extrema esquerda. (escuro)](../../images/right-to-left/image-displayed-wrong~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/image-displayed-wrong@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/image-displayed-wrong~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../images/right-to-left/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

**Inverta as posições das imagens quando a ordem delas for significativa.** Por exemplo, se você exibe várias imagens em uma ordem específica, como cronológica, alfabética ou de favoritas, inverta as posições delas para preservar o significado da ordem no contexto RTL.

![Uma ilustração que mostra um layout de texto e imagens dentro de um retângulo com cantos arredondados. Uma barra curta que representa texto está alinhada à esquerda no canto superior esquerdo. Abaixo da barra há uma área que contém quatro quadrados, incluindo um quadrado azul com uma imagem provisória no lado esquerdo. Da esquerda, uma fileira de cinco áreas quadradas na parte inferior do retângulo contém as seguintes formas: coração, círculo, estrela, quadrado e triângulo.](../../images/right-to-left/image-positions-ltr@2x.png) ![Uma ilustração que mostra um layout de texto e imagens dentro de um retângulo com cantos arredondados. Uma barra curta que representa texto está alinhada à esquerda no canto superior esquerdo. Abaixo da barra há uma área que contém quatro quadrados, incluindo um quadrado azul com uma imagem provisória no lado esquerdo. Da esquerda, uma fileira de cinco áreas quadradas na parte inferior do retângulo contém as seguintes formas: coração, círculo, estrela, quadrado e triângulo. (escuro)](../../images/right-to-left/image-positions-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/image-positions-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/image-positions-ltr~dark@2x.png)*

![Uma ilustração que mostra um layout de texto e imagens dentro de um retângulo com cantos arredondados. Uma barra curta que representa texto está alinhada à direita no canto superior direito. Abaixo da barra há uma área que contém quatro quadrados, incluindo um quadrado azul com uma imagem provisória no lado direito. Da direita, uma fileira de cinco áreas quadradas na parte inferior do retângulo contém as seguintes formas: coração, círculo, estrela, quadrado e triângulo.](../../images/right-to-left/image-positions-rtl@2x.png) ![Uma ilustração que mostra um layout de texto e imagens dentro de um retângulo com cantos arredondados. Uma barra curta que representa texto está alinhada à direita no canto superior direito. Abaixo da barra há uma área que contém quatro quadrados, incluindo um quadrado azul com uma imagem provisória no lado direito. Da direita, uma fileira de cinco áreas quadradas na parte inferior do retângulo contém as seguintes formas: coração, círculo, estrela, quadrado e triângulo. (escuro)](../../images/right-to-left/image-positions-rtl~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/image-positions-rtl@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/image-positions-rtl~dark@2x.png)*

## Ícones de interface

Quando você usa [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) para fornecer ícones de interface ao seu app, você obtém variantes para o contexto RTL e símbolos localizados para árabe e hebraico, entre outros idiomas. Se você criar símbolos personalizados, pode especificar a direcionalidade deles. Para orientações voltadas a desenvolvedores, consulte [Creating custom symbols](https://developer.apple.com/documentation/technologyoverviews/custom-sf-symbols).

![Três linhas horizontais empilhadas uniformemente umas sobre as outras. Cada linha é precedida por um marcador à esquerda. O formato de um livro fechado com a lombada à esquerda. Um retângulo com cantos arredondados contendo uma fileira de três pontos alinhada à esquerda. Um lápis inclinado a cerca de quarenta e cinco graus, com a ponta à direita do ponto mais à direita e a borracha saindo do canto superior direito do retângulo. Um retângulo com cantos arredondados com uma barra preta no topo que ocupa cerca de um quarto da altura do retângulo. Uma fileira alinhada à esquerda de pontos brancos está no lado esquerdo da barra. Um retângulo com cantos arredondados que contém um retângulo menor de cantos arredondados, preto sólido, perto do lado esquerdo. Fora do retângulo e à direita há um semicírculo preto sólido com uma borda reta vertical próxima ao lado direito vertical do retângulo.](../../images/right-to-left/directional-symbols-ltr@2x.png) ![Três linhas horizontais empilhadas uniformemente umas sobre as outras. Cada linha é precedida por um marcador à esquerda. O formato de um livro fechado com a lombada à esquerda. Um retângulo com cantos arredondados contendo uma fileira de três pontos alinhada à esquerda. Um lápis inclinado a cerca de quarenta e cinco graus, com a ponta à direita do ponto mais à direita e a borracha saindo do canto superior direito do retângulo. Um retângulo com cantos arredondados com uma barra preta no topo que ocupa cerca de um quarto da altura do retângulo. Uma fileira alinhada à esquerda de pontos brancos está no lado esquerdo da barra. Um retângulo com cantos arredondados que contém um retângulo menor de cantos arredondados, preto sólido, perto do lado esquerdo. Fora do retângulo e à direita há um semicírculo preto sólido com uma borda reta vertical próxima ao lado direito vertical do retângulo. (escuro)](../../images/right-to-left/directional-symbols-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/directional-symbols-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/directional-symbols-ltr~dark@2x.png)*

![Três linhas horizontais empilhadas uniformemente umas sobre as outras. Cada linha é precedida por um marcador à direita. O formato de um livro fechado com a lombada à direita. Um retângulo com cantos arredondados contendo uma fileira de três pontos alinhada à direita. Um lápis inclinado a cerca de quarenta e cinco graus, com a ponta à esquerda do ponto mais à esquerda e a borracha saindo do meio do topo do retângulo. Um retângulo com cantos arredondados com uma barra preta no topo que ocupa cerca de um quarto da altura do retângulo. Uma fileira alinhada à direita de pontos brancos está no lado direito da barra. Um retângulo com cantos arredondados que contém um retângulo menor de cantos arredondados, preto sólido, perto do lado direito. Fora do retângulo e à esquerda há um semicírculo preto sólido com uma borda reta vertical próxima ao lado esquerdo vertical do retângulo.](../../images/right-to-left/directional-symbols-rtl@2x.png) ![Três linhas horizontais empilhadas uniformemente umas sobre as outras. Cada linha é precedida por um marcador à direita. O formato de um livro fechado com a lombada à direita. Um retângulo com cantos arredondados contendo uma fileira de três pontos alinhada à direita. Um lápis inclinado a cerca de quarenta e cinco graus, com a ponta à esquerda do ponto mais à esquerda e a borracha saindo do meio do topo do retângulo. Um retângulo com cantos arredondados com uma barra preta no topo que ocupa cerca de um quarto da altura do retângulo. Uma fileira alinhada à direita de pontos brancos está no lado direito da barra. Um retângulo com cantos arredondados que contém um retângulo menor de cantos arredondados, preto sólido, perto do lado direito. Fora do retângulo e à esquerda há um semicírculo preto sólido com uma borda reta vertical próxima ao lado esquerdo vertical do retângulo. (escuro)](../../images/right-to-left/directional-symbols-rtl~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/directional-symbols-rtl@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/directional-symbols-rtl~dark@2x.png)*

**Inverta os ícones de interface que representam texto ou direção de leitura.** Por exemplo, se um ícone de interface usa barras alinhadas à esquerda para representar texto no contexto LTR, alinhe as barras à direita no contexto RTL.

![Um retângulo com cantos arredondados que contém três linhas horizontais alinhadas à esquerda.](../../images/right-to-left/doc-plaintext-ltr@2x.png) ![Um retângulo com cantos arredondados que contém três linhas horizontais alinhadas à esquerda. (escuro)](../../images/right-to-left/doc-plaintext-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-plaintext-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-plaintext-ltr~dark@2x.png)*

![Um retângulo com cantos arredondados que contém três linhas horizontais alinhadas à direita.](../../images/right-to-left/doc-plaintext-rtl@2x.png) ![Um retângulo com cantos arredondados que contém três linhas horizontais alinhadas à direita. (escuro)](../../images/right-to-left/doc-plaintext-rtl~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-plaintext-rtl@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/doc-plaintext-rtl~dark@2x.png)*

**Considere criar uma versão localizada de um ícone de interface que exibe texto.** Alguns ícones de interface incluem letras ou palavras para ajudar a comunicar um conceito relacionado à escrita, como a escolha do tamanho da fonte ou uma assinatura. Se você tem um ícone de interface personalizado que precisa exibir texto de verdade, considere criar uma versão localizada. Por exemplo, o SF Symbols oferece diferentes versões dos símbolos de assinatura, texto formatado e ponteiro em I para uso com texto latino, hebraico e árabe, entre outros.

![Um pequeno X alinhado à esquerda acima de uma linha horizontal. Uma assinatura estilizada começa no X e termina na extremidade direita da linha. Um retângulo com cantos arredondados contendo uma letra A maiúscula no canto superior esquerdo e uma pilha de duas linhas horizontais no canto superior direito. Uma imagem provisória aparece na metade inferior do retângulo. Uma letra A maiúscula grande à esquerda de um cursor em I alto.](../../images/right-to-left/text-icon-localized-latin@2x.png) ![Um pequeno X alinhado à esquerda acima de uma linha horizontal. Uma assinatura estilizada começa no X e termina na extremidade direita da linha. Um retângulo com cantos arredondados contendo uma letra A maiúscula no canto superior esquerdo e uma pilha de duas linhas horizontais no canto superior direito. Uma imagem provisória aparece na metade inferior do retângulo. Uma letra A maiúscula grande à esquerda de um cursor em I alto. (escuro)](../../images/right-to-left/text-icon-localized-latin~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/text-icon-localized-latin@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/text-icon-localized-latin~dark@2x.png)*

![Um pequeno X alinhado à direita acima de uma linha horizontal. Uma assinatura estilizada começa no X e termina na extremidade esquerda da linha. Um retângulo com cantos arredondados contendo a letra álef no canto superior direito e uma pilha de duas linhas horizontais no canto superior esquerdo. Uma imagem provisória aparece na metade inferior do retângulo. Uma letra álef grande à direita de um cursor em I alto.](../../images/right-to-left/text-icon-localized-hebrew@2x.png) ![Um pequeno X alinhado à direita acima de uma linha horizontal. Uma assinatura estilizada começa no X e termina na extremidade esquerda da linha. Um retângulo com cantos arredondados contendo a letra álef no canto superior direito e uma pilha de duas linhas horizontais no canto superior esquerdo. Uma imagem provisória aparece na metade inferior do retângulo. Uma letra álef grande à direita de um cursor em I alto. (escuro)](../../images/right-to-left/text-icon-localized-hebrew~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/text-icon-localized-hebrew@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/text-icon-localized-hebrew~dark@2x.png)*

![Um pequeno X alinhado à direita acima de uma linha horizontal. Uma assinatura estilizada começa no X e termina na extremidade esquerda da linha. Um retângulo com cantos arredondados contendo a letra ain no canto superior direito e uma pilha de duas linhas horizontais no canto superior esquerdo. Uma imagem provisória aparece na metade inferior do retângulo. Uma letra dad grande à direita de um cursor em I alto.](../../images/right-to-left/text-icon-localized-arabic@2x.png) ![Um pequeno X alinhado à direita acima de uma linha horizontal. Uma assinatura estilizada começa no X e termina na extremidade esquerda da linha. Um retângulo com cantos arredondados contendo a letra ain no canto superior direito e uma pilha de duas linhas horizontais no canto superior esquerdo. Uma imagem provisória aparece na metade inferior do retângulo. Uma letra dad grande à direita de um cursor em I alto. (escuro)](../../images/right-to-left/text-icon-localized-arabic~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/text-icon-localized-arabic@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/text-icon-localized-arabic~dark@2x.png)*

Se você tem um ícone de interface personalizado que usa letras ou palavras para comunicar um conceito não relacionado à leitura ou à escrita, considere projetar uma imagem alternativa que não use texto.

**Inverta um ícone de interface que mostra movimento para a frente ou para trás.** Quando algo se move na mesma direção em que as pessoas leem, elas normalmente interpretam essa direção como para a frente; quando algo se move na direção oposta, tendem a interpretar a direção como para trás. Um ícone de interface que representa um objeto se movendo para a frente ou para trás precisa ser invertido no contexto RTL para preservar o significado do movimento. Por exemplo, um ícone que representa um alto-falante normalmente mostra ondas sonoras emanando para a frente do alto-falante. No contexto LTR, as ondas sonoras vêm da esquerda; portanto, no contexto RTL, o ícone precisa ser invertido para mostrar as ondas vindo da direita.

![O contorno de um alto-falante com três linhas curvas concêntricas emanando para a direita.](../../images/right-to-left/speaker-wave-3-ltr@2x.png) ![O contorno de um alto-falante com três linhas curvas concêntricas emanando para a direita. (escuro)](../../images/right-to-left/speaker-wave-3-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/speaker-wave-3-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/speaker-wave-3-ltr~dark@2x.png)*

![O contorno de um alto-falante com três linhas curvas concêntricas emanando para a esquerda.](../../images/right-to-left/speaker-wave-3-rtl@2x.png) ![O contorno de um alto-falante com três linhas curvas concêntricas emanando para a esquerda. (escuro)](../../images/right-to-left/speaker-wave-3-rtl~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/speaker-wave-3-rtl@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/speaker-wave-3-rtl~dark@2x.png)*

**Não inverta logotipos nem sinais e marcas universais.** Exibir um logotipo invertido confunde as pessoas e pode ter repercussões legais. Sempre exiba um logotipo em sua forma original, mesmo que inclua texto. As pessoas esperam que símbolos e marcas universais, como a marca de verificação, tenham uma aparência consistente; portanto, evite invertê-los.

![Um quadrado com cantos arredondados que contém o logotipo preto da Apple TV, que consiste em uma maçã preta sólida à esquerda das letras minúsculas T e V.](../../images/right-to-left/appletv-ltr@2x.png) ![Um quadrado com cantos arredondados que contém o logotipo preto da Apple TV, que consiste em uma maçã preta sólida à esquerda das letras minúsculas T e V. (escuro)](../../images/right-to-left/appletv-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/appletv-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/appletv-ltr~dark@2x.png)*

![Uma marca de verificação.](../../images/right-to-left/checkmark-ltr@2x.png) ![Uma marca de verificação. (escuro)](../../images/right-to-left/checkmark-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark-ltr~dark@2x.png)*

**Em geral, evite inverter ícones de interface que representam objetos do mundo real.** A menos que você use o objeto para indicar direcionalidade, é melhor evitar inverter um ícone que representa um item familiar. Por exemplo, os relógios funcionam da mesma forma em todo lugar, então um ícone de interface tradicional de relógio precisa ter a mesma aparência independentemente da direção do idioma. Alguns ícones de interface podem parecer fazer referência ao idioma ou à direção de leitura porque representam itens inclinados para uso por destros. No entanto, a maioria das pessoas é destra; portanto, inverter um ícone que mostra uma ferramenta para destros não é necessário e pode causar confusão.

![Um disco preto com dois traços brancos na posição de nove horas.](../../images/right-to-left/clock-fill-ltr@2x.png) ![Um disco preto com dois traços brancos na posição de nove horas. (escuro)](../../images/right-to-left/clock-fill-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/clock-fill-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/clock-fill-ltr~dark@2x.png)*

![Um lápis com borracha, inclinado a cerca de quarenta e cinco graus, com a ponta no canto inferior esquerdo.](../../images/right-to-left/pencil-ltr@2x.png) ![Um lápis com borracha, inclinado a cerca de quarenta e cinco graus, com a ponta no canto inferior esquerdo. (escuro)](../../images/right-to-left/pencil-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/pencil-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/pencil-ltr~dark@2x.png)*

![A silhueta de um controle de videogame com um sinal de mais branco à esquerda e dois botões brancos à direita.](../../images/right-to-left/gamecontroller-fill-ltr@2x.png) ![A silhueta de um controle de videogame com um sinal de mais branco à esquerda e dois botões brancos à direita. (escuro)](../../images/right-to-left/gamecontroller-fill-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/gamecontroller-fill-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/gamecontroller-fill-ltr~dark@2x.png)*

**Antes de simplesmente inverter um ícone de interface personalizado complexo, considere seus componentes individuais e o equilíbrio visual geral.** Em alguns casos, um componente — como um selo, uma barra diagonal ou uma lupa — precisa seguir uma linguagem de design visual independentemente da localização. Por exemplo, o SF Symbols mantém a consistência visual usando a mesma barra invertida para representar a proibição ou a negação do significado de um símbolo nas versões LTR e RTL.

![Uma silhueta de um alto-falante apontando para a direita com uma barra invertida sobre ele.](../../images/right-to-left/speaker-slash-fill-ltr@2x.png) ![Uma silhueta de um alto-falante apontando para a direita com uma barra invertida sobre ele. (escuro)](../../images/right-to-left/speaker-slash-fill-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/speaker-slash-fill-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/speaker-slash-fill-ltr~dark@2x.png)*

![Uma silhueta de um alto-falante apontando para a esquerda com uma barra invertida sobre ele.](../../images/right-to-left/speaker-slash-fill-rtl@2x.png) ![Uma silhueta de um alto-falante apontando para a esquerda com uma barra invertida sobre ele. (escuro)](../../images/right-to-left/speaker-slash-fill-rtl~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/speaker-slash-fill-rtl@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/speaker-slash-fill-rtl~dark@2x.png)*

Em outros casos, talvez seja necessário inverter um componente (ou sua posição) para garantir que a versão localizada do ícone ainda faça sentido. Por exemplo, se um selo representa a interface real que as pessoas veem no seu app, ele precisa ser invertido se a sua interface for invertida. Como alternativa, se um selo modifica o significado de um ícone de interface, considere se inverter o selo preserva tanto o significado modificado quanto o equilíbrio visual geral do ícone. Nas imagens mostradas abaixo, o selo não representa um objeto na interface, mas mantê-lo no canto superior direito desequilibra visualmente o carrinho.

![Uma silhueta de um carrinho de compras com rodas voltado para a direita. Um sinal de mais branco dentro de um disco preto está no canto superior direito.](../../images/right-to-left/cart-fill-badge-plus-ltr@2x.png) ![Uma silhueta de um carrinho de compras com rodas voltado para a direita. Um sinal de mais branco dentro de um disco preto está no canto superior direito. (escuro)](../../images/right-to-left/cart-fill-badge-plus-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/cart-fill-badge-plus-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/cart-fill-badge-plus-ltr~dark@2x.png)*

![Uma marca de verificação em um círculo para indicar um exemplo correto.](../../images/right-to-left/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

![Uma silhueta de um carrinho de compras com rodas voltado para a esquerda. Um sinal de mais branco dentro de um disco preto está no canto superior direito.](../../images/right-to-left/cart-fill-badge-rtl-unbalanced@2x.png) ![Uma silhueta de um carrinho de compras com rodas voltado para a esquerda. Um sinal de mais branco dentro de um disco preto está no canto superior direito. (escuro)](../../images/right-to-left/cart-fill-badge-rtl-unbalanced~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/cart-fill-badge-rtl-unbalanced@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/cart-fill-badge-rtl-unbalanced~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../images/right-to-left/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma silhueta de um carrinho de compras com rodas voltado para a esquerda. Um sinal de mais branco dentro de um disco preto está no canto superior esquerdo.](../../images/right-to-left/cart-fill-badge-plus-rtl@2x.png) ![Uma silhueta de um carrinho de compras com rodas voltado para a esquerda. Um sinal de mais branco dentro de um disco preto está no canto superior esquerdo. (escuro)](../../images/right-to-left/cart-fill-badge-plus-rtl~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/cart-fill-badge-plus-rtl@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/cart-fill-badge-plus-rtl~dark@2x.png)*

![Uma marca de verificação em um círculo para indicar um exemplo correto.](../../images/right-to-left/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

Se o seu ícone de interface personalizado inclui um componente que pode sugerir lateralidade, como uma ferramenta, considere preservar a orientação da ferramenta enquanto inverte a imagem base, se necessário.

![Um retângulo com cantos arredondados que contém um ponto preto no canto superior direito. O contorno de uma lupa que contém uma pilha de duas linhas alinhadas à esquerda está sobre o retângulo e à esquerda do ponto, inclinado a cerca de 135 graus.](../../images/right-to-left/mail-and-text-magnifyingglass-ltr@2x.png) ![Um retângulo com cantos arredondados que contém um ponto preto no canto superior direito. O contorno de uma lupa que contém uma pilha de duas linhas alinhadas à esquerda está sobre o retângulo e à esquerda do ponto, inclinado a cerca de 135 graus. (escuro)](../../images/right-to-left/mail-and-text-magnifyingglass-ltr~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/mail-and-text-magnifyingglass-ltr@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/mail-and-text-magnifyingglass-ltr~dark@2x.png)*

![Um retângulo com cantos arredondados que contém um ponto preto no canto superior esquerdo. O contorno de uma lupa que contém uma pilha de duas linhas alinhadas à direita está sobre o retângulo e à direita do ponto, inclinado a cerca de 135 graus.](../../images/right-to-left/mail-and-text-magnifyingglass-rtl@2x.png) ![Um retângulo com cantos arredondados que contém um ponto preto no canto superior esquerdo. O contorno de uma lupa que contém uma pilha de duas linhas alinhadas à direita está sobre o retângulo e à direita do ponto, inclinado a cerca de 135 graus. (escuro)](../../images/right-to-left/mail-and-text-magnifyingglass-rtl~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/mail-and-text-magnifyingglass-rtl@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/mail-and-text-magnifyingglass-rtl~dark@2x.png)*

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

[Inclusão](https://developer.apple.com/design/human-interface-guidelines/inclusion)

[SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols)

#### Documentação para desenvolvedores

[Localização](https://developer.apple.com/localization/)

[Preparing views for localization](https://developer.apple.com/documentation/swiftui/preparing-views-for-localization) — SwiftUI

#### Vídeos

- [Enhance your app’s multilingual experience](https://developer.apple.com/videos/play/wwdc2025/222)
- [Design for Arabic](https://developer.apple.com/videos/play/wwdc2022/10034)
