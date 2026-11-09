# Gerenciamento de arquivos (File management)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/file-management
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Alguns apps podem oferecer suporte a documentos e arquivos que as pessoas esperam gerenciar em todo o sistema.*

![Um esboço de um documento com o canto superior direito dobrado, sugerindo interação com arquivos. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple, de seis cores.](../../images/file-management/patterns-file-management-intro@2x.png) ![Um esboço de um documento com o canto superior direito dobrado, sugerindo interação com arquivos. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple, de seis cores. (escuro)](../../images/file-management/patterns-file-management-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-file-management-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-file-management-intro~dark@2x.png)*

Apps baseados em documentos, como Pages, Keynote, Fotos e Pré-visualização, ajudam as pessoas a criar, editar e salvar documentos e arquivos, muitas vezes oferecendo formas personalizadas para que as pessoas procurem o conteúdo que querem abrir no app.

As pessoas também esperam poder navegar por documentos sem antes abrir um app baseado em documentos. No Mac, por exemplo, as pessoas usam o Finder para acessar o sistema de arquivos do macOS; no iPhone, no iPad e no Apple Vision Pro, as pessoas usam o app Arquivos para gerenciar os documentos e arquivos do dispositivo. No watchOS e no tvOS, as pessoas normalmente não criam, editam nem gerenciam documentos, portanto esses sistemas não oferecem uma interface de navegação de documentos.

## Criando e abrindo arquivos

