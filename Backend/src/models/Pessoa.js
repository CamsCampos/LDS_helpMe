const { Model, DataTypes } = require("sequelize");

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        data_nascimento: DataTypes.DATEONLY,
        descricao: DataTypes.STRING,
        formacao: DataTypes.STRING,
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
  }
}

module.exports = Pessoa;
