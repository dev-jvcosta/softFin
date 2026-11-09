# Campos de texto (Text fields)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/text-fields
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Um campo de texto é uma área retangular na qual as pessoas inserem ou editam pequenos trechos específicos de texto.*

![Uma representação estilizada de um campo de texto contendo um valor. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/text-fields/components-text-field-intro@2x.png) ![Uma representação estilizada de um campo de texto contendo um valor. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/text-fields/components-text-field-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-text-field-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-text-field-intro~dark@2x.png)*

## Boas práticas

**Use um campo de texto para solicitar uma pequena quantidade de informações, como um nome ou um endereço de e-mail.** Para permitir que as pessoas insiram quantidades maiores de texto, use uma [visualização de texto](https://developer.apple.com/design/human-interface-guidelines/text-views).

**Mostre uma dica em um campo de texto para ajudar a comunicar sua finalidade.** Um campo de texto pode conter texto de espaço reservado — como “E-mail” ou “Senha” — quando não há outro texto no campo. Como o texto de espaço reservado desaparece quando as pessoas começam a digitar, também pode ser útil incluir um rótulo separado descrevendo o campo para lembrar as pessoas de sua finalidade.

**Use campos de texto seguros para ocultar dados privados.** Use sempre um campo de texto seguro quando seu app solicitar dados sensíveis, como uma senha. Para orientações para desenvolvedores, consulte [SecureField](https://developer.apple.com/documentation/swiftui/securefield).

**Na medida do possível, adapte o tamanho de um campo de texto à quantidade de texto prevista.** O tamanho de um campo de texto ajuda as pessoas a avaliar visualmente a quantidade de informações a fornecer.

**Espace os vários campos de texto de maneira uniforme.** Se o seu layout incluir vários campos de texto, deixe espaço suficiente entre eles para que as pessoas vejam facilmente qual campo de entrada pertence a cada rótulo introdutório. Empilhe vários campos de texto na vertical quando possível e use larguras consistentes para criar um layout mais organizado. Por exemplo, os campos de nome e sobrenome em um formulário de endereço podem ter uma largura, enquanto os campos de endereço e cidade podem ter outra.

**Garanta que a navegação com a tecla Tab entre vários campos flua como as pessoas esperam.** Ao navegar com Tab entre os campos, mova o foco em uma sequência lógica. O sistema tenta obter esse resultado automaticamente, então você não precisará personalizar isso com muita frequência.

**Valide os campos quando fizer sentido.** Por exemplo, se o único valor legítimo para um campo for uma sequência de dígitos, seu app precisa alertar as pessoas se elas inserirem caracteres diferentes de dígitos. O momento apropriado para verificar os dados depende do contexto: ao inserir um endereço de e-mail, é melhor validar quando as pessoas passam para outro campo; ao criar um nome de usuário ou uma senha, a validação precisa acontecer antes de as pessoas passarem para outro campo.

**Use um formatador de números para ajudar com dados numéricos.** Um formatador de números configura automaticamente o campo de texto para aceitar apenas valores numéricos. Ele também pode exibir o valor de uma maneira específica, como com um determinado número de casas decimais, como porcentagem ou como moeda. No entanto, não presuma a apresentação real dos dados, pois a formatação pode variar significativamente de acordo com a região das pessoas.

![Uma captura de tela parcial de dois campos de texto empilhados. O campo superior contém um número com quatro casas decimais. O campo inferior contém um valor monetário.](../../../images/text-fields/text-fields-formatted-text@2x.png) ![Uma captura de tela parcial de dois campos de texto empilhados. O campo superior contém um número com quatro casas decimais. O campo inferior contém um valor monetário. (escuro)](../../../images/text-fields/text-fields-formatted-text~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/text-fields-formatted-text@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/text-fields-formatted-text~dark@2x.png)*

**Ajuste as quebras de linha de acordo com as necessidades do campo.** Por padrão, o sistema corta qualquer texto que ultrapasse os limites de um campo de texto. Como alternativa, você pode configurar um campo de texto para quebrar o texto em uma nova linha no nível do caractere ou da palavra, ou para truncá-lo (indicado por reticências) no início, no meio ou no final.

![Uma captura de tela parcial de um campo de texto que contém uma frase cortada antes do fim.](../../../images/text-fields/text-fields-clipped-text@2x.png) ![Uma captura de tela parcial de um campo de texto que contém uma frase cortada antes do fim. (escuro)](../../../images/text-fields/text-fields-clipped-text~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/text-fields-clipped-text@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/text-fields-clipped-text~dark@2x.png)*

![Uma captura de tela parcial de um campo de texto que contém uma frase que quebra em duas linhas.](../../../images/text-fields/text-fields-wrapped-text@2x.png) ![Uma captura de tela parcial de um campo de texto que contém uma frase que quebra em duas linhas. (escuro)](../../../images/text-fields/text-fields-wrapped-text~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/text-fields-wrapped-text@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/text-fields-wrapped-text~dark@2x.png)*

![Uma captura de tela parcial de um campo de texto que contém uma frase com reticências no lugar das últimas palavras.](../../../images/text-fields/text-fields-truncated-text@2x.png) ![Uma captura de tela parcial de um campo de texto que contém uma frase com reticências no lugar das últimas palavras. (escuro)](../../../images/text-fields/text-fields-truncated-text~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/text-fields-truncated-text@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/text-fields-truncated-text~dark@2x.png)*

**Considere usar uma dica de expansão para mostrar a versão completa de um texto cortado ou truncado.** Uma dica de expansão se comporta como uma [dica de ferramenta](https://developer.apple.com/design/human-interface-guidelines/offering-help#macOS-visionOS) comum e aparece quando alguém coloca o ponteiro sobre o campo.

**Em apps para iOS, iPadOS, tvOS e visionOS, mostre o tipo de teclado apropriado.** Há vários tipos de teclado disponíveis, cada um projetado para facilitar um tipo diferente de entrada, como números ou URLs. Para agilizar a entrada de dados, exiba o teclado apropriado para o tipo de conteúdo que as pessoas estão inserindo. Para orientações, consulte [Teclados virtuais](https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards).

**Minimize a entrada de texto nos seus apps para tvOS e watchOS.** Inserir trechos longos de texto ou preencher vários campos de texto consome muito tempo na Apple TV e no Apple Watch. Minimize a entrada de texto e considere coletar informações de maneira mais eficiente, como com botões.

## Considerações por plataforma

*Nenhuma consideração adicional para tvOS ou visionOS.*

### iOS, iPadOS

**Exiba um botão Limpar na extremidade final de um campo de texto para ajudar as pessoas a apagar o que inseriram.** Quando esse elemento está presente, as pessoas podem tocar nele para limpar o conteúdo do campo de texto, sem precisar continuar tocando na tecla Delete.

**Use imagens e botões para dar clareza e funcionalidade aos campos de texto.** Você pode exibir imagens personalizadas nas duas extremidades de um campo de texto ou adicionar um botão fornecido pelo sistema, como o botão Favoritos. Em geral, use a extremidade inicial de um campo de texto para indicar a finalidade do campo e a extremidade final para oferecer recursos adicionais, como adicionar aos favoritos.

### macOS

**Considere usar uma caixa de combinação (combo box) se precisar combinar entrada de texto com uma lista de opções.** Para orientações relacionadas, consulte [Caixas de combinação](https://developer.apple.com/design/human-interface-guidelines/combo-boxes).

### watchOS

**Apresente um campo de texto somente quando necessário.** Sempre que possível, prefira exibir uma lista de opções em vez de exigir a entrada de texto.

## Recursos

#### Relacionados

[Visualizações de texto](https://developer.apple.com/design/human-interface-guidelines/text-views)

[Caixas de combinação](https://developer.apple.com/design/human-interface-guidelines/combo-boxes)

[Inserção de dados](https://developer.apple.com/design/human-interface-guidelines/entering-data)

#### Documentação para desenvolvedores

[TextField](https://developer.apple.com/documentation/swiftui/textfield) — SwiftUI

[SecureField](https://developer.apple.com/documentation/swiftui/securefield) — SwiftUI

[UITextField](https://developer.apple.com/documentation/uikit/uitextfield) — UIKit

[NSTextField](https://developer.apple.com/documentation/appkit/nstextfield) — AppKit

## Histórico de alterações

| Data | Alterações |
|---|---|
| 5 de junho de 2023 | Atualizadas as orientações para refletir as mudanças no watchOS 10. |
