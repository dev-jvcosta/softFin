# Feedback

> Fonte: https://developer.apple.com/design/human-interface-guidelines/feedback
>
> Plataformas: ios,ipados,macos,tvos,visionos,watchos

*O feedback ajuda as pessoas a saber o que está acontecendo, descobrir o que podem fazer em seguida, entender os resultados das ações e evitar erros.*

![Um esboço de um ponteiro cercado por um conjunto circular de linhas curtas, sugerindo uma resposta a um clique do mouse. A imagem está sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original de seis cores da Apple.](../../images/feedback/patterns-feedback-intro@2x.png) ![Um esboço de um ponteiro cercado por um conjunto circular de linhas curtas, sugerindo uma resposta a um clique do mouse. A imagem está sobreposta por linhas de grade retangulares e circulares e tem um tom laranja para refletir sutilmente o laranja do logotipo original de seis cores da Apple. (escuro)](../../images/feedback/patterns-feedback-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-feedback-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/patterns-feedback-intro~dark@2x.png)*

Fornecer feedback claro e consistente à medida que as pessoas interagem com o seu app ou jogo pode torná-lo intuitivo e incentivar uma exploração mais profunda. O feedback pode comunicar várias coisas diferentes, como:

- O status atual de algo
- O sucesso ou a falha de uma tarefa ou ação importante
- Um aviso sobre uma ação que pode ter consequências negativas
- Uma oportunidade de corrigir um erro ou uma situação problemática

O feedback mais eficaz tende a combinar a importância da informação com a forma como ela é entregue. Por exemplo, muitas vezes funciona bem exibir informações de status de maneira passiva, para que as pessoas possam vê-las quando precisarem. Em contrapartida, um aviso sobre possível perda de dados precisa interromper as pessoas para que tenham a chance de evitar o problema.

## Boas práticas

**Garanta que todo feedback seja acessível.** Quando você usa várias formas de fornecer feedback, alcança mais pessoas e dá a elas a oportunidade de receber o feedback da maneira que funcionar melhor para elas. Por exemplo, quando você fornece feedback usando cor, texto, som e háptica, as pessoas podem recebê-lo mesmo que silenciem o dispositivo, desviem o olhar da tela ou usem o VoiceOver. (Para orientações sobre como fornecer feedback háptico, consulte [Reprodução de háptica](https://developer.apple.com/design/human-interface-guidelines/playing-haptics).)

**Considere integrar o feedback de status à sua interface.** Quando o feedback de status está disponível perto dos itens que ele descreve, as pessoas obtêm informações importantes sem precisar tomar uma ação nem sair do contexto atual. Por exemplo, o Mail no iOS e no iPadOS descreve a atualização mais recente e exibe o número de mensagens não lidas na barra de ferramentas da tela da caixa de correio, tornando a informação discreta, mas fácil de consultar quando as pessoas têm interesse.

**Use alertas para entregar informações críticas — e, de preferência, acionáveis.** Por definição, os alertas interrompem o contexto atual, então você precisa equilibrar a importância da informação com o nível de interrupção. Os alertas podem perder seu impacto se forem usados com muita frequência ou para entregar informações sem importância. Para orientações, consulte [Alertas](https://developer.apple.com/design/human-interface-guidelines/alerts).

**Avise as pessoas quando elas iniciarem uma tarefa que possa causar perda de dados inesperada e irreversível.** Em contrapartida, não avise as pessoas quando a perda de dados for o resultado esperado da ação delas. Por exemplo, o Finder não avisa as pessoas toda vez que elas jogam um arquivo no lixo, porque a exclusão do arquivo é o resultado esperado.

**Quando fizer sentido, confirme que uma ação ou tarefa significativa foi concluída.** Por exemplo, as pessoas apreciam receber um feedback que confirme uma transação do Apple Pay bem-sucedida. Em geral, é melhor reservar esse tipo de confirmação para atividades suficientemente importantes — como as pessoas normalmente esperam que a ação ou tarefa seja bem-sucedida, elas só precisam saber quando isso não acontece.

**Mostre às pessoas quando um comando não pode ser executado e ajude-as a entender o motivo.** Por exemplo, se as pessoas pedem rotas sem especificar um destino, o Mapas informa que não pode fornecer rotas de e para o mesmo local.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS, tvOS ou visionOS.*

### watchOS

**Evite exibir um indicador de progresso indeterminado — como um indicador de carregamento — em um app do watchOS.** Um indicador animado pode fazer as pessoas pensarem que precisam continuar prestando atenção à tela, o que não é uma boa experiência de usuário. Para oferecer uma experiência melhor, tranquilize as pessoas informando que elas receberão uma notificação quando o processo for concluído.

## Recursos

#### Relacionados

[Reprodução de áudio](https://developer.apple.com/design/human-interface-guidelines/playing-audio)

[Reprodução de háptica](https://developer.apple.com/design/human-interface-guidelines/playing-haptics)

[Movimento](https://developer.apple.com/design/human-interface-guidelines/motion)

#### Documentação para desenvolvedores

[Animation and haptics](https://developer.apple.com/documentation/uikit/animation-and-haptics) — UIKit

#### Vídeos

- [Designing Fluid Interfaces](https://developer.apple.com/videos/play/wwdc2018/803)
- [Essential Design Principles](https://developer.apple.com/videos/play/wwdc2017/802)
