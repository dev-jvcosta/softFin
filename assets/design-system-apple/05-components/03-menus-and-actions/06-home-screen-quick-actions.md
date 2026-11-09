# Ações rápidas da tela de Início (Home Screen quick actions)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/home-screen-quick-actions
>
> Plataformas: ios,ipados

*As ações rápidas da tela de Início oferecem às pessoas uma forma de executar ações específicas do app a partir da tela de Início.*

![Uma representação estilizada de um conjunto de itens de menu que se estendem para cima a partir do ícone de um app. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores.](../../../images/home-screen-quick-actions/components-home-screen-quick-actions-intro@2x.png) ![Uma representação estilizada de um conjunto de itens de menu que se estendem para cima a partir do ícone de um app. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores. (escuro)](../../../images/home-screen-quick-actions/components-home-screen-quick-actions-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-home-screen-quick-actions-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-home-screen-quick-actions-intro~dark@2x.png)*

As pessoas podem obter um menu de ações rápidas disponíveis ao tocar e segurar o ícone de um app (em um dispositivo com 3D Touch, podem pressionar o ícone com mais força para ver o menu). Por exemplo, o Mail inclui ações rápidas que abrem a Caixa de Entrada ou a caixa VIP, iniciam uma busca e criam uma nova mensagem. Além das ações específicas do app, um menu de ações rápidas da tela de Início também lista itens para remover o app e editar a tela de Início.

Cada ação rápida da tela de Início inclui um título, um ícone de interface à esquerda ou à direita (dependendo da posição do app na tela de Início) e um subtítulo opcional. O título e o subtítulo são sempre alinhados à esquerda em idiomas escritos da esquerda para a direita. Seu app pode até atualizar dinamicamente suas ações rápidas quando houver novas informações disponíveis. Por exemplo, o Mensagens oferece ações rápidas para abrir suas conversas mais recentes.

## Boas práticas

**Crie ações rápidas para tarefas relevantes e de alto valor.** Por exemplo, o Mapas permite que as pessoas pesquisem perto de sua localização atual ou obtenham o trajeto para casa sem precisar abrir o app Mapas antes. As pessoas tendem a esperar que todo app ofereça pelo menos uma ação rápida útil; você pode fornecer um total de quatro.

**Evite fazer mudanças imprevisíveis nas ações rápidas.** As ações rápidas dinâmicas são uma ótima forma de manter as ações relevantes. Por exemplo, pode fazer sentido atualizar as ações rápidas com base na localização atual ou nas atividades recentes no seu app, no horário do dia ou em mudanças nos ajustes. Certifique-se de que as ações mudem de maneiras que as pessoas possam prever.

**Para cada ação rápida, forneça um título sucinto que comunique instantaneamente o resultado da ação.** Por exemplo, títulos como “Trajeto para casa”, “Criar novo contato” e “Nova mensagem” ajudam as pessoas a entender o que acontece ao escolher a ação. Se precisar dar mais contexto, forneça também um subtítulo. O Mail usa subtítulos para indicar se há mensagens não lidas na Caixa de Entrada e na pasta VIP. Não inclua o nome do seu app nem informações desnecessárias no título ou no subtítulo, mantenha o texto curto para evitar truncamento e leve a localização em conta ao redigir o texto.

**Forneça um ícone de interface familiar para cada ação rápida.** Prefira usar [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) para representar ações. Para uma lista de ícones que representam ações comuns, consulte [Ícones padrão](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons); para mais orientações, consulte [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

Se você projetar seu próprio ícone de interface, use o Quick Action Icon Template incluído nos [Apple Design Resources para iOS e iPadOS](https://developer.apple.com/design/resources/#ios-apps).

**Não use um emoji no lugar de um símbolo ou ícone de interface.** Os emojis são coloridos, ao passo que os símbolos das ações rápidas são monocromáticos e mudam de aparência no Dark Mode para manter o contraste.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS ou iPadOS. Não é compatível com macOS, tvOS, visionOS nem watchOS.*

## Recursos

#### Relacionados

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

#### Documentação para desenvolvedores

[Add Home Screen quick actions](https://developer.apple.com/documentation/uikit/add-home-screen-quick-actions) — UIKit
