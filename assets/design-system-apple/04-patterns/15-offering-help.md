# Oferecendo ajuda (Offering help)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/offering-help
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Embora as experiências mais eficazes sejam acessíveis e intuitivas, você pode oferecer ajuda contextual quando necessário.*

![Um esboço de um ponto de interrogação, sugerindo que há ajuda disponível. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores.](../../images/offering-help/patterns-offering-help-intro@2x.png) ![Um esboço de um ponto de interrogação, sugerindo que há ajuda disponível. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores. (escuro)](../../images/offering-help/patterns-offering-help-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-offering-help-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-offering-help-intro~dark@2x.png)*

## Boas práticas

**Deixe que as tarefas do seu app indiquem os tipos de ajuda de que as pessoas podem precisar.** Por exemplo, você pode ajudar as pessoas a executar tarefas simples, de uma ou duas etapas, exibindo uma view inline que descreva a tarefa de forma sucinta. Em contraste, se seu app ou jogo oferece suporte a tarefas complexas ou de várias etapas, talvez você queira fornecer um tutorial que ensine as pessoas a alcançar objetivos maiores. Em geral, relacione diretamente a ajuda que você oferece à ação ou tarefa precisa que as pessoas estão realizando agora e facilite que elas dispensem ou evitem a ajuda caso não precisem dela.

**Use linguagem e imagens relevantes e consistentes no conteúdo de ajuda.** Sempre garanta que a orientação seja adequada ao contexto atual. Por exemplo, se alguém estiver usando o Siri Remote com sua experiência de tvOS, não mostre dicas ou imagens que apresentem um controle de jogo. Além disso, certifique-se de que os termos e as descrições que você usa sejam consistentes com a plataforma. Por exemplo, não escreva textos que digam às pessoas para clicar em um botão no iPhone ou tocar em um item de menu em um Mac.

