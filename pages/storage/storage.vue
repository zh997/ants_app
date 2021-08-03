<template>
	<view>
		<Navbar title="存储"/>
		<view class="storage-page">
			<view class="storage-title">
				swapait-USDT
			</view>
			<view class="storage-form">
				<view class="storage-form-item">
					<!-- <view class="storage-form-item-label">提币数量</view> -->
					<view class="storage-form-item-view">
						<input type="number" v-model="swa_num" class="storage-form-item-input" placeholder="请输入存储swapait数量" placeholder-class="placeholder-class"  />
					</view>
				</view>
				<view class="storage-form-rowitem">
					<view class="storage-form-item-label">
						swapait 余额
					</view>
					<view class="storage-form-item-label">
					   {{poolPledgeView.usdt_num}}
					</view>
				</view>
			</view>
			<!-- <view class="circle-btn">
				+
			</view> -->
			<view class="storage-form">
				<view class="storage-form-item">
					<!-- <view class="storage-form-item-label">提币数量</view> -->
					<view class="storage-form-item-view">
						<input type="number" v-model="usdt_num" class="storage-form-item-input" placeholder="请输入存储USDT数量" placeholder-class="placeholder-class"  />
					</view>
				</view>
				<view class="storage-form-rowitem">
					<view class="storage-form-item-label">
						USDT 余额
					</view>
					<view class="storage-form-item-label">
					    {{poolPledgeView.usdt_num}}
					</view>
				</view>
			</view>
			<view class="primary-btn" @click="onSubmit">
				存储
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
				poolPledgeView: {},
				usdt_num: '',
				swa_num: ''
			};
		},
		async onLoad() {
			uni.showLoading();
			const res = await services.poolPledgeView();
			uni.hideLoading();
			this.poolPledgeView = res;
		},
		methods:{
			async onSubmit() {
				if (!this.swa_num){
					return uni.showToast({
						icon: 'none',
						title: '请输入存储swapait数量'
					})
				}
				if (!this.usdt_num){
					return uni.showToast({
						icon: 'none',
						title: '请输入存储USDT数量'
					})
				}
				if (!/^[0-9]*[1-9][0-9]*$/.test(this.swa_num) || !/^[0-9]*[1-9][0-9]*$/.test(this.usdt_num)) {
					return uni.showToast({
						icon: 'none',
						title: '请入大于0的正整数'
					})
				}
				showLoading({
				  title: '存储中'	
				})
				const res = await services.poolPledge({
					swa_num: this.swa_num,
					swa_num: this.swa_num
				});
				uni.showToast({
					icon: 'success',
					title: '存储成功'
				})
			}
		}
	}
</script>

<style lang="less">
@import url('@/styles/theme_vars.less');
	.storage-page{
		padding: 27upx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.storage-title{
			font-size: 30upx;
			color: #fff;
			// margin-bottom: 37upx;
		}
		.storage-form{
			width: 100%;
			border-radius: 20upx;
			background-color: @color-0F1B65;
			height: 289upx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 43upx;
			box-sizing: border-box;
			margin: 57upx 0;
		}
		.storage-form-item{
				// margin-bottom: 50upx;
				width: 100%;
				
				&-label{
					font-size: 18upx;
					margin-bottom: 21upx;
					color: @color-91BBE3;
				}
			    &-view{
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color:@color-212F98;
					height: 82upx;
					border-radius: 20upx;
					padding: 0 56upx 0 30upx;
				}	
				&-input{
					font-size: 30.55upx;
					color: #fff;
					flex: 1;
				}
				.placeholder-class{
					font-size: 30.55upx;
					color: @color-6376FF;
				}
				&-arrow{
					width: 42upx;
					height: 25upx;
				}
				&-sufix{
					font-size: 30.55upx;
					color: @color-1EF0A9;
				}
				
			}
	    .storage-form-rowitem{
			width: 95%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			font-size: 24upx;
			margin-top: 45upx;
		
		}
		.circle-btn{
			width: 86upx;
			height: 86upx;
			border-radius: 86upx;
			background-color: @color-0F1B65;
			color: #fff;
			font-size: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
		
		}
	}

</style>
