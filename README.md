# HelpMe

Desenvolvimento de uma aplicação web que dará suporte para professores oferecerem suas aulas particulares e alunos contratarem essas aulas.

## Comandos básicos | Backend

**Instalar dependências:** 
> yarn install

**Inicializar servidor:**
> yarn dev

**Criar as tabelas do banco:**
> yarn sequelize db:migrate

> **Observação:** o banco já deve estar criado e com o nome referenciado em config > database.js no campo "username". Caso tenha senha, deve ser informado em "password". 

**Excluir todas as tabelas do banco:** 
>yarn sequelize db:migrate:undo:all

> **Observação:** esse comando deve ser executado para excluir as tabelas sempre que alguma alteração estrutural for realizada no banco. Para recriá-las, execute novamente o comando de criação
<<<<<<< HEAD
=======

>>>>>>> dev
