const Sequelize = require('sequelize')

module.exports = class calculator2 extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            Resident_Period:{
                type: Sequelize.INTEGER(50),
                allowNull:false,
                unique:true,
            },
            Number_Of_Children:{
                type: Sequelize.INTEGER(100),
                allowNull:false,
            },
            Number_Of_Payment:{
                type: Sequelize.INTEGER(100),
                allowNull:false,
            },
            Period_Of_HomeLessness:{
                type: Sequelize.INTEGER(100),
                allowNull:false,
            },
            Resident_Location:{
                type: Sequelize.STRING(500),
                allowNull:false,
            },
            Applying_Location:{
                type: Sequelize.STRING(300),
                allowNull:false,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'calculator2',
            tableName:'calculator2',
            charset: 'utf8',
            collate:'utf8_general_ci'
        })
    }
}