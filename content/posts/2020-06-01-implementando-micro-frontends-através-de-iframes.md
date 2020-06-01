---
templateKey: blog-post
title: Implementando micro frontends através de... iframes!
date: 2020-06-01T10:30:01.345Z
description: Conforme as aplicações frontend foram tomando forma e evoluindo
  para uma escala cada vez maior, aquela ideia de ter um único repositório que
  concentra todo o código relacionado ao nosso projeto foi dando espaço a uma
  outra abordagem, similar ao que já conhecemos nos micro serviços, os chamados
  micro frontends. Nesse post vou explicar um pouco desse conceito e como
  implementar essa arquitetura utilizando iframes (não torça o nariz antes de
  ler todo o conteúdo 😅).
featuredimage: /img/patrick-tomasso-qmdap1tau0g-unsplash.jpg
featuredimageauthor: Patrick Tomasso
featuredimagelink: https://unsplash.com/photos/QMDap1TAu0g
tags:
  - Arquitetura
---
Conforme as aplicações frontend foram tomando forma e evoluindo para uma escala cada vez maior, aquela ideia de ter um único repositório que concentra todo o código relacionado ao nosso projeto foi dando espaço a uma outra abordagem, similar ao que já conhecemos nos micro serviços, os chamados micro frontends. Nesse post vou explicar um pouco desse conceito e como implementar essa arquitetura utilizando iframes (não torça o nariz antes de ler todo o conteúdo 😅).



## TL;DR

* Solução final no meu github: <https://github.com/samwx/microfront-with-iframes>;
* Post em formato de slides disponível aqui: <https://speakerdeck.com/samwx/evoluindo-suas-aplicacoes-utilizando-micro-frontends>.

