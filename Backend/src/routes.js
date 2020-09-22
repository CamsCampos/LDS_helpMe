const express = require("express");

//Mine
const PessoaController = require("./controllers/PessoaController");
const ProfessorController = require("./controllers/ProfessorController");
const AulaController = require("./controllers/AulaController");
const HorarioController = require("./controllers/HorarioController");
const UsuarioController = require("./controllers/UsuarioController");
const PermissaoController = require("./controllers/PermissaoController");
const AlunoController = require("./controllers/AlunoController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ teste: "Ok" });
});

// Rotas de pessoas: inutilizavel já que pessoa é criado por meio da rota de professor/ aluno
// routes.post("/pessoas", PessoaController.store);
// routes.get("/pessoas", PessoaController.index);

//Rotas de horarios disponíveis
routes.get("/horarios", HorarioController.getAll);
routes.post("/horarios/:id_aula", HorarioController.store);
routes.delete("/horarios/:id_aula/:id_horario", HorarioController.delete);
//Update de horário não existirá. Exclua e crie outro

//Rotas de aulas
routes.get("/aulas/:id_aula", AulaController.index);
routes.get("/aulas", AulaController.getAll);
routes.post("/aulas/:id_professor", AulaController.store);
routes.put("/aulas/:id_aula", AulaController.update);
// routes.delete("/aulas/:id_aula", AulaController.delete); //TODO

// Rotas de professores
routes.get("/professores/:id_professor", ProfessorController.index);
routes.get("/professores", ProfessorController.getAll);
routes.post("/professores", ProfessorController.store);
routes.put("/professores/:id_professor", ProfessorController.update);
routes.delete("/professores/:id_professor", ProfessorController.delete);

// Rotas de alunos
routes.get("/alunos/:id_aluno", AlunoController.index);
routes.get("/alunos", AlunoController.getAll);
routes.post("/alunos", AlunoController.store);
routes.put("/alunos/:id_aluno", AlunoController.update);
routes.delete("/alunos/:id_aluno", AlunoController.delete);

//Rota de permissão para login
routes.post("/usuario/:id_usuario/permissoes", PermissaoController.store);

module.exports = routes;
