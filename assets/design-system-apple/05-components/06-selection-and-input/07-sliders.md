# Controles deslizantes (Sliders)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/sliders
>
> Plataformas: ios,ipados,macos,visionos,watchos

*Um controle deslizante é uma trilha horizontal com um controle, chamado de marcador (thumb), que as pessoas podem ajustar entre um valor mínimo e um valor máximo.*

![Uma representação estilizada de um controle deslizante de brilho. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple.](../../../images/sliders/components-slider-intro@2x.png) ![Uma representação estilizada de um controle deslizante de brilho. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple. (escuro)](../../../images/sliders/components-slider-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-slider-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-slider-intro~dark@2x.png)*

À medida que o valor de um controle deslizante muda, a parte da trilha entre o valor mínimo e o marcador é preenchida com cor. Um controle deslizante pode, opcionalmente, exibir ícones à esquerda e à direita que ilustram o significado dos valores mínimo e máximo.

## Boas práticas

**Personalize a aparência de um controle deslizante se isso agregar valor.** Você pode ajustar a aparência de um controle deslizante — incluindo a cor da trilha, a imagem e a cor de tonalidade do marcador e os ícones esquerdo e direito — para combiná-lo com o design do seu app e comunicar a intenção. Um controle deslizante que ajusta o tamanho de uma imagem, por exemplo, poderia mostrar um pequeno ícone de imagem à esquerda e um grande ícone de imagem à direita.

**Use direções familiares para o controle deslizante.** As pessoas esperam que os lados mínimo e máximo dos controles deslizantes sejam consistentes em todos os apps, com os valores mínimos no lado inicial e os valores máximos no lado final (em controles deslizantes horizontais) e os valores mínimos na parte inferior e os máximos na parte superior (em controles deslizantes verticais). Por exemplo, as pessoas esperam poder mover um controle deslizante horizontal que representa uma porcentagem de 0 por cento no lado inicial a 100 por cento no lado final.

