<template>
	<view>
		<Navbar title="质押"/>
		<view class="swapant-orepool">
			<view class="property-info">
				<image src="../../static/property_banner@2x.png" class="property-info-bg" mode=""></image>
			    <view class="property-info-content">
			    	<view class="property-info-label">
			    		矿池总流动性
			    	</view>
			    	<view class="property-info-value">
			    		{{poolPledgeview.sys_total_num || 0.00}} SWAPANT
			    	</view>
			    </view>
			</view>
			<view class="swapant-orepool-items">
				<view class="swapant-orepool-item paddingLeft48">
					<view class="swapant-orepool-item-label">
						年化收益率
					</view>
					<view class="swapant-orepool-item-value">
						{{poolPledgeview.scale || 0.00}}%
					</view>
				</view>
				<view class="swapant-orepool-item">
					<view class="swapant-orepool-item-label">
						当前价格
					</view>
					<view class="swapant-orepool-item-value">
						1 SWAPANT≈{{poolPledgeview.swa_usdt || 0.00}} USDT
					</view>
				</view>
			</view>
			<view class="swapant-orepool-rowitems">
				<view class="swapant-orepool-rowitem">
					<view class="swapant-orepool-rowitem-label">
						个人质押算力
					</view>
					<view class="swapant-orepool-rowitem-value">
						{{poolPledgeview.user_pledge_power || 0.00}}
					</view>
				</view>
				<view class="swapant-orepool-rowitem">
					<view class="swapant-orepool-rowitem-label">
						个人总算力
					</view>
					<view class="swapant-orepool-rowitem-value">
						{{poolPledgeview.user_total_power || 0.00}}
					</view>
				</view>
			</view>
			<view class="swapant-orepool-items">
				<view class="swapant-orepool-item paddingLeft48">
					<view class="swapant-orepool-item-label">
						年化收益率
					</view>
					<view class="swapant-orepool-item-value">
						{{poolPledgeview.scale || 0.00}}%
					</view>
				</view>
				<view class="swapant-orepool-item">
					<view class="swapant-orepool-collectbtn" @click="onPoolDraw">
						收取
					</view>
				</view>
			</view>
			<view class="swapant-orepool-btnrow">
				<view class="swapant-orepool-primarybtn" @click="onRouter('/pages/storage/storage')">
					存储
				</view>
				<view class="swapant-orepool-quhuibtn" @click="onRouter('/pages/retrieve/retrieve')">
					取回
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
				poolPledgeview:{}
			};
		},
		async onLoad(option) {
			uni.showLoading();
			const res = await services.poolPledgeview();
			uni.hideLoading();
			this.poolPledgeview = res;
		},
		methods: {
			onRouter(path){
				uni.navigateTo({
					animationType: "pop-in",
					url: path
				})
			},
			async onPoolDraw() {
				uni.showLoading();
				const res = await services.poolDraw();
				uni.showToast({
					icon: 'success',
					title: '收取成功'
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
	.swapant-orepool{
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
		&-items{
			border-radius: 20upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 150upx;
			background-color: @color-0F1B65;
			margin-bottom: 29upx;
			.swapant-orepool-item{
				display: flex;
				justify-content: center;
				align-items: flex-start;
				flex-direction: column;
				height: 150upx;
				width: 50%;
				
				&-label{
					font-size: 18upx;
					color: #fff;
					margin-bottom: 28upx;
				}
				&-value{
					font-size: 24upx;
					color: @color-1EF0A9;
				}
			}
		}
		&-rowitems{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 150upx;
			margin-bottom: 29upx;
		}
		&-rowitem{
			display: flex;
			justify-content: center;
			align-items: flex-start;
		    height: 150upx;
			width: 326upx;
		    background-color: @color-0F1B65;
			border-radius: 20upx;
			flex-direction: column;
			padding-left: 48upx;
			box-sizing: border-box;
			
			&-label{
				font-size: 18upx;
				color: #fff;
				margin-bottom: 28upx;
			}
			&-value{
				font-size: 24upx;
				color: @color-1EF0A9;
			}
		}
		.paddingLeft48{
			padding-left: 48upx;
		}
		&-collectbtn{
			width: 240upx;
			height: 59upx;
			border-radius: 59upx;
			border: 1px solid @color-1EF0A9;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			color: #fff;
			margin: 0 auto;
		}
		&-btnrow{
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&-primarybtn{
			width: 305upx;
			height: 59upx;
			background-color: @color-1EF0A9;
			border-radius: 59upx;
			color: #fff;
			font-size: 32upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&-quhuibtn{
			width: 305upx;
			height: 59upx;
			background-color: @color-3240A8;
			border-radius: 59upx;
			color: #fff;
			font-size: 32upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
