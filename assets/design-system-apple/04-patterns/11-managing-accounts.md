# Gerenciamento de contas (Managing accounts)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/managing-accounts
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*Quando não cria uma barreira desnecessária para a sua experiência, uma conta pode ser uma maneira conveniente de as pessoas acessarem seu conteúdo e acompanharem detalhes pessoais.*

![Um esboço de uma pessoa, sugerindo informações pessoais. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores.](../../images/managing-accounts/patterns-managing-accounts-intro@2x.png) ![Um esboço de uma pessoa, sugerindo informações pessoais. A imagem é sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original da Apple de seis cores. (escuro)](../../images/managing-accounts/patterns-managing-accounts-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-managing-accounts-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-managing-accounts-intro~dark@2x.png)*

Peça às pessoas que criem uma conta somente se a funcionalidade principal do seu app a exigir; caso contrário, deixe que as pessoas aproveitem seu app ou jogo sem uma conta. Se você exigir uma conta, considere usar o [Sign in with Apple](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple) para oferecer às pessoas uma experiência de login consistente em que possam confiar e a conveniência de não precisar lembrar várias contas e métodos de autenticação.

## Boas práticas

**Explique os benefícios de criar uma conta e como se cadastrar.** Se seu app ou jogo exigir uma conta, escreva uma descrição breve e amigável dos motivos da exigência e de seus benefícios. Exiba essa mensagem na sua view de login.

**Adie o login pelo maior tempo possível.** As pessoas costumam abandonar apps quando são obrigadas a fazer login antes de poderem fazer qualquer coisa útil. Para ajudar a evitar essa situação, dê às pessoas a chance de ter uma noção do que seu app ou jogo faz antes de pedir que se comprometam com ele. Por exemplo, um app de compras pode permitir que as pessoas naveguem à vontade, exigindo login somente quando estiverem prontas para fazer uma compra.

