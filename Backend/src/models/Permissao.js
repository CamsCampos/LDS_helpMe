const { Model, DataTypes } = require("sequelize");
const Usuario = require("./Usuario");

class Permissao extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Usuario, {
      through: "usuarios_permissoes",
      foreignKey: "id_permissao",
    });
  }
}

module.exports = Permissao;
