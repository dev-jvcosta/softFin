# Menus de edição (Edit menus)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/edit-menus
>
> Plataformas: ios,ipados,macos,visionos

*Um menu de edição permite que as pessoas façam alterações no conteúdo selecionado na visualização atual, além de oferecer comandos relacionados, como Copiar, Selecionar, Traduzir e Buscar.*

![Uma representação estilizada de um menu de edição saindo de um texto selecionado. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores.](../../../images/edit-menus/components-edit-menu-intro@2x.png) ![Uma representação estilizada de um menu de edição saindo de um texto selecionado. A imagem tem um tom vermelho que remete sutilmente ao vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/edit-menus/components-edit-menu-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-edit-menu-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-edit-menu-intro~dark@2x.png)*

Além de texto, os comandos de um menu de edição podem se aplicar a muitos tipos de conteúdo selecionável, como imagens, arquivos e objetos como cartões de contato, gráficos ou locais em mapas. No iOS, no iPadOS e no visionOS, o sistema detecta automaticamente o tipo de dado de um item selecionado, o que pode resultar na adição de uma ação relacionada ao menu de edição. Por exemplo, selecionar um endereço pode adicionar ao menu de edição um item como *Obter rotas*.

Os menus de edição podem ter aparência e comportamento ligeiramente diferentes em cada plataforma.

- No iOS, o menu de edição exibe os comandos em uma lista horizontal compacta que aparece quando as pessoas tocam e mantêm pressionado ou tocam duas vezes para selecionar conteúdo em uma visualização. As pessoas podem tocar em uma divisa na extremidade final para expandi-lo em um [menu de contexto](https://developer.apple.com/design/human-interface-guidelines/context-menus).
- No iPadOS, o menu de edição tem aparência diferente dependendo de como as pessoas o exibem. Quando elas usam interações por toque para exibir o menu, ele usa a aparência horizontal compacta. Já quando usam um teclado ou um dispositivo apontador para exibi-lo, o menu de edição abre diretamente em um menu de contexto.
- No macOS, as pessoas podem acessar os comandos de edição em um menu de contexto que podem exibir durante uma tarefa de edição, além de pelo [menu Editar](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Edit-menu) do app na barra de menus.
- No visionOS, as pessoas usam o [gesto padrão de pinçar e manter](https://developer.apple.com/design/human-interface-guidelines/gestures#Standard-gestures) para abrir o menu de edição como uma barra horizontal, ou podem abri-lo em um menu de contexto.

A edição de conteúdo é rara nas experiências para tvOS e watchOS, então o sistema não oferece um menu de edição nessas plataformas.

## Boas práticas

**Prefira o menu de edição fornecido pelo sistema.** As pessoas conhecem o conteúdo e o comportamento do componente fornecido pelo sistema, então criar um menu personalizado que apresente os mesmos comandos é redundante e provavelmente confuso. Para ver uma lista dos comandos padrão do menu de edição, consulte [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions).

**Deixe as pessoas exibirem um menu de edição usando as interações definidas pelo sistema que elas já conhecem.** Por exemplo, as pessoas esperam tocar e manter pressionado em uma tela sensível ao toque, pinçar e manter no visionOS ou usar um clique secundário com um trackpad ou teclado conectado. Embora as interações para exibir um menu de edição possam variar conforme a plataforma, as pessoas não gostam de ter que aprender uma interação personalizada para executar uma tarefa padrão.

**Ofereça comandos relevantes no contexto atual, removendo ou esmaecendo os comandos que não se aplicam.** Por exemplo, se nada estiver selecionado, evite mostrar opções que exijam uma seleção, como Copiar ou Recortar. Da mesma forma, evite mostrar uma opção Colar quando não houver nada para colar.

**Liste os comandos personalizados perto dos comandos relevantes fornecidos pelo sistema.** Por exemplo, se você oferece comandos de formatação personalizados, pode ajudar a manter a ordem que as pessoas esperam listando-os depois dos comandos fornecidos pelo sistema na seção de formatação. Evite sobrecarregar as pessoas com comandos personalizados em excesso.

**Quando fizer sentido, deixe as pessoas selecionarem e copiarem texto não editável.** As pessoas gostam de poder colar conteúdo estático — como a legenda de uma imagem ou um status de rede social — em uma mensagem, nota ou busca na web. Em geral, deixe as pessoas copiarem o texto do conteúdo, mas não os rótulos de controles.

**Ofereça suporte a desfazer e refazer sempre que possível.** Como todos os menus, um menu de edição não exige confirmação antes de executar suas ações, então as pessoas podem usar facilmente desfazer e refazer para recuperar um estado anterior. Para orientações, consulte [Desfazer e refazer](https://developer.apple.com/design/human-interface-guidelines/undo-and-redo).

**Em geral, evite implementar outros controles que executem as mesmas funções dos itens do menu de edição.** As pessoas costumam esperar escolher comandos de edição conhecidos em um menu de edição ou usar atalhos de teclado padrão. Oferecer controles redundantes pode sobrecarregar a interface, deixando menos espaço para apresentar ações que as pessoas talvez ainda não conheçam.

**Diferencie os tipos de comandos de exclusão quando necessário.** Por exemplo, um item de menu Excluir se comporta da mesma forma que pressionar a tecla Delete, mas um item de menu Recortar copia o conteúdo selecionado para a área de transferência do sistema antes de excluí-lo.

## Conteúdo

**Crie rótulos curtos para comandos personalizados.** Use verbos ou frases verbais curtas que descrevam de forma sucinta a ação executada pelo comando. Para orientações, consulte [Rótulos](https://developer.apple.com/design/human-interface-guidelines/labels).

## Considerações por plataforma

*Sem considerações adicionais para visionOS. Não compatível com tvOS ou watchOS.*

### iOS, iPadOS

**Garanta que o seu menu de edição funcione bem nos dois estilos.** O sistema exibe o estilo horizontal compacto quando as pessoas usam gestos Multi-Touch para exibir o menu de edição e o estilo vertical quando usam um teclado ou dispositivo apontador para exibi-lo. Para orientações sobre o uso do layout vertical de menu, consulte [Menus > iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/menus#iOS-iPadOS).

**Ajuste o posicionamento de um menu de edição, se necessário.** Dependendo do espaço disponível, a posição padrão do menu é acima ou abaixo do ponto de inserção ou da seleção. O sistema também exibe um indicador visual que aponta para o conteúdo alvo. Embora você não possa alterar a forma do menu nem de seu ponteiro, pode alterar a posição do menu. Por exemplo, talvez seja necessário mover o menu para evitar que ele cubra conteúdo importante ou partes da sua interface.

### macOS

Para saber mais sobre a ordem dos itens no menu Editar de um app para macOS, consulte [Menu Editar](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Edit-menu).

## Recursos

#### Relacionados

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

[Menus de contexto](https://developer.apple.com/design/human-interface-guidelines/context-menus)

[A barra de menus](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar)

[Desfazer e refazer](https://developer.apple.com/design/human-interface-guidelines/undo-and-redo)

#### Documentação para desenvolvedores

[UIEditMenuInteraction](https://developer.apple.com/documentation/uikit/uieditmenuinteraction) — UIKit

[NSMenu](https://developer.apple.com/documentation/appkit/nsmenu) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 21 de junho de 2023 | Atualizado para incluir orientações para visionOS. |
| 14 de setembro de 2022 | Adicionadas orientações sobre o suporte aos dois estilos de menu de edição no iPadOS. |
