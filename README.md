CRUD de Usuário 

Resumo: 

Esta aplicação é um CRUD de cadastro de usuários em um banco relacional (PostgreSQL) utilizando Node.js, Express.js, TypeScript e TypeORM.

**Tecnologias utilizadas:**

Node.Js | Express.js | TypeScript | TypeORM | Yarn | DOTENV | UUID | PostgreSQL


**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

````
yarn --version
````
Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

````
npm install --global yarn
````

**Atenção:** É necessário criar uma arquivo chamado .env dentro da pasta do projeto e colocar as suas credenciais nela, use o arquivo .env.example como
parâmetro. Para isso você terá que ter o **PostgreSQL** instalado em sua máquina, caso tenha dúvidas você poderá consultar a documentação <a href="https://www.postgresql.org/docs/current/tutorial-start.html">aqui</a>.

Para rodar a aplicação em sua máquina você deverá clona-la com este comando:

````
git clone git@github.com:anjosdelacerda/CRUD-de-usuario-typescript-node-js.git
````
Dentro do terminal da pasta da aplicação use o comando yarn para baixar todas as dependências 

````
yarn
````

Para rodar a aplicação basta executar o comando yarn dev:

````
yarn dev
````

Dentro da aplicação você encontrará um arquivo de **workspace.json** para exportar no testador de rotas de sua preferência
