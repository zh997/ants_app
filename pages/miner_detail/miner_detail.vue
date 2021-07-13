<template>
	<view>
		<Navbar title="矿机详情"/>
		<view class="miner-page">
			<view class="miner-card">
				<view class="miner-avatar">
					<image src="../../static/app_icon_33@2x.png" class="miner-avatar-img" mode=""></image>
					<view class="miner-name">
						SWAPANT 物理节点
					</view>
				</view>
				<view class="miner-price">
					<view class="miner-price-label">
						价格(USDT)
					</view>
					<view class="miner-price-value">
						180.00
					</view>
				</view>
			</view>
			<view class="miner-card">
				<view class="miner-card-title">
					套餐详情
				</view>
				<view class="miner-card-item">
					<view class="miner-card-item-label">
						1、产出币种：
					</view>
					<view class="miner-card-item-value">
						SWAPANT
					</view>
				</view>
				<view class="miner-card-item">
					<view class="miner-card-item-label">
						2、矿机型号:
					</view>
					<view class="miner-card-item-value">
						12-345
					</view>
				</view>
				<view class="miner-card-item">
					<view class="miner-card-item-label">
						3、上架时间:
					</view>
					<view class="miner-card-item-value">
						2021.06.30
					</view>
				</view>
				<view class="miner-card-item">
					<view class="miner-card-item-label">
						4、有效算力：
					</view>
					<view class="miner-card-item-value">
						150/h
					</view>
				</view>
				<view class="miner-card-item">
					<view class="miner-card-item-label">
					  5、服务周期：
					</view>
					<view class="miner-card-item-value">
						30天
					</view>
				</view>
				<view class="miner-card-item">
					<view class="miner-card-item-label">
					6、技术服务费：
					</view>
					<view class="miner-card-item-value">
							0
					</view>
				</view>
			</view>
			<view class="miner-card">
				<view class="checkbox" @click="onAgree">
					<view class="checkbox-btn" v-if="!isAgree"></view>
					<image src="../../static/icon_agree@2x.png" v-else class="icon_agree" mode=""></image>
					<view class="checkbox-text">
						我已阅读并同意《算力租赁/购买协议》
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
						<input type="text" value="" class="inputnumber-input" v-model="count"  />
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
						180 USDT
					</view>
					<view class="miner-card-by-btn">
						立即购买
					</view>
				</view>
			</view>
		</view>
		<view class="page-bg"></view>
	</view>
</template>

<script>
	import Navbar from '@/components/navbar.vue';
	export default {
		components: {
			Navbar
		},
		data() {
			return {
				isAgree: false,
				count: 1
			};
		},
		methods: {
			onAgree(){
				this.isAgree = !this.isAgree
			},
			subCount(){
				if (this.count > 1) {
					this.count -= 1;
				}
				
			},
			addCount(){
				this.count += 1;
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
				width: 305upx;
				color: #fff;
				font-size: 32upx;
				height: 59upx;
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
