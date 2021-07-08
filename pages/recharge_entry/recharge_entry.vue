<template>
	<view>
		<Navbar title="充值"/>
		<view class="recharge-entry-page">
			<view class="property-info">
				<image src="../../static/property_large_bg@2x.png" class="property-info-bg" mode=""></image>
			    <view class="property-info-content">
			    	<view class="property-info-label">
			    		我的资产
			    	</view>
			    	<view class="property-info-value">
			    		0 SWAPANT
			    	</view>
			    </view>
			</view>
			<view class="entry-listitem" @click="onRouter('/pages/recharge/recharge')">
				<image src="../../static/app_icon_33@2x.png" class="entry-listitem-icon" mode=""></image>
				<view class="entry-listitem-info">
					<text class="green-color">SWA</text>
					<text class="item-type">热门</text>
				</view>
			</view>
			<view class="entry-listitem" @click="onRouter('/pages/recharge/recharge')">
				<image src="../../static/app_icon_32@2x.png" class="entry-listitem-icon" mode=""></image>
				<view class="entry-listitem-info">
					<text class="green-color">USDT</text>
					<text class="item-type">热门</text>
				</view>
			</view>
		</view>
		<view class="page-bg"></view>
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
		},
		methods:{
			onRouter(url){
				uni.navigateTo({
					animationType:"pop-in",
					url: url
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.recharge-entry-page{
	padding: 20upx 35upx;
	.property-info{
		height: 193upx;
		border-radius: 10upx;
		overflow: hidden;
	    position: relative;
		&-bg{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
		}
		&-content{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 2;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			padding-left: 48upx;
			flex-direction: column;
		}
		&-label{
			font-size: 18upx;
			color: @color-10184F;
		}
		&-value{
			font-size: 38.9upx;
			color: @color-10184F;
			font-weight: bold;
			margin-top: 20upx;
		}
	}
	.entry-listitem{
		border-radius: 10upx;
		background-color: @primary-color;
		border-radius: 10upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 20upx;
		margin: 50upx 0 30upx 30upx;
		&-icon{
			width: 77upx;
			height: 77upx;
			border-radius: 77upx;
			margin-left: -50upx;
			margin-right: 20upx;
		}
		&-info{
			font-size: 32upx;
			display: flex;
			height: 77upx;
			justify-content: space-between;
			align-items: flex-start;
			flex-direction: column;
			.item-type{
				font-size: 18upx;
				color: @color-7394C7;
			}
		}
	}
}
</style>
