# Arrastar e soltar (Drag and drop)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop
>
> Plataformas: ios,ipados,macos,visionos

*Com o recurso de arrastar e soltar, as pessoas podem mover ou duplicar fotos, textos e outros conteúdos selecionados arrastando a seleção de um local para outro.*

![Um esboço de dois quadrados sobrepostos contendo uma seta apontando para o canto superior esquerdo, sugerindo uma transição para um novo destino. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que reflete sutilmente o laranja do logotipo original da Apple, de seis cores.](../../images/drag-and-drop/patterns-drag-and-drop-intro@2x.png) ![Um esboço de dois quadrados sobrepostos contendo uma seta apontando para o canto superior esquerdo, sugerindo uma transição para um novo destino. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja que reflete sutilmente o laranja do logotipo original da Apple, de seis cores. (escuro)](../../images/drag-and-drop/patterns-drag-and-drop-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-drag-and-drop-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-drag-and-drop-intro~dark@2x.png)*

Para arrastar e soltar, as pessoas selecionam conteúdo em um local, chamado de *origem*, e o soltam em outro, chamado de *destino*. Esses locais podem estar no mesmo contêiner — como uma visualização de texto — ou em contêineres diferentes, como visualizações de texto em lados opostos de uma visualização dividida, ou até em apps diferentes.

Dependendo de vários fatores, a ação de arrastar e soltar pode *mover* o conteúdo selecionado para o destino ou *copiá-lo*. Depois de uma soltura bem-sucedida, o conteúdo movido existe apenas no destino; o conteúdo copiado existe nos dois locais. Como regra geral, soltar o conteúdo selecionado dentro do mesmo contêiner o move, enquanto soltá-lo em um contêiner diferente o copia. Arrastar e soltar conteúdo entre apps sempre resulta em uma cópia.

As pessoas usam interações diferentes para arrastar e soltar, dependendo da plataforma. Por exemplo:

- No visionOS, as pessoas fazem o gesto de pinça e seguram um objeto virtual enquanto o arrastam para um novo local em qualquer direção, inclusive ao longo do eixo z.
- O iOS e o iPadOS oferecem suporte a arrastar e soltar por meio de gestos na tela sensível ao toque, interações com um dispositivo apontador e o modo de acesso total pelo teclado.
- O Universal Control permite que as pessoas arrastem conteúdo entre o Mac e o iPad.
- No Mac, as pessoas podem interagir com um dispositivo apontador, usar o modo de acesso total pelo teclado ou usar o VoiceOver para arrastar e soltar.

## Boas práticas

**Sempre que possível, ofereça suporte a arrastar e soltar em todo o seu app.** A maioria das pessoas conhece o recurso de arrastar e soltar e muitas vezes tenta usá-lo em todos os lugares. Quando você usa componentes fornecidos pelo sistema — como campos de texto e visualizações de texto —, obtém suporte integrado a arrastar e soltar.

**Ofereça maneiras alternativas de realizar as ações de arrastar e soltar.** Às vezes, as operações de arrastar e soltar são inconvenientes ou impossíveis de realizar para algumas pessoas, por isso é importante oferecer outras maneiras de fazer as mesmas coisas. Por exemplo, você pode incluir comandos de menu que as pessoas possam usar para copiar um item e movê-lo para outro local. No iOS e no iPadOS, você pode usar APIs de acessibilidade para identificar origens e destinos, de modo que as pessoas possam usar tecnologias assistivas para arrastar e soltar no seu app (para obter orientações para desenvolvedores, consulte [accessibilityDragSourceDescriptors](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitydragsourcedescriptors) e [accessibilityDropPointDescriptors](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitydroppointdescriptors)).

**Determine quando arrastar e soltar conteúdo dentro do seu app resulta em movimentação ou cópia.** Em geral, mover faz sentido quando os contêineres de origem e destino são o mesmo — como arrastar texto de um local para outro dentro de um documento — e copiar faz sentido quando são diferentes, como arrastar uma imagem de um documento para outro. Antes de alterar esses padrões, considere o comportamento que a maioria das pessoas espera e prefira o que tem menor probabilidade de causar frustração ou perda de dados.

**Ofereça suporte a arrastar e soltar vários itens quando fizer sentido.** As pessoas apreciam a conveniência de arrastar um grupo de itens para um destino em vez de arrastar cada item separadamente. No iOS, iPadOS, macOS e visionOS, as pessoas podem selecionar vários itens e arrastá-los como um grupo; o macOS também permite que as pessoas selecionem vários itens de diversos apps e os arrastem como um grupo. No iPadOS, as pessoas podem selecionar um item, começar a arrastá-lo e adicionar outros itens ao grupo sem interromper a operação de arrastar.

