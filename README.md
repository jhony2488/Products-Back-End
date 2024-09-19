<h1 align="center" id="app-tarefas">
   App Products Back End
</h1>


<h2 id="tabela-de-conteudo">Tabela de conteúdos</h2>
<!--ts-->
   
- [Sobre](#---vuttr)

- [Tabela de Conteudo](#tabela-de-conteudo)

- [Como usar](#como-usar)

  - [Pre Requisitos](#pré-requisitos)

  - [Instalação](#instalação)

  - [Rodando a API](#-rodando-a-api)

- [Testes](#-testes)

- [Documentação](#----documentatação-da-aplicação)

- [Tecnologias](#-tecnologias)
<!--te-->


<h2>Como usar</h2>

<h3>Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/) ou [Docker](https://hub.docker.com/).

<h3 id="instalacao">Instalação e rodar com o app sem docker</h3>

```bash
# Clone este repositório
$ git clone <https://github.com/jhony2488/Products-Back-End>

# Acesse a pasta do projeto no terminal/cmd
$ cd Products-Back-End

# Crie o arquivo .env e configure ele semelhante a o .env.exemplo
$ touch .env

# Instale as dependências
$ npm install || yarn install

# Baixar postgresql e rodar ele localmente
$ <https://www.postgresql.org/>

# rodar a aplicação em modo de desenvolvimento
$ npm run dev || yarn dev

# OU

# Gerar Build
$ npm run build || yarn build

# rodar a aplicação em modo de produção
$ npm run start || yarn start

# Em seguida rode as migrations
$ npm run migration:run
```

<h3 id="rodando-api">🎲 Rodando a API em modo de desenvolvimento com docker</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o Docker atravez do link abaixo caso ainda não o tenha instalado

- [https://hub.docker.com/](https://hub.docker.com/)

```bash
# Execute o docker compose no seu terminal/CMD
$  docker-compose up -d || docker compose up -d

# Execute as migrations
$  docker exec -it <id do container> sh -c "npm run migration:run" 

# O servidor inciará na porta:80 - acesse <http://localhost:80>
# O banco de dados postgres inciará na porta:5432 - acesse <http://localhost:5432>

```

<h2 id="tests">🛠 Testes sem Docker</h2>

### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Instale o PostgresSQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/](https://www.postgresql.org/)

```bash
# Executar os testes
$ npm run test || yarn test

# Executar testes de estresse na API
$ npm run test-stress || yarn test-stress

```


<h2 id="tests">🛠 Testes com Docker</h2>

### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Instale o PostgresSQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/](https://www.postgresql.org/)

```bash
# Executar os testes
$ docker exec -it <id do container> sh -c "npm run test" 

# Executar testes de estresse na API
$ docker exec -it <id do container> sh -c "npm run test-stress"

```

<h2 id="app-demo">  
  Documentação da aplicação com
</h2>

### Acesse a documentação da localmente

- [http://localhost:80/documentation/](http://localhost:80/documentation/)

<h2 id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/pt-br/)
- [Typeorm](https://typeorm.io/)
- [Jest](https://jestjs.io/)
- [JWT](https://jwt.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [PostgreSQL](https://www.postgresql.org/)

