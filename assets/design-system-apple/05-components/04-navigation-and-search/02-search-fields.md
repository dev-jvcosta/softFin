# Campos de pesquisa (Search fields)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/search-fields
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um campo de pesquisa permite que as pessoas pesquisem termos específicos que digitam em uma coleção de conteúdo.*

![Uma representação estilizada de um campo de pesquisa contendo texto de espaço reservado e um ícone de ditado. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/search-fields/components-search-field-intro@2x.png) ![Uma representação estilizada de um campo de pesquisa contendo texto de espaço reservado e um ícone de ditado. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/search-fields/components-search-field-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-search-field-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-search-field-intro~dark@2x.png)*

Um campo de pesquisa é um campo de texto editável que exibe um ícone de Pesquisa, um botão Limpar e um texto de espaço reservado, onde as pessoas podem inserir o que estão procurando. Os campos de pesquisa podem usar uma [barra de escopo](https://developer.apple.com/design/human-interface-guidelines/search-fields#Scope-bars-and-tokens), bem como [tokens](https://developer.apple.com/design/human-interface-guidelines/search-fields#Scope-bars-and-tokens), para ajudar a filtrar e refinar o escopo da pesquisa. Em cada plataforma, há padrões diferentes para acessar a pesquisa, de acordo com os objetivos e o design do seu app.

Para orientações para desenvolvedores, consulte [Adding a search interface to your app](https://developer.apple.com/documentation/swiftui/adding-a-search-interface-to-your-app); para orientações relacionadas à pesquisa em todo o sistema, consulte [Pesquisa](https://developer.apple.com/design/human-interface-guidelines/searching).

## Boas práticas

**Use texto de espaço reservado para ajudar as pessoas a saber o que podem pesquisar.** O texto de espaço reservado pode ser útil quando você precisa reforçar o escopo da pesquisa ou informar as pessoas sobre o tipo de conteúdo ao qual a pesquisa tem acesso.

**Se possível, inicie a pesquisa imediatamente quando a pessoa digitar.** Pesquisar enquanto alguém digita faz a experiência de pesquisa parecer mais responsiva, pois fornece resultados continuamente refinados à medida que o texto se torna mais específico.

**Considere mostrar termos de pesquisa sugeridos.** Por exemplo, você pode exibir pesquisas recentes antes de a pesquisa começar ou sugestões de pesquisa preditivas enquanto a pessoa digita. Isso pode ajudar alguém a pesquisar mais rápido, mesmo quando a pesquisa em si não começa imediatamente.

**Simplifique os resultados da pesquisa.** Forneça primeiro os resultados de pesquisa mais relevantes para minimizar a necessidade de rolar a tela para encontrar o que se procura. Além de priorizar os resultados mais prováveis, considere categorizá-los para ajudar as pessoas a encontrar o que desejam.

**Considere permitir que as pessoas filtrem os resultados da pesquisa.** Por exemplo, você pode incluir uma barra de escopo na área de conteúdo dos resultados da pesquisa para ajudar as pessoas a filtrar os resultados de forma rápida e fácil.

## Barras de escopo e tokens

Barras de escopo e tokens são componentes que você pode usar para permitir que alguém restrinja os parâmetros de uma pesquisa, antes ou depois de realizá-la.

- Uma *barra de escopo* é um controle para filtrar e ajustar o escopo de uma pesquisa.
- Um *token* é uma representação visual de um termo de pesquisa que alguém pode selecionar e editar, e que atua como filtro para quaisquer termos adicionais na pesquisa.

![Um diagrama do app Mail no iPhone com o campo de pesquisa aberto acima do teclado e a palavra Design inserida no campo. Indicações apontam uma barra de escopo na parte superior da tela para alternar entre pesquisar em todas as caixas de correio e na caixa de correio atual, e uma lista de tokens em uma área de Sugestões abaixo da barra, que representam diferentes filtros para a pesquisa.](../../../images/search-fields/search-fields-scope-control-tokens@2x.png) ![Um diagrama do app Mail no iPhone com o campo de pesquisa aberto acima do teclado e a palavra Design inserida no campo. Indicações apontam uma barra de escopo na parte superior da tela para alternar entre pesquisar em todas as caixas de correio e na caixa de correio atual, e uma lista de tokens em uma área de Sugestões abaixo da barra, que representam diferentes filtros para a pesquisa. (escuro)](../../../images/search-fields/search-fields-scope-control-tokens~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-scope-control-tokens@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-scope-control-tokens~dark@2x.png)*

**Use uma barra de escopo para filtrar entre categorias de pesquisa claramente definidas.** Uma barra de escopo pode ajudar alguém a passar de um escopo mais amplo para um mais restrito. Por exemplo, no Mail do iPhone, uma barra de escopo ajuda as pessoas a passar da pesquisa em toda a caixa de correio para apenas a caixa de correio específica que estão vendo. Para orientações para desenvolvedores, consulte [Scoping a search operation](https://developer.apple.com/documentation/swiftui/scoping-a-search-operation).

**Use um escopo mais amplo como padrão e deixe as pessoas refiná-lo conforme necessário.** Um escopo mais amplo fornece contexto para o conjunto completo de resultados disponíveis, o que ajuda a orientar as pessoas em uma direção útil quando decidem restringir o escopo.

**Use tokens para filtrar por termos ou itens de pesquisa comuns.** Quando você define um token, o termo que ele representa ganha um tratamento visual que o encapsula, indicando que as pessoas podem selecioná-lo e editá-lo como um único item. Os tokens podem esclarecer um termo de pesquisa, como filtrar por um contato específico no Mail, ou direcionar uma pesquisa para um conjunto específico de atributos, como filtrar por fotos no Mensagens. Para o componente relacionado no macOS, consulte [Campos de token](https://developer.apple.com/design/human-interface-guidelines/token-fields).

**Considere combinar tokens com sugestões de pesquisa.** As pessoas podem não saber quais tokens estão disponíveis, então combiná-los com sugestões de pesquisa pode ajudá-las a aprender a usá-los.

## Considerações por plataforma

*Nenhuma consideração adicional para visionOS*.

### iOS

Há três locais principais onde você pode posicionar o ponto de entrada da pesquisa:

- Como uma aba em uma barra de abas
- Em uma barra de ferramentas na parte inferior ou superior da tela
- Diretamente em linha com o conteúdo

O local em que a pesquisa faz mais sentido depende do layout, do conteúdo e da navegação do seu app.

#### Pesquisa como aba

Você pode colocar a pesquisa como uma aba em uma barra de abas, o que mantém a pesquisa visível e sempre disponível enquanto as pessoas alternam entre as seções do seu app. Há dois estilos de abas de pesquisa:

- **Aba padrão.** Este estilo exibe a aba de pesquisa de forma uniforme com o restante da barra de abas. Tocar na aba de pesquisa leva as pessoas a uma página inicial de pesquisa com um campo de pesquisa na parte superior.
- **Aparência de botão.** Este estilo exibe a aba de pesquisa como um botão separado e permite que as pessoas comecem a pesquisar imediatamente. Tocar na aba de pesquisa coloca o foco no campo de pesquisa e exibe o teclado.

![Uma ilustração de uma barra de abas na parte inferior da tela de um iPhone. Uma aba de pesquisa aparece como parte da barra de abas.](../../../images/search-fields/search-fields-search-as-tab-standard@2x.png) ![Uma ilustração de uma barra de abas na parte inferior da tela de um iPhone. Uma aba de pesquisa aparece como parte da barra de abas. (escuro)](../../../images/search-fields/search-fields-search-as-tab-standard~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-search-as-tab-standard@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-search-as-tab-standard~dark@2x.png)*

![Uma ilustração de uma barra de abas na parte inferior da tela de um iPhone. Uma aba de pesquisa aparece na borda final como um botão separado.](../../../images/search-fields/search-fields-search-as-tab-prominent@2x.png) ![Uma ilustração de uma barra de abas na parte inferior da tela de um iPhone. Uma aba de pesquisa aparece na borda final como um botão separado. (escuro)](../../../images/search-fields/search-fields-search-as-tab-prominent~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-search-as-tab-prominent@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-search-as-tab-prominent~dark@2x.png)*

**Escolha o estilo de aba padrão para oferecer sugestões, promover a descoberta e incentivar a exploração.** Esse estilo de aba de pesquisa cria uma página inicial dedicada à pesquisa, oferecendo a oportunidade de revelar qualquer conteúdo ou sugestão que possa ser útil antes de alguém tocar no campo para iniciar a pesquisa. Essa abordagem é ótima para um app com uma variedade de conteúdo rico que as pessoas podem querer explorar. Por exemplo, o Apple TV usa esse estilo de aba de pesquisa para apresentar seus vários gêneros e categorias, ajudando as pessoas a se situarem no que está disponível antes de pesquisar.

**Escolha a aparência de botão para ajudar as pessoas a encontrar rapidamente o que precisam.** Quando alguém interage com esse estilo de aba de pesquisa, o teclado aparece imediatamente com o campo de pesquisa acima dele, pronto para iniciar a pesquisa. Essa abordagem oferece uma experiência mais transitória, que leva as pessoas diretamente de volta à aba anterior depois que saem da pesquisa, e é ideal quando você quer que a pesquisa seja resolvida de forma rápida e fluida.

#### Pesquisa em uma barra de ferramentas

Como alternativa à pesquisa em uma barra de abas, você também pode colocá-la em uma barra de ferramentas, na parte inferior ou superior da tela.

- Você pode incluir a pesquisa em uma barra de ferramentas inferior, seja como um campo expandido ou como um botão de barra de ferramentas, dependendo do espaço disponível. Quando alguém toca nele, ele se anima e se transforma em um campo de pesquisa acima do teclado para que a pessoa possa começar a digitar.
- Você pode incluir a pesquisa em uma barra de ferramentas superior, também chamada de barra de navegação, onde ela aparece como um botão de barra de ferramentas. Quando alguém toca nele, ele se anima e se transforma em um campo de pesquisa que aparece acima do teclado ou na parte superior, caso não haja espaço na parte inferior.

![Uma ilustração da tela de um iPhone com a pesquisa em uma barra de ferramentas inferior. O campo de pesquisa está posicionado em um grupo isolado entre um botão Filtrar na borda inicial e um botão Escrever na borda final.](../../../images/search-fields/search-fields-ios-toolbar-with-items@2x.png) ![Uma ilustração da tela de um iPhone com a pesquisa em uma barra de ferramentas inferior. O campo de pesquisa está posicionado em um grupo isolado entre um botão Filtrar na borda inicial e um botão Escrever na borda final. (escuro)](../../../images/search-fields/search-fields-ios-toolbar-with-items~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-ios-toolbar-with-items@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-ios-toolbar-with-items~dark@2x.png)*

![Uma ilustração da tela de um iPhone com a pesquisa em uma barra de ferramentas superior. Um botão Voltar aparece na borda inicial e um botão Adicionar aparece na borda final. Um grupo de botões com Pesquisar e Mais aparece ao lado do botão Adicionar.](../../../images/search-fields/search-fields-ios-navigation-bar-item@2x.png) ![Uma ilustração da tela de um iPhone com a pesquisa em uma barra de ferramentas superior. Um botão Voltar aparece na borda inicial e um botão Adicionar aparece na borda final. Um grupo de botões com Pesquisar e Mais aparece ao lado do botão Adicionar. (escuro)](../../../images/search-fields/search-fields-ios-navigation-bar-item~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-ios-navigation-bar-item@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-ios-navigation-bar-item~dark@2x.png)*

**Coloque a pesquisa na parte inferior se houver espaço.** Você pode adicionar um campo de pesquisa a uma barra de ferramentas existente ou como uma nova barra de ferramentas em que a pesquisa é o único item. A pesquisa na parte inferior é útil em qualquer situação em que a pesquisa seja uma prioridade, pois mantém a experiência de pesquisa fácil de alcançar. Exemplos de apps com pesquisa na parte inferior em vários layouts de barra de ferramentas incluem Ajustes, onde ela é o único item, e Mail e Notas, onde ela se encaixa ao lado de outros controles importantes.

**Coloque a pesquisa na parte superior quando for importante ceder espaço ao conteúdo na parte inferior da tela ou quando não houver barra de ferramentas inferior.** Use a pesquisa na parte superior nos casos em que cobrir o conteúdo possa interferir em uma função principal do app. O app Carteira, por exemplo, inclui ingressos de eventos em uma pilha na parte inferior da tela para acesso fácil e visualização rápida.

#### Pesquisa como campo em linha

Em alguns casos, você pode querer que seu app inclua um campo de pesquisa em linha com o conteúdo.

**Coloque a pesquisa como um campo em linha quando sua posição ao lado do conteúdo pesquisado reforçar essa relação.** Quando você precisa filtrar ou pesquisar dentro de uma única visualização, pode ser útil que a pesquisa apareça diretamente ao lado do conteúdo para ilustrar que ela se aplica a esse conteúdo, e não globalmente. Esse padrão é útil se seu app tiver mais de um campo de pesquisa e se a localização tiver um papel crítico no escopo da pesquisa. Por exemplo, embora a pesquisa principal do app Música seja uma aba, as pessoas podem navegar até a biblioteca e usar um campo de pesquisa em linha para filtrar suas músicas e álbuns.

**Quando estiver na parte superior, posicione um campo de pesquisa em linha acima da lista que ele pesquisa e considere fixá-lo na barra de ferramentas superior durante a rolagem.** Isso ajuda a mantê-lo distinto da pesquisa que aparece em outros locais.

### iPadOS, macOS

O posicionamento e o comportamento do campo de pesquisa no iPadOS e no macOS são semelhantes. Se seu app estiver disponível no iPad e no Mac, procure manter a experiência de pesquisa o mais consistente possível entre as duas plataformas.

![Uma ilustração da tela de um iPad com um campo de pesquisa na borda final da barra de ferramentas superior. O campo de pesquisa tem a palavra Design inserida e três sugestões de pesquisa aparecem em uma lista abaixo do campo.](../../../images/search-fields/search-fields-toolbar-search-ipad@2x.png) ![Uma ilustração da tela de um iPad com um campo de pesquisa na borda final da barra de ferramentas superior. O campo de pesquisa tem a palavra Design inserida e três sugestões de pesquisa aparecem em uma lista abaixo do campo. (escuro)](../../../images/search-fields/search-fields-toolbar-search-ipad~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-toolbar-search-ipad@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-toolbar-search-ipad~dark@2x.png)*

![Uma ilustração da tela de um Mac com um campo de pesquisa na borda final da barra de ferramentas. O campo de pesquisa tem a palavra Design inserida e três sugestões de pesquisa aparecem em uma lista abaixo do campo.](../../../images/search-fields/search-fields-toolbar-search-mac@2x.png) ![Uma ilustração da tela de um Mac com um campo de pesquisa na borda final da barra de ferramentas. O campo de pesquisa tem a palavra Design inserida e três sugestões de pesquisa aparecem em uma lista abaixo do campo. (escuro)](../../../images/search-fields/search-fields-toolbar-search-mac~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-toolbar-search-mac@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-toolbar-search-mac~dark@2x.png)*

**Coloque um campo de pesquisa no lado final da barra de ferramentas para muitos usos comuns.** Muitos apps se beneficiam do padrão familiar de pesquisa na barra de ferramentas, particularmente apps com visualizações divididas que precisam pesquisar em várias colunas de informações, como Mail, Notas e Gravador de Voz. Esse posicionamento faz ótimo uso do espaço, pois permite que as pessoas naveguem pelos resultados mantendo a seleção visível na visualização de detalhes. Além disso, considere colocar a pesquisa na barra de ferramentas se os resultados aparecerem na visualização de detalhes do seu app, como no Freeform, onde a pesquisa na barra de ferramentas filtra os quadros na visualização de detalhes abaixo.

**Inclua a pesquisa na parte superior da barra lateral ao filtrar conteúdo ou navegação ali.** Apps como Ajustes aproveitam a pesquisa para filtrar rapidamente a barra lateral e expor seções que podem estar em vários níveis de profundidade, oferecendo uma forma simples de as pessoas pesquisarem, visualizarem e navegarem até a seção ou o ajuste que procuram. Essa abordagem é útil se seu app tiver uma visualização de detalhes rica e você precisar criar uma separação distinta entre a barra lateral que está filtrando e a visualização adjacente.

![Uma ilustração da tela de um iPad com um campo de pesquisa na parte superior da barra lateral, na borda inicial da tela.](../../../images/search-fields/search-fields-ipad-search-in-sidebar@2x.png) ![Uma ilustração da tela de um iPad com um campo de pesquisa na parte superior da barra lateral, na borda inicial da tela. (escuro)](../../../images/search-fields/search-fields-ipad-search-in-sidebar~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-ipad-search-in-sidebar@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-ipad-search-in-sidebar~dark@2x.png)*

**Inclua a pesquisa como um item na barra lateral ou na barra de abas quando quiser uma área dedicada à descoberta.** Se sua pesquisa for combinada com sugestões ricas, categorias ou conteúdo que precisa de mais espaço, pode ser útil ter uma área dedicada para ela. Isso é particularmente útil para apps em que a navegação e a pesquisa andam juntas, como Música e TV, onde oferece um local unificado para destacar conteúdo sugerido, categorias e pesquisas recentes. Uma área dedicada também garante que a pesquisa esteja sempre disponível enquanto as pessoas navegam e alternam entre as seções do seu app.

![Uma ilustração da tela de um iPad com uma barra de abas na borda superior. O lado final da barra de abas inclui uma aba Pesquisar com uma cor de plano de fundo distinta para diferenciá-la das demais áreas de abas.](../../../images/search-fields/search-fields-ipad-search-in-tab-bar@2x.png) ![Uma ilustração da tela de um iPad com uma barra de abas na borda superior. O lado final da barra de abas inclui uma aba Pesquisar com uma cor de plano de fundo distinta para diferenciá-la das demais áreas de abas. (escuro)](../../../images/search-fields/search-fields-ipad-search-in-tab-bar~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-ipad-search-in-tab-bar@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-ipad-search-in-tab-bar~dark@2x.png)*

**Em um campo de pesquisa em uma área dedicada, considere colocar o foco imediatamente no campo quando a pessoa navegar até a área, para ajudá-la a pesquisar mais rápido e localizar o campo com mais facilidade.** Uma exceção é no iPad quando apenas um teclado virtual está disponível; nesse caso, é melhor deixar o campo sem foco para evitar que o teclado cubra a visualização de forma inesperada.

**Considere o redimensionamento da janela ao posicionar o campo de pesquisa.** No iPad, o campo de pesquisa é redimensionado de forma fluida com a janela do app, como acontece no Mac. No entanto, em visualizações compactas no iPad, é importante garantir que a pesquisa esteja disponível onde for mais útil contextualmente. Por exemplo, Notas e Mail colocam a pesquisa acima da coluna da lista de conteúdo quando são redimensionados para uma visualização compacta.

### tvOS

Uma tela de pesquisa é uma tela de teclado especializada que ajuda as pessoas a inserir o texto da pesquisa, exibindo os resultados da pesquisa abaixo do teclado em uma visualização totalmente personalizável. Para orientações para desenvolvedores, consulte [UISearchController](https://developer.apple.com/documentation/uikit/uisearchcontroller).

![Uma ilustração de uma tela de pesquisa no tvOS. A tela inclui um campo com uma área de entrada de teclado na parte superior, uma barra de escopo e uma grade dos principais resultados na parte inferior.](../../../images/search-fields/search-fields-tvos-search@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/search-fields-tvos-search@2x.png)*

**Ofereça sugestões para facilitar a pesquisa.** As pessoas geralmente não querem digitar muito no tvOS. Para melhorar a experiência de pesquisa, ofereça sugestões de pesquisa populares e específicas do contexto, incluindo pesquisas recentes quando disponíveis. Para orientações para desenvolvedores, consulte [Using suggested searches with a search controller](https://developer.apple.com/documentation/uikit/using-suggested-searches-with-a-search-controller).

### watchOS

Quando alguém toca no campo de pesquisa, o sistema exibe um controle de entrada de texto que cobre toda a tela. O app só volta ao campo de pesquisa depois que a pessoa toca no botão Cancelar ou Pesquisar.

## Recursos

#### Relacionados

[Pesquisa](https://developer.apple.com/design/human-interface-guidelines/searching)

[Campos de token](https://developer.apple.com/design/human-interface-guidelines/token-fields)

#### Documentação para desenvolvedores

[Adding a search interface to your app](https://developer.apple.com/documentation/swiftui/adding-a-search-interface-to-your-app) — SwiftUI

[searchable(text:placement:prompt:)](https://developer.apple.com/documentation/swiftui/view/searchable(text:placement:prompt:)) — SwiftUI

[UISearchBar](https://developer.apple.com/documentation/uikit/uisearchbar) — UIKit

[UISearchTextField](https://developer.apple.com/documentation/uikit/uisearchtextfield) — UIKit

[NSSearchField](https://developer.apple.com/documentation/appkit/nssearchfield) — AppKit

#### Vídeos

- [Crie experiências de pesquisa intuitivas](https://developer.apple.com/videos/play/wwdc2026/292)
- [Conheça o novo sistema de design](https://developer.apple.com/videos/play/wwdc2025/356)
- [Design descobrível](https://developer.apple.com/videos/play/wwdc2021/10126)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 8 de junho de 2026 | Atualizada a terminologia e refinadas as orientações para pesquisa como aba no iOS. |
| 9 de junho de 2025 | Atualizadas as orientações para o posicionamento da pesquisa no iOS, consolidadas as considerações por plataforma de iPadOS e macOS e adicionadas orientações para tokens. |
| 12 de setembro de 2023 | Combinadas as orientações comuns a todas as plataformas. |
| 5 de junho de 2023 | Adicionadas orientações para o uso de campos de pesquisa no watchOS. |