Recentemente uma figura conhecida da área de desenvolvimento, [Martin Fowler](https://martinfowler.com/) publicou em seu site [um artigo](https://martinfowler.com/articles/micro-frontends.html) que detalha o conceito por trás dessa arquitetura e algumas formas de implementá-la. Muito antes, mais especificamente em 2016, a ThoughtWorks introduziu a [arquitetura de micro frontends](https://www.thoughtworks.com/pt/radar/techniques/micro-frontends) na tier "Avalie", o que fez com que muitas pessoas começassem a experimentar essa abordagem e começar a bolar alguns conceitos em torno dela. De lá pra cá, já na tier "Adote" conforme radar abaixo elaborado pela ThoughWorks, temos visto inúmeras possibilidades, desde as mais simples (como a que será abordada nesse post) até as mais complexas e criativas utilizando Docker + Kubernetes para orquestrar múltiplos frontends de uma aplicação conforme apresentado na [JS Kongress 2019](https://www.youtube.com/watch?v=ZuzSEQGE9qM) 😱.

![](/img/radar.png)

A elaboração de uma arquitetura em micro frontends pode ter vários prós e contras muito similares às que temos na abordagem de micro serviços, e geralmente quando pronunciamos a palavra "iframe" em uma roda de desenvolvedores, as pessoas normalmente vão te olhar torto e te falar "ah não, iframes não, é muito feio!". Mas será que é feio mesmo? Será que esse conceito não pode nos auxiliar de alguma forma? É o que vamos ver.

## 1. Problema

Para ter uma visualização mais clara das escolhas que fazemos em nossas aplicações, é primordial identificarmos qual o problema raiz que temos no momento da elaboração da arquitetura. E para isso, vamos partir de um problema extremamente comum em diversos contextos. Nesse nosso exemplo fictício, suponha que temos uma aplicação legada, escrita em AngularJs (sim, angularjs é código legado). Adicionar novos componentes é difícil, escrever código novo é chato por que ninguém mais comenta sobre esse assunto, a documentação está defasada e não temos mais a comunidade do nosso lado desenvolvendo componentes e atualizando o código-fonte. Reescrever a aplicação por inteiro nem sempre é uma opção por diversos motivos. O mais comum é que "*não podemos parar a equipe inteira para fazer uma completa refatoração da aplicação*", afinal, o nosso backlog precisa andar. Um outro motivo muito comum passa simplesmente pela viabilidade técnica. Existem aplicações com mais de 100 mil linhas de javascript escritas em angularjs, e esse "simples" número faz com que seja totalmente inviável reescrever toda a aplicação de uma única vez, afinal teríamos que re-testar toda nossa regra de negócio e toda a interface que foi construída durante anos. **A ideia então é construir novos códigos em micro frontends e migrar gradativamente o código da base legada para novos micro frontends utilizando parte do [padrão Strangler](https://docs.microsoft.com/pt-br/azure/architecture/patterns/strangler).**

Para o nosso micro frontend, precisamos de atender às seguintes regras:

* Precisa ter a base de código, build e deploy separado da aplicação principal;
* Não pode interferir ou ser interferido por outras partes da aplicação (não pode haver colisão de CSS e muito menos scripts que interfiram no funcionamento de qualquer uma das partes);
* Precisa ser agnóstico a frameworks e totalmente desacoplado: para cada novo micro frontend, deve ser possível escolher livremente a sua stack que deverá comunicar de forma fácil com as outras partes das aplicações.

Tendo essas premissas em mãos, podemos perceber que os iframes atendem por completo todas elas. Eles não recebem estilos de fora e nem interferem em outros estilos. Como possuem um link próprio, podem ter código, build e deploy separado, e por conta disso podemos construir nossa aplicação em qualquer framework (ou mesmo em vanilla js :). Obviamente, existem sim outras formas de atender a todas essas premissas utilizando outras tecnologias conforme demonstrado no [post do Martin Fowler](https://martinfowler.com/articles/micro-frontends.html) e podemos abordá-las em um outro artigo.

## 2. Solução

Vamos primeiramente desenhar como será a arquitetura da nossa aplicação para termos uma visão um pouco mais clara de como iremos resolver o nosso problema:

![](/img/micro-frontends.jpg)

Na nossa situação hipotética, iremos chamar de **aplicação satélite** a parte do projeto que será responsável por intermediar a comunicação com as demais partes e passar os dados que são "globais" para dentro dos micro frontends. E o que seriam esses dados "globais"? Quaisquer dados que precisem ser compartilhado entre as aplicações, por exemplo: dados de usuário, serviços de conexão a APIs e até mesmo alguns métodos de controllers que tenham a lógica distribuída entre os módulos da aplicação. Isso se torna necessário pois como foi mencionado, a nossa aplicação satélite é um código legado e que concentra toda a nossa regra de negócio. Utilizando o *strangler pattern*, a ideia é remover gradativamente alguma parte do código que possa ser separada com mais facilidade. Essas partes eventualmente terão alguma dependência do código legado, como é o caso dos serviços que fazem as chamadas nas APIs. O cenário ideal era ter todos esses serviços e controllers compartilhados em um módulo no npm, o que facilitaria bastante o reaproveitamento sem ter que ficar enviando e recebendo mensagens o tempo todo da aplicação satélite. Mas neste primeiro momento, vamos nos ater a nossa estratégia de migrar pouco a pouco e deixar os serviços e outros módulos compartilhados na aplicação principal.

Os **event processors** concentram o segredo do sucesso da nossa arquitetura. Eles são a camada de comunicação entre qualquer micro frontend e a nossa aplicação satélite. Essa camada será responsável por escutar eventos que chegam dos micro frontends, bem como enviar as respostas e comandos para eles. E para fazer isso, utilizaremos a API de [postMessage](https://developer.mozilla.org/pt-PT/docs/Web/API/Window/postMessage) para fazer acontecer a comunicação entre os micro frontends e o satélite.

Os **micro frontends** são as partes que foram separadas da nossa aplicação satélite ou mesmo novos módulos que foram adicionados no nosso contexto. Importante frisar que estão em uma base de código separada e desacoplados da aplicação satélite.

## Show me the code!

Preparei uma solução de exemplo que [pode ser encontrada no meu github](https://github.com/samwx/microfront-with-iframes). Para facilitar, fiz a divisão dos micro frontends em pastas, chamadas de "fragments". A ideia permanece a mesma pois apesar de estar no mesmo repositório irão rodar separadamente. No código da nossa aplicação satélite, vamos ter uma ideia bem simples para demonstrar o conceito e que contém alguns serviços, controllers e dados que podem ser compartilhados.

**satellite/webpack.config.js*:*** neste arquivo apenas uma configuração de porta e o plugin html-webpack-plugin para nos auxiliar com os testes em tempo de desenvolvimento

```jsx
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 8000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};
```

**satellite/index.js**: aqui começam as mágicas. Para orquestrar a comunicação entre as aplicações, iremos utilizar um pacote do npm chamado [iframe-message-proxy](https://github.com/takenet/iframe-message-proxy). Desenvolvi esse projeto na [Take](https://www.take.net/) em conjunto com o restante do time para conseguir enviar postMessages de dentro do iframe de forma com que fosse possível esperar por uma resposta por meio de Promises. A ideia surgiu de um pacote muito similar desenvolvido pela Microsoft, também [disponível aqui](https://github.com/microsoft/window-post-message-proxy).

```jsx
import { IframeMessageProxy } from 'iframe-message-proxy';
import { handleEvent } from './eventReceivers';

// Start listen for iframe messages
IframeMessageProxy.listen();
window.addEventListener('message', handleEvent);
```

**satellite/eventReceivers.js**: aqui iremos tratar os eventos recebidos e encaminhar para os devidos serviços dentro da aplicação satellite para que ela possa tratar a mensagem e devolver uma resposta para o iframe que a chamou:

```jsx
import { getUsers } from './services/service1';

const FRAGMENT_EVENT_PREFIX = 'fragmentEvent:';
const shouldHandleMessage = (msg) =>
    Object.keys(msg).find(
        (k) => k == 'action' && msg.action.startsWith(FRAGMENT_EVENT_PREFIX)
    );

export const handleEvent = (fragmentEvent) => {
    if (
        !fragmentEvent.data ||
        !fragmentEvent.data.message ||
        !shouldHandleMessage(fragmentEvent.data.message)
    ) {
        return;
    }

    const { message, trackingProperties } = fragmentEvent.data;
    const payload = {
        message,
        trackingProperties,
        source: fragmentEvent.source,
    };

    switch (message.action) {
        case `${FRAGMENT_EVENT_PREFIX}getUser`:
            getUsers(payload);
            break;
    }
};
```

Perceba que temos basicamente um switch/case para identificar os eventos. Entretanto quis criar um prefixo pré-definido para evitar que a nossa aplicação fique tentando lidar com eventos que não surgem dos nossos próprios micro frontents.

**satellite/services/service1.js*:*** aqui iremos simplesmente identificar o **source** - qual fragmento nos mandou a mensagem - e devolver uma resposta, que nesse exemplo nada mais é do que um objeto contendo alguns dados:

```jsx
export const getUsers = ({ source, trackingProperties }) => {
    const messageResponse = {
        response: {
            name: 'Samuel Martins',
            website: 'samuelmartins.me',
        },
        trackingProperties,
    };

    source.postMessage(messageResponse, '*');
};
```

O **trackingProperties** é um objeto que contém um **id** que identifica a mensagem recebida. O fragmento que enviou essa mensagem está esperando por uma resposta, e para conseguirmos identificar para onde iremos enviá-la, precisamos identificar nossa mensagem de alguma forma, similar ao que os correios fazem via CEP ;).

**satellite/index.html**: para finalizar o código da aplicação satellite iremos adicionar um html básico que irá chamar os outros micro frontends. Note que apesar de estarem na mesma pasta, estão em domínios diferentes o que nos possibilita hospedá-los onde bem entendermos:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Satellite application</title>
</head>
<body>
    <h1>Hello! I'm satellite application</h1>

    <!-- Fragment 1 - React application -->
    <div style="background: #cecece; width: 45%; display: inline-block;">
        <iframe src="http://localhost:3000" width="100%" height="400px" frameBorder="0"></iframe>
    </div>

    <!-- Fragment 2 - Vue application -->
    <div style="background: #eee; width: 45%; display: inline-block;">
        <iframe src="http://localhost:8080" width="100%" height="400px" frameBorder="0"></iframe>
    </div>
</body>
</html>
```

**fragment-1/src/index.js**: a aplicação satellite é um "vanilla", o fragment-1 é uma aplicação em React e o fragment-2 é uma aplicação em Vue. Fiz dessa maneira para demonstrar que essa arquitetura nos permite utilizarmos a stack que bem entendermos, tratando a comunicação entre elas de forma homogênea. Aqui iremos, da mesma forma, escutar por eventos de iframes. Isso é necessário pois, da mesma forma que enviamos eventos dos micro frontends para o satélite, o satélite também pode nos enviar dados, como as respostas das próprias requisições que solicitamos:

```jsx
import ReactDOM from 'react-dom';
import { App } from './App';
import { IframeMessageProxy } from 'iframe-message-proxy';

// Start to listen messages from parent application
IframeMessageProxy.listen();
IframeMessageProxy.config({
    prefix: 'fragmentEvent:',
});
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
```

**fragment-1/src/App.js**:  nesse componente faremos uma requisição através da nossa biblioteca, aguardamos por uma resposta e mostramos o resultado na tela.

```jsx
import React, { useState } from 'react';
import { IframeMessageProxy } from 'iframe-message-proxy';

export const App = () => {
    const [user, setUser] = useState();
    const getUser = async () => {
        const { response } = await IframeMessageProxy.sendMessage({
            action: 'getUser',
        });

        setUser(response);
    };

    return (
        <div>
            <h1>
                I'm fragment with <span style={{ color: 'blue' }}>React</span>.
                Click button to get user data from Satellite application
            </h1>
            <button onClick={getUser}>Get user</button>

            {user && (
                <>
                    <p>
                        <strong>Name: </strong>
                        {user.name}
                    </p>
                    <p>
                        <strong>Website: </strong>
                        {user.website}
                    </p>
                </>
            )}
        </div>
    );
};
```

**fragment-2/src/main.js**: mesma ideia. Precisamos escutar pelos eventos da aplicação satélite para mostrar os resultados na tela:

```jsx
import Vue from 'vue'
import App from './App.vue'
import { IframeMessageProxy } from 'iframe-message-proxy';

// Start to listen messages from parent application
IframeMessageProxy.listen();
IframeMessageProxy.config({
    prefix: 'fragmentEvent:',
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

**fragment-2/src/App.vue**: também a mesma ideia da aplicação React, porém escrita em Vue.js. Enviamos uma requisição, aguardamos pela resposta e mostramos o resultado na tela:

```html
<template>
    <div id="app">
        <h1>
            I'm fragment with <span style="color: green;">Vue</span>. Click the
            button to get user from Satellite Application
        </h1>
        <button v-on:click="getUser()">Get user</button>
        <div v-if="user">
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Website:</strong> {{ user.website }}</p>
        </div>
    </div>
</template>

<script>
import { IframeMessageProxy } from 'iframe-message-proxy';

export default {
    name: 'App',
    data() {
        return {
            user: undefined,
        }
    },
    methods: {
        async getUser() {
            const { response } = await IframeMessageProxy.sendMessage({
                action: 'getUser',
            });

            this.user = response;
        }
    }
};
</script>
```

O resultado da nossa arquitetura (visualmente não tão bonita) é o seguinte:

![](/img/gif-app.gif)

## Conclusões

Essa abordagem é extremamente flexível e fácil de aplicar. Entretanto, ela tem alguns pontos de atenção que precisamos ponderar caso optamos por adotá-la:

* Se optarmos por escolher frameworks diferentes para compor nossa aplicação como um todo, precisaremos pensar em alguma forma de desenvolver componentes visuais que se integram bem com todos eles, não é mesmo? Minha sugestão é estudar sobre os [webcomponents](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components) ou algum outro framework que compilem para webcomponents, como o [Svelte](https://svelte.dev/) ou [Stencil](https://stenciljs.com/);
* Quanto mais descentralizada a nossa aplicação, mais complexa ela fica. Isso porque na medida que adicionarmos novas funcionalidades, precisaremos também deixar mais módulos genéricos, ou seja, mais pacotes no npm para serem utilizados em conjunto com as demais aplicações;
* Precisamos tomar cuidado com a performance. Isso por que a mesma aplicação carregou 2 frameworks diferentes, e fará isso a cada novo refresh. O ideal nesse caso para lidar com esse problema é utilizar um CDN ou alguma estratégia de PWA.

E vocês, o que acharam dessa abordagem? Estão utilizando algum outro modelo de arquitetura? Deixe nos comentários! 😃