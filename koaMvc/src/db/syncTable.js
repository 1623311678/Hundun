const sequenlizeConn = require('./dbConn.js');
var customer = require('./models/customer');
sequenlizeConn.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    // 同步表结构
    customer.sync({
        force: true  // 强制同步，先删除表，然后新建
    }).then(()=>{
    	// 添加一条基础数据
        return customer.create({
            name:'dahlin',
            sex:'男',
            email:'dahlinsky@qq.com',
            phone:'13588888888',
            country: '中国',
            city:"北京",
            address:'卢沟桥'
        });
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

