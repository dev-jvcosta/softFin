# Redação (Writing)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/writing
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*As palavras que você escolhe dentro do seu app são uma parte essencial da experiência do usuário.*

![Um esboço de um documento e um lápis, sugerindo conteúdo escrito. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple de seis cores.](../../images/writing/foundations-writing-intro@2x.png) ![Um esboço de um documento e um lápis, sugerindo conteúdo escrito. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple de seis cores. (escuro)](../../images/writing/foundations-writing-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-writing-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-writing-intro~dark@2x.png)*

Seja ao criar uma experiência de onboarding, escrever um alerta ou descrever uma imagem para acessibilidade, projetar sob a ótica da linguagem ajudará as pessoas a aproveitar ao máximo seu app ou jogo.

## Primeiros passos

**Determine a voz do seu app.** Pense em com quem você está falando, para definir o tipo de vocabulário que vai usar. Que tipos de palavras são familiares para as pessoas que usam seu app? Como você quer que as pessoas se sintam? As palavras de um app bancário, por exemplo, podem transmitir confiança e estabilidade, enquanto as palavras de um jogo podem transmitir emoção e diversão. Crie uma lista de termos comuns e consulte-a para manter sua linguagem consistente. Uma linguagem consistente, junto com uma voz que reflita os valores do seu app, ajuda a deixar tudo mais coeso.

**Adapte o tom ao contexto.** Depois de estabelecer a voz do seu app, varie o tom de acordo com a situação. Considere o que as pessoas estão fazendo enquanto usam seu app — tanto no mundo físico quanto dentro do próprio app. Elas estão se exercitando e atingiram uma meta? Ou estão tentando fazer um pagamento e receberam um erro? Fatores situacionais afetam tanto o que você diz quanto a forma como exibe o texto na tela.

Compare o tom destes dois exemplos do Apple Watch. No primeiro, o tom é objetivo e direto, refletindo a seriedade da situação. No segundo, o tom é leve e de parabéns.

![Uma captura de tela de uma mensagem de Detecção de Queda que diz: parece que você sofreu uma queda forte.](../../images/writing/writing-fall-detection-message@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/writing-fall-detection-message@2x.png)*

![Uma captura de tela de uma mensagem de Atividade que diz: você bateu seu recorde pessoal de maior sequência diária de Movimento, 35 dias!](../../images/writing/writing-move-streak-message@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/writing-move-streak-message@2x.png)*

**Seja claro.** Escolha palavras fáceis de entender e que transmitam a coisa certa. Verifique cada palavra para ter certeza de que ela precisa estar ali. Se puder usar menos palavras, faça isso. Em caso de dúvida, leia seu texto em voz alta.

