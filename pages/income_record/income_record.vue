<template>
	<view>
		<Navbar title="收益记录"/>
		<view class="record-page" v-if="recordList && recordList.length > 0">
			<view class="record-item" v-for="item,index in recordList" :key="item.no">
				<view class="record-item-row">
					<view class="record-item-label">
						收益数量：
					</view>
					<view class="record-item-value">
						{{item.money}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						收益币种：
					</view>
					<view class="record-item-value">
						{{item.mtype}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						收益类型：
					</view>
					<view class="record-item-value">
						{{item.type}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						收益时间：
					</view>
					<view class="record-item-value">
						{{item.create_time}}
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
				recordList: []
			};
		},
		async mounted() {
			uni.showLoading();
			const response = await services.walletRecord();
			uni.hideLoading();
			this.recordList = response;
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
