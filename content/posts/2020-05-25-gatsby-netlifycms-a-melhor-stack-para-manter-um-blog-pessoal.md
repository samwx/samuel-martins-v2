---
templateKey: blog-post
title: "Gatsby + NetlifyCMS: a melhor stack para manter um blog pessoal"
date: 2020-05-25T10:30:52.015Z
description: Dentre várias possibilidades que temos para desenvolver nossos
  sites e blogs pessoais, acabei escolhendo essa dupla para compor a stack do
  meu site. Eu gosto muito de ter um olhar crítico e saber exatamente o porquê,
  com base em fundamentos técnicos, das minhas escolhas no mundo da tecnologia.
  Nesse post vou explicar todos os motivos que me fizeram escolher o conjunto de
  ferramentas que adotei aqui e tentar explicar de forma resumida como eu fiz
  isso.
featuredimage: /img/stack-photo.jpg
featuredimageauthor: Martin Sanchez
featuredimagelink: https://unsplash.com/photos/MD6E2Sv__iA
tags:
  - Arquitetura
  - TypeScript
  - Gatsby
---
entre várias possibilidades que temos para desenvolver nossos sites e blogs pessoais, acabei escolhendo essa dupla para compor a stack do meu site. Eu gosto muito de ter um olhar crítico e saber exatamente o porquê, com base em fundamentos técnicos, das minhas escolhas no mundo da tecnologia. Nesse post vou explicar todos os motivos que me fizeram escolher o conjunto de ferramentas que adotei aqui e tentar explicar de forma resumida como eu fiz isso.

Construir um blog/site pessoal pode parecer algo simples, mas quando se trata de um projeto pessoal, acabamos esbarrando em vários obstáculos, entre eles o perfeccionismo. É o seu projeto, que você gastou horas trabalhando e que vai usar como seu cartão de visitas. Você não quer fazer feio. E está certo! Sabemos que alcançar a perfeição é algo totalmente utópico, pois sempre tem uma coisinha ou outra pra arrumar e varia de acordo com o contexto de cada pessoa. Mas dentro da esfera "blog e sites pessoais para quem é desenvolvedor(a)" temos excelentes opções de stacks, e vou mostrar a que escolhi aqui.

### TL;DR

A stack utilizada foi:

* Gatsby;
* NetlifyCMS;
* Typescript;
* Styled-components;
* Tachyons;
* Algolia Search.

