# Widgets

> Fonte: https://developer.apple.com/design/human-interface-guidelines/widgets
>
> Plataformas: ios,ipados,macos,watchos,visionos

*Um widget oferece acesso rápido a informações essenciais e interações focadas do seu app ou jogo em contextos adicionais.*

![Uma representação estilizada de um conjunto de widgets de tamanhos diferentes na Tela de Início de um iPad. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores.](../../../images/widgets/components-widgets-intro@2x.png) ![Uma representação estilizada de um conjunto de widgets de tamanhos diferentes na Tela de Início de um iPad. A imagem é tingida de vermelho para refletir sutilmente o vermelho do logotipo original da Apple, de seis cores. (escuro)](../../../images/widgets/components-widgets-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-widgets-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-widgets-intro~dark@2x.png)*

Os widgets ajudam as pessoas a organizar e personalizar seus dispositivos, exibindo conteúdo oportuno e de leitura rápida e oferecendo funcionalidades específicas. Eles aparecem em vários contextos para uma experiência consistente entre plataformas. Por exemplo, uma pessoa pode colocar um widget do Clima:

- Na Tela de Início e na Tela Bloqueada do iPhone e do iPad
- Na mesa e na Central de Notificações do Mac
- Em uma superfície horizontal ou vertical ao usar o Apple Vision Pro
- Em uma posição fixa no Smart Stack do Apple Watch

## Anatomia

Os widgets vêm em diferentes tamanhos, desde pequenos widgets acessórios no iPhone, iPad e Apple Watch até widgets de família do sistema que incluem um tamanho extragrande no iPad, Mac e Apple Vision Pro. Além disso, os widgets adaptam sua aparência ao contexto em que aparecem e respondem à personalização do dispositivo feita pela pessoa. Considere os seguintes aspectos ao projetar widgets:

- O tamanho de widget a ser compatível
- O contexto — dispositivos e experiências do sistema — em que o widget pode aparecer
- Os modos de renderização e o tratamento de cor que o widget recebe com base no tamanho e no contexto

O framework WidgetKit fornece aparências e tratamentos padrão para cada tamanho de widget, de modo a se adequar à experiência do sistema ou ao dispositivo em que ele aparece. No entanto, é importante considerar a criação de um design de widget personalizado que ofereça a melhor experiência para o seu conteúdo em cada contexto específico.

### Widgets de família do sistema

Os widgets de família do sistema oferecem uma ampla gama de tamanhos e podem incluir um ou mais elementos interativos.

**Pequeno**

![Uma imagem do widget pequeno do Calendário, mostrando apenas a data atual e um evento.](../../../images/widgets/widgets-calendar-small@2x.png) ![Uma imagem do widget pequeno do Calendário, mostrando apenas a data atual e um evento. (escuro)](../../../images/widgets/widgets-calendar-small~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-small@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-small~dark@2x.png)*

**Médio**

![Uma imagem do widget médio do Calendário, que tem a mesma altura do widget pequeno, mas o dobro da largura. À esquerda, o widget repete as informações do widget pequeno, acrescentando um evento de aniversário; à direita, o widget médio acrescenta informações sobre os eventos de amanhã.](../../../images/widgets/widgets-calendar-medium@2x.png) ![Uma imagem do widget médio do Calendário, que tem a mesma altura do widget pequeno, mas o dobro da largura. À esquerda, o widget repete as informações do widget pequeno, acrescentando um evento de aniversário; à direita, o widget médio acrescenta informações sobre os eventos de amanhã. (escuro)](../../../images/widgets/widgets-calendar-medium~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-medium@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-medium~dark@2x.png)*

**Grande**

![Uma imagem do widget grande do Calendário, que tem a mesma largura do widget médio, mas um pouco mais que o dobro da altura. Como o widget médio, o widget grande exibe informações sobre hoje à esquerda e informações sobre amanhã à direita. Nos dois lados, a versão grande inclui indicadores de horário do dia relevantes.](../../../images/widgets/widgets-calendar-large@2x.png) ![Uma imagem do widget grande do Calendário, que tem a mesma largura do widget médio, mas um pouco mais que o dobro da altura. Como o widget médio, o widget grande exibe informações sobre hoje à esquerda e informações sobre amanhã à direita. Nos dois lados, a versão grande inclui indicadores de horário do dia relevantes. (escuro)](../../../images/widgets/widgets-calendar-large~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-large@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-large~dark@2x.png)*

**Extragrande**

![Uma imagem do widget extragrande do Calendário, que tem cerca do dobro da largura do widget grande e é um pouco mais baixo. O widget exibe informações sobre hoje e os três dias seguintes, incluindo indicadores de horário do dia relevantes nas quatro colunas. A coluna de hoje é um pouco mais larga que as colunas dos outros dias.](../../../images/widgets/widgets-calendar-extra-large-landscape@2x.png) ![Uma imagem do widget extragrande do Calendário, que tem cerca do dobro da largura do widget grande e é um pouco mais baixo. O widget exibe informações sobre hoje e os três dias seguintes, incluindo indicadores de horário do dia relevantes nas quatro colunas. A coluna de hoje é um pouco mais larga que as colunas dos outros dias. (escuro)](../../../images/widgets/widgets-calendar-extra-large-landscape~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-extra-large-landscape@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-extra-large-landscape~dark@2x.png)*

**Extragrande vertical**

![Uma imagem do widget extragrande vertical do app Música, que tem a mesma largura do widget grande, mas é mais alto.](../../../images/widgets/widgets-music-extra-large-portrait@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-music-extra-large-portrait@2x.png)*

A tabela a seguir mostra os contextos compatíveis com cada tamanho de widget de família do sistema:

| Tamanho do widget | iPhone | iPad | Mac | Apple Vision Pro |
|---|---|---|---|---|
| System small | Tela de Início, Visualização Hoje, StandBy e CarPlay | Tela de Início, Visualização Hoje e Tela Bloqueada | Mesa e Central de Notificações | Superfícies horizontais e verticais |
| System medium | Tela de Início e Visualização Hoje | Tela de Início e Visualização Hoje | Mesa e Central de Notificações | Superfícies horizontais e verticais |
| System large | Tela de Início e Visualização Hoje | Tela de Início e Visualização Hoje | Mesa e Central de Notificações | Superfícies horizontais e verticais |
| System extra large | Não compatível | Tela de Início e Visualização Hoje | Mesa e Central de Notificações | Superfícies horizontais e verticais |
| System extra large portrait | Não compatível | Não compatível | Não compatível | Superfícies horizontais e verticais |

### Widgets acessórios

Os widgets acessórios exibem uma quantidade muito limitada de informações por causa de seu tamanho.

**Accessory circular**

![Uma imagem do widget acessório circular do Calendário, mostrando apenas o horário do próximo evento.](../../../images/widgets/widgets-accessory-calendar-circular@2x.png) ![Uma imagem do widget acessório circular do Calendário, mostrando apenas o horário do próximo evento. (escuro)](../../../images/widgets/widgets-accessory-calendar-circular~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-accessory-calendar-circular@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-accessory-calendar-circular~dark@2x.png)*

**Accessory corner**

![Uma imagem do widget acessório de canto do Calendário. Ele exibe o horário e o título de uma próxima reunião.](../../../images/widgets/widgets-accessory-corner-widget-watch@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-accessory-corner-widget-watch@2x.png)*

**Accessory inline**

![Uma imagem do widget acessório em linha do Calendário, mostrando a data e o número dos próximos eventos.](../../../images/widgets/widgets-accessory-calendar-inline@2x.png) ![Uma imagem do widget acessório em linha do Calendário, mostrando a data e o número dos próximos eventos. (escuro)](../../../images/widgets/widgets-accessory-calendar-inline~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-accessory-calendar-inline@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-accessory-calendar-inline~dark@2x.png)*

