# Entrada de dados (Entering data)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/entering-data
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Quando você precisa de informações das pessoas, projete maneiras que facilitem fornecê-las sem cometer erros.*

![Um esboço de um lápis escrevendo dentro de um campo, sugerindo entrada de dados. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple em seis cores.](../../images/entering-data/patterns-entering-data-intro@2x.png) ![Um esboço de um lápis escrevendo dentro de um campo, sugerindo entrada de dados. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple em seis cores. (escuro)](../../images/entering-data/patterns-entering-data-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-entering-data-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-entering-data-intro~dark@2x.png)*

Inserir informações pode ser um processo tedioso, independentemente dos métodos de interação que as pessoas usam. Melhore a experiência:

- Reunindo previamente o máximo de informações possível para minimizar a quantidade de dados que as pessoas precisam fornecer
- Oferecendo suporte a todos os métodos de entrada disponíveis para que as pessoas possam escolher o que funciona melhor para elas

## Boas práticas

**Obtenha informações do sistema sempre que possível.** Não peça às pessoas que insiram informações que você pode coletar automaticamente — como a partir dos ajustes — ou obtendo a permissão delas, como localização ou informações de calendário.

**Seja claro sobre os dados de que você precisa.** Por exemplo, você pode exibir uma sugestão em um campo de texto — como “usuario@empresa.com” — ou fornecer um rótulo introdutório que descreva a informação, como “E-mail”. Você também pode preencher previamente os campos com valores padrão razoáveis, o que pode minimizar a tomada de decisões e acelerar a entrada de dados.

**Use um campo de entrada de texto seguro quando apropriado.** Se o seu app ou jogo precisa de dados sensíveis, use um campo que oculte o que as pessoas digitam à medida que inserem, normalmente exibindo um pequeno símbolo de círculo preenchido para cada caractere. Para orientações para desenvolvedores, consulte [SecureField](https://developer.apple.com/documentation/swiftui/securefield). No tvOS, você também pode configurar uma [view de entrada de dígitos](https://developer.apple.com/design/human-interface-guidelines/digit-entry-views) para ocultar os numerais que as pessoas inserem (para orientações para desenvolvedores, consulte [isSecureDigitEntry](https://developer.apple.com/documentation/tvuikit/tvdigitentryviewcontroller/issecuredigitentry)). Quando você usa o campo de texto fornecido pelo sistema no visionOS, o sistema mostra os dados inseridos a quem está usando o dispositivo, mas não a mais ninguém; por exemplo, um campo de texto seguro é automaticamente desfocado quando as pessoas usam o AirPlay para transmitir o conteúdo.

**Nunca preencha previamente um campo de senha.** Sempre peça às pessoas que insiram a senha ou usem autenticação biométrica ou por chaveiro. Para orientações, consulte [Managing accounts](https://developer.apple.com/design/human-interface-guidelines/managing-accounts).

**Quando possível, ofereça opções em vez de exigir a digitação de texto.** Geralmente é mais fácil e eficiente escolher em listas de opções do que digitar informações, mesmo quando há um teclado convenientemente disponível. Quando fizer sentido, considere usar um seletor, menu ou outro componente de seleção para dar às pessoas uma maneira fácil de fornecer as informações de que você precisa.

**Na medida do possível, deixe as pessoas fornecerem dados arrastando e soltando ou colando.** Oferecer suporte a essas interações pode facilitar a entrada de dados e fazer com que sua experiência pareça mais integrada ao restante do sistema.

**Valide dinamicamente os valores dos campos.** As pessoas podem ficar frustradas quando precisam voltar e corrigir erros depois de preencher um formulário extenso. Quando você verifica os valores assim que as pessoas os inserem — e fornece feedback assim que detecta um problema — dá a elas a oportunidade de corrigir os erros imediatamente. Para dados numéricos em particular, considere usar um formatador de números, que configura automaticamente um campo de texto para aceitar apenas valores numéricos. Você também pode configurar um formatador para exibir o valor de uma maneira específica, como com um determinado número de casas decimais, como porcentagem ou como moeda.

**Quando a entrada de dados for necessária, garanta que as pessoas entendam que precisam fornecer os dados obrigatórios antes de poder continuar.** Por exemplo, se você incluir um botão Avançar ou Continuar após um conjunto de campos de texto, torne o botão disponível somente depois que as pessoas inserirem os dados exigidos.

## Considerações por plataforma

*Sem considerações adicionais para iOS, iPadOS, tvOS, visionOS ou watchOS.*

### macOS

**Considere usar uma dica de expansão (expansion tooltip) para mostrar a versão completa do texto cortado ou truncado em um campo.** Uma *dica de expansão* se comporta como uma dica de ferramenta normal, aparecendo quando o ponteiro fica parado sobre um campo. Apps em execução no macOS — incluindo apps de iOS e iPadOS em execução em um Mac — podem usar uma dica de expansão para ajudar as pessoas a ver os dados completos que inseriram quando um campo de texto é pequeno demais para exibi-los. Para orientações, consulte [Offering help > macOS, visionOS](https://developer.apple.com/design/human-interface-guidelines/offering-help#macOS-visionOS).

## Recursos

#### Relacionados

[Campos de texto](https://developer.apple.com/design/human-interface-guidelines/text-fields)

[Teclados virtuais](https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards)

[Teclados](https://developer.apple.com/design/human-interface-guidelines/keyboards)

#### Documentação para desenvolvedores

[Input events](https://developer.apple.com/documentation/swiftui/input-events) — SwiftUI

#### Vídeos

- [What's new in UIKit](https://developer.apple.com/videos/play/wwdc2021/10059)

## Histórico de alterações

| Data | Alterações |
|---|---|
| June 21, 2023 | Atualizado para incluir orientações para o visionOS. |