**Prefira permitir que as pessoas desfaçam uma operação de arrastar e soltar.** Às vezes, as pessoas soltam conteúdo sem querer no destino errado, por isso apreciam poder desfazer a ação e voltar ao estado anterior. Você também pode ajudar as pessoas a evitar erros pedindo confirmação antes de concluir uma operação de arrastar e soltar que não pode ser desfeita. No macOS, por exemplo, o Finder pede confirmação quando as pessoas arrastam um arquivo para uma pasta somente de gravação, porque não poderão abrir a pasta e remover o item solto. Em algumas situações, pode fazer sentido oferecer uma maneira de reverter os resultados de arrastar e soltar quando as pessoas não podem desfazê-los. Por exemplo, o app Fotos permite que as pessoas cancelem o compartilhamento de uma foto depois de soltá-la em um stream de fotos compartilhado.

**Considere oferecer várias versões do conteúdo arrastado, ordenadas da maior para a menor fidelidade.** Ao fornecer várias alternativas, o destino pode escolher a versão de maior qualidade que consiga aceitar. Por exemplo, se as pessoas puderem arrastar um desenho de linhas criado no seu app, você pode oferecer uma representação vetorial em PDF, uma imagem PNG sem perdas com transparência e uma imagem JPEG com perdas sem transparência, nessa ordem. Outro exemplo é um app que usa objetos ricos e complexos, como gráficos. Esse app pode oferecer o objeto de gráfico nativo seguido de uma versão mais simples — como uma imagem do gráfico — para destinos que não oferecem suporte a objetos de gráfico.

**Considere oferecer suporte ao spring loading.** O spring loading permite que as pessoas ativem determinados controles, como botões e controles segmentados, arrastando o conteúdo selecionado sobre eles. Por exemplo, o app Calendário permite que as pessoas arrastem um evento selecionado sobre os segmentos de dia, semana, mês ou ano na barra de ferramentas, oferecendo uma maneira conveniente de mover o evento para uma data diferente. Em um Mac equipado com um Magic Trackpad, um botão ou controle segmentado pode ser ativado quando as pessoas fazem um force click nele enquanto continuam segurando o conteúdo; no iPad, esses componentes podem ser ativados quando as pessoas passam o ponteiro sobre eles enquanto seguram o conteúdo.

## Fornecendo feedback

Arrastar e soltar é um processo dinâmico que pode ter vários resultados. Para ajudar as pessoas a se sentirem no controle do processo, é fundamental fornecer feedback claro e contínuo durante todo o tempo.

**Exiba uma imagem de arrasto assim que as pessoas arrastarem uma seleção por cerca de três pontos.** Funciona bem criar uma representação translúcida do conteúdo que as pessoas estão arrastando. A translucidez ajuda a distinguir a representação do conteúdo original e permite que as pessoas vejam os destinos à medida que passam por cima deles. Exiba a imagem de arrasto até que as pessoas soltem o conteúdo.

**Se isso trouxer clareza, modifique a imagem de arrasto para ajudar as pessoas a prever o resultado de uma operação de arrastar e soltar.** Por exemplo, ao arrastar uma foto para um documento, a imagem de arrasto pode se expandir para mostrar o tamanho padrão da foto no documento. Você também pode usar o *flocking* de arrasto para agrupar visualmente vários itens arrastados — permitindo que as pessoas confirmem que não deixaram de fora nenhum item que querem arrastar — e depois desagrupar os itens quando as pessoas os soltarem. Embora alterar a imagem de arrasto possa fornecer feedback valioso, evite criar uma experiência perturbadora em que a imagem de arrasto muda constante e radicalmente.

**Mostre às pessoas se um destino pode aceitar o conteúdo arrastado.** Por exemplo, você pode exibir um ponto de inserção ou destacar uma visualização contêiner somente quando o destino puder aceitar um item arrastado e não mostrar nenhum feedback visual — ou mostrar uma imagem explícita de “não permitido”, como o `circle.slash` dos SF Symbols — quando não puder. Exiba o destaque ou outras indicações visuais somente enquanto o conteúdo estiver posicionado sobre o destino, removendo o feedback visual quando as pessoas arrastarem o conteúdo para longe. Quando houver vários destinos possíveis, forneça indicações visuais que ajudem a identificar um de cada vez.