**Garanta que todo o conteúdo de ajuda seja inclusivo.** Para orientações, consulte [Inclusão](https://developer.apple.com/design/human-interface-guidelines/inclusion).

**Evite sobrecarregar seu conteúdo de ajuda explicando como funcionam componentes ou padrões padrão.** Em vez disso, descreva a ação ou tarefa específica que um elemento padrão realiza no seu app ou jogo. Se sua experiência apresentar um controle exclusivo ou esperar que as pessoas usem um dispositivo de entrada de maneira fora do padrão — como segurar o Siri Remote girado em 90 graus —, oriente as pessoas rapidamente, preferindo animações ou gráficos para educar em vez de uma descrição longa.

## Criando dicas

Uma dica é uma view pequena e transitória que descreve brevemente como usar um recurso do seu app. As dicas são uma ótima maneira de ensinar as pessoas sobre recursos novos ou menos óbvios do seu app, ou de ajudá-las a descobrir maneiras mais rápidas de realizar uma tarefa. Para orientações a desenvolvedores, consulte [TipKit](https://developer.apple.com/documentation/TipKit).

**Use o tipo de dica mais apropriado para a interface do seu app.** Exiba uma dica em popover quando quiser preservar o fluxo do conteúdo, ou uma dica inline quando quiser garantir que as informações ao redor fiquem visíveis. Você pode usar uma dica inline em estilo de anotação ao apontar para um elemento específico da interface, ou uma dica em estilo de sugestão quando ela não estiver relacionada a uma parte específica da interface.

![Uma ilustração de uma dica em estilo popover no iPhone. A dica aparece sobre o conteúdo próximo e aponta para um recurso representado por um ícone de estrela azul. O conteúdo sob a dica fica oculto.](../../images/offering-help/offering-help-tip-popover@2x.png) ![Uma ilustração de uma dica em estilo popover no iPhone. A dica aparece sobre o conteúdo próximo e aponta para um recurso representado por um ícone de estrela azul. O conteúdo sob a dica fica oculto. (escuro)](../../images/offering-help/offering-help-tip-popover~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-popover@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-popover~dark@2x.png)*

![Uma ilustração de uma dica em estilo de anotação no iPhone. A dica está incorporada ao conteúdo ao redor e aponta para um recurso representado por um ícone de estrela azul. O texto deslocado aparece acima e abaixo da dica.](../../images/offering-help/offering-help-tip-annotation@2x.png) ![Uma ilustração de uma dica em estilo de anotação no iPhone. A dica está incorporada ao conteúdo ao redor e aponta para um recurso representado por um ícone de estrela azul. O texto deslocado aparece acima e abaixo da dica. (escuro)](../../images/offering-help/offering-help-tip-annotation~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-annotation@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-annotation~dark@2x.png)*

![Uma ilustração de uma dica em estilo de sugestão no iPhone. A dica está incorporada ao conteúdo ao redor. O texto deslocado aparece acima e abaixo da dica.](../../images/offering-help/offering-help-tip-hint@2x.png) ![Uma ilustração de uma dica em estilo de sugestão no iPhone. A dica está incorporada ao conteúdo ao redor. O texto deslocado aparece acima e abaixo da dica. (escuro)](../../images/offering-help/offering-help-tip-hint~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-hint@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-hint~dark@2x.png)*

**Use dicas para recursos simples.** As dicas funcionam melhor em recursos fáceis de descrever e que as pessoas possam concluir com alguns passos simples. Se um recurso exigir mais de três ações, provavelmente é complicado demais para uma dica.

**Faça dicas curtas, acionáveis e envolventes.** O objetivo de uma dica é incentivar as pessoas a experimentar novos recursos. Use linguagem direta e orientada à ação para descrever o que o recurso faz e explicar como usá-lo. Mantenha suas dicas em uma ou duas frases e evite incluir conteúdo promocional ou relacionado a um recurso ou fluxo de usuário diferente. Conteúdo promocional é qualquer coisa que anuncie, venda ou não esteja alinhada ao contexto atual do que a pessoa está fazendo.

**Defina regras para ajudar a garantir que suas dicas alcancem o público pretendido.** Nem todos se beneficiam de todas as dicas. Por exemplo, pessoas que já usaram um recurso não gostarão de ver uma dica que o descreva. Use regras de elegibilidade baseadas em parâmetros ou em eventos para controlar quando uma dica aparece e só exiba uma dica se alguém puder se beneficiar do uso dela. Quando seu app tiver mais de uma dica, defina a frequência de exibição para que as dicas apareçam em um ritmo razoável — por exemplo, uma vez a cada 24 horas.

**Se houver uma imagem ou um símbolo que as pessoas associam ao recurso, considere incluí-lo na dica e prefira a variante preenchida.** Por exemplo, uma dica com uma estrela pode ajudar as pessoas a entender que ela está relacionada a favoritos.

![Uma ilustração de uma dica em estilo de sugestão com um símbolo de estrela azul sem preenchimento no lado inicial.](../../images/offering-help/offering-help-tip-symbol-usage-unfilled-incorrect@2x.png) ![Uma ilustração de uma dica em estilo de sugestão com um símbolo de estrela azul sem preenchimento no lado inicial. (escuro)](../../images/offering-help/offering-help-tip-symbol-usage-unfilled-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-symbol-usage-unfilled-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-symbol-usage-unfilled-incorrect~dark@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../images/offering-help/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de uma dica em estilo de sugestão com um símbolo de estrela azul preenchida no lado inicial.](../../images/offering-help/offering-help-tip-symbol-usage-filled-correct@2x.png) ![Uma ilustração de uma dica em estilo de sugestão com um símbolo de estrela azul preenchida no lado inicial. (escuro)](../../images/offering-help/offering-help-tip-symbol-usage-filled-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-symbol-usage-filled-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-symbol-usage-filled-correct~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar uso correto.](../../images/offering-help/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

Se o recurso for representado por uma imagem à qual a dica se conecta diretamente, evite repetir a mesma imagem tanto na dica quanto na interface.

![Uma ilustração de uma dica em estilo de anotação apontando para um recurso representado por um ícone de estrela azul. A dica inclui um símbolo de estrela azul semelhante no lado inicial.](../../images/offering-help/offering-help-tip-symbol-usage-incorrect@2x.png) ![Uma ilustração de uma dica em estilo de anotação apontando para um recurso representado por um ícone de estrela azul. A dica inclui um símbolo de estrela azul semelhante no lado inicial. (escuro)](../../images/offering-help/offering-help-tip-symbol-usage-incorrect~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-symbol-usage-incorrect@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-symbol-usage-incorrect~dark@2x.png)*

![Um X em um círculo para indicar uso incorreto.](../../images/offering-help/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma ilustração de uma dica em estilo de anotação apontando para um recurso representado por um ícone de estrela azul. A dica é somente texto e omite um símbolo acompanhante.](../../images/offering-help/offering-help-tip-symbol-usage-correct@2x.png) ![Uma ilustração de uma dica em estilo de anotação apontando para um recurso representado por um ícone de estrela azul. A dica é somente texto e omite um símbolo acompanhante. (escuro)](../../images/offering-help/offering-help-tip-symbol-usage-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-symbol-usage-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-tip-symbol-usage-correct~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar uso correto.](../../images/offering-help/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Use botões para direcionar as pessoas a informações ou opções.** Se seu recurso tiver ajustes que as pessoas podem personalizar, ou se você quiser redirecioná-las a uma área em que possam saber mais sobre um recurso, considere adicionar um botão. Os botões podem levar as pessoas diretamente aos ajustes em que elas fazem alterações. Ou, se houver mais informações que as pessoas possam achar úteis, adicione um botão para levá-las a recursos adicionais, como um fluxo de configuração.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, tvOS ou watchOS.*

### macOS, visionOS

Um *tooltip* (chamado de *help tag* na documentação para usuários) exibe uma view pequena e transitória que descreve brevemente como usar um componente da interface. Em apps executados em um Mac — incluindo apps de iPhone e iPad —, os tooltips podem aparecer quando a pessoa mantém o ponteiro sobre um elemento; em apps de visionOS, um tooltip pode aparecer quando a pessoa olha para um elemento ou mantém o ponteiro sobre ele. Para orientações a desenvolvedores, consulte [help(_:)](https://developer.apple.com/documentation/swiftui/view/help(_:)-6oiyb).

![Uma ilustração de uma barra de ferramentas no Finder do macOS com o ponteiro sobre o botão Voltar. Um tooltip com o título See folders you viewed previously aparece abaixo do ponteiro.](../../images/offering-help/offering-help-macos-tooltip-help-tag@2x.png) ![Uma ilustração de uma barra de ferramentas no Finder do macOS com o ponteiro sobre o botão Voltar. Um tooltip com o título See folders you viewed previously aparece abaixo do ponteiro. (escuro)](../../images/offering-help/offering-help-macos-tooltip-help-tag~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-macos-tooltip-help-tag@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/offering-help-macos-tooltip-help-tag~dark@2x.png)*

**Descreva apenas o controle em que as pessoas demonstram interesse.** Quando as pessoas querem saber como usar um controle específico, elas não querem aprender a usar controles próximos nem a realizar uma tarefa maior.

**Explique a ação ou tarefa que o controle inicia.** Muitas vezes funciona bem começar a descrição com um verbo — por exemplo, “Restaurar os ajustes padrão” ou “Adicionar ou remover um idioma da lista”.

**Em geral, evite repetir o nome do controle no tooltip.** Repetir o nome ocupa espaço no tooltip e raramente acrescenta valor à descrição.

**Seja breve.** Na medida do possível, limite o conteúdo do tooltip a no máximo 60 a 75 caracteres (observe que a localização costuma alterar o comprimento do texto). Para tornar uma descrição breve e direta, considere usar um fragmento de frase e omitir artigos. Se você precisar de muito texto para descrever um controle, considere simplificar o design da interface.

**Use a capitalização de frase.** A capitalização de frase tende a parecer mais casual e acessível. Se você escrever frases completas, omita a pontuação final, a menos que seja necessária para manter a consistência com o estilo do seu app.

**Considere oferecer tooltips sensíveis ao contexto.** Por exemplo, você pode fornecer textos diferentes para os diferentes estados de um controle.

## Recursos

#### Relacionados

[Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding)

[Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

[Redação](https://developer.apple.com/design/human-interface-guidelines/writing)

[Menu Ajuda](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Help-menu)

#### Documentação para desenvolvedores

[TipKit](https://developer.apple.com/documentation/tipkit)

[NSHelpManager](https://developer.apple.com/documentation/appkit/nshelpmanager) — AppKit

#### Vídeos

- [Torne os recursos descobríveis com o TipKit](https://developer.apple.com/videos/play/wwdc2023/10229)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 5 de dezembro de 2023 | Incluído o visionOS nas orientações para criação de tooltips. |
| 12 de setembro de 2023 | Adicionadas orientações para criação de dicas. |
