<template>
	<view>
		<Navbar title="我的收益"/>
		<view class="income-page">
			<view class="property-info">
				<image src="../../static/property_banner@2x.png" class="property-info-bg" mode=""></image>
			    <view class="property-info-content">
			    	<view class="property-info-label">
			    		总收益
			    	</view>
			    	<view class="property-info-value">
			    		{{walletRecordData.total_money || '0.00'}} USDT
			    	</view>
			    </view>
			</view>
			<view class="income-count-items">
				<view class="income-count-item">
					<view class="income-count-item-title">
						昨日收益
					</view>
					<view class="income-count-item-count green-color">
						{{walletRecordData.yester_money || '0.00'}}
					</view>
				</view>
				<view class="income-count-item">
					<view class="income-count-item-title">
						静态收益
					</view>
					<view class="income-count-item-count green-color">
						{{walletRecordData.income_money || '0.00'}}
					</view>
				</view>
				<view class="income-count-item">
					<view class="income-count-item-title">
						动态收益
					</view>
					<view class="income-count-item-count green-color">
						{{walletRecordData.dynamic_money || '0.00'}}
					</view>
				</view>
				<view class="income-count-item">
					<view class="income-count-item-title">
						直推收益
					</view>
					<view class="income-count-item-count green-color">
						{{walletRecordData.tui_money || '0.00'}}
					</view>
				</view>
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
				walletRecordData: {}
			};
		},
		async mounted() {
			uni.showLoading();
			const res = await services.walletRecordData();
			uni.hideLoading();
			this.walletRecordData = res;
		},
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.income-page{
	padding: 20upx 35upx;
	.property-info{
		height: 150upx;
		border-radius: 10upx;
		overflow: hidden;
		position: relative;
		margin-bottom: 29upx;
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
	.income-count-items{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		.income-count-item{
			width: 326upx;
			height: 150upx;
			background-color: @color-0F1B65;
			border-radius: 20upx;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			padding: 0 49upx;
			box-sizing: border-box;
			margin-bottom: 29upx;
			&-title{
				font-size: 18upx;
				color: #fff;
				margin-bottom: 28upx;
			}
			&-count{
				font-size: 24upx;
			}
		}
	}
}
</style>
