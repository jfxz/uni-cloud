import https from '@/common/api-interface.js'
// 这是个测试接口声明
export const getTestData = (data) => {
    return https({
        url: '/test/getList',
        method: 'GET',
				data
    })
}
