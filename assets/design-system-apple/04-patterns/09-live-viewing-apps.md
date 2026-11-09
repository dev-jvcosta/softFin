# Apps de transmissão ao vivo (Live-viewing apps)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Ao projetar um app de transmissão ao vivo, priorize o conteúdo e crie interações divertidas e fluidas que incentivem a imersão na experiência de visualização ao vivo.*

![Um esboço de uma televisão contendo um botão de reproduzir, sugerindo a reprodução de mídia. A imagem está sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original de seis cores da Apple.](../../images/live-viewing-apps/patterns-live-viewing-intro@2x.png) ![Um esboço de uma televisão contendo um botão de reproduzir, sugerindo a reprodução de mídia. A imagem está sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original de seis cores da Apple. (escuro)](../../images/live-viewing-apps/patterns-live-viewing-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-live-viewing-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-live-viewing-intro~dark@2x.png)*

Os apps de transmissão ao vivo precisam valorizar e priorizar o conteúdo ao vivo. Em todas as telas, chame a atenção das pessoas para o conteúdo ao vivo e garanta que elas consigam distingui-lo, num relance, do conteúdo de vídeo sob demanda (VOD).

## Boas práticas

**Destaque o conteúdo ao vivo e facilite o acesso a ele.** As pessoas vêm ao seu app para assistir a conteúdo, então você quer minimizar o intervalo entre abrir o app e reproduzir o conteúdo. Quando o conteúdo ao vivo está na primeira aba, as pessoas não precisam tocar mais de uma vez para começar a assisti-lo.

**Permita que as pessoas toquem uma vez — ou nenhuma — para iniciar a reprodução.** Por exemplo, você pode exibir um botão Assistir Agora sobre o conteúdo ao vivo em destaque ou assistido recentemente. Quando as pessoas tocam nesse botão, ele desaparece imediatamente e a reprodução começa, substituindo a interface do seu app por uma experiência de visualização imersiva em tela inteira.

**Garanta que o conteúdo ao vivo pareça ao vivo.** As pessoas precisam conseguir distinguir o conteúdo ao vivo do conteúdo VOD. Embora simplesmente reproduzir o conteúdo ao vivo seja a melhor maneira de fazê-lo parecer ao vivo, você também pode ajudar as pessoas a reconhecê-lo marcando-o de alguma forma. Por exemplo, você pode exibir outros canais em uma linha de coleção intitulada “Ao Vivo” e dar a cada item um indicador visual — como um selo, um símbolo ou uma faixa — que o identifique como ao vivo.

**Considere indicar o progresso do conteúdo ao vivo em reprodução.** As pessoas gostam de saber em que ponto vão entrar ao acessar um conteúdo ao vivo em andamento. Você pode usar uma barra de progresso ou outro indicador para mostrar quanto conteúdo resta.

**Ofereça às pessoas ações adicionais e alternativas de visualização.** Além da reprodução, que sempre deve ser a ação principal, facilite para as pessoas gravar, reiniciar, baixar e realizar outras ações que você oferece. Exiba essas ações na mesma ordem em todo o app — por exemplo, Assistir, Começar do Início, Gravar e Favoritar. Além disso, se o conteúdo em reprodução será exibido novamente em outros horários, mostre essa informação para que as pessoas possam programar a visualização.

**Considere usar um rodapé de conteúdo para navegar entre canais durante a reprodução.** Um rodapé de conteúdo permite que as pessoas naveguem sem sair da experiência de reprodução ao vivo. Se você decidir usar um rodapé de conteúdo, não deixe de:

