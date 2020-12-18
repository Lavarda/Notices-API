const { Model, DataTypes } = require('sequelize')

class Notices extends Model {
    static init(connection) {
        super.init({
            title: DataTypes.STRING,
            website: DataTypes.STRING,
            authors: DataTypes.STRING,
            date: DataTypes.STRING,
            content: DataTypes.STRING,
            image_url: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) { 
        this.belongsToMany(models.Categories,{
            foreignKey: 'notice_id',
            as: 'notices_categories',
            through: 'notice_categories'
        })
    }
}

module.exports = Notices;