# Caixas (Boxes)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/boxes
>
> Plataformas: ios,ipados,macos,visionos

*Uma caixa cria um grupo visualmente distinto de informações e componentes logicamente relacionados.*

![Uma representação estilizada de um grupo de elementos de interface dentro de um retângulo arredondado. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores.](../../../images/boxes/components-box-intro@2x.png) ![Uma representação estilizada de um grupo de elementos de interface dentro de um retângulo arredondado. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores. (escuro)](../../../images/boxes/components-box-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-box-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-box-intro~dark@2x.png)*

Por padrão, uma caixa usa uma borda visível ou uma cor de fundo para separar seu conteúdo do restante da interface. Uma caixa também pode incluir um título.

## Boas práticas

**Prefira manter uma caixa relativamente pequena em comparação com a visualização que a contém.** À medida que o tamanho de uma caixa se aproxima do tamanho da janela ou da tela que a contém, ela se torna menos eficaz para comunicar a separação do conteúdo agrupado e pode sufocar outros conteúdos.

**Considere usar espaçamento e alinhamento para comunicar agrupamentos adicionais dentro de uma caixa.** A borda de uma caixa é um elemento visual distinto — adicionar caixas aninhadas para definir subgrupos pode deixar sua interface com aparência carregada e restrita.

## Conteúdo

**Forneça um título introdutório sucinto se isso ajudar a esclarecer o conteúdo da caixa.** A aparência de uma caixa ajuda as pessoas a entender que seu conteúdo está relacionado, mas pode fazer sentido fornecer mais detalhes sobre a relação. Além disso, um título pode ajudar os usuários do VoiceOver a prever o conteúdo que encontrarão dentro da caixa.

**Se precisar de um título, escreva uma frase breve que descreva o conteúdo.** Use capitalização no estilo de frase. Evite pontuação final, a menos que você use uma caixa em um painel de ajustes, onde se acrescenta dois-pontos ao título.

## Considerações por plataforma

*Nenhuma consideração adicional para o visionOS. Não compatível com tvOS nem watchOS.*

### iOS, iPadOS

Por padrão, o iOS e o iPadOS usam as [cores](https://developer.apple.com/design/human-interface-guidelines/color) de fundo secundária e terciária nas caixas.

### macOS

Por padrão, o macOS exibe o título de uma caixa acima dela.

## Recursos

#### Relacionados

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Documentação para desenvolvedores

[GroupBox](https://developer.apple.com/documentation/swiftui/groupbox) — SwiftUI

[NSBox](https://developer.apple.com/documentation/appkit/nsbox) — AppKit
