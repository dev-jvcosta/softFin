# Ornamentos (Ornaments)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/ornaments
>
> Plataformas: visionos

*No visionOS, um ornamento apresenta controles e informações relacionados a uma janela, sem sobrecarregar nem obscurecer o conteúdo da janela.*

![Uma representação estilizada de um ornamento na parte inferior de uma janela, exibido sobre uma grade que sugere a tela de uma ferramenta de design. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/ornaments/components-ornaments-intro@2x.png) ![Uma representação estilizada de um ornamento na parte inferior de uma janela, exibido sobre uma grade que sugere a tela de uma ferramenta de design. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/ornaments/components-ornaments-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-ornaments-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-ornaments-intro~dark@2x.png)*

Um ornamento flutua em um plano paralelo à janela associada e ligeiramente à frente dela ao longo do eixo z. Se a janela associada se move, o ornamento se move junto com ela, mantendo sua posição relativa; se o conteúdo da janela rola, os controles ou as informações no ornamento permanecem inalterados.

Os ornamentos podem aparecer em qualquer borda de uma janela e podem conter componentes de interface como botões, controles segmentados e outras visualizações. O sistema usa ornamentos para criar e gerenciar componentes como [barras de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars), [barras de abas](https://developer.apple.com/design/human-interface-guidelines/tab-bars) e controles de reprodução de vídeo; você pode usar um ornamento para criar um componente personalizado.

## Boas práticas

**Considere usar um ornamento para apresentar controles ou informações necessários com frequência em um local consistente que não polua a janela.** Como um ornamento fica próximo à janela, as pessoas sempre sabem onde encontrá-lo. Por exemplo, o Music usa um ornamento para oferecer os controles de Tocando Agora, garantindo que esses controles permaneçam em um local previsível e fácil de encontrar.

**Em geral, mantenha um ornamento visível.** Pode fazer sentido ocultar um ornamento quando as pessoas mergulham no conteúdo de uma janela — por exemplo, ao assistir a um vídeo ou ver uma foto —, mas, na maioria dos casos, as pessoas apreciam ter acesso consistente aos controles de um ornamento.

**Se precisar exibir vários ornamentos, priorize o equilíbrio visual geral da janela.** Os ornamentos ajudam a destacar ações importantes, mas às vezes podem distrair do seu conteúdo. Quando necessário, considere limitar o número total de ornamentos para evitar aumentar o peso visual de uma janela e fazer seu app parecer mais complicado. Se você decidir remover um ornamento, pode realocar seus elementos para a janela principal.

**Procure manter a largura de um ornamento igual ou menor que a largura da janela associada.** Se um ornamento for mais largo que sua janela, ele pode interferir em uma barra de abas ou em outro conteúdo vertical na lateral da janela.

**Considere usar botões sem borda em um ornamento.** Por padrão, o plano de fundo de um ornamento é de [vidro](https://developer.apple.com/design/human-interface-guidelines/materials#visionOS), então, se você colocar um botão diretamente no plano de fundo, ele pode não precisar de uma borda visível. Quando as pessoas olham para um botão sem borda em um ornamento, o sistema aplica automaticamente o efeito de foco (hover) a ele (para orientações, consulte [Olhos](https://developer.apple.com/design/human-interface-guidelines/eyes)).

**Use as barras de ferramentas e barras de abas fornecidas pelo sistema, a menos que precise criar componentes personalizados.** No visionOS, as barras de ferramentas e as barras de abas aparecem automaticamente como ornamentos, então você não precisa usar um ornamento para criar esses componentes. Para orientações para desenvolvedores, consulte [Toolbars](https://developer.apple.com/documentation/swiftui/toolbars) e [TabView](https://developer.apple.com/documentation/swiftui/tabview).

## Considerações por plataforma

*Não é compatível com iOS, iPadOS, macOS, tvOS ou watchOS.*

## Recursos

#### Relacionados

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

[Barras de ferramentas](https://developer.apple.com/design/human-interface-guidelines/toolbars)

#### Documentação para desenvolvedores

[ornament(visibility:attachmentAnchor:contentAlignment:ornament:)](https://developer.apple.com/documentation/swiftui/view/ornament(visibility:attachmentanchor:contentalignment:ornament:)) — SwiftUI

#### Vídeos

- [Projete para interfaces de usuário espaciais](https://developer.apple.com/videos/play/wwdc2023/10076)

## Histórico de alterações

| Data | Alterações |
|---|---|
| 2 de fevereiro de 2024 | Adicionadas orientações sobre o uso de vários ornamentos. |
| 5 de dezembro de 2023 | Removida uma declaração sobre o uso de ornamentos para apresentar itens complementares. |
| 21 de junho de 2023 | Nova página. |
