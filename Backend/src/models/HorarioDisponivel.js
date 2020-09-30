const { Model, DataTypes } = require("sequelize");

class HorarioDisponivel extends Model {
  static init(sequelize) {
    super.init(
      {
        dia: {
          type: DataTypes.DATEONLY,
          validade: {
            isBefore: new Date(Date()), //Testar
          },
        },
        horario_inicio: DataTypes.TIME,
        horario_fim: DataTypes.TIME,
      },
      {
        sequelize,
        tableName: "horarios_disponiveis",
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Aula, {
      foreignKey: "id_horario",
      through: "aula_horarios",
      as: "aulas",
    });
  }
}

module.exports = HorarioDisponivel;
