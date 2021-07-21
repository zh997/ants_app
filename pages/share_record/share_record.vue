<template>
	<view>
		<Navbar title="邀请人记录"/>
		<view class="record-page">
			<view class="record-item" v-for="item,index in recordList" :key="item.no">
				<view class="record-item-row">
					<view class="record-item-label">
						数量：
					</view>
					<view class="record-item-value">
						{{item.team_count}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						邀请人邮箱：
					</view>
					<view class="record-item-value">
						{{item.account}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						邀请时间：
					</view>
					<view class="record-item-value">
						{{item.regtime}}
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						邀请类型：
					</view>
					<view class="record-item-value">
					    {{item.is_tui === 1 ? '直接邀请人': '间接邀请人'}}
					</view>
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
				recordList: []
			};
		},
		async mounted() {
			uni.showLoading();
			const response = await services.userMyTeam();
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
