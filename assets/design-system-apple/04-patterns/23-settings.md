# Ajustes (Settings)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/settings
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*As pessoas esperam que apps e jogos simplesmente funcionem, mas também gostam de ter formas de personalizar a experiência de acordo com suas necessidades.*

![Um esboço de uma engrenagem, sugerindo configuração. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple, de seis cores.](../../images/settings/patterns-settings-intro@2x.png) ![Um esboço de uma engrenagem, sugerindo configuração. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple, de seis cores. (escuro)](../../images/settings/patterns-settings-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-settings-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-settings-intro~dark@2x.png)*

Em todas as plataformas da Apple, o app Ajustes fornecido pelo sistema permite que as pessoas modifiquem itens como a aparência geral do sistema, conexões de rede, detalhes da conta, requisitos de acessibilidade e ajustes de idioma e região. Em algumas plataformas, o app Ajustes fornecido pelo sistema também pode incluir ajustes de apps e jogos específicos, muitas vezes permitindo que as pessoas definam se o app ou jogo pode acessar informações de localização, usar recursos do dispositivo como microfone ou câmera e se integrar a recursos do sistema como notificações, Siri ou Busca.

Quando necessário, você pode oferecer uma área de ajustes personalizada dentro do seu app ou jogo para disponibilizar ajustes gerais que afetam toda a experiência, como estilo de interface ou comportamento de salvamento do jogo. Se precisar oferecer ajustes que afetam apenas uma tarefa específica, você pode fornecer essas opções na própria tarefa, para que as pessoas não precisem sair da experiência para personalizá-la.

## Boas práticas

