const Sequelize = require('sequelize')

module.exports = class Income_Scores extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            Income:{
                type: Sequelize.STRING(50),
                allowNull:true,
            },
            Person:{
                type: Sequelize.STRING(200),
                allowNull:true,
            },
            Cost_Front:{
                type: Sequelize.INTEGER(255),
                allowNull:true,
            },
            Cost_Back:{
                type: Sequelize.INTEGER(255),
                allowNull:true,
            },
            Income_Score:{
                type: Sequelize.INTEGER(255),
                allowNull:true,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Income_Scores',
            tableName:'Income_Scores',
            charset: 'utf8',
            collate:'utf8_general_ci'
        })
    }
}