const Sequelize = require('sequelize')

module.exports = class FAQ extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            Category:{
                type: Sequelize.STRING(500),
                allowNull:false,
            },
            question:{
                type: Sequelize.STRING(500),
                allowNull:false,
            },
            answer:{
                type: Sequelize.STRING(500),
                allowNull:false,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'FAQ',
            tableName:'FAQ',
            charset: 'utf8',
            collate:'utf8_general_ci'
        })
    }
}