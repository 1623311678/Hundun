var Sequelize = require('sequelize');

// 数据库配置文件
var sqlConfig = {
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "menagerie"
};

var sequelize = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, {
    host: sqlConfig.host,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});
module.exports = sequelize;
