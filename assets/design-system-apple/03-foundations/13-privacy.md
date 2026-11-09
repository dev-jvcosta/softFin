# Privacidade (Privacy)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/privacy
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*A privacidade é fundamental: é essencial ser transparente sobre os dados e recursos relacionados à privacidade de que você precisa e proteger os dados que as pessoas permitem que você acesse.*

![Um esboço de uma mão levantada, sugerindo proteção. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple de seis cores.](../../images/privacy/foundations-privacy-intro@2x.png) ![Um esboço de uma mão levantada, sugerindo proteção. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom amarelo para refletir sutilmente o amarelo do logotipo original da Apple de seis cores. (escuro)](../../images/privacy/foundations-privacy-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-privacy-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/foundations-privacy-intro~dark@2x.png)*

As pessoas usam seus dispositivos de maneiras muito pessoais e esperam que os apps ajudem a preservar sua privacidade.

Ao enviar um app novo ou atualizado, você deve fornecer detalhes sobre suas práticas de privacidade e sobre os dados relevantes para a privacidade que coleta, para que a App Store possa exibir as informações na página do seu produto. (Você pode gerenciar essas informações a qualquer momento no [App Store Connect](https://help.apple.com/app-store-connect/#/dev1b4647c5b).) As pessoas usam os detalhes de privacidade na página do seu produto para tomar uma decisão informada antes de baixar seu app. Para saber mais, consulte [Detalhes de privacidade de apps na App Store](https://developer.apple.com/app-store/app-privacy-details/).

![Uma captura de tela da tela App Privacy na página de produto de um app na App Store. O cartão superior da tela se chama Data Used to Track You e lista informações de contato, outros dados e identificadores. O cartão inferior se chama Data Linked to You e lista saúde e fitness, informações financeiras, informações de contato, compras, localização e contatos.](../../images/privacy/privacy-social-media-app-store-nutrition-labels@2x.png) ![Uma captura de tela da tela App Privacy na página de produto de um app na App Store. O cartão superior da tela se chama Data Used to Track You e lista informações de contato, outros dados e identificadores. O cartão inferior se chama Data Linked to You e lista saúde e fitness, informações financeiras, informações de contato, compras, localização e contatos. (escuro)](../../images/privacy/privacy-social-media-app-store-nutrition-labels~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-social-media-app-store-nutrition-labels@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-social-media-app-store-nutrition-labels~dark@2x.png)*

## Boas práticas

**Solicite acesso apenas aos dados de que você realmente precisa.** Pedir mais dados do que um recurso exige — ou pedir dados antes que a pessoa demonstre interesse no recurso — pode dificultar a confiança das pessoas no seu app. Dê às pessoas controle preciso sobre seus dados tornando suas solicitações de permissão o mais específicas possível.

**Seja transparente sobre como seu app coleta e usa os dados das pessoas.** As pessoas têm menos probabilidade de se sentir à vontade para compartilhar dados com seu app se não entenderem exatamente como você pretende usá-los. Respeite sempre as escolhas das pessoas de usar recursos do sistema como Hide My Email e Mail Privacy Protection, e certifique-se de entender suas obrigações em relação ao rastreamento de apps. Para saber mais sobre os recursos de privacidade da Apple, consulte [Privacidade](https://www.apple.com/privacy/); para orientações a desenvolvedores, consulte [Privacidade do usuário e uso de dados](https://developer.apple.com/app-store/user-privacy-and-data-use/).

**Processe os dados no dispositivo sempre que possível.** No iOS, por exemplo, você pode aproveitar o Apple Neural Engine e modelos personalizados do CreateML para processar os dados diretamente no dispositivo, evitando idas e vindas demoradas e potencialmente arriscadas a um servidor remoto.

**Adote as proteções de privacidade definidas pelo sistema e siga as melhores práticas de segurança.** Por exemplo, no iOS 15 e posterior, você pode contar com o CloudKit para fornecer criptografia e gerenciamento de chaves para tipos de dados adicionais, como strings, números e datas.

## Solicitando permissão

Aqui estão vários exemplos de itens para cujo acesso você deve solicitar permissão:

- Dados pessoais, incluindo localização, saúde, finanças, contatos e outras informações de identificação pessoal
- Conteúdo gerado pelo usuário, como e-mails, mensagens, dados de calendário, contatos, informações de jogo, atividade do Apple Music, dados do HomeKit e conteúdo de áudio, vídeo e fotos
- Recursos protegidos, como periféricos Bluetooth, recursos de automação residencial, conexões Wi-Fi e redes locais
- Recursos do dispositivo, como câmera e microfone
- Em um app de visionOS em execução em um Full Space, dados do ARKit, como rastreamento das mãos, estimativa de planos, ancoragem de imagens e rastreamento do mundo
- O identificador de publicidade do dispositivo, que oferece suporte ao rastreamento de apps

O sistema fornece um alerta padrão que permite às pessoas ver cada solicitação que você faz. Você fornece o texto que descreve por que seu app precisa de acesso, e o sistema exibe sua descrição no alerta. As pessoas também podem ver a descrição — e alterar sua escolha — em Ajustes > Privacidade.

**Solicite permissão somente quando seu app realmente precisar de acesso aos dados ou ao recurso.** É natural que as pessoas desconfiem de uma solicitação de informações pessoais ou de acesso a um recurso do dispositivo, principalmente se não houver uma necessidade óbvia. Idealmente, espere para solicitar permissão até que as pessoas de fato usem um recurso do app que exija acesso. Por exemplo, você pode usar o [botão de localização](https://developer.apple.com/design/human-interface-guidelines/privacy#Location-button) para dar às pessoas uma forma de compartilhar sua localização depois que elas demonstrarem interesse em um recurso que precisa dessa informação.

**Evite solicitar permissão na abertura, a menos que os dados ou o recurso sejam necessários para o funcionamento do app.** As pessoas têm menos probabilidade de se incomodar com uma solicitação na abertura quando é óbvio por que você a está fazendo. Por exemplo, as pessoas entendem que um app de navegação precisa de acesso à localização para que possam aproveitá-lo. Da mesma forma, antes de poderem jogar um jogo de visionOS que permite quicar objetos virtuais nas paredes do ambiente ao redor, as pessoas precisam permitir que o jogo acesse informações sobre o ambiente.

**Escreva um texto que descreva claramente como seu app usa a capacidade, os dados ou o recurso que você está solicitando.** O alerta padrão exibe seu texto (chamado de *purpose string* ou *usage description string*) após o nome do app e antes dos botões que as pessoas usam para conceder ou negar a permissão. Procure escrever uma frase breve e completa, direta, específica e fácil de entender. Use a capitalização de frase, evite a voz passiva e inclua um ponto final. Para orientações a desenvolvedores, consulte [Requesting access to protected resources](https://developer.apple.com/documentation/uikit/requesting-access-to-protected-resources) e [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency).

|  | Exemplo de purpose string | Observações |
|---|---|---|
| ![Um sinal de verificação em um círculo para indicar um exemplo correto.](../../images/privacy/checkmark@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)* | O app grava durante a noite para detectar sons de ronco. | Uma frase na voz ativa que descreve claramente como e por que o app coleta os dados. |
| ![Um X em um círculo para indicar um exemplo incorreto.](../../images/privacy/crossout@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)* | O acesso ao microfone é necessário para uma experiência melhor. | Uma frase na voz passiva que oferece uma justificativa vaga e indefinida. |
| ![Um X em um círculo para indicar um exemplo incorreto.](../../images/privacy/crossout@2x.png)<br>*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)* | Ative o acesso ao microfone. | Uma frase imperativa que não oferece nenhuma justificativa. |

Aqui estão vários exemplos do alerta padrão do sistema:

**Exemplo 1**

![Uma captura de tela de um alerta de permissão para um app de rede social exibindo uma purpose string que diz Allow Social Media to access your location? Turning on location  will allow us to show you nearby post locations. Abaixo do texto há uma pequena imagem de mapa contendo o aviso Precise On e, abaixo do mapa, três botões empilhados. De cima para baixo, os botões se chamam Allow Once, Allow While Using App e Don’t Allow.](../../images/privacy/privacy-social-media-post-location-alert@2x.png) ![Uma captura de tela de um alerta de permissão para um app de rede social exibindo uma purpose string que diz Allow Social Media to access your location? Turning on location  will allow us to show you nearby post locations. Abaixo do texto há uma pequena imagem de mapa contendo o aviso Precise On e, abaixo do mapa, três botões empilhados. De cima para baixo, os botões se chamam Allow Once, Allow While Using App e Don’t Allow. (escuro)](../../images/privacy/privacy-social-media-post-location-alert~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-social-media-post-location-alert@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-social-media-post-location-alert~dark@2x.png)*

**Exemplo 2**

![Uma captura de tela de um alerta de permissão para um app de rede social exibindo uma purpose string que diz Social Media Would Like to Access Your Photos. Allow access to photos to upload photos from your library. O texto é seguido por três botões empilhados. De cima para baixo, os botões se chamam Select Photos, Allow Access to All Photos e Don’t Allow.](../../images/privacy/privacy-social-media-post-photo-alert@2x.png) ![Uma captura de tela de um alerta de permissão para um app de rede social exibindo uma purpose string que diz Social Media Would Like to Access Your Photos. Allow access to photos to upload photos from your library. O texto é seguido por três botões empilhados. De cima para baixo, os botões se chamam Select Photos, Allow Access to All Photos e Don’t Allow. (escuro)](../../images/privacy/privacy-social-media-post-photo-alert~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-social-media-post-photo-alert@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-social-media-post-photo-alert~dark@2x.png)*

**Exemplo 3**

![Uma captura de tela de um alerta de permissão para um app de rede social exibindo uma purpose string que diz Social Media Would Like to Access Your Contacts. Find friends using Social Media and add them to your network. O texto é seguido por dois botões lado a lado: Don’t Allow e Allow.](../../images/privacy/privacy-social-media-friends-contacts-alert@2x.png) ![Uma captura de tela de um alerta de permissão para um app de rede social exibindo uma purpose string que diz Social Media Would Like to Access Your Contacts. Find friends using Social Media and add them to your network. O texto é seguido por dois botões lado a lado: Don’t Allow e Allow. (escuro)](../../images/privacy/privacy-social-media-friends-contacts-alert~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-social-media-friends-contacts-alert@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-social-media-friends-contacts-alert~dark@2x.png)*

### Telas, janelas ou views anteriores ao alerta

Idealmente, o contexto atual ajuda as pessoas a entender por que você está solicitando a permissão delas. Se for essencial fornecer detalhes adicionais, você pode exibir uma tela ou janela personalizada antes de o alerta do sistema aparecer. As orientações a seguir se aplicam a views personalizadas exibidas antes de alertas do sistema que solicitam permissão para acessar dados e recursos protegidos, incluindo câmera, microfone, localização, contatos, calendário e rastreamento.

**Inclua apenas um botão e deixe claro que ele abre o alerta do sistema.** As pessoas podem se sentir manipuladas quando uma tela ou janela personalizada também inclui um botão que não abre o alerta, porque a experiência as desvia de fazer sua escolha. Outro tipo de manipulação é usar um termo como “Permitir” para intitular o botão da tela personalizada. Se o botão personalizado parecer semelhante em significado e peso visual ao botão de permitir do alerta, as pessoas podem ter mais probabilidade de escolher o botão de permitir do alerta sem querer. Use um termo como “Continuar” ou “Avançar” para intitular o único botão da tela ou janela personalizada, deixando claro que sua ação é abrir o alerta do sistema.

![Uma captura de tela da tela anterior ao alerta de um app que diz Turning on location services allows us to provide features like: alerts when your friends are nearby, news of events happening near you, tagging and sharing your location. You can change this later in the Settings app. Abaixo do texto há um botão chamado Next.](../../images/privacy/privacy-custom-messaging-correct@2x.png) ![Uma captura de tela da tela anterior ao alerta de um app que diz Turning on location services allows us to provide features like: alerts when your friends are nearby, news of events happening near you, tagging and sharing your location. You can change this later in the Settings app. Abaixo do texto há um botão chamado Next. (escuro)](../../images/privacy/privacy-custom-messaging-correct~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-correct@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-correct~dark@2x.png)*

![Um sinal de verificação em um círculo para indicar um exemplo correto.](../../images/privacy/checkmark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/checkmark@2x.png)*

**Não inclua ações adicionais na sua tela ou janela personalizada, a menos que seja necessário para obter um consentimento legal.** Por exemplo, não ofereça uma forma de as pessoas saírem da tela ou janela sem ver o alerta do sistema — como uma opção de fechar ou cancelar.

![Uma captura de tela da tela anterior ao alerta de um app que inclui um botão chamado Cancel, exibido abaixo do botão Next.](../../images/privacy/privacy-custom-messaging-incorrect-cancel-button@2x.png) ![Uma captura de tela da tela anterior ao alerta de um app que inclui um botão chamado Cancel, exibido abaixo do botão Next. (escuro)](../../images/privacy/privacy-custom-messaging-incorrect-cancel-button~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-incorrect-cancel-button@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-incorrect-cancel-button~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../images/privacy/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

![Uma captura de tela da tela anterior ao alerta de um app que inclui um botão Close no canto superior esquerdo. O botão Next aparece perto da parte inferior da tela.](../../images/privacy/privacy-custom-messaging-incorrect-close-button@2x.png) ![Uma captura de tela da tela anterior ao alerta de um app que inclui um botão Close no canto superior esquerdo. O botão Next aparece perto da parte inferior da tela. (escuro)](../../images/privacy/privacy-custom-messaging-incorrect-close-button~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-incorrect-close-button@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-incorrect-close-button~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../images/privacy/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

### Solicitações de rastreamento

O rastreamento de apps é um assunto sensível. Em alguns casos, pode fazer sentido exibir uma tela ou janela personalizada que descreva os benefícios do rastreamento. Se você quiser realizar o rastreamento de apps assim que as pessoas abrirem seu app, deve exibir o alerta fornecido pelo sistema antes de coletar qualquer dado de rastreamento.

**Nunca anteceda o alerta fornecido pelo sistema com uma tela ou janela personalizada que possa confundir ou enganar as pessoas.** Às vezes, as pessoas tocam rapidamente para dispensar alertas sem lê-los. Uma tela, janela ou view de mensagem personalizada que se aproveite desses comportamentos para influenciar escolhas levará à rejeição pela análise da App Store.

Existem vários designs de tela personalizada proibidos que causarão rejeição. Alguns exemplos são oferecer incentivos, exibir uma tela ou janela que se pareça com uma solicitação, exibir uma imagem do alerta e anotar a tela atrás do alerta (como mostrado abaixo). Para evitar confusão, é permitido exibir uma tela ou janela de consentimento antes ou depois de um alerta do sistema do [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency) para cumprir leis locais de privacidade. Para saber mais, consulte [App Review Guidelines: 5.1.1 (iv)](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage).

**Incentivo**

![Uma captura de tela da mensagem anterior ao rastreamento de um app que diz Allow tracking and get a $100 credit toward your next purchase. Abaixo do texto há uma imagem de um cifrão dentro de um círculo. Abaixo da imagem há um botão chamado Get $100 credit.](../../images/privacy/privacy-custom-messaging-prohibited-incentive@2x.png) ![Uma captura de tela da mensagem anterior ao rastreamento de um app que diz Allow tracking and get a $100 credit toward your next purchase. Abaixo do texto há uma imagem de um cifrão dentro de um círculo. Abaixo da imagem há um botão chamado Get $100 credit. (escuro)](../../images/privacy/privacy-custom-messaging-prohibited-incentive~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-prohibited-incentive@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-prohibited-incentive~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../images/privacy/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

**Solicitação imitada**

![Uma captura de tela da mensagem anterior ao rastreamento de um app que diz Allow tracking for a better experience. Abaixo do texto há uma imagem de gráfico de barras que mostra quatro barras crescendo em altura da esquerda para a direita. Abaixo do gráfico há um botão chamado Allow Tracking.](../../images/privacy/privacy-custom-messaging-prohibited-imitation@2x.png) ![Uma captura de tela da mensagem anterior ao rastreamento de um app que diz Allow tracking for a better experience. Abaixo do texto há uma imagem de gráfico de barras que mostra quatro barras crescendo em altura da esquerda para a direita. Abaixo do gráfico há um botão chamado Allow Tracking. (escuro)](../../images/privacy/privacy-custom-messaging-prohibited-imitation~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-prohibited-imitation@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-prohibited-imitation~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../images/privacy/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

**Imagem do alerta**

![Uma captura de tela da mensagem anterior ao rastreamento de um app que diz Choose Allow when prompted. Abaixo do texto há uma imagem do alerta fornecido pelo sistema. Abaixo da imagem há um botão chamado Continue. O botão Allow While Using the App na imagem do alerta fornecido pelo sistema está circulado.](../../images/privacy/privacy-custom-messaging-prohibited-alert@2x.png) ![Uma captura de tela da mensagem anterior ao rastreamento de um app que diz Choose Allow when prompted. Abaixo do texto há uma imagem do alerta fornecido pelo sistema. Abaixo da imagem há um botão chamado Continue. O botão Allow While Using the App na imagem do alerta fornecido pelo sistema está circulado. (escuro)](../../images/privacy/privacy-custom-messaging-prohibited-alert~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-prohibited-alert@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-prohibited-alert~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../images/privacy/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

**Anotação no alerta**

![Uma captura de tela da mensagem anterior ao rastreamento de um app que diz Allow tracking for a better experience. A tela personalizada do app também inclui uma seta apontando para cima e as palavras Choose Allow no terço inferior da tela.](../../images/privacy/privacy-custom-messaging-prohibited-alert-annotation@2x.png) ![Uma captura de tela da mensagem anterior ao rastreamento de um app que diz Allow tracking for a better experience. A tela personalizada do app também inclui uma seta apontando para cima e as palavras Choose Allow no terço inferior da tela. (escuro)](../../images/privacy/privacy-custom-messaging-prohibited-alert-annotation~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-prohibited-alert-annotation@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-custom-messaging-prohibited-alert-annotation~dark@2x.png)*

![Um X em um círculo para indicar um exemplo incorreto.](../../images/privacy/crossout@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/crossout@2x.png)*

## Botão de localização

No iOS, iPadOS e watchOS, o Core Location fornece um botão para que as pessoas concedam ao seu app autorização temporária para acessar a localização no momento em que uma tarefa precisar. A aparência do botão de localização pode variar para combinar com a interface do seu app, e ele sempre comunica a ação de compartilhar a localização de maneira instantaneamente reconhecível.

![Uma imagem de um botão azul em formato de pílula que exibe um indicador de localização branco — isto é, uma ponta de seta estreita apontando para o canto superior direito — seguido do texto Current Location.](../../images/privacy/location-button@2x.png) ![Uma imagem de um botão azul em formato de pílula que exibe um indicador de localização branco — isto é, uma ponta de seta estreita apontando para o canto superior direito — seguido do texto Current Location. (escuro)](../../images/privacy/location-button~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/location-button@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/location-button~dark@2x.png)*

Na primeira vez que as pessoas abrem seu app e tocam em um botão de localização, o sistema exibe um alerta padrão. O alerta ajuda as pessoas a entender como o uso do botão limita o acesso do seu app à localização delas e as lembra do indicador de localização que aparece quando o compartilhamento começa.

![Uma captura de tela do alerta exibido pelo botão de localização, que aparece sobre uma imagem de fundo mostrando um mapa parcial. O alerta diz Allow Social Media to access your location? Turning on location  will allow us to show you nearby post locations. Abaixo desse texto, o alerta exibe uma pequena imagem do mapa, ampliada para mostrar parte de Cupertino. Abaixo do mapa há três botões; de cima para baixo, os títulos são Allow Once, Allow While Using App e Don't Allow.](../../images/privacy/privacy-social-media-map-location-alert@2x.png) ![Uma captura de tela do alerta exibido pelo botão de localização, que aparece sobre uma imagem de fundo mostrando um mapa parcial. O alerta diz Allow Social Media to access your location? Turning on location  will allow us to show you nearby post locations. Abaixo desse texto, o alerta exibe uma pequena imagem do mapa, ampliada para mostrar parte de Cupertino. Abaixo do mapa há três botões; de cima para baixo, os títulos são Allow Once, Allow While Using App e Don't Allow. (escuro)](../../images/privacy/privacy-social-media-map-location-alert~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-social-media-map-location-alert@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/privacy-social-media-map-location-alert~dark@2x.png)*

Depois que as pessoas confirmam que entenderam a ação do botão, basta tocar no botão de localização para dar ao seu app permissão única para acessar a localização. Embora cada autorização única expire quando as pessoas deixam de usar seu app, elas não precisam reconfirmar que entenderam o comportamento do botão.

> **Observação:** Se seu app não tiver status de autorização, tocar no botão de localização tem o mesmo efeito de quando a pessoa escolhe *Allow Once* no alerta padrão. Se as pessoas escolheram anteriormente *While Using the App*, tocar no botão de localização não altera o status do seu app. Para orientações a desenvolvedores, consulte [LocationButton](https://developer.apple.com/documentation/corelocationui/locationbutton) (SwiftUI) e [CLLocationButton](https://developer.apple.com/documentation/corelocationui/cllocationbutton) (Swift).

**Considere usar o botão de localização para dar às pessoas uma forma leve de compartilhar a localização em recursos específicos do app.** Por exemplo, seu app pode ajudar as pessoas a anexar a localização a uma mensagem ou publicação, encontrar uma loja ou identificar um prédio, planta ou animal que encontraram onde estão. Se você sabe que as pessoas costumam conceder ao seu app a permissão *Allow Once*, considere usar o botão de localização para ajudá-las a se beneficiar do compartilhamento de localização sem ter que interagir repetidamente com o alerta.

**Considere personalizar o botão de localização para harmonizá-lo com sua interface.** Especificamente, você pode:

- Escolher o título fornecido pelo sistema que funcione melhor com seu recurso, como “Current Location” ou “Share My Current Location”.
- Escolher o glifo de localização preenchido ou em contorno.
- Selecionar uma cor de fundo e uma cor para o título e o glifo.
- Ajustar o raio dos cantos do botão.

Para ajudar as pessoas a reconhecer e confiar nos botões de localização, você não pode personalizar os outros atributos visuais do botão. O sistema também garante que o botão de localização permaneça legível, avisando você sobre problemas como combinações de cores de baixo contraste ou translucidez excessiva. Além de corrigir esses problemas, você é responsável por garantir que o texto caiba no botão — por exemplo, o texto do botão precisa caber sem truncamento em todos os tamanhos de texto de acessibilidade e quando traduzido para outros idiomas.

> **Importante:** Se o sistema identificar problemas recorrentes com seu botão de localização personalizado, ele não dará ao seu app acesso à localização do dispositivo quando as pessoas tocarem nele. Embora esse botão possa executar outras ações específicas do app, as pessoas podem perder a confiança no seu app se o botão de localização não funcionar como esperam.

## Protegendo dados

Proteger as informações das pessoas é fundamental. Dê às pessoas confiança na segurança do seu app e ajude a preservar a privacidade delas aproveitando as tecnologias de segurança fornecidas pelo sistema quando você precisar armazenar informações localmente, autorizar pessoas para operações específicas e transportar informações por uma rede.

Aqui estão algumas diretrizes gerais.

**Evite depender apenas de senhas para autenticação.** Sempre que possível, use [passkeys](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys/) para substituir senhas. Se precisar continuar usando senhas para autenticação, reforce a segurança exigindo autenticação de dois fatores (para orientações a desenvolvedores, consulte [Securing Logins with iCloud Keychain Verification Codes](https://developer.apple.com/documentation/authenticationservices/securing-logins-with-icloud-keychain-verification-codes)). Para proteger ainda mais o acesso a apps que as pessoas mantêm conectados no dispositivo, use identificação biométrica como Face ID, Optic ID ou Touch ID. Para orientações a desenvolvedores, consulte [Local Authentication](https://developer.apple.com/documentation/localauthentication).

**Armazene informações sensíveis em um keychain.** Um keychain oferece uma experiência de usuário segura e previsível ao lidar com informações privadas de alguém. Para orientações a desenvolvedores, consulte [Keychain services](https://developer.apple.com/documentation/security/keychain-services).

**Nunca armazene senhas ou outros conteúdos seguros em arquivos de texto simples.** Mesmo que você restrinja o acesso usando permissões de arquivo, informações sensíveis ficam muito mais seguras em um keychain criptografado.

**Evite inventar esquemas de autenticação personalizados.** Se seu app exigir autenticação, prefira recursos fornecidos pelo sistema, como [passkeys](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys/), [Sign in with Apple](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple) ou [Password AutoFill](https://developer.apple.com/documentation/security/password-autofill). Para orientações relacionadas, consulte [Gerenciando contas](https://developer.apple.com/design/human-interface-guidelines/managing-accounts).

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, tvOS ou watchOS.*

### macOS

**Assine seu app com um Developer ID válido.** Se você optar por distribuir seu app fora da loja, assiná-lo com um Developer ID o identifica como desenvolvedor Apple e confirma que seu app é seguro para uso. Para orientações a desenvolvedores, consulte [Xcode Help](https://developer.apple.com/go/?id=ios-app-distribution-guide).

**Proteja os dados das pessoas com o App Sandbox.** O sandbox dá ao seu app acesso aos recursos do sistema e aos dados do usuário, ao mesmo tempo que o protege contra malware. Todos os apps enviados à Mac App Store exigem sandbox. Para orientações a desenvolvedores, consulte [Configuring the macOS App Sandbox](https://developer.apple.com/documentation/xcode/configuring-the-macos-app-sandbox).

**Evite fazer suposições sobre quem está conectado.** Devido à troca rápida de usuários, várias pessoas podem estar ativas no mesmo sistema.

### visionOS

Por padrão, o visionOS usa algoritmos do ARKit para lidar com recursos como persistência, mapeamento do mundo, segmentação, matting e iluminação do ambiente. Esses algoritmos estão sempre em execução, permitindo que apps e jogos se beneficiem automaticamente do ARKit enquanto estão no Shared Space.

O ARKit não envia dados a apps no Shared Space; para acessar as APIs do ARKit, seu app deve abrir um Full Space. Além disso, recursos como Plane Estimation, Scene Reconstruction, Image Anchoring e Hand Tracking exigem a permissão das pessoas para acessar qualquer informação. Para orientações a desenvolvedores, consulte [Setting up access to ARKit data](https://developer.apple.com/documentation/visionos/setting-up-access-to-arkit-data).

No visionOS, a entrada do usuário é privada por design. O sistema exibe automaticamente efeitos de hover quando as pessoas olham para componentes interativos que você cria usando SwiftUI ou RealityKit, dando às pessoas o retorno visual de que precisam sem expor para onde estão olhando antes de tocarem. Para orientações, consulte [Olhos](https://developer.apple.com/design/human-interface-guidelines/eyes) e [Gestos > visionOS](https://developer.apple.com/design/human-interface-guidelines/gestures#visionOS).

O acesso de desenvolvedores às câmeras do dispositivo funciona de maneira diferente no visionOS em relação a outras plataformas. Especificamente, a câmera traseira fornece entrada em branco e só está disponível como conveniência de compatibilidade; a câmera frontal fornece entrada para [Personas espaciais](https://developer.apple.com/design/human-interface-guidelines/shareplay#visionOS), mas somente depois que as pessoas concedem permissão. Se o app de iOS ou iPadOS que você está levando para o visionOS incluir um recurso que precise de acesso à câmera, remova-o ou substitua-o por uma opção para que as pessoas importem conteúdo. Para orientações a desenvolvedores, consulte [Making your existing app compatible with visionOS](https://developer.apple.com/documentation/visionos/making-your-app-compatible-with-visionos).

## Recursos

#### Relacionados

[Inserção de dados](https://developer.apple.com/design/human-interface-guidelines/entering-data)

[Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding)

#### Documentação para desenvolvedores

[Requesting access to protected resources](https://developer.apple.com/documentation/uikit/requesting-access-to-protected-resources) — UIKit

[Security](https://developer.apple.com/documentation/security)

[Requesting authorization to use location services](https://developer.apple.com/documentation/corelocation/requesting-authorization-to-use-location-services) — CoreLocation

[App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency)

#### Vídeos

- [Conheça o Trust Insights](https://developer.apple.com/videos/play/wwdc2026/379)
- [Integre a privacidade ao seu processo de desenvolvimento](https://developer.apple.com/videos/play/wwdc2025/246)
- [Novidades nas passkeys](https://developer.apple.com/videos/play/wwdc2025/279)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 21 de junho de 2023 | Orientações consolidadas em uma nova página e atualizadas para o visionOS. |
