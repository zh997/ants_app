import Request from './request.js'
// const Request = require()

const instance = new Request({
	baseUrl: 'http://mayi.trxcc.com',
	timeout: 10000,
})


instance.interceptors.request.use((req) => {
	const authtoken = uni.getStorageSync('authtoken');
	if (authtoken !== "") {
		req.header = {
			authtoken: authtoken
		}
	}
	return req;
})

instance.interceptors.response.use((res) => {
	if (res.statusCode !== 200) {
		uni.showToast({
			icon: "none",
			title: res.errMsg
		})
	} else {
		if (res.data.status !== 1) {
			if (res.data.code === 4003) {
				uni.removeStorageSync('authtoken');
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
			uni.showToast({
				icon: "none",
				title: res.data.info
			})
		}
	}
	return res.data.data;
})


export default instance;