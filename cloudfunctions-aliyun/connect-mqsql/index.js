'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '460223606',
    database: 'user'
});
/**
 * 封装mysql执行操作为Promise
 * 
 * @param {Object} sql
 * @param {Object} values
 */
const query = function(sql, values) {
    console.log('sql', sql)
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, results, fields) => {
            if (error) {
              console.log('err', error)
                reject(error)
            }
            resolve(results)
        })
    })
}

exports.main = async (event, context) => {
    //event为客户端上传的参数
    console.log('event : ' + event)

    try {
        //连接数据库
        connection.connect()
        
        //查询记录
        let queryRes = await query('select * from users where name=? ', ['丁元英'])
        console.log("查询记录：", queryRes)

        //关闭连接
        connection.end();
    } catch (e) {
        console.log('操作失败，失败信息 ', e);
    }

    //返回数据给客户端
    return event
};
