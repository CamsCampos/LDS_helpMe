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
      through: "usuarios_permissoes",
      foreignKey: "id_permissao",
      as: "usuarios",
      onDelete: "CASCADE",
      hooks: true,
    });
  }
}

module.exports = Permissao;
