'use strict';
const db = uniCloud.database()
const { getVersion } = require('config') // 引入公共模块
exports.main = async (event, context) => {
  let version = getVersion()
  console.log('version', version)
  // promise 返回
  return new Promise((resolve, reject) => {
    const collection = db.collection('testData')
    const res = collection.get()
    resolve(res)
  })
  // await返回
  // const collection = db.collection('testData')
  // const res = await collection.get()
  // console.log('res : ' + res.data)
  //返回数据给客户端
}
