const { Model, DataTypes } = require("sequelize");

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

  //FAZER ASSOCIAÇÃO COM ALUNO, PROFESSOR...
  static associate(models) {
    this.belongsTo(models.Aluno, {
      foreignKey: "id_aluno",
    });
    this.belongsTo(models.Professor, {
      foreignKey: "id_professor",
    });
    this.belongsTo(models.AulaHorarios, {
      foreignKey: "id_aula_horarios",
    });
  }
}

module.exports = Agendamento;
