const Permissao = require("../models/Permissao");
const Usuario = require("../models/Usuario");
// const { delete } = require("../routes");

module.exports = {
  async index(req, res) {
    // const { id_usuario } = req.params;
    // const usuario = await Usuario.findByPk(id_usuario, {
    //   include: {
    //     association: "permissoes",
    //   },
    // });
    // return res.json(usuario);
  },
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

  async delete(req, res) {
    //   const { user_id } = req.params;
    //   const { name } = req.body;
    //   const user = await User.findByPk(user_id);
    //   if (!user) {
    //     return res.status(400).json({ error: "Uuser not found!" });
    //   }
    //   const tech = await Tech.findOne({
    //     where: { name },
    //   });
    //   await user.removeTech(tech);
    //   return res.json();
  },
};
