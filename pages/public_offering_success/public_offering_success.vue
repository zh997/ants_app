<template>
	<view class="public-offering-success">
		<view class="public-offering-success-title">
			公募成功
		</view>
		<view class="public-offering-success-tip">
			请耐心等待
		</view>
		<image src="../../static/public_offering_success_img@2x.png" class="public-offering-success-img" mode=""></image>
		<view class="primary-btn" @click="onRouter('/pages/tabbar/tabbar')">
			返回首页
		</view>
		<image src="../../static/public_offering_success_bg@2x.png" class="page-bg" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			onRouter(url){
				uni.redirectTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.public-offering-success{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 78upx;
	font-weight: bold;
	&-title{
	  font-size: 38upx;
	  color: @color-1EF0A9;
	  margin-top: 130upx;
	  margin-bottom: 30upx;
	}
	&-tip{
		font-size: 28upx;
		color: #fff;
	}
	&-img{
		width: 475upx;
		height: 475upx;
		margin: 100upx 0;
	}
}
</style>
