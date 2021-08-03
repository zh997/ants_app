<template>
	<view>
		<Navbar title="租赁协议"/>
		<view class="notice-detail-page">
			 <view class="notice-detail-title">
			 	{{detail.title}}
			 </view>
			 <view class="notice-detail-abstract">
			 	{{detail.abstract}}
			 </view>
			 <view class="notice-detail-time">
			 	{{detail.create_time}}
			 </view>
			 <view class="notice-detail-line">
			 	
			 </view>
			 <view class="u-content">
			 	<u-parse :html="detail.content"></u-parse>
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
				detail: {}
			};
		},
		async onLoad(options) {
			uni.showLoading();
			const response = await services.machineRentRule();
			uni.hideLoading();
			this.detail = response;
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
	.notice-detail-page{
		padding: 30upx;
		.notice-detail-title{
			font-size: 36upx;
			color: #fff;
			margin-bottom: 36upx;
		}
		.notice-detail-abstract{
			font-size: 24upx;
			color: #fff;
			margin-bottom: 36upx;
		}
		.notice-detail-time{
			font-size: 24upx;
			color: #91B7E3;
		}
		.notice-detail-line{
			border-bottom: 1px dashed #000000;
			margin: 50upx 0;
		}
	}

</style>
