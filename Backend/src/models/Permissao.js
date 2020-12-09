const { Model, DataTypes } = require("sequelize");

class Permissao extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "permissoes",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Usuario, {
      foreignKey: "id_permissao",
      through: "usuarios_permissoes",
      as: "usuarios",
      // onDelete: "SET NULL",
      // // hooks: true,
    });
  }
}

module.exports = Permissao;
