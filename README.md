# Find Player Two API

A web server to save and process all the features from FP2 application

## Motivation

I want to build an application, so you could find someone to play your favorite games no 
matter what plataform you're in.

## Endpoints

- GET
    - /users
    list all the users
- POST
    - /users
    create an user
- DELETE
- PUT

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
