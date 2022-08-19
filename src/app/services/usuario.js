const User = require('../models/Usuario')
const Sequelize  = require('sequelize');

module.exports = {
    async create(data){
        const sql = `
        INSERT INTO messages (user_id, content, created_at, updated_at)
        VALUES ('${data.user_id}', '${data.content}', datetime('now'), datetime('now'));
      `
        Sequelize.QueryInterface
      return Sequelize.query(sql, {
        type: Sequelize.QueryTypes.INSERT
      })
    },

    async delete(id) {
        const deleted = await User.destroy({
            where: { id: id }
        })

        return deleted
    },

    async findOne(id) {
        const user = await User.findOne({
            where: {id: id}
        })

        return user
    },

    async findOneByEmail(email) {
        const user = await User.findOne({
            where: {email: email}
        })

        return user
    },

    async update(id, data) {
        const [ updated ] = await User.update(data, {
            where: { id: id }
        });

        return updated
    },

    async list() {
        const users = await User.findAll()

        return users
    }
}