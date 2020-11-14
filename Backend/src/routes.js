const express = require("express");

//Mine
const aulaHorariosController = require("./controllers/AulaHorariosController");
const ProfessorController = require("./controllers/ProfessorController");
const AulaController = require("./controllers/AulaController");
const HorarioController = require("./controllers/HorarioController");
const UsuarioController = require("./controllers/UsuarioController");
const AlunoController = require("./controllers/AlunoController");
const AgendamentoController = require("./controllers/AgendamentoController");
const NotificacaoController = require("./controllers/NotificacaoController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ teste: "Ok" });
});

// Rotas de professores (OK)
routes.get("/professores/:id_professor", ProfessorController.index);
routes.get("/professores", ProfessorController.getAll);
routes.post("/professores", ProfessorController.store);
routes.put("/professores/:id_professor", ProfessorController.update);
routes.delete("/professores/:id_professor", ProfessorController.delete);

// Rotas de alunos (OK)
routes.get("/alunos/:id_aluno", AlunoController.index);
routes.get("/alunos", AlunoController.getAll);
routes.post("/alunos", AlunoController.store);
routes.put("/alunos/:id_aluno", AlunoController.update);
routes.delete("/alunos/:id_aluno", AlunoController.delete);

//Rotas de aulas
routes.get("/aulas/:id_aula", AulaController.index);
routes.get("/aulas", AulaController.getAll);
routes.post("/aulas/:id_professor", AulaController.store);
routes.put("/aulas/:id_aula", AulaController.update);
// routes.delete("/aulas/:id_aula", AulaController.delete); //TODO

//Rotas de horarios disponíveis (OK)
routes.get("/horarios", HorarioController.getAll);
routes.post("/horarios/:id_aula", HorarioController.store);
routes.delete("/horarios/:id_aula/:id_horario", HorarioController.delete);
//Update de horário não existirá

// Rotas do relacionamento aulaHorarios (OK)
routes.get("/aulaHorarios", aulaHorariosController.get);

// Rotas de agendamento
routes.get("/agendamentos", AgendamentoController.index);
routes.get("/agendamentos/alunos/:id_aluno", AgendamentoController.getAluno);
routes.get(
  "/agendamentos/professores/:id_professor",
  AgendamentoController.getProfessor
);
routes.post("/agendamentos/alunos/:id_aluno", AgendamentoController.store);
routes.put(
  "/agendamentos/professores/:id_agendamento",
  AgendamentoController.update
);
routes.delete(
  "/agendamentos/alunos/:id_aluno/:id_agendamento",
  AgendamentoController.deleteAluno
);
routes.delete(
  "/agendamentos/professores/:id_professor/:id_agendamento",
  AgendamentoController.deleteProfessor
);

//Rotas de notificações)
routes.get("/notificacoes", NotificacaoController.getAll);
routes.get("/notificacoes/:id_usuario", NotificacaoController.index);

//Rota de permissão para login
routes.get("/usuarios", UsuarioController.index);
routes.post("/login", UsuarioController.post);
module.exports = routes;
