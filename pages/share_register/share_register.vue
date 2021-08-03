<template>
	<view>
		<Navbar title="swapait邀请注册"/>
		<view class="share-register-page">
			<image src="../../static/share/share_poster_img@2x.png" class="share-register-img" mode=""></image>
		    <view class="share-register-title green-color">
		    	您的好友（邀请码 YIYIO）
		    </view>
			<view class="share-register-tips">
				FIL矿池——可以随存随取随时得收益
			</view>
			<view class="share-register-tips">
				流动性矿池——少量的投入更高的收益产出
			</view>
			<view class="share-register-form">
				 <view class="share-register-form-item">
				 	<input type="text" value="" class="share-register-input" 
					placeholder-class="placeholder-class" placeholder="请输入邮箱账号" />
				 </view>
				 <view class="share-register-form-item">
				 	<input type="text" value="" class="share-register-input" 
				 					placeholder-class="placeholder-class" placeholder="请输入验证码" />
				 </view>
			</view>
			<view class="primary-btn">
				立即注册
			</view>
		</view>
		<image src="../../static/share/share_poster_bg@2x.png" class="page-bg" mode=""></image>
	</view>
</template>

<script>
	import Navbar from '@/components/navbar.vue';
	export default {
		components:{
			Navbar
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.share-register-page{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding:0 35upx 50upx 35upx;
	box-sizing: border-box;
	.share-register-img{
		width: 433upx;
		height: 321upx;
		margin-top: 81upx;
	}
	.share-register-title{
		font-size: 38upx;
		margin: 52upx 0 32upx 0;
	}
	.share-register-tips{
		margin-bottom: 20upx;
		font-size: 24upx;
		color: #fff;
	}
	.share-register-form{
		width: 100%;
		margin-top: 112upx;
		&-item{
			width: 100%;
			background-color: @color-203098;
			height: 79upx;
			border-radius: 20upx;
			color: #fff;
			font-size: 24upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 0 20upx;
			margin-bottom: 65upx;
			box-sizing: border-box;
		}
		.placeholder-class{
			color: @color-6376FF;
		}
	}
}
</style>
