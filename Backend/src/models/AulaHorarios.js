const { Model, DataTypes } = require("sequelize");

class AulaHorarios extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        ocupado: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "aula_horarios",
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Agendamento, {
      foreignKey: "id_aula_horarios",
    });
  }
}

module.exports = AulaHorarios;