**Quando as pessoas soltarem um item em um destino inválido, ou quando a soltura falhar, forneça feedback visual.** Por exemplo, o item pode voltar de sua posição atual para a origem (se a origem ainda estiver visível) ou pode aumentar de escala e desaparecer gradualmente, dando a impressão de que o item evaporou em vez de pousar com sucesso.

## Aceitando conteúdo solto

**Role o conteúdo de um destino quando necessário.** Quando as pessoas arrastam um item dentro de um contêiner de rolagem com muito conteúdo, o conteúdo pode rolar automaticamente enquanto as pessoas movem o item sobre ele. Esse comportamento facilita encontrar o lugar certo para soltar o item, mas, se elas continuarem a operação de arrastar fora do contêiner, a rolagem automática deixa de ser necessária. As visualizações de texto e os campos de texto fornecidos pelo sistema se comportam dessa maneira por padrão.

**Quando houver escolha, selecione a versão mais rica do conteúdo solto que seu app consiga aceitar.** Por exemplo, se as pessoas arrastarem um objeto de gráfico de outro app, a operação de arrastar pode oferecer tanto o objeto de gráfico nativo e rico quanto uma imagem simples dele. Se seu app oferece suporte a gráficos, extraia e exiba o objeto de gráfico nativo; se não, use a imagem.

**Extraia apenas a parte relevante do conteúdo solto, se necessário.** Por exemplo, quando as pessoas arrastam um contato para um campo de destinatário em um e-mail, o app Mail exibe apenas o nome e o endereço de e-mail, e não as informações de endereço do contato.

**Quando um teclado físico estiver conectado, verifique a tecla Option no momento da soltura.** Quando as pessoas seguram a tecla Option enquanto arrastam, podem forçar uma operação de arrastar e soltar dentro do mesmo contêiner a se comportar como uma cópia. Se as pessoas pararem de segurar Option antes de soltar o conteúdo no mesmo contêiner, a operação de arrastar resulta em uma movimentação.

**Forneça feedback quando o conteúdo solto precisar de tempo para ser transferido.** Por exemplo, você pode exibir um indicador de progresso para ajudar as pessoas a estimar quanto tempo a transferência levará. Em coleções, listas e tabelas, você também pode exibir um espaço reservado no local da soltura para que as pessoas saibam onde encontrar o conteúdo depois que a transferência terminar. O sistema pode exibir um alerta quando ocorre uma transferência demorada entre apps.

**Forneça feedback quando o conteúdo solto iniciar uma tarefa ou ação.** Se as pessoas soltarem conteúdo em um controle que inicia uma tarefa — como imprimir —, mostre que a tarefa começou e mantenha-as informadas sobre o progresso.

**Aplique o estilo apropriado ao texto solto.** Quando a origem e o destino oferecem suporte aos mesmos estilos de texto, certifique-se de que o texto solto mantenha a fonte, a família tipográfica, o tamanho e outros atributos originais. Caso contrário, aplique o estilo do destino ao texto solto.

**Após uma soltura, mantenha o estado de seleção do conteúdo no destino, atualizando-o na origem conforme necessário.** As pessoas esperam que o conteúdo que soltaram continue selecionado para que possam agir sobre ele imediatamente. Quando a origem e o destino são o mesmo contêiner, o conteúdo desaparece do local original quando a operação de arrastar executa uma movimentação. Quando uma operação de arrastar dentro do mesmo contêiner executa uma cópia, remova o estado de seleção do conteúdo que permanece no local original. Quando as pessoas arrastam conteúdo selecionado para um contêiner diferente, desfaça a seleção do conteúdo na origem.

## Considerações por plataforma

*Não compatível com tvOS nem watchOS.*

### iOS, iPadOS

**Permita que as pessoas realizem várias atividades de arrasto simultâneas.** No iPadOS, as pessoas podem adicionar itens sequencialmente a uma sessão de arrasto em andamento, reunindo quantos itens seus dedos conseguirem segurar. Por exemplo, as pessoas podem selecionar o ícone de um app na Tela de Início, começar a arrastá-lo e selecionar outros ícones de apps antes de soltar todos eles em outra Tela de Início ou em uma pasta. Para oferecer suporte a essa interação, é preciso permitir que as pessoas adicionem itens durante um arrasto — fornecendo feedback visual por meio de flocking — e aceitar várias soltas simultâneas.

### macOS