- Dar a ele um tratamento sutil, como um escurecimento, para manter o texto legível e ajudar todos os itens a permanecerem visualmente distintos do conteúdo que está sendo reproduzido atrás dele.
- Facilitar para as pessoas a identificação da miniatura que representa o conteúdo em reprodução, por exemplo, colocando um selo na miniatura ou colorindo a barra de progresso dela.
- Fazer com que as categorias do rodapé de conteúdo correspondam às do seu guia eletrônico de programação (para orientações relacionadas, consulte [Experiência de EPG](https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps#EPG-experience)).
- Projetar uma maneira simples e previsível para as pessoas exibirem e dispensarem o rodapé de conteúdo — por exemplo, se deslizar para cima exibe o rodapé, as pessoas esperariam que deslizar para baixo o dispense.

**Forneça feedback visual instantâneo quando as pessoas trocarem de canal.** Isso é essencial por dois motivos: as pessoas precisam de confirmação de que chegaram ao canal que desejam, e fornecer feedback pode dar ao conteúdo em streaming algum tempo para carregar.

**Faça o áudio corresponder ao contexto atual.** Quando as pessoas começam a reproduzir conteúdo ao vivo, elas esperam que o áudio corresponda, mesmo que passem a navegar enquanto o conteúdo é reproduzido em segundo plano. No entanto, quando as pessoas saem da aba ao vivo no seu app, elas deixam o contexto de visualização ao vivo, então o áudio precisa parar.

## Experiência de EPG

Os apps de transmissão ao vivo normalmente oferecem um guia eletrônico de programação (EPG) que contém informações sobre a programação agendada. Siga estas diretrizes para oferecer às pessoas uma experiência de EPG simplificada, que pareça projetada especificamente para o seu app de transmissão ao vivo.

**Exiba em destaque as informações atuais e facilite o retorno à reprodução.** Quando as pessoas abrem o EPG pela primeira vez, o programa, o canal e o horário atuais precisam ser fáceis de localizar para que elas possam voltar instantaneamente ao canal atual.

**Torne a navegação pelo EPG fácil.** Um EPG típico contém muitas informações, então é importante ajudar as pessoas a paginar, rolar ou pular por ele com facilidade. Considere também oferecer um grupo Meus Canais ou um grupo Favoritos que dê às pessoas acesso rápido ao conteúdo que elas mais assistem.

**Agrupe o conteúdo em categorias familiares para ajudar as pessoas a encontrá-lo com mais facilidade.** Por exemplo, você pode usar categorias como Filmes, Séries de TV, Infantil, Esportes e Populares. Se o seu app inclui um rodapé de conteúdo, organize as miniaturas de conteúdo usando as mesmas categorias do EPG.

**Permita que as pessoas naveguem pelo EPG sem sair do conteúdo atual.** Por exemplo, você pode continuar reproduzindo o conteúdo em um modo de picture-in-picture (PiP) ou em segundo plano enquanto as pessoas navegam pelo EPG.

## DVR na nuvem

Se você oferece suporte à gravação de vídeo digital (DVR) na nuvem, siga estas diretrizes para oferecer uma ótima experiência de gravação no seu app de transmissão ao vivo.

**Permita que as pessoas iniciem e parem a gravação pelo painel de informações.** Durante uma transmissão ao vivo, as pessoas querem exibir o painel de informações para iniciar a gravação imediatamente.

**Permita que as pessoas gravem um programa futuro em uma visualização que forneça detalhes sobre o conteúdo.** Além disso, dê às pessoas a opção de gravar apenas esse programa ou todos os episódios futuros.

**Ajude as pessoas a adaptar a experiência de gravação às suas necessidades.** Permita que as pessoas especifiquem com precisão o que querem gravar, como apenas o episódio atual, apenas os novos episódios ou apenas os jogos que envolvam determinados times.

**Permita a reprodução e outras ações específicas do conteúdo dentro da área de DVR na nuvem.** Quando as pessoas abrem uma visualização que exibe os detalhes do conteúdo na seção de DVR na nuvem, deixe que reproduzam ou excluam o conteúdo e, se aplicável, ajustem as configurações de gravação.

**Considere oferecer um controle que permita às pessoas gerenciar as configurações do DVR na nuvem.** Por exemplo, você pode permitir que as pessoas excluam gravações que já assistiram ou conteúdo mais antigo que um certo número de dias. O ideal é ajudar as pessoas a evitar ficar sem espaço, permitindo que configurem o gerenciamento automático de armazenamento, que sobrescreve o conteúdo mais antigo ou já assistido.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Controles remotos](https://developer.apple.com/design/human-interface-guidelines/remotes)

[Reprodução de vídeo](https://developer.apple.com/design/human-interface-guidelines/playing-video)
