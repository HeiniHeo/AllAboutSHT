

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const FeedBack = require('./FeedBack')
const FAQ = require('./FAQ')
const calculator1 = require('./calculator1')
const calculator2 = require('./calculator2')
const Income_Scores = require('./Income_Scores')
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.FeedBack = FeedBack
FeedBack.init(sequelize)
db.FAQ = FAQ
FAQ.init(sequelize)
db.calculator1 = calculator1
calculator1.init(sequelize)
db.calculator2 = calculator2
calculator2.init(sequelize)
db.Income_Scores = Income_Scores
Income_Scores.init(sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
