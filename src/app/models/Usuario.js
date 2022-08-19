

const Sequelize = require("sequelize");

class Usuario extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        endereco_id: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        nascimento: Sequelize.DATE,
        login: Sequelize.STRING,
        password: Sequelize.STRING,
        tipo: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Usuario;