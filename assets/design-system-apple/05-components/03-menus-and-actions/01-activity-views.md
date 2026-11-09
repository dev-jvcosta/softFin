# Visualizações de atividade (Activity views)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/activity-views
>
> Plataformas: ios,ipados,visionos

*Uma visualização de atividade — frequentemente chamada de *folha de compartilhamento* (share sheet) — apresenta uma variedade de tarefas que as pessoas podem executar no contexto atual.*

![Uma representação estilizada de uma visualização de atividade ou folha de compartilhamento. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores.](../../../images/activity-views/components-activity-view-intro@2x.png) ![Uma representação estilizada de uma visualização de atividade ou folha de compartilhamento. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/activity-views/components-activity-view-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-activity-view-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-activity-view-intro~dark@2x.png)*

As visualizações de atividade apresentam atividades de compartilhamento, como enviar mensagens, e ações como Copiar e Imprimir, além de acesso rápido a apps usados com frequência. As pessoas costumam exibir uma folha de compartilhamento ao escolher um botão de Ação enquanto visualizam uma página ou um documento, ou depois de selecionarem um item. Uma visualização de atividade pode aparecer como uma folha ou um popover, dependendo do dispositivo e da orientação.

Você pode oferecer atividades específicas do app que podem aparecer em uma folha de compartilhamento quando as pessoas a abrem dentro do seu app ou jogo. Por exemplo, o app Fotos oferece ações específicas, como Copiar Foto, Adicionar ao Álbum e Ajustar Localização. Por padrão, o sistema lista as ações específicas do app antes das ações — como Adicionar a Arquivos ou AirPlay — que estão disponíveis em vários apps ou em todo o sistema. As pessoas podem editar a lista de ações para garantir que ela exiba as que mais usam e para adicionar novas.

