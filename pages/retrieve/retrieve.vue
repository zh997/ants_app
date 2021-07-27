<template>
	<view>
		<Navbar title="取回"/>
		<view class="retrieve-page">
			<view class="retrieve-title">
				SWAPANT-USDT
			</view>
			<view class="retrieve-form">
				<view class="retrieve-form-item">
					<!-- <view class="retrieve-form-item-label">提币数量</view> -->
					<view class="retrieve-form-item-view">
						<input type="text" v-model="swa_num" class="retrieve-form-item-input" placeholder="请输入取回SWAPANT数量" placeholder-class="placeholder-class"  />
					</view>
				</view>
				<view class="retrieve-form-rowitem">
					<view class="retrieve-form-item-label">
						可取回 SWAPANT 
					</view>
					<view class="retrieve-form-item-label">
					   {{poolGetbackView.pledge_swa}}
					</view>
				</view>
			</view>
			<view class="retrieve-form">
				<view class="retrieve-form-item">
					<!-- <view class="retrieve-form-item-label">提币数量</view> -->
					<view class="retrieve-form-item-view">
						<input type="text" v-model="usdt_num" class="retrieve-form-item-input" placeholder="请输入取回USDT数量" placeholder-class="placeholder-class"  />
					</view>
				</view>
				<view class="retrieve-form-rowitem">
					<view class="retrieve-form-item-label">
						可取回 USDT 
					</view>
					<view class="retrieve-form-item-label">
					   {{poolGetbackView.pledge_usdt}}
					</view>
				</view>
			</view>
			<view class="primary-btn" @click="onSubmit">
				取回
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
				poolGetbackView: {},
				usdt_num: '',
				swa_num: ''
			};
		},
		async onLoad() {
			uni.showLoading();
			const res = await services.poolGetbackView();
			uni.hideLoading();
			this.poolGetbackView = res;
		},
		methods:{
			async onSubmit() {
				if (!this.swa_num){
					return uni.showToast({
						icon: 'none',
						title: '请输入取回SWAPANT数量'
					})
				}
				if (!this.usdt_num){
					return uni.showToast({
						icon: 'none',
						title: '请输入取回USDT数量'
					})
				}
				if (!/^[0-9]*[1-9][0-9]*$/.test(this.swa_num) || !/^[0-9]*[1-9][0-9]*$/.test(this.usdt_num)) {
					return uni.showToast({
						icon: 'none',
						title: '请入大于0的正整数'
					})
				}
				uni.showLoading({
				  title: '取回中'	
				})
				const res = await services.poolGetback({
					swa_num: this.swa_num,
					swa_num: this.swa_num
				});
				uni.showToast({
					icon: 'success',
					title: '取回成功'
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
	.retrieve-page{
		padding: 27upx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.retrieve-title{
			font-size: 30upx;
			color: #fff;
			margin-bottom: 37upx;
		}
		.retrieve-form{
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
			margin-bottom: 57upx;
		}
		.retrieve-form-item{
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
	    .retrieve-form-rowitem{
			width: 95%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			font-size: 24upx;
			margin-top: 45upx;
		}
	}

</style>
