const express = require("express");

//Mine
const PessoaController = require("./controllers/PessoaController");
const ProfessorController = require("./controllers/ProfessorController");
const AulaController = require("./controllers/AulaController");
const HorarioController = require("./controllers/HorarioController");
const UsuarioController = require("./controllers/UsuarioController");
const PermissaoController = require("./controllers/PermissaoController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ teste: "Ok" });
});

routes.post("/pessoas", PessoaController.store);
routes.get("/pessoas", PessoaController.index);

//Rotas de aulas
routes.get("/aulas", AulaController.index);
routes.post("/aulas/:id_professor", AulaController.store);
// routes.delete("/aulas/:id_aula", AulaController.delete); //TODO
// routes.put("/aulas/:id_professor", AulaController.update); // TODO

// Rotas de professores
routes.get("/professores/:id_professor", ProfessorController.index);
routes.get("/professores", ProfessorController.getAll);
routes.post("/professores", ProfessorController.store);
routes.put("/professores/:id_professor", ProfessorController.update);
routes.delete("/professores/:id_professor", ProfessorController.delete);

//Rota de permissão para login
routes.post("/usuario/:id_usuario/permissoes", PermissaoController.store);

module.exports = routes;