**Considere permitir que as pessoas arrastem conteúdo do seu app para o Finder.** Ao oferecer esse suporte, apresente o conteúdo em um formato que seu app possa abrir mais tarde. Por exemplo, o app Calendário permite que as pessoas arrastem um evento para o Finder como um arquivo `.ics`. As pessoas podem compartilhar esse arquivo com outras pessoas ou arrastá-lo de volta para o Calendário para abri-lo. Quando necessário, você pode gerar o conteúdo arrastado em um *clipping*, que é um contêiner temporário para armazenar conteúdo arrastado. Por exemplo, a maioria dos apps do sistema permite que as pessoas arrastem texto para o Finder, onde ele aparece como um clipping. Mais tarde, as pessoas podem arrastar o clipping para um campo de texto ou outro local que aceite texto. Observe que um clipping de arrastar e soltar não tem relação com a Área de Transferência.

**Permita que as pessoas arrastem conteúdo selecionado de uma janela inativa sem antes tornar a janela ativa.** O conteúdo selecionado em uma janela inativa é conhecido como *seleção em segundo plano* e tem aparência diferente do conteúdo selecionado na janela ativa. Em geral, as pessoas esperam poder arrastar uma seleção em segundo plano para a janela ativa sem trazer a janela inativa para a frente.

**Quando possível, permita que as pessoas arrastem itens individuais de uma janela inativa sem afetar uma seleção em segundo plano existente.** Por exemplo, as pessoas podem arrastar um arquivo não selecionado de uma janela inativa do Finder sem desmarcar nenhum dos arquivos selecionados da janela.

**Considere exibir um selo durante operações de arrastar vários itens.** Um selo é um pequeno oval preenchido contendo um número que você pode usar para indicar a quantidade de itens que as pessoas estão arrastando. Se um destino puder aceitar apenas um subconjunto dos itens arrastados, atualize o selo para mostrar o novo número.

**Considere alterar a aparência do ponteiro para indicar o que acontecerá quando as pessoas soltarem o conteúdo.** Além de usar o ponteiro de *cópia*, você pode querer usar os ponteiros de *vínculo de arrasto*, *item que desaparece* e *operação não permitida*, dependendo da situação. Para obter orientações, consulte [Ponteiros](https://developer.apple.com/design/human-interface-guidelines/pointing-devices#Pointers).

**Sempre que possível, permita que as pessoas selecionem e arrastem conteúdo com um único movimento.** A menos que estejam selecionando vários itens, as pessoas apreciam não ter que fazer uma pausa entre a seleção e o início da operação de arrastar.

### visionOS

**Quando possível, abra seu app para tratar o conteúdo que as pessoas soltarem no espaço vazio.** Quando você associa uma atividade do usuário a um conteúdo arrastável do app, seu app pode abrir uma janela ou cena que trate o conteúdo quando as pessoas o soltarem. Por exemplo, quando as pessoas soltam uma URL no espaço vazio, o Safari é aberto; quando soltam conteúdo compatível com o Quick Look, o Quick Look é aberto para exibi-lo. Para obter orientações para desenvolvedores, consulte [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity).

![Uma gravação que mostra uma pessoa arrastando um arquivo 3D chamado meteor para fora de uma janela do Finder. A pessoa arrasta o arquivo para o espaço vazio, soltando-o em uma área visualmente próxima a uma mesa em seu ambiente físico. O arquivo solto é aberto, mostrando um meteoro 3D que parece flutuar acima da mesa.](../../images/drag-and-drop/drag-and-drop-volume-file@2x.png)

*Vídeo: Uma gravação que mostra uma pessoa arrastando um arquivo 3D chamado meteor para fora de uma janela do Finder. A pessoa arrasta o arquivo para o espaço vazio, soltando-o em uma área visualmente próxima a uma mesa em seu ambiente físico. O arquivo solto é aberto, mostrando um meteoro 3D que parece flutuar acima da mesa.* — [assistir vídeo](https://developer.apple.com/tutorials/videos/com.apple.HIG/drag-and-drop-volume-file.mp4)

## Recursos

#### Relacionados

[Universal Control](https://support.apple.com/en-us/HT212757)

#### Documentação para desenvolvedores

[Arrastar e soltar](https://developer.apple.com/documentation/uikit/drag-and-drop) — UIKit

[Arrastar e soltar](https://developer.apple.com/documentation/appkit/drag-and-drop) — AppKit

[File Provider](https://developer.apple.com/documentation/fileprovider)

#### Vídeos

- [Novidades do UIKit](https://developer.apple.com/videos/play/wwdc2021/10059)
- [SwiftUI no Mac: Os toques finais](https://developer.apple.com/videos/play/wwdc2021/10289)
- [Projetado para iPad](https://developer.apple.com/videos/play/wwdc2020/10206)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 24 de outubro de 2023 | Imagens adicionadas. |
| 21 de junho de 2023 | Atualizado para incluir orientações para o visionOS. |
