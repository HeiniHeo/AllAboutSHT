const Sequelize = require('sequelize')

module.exports = class apply_alert1 extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            apply:{
                type: Sequelize.STRING(250),
                allowNull:true,
            },
            Location:{
                type: Sequelize.STRING(200),
                allowNull:true,
            },
            dbLocation:{
                type: Sequelize.STRING(255),
                allowNull:true,
            },
            option2:{
                type: Sequelize.INTEGER(255),
                allowNull:true,
            },
            apply_alert1:{
                type: Sequelize.STRING(255),
                allowNull:true,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'apply_alert1',
            tableName:'apply_alert1',
            charset: 'utf8',
            collate:'utf8_general_ci'
        })
    }
}