# Visualizações web (Web views)

> Fonte: https://developer.apple.com/design/human-interface-guidelines/web-views
>
> Plataformas: ios,ipados,macos,visionos

*Uma visualização web carrega e exibe conteúdo web rico, como HTML incorporado e sites, diretamente dentro do seu app.*

![Uma representação estilizada de um ícone de bússola. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores.](../../../images/web-views/components-web-view-intro@2x.png) ![Uma representação estilizada de um ícone de bússola. A imagem tem um tom vermelho para refletir sutilmente o vermelho do logotipo original da Apple de seis cores. (escuro)](../../../images/web-views/components-web-view-intro~dark@2x.png)

*Fonte da imagem: [light](https://developer.apple.com/tutorials/images/com.apple.HIG/components-web-view-intro@2x.png) · [dark](https://developer.apple.com/tutorials/images/com.apple.HIG/components-web-view-intro~dark@2x.png)*

Por exemplo, o Mail usa uma visualização web para mostrar o conteúdo HTML das mensagens.

## Boas práticas

**Ofereça navegação para frente e para trás quando apropriado.** As visualizações web oferecem suporte à navegação para frente e para trás, mas esse comportamento não está disponível por padrão. Se as pessoas provavelmente usarão sua visualização web para visitar várias páginas, permita a navegação para frente e para trás e forneça os controles correspondentes para iniciar esses recursos.

**Evite usar uma visualização web para criar um navegador.** Usar uma visualização web para permitir que as pessoas acessem brevemente um site sem sair do contexto do seu app não tem problema, mas o Safari é a principal forma pela qual as pessoas navegam na web. Tentar replicar a funcionalidade do Safari no seu app é desnecessário e desencorajado.

## Considerações por plataforma

*Nenhuma consideração adicional para iOS, iPadOS, macOS ou visionOS. Não é compatível com tvOS ou watchOS.*

## Recursos

#### Relacionados

[Webkit.org](https://webkit.org/)

#### Documentação para desenvolvedores

[WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) — WebKit

#### Vídeos

- [Conheça as novidades do WKWebView](https://developer.apple.com/videos/play/wwdc2021/10032)
