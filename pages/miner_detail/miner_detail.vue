<template>
	<view>
		<Navbar title="矿机详情"/>
		<view class="miner-page">
			<view class="miner-card">
				<view class="miner-avatar">
					<image :src="detail.icon" class="miner-avatar-img" mode=""></image>
					<view class="miner-name">
						{{detail.name || '---'}}
					</view>
				</view>
				<view class="miner-price">
					<view class="miner-price-label">
						价格（USDT）
					</view>
					<view class="miner-price-value">
						{{detail.money || '0.00'}}
					</view>
				</view>
			</view>
			<view class="miner-card">
				<view class="miner-card-relative">
					<view class="miner-card-title">
						套餐详情
					</view>
					<view class="miner-card-item">
						<view class="miner-card-item-label">
							1、产出币种：
						</view>
						<view class="miner-card-item-value">
							{{detail.symbol}}
						</view>
					</view>
					<view class="miner-card-item">
						<view class="miner-card-item-label">
							2、矿机型号:
						</view>
						<view class="miner-card-item-value">
							{{detail.type}}
						</view>
					</view>
					<view class="miner-card-item">
						<view class="miner-card-item-label">
							3、上架时间:
						</view>
						<view class="miner-card-item-value">
							{{detail.addtime}}
						</view>
					</view>
					<view class="miner-card-item">
						<view class="miner-card-item-label">
							4、有效算力：
						</view>
						<view class="miner-card-item-value">
							{{detail.power}}
						</view>
					</view>
					<view class="miner-card-item">
						<view class="miner-card-item-label">
						  5、服务周期：
						</view>
						<view class="miner-card-item-value">
						{{detail.weekday}}
						</view>
					</view>
					<view class="miner-card-item">
						<view class="miner-card-item-label">
						6、技术服务费：
						</view>
						<view class="miner-card-item-value">
							{{detail.dev_fee}}
						</view>
					</view>
				</view>
				
				<image src="../../static/miner_detail_bg.png" class="miner-card-bg" mode=""></image>
			</view>
			<view class="miner-card">
				<view class="checkbox" @click="onAgree">
					<view class="checkbox-btn" v-if="!isAgree"></view>
					<image src="../../static/icon_agree@2x.png" v-else class="icon_agree" mode=""></image>
					<view class="checkbox-text">
						我已阅读并同意<text @click.stop="$onRouter('/pages/lease_agreement/lease_agreement')">《算力租赁/购买协议》</text>
					</view>
				</view>
				<view class="miner-card-ordercount">
					<view class="miner-card-ordercount-label">
						订单数量
					</view>
					<view class="miner-card-inputnumber">
					
						<view class="inputnumber-sub" @click="subCount">
							-
						</view>
						<input type="text" value="" class="inputnumber-input" v-model="num"  />
						<view class="inputnumber-add" @click="addCount">
							+
						</view>
					</view>
				</view>
				<view class="miner-card-by">
					<view class="miner-card-by-label">
						订单总额
					</view>
					<view class="miner-card-by-value">
						{{totalPrice}} USDT
					</view>
				
				</view>
				<view class="miner-card-by-btn" @click="onBuy">
					立即购买
				</view>
			</view>
		</view>
		<view class="page-bg"></view>
	</view>
</template>

<script>
	import Navbar from '@/components/navbar.vue';
	import Decimal from '@/ants/utils/decimal.js';
	import * as services from '@/ants/services/index.js';
	export default {
		components: {
			Navbar
		},
		data() {
			return {
				isAgree: false,
				num: 1,
				detail: {
					money: 0
				}
			};
		},
		computed:{
			totalPrice(){
				const price = new Decimal(Number(this.detail.money));
				return price.mul(Number(this.num));
			}
		},
		async onLoad(options) {
			uni.showLoading();
			const response = await services.machineDetail({id: options.id});
			uni.hideLoading();
			this.detail = response;
		},
		methods: {
			onAgree(){
				this.isAgree = !this.isAgree
			},
			subCount(){
				if (this.num > 1) {
					this.num -= 1;
				}
			},
			addCount(){
				this.num += 1;
			},
			async onBuy() {
				if(!this.isAgree) return uni.showToast({
					icon: 'none',
					title: '请勾选《算力租赁/购买协议》'
				})
				uni.showLoading({
				  title: '购买中'	
				})
				const res = await services.machineRentPay({
					num: this.num,
					id: this.detail.id
				});
				uni.showToast({
					icon: 'success',
					title: '购买成功'
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.miner-page{
	padding: 27upx;
	.miner-card{
		padding: 28upx;
		border-radius: 20upx;
	    background-color: @color-0F1B65;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		margin-bottom: 39upx;
		position: relative;
		.miner-card-relative{
			position: relative;
			z-index: 1;
		}
		.miner-card-bg{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;
		}
		.miner-avatar{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 28upx;
			&-img{
				width: 42upx;
				height: 42upx;
			}
			.miner-name{
				font-size: 22upx;
				color: #fff;
				margin-left: 20upx;
			}
		}
		.miner-price{
			&-label{
				font-size: 18upx;
				color: #91BBE3;
				margin-bottom: 13upx;
			}
			&-value{
				color: @color-1EF0A9;
				font-size: 36upx;
			}
		}
		&-title{
			font-size: 22upx;
			color: #fff;
			margin-bottom: 38upx;
		}
		&-item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 30upx;
			&-label{
				font-size: 23upx;
				color: #91BBE3;
				margin-right: 20upx;
			}
			&-value{
				font-size: 23upx;
				color: #fff;
			}
		}
		.checkbox{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 20upx;
			.checkbox-btn{
				width: 27upx;
				height: 27upx;
				border-radius: 25upx;
				border: 1px solid #fff;
				margin-right: 10upx;
			}
			.checkbox-text{
				font-size: 22upx;
				color: #fff;
			}
			.icon_agree{
				width: 27upx;
				height: 27upx;
				margin-right: 10upx;
			}
		}
		&-ordercount{
			display: flex;
			justify-content: space-between;
			width: 100%;
			align-items: center;
			&-label{
				font-size: 22.55upx;
				color: #fff;
			}
		}
		&-inputnumber{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.inputnumber-input{
				background-color: #202F98;
				height: 50upx;
				padding: 0 20upx;
				width: 50upx;
				color: #fff;
				margin: 0 10upx;
				text-align: center;
			}
		    .inputnumber-sub,.inputnumber-add {
				width: 50upx;
				height: 50upx;
				background-color: #202F98;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #fff;
			}	
		}
		&-by{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 26upx;
			&-label{
				font-size: 22.55upx;
				color: #fff;
			}
			&-value{
				font-size: 36upx;
				color: #1EF0A9;
			}
			&-btn{
				width: 100%;
				margin-top: 30upx;
				color: #fff;
				font-size: 32upx;
				height: 80upx;
				border-radius: 59upx;
				background-color: @color-1EF0A9;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
}
</style>
