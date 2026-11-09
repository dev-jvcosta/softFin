# Medidores (Gauges)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/gauges
>
> Plataformas: ios,ipados,macos,visionos,watchos

*Um medidor exibe um valor numérico específico dentro de um intervalo de valores.*

![Uma representação estilizada de um medidor numérico circular acima de um medidor linear de porcentagem. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores.](../../../images/gauges/components-gauges-intro@2x.png) ![Uma representação estilizada de um medidor numérico circular acima de um medidor linear de porcentagem. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/gauges/components-gauges-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-gauges-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-gauges-intro~dark@2x.png)*

Além de indicar o valor atual em um intervalo, um medidor pode fornecer mais contexto sobre o próprio intervalo. Por exemplo, um medidor de temperatura pode usar texto para identificar as temperaturas mais alta e mais baixa do intervalo e exibir um espectro de cores que reforça visualmente a variação dos valores.

## Anatomia

Um medidor usa um caminho circular ou linear para representar um intervalo de valores, mapeando o valor atual para um ponto específico do caminho. Um medidor padrão exibe um indicador que mostra a posição do valor atual; um medidor que usa o estilo de capacidade exibe um preenchimento que termina na posição do valor no caminho.

Os medidores circulares e lineares, tanto no estilo padrão quanto no de capacidade, também estão disponíveis em uma variante visualmente semelhante às complicações do watchOS. Essa variante — chamada accessory — funciona bem em widgets da tela bloqueada do iOS e em qualquer lugar em que você queira ecoar a aparência das complicações.

> **Observação:** Além dos medidores, o macOS também oferece suporte a indicadores de nível, alguns dos quais têm estilos visuais semelhantes aos dos medidores. Para orientações, consulte [macOS](https://developer.apple.com/design/human-interface-guidelines/gauges#macOS).

## Boas práticas

**Escreva rótulos concisos que descrevam o valor atual e as duas extremidades do intervalo.** Embora nem todo estilo de medidor exiba todos os rótulos, o VoiceOver lê os rótulos visíveis para ajudar as pessoas a entender o medidor sem ver a tela.

**Considere preencher o caminho com um gradiente para ajudar a comunicar a finalidade do medidor.** Por exemplo, um medidor de temperatura pode usar cores que vão do vermelho ao azul para representar temperaturas que vão do quente ao frio.

## Considerações por plataforma

*Sem considerações adicionais para iOS, iPadOS, visionOS ou watchOS. Não compatível com tvOS.*

### macOS

Além de oferecer suporte a medidores, o macOS também define um indicador de nível que exibe um valor numérico específico dentro de um intervalo. Você pode configurar um indicador de nível para transmitir capacidade, avaliação ou — raramente — relevância.

O estilo de capacidade pode representar valores discretos ou contínuos.

![Uma imagem de um indicador de capacidade contínuo que usa o preenchimento verde padrão para indicar uma quantidade de cerca de dois terços da capacidade total.](../../../images/gauges/indicators-continuous@2x.png) ![Uma imagem de um indicador de capacidade contínuo que usa o preenchimento verde padrão para indicar uma quantidade de cerca de dois terços da capacidade total. (escuro)](../../../images/gauges/indicators-continuous~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/indicators-continuous@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/indicators-continuous~dark@2x.png)*

**Contínuo.** Uma trilha horizontal translúcida que é preenchida por uma barra sólida para indicar o valor atual.

![Uma imagem de um indicador de capacidade discreto que usa o preenchimento verde padrão para indicar uma quantidade de três quartos da capacidade total.](../../../images/gauges/indicators-discrete@2x.png) ![Uma imagem de um indicador de capacidade discreto que usa o preenchimento verde padrão para indicar uma quantidade de três quartos da capacidade total. (escuro)](../../../images/gauges/indicators-discrete~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/indicators-discrete@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/indicators-discrete~dark@2x.png)*

**Discreto.** Uma fileira horizontal de segmentos retangulares separados e de tamanhos iguais. O número de segmentos corresponde à capacidade total, e os segmentos são preenchidos completamente — nunca parcialmente — com cor para indicar o valor atual.

**Considere usar o estilo contínuo para intervalos grandes.** Um intervalo de valores grande pode deixar os segmentos de um indicador de capacidade discreto pequenos demais para serem úteis.

**Considere mudar a cor de preenchimento para informar as pessoas sobre partes significativas do intervalo.** Por padrão, a cor de preenchimento dos dois estilos de indicador de capacidade é verde. Se fizer sentido no seu app, você pode mudar a cor de preenchimento quando o valor atual atingir certos níveis, como muito baixo, muito alto ou logo depois do meio. Você pode mudar a cor de preenchimento do indicador inteiro ou usar o estado em camadas para mostrar uma sequência de várias cores em um único indicador, como mostrado abaixo.

![Uma imagem de um indicador de capacidade contínuo em que um oitavo mais à esquerda é vermelho, os próximos três oitavos são amarelos, o próximo quarto é verde e o último quarto não está preenchido.](../../../images/gauges/indicators-continuous-tiered@2x.png) ![Uma imagem de um indicador de capacidade contínuo em que um oitavo mais à esquerda é vermelho, os próximos três oitavos são amarelos, o próximo quarto é verde e o último quarto não está preenchido. (escuro)](../../../images/gauges/indicators-continuous-tiered~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/indicators-continuous-tiered@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/indicators-continuous-tiered~dark@2x.png)*

Para orientações sobre o uso do estilo de avaliação para ajudar as pessoas a classificar algo, consulte [Indicadores de avaliação](https://developer.apple.com/design/human-interface-guidelines/rating-indicators).

Embora raramente usado, o estilo de relevância pode comunicar relevância por meio de uma barra horizontal sombreada. Por exemplo, um indicador de relevância pode aparecer em uma lista de resultados de busca, ajudando as pessoas a visualizar a relevância dos resultados ao ordenar ou comparar vários itens.

## Recursos

#### Relacionados

[Avaliações e resenhas](https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews)

#### Documentação para desenvolvedores

[Gauge](https://developer.apple.com/documentation/swiftui/gauge) — SwiftUI

[NSLevelIndicator](https://developer.apple.com/documentation/appkit/nslevelindicator) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 23 de setembro de 2022 | Nova página. |