**Considere complementar um controle deslizante com um campo de texto e um seletor incremental correspondentes.** Especialmente quando um controle deslizante representa uma ampla faixa de valores, as pessoas podem gostar de ver o valor exato do controle e de poder inserir um valor específico em um campo de texto. Adicionar um seletor incremental oferece uma maneira conveniente de aumentar ou diminuir em valores inteiros. Para orientações relacionadas, consulte [Campos de texto](https://developer.apple.com/design/human-interface-guidelines/text-fields) e [Seletores incrementais](https://developer.apple.com/design/human-interface-guidelines/steppers).

![Uma ilustração de um controle deslizante linear horizontal sem marcas de graduação, seguido de um campo de texto e um seletor incremental. O marcador está no centro do controle deslizante e o campo de texto exibe 50%.](../../../images/sliders/sliders-text-field@2x.png) ![Uma ilustração de um controle deslizante linear horizontal sem marcas de graduação, seguido de um campo de texto e um seletor incremental. O marcador está no centro do controle deslizante e o campo de texto exibe 50%. (escuro)](../../../images/sliders/sliders-text-field~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-text-field@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-text-field~dark@2x.png)*

## Considerações por plataforma

*Sem suporte no tvOS.*

### iOS, iPadOS

**Não use um controle deslizante para ajustar o volume do áudio.** Se você precisar oferecer controle de volume no seu app, use uma visualização de volume, que é personalizável e inclui um controle deslizante de nível de volume e um controle para alterar o dispositivo de saída de áudio ativo. Para orientações, consulte [Reprodução de áudio](https://developer.apple.com/design/human-interface-guidelines/playing-audio).

### macOS

Os controles deslizantes no macOS também podem incluir marcas de graduação, facilitando para as pessoas a localização de um valor específico dentro da faixa.

Em um controle deslizante linear, com ou sem marcas de graduação, o marcador tem um formato de losango estreito, e a parte da trilha entre o valor mínimo e o marcador é preenchida com cor. Um controle deslizante linear costuma incluir ícones complementares que ilustram o significado dos valores mínimo e máximo.

Em um controle deslizante circular, o marcador aparece como um pequeno círculo. As marcas de graduação, quando presentes, aparecem como pontos espaçados uniformemente ao redor da circunferência do controle deslizante.

![Uma ilustração de um controle deslizante horizontal com o marcador no meio. A parte inicial da trilha até o marcador é preenchida com uma cor de destaque azul.](../../../images/sliders/sliders-no-tick-marks@2x.png) ![Uma ilustração de um controle deslizante horizontal com o marcador no meio. A parte inicial da trilha até o marcador é preenchida com uma cor de destaque azul. (escuro)](../../../images/sliders/sliders-no-tick-marks~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-no-tick-marks@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-no-tick-marks~dark@2x.png)*

![Uma ilustração de um controle deslizante horizontal com o marcador entre duas marcas de graduação no meio do controle deslizante. A parte inicial da trilha até o marcador é preenchida com uma cor de destaque azul.](../../../images/sliders/sliders-tick-marks@2x.png) ![Uma ilustração de um controle deslizante horizontal com o marcador entre duas marcas de graduação no meio do controle deslizante. A parte inicial da trilha até o marcador é preenchida com uma cor de destaque azul. (escuro)](../../../images/sliders/sliders-tick-marks~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-tick-marks@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-tick-marks~dark@2x.png)*

![Uma ilustração de um controle deslizante circular com o marcador na posição de 12 horas.](../../../images/sliders/sliders-circular@2x.png) ![Uma ilustração de um controle deslizante circular com o marcador na posição de 12 horas. (escuro)](../../../images/sliders/sliders-circular~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-circular@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-circular~dark@2x.png)*

**Considere dar feedback em tempo real à medida que o valor de um controle deslizante muda.** O feedback em tempo real mostra os resultados às pessoas instantaneamente. Por exemplo, os ícones do Dock são redimensionados dinamicamente quando você ajusta o controle deslizante Tamanho nos ajustes do Dock.

**Escolha um estilo de controle deslizante que corresponda às expectativas das pessoas.** Um controle deslizante horizontal é ideal para se mover entre um ponto inicial e um ponto final fixos. Por exemplo, um app de gráficos pode oferecer um controle deslizante horizontal para definir o nível de opacidade de um objeto entre 0 e 100 por cento. Use controles deslizantes circulares quando os valores se repetem ou continuam indefinidamente. Por exemplo, um app de gráficos pode usar um controle deslizante circular para ajustar a rotação de um objeto entre 0 e 360 graus. Um app de animação pode usar um controle deslizante circular para ajustar quantas vezes um objeto gira ao ser animado — quatro rotações completas equivalem a quatro giros, ou 1440 graus de rotação.

**Considere usar um rótulo para apresentar um controle deslizante.** Os rótulos geralmente usam [maiúsculas no estilo de frase](https://help.apple.com/applestyleguide/#/apsgb744e4a3?sub=apdca93e113f1d64) e terminam com dois-pontos. Para orientações, consulte [Rótulos](https://developer.apple.com/design/human-interface-guidelines/labels).

**Use marcas de graduação para aumentar a clareza e a precisão.** As marcas de graduação ajudam as pessoas a entender a escala das medidas e facilitam a localização de valores específicos.

![Uma captura de tela parcial do painel de ajustes de Economia de Energia no macOS, recortada para mostrar o controle deslizante que controla por quanto tempo a tela permanece ligada após a inatividade.](../../../images/sliders/sliders-labels@2x.png) ![Uma captura de tela parcial do painel de ajustes de Economia de Energia no macOS, recortada para mostrar o controle deslizante que controla por quanto tempo a tela permanece ligada após a inatividade. (escuro)](../../../images/sliders/sliders-labels~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-labels@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-labels~dark@2x.png)*

**Considere adicionar rótulos às marcas de graduação para ainda mais clareza.** Os rótulos podem ser números ou palavras, dependendo dos valores do controle deslizante. Não é necessário rotular todas as marcas de graduação, a menos que isso seja necessário para reduzir a confusão. Em muitos casos, rotular apenas os valores mínimo e máximo é suficiente. Quando os valores do controle deslizante são não lineares, como no painel de ajustes de Economia de Energia, rótulos periódicos oferecem contexto. Também é uma boa ideia fornecer uma [dica de ferramenta](https://developer.apple.com/design/human-interface-guidelines/offering-help#macOS-visionOS) que exiba o valor do marcador quando as pessoas posicionam o ponteiro sobre ele.

### visionOS

**Prefira controles deslizantes horizontais.** Em geral, é mais fácil para as pessoas fazer gestos de um lado para o outro do que para cima e para baixo.

### watchOS

Um controle deslizante é uma trilha horizontal — que aparece como um conjunto de etapas discretas ou como uma barra contínua — e representa uma faixa finita de valores. As pessoas podem tocar em botões nas laterais do controle deslizante para aumentar ou diminuir seu valor em uma quantidade predefinida.

![Uma ilustração de um controle deslizante de volume do watchOS com etapas discretas. As duas primeiras de três etapas estão preenchidas com uma cor de destaque verde, indicando o nível do volume.](../../../images/sliders/sliders-watchos-discrete@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-watchos-discrete@2x.png)*

![Uma ilustração de um controle deslizante de volume do watchOS com uma barra contínua. Dois terços da barra estão preenchidos com uma cor de destaque verde, indicando o nível do volume.](../../../images/sliders/sliders-watchos-continuous@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/sliders-watchos-continuous@2x.png)*

**Se necessário, crie glifos personalizados para comunicar o que o controle deslizante faz.** O sistema exibe sinais de mais e de menos por padrão.

## Recursos

#### Relacionados

[Seletores incrementais](https://developer.apple.com/design/human-interface-guidelines/steppers)

[Seletores](https://developer.apple.com/design/human-interface-guidelines/pickers)

#### Documentação para desenvolvedores

[Slider](https://developer.apple.com/documentation/swiftui/slider) — SwiftUI

[UISlider](https://developer.apple.com/documentation/uikit/uislider) — UIKit

[NSSlider](https://developer.apple.com/documentation/appkit/nsslider) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
