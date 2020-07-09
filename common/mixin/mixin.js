// 测试数据
export default {
  data () {
    return {
    }
  },
	onLoad () {
		this.judgeToken() 
	},
  methods: {
		judgeToken () {
			let token = uni.getStorageSync('access_token')
			if (!token) {
				uni.navigateTo({
					url: `../login/index?redirect=waybill-entry`
				})
			} else {
				let dic = this.$store.state.dic.airportAllList
				if (dic.length === 0) {
					this.$loading()
					this.$store.dispatch('GetUserInfo')
					this.getAllDic().then(res => {
						uni.hideLoading()
						if (this.clear) {
							this.clear('flag')
						}
					})
				}
				// this.$store.dispatch('GetUserInfo')
				// this.getAllDic().then(res => {
				// 	uni.hideLoading()
				// })
			}
		},
		getAllDic () {
			let array = [
				// new Promise(resolve => {
				// 	this.$store.dispatch('GetOrganizationAll').then(() => {
				// 		resolve()
				// 	})
				// }),
				new Promise(resolve => {
					this.$store.dispatch('GetDodSpecialCode').then(() => {
						resolve()
					})
				}),
				new Promise(resolve => {
					this.$store.dispatch('GetCargoName').then(() => {
						resolve()
					})
				}),
				new Promise(resolve => {
					this.$store.dispatch('GetAirport').then(() => {
						resolve()
					})
				}),
				new Promise(resolve => {
					this.$store.dispatch('GetAirportAll').then(() => {
						resolve()
					})
				}),
				new Promise(resolve => {
					this.$store.dispatch('GetFlightStatus').then(() => {
						resolve()
					})
				}),
				new Promise(resolve => {
					this.$store.dispatch('GetDodCargoCode').then(() => {
						resolve()
					})
				}),
				new Promise(resolve => {
					this.$store.dispatch('GetCarrier').then(() => {
						resolve()
					})
				}),
				new Promise(resolve => {
					this.$store.dispatch('GetReceiver').then(() => {
						resolve()
					})
				}),
				new Promise(resolve => {
					this.$store.dispatch('GetDeliver').then(() => {
						resolve()
					})
				}),
				new Promise(resolve => {
					this.$store.dispatch('GetOrganization').then(() => {
						resolve()
					})
				}),
				new Promise(resolve => {
					this.$store.dispatch('GetShipCode').then(() => {
						resolve()
					})
				})
			]
			return new Promise(resolve => {
				Promise.all(array).then(results => {
					resolve(results)
				})
			})
		}
  }
}
