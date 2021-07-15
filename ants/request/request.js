export default class Request {
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
				use: (callback) => {
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
		const apiUrl = this.options.baseUrl + url;
		const config = this.requestBefore({url: apiUrl, method, data, ...this.options, options})
		return new Promise((resolve, reject) => {
			config.success = (response) => {
				if (response.statusCode === 200 && response.data.status === 1) {
				   return resolve(this.requestAfter(response))
				}
				reject(this.requestAfter(response));
			}
			config.fail = (err) => {
				reject(this.requestAfter(err));
			}
			uni.request(config);
		})
	}
}
