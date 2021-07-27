<template>
	<view>
		<Navbar title="充币记录"/>
		<view class="record-page" v-if="walletRechargeRecord && walletRechargeRecord.length > 0">
			<view class="record-item" v-for="item in walletRechargeRecord" :key="item.id">
				<view class="record-item-row">
					<view class="record-item-label">
						充值数量：
					</view>
					<view class="record-item-value">
						{{item.money}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						充值时间：
					</view>
					<view class="record-item-value">
						{{money.create_time}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						订单状态：
					</view>
					<view class="record-item-value">
						{{item.status === 1 ? '已完成' : '未完成'}}
					</view>
				</view>
			</view>
		</view>
		<u-empty text="数据为空" v-else mode="list"></u-empty>
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
				walletRechargeRecord: {}
			};
		},
		async mounted() {
			uni.showLoading();
			const response = await services.walletRechargeRecord();
			uni.hideLoading();
			this.walletRechargeRecord = response;
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.record-page{
	padding: 33upx;
	.record-item{
		padding: 20upx 40upx;
		background-color: #0F1B65;
		border-radius: 20upx;
		margin-bottom: 33upx;
		&-row{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin: 20upx 0;
		}
		&-label{
			font-size: 28upx;
			color: #85ABF4;
			margin-right: 20upx;
		}
		&-value{
			font-size: 28upx;
			color: #fff;
		}
	}
}
</style>
