const Sequelize = require('sequelize')

module.exports = class FAQ extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            Question:{
                type: Sequelize.STRING(500),
                allowNull:false,
                unique:true,
            },
            Answer:{
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