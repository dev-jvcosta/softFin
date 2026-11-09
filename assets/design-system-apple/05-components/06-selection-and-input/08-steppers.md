# Seletores incrementais (Steppers)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/steppers
>
> Plataformas: ios,ipados,macos,visionos

*Um seletor incremental é um controle de dois segmentos que as pessoas usam para aumentar ou diminuir um valor em incrementos.*

![Uma representação estilizada de um controle de seletor incremental. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple.](../../../images/steppers/components-stepper-intro@2x.png) ![Uma representação estilizada de um controle de seletor incremental. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original de seis cores da Apple. (escuro)](../../../images/steppers/components-stepper-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-stepper-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-stepper-intro~dark@2x.png)*

Um seletor incremental fica ao lado de um campo que exibe seu valor atual, pois o próprio seletor incremental não exibe um valor.

## Boas práticas

**Deixe óbvio o valor que um seletor incremental afeta.** Um seletor incremental não exibe nenhum valor por si só, então garanta que as pessoas saibam qual valor estão alterando quando o usam.

**Considere combinar um seletor incremental com um campo de texto quando for provável que haja grandes mudanças de valor.** Os seletores incrementais funcionam bem sozinhos para fazer pequenas alterações que exigem alguns toques ou cliques. Em contrapartida, as pessoas apreciam a opção de usar um campo para inserir valores específicos, especialmente quando os valores que usam podem variar muito. Em uma tela de impressão, por exemplo, pode ajudar ter um seletor incremental e um campo de texto para definir o número de cópias.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS ou visionOS. Sem suporte no watchOS ou tvOS.*

### macOS

**Para grandes faixas de valores, considere oferecer suporte ao clique com Shift para alterar o valor rapidamente.** Se o seu app se beneficia de mudanças maiores no valor de um seletor incremental, pode ser útil permitir que as pessoas cliquem no seletor com a tecla Shift pressionada para alterar o valor em mais do que o incremento padrão (por exemplo, 10 vezes o padrão).

## Recursos

#### Relacionados

[Seletores](https://developer.apple.com/design/human-interface-guidelines/pickers)

[Campos de texto](https://developer.apple.com/design/human-interface-guidelines/text-fields)

#### Documentação para desenvolvedores

[UIStepper](https://developer.apple.com/documentation/uikit/uistepper) — UIKit

[NSStepper](https://developer.apple.com/documentation/appkit/nsstepper) — AppKit
