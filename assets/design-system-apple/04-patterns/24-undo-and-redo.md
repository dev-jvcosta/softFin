# Desfazer e refazer (Undo and redo)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/undo-and-redo
>
> Plataformas: ios,ipados,macos,visionos

*Desfazer e refazer oferece às pessoas maneiras fáceis de reverter muitos tipos de ações, o que também pode ajudá-las a explorar e experimentar com segurança enquanto aprendem uma nova interface ou tarefa.*

![Um esboço de uma seta que começa à direita, curva-se para cima e aponta para a esquerda, sugerindo um retorno ao início. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores.](../../images/undo-and-redo/patterns-undo-redo-intro@2x.png) ![Um esboço de uma seta que começa à direita, curva-se para cima e aponta para a esquerda, sugerindo um retorno ao início. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores. (escuro)](../../images/undo-and-redo/patterns-undo-redo-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-undo-redo-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-undo-redo-intro~dark@2x.png)*

As pessoas esperam que desfazer e refazer permitam reverter suas ações recentes, por isso provavelmente tentarão desfazer — muitas vezes várias vezes — até que algo mude. Em uma situação como essa, as pessoas podem não se lembrar de qual das ações anteriores o comando de desfazer está atingindo, o que pode levar a alterações não intencionais e frustração. Para ajudar as pessoas a manter o controle, é essencial ajudá-las a prever o resultado de desfazer e refazer e destacar os resultados.

## Boas práticas

**Ajude as pessoas a prever ao máximo os resultados de desfazer e refazer.** No iPhone, por exemplo, você pode descrever o resultado no alerta exibido quando as pessoas agitam o dispositivo, dando a elas a opção de executar ou cancelar o desfazer. Se você oferecer itens de menu de desfazer e refazer, pode modificar os rótulos dos itens de menu para identificar o resultado. Por exemplo, um app baseado em documentos pode usar rótulos de item de menu como Desfazer Digitação ou Refazer Negrito.

**Mostre os resultados de um desfazer ou refazer.** Às vezes, a ação mais recente que as pessoas querem desfazer afeta um conteúdo ou uma área que não está mais visível. Em casos como esse, é fundamental destacar o resultado de cada desfazer e refazer para evitar que as pessoas pensem que a ação não teve efeito, o que pode levá-las a executá-la repetidamente. Por exemplo, se as pessoas desfizerem a exclusão de um parágrafo em uma área do documento que não está mais na tela, você pode rolar o documento para mostrar o parágrafo restaurado.

**Permita que as pessoas desfaçam várias vezes.** Evite impor limites desnecessários ao número de vezes que as pessoas podem desfazer ou refazer. As pessoas geralmente esperam poder desfazer todas as ações realizadas desde um passo lógico, como abrir um documento ou salvar seu trabalho.

**Considere oferecer a opção de reverter várias alterações de uma só vez.** Em alguns cenários, as pessoas podem apreciar a capacidade de desfazer um conjunto de ações distintas, mas relacionadas — como ajustes incrementais em uma única propriedade ou atributo — para não precisarem desfazer cada ajuste individualmente. Em outros casos, pode fazer sentido oferecer uma maneira conveniente de desfazer todas as alterações feitas desde que abriram um documento ou salvaram seu trabalho.

**Ofereça botões de desfazer e refazer somente quando necessário.** As pessoas geralmente esperam iniciar desfazer e refazer de maneiras compatíveis com o sistema, como escolher os itens do menu Editar de um app para macOS, usar atalhos de teclado em um Mac ou iPad, ou agitar o iPhone. Se for importante oferecer botões dedicados de desfazer e refazer no seu app, use os símbolos padrão fornecidos pelo sistema e coloque os botões em uma barra de ferramentas.

## Considerações por plataforma

*Nenhuma consideração adicional para visionOS. Não é compatível com tvOS ou watchOS.*

### iOS, iPadOS

**Evite redefinir gestos padrão para desfazer e refazer.** Por exemplo, as pessoas podem usar um deslize com três dedos para iniciar um desfazer ou refazer, ou agitar o iPhone. Como em todos os gestos padrão, redefini-los na sua interface corre o risco de confundir as pessoas e tornar a experiência imprevisível.

**Descreva de forma breve e precisa a operação a ser desfeita ou refeita.** O título do alerta de desfazer e refazer inclui automaticamente o prefixo “Desfazer ” ou “Refazer ” (incluindo o espaço final). Você precisa fornecer uma ou duas palavras adicionais que descrevam o que está sendo desfeito ou refeito, para aparecerem depois desse prefixo. Por exemplo, você pode criar títulos de alerta como “Desfazer Nome” ou “Refazer Alteração de Endereço”.

### macOS

**Coloque os comandos de desfazer e refazer no menu Editar e ofereça suporte aos atalhos de teclado padrão.** Os usuários de Mac esperam encontrar desfazer e refazer na parte superior do menu Editar; também esperam usar Command–Z e Shift–Command–Z para desfazer e refazer, respectivamente.

## Recursos

#### Relacionados

[Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

[Dispositivos apontadores](https://developer.apple.com/design/human-interface-guidelines/pointing-devices)

[Atalhos de teclado padrão](https://developer.apple.com/design/human-interface-guidelines/keyboards#Standard-keyboard-shortcuts)

[Menu Editar](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Edit-menu)

#### Documentação para desenvolvedores

[UndoManager](https://developer.apple.com/documentation/foundation/undomanager) — Foundation

#### Vídeos

- [Princípios essenciais de design](https://developer.apple.com/videos/play/wwdc2017/802)
