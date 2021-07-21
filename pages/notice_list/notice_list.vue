<template>
	<view>
		<Navbar title="官方公告"/>
		<view class="notice-page">
			<view class="notice-item" v-for="item in list" :key="item.id" @click="$onRouter(`/pages/notice_detail/notice_detail?id=${item.id}`)">
				 <view class="notice-item-title">
				 	{{item.title}}
				 </view>
				 <view class="notice-item-abstract">
				 	<view class="notice-item-abstract-content">
				 		{{item.abstract}}
				 	</view>
					<image src="../../static/icon_right_arrow@2x.png" class="icon_right_arrow" mode=""></image>
				 </view>
				 <view class="notice-item-time">
				 	{{item.create_time}}
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
				list: {}
			};
		},
		async mounted() {
			uni.showLoading();
			const response = await services.noticeList();
			uni.hideLoading();
			this.list = response;
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
	.notice-page{
		padding: 30upx;
		.notice-item{
			margin-bottom: 30upx;
			background-color: @primary-color;
			border-radius: 20upx;
			padding: 40upx;
			box-sizing: border-box;
			&-title,&-time{
				font-size: 21.84upx;
				color: #91B7E3;
			}
			&-abstract{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 41upx 0 20upx 0;
				&-content{
					font-size: 24upx;
					color: #fff;
					flex: 1;
					padding-right: 30upx;
				}
				.icon_right_arrow{
					width: 25upx;
					height: 42upx;
				}
			}
		}
	}

</style>
