const Sequelize = require('sequelize')

module.exports = class calculator1 extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            Resident_Period:{
                type: Sequelize.INTEGER(50),
                allowNull:false,
                unique:true,
            },
            income:{
                type: Sequelize.INTEGER(200),
                allowNull:false,
            },
            Number_Of_Payment:{
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
            modelName:'calculator1',
            tableName:'calculator1',
            charset: 'utf8',
            collate:'utf8_general_ci'
        })
    }
}