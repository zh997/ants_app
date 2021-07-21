<template>
	<view>
		<Navbar title="充币记录"/>
		<view class="record-page">
			<view class="record-item">
				<view class="record-item-row">
					<view class="record-item-label">
						充值数量：
					</view>
					<view class="record-item-value">
						800
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						充值时间：
					</view>
					<view class="record-item-value">
						2021-07-16 06:33
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						订单状态：
					</view>
					<view class="record-item-value">
						成功
					</view>
				</view>
			</view>
			<view class="record-item">
				<view class="record-item-row">
					<view class="record-item-label">
						充值数量：
					</view>
					<view class="record-item-value">
						800
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						充值时间：
					</view>
					<view class="record-item-value">
						2021-07-16 06:33
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						订单状态：
					</view>
					<view class="record-item-value">
						成功
					</view>
				</view>
			</view>
			<view class="record-item">
				<view class="record-item-row">
					<view class="record-item-label">
						充值数量：
					</view>
					<view class="record-item-value">
						800
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						充值时间：
					</view>
					<view class="record-item-value">
						2021-07-16 06:33
					</view>
				</view>
				<view class="record-item-row">
					<view class="record-item-label">
						订单状态：
					</view>
					<view class="record-item-value">
						成功
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
		components:{
			Navbar
		},
		data() {
			return {
				
			};
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
