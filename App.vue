<script>
	export default {
		onLaunch: function(options) {
			const authtoken = uni.getStorageSync('authtoken');
			console.log(authtoken);
			if (authtoken !== "") {
				uni.reLaunch({
					url: '/pages/tabbar/tabbar'
				})
			} else {
				if (options.path !== 'pages/register/register') {
					uni.reLaunch({
						url: '/pages/login/login'
					})
				}
			}
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
	/*每个页面公共css */
	.page-bg{
		position: fixed;
        top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #0f164d;
		z-index: -2;
	}
	.tabbar-page{
		padding-bottom: @tabbar-bottom-height;
	}
	.safearea{
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);  
		padding-bottom: env(safe-area-inset-bottom);
	}
	.status_bar {
	    height: var(--status-bar-height);
	    width: 100%;
	}
	.green-color{
		color: @color-1EF0A9 ;
	}
	.primary-btn{
		width: 100%;
		height: 95upx;
		color: @color-010503;
		background-color: @color-1EF0A9;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 95upx;
		font-weight: bold;
	}
	.navbar-wrap{
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-title{
			font-size: 60upx;
			color: #fff;
		}
		&-sufix{
			font-size: 28upx;
			color: #fff;
		}
		.navbar-wrap-icon{
			width: 26upx;
			height: 26upx;
			margin-left: 34upx;
		}
	}
	.mphtml{
		._span,.undefined{
			color: #fff !important;
		}
	}
</style>
