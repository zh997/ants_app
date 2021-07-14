export default class request {
	constructor(options) {
	    this.options = options;
		/** 拦截器 */
		this.interceptors = {
			request: {
				use: (callback) => {
				    this.requestBefore = callback;
				}
			},
			response: {
				use: (callbask) => {
					this.requestAfter = callback;
				}
			}
		}
	}
	
	/** 请求之后 */
	requestAfter(res) {
		return res;	
	}
	
	/** 请求前 */
	requestBefore(req) {
	   return req;	
	}
	
	/** 发起请求 */
	send(url, method, data, options) {
		const config = this.requestBefore({url, method, data, ...this.options, options})
		return new Promise((resolve, reject) => {
			config.success = (response) => {
				resolve(this.requestAfter(response))
			}
			config.fail = (err) => {
				reject(this.requestAfter(err));
			}
			uni.request(config);
		})
	}
}