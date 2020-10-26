const { Model, DataTypes } = require("sequelize");
const Professor = require("./Professor");

class Agendamento extends Model {
  static init(sequelize) {
    super.init(
      {
        admitido: DataTypes.BOOLEAN,
        id_aluno: DataTypes.INTEGER,
        id_professor: DataTypes.INTEGER,
        id_aula_horarios: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "agendamentos",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Aluno, {
      foreignKey: "id_aluno",
      as: "aluno",
    });
    this.belongsTo(models.Professor, {
      foreignKey: "id_professor",
      as: "professor",
    });
    this.belongsTo(models.AulaHorarios, {
      foreignKey: "id_aula_horarios",
      as: "aula_horario",
    });
  }
}

module.exports = Agendamento;