Você também pode criar extensões de app para oferecer atividades personalizadas de compartilhamento e de ação que as pessoas podem usar em outros apps. (Uma *extensão de app* é um código que você fornece e que as pessoas podem instalar e usar fora do seu app.) Por exemplo, você pode criar uma atividade de compartilhamento personalizada que as pessoas podem instalar para ajudá-las a compartilhar uma página da web com um serviço de rede social específico. Embora o macOS não ofereça uma visualização de atividade, você pode criar extensões de app de compartilhamento e de ação que as pessoas podem usar em um Mac. Para orientações, consulte [Extensões de compartilhamento e de ação](https://developer.apple.com/design/human-interface-guidelines/activity-views#Share-and-action-extensions).

## Boas práticas

**Evite criar versões duplicadas de ações comuns que já estão disponíveis na visualização de atividade.** Por exemplo, oferecer uma ação Imprimir duplicada é desnecessário e confuso, porque as pessoas não saberiam como distinguir a sua ação da fornecida pelo sistema. Se você precisar oferecer uma funcionalidade específica do app que seja semelhante a uma ação existente, dê a ela um título personalizado. Por exemplo, se você permite que as pessoas usem uma formatação personalizada para imprimir uma transação bancária, use um título que ajude as pessoas a entender o que a sua atividade de impressão faz, como “Imprimir Transação”.

**Considere usar um símbolo para representar a sua atividade personalizada.** Os [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) oferecem um conjunto abrangente de símbolos configuráveis que você pode usar para comunicar itens e conceitos em uma visualização de atividade. Se precisar criar um ícone de interface personalizado, centralize-o em uma área de cerca de 70x70 pixels. Para orientações, consulte [Ícones](https://developer.apple.com/design/human-interface-guidelines/icons).

**Escreva um título conciso e descritivo para cada ação personalizada que você oferecer.** Se um título for longo demais, o sistema o quebra em linhas e pode truncá-lo. Prefira um único verbo ou uma frase verbal breve que comunique claramente o que a ação faz. Evite incluir o nome da sua empresa ou do seu produto no título de uma ação. Já a folha de compartilhamento exibe o título de uma atividade de compartilhamento — normalmente o nome de uma empresa — abaixo do ícone que a representa.

**Certifique-se de que as atividades sejam apropriadas para o contexto atual.** Embora você não possa reordenar as tarefas fornecidas pelo sistema em uma visualização de atividade, pode excluir as tarefas que não se aplicam ao seu app. Por exemplo, se não faz sentido imprimir de dentro do seu app, você pode excluir a atividade Imprimir. Você também pode identificar quais tarefas personalizadas mostrar em cada momento.

**Use o botão Compartilhar para exibir uma visualização de atividade.** As pessoas estão acostumadas a acessar as atividades fornecidas pelo sistema quando escolhem o botão Compartilhar. Evite confundir as pessoas oferecendo uma forma alternativa de fazer a mesma coisa.

![Uma captura de tela do app Notas no iPhone, com um documento do Notas aberto intitulado Nature Walks. A barra de ferramentas superior inclui um botão Compartilhar agrupado com um botão Mais em sua extremidade final.](../../../images/activity-views/activity-views-share-button@2x.png) ![Uma captura de tela do app Notas no iPhone, com um documento do Notas aberto intitulado Nature Walks. A barra de ferramentas superior inclui um botão Compartilhar agrupado com um botão Mais em sua extremidade final. (escuro)](../../../images/activity-views/activity-views-share-button~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-views-share-button@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-views-share-button~dark@2x.png)*

![Uma captura de tela do app Notas no iPhone, com um documento do Notas aberto intitulado Nature Walks. Uma visualização de atividade está aberta a partir do botão Compartilhar, incluindo controles para compartilhar o documento com contatos ou outros apps e para copiar, exportar ou adicionar marcações ao documento.](../../../images/activity-views/activity-views-share-sheet@2x.png) ![Uma captura de tela do app Notas no iPhone, com um documento do Notas aberto intitulado Nature Walks. Uma visualização de atividade está aberta a partir do botão Compartilhar, incluindo controles para compartilhar o documento com contatos ou outros apps e para copiar, exportar ou adicionar marcações ao documento. (escuro)](../../../images/activity-views/activity-views-share-sheet~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-views-share-sheet@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/activity-views-share-sheet~dark@2x.png)*

## Extensões de compartilhamento e de ação

As extensões de compartilhamento dão às pessoas uma forma conveniente de compartilhar informações do contexto atual com apps, contas de redes sociais e outros serviços. As extensões de ação permitem que as pessoas iniciem tarefas específicas do conteúdo — como adicionar um marcador, copiar um link, editar uma imagem inline ou exibir o texto selecionado em outro idioma — sem sair do contexto atual.

O sistema apresenta as extensões de compartilhamento e de ação de maneiras diferentes, dependendo da plataforma:

- No iOS e no iPadOS, as extensões de compartilhamento e de ação são exibidas na folha de compartilhamento que aparece quando as pessoas escolhem um botão de Ação.
- No macOS, as pessoas acessam as extensões de compartilhamento clicando em um botão Compartilhar na barra de ferramentas ou escolhendo Compartilhar em um menu de contexto. As pessoas podem acessar uma extensão de ação posicionando o ponteiro sobre certos tipos de conteúdo incorporado — como uma imagem que adicionam a uma janela de composição do Mail —, clicando em um botão da barra de ferramentas ou escolhendo uma ação rápida em uma janela do Finder.

**Se necessário, crie uma interface personalizada que seja familiar para as pessoas.** Para uma extensão de compartilhamento, prefira a visualização de composição fornecida pelo sistema, porque ela oferece uma experiência de compartilhamento consistente que as pessoas já conhecem. Para uma extensão de ação, inclua o nome do seu app. Se precisar apresentar uma interface, inclua elementos da interface do seu app para ajudar as pessoas a entender que a sua extensão e o seu app estão relacionados.

**Simplifique e limite a interação.** As pessoas gostam de extensões que permitem executar uma tarefa em poucos passos. Por exemplo, uma extensão de compartilhamento pode publicar imediatamente uma imagem em uma conta de rede social com um único toque ou clique.

**Evite colocar uma visualização modal acima da sua extensão.** Por padrão, o sistema exibe uma extensão dentro de uma visualização modal. Embora possa ser necessário exibir um alerta acima de uma extensão, evite exibir visualizações modais adicionais.

**Se necessário, forneça uma imagem que comunique a finalidade da sua extensão.** Uma extensão de compartilhamento usa automaticamente o ícone do seu app, ajudando a dar às pessoas confiança de que o seu app forneceu a extensão. Para uma extensão de ação, prefira usar um [símbolo](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) ou criar um [ícone](https://developer.apple.com/design/human-interface-guidelines/icons) de interface que identifique claramente a tarefa.

**Use o seu app principal para indicar o progresso de uma operação demorada.** Uma visualização de atividade é dispensada imediatamente depois que as pessoas concluem a tarefa na sua extensão de compartilhamento ou de ação. Se uma tarefa for demorada, continue-a em segundo plano e dê às pessoas uma forma de verificar o status no seu app principal. Embora você possa usar uma notificação para avisar as pessoas sobre um problema, não as notifique apenas porque a tarefa foi concluída.

## Considerações por plataforma

*Sem considerações adicionais para iOS, iPadOS ou visionOS. Não compatível com macOS, tvOS ou watchOS.*

## Recursos

#### Relacionados

[Folhas (Sheets)](https://developer.apple.com/design/human-interface-guidelines/sheets)

[Popovers](https://developer.apple.com/design/human-interface-guidelines/popovers)

#### Documentação para desenvolvedores

[UIActivityViewController](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller) — UIKit

[UIActivity](https://developer.apple.com/documentation/uikit/uiactivity) — UIKit

[App Extension Support](https://developer.apple.com/documentation/foundation/app-extension-support) — Foundation

#### Vídeos

- [Design for Collaboration with Messages](https://developer.apple.com/videos/play/wwdc2022/10015)
