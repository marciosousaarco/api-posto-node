const Sequelize = require('sequelize')
/**
 * horario
 * status
 * id_paciente
 */

class User extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                descricao:Sequelize.STRING,
                paciente_id:Sequelize.NUMBER,
            },
            {
                sequelize
            }
        );

        return this
    }
}

module.exports = User