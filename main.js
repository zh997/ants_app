import Vue from 'vue';
import uniCopy from '@/js_sdk/xb-copy/uni-copy.js'
import uView from 'uview-ui';
import App from './App';

Vue.use(uView);

Vue.config.productionTip = false

Vue.prototype.$copy = (content) => {
	uniCopy({
	    content: content,
	    success:(res)=>{
	        uni.showToast({
	            title: res,
	            icon: 'none'
	        })
	    },
	    error:(e)=>{
	        uni.showToast({
	            title: e,
	            icon: 'none',
	            duration:3000,
	        })
	    }
	})
}

Vue.prototype.$onRouter = (url) => {
	if (url === '') {
		uni.showToast({
			icon: 'none',
			title: '暂未开放'
		})
	} else {
		uni.navigateTo({
			animationType:"pop-in",
			url: url
		})
	}
},

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
