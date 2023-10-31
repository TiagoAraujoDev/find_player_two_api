# Find Player Two API

A web server to save and process all the data for FP2 client

## Getting started

#### First step:

To run the dev environment you'll need to set some environment variables on `.env`. You can use `.env.example` as a boilerplate


#### Second step:

Start the containers with the application and database. There's a `docker-compose.yml` that orchestry all the containers. So the command bellow will start all the containers detached `-d`.

```sh
# check if you have docker and docker compose installed in your machine with:
# docker -v && docker compose -v

docker compose up -d
```

### Prisma

As I'm using prisma ORM all the prisma cli commands need to be executed inside the container running the application 

e.g.
```sh
docker compose exec npx prisma migrate dev
```

## Motivation

I want to build an application, so you could find someone to play your favorite games no matter what plataform you're in.

## Endpoints

- GET
    - `[/users/?filters]` -> list all the users (no sensible information)
    - `[/users/id]` -> fetch a specific user (all information)
- POST
    - `[/users]` -> Create an user 
    - `[/users/auth]` -> Authenticate an user 
    - `[/match/user/:id]` -> Send a request to play
- DELETE
    - `[/users]` -> Delete an user
- PUT
    - `[/info]` -> Update user information (e.g. plataforms, games, country ...)

## 

### RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar; verificar qual a melhor estrategia de autenticação
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível o usuário criar um card de convite para jogo;
- [ ] Deve ser possível o usuário acessar um feed onde se encontram todas os cards de convite para jogo;
- [ ] Deve ser possível o usuário aceitar um convite para jogo;
- [ ] Deve ser possível o usuário buscar academias pelo nome;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um username duplicado;
- [ ] O usuário não pode fazer 2 cards de convite para jogo na mesma plataforma;
- [ ] O usuário não pode fazer ver o identificador no card enquanto não tiver o match entre os dois usuários;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco MongoDB;
- [ ] O feed precisa estar paginado com 20 cards de convite pra jogo por página;
