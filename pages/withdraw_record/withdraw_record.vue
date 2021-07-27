<template>
	<view>
		<Navbar title="提币记录"/>
		<view class="record-page" v-if="recordList && recordList.length > 0">
			<view class="record-item" v-for="item,index in recordList" :key="item.no">
				<view class="record-item-row">
					<view class="record-item-label">
						提币数量：
					</view>
					<view class="record-item-value">
						{{item.real_num}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						提币手续费：
					</view>
					<view class="record-item-value">
						{{item.total_fee}}%
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						提币地址：
					</view>
					<view class="record-item-value">
						{{item.to}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						提币时间：
					</view>
					<view class="record-item-value">
					    {{item.create_time}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						订单状态：
					</view>
					<view class="record-item-value">
						{{item.status === 0 && '未审核'}}
						{{item.status === 1 && '已审核'}}
						{{item.status === 2 && '审核失败'}}
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
			const response = await services.withdrawRecord();
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
