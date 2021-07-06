<template>
	<view class="register-page">
		<view class="status_bar"></view>
	    <view class="register-header">
	    	<image src="../../static/LOGO3@2x.png" class="register-header-logo" mode=""></image>
	    	<text class="register-header-text">Swapant</text>
	    </view>
		<view class="register-title">
			<view class="register-title-text">
				Swapant
			</view>
			<view class="register-title-tip">
				挖矿、nft、defi 投顾乐园
			</view>
			<view class="register-title-tip">
				一站式流动性挖矿手机APP
			</view>
		</view>
		<image src="../../static/login/register_bg@2x.png" class="page-bg" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
@import url('@/styles/theme_vars.less');
.register-page{
	.register-header{
		padding: 54upx 40upx 123upx 40upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		&-logo{
			width: 69upx;
			height: 91upx;
		}
		&-text{
			font-size: 37.81upx;
			color: #ffffff;
			margin-left: 17upx;
			font-weight: bold;
		}
	}
	.register-title{
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		&-text{
			font-size: 97.93upx;
			margin-bottom: 47upx;
		}
		&-tip{
			font-size: 28upx;
			margin-bottom: 10upx;
		}
	}
}
</style>
