<template>
	<view class="property-page safearea">
		<view class="status_bar"></view>
		<view class="navbar-wrap">
			<view class="navbar-wrap-title">
                资产
			</view>
			<view class="navbar-wrap-sufix">
				资金记录
			</view>
		</view>
		<view class="property-entry">
			<view class="property-entry-item" @click="$onRouter('/pages/recharge_entry/recharge_entry')">
				<image src="../../static/app_icon_20@2x.png" class="property-entry-item-icon" mode=""></image>
			    <text class="property-entry-item-text">充值</text>
			</view>
			<view class="property-entry-item" @click="$onRouter('/pages/withdraw/withdraw')">
				<image src="../../static/app_icon_17@2x.png" class="property-entry-item-icon" mode=""></image>
			    <text class="property-entry-item-text">提币</text>
			</view>
			<view class="property-entry-item" @click="$onRouter('')">
				<image src="../../static/app_icon_19@2x.png" class="property-entry-item-icon" mode=""></image>
			    <text class="property-entry-item-text">闪电转账</text>
			</view>
			<view class="property-entry-item" @click="$onRouter('/pages/currency_intro/currency_intro')">
				<image src="../../static/app_icon_21@2x.png" class="property-entry-item-icon" mode=""></image>
			    <text class="property-entry-item-text">币种介绍</text>
			</view>
		</view>
		<view class="property-info">
			<image src="../../static/property_banner@2x.png" class="property-info-bg" mode=""></image>
		    <view class="property-info-content">
		    	<view class="property-info-label">
		    		我的资产
		    	</view>
		    	<view class="property-info-value">
		    		{{mystore.total_usd || '--'}} USDT
		    	</view>
		    </view>
		</view>
		<view class="property-list-item" @click="$onRouter('/pages/income/income')">
			<view class="property-list-item-label">
				<image src="../../static/app_icon_15@2x.png" class="property-list-item-icon" mode=""></image>
			    <view class="property-list-item-text">我的收益</view>
			</view>
			<image src="../../static/icon_right_arrow@2x.png" class="property-list-item-arrow" mode=""></image>
		</view>
		<view class="property-list-item" @click="$onRouter('/pages/financial/financial')">
			<view class="property-list-item-label">
				<image src="../../static/app_icon_16@2x.png" class="property-list-item-icon" mode=""></image>
			    <view class="property-list-item-text">财务记录</view>
			</view>
			<image src="../../static/icon_right_arrow@2x.png" class="property-list-item-arrow" mode=""></image>
		</view>
		<view class="preperty-title" v-if="walletList.length > 0">
			其他资产
		</view>
		
		<view class="preperty-type-items" v-if="walletList.length > 0">
		    <view class="" v-for="item,index in walletList" :key="index">
		    	<view class="preperty-type-item" >
		    		<view class="preperty-type-item-label">
		    			{{item.symbol}}
		    		</view>
		    		<view class="preperty-type-item-label">
		    			{{item.balance}}
		    		</view>
		    	</view>
				<view class="preperty-type-item-line" v-if="index < walletList.length - 1"></view>
		    </view>
		</view>
	</view>
</template>

<script>
	import * as services from '@/ants/services/index.js';
	export default {
		data() {
			return {
				mystore: {},
				walletList: []
			};
		},
		async mounted() {
			uni.showLoading();
			const [mystore, walletList] = await Promise.all([services.walletMystore(), services.walletIndex()]);
			uni.hideLoading();
			this.mystore = mystore;
			this.walletList = walletList;
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.property-page{
	padding: 25upx;
	.property-entry{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 70upx;
		margin-bottom: 40upx;
		&-item{
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 15%;
			&-icon{
				width: 47upx;
				height: 47upx;
				margin-bottom: 17upx;
			}
			&-text{
				font-size: 24upx;
				color: #fff;
			}
		}
	}
	.property-info{
		height: 150upx;
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
	.property-list-item{
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
	.preperty-title{
		font-size: 24upx;
		color: #85ABF4;
		margin: 30upx 0;
	}
	.preperty-type-items{
		background-color:@color-0F1B65;
		border-radius: 20upx;
		padding: 10upx;
		overflow: hidden;
		.preperty-type-item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 50upx;
			// border-bottom: 1px solid #0D144E;
			&-label{
				font-size: 28upx;
				color: #fff;
			}
			&-line{
				height: 1px;
				background-color: #0D144E;
			}
		}
	}
}
</style>
