# Colaboração e compartilhamento (Collaboration and sharing)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing
>
> Plataformas: ios,ipados,macos,visionos,watchos

*Ótimas experiências de colaboração e compartilhamento são simples e responsivas, permitindo que as pessoas interajam com o conteúdo enquanto se comunicam de forma eficaz com outras.*

![Um esboço de uma pessoa com um sinal de verificação sobreposto, sugerindo colaboração eficaz. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple em seis cores.](../../images/collaboration-and-sharing/patterns-collaboration-and-sharing-intro@2x.png) ![Um esboço de uma pessoa com um sinal de verificação sobreposto, sugerindo colaboração eficaz. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple em seis cores. (escuro)](../../images/collaboration-and-sharing/patterns-collaboration-and-sharing-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-collaboration-and-sharing-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-collaboration-and-sharing-intro~dark@2x.png)*

As interfaces do sistema e o app Mensagens podem ajudar você a oferecer maneiras consistentes e convenientes de as pessoas colaborarem e compartilharem. Por exemplo, as pessoas podem compartilhar conteúdo ou iniciar uma colaboração soltando um documento em uma conversa do Mensagens ou selecionando um destino na familiar share sheet.

Depois que uma colaboração começa, as pessoas podem usar o botão Colaboração no seu app para se comunicar com outras pessoas, executar ações personalizadas e gerenciar detalhes. Além disso, as pessoas podem receber notificações do Mensagens quando colaboradores as mencionam, fazem alterações, entram ou saem.

Você pode aproveitar a integração com o Mensagens e as interfaces de compartilhamento fornecidas pelo sistema, quer implemente colaboração e compartilhamento por meio do CloudKit, do iCloud Drive ou de uma solução personalizada. Para oferecer esses recursos ao usar uma infraestrutura de colaboração personalizada, certifique-se de que seu app também ofereça suporte a universal links (para orientações para desenvolvedores, consulte [Supporting universal links in your app](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app)).