**Use menus do app e atalhos de teclado para oferecer às pessoas maneiras convenientes de criar e abrir documentos.** No iPadOS e no macOS, as pessoas esperam criar novos documentos ou abrir os existentes usando comandos de menu familiares. Quando você oferece comandos como Novo ou Abrir, o iPadOS os apresenta na interface de atalhos exibida quando as pessoas seguram a tecla Command em um teclado físico conectado, e o macOS os apresenta no menu Arquivo da barra de menus. Independentemente da disponibilidade de atalhos de teclado, inclua um botão Adicionar (+) para ajudar as pessoas a criar um novo documento. Em um app para macOS, você coloca a ação de adicionar no menu Arquivo (para orientações, consulte [Menu Arquivo](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#File-menu)).

**Se seu app exigir um navegador de arquivos personalizado, apoie a compreensão que as pessoas têm do sistema de arquivos da plataforma.** As pessoas familiarizadas com o Finder e o app Arquivos já entendem a organização básica do sistema de arquivos do dispositivo. Embora você possa querer mostrar a parte mais relevante do sistema de arquivos quando seu navegador de arquivos personalizado for aberto (por exemplo, uma pasta Documentos ou iCloud, ou o local selecionado mais recentemente), deixe que as pessoas usem seu navegador para ver o restante do sistema de arquivos, se quiserem.

## Salvando o trabalho

**Ajude as pessoas a ter confiança de que seu trabalho está sempre preservado, a menos que elas o cancelem ou excluam.** Em geral, evite exigir que as pessoas realizem uma ação explícita para salvar o trabalho. Em vez disso, faça salvamentos periódicos automaticamente enquanto elas estão editando e quando fecham um arquivo ou mudam para outro app.

**Oculte as extensões de arquivo por padrão, mas permita que as pessoas as visualizem se quiserem.** Certifique-se de refletir a escolha atual em todas as interfaces de salvar ou abrir que você exibir.

## Pré-visualizações do Quick Look

O Quick Look ajuda você a criar pré-visualizações dos arquivos que seu app manipula, para que as pessoas possam vê-los no seu app e, em alguns casos, interagir com eles. Por exemplo, você pode usar o Quick Look para permitir que as pessoas ouçam uma prévia de um arquivo de áudio, adicionem marcações à pré-visualização de uma foto ou girem e dimensionem a pré-visualização de um arquivo 3D para examiná-lo de diferentes maneiras.

**Use um visualizador do Quick Look para permitir que as pessoas pré-visualizem um arquivo mesmo quando seu app não consegue abri-lo.** Se seu app permite que as pessoas anexem ou interajam de outra forma com arquivos que ele não suporta, implementar um visualizador do Quick Look permite que elas pré-visualizem esses arquivos sem sair do seu app.

**Considere implementar um gerador do Quick Look se seu app produz tipos de arquivo personalizados.** Um gerador do Quick Look permite que outros apps, incluindo o Finder, o Arquivos e o Spotlight, exibam pré-visualizações dos seus documentos, facilitando que as pessoas os encontrem.

## Considerações por plataforma

*Nenhuma consideração adicional para tvOS, visionOS ou watchOS.*

### iOS, iPadOS

#### Document launcher

A partir do iOS 18 e do iPadOS 18, apps baseados em documentos podem usar o document launcher do sistema para oferecer às pessoas uma forma consistente e altamente gráfica de procurar, abrir e criar arquivos. O document launcher apresenta uma experiência em tela inteira que destaca elementos-chave do tema do seu app, ao mesmo tempo em que facilita a criação de novos documentos. Para orientações aos desenvolvedores, consulte [DocumentGroupLaunchScene](https://developer.apple.com/documentation/swiftui/documentgrouplaunchscene).

O document launcher é composto de três partes principais:

- Um *cartão de título* que exibe o título do app e dois botões específicos do app
- Uma imagem de fundo que aparece atrás do cartão de título e imagens adicionais, chamadas de *acessórios*, que podem aparecer ao redor dele
- Uma sheet que contém um navegador de arquivos e controles opcionais específicos do app

Você pode personalizar as três partes do document launcher. Embora o sistema exiba automaticamente o nome do seu app no cartão de título, você especifica o texto e as funções dos botões primário e secundário do cartão. Você também pode criar uma imagem de fundo personalizada, uma ou mais imagens de acessório para circundar o cartão de título e oferecer alguns controles personalizados que podem aparecer na barra de ferramentas do navegador de arquivos.

![Uma captura de tela do document launcher de um app de escrita no iPad na orientação paisagem. O document launcher exibe um fundo personalizado e duas imagens de acessório. Na parte inferior, a sheet do navegador de arquivos oferece 3 abas: Recentes, Compartilhados e Explorar.](../../images/file-management/file-management-document-launcher@2x.png) ![Uma captura de tela do document launcher de um app de escrita no iPad na orientação paisagem. O document launcher exibe um fundo personalizado e duas imagens de acessório. Na parte inferior, a sheet do navegador de arquivos oferece 3 abas: Recentes, Compartilhados e Explorar. (escuro)](../../images/file-management/file-management-document-launcher~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/file-management-document-launcher@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/file-management-document-launcher~dark@2x.png)*

**Atribua aos botões do cartão de título as funções mais importantes do seu app.** O botão primário normalmente cria um novo documento, e o botão secundário pode oferecer opções adicionais. Por exemplo, o botão primário no Numbers é Começar a escrever e o secundário é Escolher um modelo.

**Ofereça um fundo claramente distinto dos acessórios e do cartão de título.** Você pode usar uma cor sólida, um gradiente ou um padrão. Evite incluir imagens ou padrões complexos que possam distrair dos elementos em primeiro plano.

**Atenção ao posicionamento dos acessórios.** Por exemplo, você pode posicionar acessórios tanto na frente quanto atrás do cartão de título para criar a aparência de profundidade, mas precisa garantir que o nome do seu app e ambos os botões permaneçam claramente visíveis. Evite sobrecarregar o cartão de título com acessórios demais e teste a aparência geral em toda a variedade de tamanhos de tela e orientações de dispositivo que você suporta.

**Use animação com moderação.** Movimento demais na tela pode confundir ou desorientar as pessoas. Se quiser animar seus acessórios, considere criar animações suaves e repetitivas que destaquem e valorizem sutilmente o conteúdo do seu app. Por exemplo, você pode criar uma animação que faça um acessório parecer respirar ou balançar suavemente. Para orientações, consulte [Movimento](https://developer.apple.com/design/human-interface-guidelines/motion).

#### Extensão de app File Provider

Se seu app puder compartilhar seus arquivos com outros apps, você pode criar uma extensão de app File Provider que exibe uma interface personalizada para importar, exportar, abrir e mover os documentos do seu app. Para orientações aos desenvolvedores, consulte [File Provider](https://developer.apple.com/documentation/fileprovider). Uma *extensão de app* é um código que você fornece e que as pessoas podem instalar e usar para estender a funcionalidade de uma área específica do sistema; para saber mais, consulte [App extensions](https://developer.apple.com/app-extensions/).

**Quando alguém usar sua extensão File Provider para abrir ou importar documentos, exiba apenas os documentos apropriados ao contexto atual.** Por exemplo, se um app de edição de PDF carregar sua extensão, liste apenas arquivos PDF para abrir ou importar. Você também pode querer exibir informações adicionais, como datas de modificação, tamanhos e se os documentos são locais ou remotos.

**Permita que as pessoas selecionem um destino ao exportar e mover documentos.** A menos que seu app armazene documentos em um único diretório, permita que as pessoas naveguem até um destino específico na hierarquia de diretórios. Você também pode oferecer uma forma de adicionar novos subdiretórios.

**Evite incluir uma barra de ferramentas superior personalizada.** Sua extensão é carregada em uma visualização modal que já inclui uma barra de ferramentas. Oferecer uma segunda barra de ferramentas causa confusão e tira espaço do seu conteúdo.

Seu app também pode permitir que as pessoas procurem e abram arquivos de outros apps. Para orientações aos desenvolvedores, consulte [Adding a document browser to your app](https://developer.apple.com/documentation/uikit/adding-a-document-browser-to-your-app).

### macOS

#### Gerenciamento de arquivos personalizado

As pessoas têm fortes associações com a experiência familiar de navegação de arquivos do Finder e da maioria dos apps baseados em documentos. Use o navegador de arquivos padrão, a menos que tenha um motivo importante para criar um personalizado.

**Torne conveniente sua interface personalizada de abertura de arquivos.** Por exemplo, as pessoas podem apreciar uma ação “abrir recente” além da simples ação “abrir”. Você também pode permitir que as pessoas escolham critérios para filtrar a experiência de navegação de arquivos ou selecionem vários documentos para abrir de uma só vez. Em um painel de abertura do macOS, você pode personalizar o título do botão Abrir para refletir a tarefa; por exemplo, se seu app permite que as pessoas insiram o conteúdo de um arquivo no documento atual, você pode mudar o título para Inserir.

**Ofereça uma interface de salvamento para que as pessoas possam alterar o nome, o formato ou o local de um arquivo.** Por padrão, o título de um novo documento é “Sem título” até que as pessoas escolham um nome personalizado. Assim como em uma interface de abertura de documentos, uma visualização de salvamento também pode oferecer uma experiência de navegação que, por padrão, começa em um local lógico para ajudar as pessoas a colocar o documento salvo onde desejam. Se você oferecer suporte ao salvamento de conteúdo em diferentes formatos, dê também às pessoas uma forma de escolher um formato de arquivo específico.

**Considere ampliar a funcionalidade da caixa de diálogo Salvar.** Se fizer sentido no seu app, você pode adicionar à caixa de diálogo Salvar uma visualização de acessório personalizada contendo ajustes ou opções úteis. Por exemplo, a caixa de diálogo para salvar mensagens do Mail como arquivos contém uma opção para incluir anexos.

#### Extensões Finder Sync

Se seu app sincroniza arquivos locais e remotos, você pode criar uma extensão de app Finder Sync para expressar o status de sincronização de arquivos e controlá-lo no Finder. Para orientações aos desenvolvedores, consulte [Finder Sync](https://developer.apple.com/documentation/findersync).

Por exemplo, você pode usar uma extensão Finder Sync para:

- Exibir selos no Finder para indicar o status de sincronização dos itens
- Oferecer itens de menu contextual personalizados que executam tarefas de gerenciamento de arquivos e pastas, como favoritar e adicionar proteção por senha
- Oferecer botões personalizados na barra de ferramentas que executam ações globais, como iniciar uma operação de sincronização

**Ajude as pessoas a evitar a perda de trabalho se desativarem o salvamento automático.** As pessoas podem desativar o salvamento automático ao selecionar a opção “Perguntar se deseja manter as alterações ao fechar documentos” nos ajustes de Mesa e Dock. Nesse cenário, mostre que um documento tem alterações não salvas e apresente uma caixa de diálogo de salvamento quando as pessoas escolherem fechar o documento, encerrar seu app, encerrar a sessão ou reiniciar.

**Quando o salvamento automático estiver desativado, garanta que as pessoas saibam quando um documento tem alterações não salvas.** Para mostrar que há alterações não salvas, exiba um ponto no botão de fechar da janela do documento e ao lado do nome do documento no menu Janela do seu app. Quando o salvamento automático está ativado, mostrar um ponto nesses locais causa confusão, pois sugere que as pessoas precisam agir para evitar perder o trabalho. Independentemente do status do salvamento automático, você pode acrescentar “Editado” ao título do documento na barra de título, mas remova esse sufixo assim que o salvamento automático ocorrer ou quando as pessoas salvarem o trabalho explicitamente.

## Recursos

#### Relacionados

[Barras de ferramentas (Toolbars)](https://developer.apple.com/design/human-interface-guidelines/toolbars)

[Menu Arquivo](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#File-menu)

[Impressão (Printing)](https://developer.apple.com/design/human-interface-guidelines/printing)

#### Documentação para desenvolvedores

[Documents](https://developer.apple.com/documentation/swiftui/documents) — SwiftUI

#### Vídeos

- [Build document-based apps in SwiftUI](https://developer.apple.com/videos/play/wwdc2020/10039)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 10 de junho de 2024 | Adicionadas diretrizes para o uso do document launcher no iOS e no iPadOS. |
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
