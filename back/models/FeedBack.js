const Sequelize = require('sequelize')

module.exports = class FeedBack extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            Content:{
                type: Sequelize.STRING(500),
                allowNull:false,
                unique:true,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Feedback',
            tableName:'Feedback',
            charset: 'utf8',
            collate:'utf8_general_ci'
        })
    }
}