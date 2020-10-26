const Permissao = require("../models/Permissao");
const Usuario = require("../models/Usuario");

module.exports = {
  async store(req, res) {
    const { id_usuario } = req.params;
    const { nome } = req.body;

    const usuario = await Usuario.findByPk(id_usuario);

    if (!usuario) {
      return res.status(400).json({ error: "Usuario não encontrado!" });
    }
    const [permissao] = await Permissao.findOrCreate({
      where: { nome },
    });

    await usuario.addPermissao(permissao);

    return res.json(permissao);
  },
};