**Se você não usa o Sign in with Apple no seu app de iOS, iPadOS, macOS ou visionOS, prefira usar uma passkey.** As passkeys simplificam a criação de conta e a autenticação, eliminando a necessidade de as pessoas criarem ou digitarem senhas. Quando um app oferece suporte a passkeys, as pessoas simplesmente informam o nome de usuário ao criar uma nova conta ou ao entrar em uma já existente. Para orientações a desenvolvedores, consulte [Supporting passkeys](https://developer.apple.com/documentation/authenticationservices/supporting-passkeys). Se precisar continuar usando senhas para autenticação, reforce a segurança exigindo autenticação de dois fatores (para orientações a desenvolvedores, consulte [Securing Logins with iCloud Keychain Verification Codes](https://developer.apple.com/documentation/authenticationservices/securing-logins-with-icloud-keychain-verification-codes)).

**Sempre identifique o método de autenticação que você oferece.** Por exemplo, se você exibir um botão para entrar no seu app com Face ID, intitule-o com uma frase como “Entrar com Face ID” em vez de uma frase genérica como “Entrar”.

**Faça referência apenas a métodos de autenticação disponíveis no contexto atual.** Por exemplo, não mencione o Face ID em um dispositivo que não o ofereça. Verifique os recursos do dispositivo e use a terminologia apropriada. Para orientações a desenvolvedores, consulte [LABiometryType](https://developer.apple.com/documentation/localauthentication/labiometrytype).

**Em geral, evite oferecer um ajuste específico do app para ativar a autenticação biométrica.** As pessoas ativam a autenticação biométrica no nível do sistema, portanto apresentar um ajuste dentro do app é redundante e pode causar confusão.

**Evite usar o termo *código* (passcode) para se referir à autenticação de contas.** As pessoas criam um código para desbloquear o dispositivo ou autenticar-se em serviços da Apple. Se você usar o termo na sua interface, as pessoas podem pensar que você está pedindo que reutilizem o código delas no seu app ou jogo.

## Exclusão de contas

Se você ajuda as pessoas a criar uma conta dentro do seu app ou jogo, também deve ajudá-las a excluí-la, e não apenas desativá-la. Além de seguir as diretrizes abaixo, certifique-se de entender e cumprir os requisitos legais da sua região relacionados à exclusão de contas e ao direito de ser esquecido.

> **Importante:** Se exigências legais obrigarem seu app a manter contas ou informações — como registros de saúde digitais — ou a seguir um processo específico de exclusão de conta, descreva claramente a situação para que as pessoas possam entender quais informações ou contas você deve manter e qual processo deve seguir.

**Forneça uma maneira clara de iniciar a exclusão da conta dentro do seu app ou jogo.** Se as pessoas não puderem excluir a conta dentro do seu app, você deve fornecer um link direto para a página da web em que possam fazê-lo. Torne o link fácil de encontrar — por exemplo, não o esconda nas páginas de Política de Privacidade ou Termos de Serviço.

> **Nota para desenvolvedores:** Se as pessoas usaram o [Sign in with Apple](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple) para criar uma conta dentro do seu app, você revoga os tokens associados quando elas excluem a conta. Consulte [Token revocation](https://developer.apple.com/documentation/signinwithapplerestapi/revoke-tokens).

**Ofereça uma experiência de exclusão de conta consistente, quer as pessoas a realizem dentro do seu app ou jogo, quer no site.** Por exemplo, evite tornar uma versão do fluxo de exclusão mais longa ou mais complicada que a outra.

**Considere permitir que as pessoas agendem a exclusão da conta para ocorrer no futuro.** As pessoas podem gostar da oportunidade de usar os serviços restantes ou de esperar até que a assinatura seja renovada automaticamente antes de excluir a conta. Se você oferecer uma forma de agendar a exclusão da conta, ofereça também uma opção de exclusão imediata.

**Informe às pessoas quando a exclusão da conta será concluída e avise-as quando terminar.** Como às vezes pode levar um tempo para excluir totalmente uma conta, é essencial manter as pessoas informadas sobre o status do processo de exclusão para que saibam o que esperar.

**Se você oferece suporte a compras no app, ajude as pessoas a entender como funcionam a cobrança e o cancelamento quando excluem a conta.** Por exemplo, talvez você precise ajudar as pessoas a entender os seguintes cenários:

- A cobrança de uma assinatura com renovação automática continua por meio da Apple até que as pessoas cancelem a assinatura, independentemente de terem excluído a conta.
- Depois de excluir a conta, as pessoas precisam cancelar a assinatura ou solicitar um reembolso.

Além de ajudar as pessoas a entender esses cenários, forneça informações que descrevam como cancelar assinaturas e gerenciar compras. Para orientações, consulte [Ajudando as pessoas a gerenciar suas assinaturas](https://developer.apple.com/design/human-interface-guidelines/apple-in-app-purchase#Helping-people-manage-their-subscriptions) e [Fornecendo ajuda](https://developer.apple.com/design/human-interface-guidelines/apple-in-app-purchase#Providing-help).

> **Observação:** Mesmo que as pessoas não tenham usado seu app para comprar a assinatura, você ainda precisa oferecer suporte à exclusão de contas.

## Contas de provedores de TV

Muitos provedores de TV populares permitem que as pessoas entrem nas contas no nível do sistema, eliminando a necessidade de se autenticar app por app. Se seu app de provedor de TV exigir login, use o TV Provider Authentication para oferecer a experiência de onboarding mais eficiente.

**Evite exibir uma opção de sair quando as pessoas estiverem conectadas no nível do sistema.** Se seu app precisar incluir uma opção de sair, acioná-la deve orientar as pessoas a acessar Ajustes > Provedor de TV para sair da conta.

**Nunca instrua as pessoas a sair ajustando controles de privacidade.** Os controles de provedor de TV em Ajustes > Privacidade não são um mecanismo de logout. Esses ajustes ajudam as pessoas a gerenciar os apps que podem acessar a conta do provedor de TV.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS ou visionOS.*

### tvOS

A maioria das pessoas interage com a Apple TV usando um controle remoto, e não um teclado, portanto peça a quantidade mínima de informações necessária.

**Prefira permitir que as pessoas usem outro dispositivo para se cadastrar ou se autenticar.** Quando você configura os domínios associados do seu app, a Apple TV pode trabalhar com outros dispositivos para sugerir credenciais de login com segurança, incluindo o [Sign in with Apple](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple). Para orientações a desenvolvedores, consulte [Configuring an associated domain](https://developer.apple.com/documentation/xcode/configuring-an-associated-domain).

**Quando as pessoas estiverem conectadas a uma conta compartilhada, evite pedir que escolham o perfil toda vez que se tornarem o usuário atual.** No tvOS 16 e posterior, seu app pode compartilhar suas credenciais com todos os usuários, armazenando separadamente o perfil e os dados de usuário de cada pessoa. Quando você oferece suporte a esse tipo de compartilhamento, seu app pode usar automaticamente o perfil do usuário atual sem pedir que cada pessoa entre separadamente em uma conta compartilhada. Para orientações a desenvolvedores, consulte [kSecUseUserIndependentKeychain](https://developer.apple.com/documentation/security/ksecuseuserindependentkeychain) e [User Management Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.user-management).

**Minimize a entrada de dados.** Se você precisar coletar mais do que uma pequena quantidade de informações, peça às pessoas que visitem um site a partir de outro dispositivo. Se precisar de um endereço de e-mail, mostre a tela do teclado de e-mail, que inclui uma lista de endereços digitados recentemente.

### watchOS

Use a sincronização do iCloud para fornecer acesso ao Keychain, permitindo que as pessoas preencham automaticamente nomes de usuário e senhas e preservem os ajustes do app.

## Recursos

#### Relacionados

[Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding)

[Sign in with Apple](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple)

#### Documentação para desenvolvedores

[Supporting passkeys](https://developer.apple.com/documentation/authenticationservices/supporting-passkeys) — Authentication Services

#### Vídeos

- [Novidades nas passkeys](https://developer.apple.com/videos/play/wwdc2025/279)
- [Novidades no gerenciamento de dispositivos](https://developer.apple.com/videos/play/wwdc2024/10143)