**Procure oferecer ajustes padrão que proporcionem a melhor experiência ao maior número de pessoas.** Por exemplo, você pode maximizar automaticamente o desempenho para o dispositivo em que seu jogo está sendo executado, em vez de pedir aos jogadores que façam essa escolha depois que o jogo for aberto (para orientações aos desenvolvedores, consulte [Improving your game’s graphics performance and settings](https://developer.apple.com/documentation/metal/improving-your-games-graphics-performance-and-settings)). Ao escolher ajustes padrão apropriados, as pessoas podem não precisar fazer nenhuma modificação antes de começar a aproveitar seu app ou jogo.

**Minimize o número de ajustes que você oferece.** Embora as pessoas gostem de ter controle sobre um app ou jogo, ajustes demais podem tornar a experiência menos acessível, além de dificultar a localização de um ajuste específico.

**Disponibilize os ajustes da maneira que as pessoas esperam.** Por exemplo, quando um teclado físico está conectado, as pessoas costumam usar o atalho de teclado padrão Command-vírgula (,) para abrir os ajustes de um app, enquanto em um jogo os jogadores costumam usar a tecla Esc (Escape).

**Evite usar ajustes para pedir informações de configuração que você pode obter de outras formas.** Por exemplo, um jogo pode detectar automaticamente um controle ou acessório conectado em vez de pedir ao jogador que o identifique; um app pode detectar se as pessoas estão usando o Dark Mode no momento.

**Respeite os ajustes de todo o sistema das pessoas e evite incluir versões redundantes deles na sua área de ajustes personalizada.** As pessoas esperam usar o app Ajustes fornecido pelo sistema para gerenciar opções globais, como recursos de acessibilidade, comportamento de rolagem e métodos de autenticação, e esperam que todos os apps e jogos respeitem suas escolhas. Incluir versões personalizadas de opções globais na sua área de ajustes provavelmente confundirá as pessoas, pois sugere que os ajustes de todo o sistema podem não valer para seu app ou jogo e que alterar sua versão personalizada de um ajuste global pode afetar também outros apps e jogos.

## Ajustes gerais

**Coloque ajustes gerais, alterados com pouca frequência, na sua área de ajustes personalizada.** As pessoas precisam interromper o que estão fazendo para abrir a área de ajustes de um app ou jogo, portanto você deve incluir opções que não precisem ser alteradas o tempo todo. Por exemplo, um app pode listar opções para ajustar a configuração de janelas; um jogo pode permitir que os jogadores especifiquem o comportamento de salvamento do jogo ou mapeamentos de teclado; tanto apps quanto jogos podem oferecer opções relacionadas às contas das pessoas.

## Opções específicas de tarefas

**Quando possível, prefira permitir que as pessoas modifiquem opções específicas de tarefas sem ir até a área de ajustes.** Por exemplo, se as pessoas podem ajustar itens como mostrar ou ocultar partes da visualização atual, reordenar uma coleção de itens ou filtrar uma lista, disponibilize essas opções nas telas que elas afetam, onde são descobríveis e convenientes. Colocar esse tipo de opção em uma área de ajustes separada a desconecta do seu contexto, exigindo que as pessoas interrompam a tarefa para fazer modificações e muitas vezes ocultando os resultados até que retomem a tarefa.

> **Observação:** Nos jogos, os jogadores tendem a adaptar sua abordagem de uma tarefa específica como parte da jogabilidade, e não como uma opção de ajuste a ser alterada.

## Ajustes do sistema

**Adicione ao app Ajustes fornecido pelo sistema apenas as opções alteradas mais raramente.** Se fizer sentido adicionar os ajustes do seu app ou jogo ao app Ajustes fornecido pelo sistema, considere oferecer um botão que o abra diretamente a partir da sua interface.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, tvOS ou visionOS.*

### macOS

Quando as pessoas escolhem o item Ajustes no menu do app ou jogo, sua janela de ajustes personalizada é aberta. Normalmente, uma janela de ajustes personalizada contém uma barra de ferramentas com botões para alternar entre visualizações, chamadas de *painéis*, que contêm cada uma um grupo de ajustes relacionados.

**Inclua um item de ajustes no [menu do app](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#App-menu).** Evite adicionar botões de ajustes à barra de ferramentas de uma janela, pois isso reduz o espaço disponível para comandos essenciais que as pessoas usam com frequência. Se você oferecer opções no nível do documento, adicione esse item ao [menu Arquivo](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#File-menu) do seu app.

**Escureça os botões de minimizar e maximizar de uma janela de ajustes.** É rápido abrir uma janela de ajustes personalizada usando o comando de teclado padrão Command–vírgula (,), então não há necessidade de manter a janela no Dock, e, como uma janela de ajustes se adapta ao tamanho do painel atual, as pessoas não precisam expandi-la para ver mais.

**Na sua janela de ajustes, use uma barra de ferramentas não personalizável que permaneça visível e sempre indique o botão ativo da barra de ferramentas.** A barra de ferramentas de uma janela de ajustes identifica as áreas que as pessoas podem personalizar e as ajuda a navegar entre elas. As pessoas dependem de uma interface de ajustes estável para encontrar o que precisam.

**Atualize o título da janela para refletir o painel visível no momento.** Se sua janela de ajustes não tiver vários painéis, use o título *Nome do app* Ajustes.

**Restaure o painel visualizado mais recentemente.** As pessoas costumam ajustar configurações relacionadas mais de uma vez, então pode ser conveniente que a janela de ajustes abra no último painel usado.

### watchOS

No watchOS, apps e jogos não adicionam ajustes personalizados ao app Ajustes fornecido pelo sistema. Como alternativa, considere disponibilizar um pequeno número de opções essenciais na parte inferior da visualização principal ou permitir que as pessoas usem um menu Mais para reconfigurar objetos.

## Recursos

#### Relacionados

[Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding)

#### Documentação para desenvolvedores

[Settings](https://developer.apple.com/documentation/swiftui/settings) — SwiftUI

[UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) — Foundation

[Preference Panes](https://developer.apple.com/documentation/preferencepanes)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 10 de junho de 2024 | Reorganizadas algumas orientações em novos tópicos e adicionados exemplos específicos de jogos. |
