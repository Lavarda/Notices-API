const { Model, DataTypes } = require('sequelize')

class Categories extends Model {
    static init(connection) {
        super.init({
            label: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) { 
        this.belongsToMany(models.Notices,{
            foreignKey: 'categories_id',
            as: 'categories_notice',
            through: 'notice_categories',
        })
    }
        
}

module.exports = Categories;