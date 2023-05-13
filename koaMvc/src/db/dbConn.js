var Sequelize = require('sequelize');

// 数据库配置文件
var sqlConfig = {
    host: "xxx.xxx.xxx.xxx",
    user: "root",
    password: "xxxxx*",
    database: "koa2learn"
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
