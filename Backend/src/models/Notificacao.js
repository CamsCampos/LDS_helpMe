const { Model, DataTypes } = require("sequelize");

class Notificacao extends Model {
  static init(sequelize) {
    super.init(
      {
        visualizado: DataTypes.BOOLEAN,
        tipo: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "notificacoes",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: "id_usuario",
      as: "usuario",
    });
    this.belongsTo(models.Pessoa, {
      foreignKey: "id_pessoa_remetente",
      as: "remetente",
    });
    this.belongsTo(models.AulaHorarios, {
      foreignKey: "id_aula_horario",
      as: "aulaHorario",
    });
  }
}

module.exports = Notificacao;