**Accessory rectangular**

![Uma imagem do widget acessório retangular do Calendário. Ele exibe o horário de dois eventos simultâneos e seus títulos.](../../../images/widgets/widgets-accessory-calendar-rectangular@2x.png) ![Uma imagem do widget acessório retangular do Calendário. Ele exibe o horário de dois eventos simultâneos e seus títulos. (escuro)](../../../images/widgets/widgets-accessory-calendar-rectangular~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-accessory-calendar-rectangular@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-accessory-calendar-rectangular~dark@2x.png)*

Eles aparecem nos seguintes dispositivos:

| Tamanho do widget | iPhone | iPad | Apple Watch |
|---|---|---|---|
| Accessory circular | Tela Bloqueada | Tela Bloqueada | Complicações do relógio e no Smart Stack |
| Accessory corner | Não compatível | Não compatível | Complicações do relógio |
| Accessory inline | Tela Bloqueada | Tela Bloqueada | Complicações do relógio |
| Accessory rectangular | Tela Bloqueada | Tela Bloqueada | Complicações do relógio e no Smart Stack |

### Aparências

Um widget pode aparecer em cores, em monocromático com uma cor de matiz ou em um estilo translúcido e transparente. Dependendo do local, do dispositivo e da personalização da pessoa, o sistema pode aplicar uma aparência tingida ou transparente ao widget e às imagens em cores, símbolos e glifos nele incluídos.

Por exemplo, um widget pequeno do sistema aparece de forma diferente dependendo do dispositivo e do local:

- Na Tela de Início do iPhone e do iPad, as pessoas escolhem entre diferentes aparências para os widgets: clara, escura, transparente e tingida. Nas aparências clara e escura, os widgets têm um design em cores. Na aparência transparente, o sistema dessatura o widget e adiciona translucidez, realces e o material Liquid Glass. Na aparência tingida, o sistema dessatura o widget e seu conteúdo e, em seguida, aplica a cor de matiz selecionada pela pessoa.

![Uma imagem do widget pequeno de Bolsa na Tela de Início na aparência em cores.](../../../images/widgets/widgets-stocks-default@2x.png) ![Uma imagem do widget pequeno de Bolsa na Tela de Início na aparência em cores. (escuro)](../../../images/widgets/widgets-stocks-default~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-default@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-default~dark@2x.png)*

![Uma imagem do widget pequeno de Bolsa na Tela de Início na aparência transparente.](../../../images/widgets/widgets-stocks-clear@2x.png) ![Uma imagem do widget pequeno de Bolsa na Tela de Início na aparência transparente. (escuro)](../../../images/widgets/widgets-stocks-clear~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-clear@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-clear~dark@2x.png)*

![Uma imagem do widget pequeno de Bolsa na Tela de Início na aparência tingida.](../../../images/widgets/widgets-stocks-tinted@2x.png) ![Uma imagem do widget pequeno de Bolsa na Tela de Início na aparência tingida. (escuro)](../../../images/widgets/widgets-stocks-tinted~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-tinted@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-tinted~dark@2x.png)*

- No Apple Vision Pro, o widget aparece como um objeto 3D, cercado por uma moldura. Ele assume uma aparência em cores com uma camada de revestimento semelhante a vidro ou papel que responde às condições de iluminação. Além disso, as pessoas podem escolher uma aparência tingida que aplica uma cor de um conjunto de paletas de cores fornecidas pelo sistema.

![Uma imagem do widget pequeno de Bolsa no Apple Vision Pro.](../../../images/widgets/widgets-stocks-visionos-frame@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-visionos-frame@2x.png)*

- Na Tela Bloqueada do iPad, o widget assume uma aparência monocromática, sem cor de matiz.

![Uma imagem do widget pequeno de Bolsa na Tela Bloqueada, mostrando o preço das ações da Apple.](../../../images/widgets/widgets-stocks-ipad-lock-screen@2x.png) ![Uma imagem do widget pequeno de Bolsa na Tela Bloqueada, mostrando o preço das ações da Apple. (escuro)](../../../images/widgets/widgets-stocks-ipad-lock-screen~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-ipad-lock-screen@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-ipad-lock-screen~dark@2x.png)*

- Na Tela Bloqueada do iPhone no StandBy, o widget aparece ampliado, com o fundo removido. Quando a luz ambiente fica abaixo de um limite, o sistema renderiza o widget com um matiz vermelho monocromático.

![Uma imagem do widget de Bolsa na Tela Bloqueada no StandBy, mostrando o preço das ações da Apple.](../../../images/widgets/widgets-stocks-standby@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-standby@2x.png)*

![Uma imagem do widget de Bolsa na Tela Bloqueada que usa a aparência escura em condições de pouca luz, mostrando o preço das ações da Apple.](../../../images/widgets/widgets-stocks-standby-night-mode@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-standby-night-mode@2x.png)*

De forma semelhante, um widget acessório retangular aparece da seguinte maneira:

- Na Tela Bloqueada do iPhone e do iPad, ele assume uma aparência monocromática, sem cor de matiz.
- No Apple Watch, o widget pode aparecer como uma complicação do relógio nas aparências em cores e tingida, e também pode aparecer no Smart Stack.

**Tela Bloqueada do iPhone**

![Um widget acessório retangular do Calendário na Tela Bloqueada do iPhone, exibindo uma reunião de equipe às 16h em uma sala de conferências.](../../../images/widgets/widgets-calendar-rectangular-ios@2x.png) ![Um widget acessório retangular do Calendário na Tela Bloqueada do iPhone, exibindo uma reunião de equipe às 16h em uma sala de conferências. (escuro)](../../../images/widgets/widgets-calendar-rectangular-ios~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-rectangular-ios@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-rectangular-ios~dark@2x.png)*

**Complicação do relógio**

![Uma complicação retangular do Calendário no relógio, exibindo uma reunião de equipe às 16h em uma sala de conferências.](../../../images/widgets/widgets-calendar-rectangular-watchos-complication@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-rectangular-watchos-complication@2x.png)*

**Smart Stack no Apple Watch**

![Um widget do Calendário no Smart Stack do Apple Watch. Ele exibe uma reunião de equipe às 16h em uma sala de conferências.](../../../images/widgets/widgets-calendar-rectangular-watchos-smart-stack@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-calendar-rectangular-watchos-smart-stack@2x.png)*

