<template>
	<view>
		<Navbar title="流动性矿池"/>
		<view class="orepool-page">
			<view class="card-item">
				<view class="card-item-header">
					<view class="card-item-header-title">
						<image src="../../static/app_icon_10@2x.png" class="card-item-header-icon" mode=""></image>
					    <text class="card-item-header-title">{{poolDetail.name || '---'}}</text>
						<view class="card-item-header-status">
							<view class="card-item-header-status-dot"></view>
						    <text class="card-item-header-status">{{poolDetail.status == 1 ? '运行中': '停止运行'}}</text>
						</view>
					</view>
					<view class="card-item-header-btn" @click="$onRouter('/pages/swapant_orepool/swapant_orepool')">
						立即质押
					</view>
				</view>
				<view class="card-item-label">
					<text class="card-item-label-text">日产出</text>
					<text class="card-item-label-text">最高年化收益率</text>
				</view>
				<view class="card-item-value">
					<text class="card-item-value-text"><text class="green-color">{{poolDetail.num || '0.00'}}</text>  SWA</text>
					<text class="card-item-value-largetext green-color">{{poolDetail.scale || '0.00'}}%</text>
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
				poolDetail: {}
			};
		},
		async onLoad(option) {
			uni.showLoading();
			const res = await services.poolDetail({
				id: Number(option.id)
			});
			uni.hideLoading();
			this.poolDetail = res;
		},
		methods:{
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
	.orepool-page{
		padding: 30upx 0;
		.card-item{
			margin: 0 25upx 25upx 25upx;
			background-color: @primary-color;
			border-radius: 20upx;
			padding: 40upx;
			box-sizing: border-box;
			&-header{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 52upx;
				&-title{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					font-size: 36upx;
					color: #fff;
					margin-right: 20upx;
				}
				&-btn{
					width: 204upx;
					height: 59upx;
					border-radius: 59upx;
					background-color:@color-1EF0A9;
					display: flex;
					justify-content: center;
					color: #fff;
					align-items: center;
					font-size: 32upx;
				}
				&-icon{
					width: 57upx;
					height: 52upx;
					margin-right: 30upx;
					
				}
				&-status{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					font-size: 15.44upx;
					color: #fff;
					&-dot{
						width: 15upx;
						height: 15upx;
						background-color: @color-04FF00;
						border-radius: 15upx;
						margin-right: 10upx;
					}
					
					
				}
			}
			&-label{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 35upx 0;
				&-text{
					font-size: 24upx;
					color: #fff;
				}
			}
			&-value{
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				
				&-text{
					font-size: 36upx;
					color: #fff;
					.green-color{
						margin-right: 10upx;
					}
				}
				&-largetext{
					font-size: 52upx;
				}
				
			}
		}
	}

</style>
