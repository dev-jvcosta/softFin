# Controles de divulgação (Disclosure controls)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/disclosure-controls
>
> Plataformas: ios,ipados,macos,visionos

*Os controles de divulgação revelam e ocultam informações e funcionalidades relacionadas a controles ou views específicos.*

![Uma representação estilizada de botões de divulgação recolhidos e expandidos. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores.](../../../images/disclosure-controls/components-disclosure-control-intro@2x.png) ![Uma representação estilizada de botões de divulgação recolhidos e expandidos. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple em seis cores. (escuro)](../../../images/disclosure-controls/components-disclosure-control-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-disclosure-control-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-disclosure-control-intro~dark@2x.png)*

## Boas práticas

**Use um controle de divulgação para ocultar detalhes até que sejam relevantes.** Coloque os controles que as pessoas têm mais probabilidade de usar no topo da hierarquia de divulgação para que estejam sempre visíveis, com as funcionalidades mais avançadas ocultas por padrão. Essa organização ajuda as pessoas a encontrar rapidamente as informações mais essenciais sem sobrecarregá-las com opções detalhadas demais.

## Triângulos de divulgação

Um triângulo de divulgação mostra e oculta informações e funcionalidades associadas a uma view ou a uma lista de itens. Por exemplo, o Keynote usa um triângulo de divulgação para mostrar opções avançadas ao exportar uma apresentação, e o Finder usa triângulos de divulgação para revelar progressivamente a hierarquia ao navegar por uma estrutura de pastas na visualização em lista.

**Recolhido**

![Uma ilustração de três pastas em uma visualização em lista do Finder. As pastas estão recolhidas, com triângulos de divulgação em suas bordas iniciais apontando para dentro para indicar que podem ser expandidas para revelar seu conteúdo.](../../../images/disclosure-controls/disclosure-triangle-before@2x.png) ![Uma ilustração de três pastas em uma visualização em lista do Finder. As pastas estão recolhidas, com triângulos de divulgação em suas bordas iniciais apontando para dentro para indicar que podem ser expandidas para revelar seu conteúdo. (escuro)](../../../images/disclosure-controls/disclosure-triangle-before~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/disclosure-triangle-before@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/disclosure-triangle-before~dark@2x.png)*

**Expandido**

![Uma ilustração de três pastas em uma visualização em lista do Finder. A primeira e a terceira pastas estão recolhidas, com triângulos de divulgação em suas bordas iniciais apontando para dentro para indicar que podem ser expandidas para revelar seu conteúdo. A segunda pasta está expandida, com seu triângulo de divulgação apontando para baixo, revelando três subpastas dentro dela.](../../../images/disclosure-controls/disclosure-triangle-after@2x.png) ![Uma ilustração de três pastas em uma visualização em lista do Finder. A primeira e a terceira pastas estão recolhidas, com triângulos de divulgação em suas bordas iniciais apontando para dentro para indicar que podem ser expandidas para revelar seu conteúdo. A segunda pasta está expandida, com seu triângulo de divulgação apontando para baixo, revelando três subpastas dentro dela. (escuro)](../../../images/disclosure-controls/disclosure-triangle-after~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/disclosure-triangle-after@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/disclosure-triangle-after~dark@2x.png)*

Um triângulo de divulgação aponta para dentro a partir da borda inicial quando seu conteúdo está oculto e para baixo quando seu conteúdo está visível. Clicar ou tocar no triângulo de divulgação alterna entre esses dois estados, e a view se expande ou se recolhe de acordo para acomodar o conteúdo.

**Forneça um rótulo descritivo ao usar um triângulo de divulgação.** Certifique-se de que os rótulos indiquem o que é revelado ou oculto, como “Opções Avançadas”.

Para orientações para desenvolvedores, consulte [NSButton.BezelStyle.disclosure](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/disclosure).

## Botões de divulgação

Um botão de divulgação mostra e oculta funcionalidades associadas a um controle específico. Por exemplo, a sheet Salvar do macOS mostra um botão de divulgação ao lado do campo de texto Salvar Como. Quando as pessoas clicam ou tocam nesse botão, a caixa de diálogo Salvar se expande para oferecer opções avançadas de navegação para selecionar um local de saída para o documento.

Um botão de divulgação aponta para baixo quando seu conteúdo está oculto e para cima quando seu conteúdo está visível. Clicar ou tocar no botão de divulgação alterna entre esses dois estados, e a view se expande ou se recolhe de acordo para acomodar o conteúdo.

**Recolhido**

![Uma captura de tela de uma caixa de diálogo Salvar recolhida no macOS. A caixa de diálogo inclui um botão de divulgação fechado que expande a caixa de diálogo para revelar opções adicionais.](../../../images/disclosure-controls/disclosure-button-before@2x.png) ![Uma captura de tela de uma caixa de diálogo Salvar recolhida no macOS. A caixa de diálogo inclui um botão de divulgação fechado que expande a caixa de diálogo para revelar opções adicionais. (escuro)](../../../images/disclosure-controls/disclosure-button-before~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/disclosure-button-before@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/disclosure-button-before~dark@2x.png)*

**Expandido**

![Uma captura de tela de uma caixa de diálogo Salvar expandida no macOS. A caixa de diálogo inclui um botão de divulgação aberto que recolhe a caixa de diálogo para ocultar algumas opções.](../../../images/disclosure-controls/disclosure-button-after@2x.png) ![Uma captura de tela de uma caixa de diálogo Salvar expandida no macOS. A caixa de diálogo inclui um botão de divulgação aberto que recolhe a caixa de diálogo para ocultar algumas opções. (escuro)](../../../images/disclosure-controls/disclosure-button-after~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/disclosure-button-after@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/disclosure-button-after~dark@2x.png)*

**Coloque um botão de divulgação perto do conteúdo que ele mostra e oculta.** Estabeleça uma relação clara entre o controle e as opções expandidas que aparecem quando uma pessoa clica ou toca em um botão.

**Use no máximo um botão de divulgação em uma mesma view.** Vários botões de divulgação aumentam a complexidade e podem causar confusão.

Para orientações para desenvolvedores, consulte [NSButton.BezelStyle.pushDisclosure](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/pushdisclosure).

## Considerações por plataforma

*Sem considerações adicionais para macOS. Não compatível com tvOS ou watchOS.*

### iOS, iPadOS, visionOS

Os controles de divulgação estão disponíveis no iOS, iPadOS e visionOS com a view [DisclosureGroup](https://developer.apple.com/documentation/swiftui/disclosuregroup) do SwiftUI.

## Recursos

#### Relacionados

[Visualizações em estrutura de tópicos](https://developer.apple.com/design/human-interface-guidelines/outline-views)

[Listas e tabelas](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

[Botões](https://developer.apple.com/design/human-interface-guidelines/buttons)

#### Documentação para desenvolvedores

[DisclosureGroup](https://developer.apple.com/documentation/swiftui/disclosuregroup) — SwiftUI

[NSButton.BezelStyle.disclosure](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/disclosure) — AppKit

[NSButton.BezelStyle.pushDisclosure](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/pushdisclosure) — AppKit

#### Vídeos

- [Stacks, Grids, and Outlines in SwiftUI](https://developer.apple.com/videos/play/wwdc2020/10031)
