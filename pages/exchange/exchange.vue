<template>
	<view class="exchange-page safearea">
		<view class="status_bar"></view>
		<view class="navbar-wrap">
			<view class="navbar-wrap-title">
				兑换
			</view>
			<view class="navbar-wrap-sufix" @click="$onRouter('/pages/exchange_recharge/exchange_recharge')">
				兑换记录
			</view>
		</view>
		<!-- <view class="exchange-address">
			<view class="exchange-address-label">
				矿池总抵押
			</view>
			<view class="exchange-address-value">
				dsgahahkajhoiahjfoiahogiaitsdgaghasuidga
			</view>
		</view> -->
		<view class="blance-card">
			<view class="" v-for="item,index in sortExcharge" :key="index">
				<view class="blance-card-item" >
					<view class="blance-card-item-label">
						<image :src="item === '1' ? '../../static/app_icon_32@2x.png' : '../../static/app_icon_33@2x.png'" class="blance-card-item-icon" mode=""></image>
						<view class="blance-card-item-info">
							<view class="small-text">可用余额</view>
							<view class="info-text">{{exchargeIndex[item].balance}} {{item === '1' ? 'USDT' : 'SWA'}}</view>
							<view class="small-text">1 {{item === '1' ? 'USDT' : 'SWA'}} ≈ {{exchargeIndex[item].convert}} {{item === '2' ? 'USDT' : 'SWA'}}</view>
						</view>
					</view>
					<view class="blance-card-item-btn" :class=" item === '1' ? 'green-btn' : ''">
						<text>{{item === '1' ? 'USDT' : 'SWA'}}</text>
						<!-- <image src="../../static/icon_down_arrow@2x.png" class="icon_down_arrow" mode=""></image> -->
					</view>
				</view>
				<view class="blance-card-item-line" v-if="index < sortExcharge.length - 1 "></view>
			</view>
			<image src="../../static/app_icon_34@2x.png" class="refresh-btn" mode="" @click="onSort"></image>
		</view>
		<view class="exchange-form-label">{{type === '1' ? 'USDT' : 'SWA' }} 兑换 {{type === '2' ? 'USDT' : 'SWA' }} (手续费：{{fromBalnce.fee}}% {{type === '1' ? 'USDT' : 'SWA' }})</view>
		<view class="exchange-input-wrap">
			<view class="exchange-input-label">
				<image :src="type=== '1' ? '../../static/app_icon_32@2x.png' : '../../static/app_icon_33@2x.png'" class="exchange-input-label-icon" mode=""></image>
			    <view class="exchange-input-label-line"></view>
			</view>
			<input type="number" v-model="num" placeholder="请输入兑换金额" class="exchange-input" placeholder-class="exchange-input-placeholder"/>
		    <text class="exchange-input-sufix" @click="onPaseAll">全部</text>
		</view>
		<view class="primary-btn" @click="onExcharge">
			兑换
		</view>
	</view>
</template>

<script>
	import * as services from '@/ants/services/index.js';
	export default {
		components:{
		},
		data() {
			return {
	           exchargeIndex: {},
			   sortExcharge: [],
			   num: '',
			   type: '0',
			   fromBalnce: {}
			};
		},
		async mounted() {
			uni.showLoading();
			const response = await services.exchargeIndex();
			uni.hideLoading();
			this.exchargeIndex = response;
			this.sortExcharge = Object.keys(response);
			this.type = this.sortExcharge[0];
			this.fromBalnce = response[this.sortExcharge[0]];
		},
		methods:{
			onSort(){
				const sort = []
				const sortExcharge = [...this.sortExcharge];
				sort[0] = sortExcharge[1];
				sort[1] = sortExcharge[0];
				this.type = sort[0];
				this.fromBalnce = this.exchargeIndex[sort[0]];
				this.sortExcharge = sort;
				this.num = '';
			},
			onPaseAll(){
				this.num = this.fromBalnce.balance;
			},
			async onExcharge(){
				if (!this.num){
					return uni.showToast({
						icon: 'none',
						title: '请入兑换数量'
					})
				}
				if (!/^[0-9]*[1-9][0-9]*$/.test(this.num)) {
					return uni.showToast({
						icon: 'none',
						title: '请入大于0的正整数'
					})
				}
				uni.showLoading({
				  title: '兑换中'	
				})
				const res = await services.postExchargeIndex({
					num: this.num,
					type: this.type
				});
				uni.showToast({
					icon: 'success',
					title: '兑换成功'
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.exchange-page{
	padding: 25upx;
	.exchange-address{
		background-color: @primary-color;
		color: #fff;
		font-size: 22upx;
		padding: 25upx;
		margin-top: 73upx;
		&-label{
			margin-bottom: 20upx;
		}
	}
	.blance-card{
		background-color: @primary-color;
		padding: 25upx;
		margin-top: 43upx;
		position: relative;
		.refresh-btn{
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%, 51upx);
			width: 102upx;
			height: 102upx;
		}
		&-item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 40upx 0;
			&-label{
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}
			&-icon{
				width: 67upx;
				height: 67upx;
				border-radius: 67upx;
				margin-right: 20upx;
			}
			&-info{
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				flex-direction: column;
				font-size: 24upx;
				color: #fff;
			}
			.small-text{
				font-size: 18upx;
				color: @color-91BBE3;
			}
			.info-text{
				margin: 10upx 0;
			}
			&-btn{
				padding: 0 30upx;
				background-color: #DD525F;
				border-radius: 60upx;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 60upx;
				color: #fff;
				font-size: 32.18upx;
				.icon_down_arrow{
					width: 20upx;
					height: 18upx;
					margin-left: 24upx;
				}
			}
			.green-btn{
				background-color: @color-1EF0A9;
			}
			&-line{
				height: 2px;
				background-color: #263077;
			}
		}
	}
	.exchange-form-label{
		font-size: 18upx;
		color: @color-91BBE3;
		margin-top: 100upx;
		margin-bottom: 18upx;
	}
	.exchange-input-wrap{
		padding: 0 25upx;
		background-color: @primary-color;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 60upx;
		border-radius: 10upx;
		.exchange-input-label{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			&-icon{
				width: 38upx;
				height: 38upx;
			}
			&-line{
			   width: 2upx;
			   background-color: @color-91BBE3;
			   height: 49upx;
			   margin: 0 20upx;
			}	
		}
		.exchange-input{
			flex: 1;
			height: 88upx;
			 color: #fff;
			&-sufix{
				font-size: 24upx;
				color: @color-1EF0A9;
			}
		}
		.exchange-input-placeholder{
			font-size: 30.55upx;
			color: @color-2133B4;
		}
	}
}
</style>
