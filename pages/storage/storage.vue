<template>
	<view>
		<Navbar title="存储"/>
		<view class="storage-page">
			<view class="storage-title">
				SWAPANT-USDT
			</view>
			<view class="storage-form">
				<view class="storage-form-item">
					<!-- <view class="storage-form-item-label">提币数量</view> -->
					<view class="storage-form-item-view">
						<input type="text" value="" class="storage-form-item-input" placeholder="请输入存储SWAPANT数量" placeholder-class="placeholder-class"  />
					</view>
				</view>
				<view class="storage-form-rowitem">
					<view class="storage-form-item-label">
						SWAPANT 余额
					</view>
					<view class="storage-form-item-label">
					   0 
					</view>
				</view>
			</view>
			<view class="circle-btn">
				+
			</view>
			<view class="storage-form">
				<view class="storage-form-item">
					<!-- <view class="storage-form-item-label">提币数量</view> -->
					<view class="storage-form-item-view">
						<input type="text" value="" class="storage-form-item-input" placeholder="请输入存储USDT数量" placeholder-class="placeholder-class"  />
					</view>
				</view>
				<view class="storage-form-rowitem">
					<view class="storage-form-item-label">
						USDT 余额
					</view>
					<view class="storage-form-item-label">
					   0 
					</view>
				</view>
			</view>
			<view class="primary-btn">
				存储
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
