import https from '../../config/api-interface.js'
// 获取承运人
export const testDic = (data) => {
    return https({
        url: '/mircoservice/entCarrier/all',
        method: 'GET',
				data
		// handle:true
    })
}
