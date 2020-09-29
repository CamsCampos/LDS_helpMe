const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_usuario: DataTypes.STRING,
        senha: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Professor, {
      foreignKey: "id_pessoa",
      as: "professor",
    });
    this.hasOne(models.Aluno, {
      foreignKey: "id_pessoa",
      as: "aluno",
    });
    this.belongsToMany(models.Permissao, {
      through: "usuarios_permissoes",
      foreignKey: "id_usuario",
      as: "permissoes",
      onDelete: "CASCADE",
      hooks: true,
    });
  }
}

module.exports = Usuario;
