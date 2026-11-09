# Pesquisa (Searching)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/searching
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*As pessoas usam diversas técnicas de pesquisa para encontrar conteúdo no dispositivo, dentro de um app e dentro de um documento ou arquivo.*

![Um esboço de uma lupa, sugerindo a busca por informações. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que reflete sutilmente o laranja do logotipo original da Apple, de seis cores.](../../images/searching/patterns-searching-intro@2x.png) ![Um esboço de uma lupa, sugerindo a busca por informações. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que reflete sutilmente o laranja do logotipo original da Apple, de seis cores. (escuro)](../../images/searching/patterns-searching-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-searching-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-searching-intro~dark@2x.png)*

Para pesquisar conteúdo dentro de um app, as pessoas geralmente esperam usar um [campo de pesquisa](https://developer.apple.com/design/human-interface-guidelines/search-fields). Quando fizer sentido, você pode personalizar a experiência de pesquisa usando o que sabe sobre como as pessoas interagem com seu app. Por exemplo, você pode exibir pesquisas recentes, sugestões de pesquisa, conclusões ou correções com base em termos que as pessoas pesquisaram anteriormente no seu app.

Em alguns casos, as pessoas apreciam poder delimitar o escopo de uma pesquisa ou filtrar os resultados. Por exemplo, elas podem querer pesquisar itens especificando atributos como data de criação, tamanho do arquivo ou tipo de arquivo. Para obter orientações, consulte [Barras de escopo e tokens](https://developer.apple.com/design/human-interface-guidelines/search-fields#Scope-bars-and-tokens). Você também pode ajudar as pessoas a encontrar conteúdo dentro de um documento ou arquivo aberto implementando maneiras de localizar conteúdo em uma janela ou página no seu app para iOS, iPadOS ou macOS.

No iOS, iPadOS e macOS, o Spotlight ajuda as pessoas a encontrar conteúdo em todos os apps do sistema e na web. Quando você indexa e fornece informações sobre o conteúdo do seu app, as pessoas podem usar o Spotlight para encontrar o conteúdo que seu app contém sem precisar abri-lo antes. Para obter orientações, consulte [Pesquisa em todo o sistema](https://developer.apple.com/design/human-interface-guidelines/searching#Systemwide-search).

## Boas práticas

**Se a pesquisa for importante, dê a ela uma posição de destaque no seu app ou visualização.** Por exemplo, no app Notas, um campo de pesquisa fica na [barra de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars) inferior, junto a outras ações importantes. Em apps que usam [barras de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars), como Fotos e Apple TV, a pesquisa é uma aba dedicada.

**Procure tornar o conteúdo do seu app pesquisável por meio de um único local.** As pessoas apreciam ter um local claramente identificado que possam usar para encontrar qualquer coisa que procurem no seu app. Para apps com seções claramente distintas, ainda pode ser útil oferecer uma pesquisa local. Por exemplo, a pesquisa funciona como um filtro na visualização atual ao pesquisar músicas e álbuns no app Música do iOS.

**Exiba claramente o escopo atual de uma pesquisa.** Use um texto de espaço reservado descritivo, uma [barra de escopo](https://developer.apple.com/design/human-interface-guidelines/search-fields#Scope-bars-and-tokens) ou um título para reforçar o que alguém está pesquisando no momento. Por exemplo, no app Mail há sempre uma referência clara à caixa de correio que alguém está pesquisando.

**Ofereça sugestões para facilitar a pesquisa.** Quando você exibe as pesquisas recentes de uma pessoa antes de ela começar a digitar ou oferece sugestões de pesquisa preditivas enquanto ela digita, pode ajudar as pessoas a pesquisar mais rápido e digitar menos. Para obter orientações para desenvolvedores, consulte [searchSuggestions(_:)](https://developer.apple.com/documentation/swiftui/view/searchsuggestions(_:)).

**Leve a privacidade em consideração antes de exibir o histórico de pesquisa.** As pessoas podem não gostar que seu histórico de pesquisa apareça onde outras pessoas possam vê-lo. Se você mostrar o histórico de pesquisa, ofereça uma maneira de as pessoas limpá-lo, se quiserem.

## Pesquisa em todo o sistema

**Torne o conteúdo do seu app pesquisável no Spotlight.** Você pode compartilhar conteúdo com o Spotlight tornando-o indexável e especificando atributos descritivos conhecidos como *metadados*. O Spotlight extrai, armazena e organiza essas informações para permitir pesquisas rápidas e abrangentes.

**Defina metadados para os tipos de arquivo personalizados que seu app manipula.** Forneça um plug-in Spotlight File Importer que descreva os tipos de metadados que seu formato de arquivo contém. Para obter orientações para desenvolvedores, consulte [CSImportExtension](https://developer.apple.com/documentation/corespotlight/csimportextension).

**Use o Spotlight para oferecer recursos avançados de pesquisa de arquivos no contexto do seu app.** Por exemplo, você pode incluir um botão que inicia instantaneamente uma pesquisa no Spotlight com base na seleção atual. Você pode então exibir uma visualização personalizada que apresente os resultados da pesquisa ou um subconjunto filtrado deles.

**Prefira usar as visualizações de abrir e salvar fornecidas pelo sistema.** As visualizações de abrir e salvar fornecidas pelo sistema geralmente incluem um campo de pesquisa integrado que as pessoas podem usar para pesquisar e filtrar todo o sistema. Para obter orientações relacionadas, consulte [Gerenciamento de arquivos](https://developer.apple.com/design/human-interface-guidelines/file-management).

**Implemente um gerador do Quick Look se seu app produz tipos de arquivo personalizados.** Um gerador do Quick Look ajuda o Spotlight e outros apps a mostrar pré-visualizações dos seus documentos. Para obter orientações para desenvolvedores, consulte [Quick Look](https://developer.apple.com/documentation/quicklook).

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Campos de pesquisa](https://developer.apple.com/design/human-interface-guidelines/search-fields)

#### Documentação para desenvolvedores

[Adicionando o conteúdo do seu app aos índices do Spotlight](https://developer.apple.com/documentation/corespotlight/adding-your-app-s-content-to-spotlight-indexes) — Core Spotlight

#### Vídeos

- [Projete experiências de pesquisa intuitivas](https://developer.apple.com/videos/play/wwdc2026/292)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 8 de junho de 2026 | Terminologia atualizada e boas práticas refinadas. |
| 9 de junho de 2025 | Boas práticas atualizadas com orientações gerais de Campos de pesquisa e orientações reorganizadas para a pesquisa em todo o sistema. |