Cada aparência descrita acima inclui um [modo de renderização](https://developer.apple.com/design/human-interface-guidelines/widgets#Rendering-modes) que depende da plataforma e dos ajustes de aparência da pessoa:

- O sistema usa o modo de renderização [full color](https://developer.apple.com/documentation/widgetkit/widgetrenderingmode/fullcolor) para widgets de família do sistema em todas as plataformas, para exibir seu widget em cores. Ele não altera a cor das suas visualizações.
- O sistema usa o modo de renderização [accented](https://developer.apple.com/documentation/widgetkit/widgetrenderingmode/accented) para widgets de família do sistema em todas as plataformas e para widgets acessórios no Apple Watch. No modo de renderização accented, o sistema remove o fundo e o substitui por um efeito de cor tingida para uma aparência tingida e por um fundo Liquid Glass para uma aparência transparente. Além disso, ele divide as visualizações do widget em um grupo de destaque e um grupo primário e, em seguida, aplica uma cor sólida a cada grupo.
- O sistema usa o modo de renderização [vibrant](https://developer.apple.com/documentation/widgetkit/widgetrenderingmode/vibrant) para widgets na Tela Bloqueada do iPhone e do iPad e no iPhone no StandBy em condições de pouca luz. Ele dessatura textos, imagens e medidores e cria um efeito vibrante colorindo seu conteúdo de forma adequada ao fundo da Tela Bloqueada ou à mesa do macOS. Observe que as pessoas podem personalizar a Tela Bloqueada com uma cor de matiz, e o sistema aplica um matiz vermelho aos widgets que aparecem no iPhone no StandBy em condições de pouca luz.

A tabela a seguir lista as ocorrências de cada modo de renderização por plataforma:

| Plataforma | Full-color | Accented | Vibrant |
|---|---|---|---|
| iPhone | Tela de Início, visualização Hoje, StandBy e CarPlay (com o fundo removido) | Tela de Início e visualização Hoje | Tela Bloqueada, StandBy em condições de pouca luz |
| iPad | Tela de Início e visualização Hoje | Tela de Início e visualização Hoje | Tela Bloqueada |
| Apple Watch | Smart Stack, complicações | Smart Stack, complicações | Não compatível |
| Mac | Mesa e Central de Notificações | Não compatível | Mesa |
| Apple Vision Pro | Superfícies horizontais e verticais | Superfícies horizontais e verticais | Não compatível |

Para obter orientações adicionais de design, consulte [Modos de renderização](https://developer.apple.com/design/human-interface-guidelines/widgets#Rendering-modes). Para obter orientações para desenvolvedores, consulte [Preparando widgets para plataformas, contextos e aparências adicionais](https://developer.apple.com/documentation/widgetkit/preparing-widgets-for-additional-contexts-and-appearances) e [WidgetRenderingMode](https://developer.apple.com/documentation/widgetkit/widgetrenderingmode).

## Boas práticas

**Escolha ideias simples que se relacionem com a finalidade principal do seu app.** Inclua conteúdo oportuno e funcionalidades relevantes. Por exemplo, as pessoas que usam o app Clima costumam se interessar mais pelas temperaturas máxima e mínima atuais e pelas condições do tempo, por isso os widgets do Clima priorizam essas informações.

![Uma imagem de um widget pequeno do Clima mostrando as condições atuais em Cupertino. Em texto, o widget exibe uma temperatura de 70 graus, a condição Ensolarado e temperaturas máxima e mínima previstas de 75 graus e 59 graus, respectivamente. O widget também exibe um símbolo de sol amarelo acima da palavra Ensolarado e o indicador de localização preenchido à direita da palavra Cupertino.](../../../images/widgets/widgets-ios-weather-small@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-ios-weather-small@2x.png)*

**Procure criar um widget que dê às pessoas acesso rápido ao conteúdo que elas desejam.** As pessoas apreciam widgets que exibem conteúdo significativo e oferecem ações úteis e links diretos para áreas importantes do seu app. Replicar o ícone de um app oferece pouco valor adicional, e as pessoas podem ser menos propensas a mantê-lo em suas telas.

**Prefira informações dinâmicas que mudem ao longo do dia.** Se o conteúdo de um widget nunca parece mudar, as pessoas podem não mantê-lo em uma posição de destaque. Embora os widgets não sejam atualizados a cada minuto, é importante encontrar maneiras de manter seu conteúdo atualizado para convidar a consultas frequentes.

**Busque oportunidades de surpreender e encantar.** Por exemplo, você pode projetar um tratamento visual exclusivo para o seu widget de calendário exibir em ocasiões significativas, como aniversários ou feriados.

**Ofereça widgets em vários tamanhos quando isso agregar valor.** Os widgets pequenos usam seu espaço limitado para normalmente mostrar uma única informação, enquanto os tamanhos maiores oferecem camadas adicionais de informações e ações. Evite expandir o conteúdo de um widget menor apenas para preencher uma área maior. É mais importante criar um widget no tamanho que melhor represente o conteúdo do que oferecê-lo em todos os tamanhos.

**Equilibre a densidade de informações.** Layouts esparsos podem fazer o widget parecer desnecessário, enquanto layouts excessivamente densos são menos fáceis de entender num relance. Crie um layout que forneça as informações essenciais num relance e permita que as pessoas vejam detalhes adicionais olhando por mais tempo. Se seu layout for denso demais, considere melhorar sua clareza usando um tamanho de widget maior ou substituindo texto por gráficos.

**Exiba apenas as informações diretamente relacionadas à finalidade principal do widget.** Em widgets maiores, você pode exibir mais dados — ou visualizações mais detalhadas dos dados —, mas não deve perder de vista a finalidade principal do widget. Por exemplo, todos os widgets do Calendário exibem os próximos eventos de uma pessoa. Em cada tamanho, o widget continua centrado em eventos, ao mesmo tempo que amplia a gama de informações à medida que o tamanho aumenta.

**Use elementos de marca com ponderação.** Incorpore cores, fontes e glifos estilizados da marca para tornar seu widget reconhecível, mas sem sobrepujar informações úteis nem fazer seu widget parecer deslocado. Quando você inclui elementos de marca, as pessoas raramente precisam do seu logotipo ou do ícone do app para reconhecer seu widget. Se o seu widget se beneficia de um pequeno logotipo — por exemplo, se exibe conteúdo de várias fontes —, um pequeno logotipo no canto superior direito é suficiente.

**Escolha entre exibir o conteúdo automaticamente e permitir que as pessoas personalizem as informações exibidas.** Em alguns casos, as pessoas precisam configurar um widget para garantir que ele exiba as informações mais úteis para elas. Por exemplo, o widget de Bolsa permite que as pessoas selecionem as ações que desejam acompanhar. Em contraste, alguns widgets — como o widget de Podcasts — exibem automaticamente conteúdo recente, de modo que as pessoas não precisam personalizá-los. Para obter orientações para desenvolvedores, consulte [Criando um widget configurável](https://developer.apple.com/documentation/widgetkit/making-a-configurable-widget).

**Evite espelhar a aparência do seu widget dentro do seu app.** Incluir no seu app um elemento que se pareça com o seu widget, mas não se comporte como ele, pode confundir as pessoas. Além disso, as pessoas podem ser menos propensas a tentar outras maneiras de interagir com esse elemento no seu app, porque esperam que ele se comporte como um widget.

**Informe às pessoas quando a autenticação agregar valor.** Se seu widget oferece funcionalidades adicionais quando alguém está conectado ao seu app, certifique-se de que as pessoas saibam disso. Por exemplo, um app que mostra as próximas reservas pode incluir uma mensagem como “Faça login para ver as reservas” quando as pessoas estiverem desconectadas.

### Atualização do conteúdo do widget

Para continuarem relevantes e úteis, os widgets atualizam suas informações periodicamente, mas não oferecem suporte a atualizações contínuas em tempo real, e o sistema pode ajustar os limites de atualização dependendo de vários fatores.

**Mantenha seu widget atualizado.** Encontrar a frequência de atualização adequada para o seu widget depende de saber com que frequência os dados mudam e de estimar quando as pessoas precisam ver dados novos. Por exemplo, um widget que fornece informações sobre as condições da maré em uma praia é útil se for atualizado de hora em hora, mesmo que as condições mudem constantemente. Se as pessoas provavelmente consultarão seu widget com mais frequência do que você consegue atualizá-lo, considere exibir um texto que descreva quando os dados foram atualizados pela última vez.

**Use as funcionalidades do sistema para atualizar datas e horários no seu widget.** Como a frequência de atualização dos widgets é limitada, deixe que o sistema atualize automaticamente as informações de data e hora para preservar as oportunidades de atualização. Determine a frequência de atualização que se ajusta aos dados que você exibe e mostre o conteúdo rapidamente, sem esconder dados desatualizados atrás de conteúdo de espaço reservado. Para obter orientações para desenvolvedores sobre atualizações de widgets, consulte [Mantendo um widget atualizado](https://developer.apple.com/documentation/widgetkit/keeping-a-widget-up-to-date).

**Use transições animadas para chamar a atenção para atualizações de dados.** Por padrão, muitas visualizações do SwiftUI animam as atualizações de conteúdo. Além disso, use animações padrão e personalizadas com duração de até dois segundos para informar às pessoas quando novas informações estão disponíveis ou quando o conteúdo é exibido de maneira diferente. Para obter orientações para desenvolvedores, consulte [Animando atualizações de dados em widgets e Live Activities](https://developer.apple.com/documentation/widgetkit/animating-data-updates-in-widgets-and-live-activities).

### Adição de interatividade

As pessoas tocam ou clicam em um widget para abrir o app correspondente. Ele também pode incluir botões e interruptores para oferecer funcionalidades adicionais sem abrir o app. Por exemplo, o widget de Lembretes inclui interruptores para marcar uma tarefa como concluída. Quando as pessoas interagem com seu widget em áreas que não são botões nem interruptores, a interação abre seu app.

![Uma imagem do widget grande de Lembretes com um interruptor para cada tarefa. Nenhuma das tarefas está concluída.](../../../images/widgets/widgets-reminders-large-unselected@2x.png) ![Uma imagem do widget grande de Lembretes com um interruptor para cada tarefa. Nenhuma das tarefas está concluída. (escuro)](../../../images/widgets/widgets-reminders-large-unselected~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-reminders-large-unselected@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-reminders-large-unselected~dark@2x.png)*

![Uma imagem do widget grande de Lembretes com um interruptor para cada tarefa. Os interruptores do primeiro e do terceiro itens da lista indicam que essas tarefas estão concluídas.](../../../images/widgets/widgets-reminders-large-selected@2x.png) ![Uma imagem do widget grande de Lembretes com um interruptor para cada tarefa. Os interruptores do primeiro e do terceiro itens da lista indicam que essas tarefas estão concluídas. (escuro)](../../../images/widgets/widgets-reminders-large-selected~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-reminders-large-selected@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-reminders-large-selected~dark@2x.png)*

**Ofereça funcionalidades simples e relevantes e reserve a complexidade para o seu app.** Widgets úteis oferecem uma maneira fácil de concluir uma tarefa ou ação diretamente relacionada ao seu conteúdo.

**Garanta que uma interação com o widget abra seu app no local certo.** Crie links diretos para detalhes e ações que se relacionem diretamente com o conteúdo do widget, e não faça as pessoas navegarem até a área relevante no app. Por exemplo, quando as pessoas clicam ou tocam em um widget médio de Bolsa, o app Bolsa abre em uma página que exibe informações sobre o símbolo.

![Uma imagem de um widget médio de lista de acompanhamento de Bolsa, listando dois índices do mercado de ações e um símbolo de ação. Cada linha exibe o nome do índice ou símbolo à esquerda, uma seção de gráfico no meio e uma cotação atual, incluindo a variação de valor, à direita.](../../../images/widgets/widgets-stocks-medium@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-stocks-medium@2x.png)*

**Ofereça interatividade sem perder a leitura rápida e a limpeza visual.** Vários alvos de interação — links, botões e interruptores do SwiftUI — podem fazer sentido para o seu conteúdo, mas evite criar layouts semelhantes aos de um app nos seus widgets. Preste atenção ao tamanho dos alvos e garanta que as pessoas possam tocar ou clicar neles com confiança e sem realizar acidentalmente interações não intencionais. Observe que os widgets acessórios em linha oferecem apenas um alvo de toque.

### Escolha de margens e espaçamento

Os widgets são dimensionados para se adaptar aos tamanhos de tela de diferentes dispositivos e áreas da tela. Forneça conteúdo em tamanhos adequados para garantir que seu widget tenha ótima aparência em todos os dispositivos e deixe que o sistema o redimensione ou escale conforme necessário. No iOS, o sistema garante que seu widget tenha boa aparência em dispositivos pequenos redimensionando o conteúdo que você projeta para dispositivos grandes. No iPadOS, o sistema renderiza seu widget em um tamanho grande antes de reduzi-lo para exibição na Tela de Início.

Ao projetar para vários dispositivos e fatores de escala, use os valores listados em [Especificações](https://developer.apple.com/design/human-interface-guidelines/widgets#Specifications) e nos [Apple Design Resources](https://developer.apple.com/design/resources/) como referência; para o seu widget de produção, use o [SwiftUI](https://developer.apple.com/documentation/swiftui) para garantir flexibilidade.

**Em geral, use margens padrão para garantir a legibilidade.** Use a largura de margem padrão para widgets — 16 pontos para a maioria dos widgets — para evitar apertar as bordas e criar uma aparência desorganizada. Se precisar usar margens mais estreitas — por exemplo, para criar agrupamentos de conteúdo para gráficos, botões ou formas de fundo —, definir margens de 11 pontos pode funcionar bem. Além disso, observe que os widgets usam margens menores na mesa do Mac e na Tela Bloqueada, inclusive no StandBy. Para obter orientações para desenvolvedores, consulte [padding(_:_:)](https://developer.apple.com/documentation/swiftui/view/padding(_:_:)).

**Coordene o raio dos cantos do seu conteúdo com o raio dos cantos do widget.** Para garantir que seu conteúdo tenha boa aparência dentro dos cantos arredondados de um widget, use um contêiner do SwiftUI para aplicar o raio de canto correto. Para obter orientações para desenvolvedores, consulte [ContainerRelativeShape](https://developer.apple.com/documentation/swiftui/containerrelativeshape).

### Exibição de texto em widgets

**Prefira usar a fonte do sistema, os estilos de texto e os SF Symbols.** Usar a fonte do sistema ajuda seu widget a parecer natural em qualquer plataforma, além de facilitar a exibição de textos bonitos em uma variedade de pesos, estilos e tamanhos. Use SF Symbols para alinhar e dimensionar símbolos com texto que usa a fonte do sistema. Se usar uma fonte personalizada, faça-o com moderação e garanta que seja fácil de ler num relance. Muitas vezes funciona bem usar uma fonte personalizada para o texto grande de um widget e a SF Pro para o texto menor. Para obter orientações, consulte [Tipografia](https://developer.apple.com/design/human-interface-guidelines/typography) e [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols).

**Evite tamanhos de fonte muito pequenos.** Em geral, exiba texto com fontes de 11 pontos ou maiores. Texto em uma fonte menor que 11 pontos pode ser difícil demais de ler para muitas pessoas.

**Evite rasterizar texto.** Use sempre elementos e estilos de texto para garantir que seu texto seja dimensionado corretamente e para permitir que o VoiceOver fale seu conteúdo.

> **Observação:** No iOS, iPadOS e visionOS, os widgets oferecem suporte aos tamanhos do Dynamic Type de Large a AX5 quando você usa [Font](https://developer.apple.com/documentation/swiftui/font) para escolher uma fonte do sistema ou [custom(_:size:)](https://developer.apple.com/documentation/swiftui/font/custom(_:size:)) para escolher uma fonte personalizada. Para mais informações sobre os tamanhos do Dynamic Type, consulte [Suporte ao Dynamic Type](https://developer.apple.com/design/human-interface-guidelines/typography#Supporting-Dynamic-Type).

### Uso de cor

**Use a cor para realçar a aparência de um widget sem competir com seu conteúdo.** Cores bonitas atraem o olhar, mas funcionam melhor quando não impedem as pessoas de absorver as informações de um widget num relance. No seu catálogo de recursos, você também pode especificar as cores que deseja que o sistema use ao gerar a interface do modo de edição do seu widget.

**Transmita significado sem depender de cores específicas para representar informações.** Os widgets podem aparecer em monocromático (com ou sem uma cor de matiz personalizada) e, no watchOS, o sistema pode inverter as cores dependendo do mostrador escolhido pela pessoa. Use texto e iconografia além da cor para expressar significado.

**Use imagens em cores com critério.** Quando uma pessoa escolhe uma aparência tingida ou transparente para seus widgets, o sistema dessatura, por padrão, as imagens em cores. Você pode optar por renderizar imagens em cores, mesmo quando uma pessoa escolhe uma aparência de widget tingida ou transparente. No entanto, imagens em cores nessas aparências chamam atenção especial para o widget, o que pode fazer parecer que ele não pertence à plataforma. Por exemplo, uma imagem em cores em um widget pode parecer deslocada quando uma pessoa escolhe uma aparência de widget transparente. Considere reservar as imagens em cores para representar conteúdo de mídia, como a capa de álbum no widget de um app de música, e use imagens em cores com dimensões menores que o tamanho do widget.

## Modos de renderização

### Full-color

**Ofereça suporte às aparências clara e escura.** Prefira fundos claros para a aparência clara e fundos escuros para a aparência escura e considere usar as cores semânticas do sistema para texto e fundos, para que as cores se adaptem dinamicamente à aparência atual. Você também pode oferecer suporte a diferentes aparências colocando variantes de cor no seu catálogo de recursos. Para obter orientações, consulte [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode); para obter orientações para desenvolvedores, consulte [Gerenciamento de recursos](https://developer.apple.com/documentation/xcode/asset-management) e [Oferecendo suporte ao Dark Mode na sua interface](https://developer.apple.com/documentation/uikit/supporting-dark-mode-in-your-interface).

![Uma imagem do widget pequeno do app Notas. Abaixo da barra amarela que contém o ícone e o nome do app, o widget exibe uma única nota em texto preto sobre um fundo branco.](../../../images/widgets/widgets-notes-light-appearance@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-notes-light-appearance@2x.png)*

![Uma imagem do widget pequeno do app Notas. Abaixo da barra amarela que contém o ícone e o nome do app, o widget exibe uma única nota em texto branco sobre um fundo preto.](../../../images/widgets/widgets-notes-dark-appearance@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-notes-dark-appearance@2x.png)*

### Accented

**Agrupe os componentes do widget em um grupo de destaque e um grupo primário.** O modo de renderização accented divide a hierarquia de visualizações do widget em um grupo de destaque e um grupo primário. No iPhone, iPad e Mac, o sistema tinge de branco o conteúdo primário e o de destaque. No Apple Watch, o sistema tinge de branco o conteúdo primário e tinge o conteúdo de destaque com a cor do mostrador.

Para obter orientações para desenvolvedores, consulte [widgetAccentable(_:)](https://developer.apple.com/documentation/swiftui/view/widgetaccentable(_:)) e [Otimizando seu widget para o modo de renderização accented e o Liquid Glass](https://developer.apple.com/documentation/widgetkit/optimizing-your-widget-for-accented-rendering-mode-and-liquid-glass).

### Vibrant

**Ofereça contraste suficiente para garantir a legibilidade.** No modo de renderização vibrant, a opacidade dos pixels de uma imagem determina a intensidade do efeito de material de fundo desfocado. Pixels totalmente transparentes deixam o material de fundo passar como está. O brilho dos pixels determina o quão vibrantes eles aparecem na Tela Bloqueada. Valores de cinza mais claros oferecem mais contraste, e valores mais escuros oferecem menos contraste.

**Crie recursos otimizados para obter o melhor efeito vibrant.** Renderize conteúdo como imagens, números e texto com opacidade total. Use branco ou cinza-claro para o conteúdo mais proeminente e valores de escala de cinza mais escuros para elementos secundários, a fim de estabelecer hierarquia. Confirme que o conteúdo das imagens tem contraste suficiente em escala de cinza e use valores de cinza opacos, em vez de opacidades de branco, para obter o melhor efeito de material vibrant.

## Pré-visualizações e espaços reservados

**Projete uma pré-visualização realista para exibir na galeria de widgets.** Destacar os recursos do seu widget — e representar claramente as experiências que cada tipo ou tamanho de widget pode oferecer — ajuda as pessoas a tomar uma decisão informada. Você pode exibir dados reais na pré-visualização do widget, mas, se os dados demorarem demais para serem gerados ou carregados, exiba dados simulados realistas.

**Projete conteúdo de espaço reservado que ajude as pessoas a reconhecer seu widget.** Um widget instalado exibe conteúdo de espaço reservado enquanto seus dados são carregados. Crie uma aparência eficaz de espaço reservado combinando componentes de interface estáticos com formas semiopacas que representem o conteúdo dinâmico. Por exemplo, use retângulos de larguras diferentes para sugerir linhas de texto e círculos ou quadrados no lugar de glifos e imagens.

![Uma imagem de um widget pequeno do app Dicas que exibe conteúdo de espaço reservado sobre um fundo amarelo. Na metade inferior do widget, três barras horizontais em diferentes tons de amarelo representam linhas de texto.](../../../images/widgets/widgets-tips-placeholder-content@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-tips-placeholder-content@2x.png)*

![Uma imagem de um widget pequeno do app Dicas que exibe dados reais sobre um fundo amarelo. As barras horizontais do widget de espaço reservado são substituídas por três linhas curtas de texto em diferentes tons de amarelo.](../../../images/widgets/widgets-tips-full-content@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-tips-full-content@2x.png)*

**Escreva uma descrição de widget sucinta.** A galeria de widgets exibe descrições que ajudam as pessoas a entender o que cada widget faz. Comece uma descrição com um verbo de ação — por exemplo, “Veja as condições do tempo atuais e a previsão para um local” ou “Acompanhe seus próximos eventos e reuniões”. Evite incluir expressões desnecessárias que façam referência ao próprio widget, como “Este widget mostra…”, “Use este widget para…” ou “Adicione este widget”. Use uma linguagem acessível e [capitalização no estilo de frase](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64).

**Agrupe os tamanhos do seu widget e forneça uma única descrição.** Se seu widget está disponível em vários tamanhos, agrupe-os para que as pessoas não pensem que cada tamanho é um widget diferente. Forneça uma única descrição do seu widget — independentemente de quantos tamanhos você ofereça — para evitar repetição e ajudar as pessoas a entender como cada tamanho oferece uma perspectiva ligeiramente diferente sobre o mesmo conteúdo e as mesmas funcionalidades.

**Considere colorir o botão Adicionar.** Depois que as pessoas escolhem seu app na galeria de widgets, um botão Adicionar aparece abaixo do grupo de widgets que você oferece. Você pode especificar uma cor para esse botão para ajudar a lembrar as pessoas da sua marca.

![Uma ilustração que representa a galeria de widgets aberta no widget pequeno do app Notas. Abaixo do widget há um controle de página mostrando que esta é a primeira de seis páginas; abaixo do controle de página há um botão que usa a cor de destaque amarela do app Notas.](../../../images/widgets/widgets-add-button-tint-color-notes@2x.png) ![Uma ilustração que representa a galeria de widgets aberta no widget pequeno do app Notas. Abaixo do widget há um controle de página mostrando que esta é a primeira de seis páginas; abaixo do controle de página há um botão que usa a cor de destaque amarela do app Notas. (escuro)](../../../images/widgets/widgets-add-button-tint-color-notes~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-add-button-tint-color-notes@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-add-button-tint-color-notes~dark@2x.png)*

![Uma ilustração que representa a galeria de widgets aberta no widget pequeno do app Clima. Abaixo do widget há um controle de página mostrando que esta é a primeira de seis páginas; abaixo do controle de página há um botão que usa a cor de destaque azul do app Clima.](../../../images/widgets/widgets-add-button-tint-color-weather@2x.png) ![Uma ilustração que representa a galeria de widgets aberta no widget pequeno do app Clima. Abaixo do widget há um controle de página mostrando que esta é a primeira de seis páginas; abaixo do controle de página há um botão que usa a cor de destaque azul do app Clima. (escuro)](../../../images/widgets/widgets-add-button-tint-color-weather~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-add-button-tint-color-weather@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-add-button-tint-color-weather~dark@2x.png)*

## Considerações por plataforma

*Nenhuma consideração adicional para o macOS. Não compatível com tvOS.*

### iOS, iPadOS

Os widgets na Tela Bloqueada são funcionalmente semelhantes às complicações do relógio e seguem os princípios de design de [Complicações](https://developer.apple.com/design/human-interface-guidelines/complications), além dos princípios de design para widgets. Forneça informações úteis no seu widget da Tela Bloqueada e não o trate apenas como uma maneira adicional de as pessoas abrirem seu app. Em muitos casos, um design para complicações também funciona bem para widgets na Tela Bloqueada (e vice-versa), portanto considere criá-los em conjunto.

Seu app pode oferecer widgets na Tela Bloqueada em três formatos diferentes: como texto em linha que aparece acima do relógio e como formatos circulares e retangulares que aparecem abaixo do relógio.

![Uma captura de tela parcial da Tela Bloqueada do iPhone que mostra um widget do Calendário e dois widgets do Clima abaixo da hora. Da esquerda para a direita, os widgets são um widget de texto em linha e dois widgets circulares.](../../../images/widgets/widget-lock-screen-display-appearances@2x.png) ![Uma captura de tela parcial da Tela Bloqueada do iPhone que mostra um widget do Calendário e dois widgets do Clima abaixo da hora. Da esquerda para a direita, os widgets são um widget de texto em linha e dois widgets circulares. (escuro)](../../../images/widgets/widget-lock-screen-display-appearances~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widget-lock-screen-display-appearances@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/widget-lock-screen-display-appearances~dark@2x.png)*

**Ofereça suporte ao display Sempre Ativo no iPhone.** Dispositivos com o display Sempre Ativo renderizam os widgets na Tela Bloqueada com luminância reduzida. Use níveis de cinza que ofereçam contraste suficiente no display Sempre Ativo e garanta que seu conteúdo continue legível.

Para obter orientações para desenvolvedores, consulte [Criando widgets acessórios e complicações do relógio](https://developer.apple.com/documentation/widgetkit/creating-accessory-widgets-and-watch-complications).

**Ofereça Live Activities para mostrar atualizações em tempo real.** Os widgets não mostram informações em tempo real. Se seu app permite que as pessoas acompanhem o andamento de uma tarefa ou de um evento por um período limitado, com atualizações frequentes, considere oferecer Live Activities. Os widgets e as Live Activities usam os mesmos frameworks subjacentes e compartilham semelhanças de design. Por isso, pode ser uma boa ideia desenvolver widgets e Live Activities em conjunto e reutilizar código e componentes de design nos dois recursos. Para obter orientações de design sobre Live Activities, consulte [Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities); para obter orientações para desenvolvedores, consulte [ActivityKit](https://developer.apple.com/documentation/activitykit).

#### StandBy e CarPlay

No iPhone no StandBy, o sistema exibe dois widgets pequenos de família do sistema lado a lado, ampliados para preencher a Tela Bloqueada. Ao oferecer suporte ao StandBy, você também garante que seus widgets funcionem bem no CarPlay. Os widgets do CarPlay e do StandBy usam o widget pequeno de família do sistema com o fundo removido e ampliado para se ajustar da melhor forma à grade da tela de Widgets. Informações de leitura rápida e texto grande são especialmente importantes no CarPlay para tornar seu widget fácil de ler na tela de um carro.

**Limite o uso de imagens ricas ou de cor para transmitir significado no StandBy.** Em vez disso, aproveite o espaço adicional ampliando e reorganizando o texto para que as pessoas possam ver o conteúdo do widget de uma distância maior. Para se misturar perfeitamente ao fundo preto, não use cores de fundo no seu widget quando ele aparecer no StandBy.

**Uso correto**

![Uma imagem do iPhone no StandBy. Ela mostra, à esquerda, um widget do Relógio que exibe a hora como 9:41 e, à direita, um widget do Clima configurado para Cupertino com a temperatura de 70 graus Fahrenheit.](../../../images/widgets/widgets-standby-removed-background-correct@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-standby-removed-background-correct@2x.png)*

![Uma marca de verificação dentro de um círculo para indicar o uso correto.](../../../images/widgets/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Uso incorreto**

![Uma imagem do iPhone no StandBy. Ela mostra, à esquerda, um widget do Relógio que exibe a hora como 9:41 e, à direita, um widget do Clima configurado para Cupertino com a temperatura de 70 graus Fahrenheit. O widget do Relógio aparece com o fundo removido e o widget do Clima não está otimizado para o StandBy.](../../../images/widgets/widgets-standby-with-background-incorrect@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-standby-with-background-incorrect@2x.png)*

![Um X dentro de um círculo para indicar o uso incorreto.](../../../images/widgets/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

Para obter orientações para desenvolvedores, consulte [Exibindo o fundo de widget correto](https://developer.apple.com/documentation/widgetkit/displaying-the-right-widget-background).

No iPhone no StandBy em condições de pouca luz, o sistema renderiza os widgets com um visual monocromático com matiz vermelho.

![Uma imagem do iPhone em condições de pouca luz. Ela mostra, à esquerda, um widget do Relógio que exibe a hora como 9:41 e, à direita, um widget do Clima configurado para Cupertino com a temperatura de 70 graus Fahrenheit.](../../../images/widgets/widgets-standby-low-light@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-standby-low-light@2x.png)*

### visionOS

Os widgets no visionOS são objetos 3D que as pessoas posicionam em uma superfície horizontal ou vertical. Quando uma pessoa posiciona um widget em uma superfície, ele permanece nesse local mesmo quando a pessoa desliga e liga o Apple Vision Pro novamente. Os widgets têm uma escala consistente, do mundo real. Seu tamanho, *estilo de montagem* e *estilo de tratamento* influenciam a maneira como uma pessoa os percebe.

Os widgets do visionOS aparecem em cores por padrão, mas aparecem no modo de renderização accented quando as pessoas os personalizam com cores de matiz usando uma série de paletas de cores fornecidas pelo sistema. Além disso, as pessoas podem personalizar a largura da moldura dos widgets que usam o estilo de montagem elevated e opções personalizadas exclusivas do widget. Por exemplo, o visionOS não oferece aparências clara ou escura em todo o sistema. No entanto, o widget de pôster do app Música oferece sua própria opção de personalização, que permite às pessoas escolher entre um tema claro e um escuro que o app gera a partir da capa do álbum exibida.

Para obter orientações para desenvolvedores, consulte [Atualizando seus widgets para o visionOS](https://developer.apple.com/documentation/widgetkit/updating-your-widgets-for-visionos).

**Adapte seu design e conteúdo à experiência espacial que o Apple Vision Pro oferece.** No visionOS, os widgets não flutuam isolados, mas fazem parte de salas de estar, cozinhas, escritórios e outros ambientes. Considere esse contexto desde cedo e pense nos widgets como parte do entorno de alguém ao levar seus widgets existentes para o visionOS ou projetá-los do zero. Por exemplo, o widget do app Música se adapta a uma aparência semelhante a um pôster, de leitura rápida mesmo a distância, com tipografia grande e uma imagem de alta resolução, e um app de produtividade pode oferecer um widget pequeno que caiba facilmente em uma escrivaninha.

**Teste seus widgets em toda a gama de paletas de cores do sistema e em diferentes condições de iluminação.** Garanta que o tom, o contraste e a legibilidade do seu widget permaneçam consistentes e intencionais. Se você optar por excluir elementos de interface do tingimento, teste seu widget em cada paleta de cores de matiz fornecida para garantir que os elementos não tingidos permaneçam legíveis quando uma pessoa personalizar seus widgets com cores de matiz.

#### Limiares e tamanhos

Os widgets no Apple Vision Pro podem se adaptar com base na proximidade de uma pessoa, e o visionOS oferece aos widgets dois limiares principais para os quais projetar: o limiar [simplified](https://developer.apple.com/documentation/widgetkit/levelofdetail/simplified), para quando uma pessoa vê um widget à distância, e o limiar [default](https://developer.apple.com/documentation/widgetkit/levelofdetail/default), para quando uma pessoa o vê de perto.

![Uma imagem de espaço reservado mostrando um widget visto à distância no visionOS.](../../../images/widgets/widgets-extra-large-portrait-far-proximity@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-extra-large-portrait-far-proximity@2x.png)*

![Uma imagem de espaço reservado mostrando um widget visto de perto no visionOS.](../../../images/widgets/widgets-extra-large-portrait-close-proximity@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/widgets-extra-large-portrait-close-proximity@2x.png)*

Como os widgets podem aparecer em todo o ambiente de uma pessoa, também é importante adequar o tamanho de um widget ao tipo de conteúdo que ele contém e estar ciente de como ele aparece a várias distâncias.

**Projete um layout responsivo que mostre o nível certo de detalhe para cada um dos dois limiares.** Quando uma pessoa vê o widget à distância, exiba uma versão simplificada do seu widget que mostre menos detalhes e tenha um tamanho de texto maior, e remova elementos interativos como botões ou interruptores. Quando uma pessoa vê o widget de perto, mostre mais detalhes e use um tamanho de texto menor. Para criar uma experiência suave e consistente e ajudar o layout a parecer contínuo, mantenha elementos compartilhados nos dois limiares de distância.

**Ofereça tamanhos de família de widgets que se ajustem bem ao entorno da pessoa.** Os widgets correspondem a dimensões do mundo real e têm presença permanente no ambiente espacial de uma pessoa. Pense em onde as pessoas podem posicionar seu widget — fixado em uma parede, sobre um aparador ou ao lado de um posto de trabalho — e escolha um tamanho de família de widget adequado a esse contexto. Por exemplo, ofereça um widget pequeno do sistema com conteúdo que as pessoas possam colocar em uma escrivaninha ou um widget extragrande para permitir que as pessoas decorem seu entorno com algo visualmente rico, como uma obra de arte ou uma fotografia.

**Exiba o conteúdo de uma maneira que continue legível a várias distâncias.** Para fazer um widget parecer intencional e proporcional ao local onde o posicionam, as pessoas podem dimensionar um widget de 75 a 125 por cento do tamanho. Use princípios de design impresso, como hierarquia clara, tipografia forte e escala, para garantir que seu conteúdo permaneça de leitura rápida. Inclua recursos de alta resolução que fiquem bonitos ao serem ampliados para qualquer tamanho.

#### Estilos de montagem

A maneira como um widget aparece em uma superfície tem grande influência em como uma pessoa o percebe. Para fazê-lo parecer intencional e integrado ao seu entorno, as pessoas posicionam um widget nas superfícies em estilos de montagem distintos.

- **Estilo [elevated](https://developer.apple.com/documentation/widgetkit/widgetmountingstyle/elevated)**. Em superfícies horizontais — por exemplo, em uma escrivaninha —, o widget sempre aparece elevado e levemente inclinado para trás, proporcionando um ângulo sutil que melhora a legibilidade, e projeta uma sombra suave que ajuda a fazê-lo parecer apoiado na superfície. Em superfícies verticais — por exemplo, em uma parede —, o widget também aparece elevado, assentado rente à superfície, de maneira semelhante a como se fixa um porta-retratos.
- **Estilo [recessed](https://developer.apple.com/documentation/widgetkit/widgetmountingstyle/recessed)**. Em superfícies verticais — por exemplo, em uma parede —, o widget pode aparecer embutido, com o conteúdo recuado para dentro da superfície, criando um efeito de profundidade que dá a ilusão de um recorte na superfície. As superfícies horizontais não usam o estilo de montagem recessed.

Por padrão, os widgets usam o estilo de montagem elevated, porque ele funciona para superfícies horizontais e verticais.

**Escolha o estilo de montagem que se adapte ao seu conteúdo e à experiência que você deseja criar.** Por padrão, os widgets do visionOS usam o estilo de montagem elevated, que é ideal para conteúdo que você quer destacar e fazer sentir presente, como lembretes, mídia ou dados de leitura rápida. Os widgets recessed são ideais para conteúdo imersivo ou ambiente, como clima ou conteúdo editorial, e as pessoas só podem posicioná-los em uma superfície vertical. Se um estilo não for adequado ao seu widget, você pode optar por não oferecê-lo para cada widget. Se você optar por oferecer suporte apenas ao estilo de montagem recessed, as pessoas não poderão posicionar o widget em uma superfície horizontal. Por exemplo, um app de clima pode oferecer suporte apenas ao estilo de montagem recessed, para dar a ilusão de olhar através de uma janela, em seus widgets grande e extragrande de família do sistema, e oferecer suporte apenas ao estilo elevated em seu widget pequeno de família do sistema.

> **Nota para desenvolvedores:** Use a propriedade [supportedMountingStyles(_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/supportedmountingstyles(_:)) da sua [WidgetConfiguration](https://developer.apple.com/documentation/swiftui/widgetconfiguration) para declarar os estilos de montagem compatíveis — elevated, recessed ou ambos — para todos os widgets incluídos na configuração. Para oferecer um widget que oferece suporte a apenas um estilo de montagem e outros widgets que oferecem suporte a ambos, crie configurações de widget separadas. Por exemplo, crie uma configuração de widget para o widget que oferece suporte apenas ao estilo de montagem recessed e uma segunda configuração para os widgets que oferecem suporte aos dois estilos de montagem.

**Teste seus designs de widget elevated com cada largura de moldura fornecida pelo sistema.** As pessoas podem escolher entre diferentes larguras de moldura definidas pelo sistema para widgets que usam o estilo de montagem elevated. Você não pode alterar seu layout com base na largura de moldura que uma pessoa escolhe, portanto garanta que o layout do seu widget permaneça visualmente equilibrado em cada largura de moldura.

#### Estilos de tratamento

Além do tamanho e do estilo de montagem, o sistema aplica um de dois estilos de tratamento aos widgets do visionOS. Escolher o tratamento certo para seu widget ajuda a reforçar a experiência que você deseja criar.

- O estilo [paper](https://developer.apple.com/documentation/widgetkit/widgettexture/paper) cria um estilo mais firme, semelhante ao impresso, que parece sólido e faz o widget parecer parte do seu entorno. Quando as condições de iluminação mudam, os widgets no estilo paper ficam mais escuros ou mais claros em resposta.
- O estilo [glass](https://developer.apple.com/documentation/widgetkit/widgettexture/glass) cria um visual mais leve e em camadas, que acrescenta profundidade e separação visual entre os elementos de primeiro plano e de fundo para enfatizar clareza e contraste. Os elementos de primeiro plano permanecem sempre brilhantes e legíveis e não escurecem nem clareiam, mesmo quando a luz ambiente muda.

**Escolha o estilo paper para um visual semelhante ao impresso, que lembre mais um objeto real no ambiente.** O widget inteiro responde à iluminação ambiente e se mistura naturalmente ao entorno. Por exemplo, o widget de pôster do app Música usa o estilo paper para exibir álbuns e playlists como obras de arte emolduradas em uma parede.

**Escolha o estilo glass para widgets ricos em informações.** O glass separa visualmente os elementos de primeiro plano e de fundo, permitindo que você decida quais partes da sua interface se adaptam ao entorno e quais permanecem visualmente consistentes. Os elementos de primeiro plano aparecem em cores, sem serem afetados pela iluminação ambiente, para garantir que o conteúdo importante permaneça nítido e legível. Por exemplo, um widget do app News aparece com imagens editoriais ao fundo, com um visual suave, semelhante ao impresso. Suas manchetes permanecem em primeiro plano, nítidas e fáceis de ler.

### watchOS

**Forneça um fundo colorido que transmita significado.** Por padrão, os widgets no Smart Stack usam um fundo preto. Considere usar uma cor de fundo personalizada que ofereça significado adicional. Por exemplo, o app Bolsa usa um fundo vermelho para ações em queda e um fundo verde se o valor de uma ação sobe.

**Incentive o sistema a exibir ou elevar a posição do seu widget do watchOS no Smart Stack.** As informações de relevância ajudam o sistema a mostrar seu widget quando as pessoas mais precisam dele. A relevância pode ser baseada na localização ou específica de ações em andamento no sistema, como um treino. Para obter orientações para desenvolvedores, consulte [RelevanceKit](https://developer.apple.com/documentation/relevancekit).

## Especificações

Ao projetar seus widgets, use os valores a seguir como referência.

### Dimensões do iOS

| Tamanho da tela (vertical, pt) | Pequeno (pt) | Médio (pt) | Grande (pt) | Circular (pt) | Retangular (pt) | Em linha (pt) |
|---|---|---|---|---|---|---|
| 430×932 | 170x170 | 364x170 | 364x382 | 76x76 | 172x76 | 257x26 |
| 428x926 | 170x170 | 364x170 | 364x382 | 76x76 | 172x76 | 257x26 |
| 414x896 | 169x169 | 360x169 | 360x379 | 76x76 | 160x72 | 248x26 |
| 414x736 | 159x159 | 348x157 | 348x357 | 76x76 | 170x76 | 248x26 |
| 393x852 | 158x158 | 338x158 | 338x354 | 72x72 | 160x72 | 234x26 |
| 390x844 | 158x158 | 338x158 | 338x354 | 72x72 | 160x72 | 234x26 |
| 375x812 | 155x155 | 329x155 | 329x345 | 72x72 | 157x72 | 225x26 |
| 375x667 | 148x148 | 321x148 | 321x324 | 68x68 | 153x68 | 225x26 |
| 360x780 | 155x155 | 329x155 | 329x345 | 72x72 | 157x72 | 225x26 |
| 320x568 | 141x141 | 292x141 | 292x311 | N/D | N/D | N/D |

### Dimensões do iPadOS

| Tamanho da tela (vertical, pt) | Destino | Pequeno (pt) | Médio (pt) | Grande (pt) | Extragrande (pt) |
|---|---|---|---|---|---|
| 768x1024 | Canvas | 141x141 | 305.5x141 | 305.5x305.5 | 634.5x305.5 |
|  | Dispositivo | 120x120 | 260x120 | 260x260 | 540x260 |
| 744x1133 | Canvas | 141x141 | 305.5x141 | 305.5x305.5 | 634.5x305.5 |
|  | Dispositivo | 120x120 | 260x120 | 260x260 | 540x260 |
| 810x1080 | Canvas | 146x146 | 320.5x146 | 320.5x320.5 | 669x320.5 |
|  | Dispositivo | 124x124 | 272x124 | 272x272 | 568x272 |
| 820x1180 | Canvas | 155x155 | 342x155 | 342x342 | 715.5x342 |
|  | Dispositivo | 136x136 | 300x136 | 300x300 | 628x300 |
| 834x1112 | Canvas | 150x150 | 327.5x150 | 327.5x327.5 | 682x327.5 |
|  | Dispositivo | 132x132 | 288x132 | 288x288 | 600x288 |
| 834x1194 | Canvas | 155x155 | 342x155 | 342x342 | 715.5x342 |
|  | Dispositivo | 136x136 | 300x136 | 300x300 | 628x300 |
| 954x1373 * | Canvas | 162x162 | 350x162 | 350x350 | 726x350 |
|  | Dispositivo | 162x162 | 350x162 | 350x350 | 726x350 |
| 970x1389 * | Canvas | 162x162 | 350x162 | 350x350 | 726x350 |
|  | Dispositivo | 162x162 | 350x162 | 350x350 | 726x350 |
| 1024x1366 | Canvas | 170x170 | 378.5x170 | 378.5x378.5 | 795x378.5 |
|  | Dispositivo | 160x160 | 356x160 | 356x356 | 748x356 |
| 1192x1590 * | Canvas | 188x188 | 412x188 | 412x412 | 860x412 |
|  | Dispositivo | 188x188 | 412x188 | 412x412 | 860x412 |

\* Quando o Zoom da Tela está definido como Mais Espaço.

### Dimensões do visionOS

| Widget | Tamanho em pt | Tamanho em mm (dimensionado a 100%) |
|---|---|---|
| Pequeno | 158x158 | 268x268 |
| Médio | 338x158 | 574x268 |
| Grande | 338x354 | 574x600 |
| Extragrande | 450x338 | 763x574 |
| Extragrande vertical | 338x450 | 574x763 |

### Dimensões do watchOS

| Tamanho do Apple Watch | Tamanho de um widget no Smart Stack (pt) |
|---|---|
| 40mm | 152x69.5 |
| 41mm | 165x72.5 |
| 44mm | 173x76.5 |
| 45mm | 184x80.5 |
| 49mm | 191x81.5 |

## Recursos

#### Relacionados

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Documentação para desenvolvedores

[WidgetKit](https://developer.apple.com/documentation/widgetkit)

[Desenvolvendo uma estratégia para o WidgetKit](https://developer.apple.com/documentation/widgetkit/developing-a-widgetkit-strategy) — WidgetKit

#### Vídeos

- [Fundamentos do WidgetKit](https://developer.apple.com/videos/play/wwdc2026/277)
- [Novidades em widgets](https://developer.apple.com/videos/play/wwdc2025/278)
- [Projete widgets para visionOS](https://developer.apple.com/videos/play/wwdc2025/255)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 16 de dezembro de 2025 | Orientações atualizadas para todas as plataformas e adicionadas orientações para visionOS e CarPlay. |
| 17 de janeiro de 2025 | Dimensões dos widgets do watchOS corrigidas. |
| 10 de junho de 2024 | Atualizado para incluir orientações para widgets accented no iOS 18 e no iPadOS 18. |
| 5 de junho de 2023 | Orientações atualizadas para incluir widgets no watchOS, widgets na Tela Bloqueada do iPad e atualizações para iOS 17, iPadOS 17 e macOS 14. |
| 3 de novembro de 2022 | Adicionadas orientações para widgets na Tela Bloqueada do iPhone e atualizados os comps de design para iPhone 14, iPhone 14 Pro e iPhone 14 Pro Max. |