O código-fonte você pode encontrar no [meu github](https://github.com/samwx/samuel-martins-v2).

## Primeira escolha: [Gatsby](https://www.gatsbyjs.org/)

A JAMStack (**J**avascript, **A**pis e **M**arkup) vêm ganhando muita adoção por parte da comunidade. Hoje temos [eventos importantes](https://jamstackconf.com/) acontecendo que tratam exclusivamente do assunto e várias opções de fazer isso acontecer, como os conhecidos SSG (static site generators) [Gatsby](https://www.gatsbyjs.org/), [Hugo](https://gohugo.io/), [Next.js](https://nextjs.org/), [Nuxt.js](https://nuxtjs.org/) e [Jekyll](https://jekyllrb.com/). Cada um com suas particularidades. A escolha pelo Gatsby se deu por basicamente quatro motivos: **comunidade**, **flexibilidade**, **documentação** e boa **integração com o Netlify** (que vamos ver mais pra frente).

### Comunidade

Quando falamos de projetos open-source, um fator crucial que devemos levar em conta é a adoção da comunidade para com aquele framework/ferramenta. Mas por que? Simples: bugs são corrigidos mais rápidos, as issues são respondidas com muito mais frequência, a evolução acontece mais rápido e no caso do Gatsby, temos uma infinidade de plugins para facilitar o nosso desenvolvimento. Repare que, olhar para a adoção da comunidade não quer dizer simplesmente ir na onda da *hype* ou olhar para o número de [stars no github](https://hasvuepassedreactyet.surge.sh/). Estamos olhando para fatores que vão realmente influenciar na manutenção do nosso projeto no horizonte do tempo.

### Flexibilidade

O Gatsby é extremamente flexível. Você consegue personalizar tudo, tudo mesmo. E de forma relativamente fácil. Pra quem ainda não teve contato, é um SSG que nos permite escrever o conteúdo em markdown e fazer a hospedagem no próprio repositório. Isso é sensacional, pois dessa forma o conteúdo escrito fica junto com o controle de versão do próprio código, e além desse benefício, conseguimos economizar uma grana/esforço se compararmos com os gerenciadores de conteúdo "tradicionais" como Wordpress e Drupal, que requerem um banco de dados para hospedar o conteúdo. Isso faz toda a diferença e é por isso que o Gatsby tem sido usado para a construção de blogs, páginas estáticas e documentações (como é o caso do React). Você pode ver um [showcase bem legal aqui](https://www.gatsbyjs.org/showcase/).

Uma outra possibilidade legal é que, dado a grande adoção da comunidade, foi possível criar uma página na documentação do Gatsby com vários Starters que nos poupam muito tempo no boilerplate inicial do projeto. Eu acabei utilizando o [Starter Netlify CMS](https://www.gatsbyjs.org/starters/netlify-templates/gatsby-starter-netlify-cms/) com algumas configurações do [Personal Starter Blog](https://www.gatsbyjs.org/starters/thomaswang/gatsby-personal-starter-blog/). O primeiro porque a integração com o NetlifyCMS já vinha totalmente pronta e a segunda porque utilizei alguns recursos interessantes como o highlight do VS Code para demonstrações de código. Para iniciar um projeto com essa estrutura é bem simples, basta rodar o código abaixo no seu terminal:

```bash
gatsby new gatsby-starter-netlify-cms https://github.com/netlify-templates/gatsby-starter-netlify-cms
```

Feito isso, você tem um código previamente configurado com os recursos básicos e pronto para ser customizado.

### Documentação

É muito boa. Temos exemplos de algumas documentações terríveis no mundo open source, mas essa é realmente muito boa. E isso faz total diferença. Afinal não adianta nada um framework ser muito bom se ninguém sabe a forma correta de utilizar ¯_*(ツ)_*/¯. O mais legal é que através da documentação, você consegue ter uma prévia de [como funciona o graphQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/) (não seria possível utilizar o Gatsby nesses moldes sem o GraphQL).

## Segunda escolha: [NetlifyCMS](https://www.netlifycms.org/)

Existem várias opções para hospedagem de sites estáticos. Uma delas é o [Netlify](https://www.netlify.com/). Ele possui um dashboard bem dinâmico e organizado, e o mais legal: é gratuito. Não precisamos mais pagar por hospedagem de sites pessoais. E com o Netlify temos uma outra ferramenta muito legal que é mais de 50% do nosso projeto: o [NetlifyCMS](https://www.netlifycms.org/). Ele funciona da seguinte forma: o Gatsby reconhece arquivos Markdown em uma determinada pasta do nosso projeto para fazer a listagem dos posts e páginas do nosso site. O NetlifyCMS fornece uma maneira fácil e amigável para editar esses arquivos diretamente do nosso repositório do Github, o que faz com que o gerenciamento dos nossos posts fique muito mais fácil, como na imagem abaixo:

![NetlifyCMS Dashboard](/img/untitled.png)

![entre várias possibilidades que temos para desenvolver nossos sites e blogs pessoais, acabei escolhendo essa dupla para compor a stack do meu site. Eu gosto muito de ter um olhar crítico e saber exatamente o porquê, com base em fundamentos técnicos, das minhas escolhas no mundo da tecnologia. Nesse post vou explicar todos os motivos que me fizeram escolher o conjunto de ferramentas que adotei aqui e tentar explicar de forma resumida como eu fiz isso.  Construir um blog/site pessoal pode parecer algo simples, mas quando se trata de um projeto pessoal, acabamos esbarrando em vários obstáculos, entre eles o perfeccionismo. É o seu projeto, que você gastou horas trabalhando e que vai usar como seu cartão de visitas. Você não quer fazer feio. E está certo! Sabemos que alcançar a perfeição é algo totalmente utópico, pois sempre tem uma coisinha ou outra pra arrumar e varia de acordo com o contexto de cada pessoa. Mas dentro da esfera "blog e sites pessoais para quem é desenvolvedor(a)" temos excelentes opções de stacks, e vou mostrar a que escolhi aqui.  ### TL;DR  A stack utilizada foi:  - Gatsby; - NetlifyCMS; - Typescript; - Styled-components; - Tachyons; - Algolia Search.  O código-fonte você pode encontrar no [meu github](https://github.com/samwx/samuel-martins-v2).  ## Primeira escolha: [Gatsby](https://www.gatsbyjs.org/)  A JAMStack (**J**avascript, **A**pis e **M**arkup) vêm ganhando muita adoção por parte da comunidade. Hoje temos [eventos importantes](https://jamstackconf.com/) acontecendo que tratam exclusivamente do assunto e várias opções de fazer isso acontecer, como os conhecidos SSG (static site generators) [Gatsby](https://www.gatsbyjs.org/), [Hugo](https://gohugo.io/), [Next.js](https://nextjs.org/), [Nuxt.js](https://nuxtjs.org/) e [Jekyll](https://jekyllrb.com/). Cada um com suas particularidades. A escolha pelo Gatsby se deu por basicamente quatro motivos: **comunidade**, **flexibilidade**, **documentação** e boa **integração com o Netlify** (que vamos ver mais pra frente).  ### Comunidade  Quando falamos de projetos open-source, um fator crucial que devemos levar em conta é a adoção da comunidade para com aquele framework/ferramenta. Mas por que? Simples: bugs são corrigidos mais rápidos, as issues são respondidas com muito mais frequência, a evolução acontece mais rápido e no caso do Gatsby, temos uma infinidade de plugins para facilitar o nosso desenvolvimento. Repare que, olhar para a adoção da comunidade não quer dizer simplesmente ir na onda da *hype* ou olhar para o número de [stars no github](https://hasvuepassedreactyet.surge.sh/). Estamos olhando para fatores que vão realmente influenciar na manutenção do nosso projeto no horizonte do tempo.  ### Flexibilidade  O Gatsby é extremamente flexível. Você consegue personalizar tudo, tudo mesmo. E de forma relativamente fácil. Pra quem ainda não teve contato, é um SSG que nos permite escrever o conteúdo em markdown e fazer a hospedagem no próprio repositório. Isso é sensacional, pois dessa forma o conteúdo escrito fica junto com o controle de versão do próprio código, e além desse benefício, conseguimos economizar uma grana/esforço se compararmos com os gerenciadores de conteúdo "tradicionais" como Wordpress e Drupal, que requerem um banco de dados para hospedar o conteúdo. Isso faz toda a diferença e é por isso que o Gatsby tem sido usado para a construção de blogs, páginas estáticas e documentações (como é o caso do React). Você pode ver um [showcase bem legal aqui](https://www.gatsbyjs.org/showcase/).  Uma outra possibilidade legal é que, dado a grande adoção da comunidade, foi possível criar uma página na documentação do Gatsby com vários Starters que nos poupam muito tempo no boilerplate inicial do projeto. Eu acabei utilizando o [Starter Netlify CMS](https://www.gatsbyjs.org/starters/netlify-templates/gatsby-starter-netlify-cms/) com algumas configurações do [Personal Starter Blog](https://www.gatsbyjs.org/starters/thomaswang/gatsby-personal-starter-blog/). O primeiro porque a integração com o NetlifyCMS já vinha totalmente pronta e a segunda porque utilizei alguns recursos interessantes como o highlight do VS Code para demonstrações de código. Para iniciar um projeto com essa estrutura é bem simples, basta rodar o código abaixo no seu terminal:  ```bash gatsby new gatsby-starter-netlify-cms https://github.com/netlify-templates/gatsby-starter-netlify-cms ```  Feito isso, você tem um código previamente configurado com os recursos básicos e pronto para ser customizado.  ### Documentação  É muito boa. Temos exemplos de algumas documentações terríveis no mundo open source, mas essa é realmente muito boa. E isso faz total diferença. Afinal não adianta nada um framework ser muito bom se ninguém sabe a forma correta de utilizar ¯\_*(ツ)_*/¯. O mais legal é que através da documentação, você consegue ter uma prévia de [como funciona o graphQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/) (não seria possível utilizar o Gatsby nesses moldes sem o GraphQL).  ## Segunda escolha: [NetlifyCMS](https://www.netlifycms.org/)  Existem várias opções para hospedagem de sites estáticos. Uma delas é o [Netlify](https://www.netlify.com/). Ele possui um dashboard bem dinâmico e organizado, e o mais legal: é gratuito. Não precisamos mais pagar por hospedagem de sites pessoais. E com o Netlify temos uma outra ferramenta muito legal que é mais de 50% do nosso projeto: o [NetlifyCMS](https://www.netlifycms.org/). Ele funciona da seguinte forma: o Gatsby reconhece arquivos Markdown em uma determinada pasta do nosso projeto para fazer a listagem dos posts e páginas do nosso site. O NetlifyCMS fornece uma maneira fácil e amigável para editar esses arquivos diretamente do nosso repositório do Github, o que faz com que o gerenciamento dos nossos posts fique muito mais fácil, como na imagem abaixo:  ![Gatsby%20NetlifyCMS%20a%20melhor%20stack%20para%20manter%20um%20bl%20cb37b13555574f9cbc6e6fb2e6168c1f/Untitled.png](Gatsby%20NetlifyCMS%20a%20melhor%20stack%20para%20manter%20um%20bl%20cb37b13555574f9cbc6e6fb2e6168c1f/Untitled.png)  ![Gatsby%20NetlifyCMS%20a%20melhor%20stack%20para%20manter%20um%20bl%20cb37b13555574f9cbc6e6fb2e6168c1f/Untitled%201.png](Gatsby%20NetlifyCMS%20a%20melhor%20stack%20para%20manter%20um%20bl%20cb37b13555574f9cbc6e6fb2e6168c1f/Untitled%201.png)  E o mais legal é que os campos na imagem acima (title, description, featured image e etc) são completamente customizáveis. Ou seja, você pode adicionar ou remover esses campos que serão exibidos juntamente com seu conteúdo de acordo com a necessidade do seu blog. Eu segui esse [tutorial aqui](https://www.netlifycms.org/docs/gatsby/#header) e consegui configurar tudo isso facilmente.  ## Terceira escolha: [TypeScript](https://www.typescriptlang.org/)  Houve uma época em que eu não gostava muito de TypeScript. Achava que adicionava uma verbosidade desnecessária ao projeto e acaba ficando complexo demais. E realmente fica mais verboso e mais complexo. Só que em termos de escala e consistência, só temos a ganhar. Com o tempo percebi que o TypeScript é praticamente indispensável nos meus projetos web e sou um grande evangelizador dessa linguagem nos locais em que trabalho. Os principais motivos que me fizeram optar pelo TypeScript foram:  - Possibilidade de pegar bugs em tempo de desenvolvimento: pra mim a maior vantagem de utilizar o TypeScript; - Escala: é mais fácil refatorar e mais fácil adicionar novos componentes e alterar comportamentos sem quebrar o que já tinha sido feito; - Consistência: tudo fica mais claro com o TypeScript. Sei exatamente quais propriedades e tipos minhas funções recebem e sei se estou passando o tipo correto.  ## Quarta escolha: [Styled-components](https://styled-components.com/)  A prática de escrita de CSS-in-JS (no meu caso CSS-in-TS 😃) tem sido muito adotada, muito devido a flexibilidade que ela traz para o código. Eu experimentei essa abordagem a um tempo atrás e acabei gostando. "Ah, mas por que não usar SASS ou LESS?". Funcionaria da mesma forma e eu teria uma flexibilidade muito parecida. Só que o CSS-in-JS tem algumas vantagens interessantes que consigo elencar:  - Ausência de colisão de classes: se tem uma coisa que é chata na programação em geral é o *naming*. Dar nome aos bois pode ser um pouco chato, e no CSS corremos o risco de dar nomes repetidos e acabar gerando uma colisão. Com styled-components esse problema desaparece, pois os estilos escritos ficam restritos apenas aquele componente. É possível resolver esse problema via SASS com [CSS Modules](https://github.com/css-modules/css-modules), mas isso é assunto para outro artigo :) - Estilização dinâmica: os componentes do styled-components podem receber props e tornarem-se dinâmicos de acordo com o componente escrito em React. Isso é muito bom, pois podemos alterar o estilo do nosso componente de forma muito simples baseados em ações do usuário  ```tsx // Container com a propriedade display dinâmica export const Container = styled.div<{ display?: string }>`     margin: 0 auto;     width: 900px;     ${({ display }) => display ? `display: ${display};` : ''} `; ```  - *Vendor prefixing*: você escreve o css da sua forma e os componentes se encarregam de adicionar os prefixos para compatibilidade com os outros browsers.  ## Quinta escolha: [Tachyons](https://tachyons.io/)  O tachyons traz um conceito de "CSS funcional" que acho bem interessante. As vezes eu fico um pouco incomodado em definir uma classe css (ou um componente CSS-in-TS, no nosso caso) só para adicionar uma margin ou padding, ou definir algum elemento com width 100%. Para sanar esse problema, o tachyons traz várias classes prontas para estilos simples, como margin, padding, width, height, position e z-index. Ele é uma biblioteca bem pequena e, usada com moderação, a escrita do código fica bem mais produtiva.  ```tsx const NotFoundPage = () => (     <Layout>         <div className="tc"> {/* Classe com a propriedade text-align: center definida */}             <h1>NOT FOUND</h1>             <p>You just hit a route that doesn&#39;t exist... the sadness.</p>         </div>     </Layout> ); ```  ## Sexta escolha: [Algolia Search](https://www.algolia.com/)  O sistema de buscas que escolhi para o projeto em Gatsby foi o Algolia. Com essa ferramenta gratuita, conseguimos indexar os nossos posts e tornar a busca em tempo real algo muito mais performático. Sem contar que a documentação é muito boa e o Gatsby oferece um [plugin para facilitar a integração](https://www.gatsbyjs.org/docs/adding-search-with-algolia/). O painel tem várias métricas legais e a plataforma é muito bem feita:  ![Gatsby%20NetlifyCMS%20a%20melhor%20stack%20para%20manter%20um%20bl%20cb37b13555574f9cbc6e6fb2e6168c1f/Untitled%202.png](Gatsby%20NetlifyCMS%20a%20melhor%20stack%20para%20manter%20um%20bl%20cb37b13555574f9cbc6e6fb2e6168c1f/Untitled%202.png)  ## Próximos passos  Sempre fica faltando uma coisinha ou outra. Considero que essa seja uma versão beta, com alguns ajustes ainda serem feitos. Os próximos passos desse projeto são:  - Criação de testes unitários e e2e; - Melhorias na versão responsiva; - Consertar a parte interna de preview (para conseguir ter uma noção de como o post escrito irá aparecer no layout); - Criar um formulário de newsletter.  ## Conclusão  ![Gatsby%20NetlifyCMS%20a%20melhor%20stack%20para%20manter%20um%20bl%20cb37b13555574f9cbc6e6fb2e6168c1f/Untitled%203.png](Gatsby%20NetlifyCMS%20a%20melhor%20stack%20para%20manter%20um%20bl%20cb37b13555574f9cbc6e6fb2e6168c1f/Untitled%203.png)  A velha máxima "cada caso é um caso" faz muito sentido. Não existe uma bala de prata que resolva todos os problemas e atenda todas as necessidades. O grande aprendizado podemos extrair é que trabalhar em um side-project é algo bem divertido, e fica ainda mais vantajoso se para cada escolha arquitetural fizermos uma crítica e elencar os pontos positivos e negativos daquela decisão comparando com outras opções disponíveis. Espero que esse post possa servir de benchmarking e de referência pra você que está pensando em montar um site ou blog pessoal. Vale salientar também que a dupla Gatsby + NetlifyCMS não é tão amigável para pessoas que não são desenvolvedoras e/ou que não têm familiaridade com front-end, o que pode ser uma barreira de entrada em alguns casos. Salvo esses casos, acredito que essa seja uma opção extremamente interessante e vantajosa.  Um abraço e até a próxima! ;)](/img/untitled-1.png)

E o mais legal é que os campos na imagem acima (title, description, featured image e etc) são completamente customizáveis. Ou seja, você pode adicionar ou remover esses campos que serão exibidos juntamente com seu conteúdo de acordo com a necessidade do seu blog. Eu segui esse [tutorial aqui](https://www.netlifycms.org/docs/gatsby/#header) e consegui configurar tudo isso facilmente.

## Terceira escolha: [TypeScript](https://www.typescriptlang.org/)

Houve uma época em que eu não gostava muito de TypeScript. Achava que adicionava uma verbosidade desnecessária ao projeto e acaba ficando complexo demais. E realmente fica mais verboso e mais complexo. Só que em termos de escala e consistência, só temos a ganhar. Com o tempo percebi que o TypeScript é praticamente indispensável nos meus projetos web e sou um grande evangelizador dessa linguagem nos locais em que trabalho. Os principais motivos que me fizeram optar pelo TypeScript foram:

* Possibilidade de pegar bugs em tempo de desenvolvimento: pra mim a maior vantagem de utilizar o TypeScript;
* Escala: é mais fácil refatorar e mais fácil adicionar novos componentes e alterar comportamentos sem quebrar o que já tinha sido feito;
* Consistência: tudo fica mais claro com o TypeScript. Sei exatamente quais propriedades e tipos minhas funções recebem e sei se estou passando o tipo correto.

## Quarta escolha: [Styled-components](https://styled-components.com/)

A prática de escrita de CSS-in-JS (no meu caso CSS-in-TS 😃) tem sido muito adotada, muito devido a flexibilidade que ela traz para o código. Eu experimentei essa abordagem a um tempo atrás e acabei gostando. "Ah, mas por que não usar SASS ou LESS?". Funcionaria da mesma forma e eu teria uma flexibilidade muito parecida. Só que o CSS-in-JS tem algumas vantagens interessantes que consigo elencar:

* Ausência de colisão de classes: se tem uma coisa que é chata na programação em geral é o *naming*. Dar nome aos bois pode ser um pouco chato, e no CSS corremos o risco de dar nomes repetidos e acabar gerando uma colisão. Com styled-components esse problema desaparece, pois os estilos escritos ficam restritos apenas aquele componente. É possível resolver esse problema via SASS com [CSS Modules](https://github.com/css-modules/css-modules), mas isso é assunto para outro artigo :)
* Estilização dinâmica: os componentes do styled-components podem receber props e tornarem-se dinâmicos de acordo com o componente escrito em React. Isso é muito bom, pois podemos alterar o estilo do nosso componente de forma muito simples baseados em ações do usuário

```tsx
// Container com a propriedade display dinâmica
export const Container = styled.div<{ display?: string }>`
    margin: 0 auto;
    width: 900px;
    ${({ display }) => display ? `display: ${display};` : ''}
`;
```

* *Vendor prefixing*: você escreve o css da sua forma e os componentes se encarregam de adicionar os prefixos para compatibilidade com os outros browsers.

## Quinta escolha: [Tachyons](https://tachyons.io/)

O tachyons traz um conceito de "CSS funcional" que acho bem interessante. As vezes eu fico um pouco incomodado em definir uma classe css (ou um componente CSS-in-TS, no nosso caso) só para adicionar uma margin ou padding, ou definir algum elemento com width 100%. Para sanar esse problema, o tachyons traz várias classes prontas para estilos simples, como margin, padding, width, height, position e z-index. Ele é uma biblioteca bem pequena e, usada com moderação, a escrita do código fica bem mais produtiva.

```tsx
const NotFoundPage = () => (
    <Layout>
        <div className="tc"> {/* Classe com a propriedade text-align: center definida */}
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    </Layout>
);
```

## Sexta escolha: [Algolia Search](https://www.algolia.com/)

O sistema de buscas que escolhi para o projeto em Gatsby foi o Algolia. Com essa ferramenta gratuita, conseguimos indexar os nossos posts e tornar a busca em tempo real algo muito mais performático. Sem contar que a documentação é muito boa e o Gatsby oferece um [plugin para facilitar a integração](https://www.gatsbyjs.org/docs/adding-search-with-algolia/). O painel tem várias métricas legais e a plataforma é muito bem feita:

![Algolia Search](/img/untitled-2.png)

## Próximos passos

Sempre fica faltando uma coisinha ou outra. Considero que essa seja uma versão beta, com alguns ajustes ainda serem feitos. Os próximos passos desse projeto são:

* Criação de testes unitários e e2e;
* Melhorias na versão responsiva;
* Consertar a parte interna de preview (para conseguir ter uma noção de como o post escrito irá aparecer no layout);
* Criar um formulário de newsletter.

## Conclusão

![Resultados no pagespeed insights](/img/untitled-3.png)

A velha máxima "cada caso é um caso" faz muito sentido. Não existe uma bala de prata que resolva todos os problemas e atenda todas as necessidades. O grande aprendizado podemos extrair é que trabalhar em um side-project é algo bem divertido, e fica ainda mais vantajoso se para cada escolha arquitetural fizermos uma crítica e elencar os pontos positivos e negativos daquela decisão comparando com outras opções disponíveis. Espero que esse post possa servir de benchmarking e de referência pra você que está pensando em montar um site ou blog pessoal. Vale salientar também que a dupla Gatsby + NetlifyCMS não é tão amigável para pessoas que não são desenvolvedoras e/ou que não têm familiaridade com front-end, o que pode ser uma barreira de entrada em alguns casos. Salvo esses casos, acredito que essa seja uma opção extremamente interessante e vantajosa.

Um abraço e até a próxima! ;)