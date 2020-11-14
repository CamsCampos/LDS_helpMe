const { Model, DataTypes } = require("sequelize");

class Mensagem extends Model {
  static init(sequelize) {
    super.init(
      { texto: DataTypes.STRING },
      {
        sequelize,
        tableName: "mensagens",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Agendamento, {
      foreignKey: "id_agendamento",
      as: "agendamento",
    });
    this.belongsTo(models.Pessoa, {
      foreignKey: "id_pessoa",
      as: "pessoa",
    });
  }
}

module.exports = Mensagem;