**Escreva para todas as pessoas.** Para que seu app seja útil para o maior número possível de pessoas, ele precisa se comunicar com o maior número possível de pessoas. Escolha uma linguagem simples e direta e escreva pensando em acessibilidade e localização, evitando jargões e terminologia de gênero. Para orientações, consulte [Escrita inclusiva](https://help.apple.com/applestyleguide/#/apdcb2a65d68) e [VoiceOver](https://developer.apple.com/design/human-interface-guidelines/voiceover); para orientações para desenvolvedores, consulte [Localização](https://developer.apple.com/documentation/xcode/localization).

## Boas práticas

**Considere o propósito de cada tela.** Preste atenção à ordem dos elementos em uma tela e coloque as informações mais importantes primeiro. Formate o texto para facilitar a leitura. Se você estiver tentando transmitir mais de uma ideia, considere dividir o texto em várias telas e pense no fluxo de informações entre elas.

**Seja orientado à ação.** A voz ativa e rótulos claros ajudam as pessoas a navegar pelo seu app de uma etapa para a seguinte, ou de uma tela para outra. Ao rotular botões e links, quase sempre é melhor usar um verbo. Priorize a clareza e evite a tentação de ser engraçadinho ou esperto demais nos rótulos. Por exemplo, simplesmente dizer “Enviar” costuma funcionar melhor do que “Bora lá!”. Em links, evite usar “Clique aqui” e prefira palavras ou frases mais descritivas, como “Saiba mais sobre UX Writing”. Isso é especialmente importante para pessoas que usam leitores de tela para acessar seu app.

**Crie padrões de linguagem.** A consistência gera familiaridade, ajudando seu app a parecer coeso, intuitivo e cuidadosamente projetado. Ela também facilita a escrita para o seu app, pois você pode recorrer a esses padrões repetidamente.

**Adote regras de capitalização alinhadas ao estilo do seu app e aplique-as de forma consistente.** Embora certos componentes, como os [rótulos de botões](https://developer.apple.com/design/human-interface-guidelines/buttons#Content), tenham diretrizes específicas, a forma como você formata o texto reflete a voz do seu app. O title case (iniciais maiúsculas em todas as palavras) geralmente é considerado formal, enquanto o sentence case (apenas a primeira palavra em maiúscula) é mais casual. Escolha um estilo para cada tipo de elemento de interface e use-o de forma consistente em todo o app — por exemplo, title case para todos os alertas ou sentence case para todos os títulos.

**Dê orientações claras e use uma linguagem consistente em processos com várias etapas.** Se seu app tem um fluxo que abrange várias telas, decida como deseja rotular as ações que levam as pessoas de uma etapa para a seguinte. Comece com uma linguagem como “Começar” para indicar que você está iniciando um fluxo. Você pode usar o rótulo do botão para sugerir a próxima etapa ou usar termos como “Continuar” ou “Avançar”, mas seja consistente com o que escolher. Deixe claro quando um fluxo for concluído usando uma linguagem como “Concluído”.

**Use pronomes possessivos com moderação.** Pronomes possessivos como *meu* e *seu* costumam ser desnecessários para estabelecer contexto. Por exemplo, “Favoritos” transmite a mesma mensagem que “Seus Favoritos” e é mais conciso. Se você usar pronomes possessivos, use-os de forma consistente em todo o app e tente não alternar perspectivas. Evite usar *nós* por completo, pois pode não ficar claro a quem o “nós” se refere. Isso é particularmente problemático em mensagens de erro como “Estamos com dificuldade para carregar este conteúdo”. Algo como “Não foi possível carregar o conteúdo” é muito mais claro.

**Escreva de acordo com a forma como as pessoas usam cada dispositivo.** As pessoas podem usar seu app em vários tipos de dispositivos. Embora sua linguagem precise ser consistente entre eles, pense em onde seria útil ajustar o texto para torná-lo adequado a diferentes dispositivos. Descreva os gestos corretamente em cada dispositivo — por exemplo, não diga “clique” para um dispositivo de toque, como iPhone ou iPad, quando você quer dizer “toque”.

Onde e como as pessoas usam um dispositivo, o tamanho da tela e a localização afetam a forma como você escreve para o seu app. O iPhone e o Apple Watch, por exemplo, oferecem oportunidades de personalização, mas suas telas pequenas exigem concisão. As TVs, por outro lado, geralmente ficam em espaços comuns da casa, e várias pessoas provavelmente verão tudo o que está na tela, então considere a quem você está se dirigindo. Telas maiores também exigem concisão, pois o texto precisa ser grande para ser visto de longe.

**Forneça próximos passos claros em qualquer tela em branco.** Um estado vazio, como uma lista de tarefas concluída ou uma pasta de favoritos sem nada dentro, pode ser uma boa oportunidade para fazer as pessoas se sentirem bem-vindas e apresentar seu app. Estados vazios também podem mostrar a voz do seu app, mas certifique-se de que o conteúdo seja útil e se adapte ao contexto. Uma tela vazia pode ser intimidante se não for óbvio o que fazer em seguida, então oriente as pessoas sobre as ações que podem realizar e, se possível, ofereça um botão ou link para isso. Lembre-se de que estados vazios geralmente são temporários, então não exiba informações cruciais que possam desaparecer depois.

**Escreva mensagens de erro claras.** É sempre melhor ajudar as pessoas a evitar erros. Quando uma mensagem de erro for necessária, exiba-a o mais próximo possível do problema, evite culpar o usuário e deixe claro o que a pessoa pode fazer para corrigi-lo. Por exemplo, “Essa senha é muito curta” não é tão útil quanto “Escolha uma senha com pelo menos 8 caracteres”. Lembre-se de que erros podem ser frustrantes. Interjeições como “ops!” ou “ih!” geralmente são desnecessárias e podem soar insinceras. Se você perceber que a linguagem sozinha não consegue resolver um erro que provavelmente afetará muitas pessoas, aproveite isso como uma oportunidade para repensar a interação.

**Escolha o método de entrega certo.** Há muitas maneiras de chamar a atenção das pessoas, estejam elas usando seu app ativamente ou não. Quando houver algo que você queira comunicar, considere a urgência e a importância da mensagem. Pense no contexto em que alguém pode ver a mensagem, se ela exige ação imediata e de quanta informação de apoio a pessoa pode precisar. Escolha o método de entrega correto e use um tom apropriado para a situação. Para orientações, consulte [Notificações](https://developer.apple.com/design/human-interface-guidelines/notifications), [Alertas](https://developer.apple.com/design/human-interface-guidelines/alerts) e [Menus de ações](https://developer.apple.com/design/human-interface-guidelines/action-sheets).

**Mantenha os rótulos de ajustes claros e simples.** Ajude as pessoas a encontrar facilmente os ajustes de que precisam, rotulando-os da forma mais prática possível. Se o rótulo do ajuste não for suficiente, adicione uma explicação. Descreva o que ele faz quando está ativado, e as pessoas poderão deduzir o oposto. No ajuste Temporizador de Lavagem das Mãos do Apple Watch, por exemplo, a descrição explica que um temporizador pode ser iniciado quando você está lavando as mãos. Não é necessário informar que o temporizador não será iniciado quando esse ajuste estiver desativado.

![Uma captura de tela parcial que mostra a descrição do Temporizador de Lavagem das Mãos, que diz: o Apple Watch pode detectar quando você está lavando as mãos e iniciar um temporizador de 20 segundos.](../../images/writing/writing-handwashing-settings@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/writing-handwashing-settings@2x.png)*

Se você precisar direcionar alguém a um ajuste, forneça um link ou botão direto, em vez de tentar descrever sua localização. Para orientações, consulte [Ajustes](https://developer.apple.com/design/human-interface-guidelines/settings).

**Mostre dicas em campos de texto.** Se seu app permite que as pessoas insiram seu próprio texto, como informações de conta ou de contato, rotule todos os campos com clareza e use texto de dica ou de espaço reservado para que as pessoas saibam como formatar as informações. Você pode dar um exemplo no texto de dica, como “nome@exemplo.com”, ou descrever a informação, como “Seu nome”. Mostre os erros logo ao lado do campo e instrua as pessoas sobre como inserir as informações corretamente, em vez de repreendê-las por não seguirem as regras. “Use apenas letras no seu nome” é melhor do que “Não use números ou símbolos”. Evite mensagens de erro robóticas e sem informações úteis, como “Nome inválido”. Para orientações, consulte [Campos de texto](https://developer.apple.com/design/human-interface-guidelines/text-fields).

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS, visionOS ou watchOS.*

## Recursos

#### Relacionados

[Guia de Estilo da Apple](https://help.apple.com/applestyleguide/#/)

[Escrita inclusiva](https://help.apple.com/applestyleguide/#/apdcb2a65d68)

[Inclusão](https://developer.apple.com/design/human-interface-guidelines/inclusion)

[Acessibilidade](https://developer.apple.com/design/human-interface-guidelines/accessibility)

[Cor](https://developer.apple.com/design/human-interface-guidelines/color)

#### Vídeos

- [Crie nomes claros para recursos e rótulos no seu app](https://developer.apple.com/videos/play/wwdc2026/290)
- [Cause um grande impacto com pequenas mudanças de redação](https://developer.apple.com/videos/play/wwdc2025/404)
- [Redação para interfaces](https://developer.apple.com/videos/play/wwdc2022/10037)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 16 de dezembro de 2025 | Esclarecidas as orientações sobre padrões de linguagem e adicionadas orientações sobre pronomes possessivos. |
| 27 de fevereiro de 2023 | Nova página. |
