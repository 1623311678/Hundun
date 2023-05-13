const Sequelize = require('sequelize');
const sequenlizeObj = require('../dbConn.js');
const Customer = sequenlizeObj.define('customer',{
    id:{
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name:{
        type:Sequelize.STRING(20),
        allowNull:false
    },
    sex:{
        type: Sequelize.ENUM(['男','女']), 
        allowNull:false
    },
    address:{
        type:Sequelize.STRING(50)
    },
    phone:{
        type:Sequelize.STRING(20),
        allowNull:true
    },
    email:{
        type: Sequelize.STRING(20),
        allowNull:false

    },
    country:{
        type:Sequelize.STRING(20)
    },
    city:{
        type:Sequelize.STRING(30)
    }
},{
    timestamps:false,
    tableName: 'customer'
});
module.exports = Customer;
