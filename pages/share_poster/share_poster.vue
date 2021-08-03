<template>
	<view>
		<Navbar title="邀请海报"/>
		<view class="share-poster-page">
			<image src="../../static/share/share_poster_img@2x.png" class="share-poster-img" mode=""></image>
		    <view class="share-poster-title green-color">
		    	邀您注册swapait
		    </view>
			<view class="share-poster-tips">
				FIL矿池——可以随存随取随时得收益
			</view>
			<view class="share-poster-tips">
				流动性矿池——少量的投入更高的收益产出
			</view>
			<view class="share-poster-qrcode">
				<view class="share-poster-qrcode-title">
					长按扫描下方二维码
				</view>
				<view class="share-poster-qrcode-wrap">
					<image :src="shareCode.qrcode" class="share-poster-qrcode-img" mode=""></image>
				</view>
			</view>
			<view class="primary-btn" @click="onCopy">
				复制邀请链接
			</view>
		</view>
		<image src="../../static/share/share_poster_bg@2x.png" class="page-bg" mode=""></image>
	</view>
</template>

<script>
	import Navbar from '@/components/navbar.vue';
	import * as services from '@/ants/services/index.js';
	export default {
		components:{
			Navbar
		},
		data() {
			return {
				shareCode:{}
			};
		},
		async mounted() {
			uni.showLoading();
			const shareCode = await services.userShare();
			this.shareCode = shareCode;
			uni.hideLoading();
		},
		methods:{
			onCopy(){
			   this.$copy(this.shareCode.share_url)
			} 
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.share-poster-page{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding:0 35upx 50upx 35upx;
	box-sizing: border-box;
	.share-poster-img{
		width: 433upx;
		height: 321upx;
		margin-top: 81upx;
	}
	.share-poster-title{
		font-size: 38upx;
		margin: 52upx 0 32upx 0;
	}
	.share-poster-tips{
		margin-bottom: 20upx;
		font-size: 24upx;
		color: #fff;
	}
	.share-poster-qrcode{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 100upx;
		&-title{
			font-size: 24upx;
			color: #fff;
			margin-bottom: 59upx;
		}
		&-wrap{
			background-color: #fff;
			border-radius: 20upx;
			width: 291upx;
			height: 291upx;
			padding: 20upx;
			margin-bottom: 59upx;
		}
		&-img{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
