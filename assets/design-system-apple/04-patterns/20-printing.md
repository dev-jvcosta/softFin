# Impressão (Printing)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/printing
>
> Plataformas: ios,ipados,macos,visionos

*Um app de iOS, iPadOS, macOS ou visionOS pode integrar a funcionalidade de impressão fornecida pelo sistema quando fizer sentido, apresentando opções personalizadas específicas da impressora e do documento, se necessário.*

![Um esboço de uma impressora, sugerindo impressão. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple em seis cores.](../../images/printing/patterns-printing-intro@2x.png) ![Um esboço de uma impressora, sugerindo impressão. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple em seis cores. (escuro)](../../images/printing/patterns-printing-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-printing-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-printing-intro~dark@2x.png)*

## Boas práticas

**Torne a impressão fácil de descobrir.** Ajude as pessoas a encontrar a ação de imprimir colocando-a em locais padrão do sistema. Por exemplo, inclua um item Imprimir no menu Arquivo do seu app macOS; no seu app de iOS ou iPadOS, adicione um botão na barra de ferramentas que abra uma [action sheet](https://developer.apple.com/design/human-interface-guidelines/action-sheets). Se o seu app macOS tem uma barra de ferramentas, talvez você queira colocar um botão Imprimir nela também, mas considere torná-lo um botão opcional que as pessoas possam adicionar ao personalizar a barra de ferramentas.

**Apresente uma opção de impressão somente quando ela for possível.** Se não houver nada na tela para imprimir ou nenhuma impressora estiver disponível, esmaeça o item Imprimir no menu Arquivo de um app macOS e remova a ação Imprimir da action sheet em um app de iOS ou iPadOS. Se você implementar um botão de impressão personalizado, esmaeça-o ou oculte-o quando a impressão não for possível.

**Apresente opções de impressão relevantes.** Se fizer sentido oferecer opções como selecionar um intervalo de páginas, solicitar várias cópias ou imprimir em ambos os lados — e a impressora oferecer suporte a essas opções — use a view fornecida pelo sistema para apresentá-las.

## Considerações por plataforma

*Sem considerações adicionais para iOS, iPadOS ou visionOS. Não compatível com tvOS ou watchOS.*

### macOS

**Se o seu app macOS oferece opções de impressão específicas do app que o sistema não oferece, considere criar uma categoria personalizada para o painel de impressão.** Por padrão, o painel de impressão oferece várias categorias de ajustes, como Layout, Manuseio de Papel e Mídia e Qualidade. Dê à sua categoria personalizada um nome exclusivo, como o nome do seu app, e inclua opções que ajudem as pessoas a ter uma ótima experiência de impressão no seu app. Por exemplo, o Keynote oferece opções específicas de apresentação, como a capacidade de imprimir notas do apresentador, fundos de slides e slides ignorados.

**Se o seu app oferece suporte a ajustes de página específicos do documento, considere apresentar uma caixa de diálogo de configuração de página.** Uma *caixa de diálogo de configuração de página* inclui ajustes raramente alterados de tamanho de página, orientação e escala que se aplicam à impressão de um documento específico. Se isso fizer sentido no seu app, evite implementar recursos que o sistema já oferece. Por exemplo, você não precisa incluir opções como alterar a orientação da página ou imprimir em ordem inversa, porque o sistema implementa essas opções.

**Garanta que as interdependências entre as opções sejam claras.** Por exemplo, se a impressão frente e verso estiver disponível, uma opção para imprimir em transparências fica indisponível.

**Separe os recursos avançados dos recursos usados com frequência.** Considere usar um controle de divulgação para ocultar as opções avançadas até que sejam necessárias. Rotule as opções avançadas como *Opções Avançadas*.

**Considere deixar as pessoas visualizarem o efeito de um ajuste.** Por exemplo, você pode atualizar uma imagem em miniatura para mostrar o efeito de alterar um controle de tom.

**Considere armazenar os ajustes modificados junto com o documento.** No mínimo, faz sentido armazenar os ajustes de impressão até o documento ser fechado, caso as pessoas queiram imprimi-lo novamente.

## Recursos

#### Relacionados

[Gerenciamento de arquivos](https://developer.apple.com/design/human-interface-guidelines/file-management)

[Menu Arquivo](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#File-menu)

#### Documentação para desenvolvedores

[UIPrintInteractionController](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller) — UIKit

[NSDocument](https://developer.apple.com/documentation/appkit/nsdocument) — AppKit
