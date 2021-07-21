<template>
	<view class="recharge-page">
		<Navbar title="USDT充值"/>
		<view class="recharge-qrcode">
			<image src="../../static/qrcode_bg@2x.png" class="recharge-qrcode-bg" mode=""></image>
		    <image :src="walletRecharge.qrcode_url" class="recharge-qrcode-img" mode=""></image>
		</view>
		<view class="recharge-address">
			<view class="recharge-address-title">
				<text>充币地址</text>
				<text class="green-color" @click="onCopy">复制</text>
			</view>
			<view class="recharge-address-link">
				{{walletRecharge.address}}
			</view>
		</view>
		<view class="recharge-linktype">
			<view class="recharge-linktype-title">
				<text>链类型</text>
			</view>
			<view class="recharge-linktype-btns">
				<view class="recharge-linktype-item selected-linktype">
					{{walletRecharge.coin_type}}
				</view>
				<!-- <view class="recharge-linktype-item">
					ETH
				</view>
				<view class="recharge-linktype-item">
					HSC
				</view> -->
			</view>
		</view>
		<view class="page-bg"></view>
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
				walletRecharge: {}
			};
		},
		async mounted() {
			uni.showLoading();
			const walletRecharge = await services.walletRecharge();
			this.walletRecharge = walletRecharge;
			uni.hideLoading();
		},
		methods: {
			onCopy(){
				this.$copy(this.walletRecharge.address)
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.recharge-page{
	.recharge-qrcode{
		width: 545upx;
		height: 545upx;
		position: relative;
		margin: 50upx auto;
		display: flex;
		justify-content: center;
		align-items: center;
		&-bg{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		&-img{
			width: 380upx;
			height: 380upx;
		}
	}
	.recharge-address{
		margin: 0 35upx;
		padding: 32upx;
		background-color: @primary-color;
		border-radius: 10upx;
		&-title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: @color-91BBE3;
			font-size: 22upx;
		}
		&-link{
			margin-top: 20upx;
			color: @color-91BBE3;
			font-size: 22upx;
		}
	}
	.recharge-linktype{
		padding: 32upx;
		background-color: @primary-color;
		border-radius: 10upx;
		margin: 59upx 35upx;
		&-title{
			color: @color-91BBE3;
			font-size: 22upx;
		}
		&-btns{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20upx;
		}
		&-item{
			width: 32%;
			height: 49upx;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: @color-212F98;
			border-radius: 10upx;
			color: @color-000444;
			font-size: 22upx;
		}
		.selected-linktype{
			background-color: @color-1EF0A9;
		}
	}
}
</style>