Com o SharePlay, as pessoas também podem participar juntas das atividades do seu app em tempo real, a partir dos próprios dispositivos. Para orientações, consulte [SharePlay](https://developer.apple.com/design/human-interface-guidelines/shareplay).

## Boas práticas

**Posicione o botão Compartilhar em um local conveniente, como uma barra de ferramentas, para facilitar que as pessoas comecem a compartilhar ou colaborar.** No iOS 16, a share sheet fornecida pelo sistema inclui maneiras de escolher um método de compartilhamento de arquivos e definir permissões para uma nova colaboração; o iPadOS 16 e o macOS 13 introduzem aparência e funcionalidade semelhantes no popover de compartilhamento. No seu app SwiftUI, você também pode habilitar o compartilhamento apresentando um link de compartilhamento que abre a share sheet fornecida pelo sistema quando as pessoas o escolhem; para orientações para desenvolvedores, consulte [ShareLink](https://developer.apple.com/documentation/swiftui/sharelink).

![Uma ilustração de um documento do Notas no iPhone. A barra de ferramentas do documento apresenta em destaque o botão Compartilhar ao lado do botão Mais.](../../images/collaboration-and-sharing/collaboration-share-button@2x.png) ![Uma ilustração de um documento do Notas no iPhone. A barra de ferramentas do documento apresenta em destaque o botão Compartilhar ao lado do botão Mais. (escuro)](../../images/collaboration-and-sharing/collaboration-share-button~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/collaboration-share-button@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/collaboration-share-button~dark@2x.png)*

**Se necessário, personalize a share sheet ou o popover de compartilhamento para oferecer os tipos de compartilhamento de arquivos que seu app suporta.** Se você usa o CloudKit, pode adicionar suporte ao envio de uma cópia de um arquivo passando tanto o arquivo quanto o seu objeto de colaboração para a share sheet. Como a share sheet tem suporte integrado a vários itens, ela detecta automaticamente o arquivo e disponibiliza a funcionalidade “enviar cópia”. Com o iCloud Drive, seu objeto de colaboração oferece suporte à funcionalidade “enviar cópia” por padrão. Para colaboração personalizada, você pode oferecer suporte à funcionalidade “enviar cópia” na share sheet incluindo um arquivo — ou uma representação em texto simples dele — no seu objeto de colaboração.

**Escreva frases concisas que resumam as permissões de compartilhamento que você suporta.** Por exemplo, você pode escrever frases como “Somente pessoas convidadas podem editar” ou “Todos podem fazer alterações”. O sistema usa o resumo de permissões em um botão que revela um conjunto de opções de compartilhamento que as pessoas usam para definir a colaboração.

![Uma ilustração de um documento do Notas com a share sheet aberta no iPhone, com opções de colaboração definidas para indicar que somente pessoas convidadas podem editar o documento selecionado.](../../images/collaboration-and-sharing/collaboration-sharing-permission-invited@2x.png) ![Uma ilustração de um documento do Notas com a share sheet aberta no iPhone, com opções de colaboração definidas para indicar que somente pessoas convidadas podem editar o documento selecionado. (escuro)](../../images/collaboration-and-sharing/collaboration-sharing-permission-invited~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/collaboration-sharing-permission-invited@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/collaboration-sharing-permission-invited~dark@2x.png)*

![Uma ilustração de um documento do Notas com a share sheet aberta no iPhone, com opções de colaboração definidas para indicar que todos podem fazer alterações no documento selecionado.](../../images/collaboration-and-sharing/collaboration-sharing-permission-everyone@2x.png) ![Uma ilustração de um documento do Notas com a share sheet aberta no iPhone, com opções de colaboração definidas para indicar que todos podem fazer alterações no documento selecionado. (escuro)](../../images/collaboration-and-sharing/collaboration-sharing-permission-everyone~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/collaboration-sharing-permission-everyone@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/collaboration-sharing-permission-everyone~dark@2x.png)*

**Ofereça um conjunto de opções de compartilhamento simples que agilizem a configuração da colaboração.** Você pode personalizar a view que aparece quando as pessoas escolhem o botão de resumo de permissões para oferecer opções que reflitam a funcionalidade de colaboração do seu app. Por exemplo, você pode oferecer opções que permitam especificar quem pode acessar o conteúdo e se pode editá-lo ou apenas lê-lo, e se os colaboradores podem adicionar novos participantes. Mantenha o número de opções personalizadas no mínimo e agrupe-as de maneiras que ajudem as pessoas a entendê-las rapidamente.

**Exiba o botão Colaboração em destaque assim que a colaboração começar.** O botão Colaboração fornecido pelo sistema lembra as pessoas de que o conteúdo é compartilhado e identifica quem o está compartilhando. Como o botão Colaboração normalmente aparece depois que as pessoas interagem com a share sheet ou o popover de compartilhamento, funciona bem posicioná-lo ao lado do botão Compartilhar.

![Uma ilustração de um documento do Notas aberto no iPhone. A barra de ferramentas do documento apresenta em destaque o botão Colaboração ao lado do botão Compartilhar.](../../images/collaboration-and-sharing/collaboration-status-active-collaboration-button@2x.png) ![Uma ilustração de um documento do Notas aberto no iPhone. A barra de ferramentas do documento apresenta em destaque o botão Colaboração ao lado do botão Compartilhar. (escuro)](../../images/collaboration-and-sharing/collaboration-status-active-collaboration-button~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/collaboration-status-active-collaboration-button@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/collaboration-status-active-collaboration-button~dark@2x.png)*

**Ofereça ações personalizadas no popover de colaboração somente se necessário.** Escolher o botão Colaboração no seu app revela um popover composto por três seções. A seção superior lista os colaboradores e oferece botões de comunicação que podem abrir o Mensagens ou o FaceTime, a seção intermediária contém seus itens personalizados e a seção inferior exibe um botão que as pessoas usam para gerenciar o arquivo compartilhado. Você não quer sobrecarregar as pessoas com informações demais, por isso é fundamental oferecer apenas os itens mais essenciais de que elas precisam enquanto usam seu app para colaborar. Por exemplo, o Notas resume as atualizações mais recentes e oferece botões que permitem obter mais informações sobre as atualizações ou ver mais atividades.

![Uma ilustração de um documento do Notas no iPhone. Um menu está aberto a partir do botão Colaboração na barra de ferramentas do documento, com botões para exibir as atualizações e atividades mais recentes.](../../images/collaboration-and-sharing/collaboration-custom-popover-notes@2x.png) ![Uma ilustração de um documento do Notas no iPhone. Um menu está aberto a partir do botão Colaboração na barra de ferramentas do documento, com botões para exibir as atualizações e atividades mais recentes. (escuro)](../../images/collaboration-and-sharing/collaboration-custom-popover-notes~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/collaboration-custom-popover-notes@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/collaboration-custom-popover-notes~dark@2x.png)*

**Se fizer sentido no seu app, personalize o título do botão de gerenciamento de colaboração da view modal.** As pessoas escolhem esse botão — intitulado “Gerenciar arquivo compartilhado” por padrão — para revelar a view de gerenciamento de colaboração, em que podem alterar configurações e adicionar ou remover colaboradores. Se você usa o compartilhamento do CloudKit, o sistema fornece uma view de gerenciamento para você; caso contrário, você cria a sua própria.

**Considere publicar notificações de eventos de colaboração no Mensagens.** Escolha o tipo de evento ocorrido — como uma alteração no conteúdo ou na participação da colaboração, ou a menção de um participante — e inclua um universal link que as pessoas possam usar para abrir a view relevante no seu app. Para orientações para desenvolvedores, consulte [SWHighlightEvent](https://developer.apple.com/documentation/sharedwithyou/swhighlightevent).

## Considerações por plataforma

*Sem considerações adicionais para iOS, iPadOS ou macOS. Não disponível no tvOS.*

### visionOS

Por padrão, o sistema oferece suporte ao compartilhamento de tela para um app em execução no Shared Space, transmitindo a janela atual para outros colaboradores. Se uma pessoa fizer o app passar para um Full Space enquanto o compartilhamento está em andamento, o sistema pausa a transmissão para as outras pessoas até que o app retorne ao Shared Space. Para orientações, consulte [Immersive experiences](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences).

### watchOS

No seu app SwiftUI em execução no watchOS, use [ShareLink](https://developer.apple.com/documentation/swiftui/sharelink) para apresentar a share sheet fornecida pelo sistema.

## Recursos

#### Relacionados

[Activity views](https://developer.apple.com/design/human-interface-guidelines/activity-views)

#### Documentação para desenvolvedores

[Shared with You](https://developer.apple.com/documentation/sharedwithyou)

[ShareLink](https://developer.apple.com/documentation/swiftui/sharelink) — SwiftUI

#### Vídeos

- [Design for Collaboration with Messages](https://developer.apple.com/videos/play/wwdc2022/10015)
- [Enhance collaboration experiences with Messages](https://developer.apple.com/videos/play/wwdc2022/10095)
- [Integrate your custom collaboration app with Messages](https://developer.apple.com/videos/play/wwdc2022/10093)

## Histórico de alterações

| Data | Alterações |
|---|---|
| December 5, 2023 | Adicionadas ilustrações mostrando o posicionamento do botão e vários tipos de permissões de colaboração. |
| June 21, 2023 | Atualizado para incluir orientações para o visionOS. |
| September 14, 2022 | Nova página. |
