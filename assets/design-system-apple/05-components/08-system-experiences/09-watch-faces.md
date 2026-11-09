# Mostradores do relógio (Watch faces)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/watch-faces
>
> Plataformas: watchos

*Um mostrador do relógio é uma visualização que as pessoas escolhem como visualização principal no watchOS.*

![Representação estilizada de uma série de mostradores do Apple Watch. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/watch-faces/components-faces-intro@2x.png) ![Representação estilizada de uma série de mostradores do Apple Watch. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/watch-faces/components-faces-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-faces-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-faces-intro~dark@2x.png)*

O mostrador do relógio está no centro da experiência do watchOS. As pessoas escolhem o mostrador que querem ver toda vez que levantam o pulso e o personalizam com suas complicações favoritas. As pessoas podem até personalizar mostradores diferentes para atividades diferentes, para poder alternar para o mostrador que se adapta ao contexto atual.

No watchOS 7 e posterior, as pessoas podem compartilhar os mostradores que configuram. Por exemplo, um instrutor de condicionamento físico pode configurar um mostrador para compartilhar com os alunos escolhendo o mostrador Gradient, personalizando a cor e adicionando suas complicações favoritas de saúde e condicionamento físico. Quando os alunos adicionam o mostrador compartilhado ao Apple Watch ou ao app Watch no iPhone, eles recebem uma experiência personalizada sem precisar configurá-la por conta própria.

Você também pode configurar um mostrador para compartilhar de dentro do seu app, no seu site ou por meio do Mensagens, do Mail ou das redes sociais. Oferecer mostradores compartilháveis pode ajudar a apresentar suas complicações e seu app a mais pessoas.

## Boas práticas

**Ajude as pessoas a descobrir seu app compartilhando mostradores que destacam suas complicações.** Idealmente, você oferece suporte a várias complicações para poder exibi-las em um mostrador compartilhável e proporcionar uma experiência selecionada. Para alguns mostradores, você também pode especificar uma cor de destaque do sistema, imagens ou estilos. Se as pessoas adicionarem seu mostrador, mas não tiverem instalado seu app, o sistema as orienta a instalá-lo.

**Exiba uma prévia de cada mostrador que você compartilhar.** Exibir uma prévia que destaque as vantagens do seu mostrador pode ajudar as pessoas a visualizar seus benefícios. Você pode obter uma prévia usando o app Watch do iOS para enviar o mostrador por e-mail para si mesmo. A prévia inclui uma moldura ilustrada do dispositivo que envolve o mostrador e é adequada para exibição em sites e em apps watchOS e iOS. Como alternativa, você pode substituir a moldura ilustrada por uma moldura de hardware de alta fidelidade que pode ser baixada em [Apple Design Resources](https://developer.apple.com/design/resources/#product-bezels) e composta sobre a prévia. Para orientações para desenvolvedores, consulte [Sharing an Apple Watch face](https://developer.apple.com/documentation/clockkit/sharing-an-apple-watch-face).

**Procure oferecer mostradores compartilháveis para todos os dispositivos Apple Watch.** Alguns mostradores estão disponíveis no Series 4 e posteriores, como California, Chronograph Pro, Gradient, Infograph, Infograph Modular, Meridian, Modular Compact e Solar Dial, e o Explorer está disponível no Series 3 (com celular) e posteriores. Se você usar um desses mostradores na sua configuração, considere oferecer uma configuração semelhante usando um mostrador disponível no Series 3 e anteriores. Para ajudar as pessoas a escolher, você pode rotular claramente cada mostrador compartilhável com os dispositivos que ele suporta.

**Responda de forma elegante se as pessoas escolherem um mostrador incompatível.** O sistema envia um erro ao seu app quando as pessoas tentam usar um mostrador incompatível no Series 3 ou anterior. Nesse cenário, considere oferecer imediatamente uma configuração alternativa que use um mostrador compatível, em vez de exibir um erro. Junto com as prévias que você fornece, ajude as pessoas a entender que elas podem receber um mostrador alternativo se escolherem um mostrador que não seja compatível com o Apple Watch delas.

## Considerações por plataforma

*Não compatível com iOS, iPadOS, macOS, tvOS ou visionOS.*

## Recursos

#### Relacionados

[Apple Design Resources — Product Bezels](https://developer.apple.com/design/resources/#product-bezels)

#### Documentação para desenvolvedores

[Sharing an Apple Watch face](https://developer.apple.com/documentation/clockkit/sharing-an-apple-watch-face) — ClockKit
