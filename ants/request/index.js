import Request from './request.js'
// const Request = require()

const instance = new Request({
	baseUrl: 'http://mayi.trxcc.com',
	timeout: 10000
})


instance.interceptors.request.use((req) => {
	return req;
})

instance.interceptors.response.use((res) => {
	console.log(res);
	if (res.statusCode !== 200) {
		uni.showToast({
			icon: "none",
			title: res.errMsg
		})
	} else {
		if (res.data.status !== 1) {
			uni.showToast({
				icon: "none",
				title: res.data.info
			})
		}
	}
	return res.data.data;
})


export default instance;