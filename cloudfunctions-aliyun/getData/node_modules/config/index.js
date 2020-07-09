function getVersion () {
  console.log('进入公共模块')
  return '0.0.1'
}
module.exports = {
	// 公用模块用法请参考 https://uniapp.dcloud.io/uniCloud/cf-common
	getVersion,
  secret: 'your secret'
}
