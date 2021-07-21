<template>
	<view>
		<Navbar title="财务记录"/>
		<view class="financial-page">
			<view class="financial-list-item" @click="$onRouter('/pages/recharge_record/recharge_record')">
				<view class="financial-list-item-label">
					<image src="../../static/app_icon_20@2x.png" class="financial-list-item-icon" mode=""></image>
				    <view class="financial-list-item-text">充币记录</view>
				</view>
				<image src="../../static/icon_right_arrow@2x.png" class="financial-list-item-arrow" mode=""></image>
			</view>
			<view class="financial-list-item" @click="$onRouter('/pages/withdraw_record/withdraw_record')">
				<view class="financial-list-item-label">
					<image src="../../static/app_icon_17@2x.png" class="financial-list-item-icon" mode=""></image>
				    <view class="financial-list-item-text">提币记录</view>
				</view>
				<image src="../../static/icon_right_arrow@2x.png" class="financial-list-item-arrow" mode=""></image>
			</view>
			<view class="financial-list-item" @click="$onRouter('/pages/exchange_recharge/exchange_recharge')">
				<view class="financial-list-item-label">
					<image src="../../static/app_icon_36@2x.png" class="financial-list-item-icon" mode=""></image>
				    <view class="financial-list-item-text">兑换记录</view>
				</view>
				<image src="../../static/icon_right_arrow@2x.png" class="financial-list-item-arrow" mode=""></image>
			</view>
			<view class="financial-list-item" @click="$onRouter('/pages/pledge_record/pledge_record')">
				<view class="financial-list-item-label">
					<image src="../../static/app_icon_16@2x.png" class="financial-list-item-icon" mode=""></image>
				    <view class="financial-list-item-text">质押记录</view>
				</view>
				<image src="../../static/icon_right_arrow@2x.png" class="financial-list-item-arrow" mode=""></image>
			</view>
			<view class="financial-list-item" @click="$onRouter('/pages/income_record/income_record')">
				<view class="financial-list-item-label">
					<image src="../../static/app_icon_15@2x.png" class="financial-list-item-icon" mode=""></image>
				    <view class="financial-list-item-text">收益记录</view>
				</view>
				<image src="../../static/icon_right_arrow@2x.png" class="financial-list-item-arrow" mode=""></image>
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
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.financial-page{
	padding: 0 35upx;
	.financial-list-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 52upx;
		background-color: @primary-color;
		height: 150upx;
		margin-top: 32upx;
		border-radius: 10upx;
		&-label{
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		&-icon{
			width: 49upx;
			height: 49upx;
		}
		&-text{
			font-size: 28upx;
			color: #fff;
			font-weight: bold;
			margin-left: 33upx;
		}
		&-arrow{
			width: 25upx;
			height: 42upx;
		}
	}
}
</style>
