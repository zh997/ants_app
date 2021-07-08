<template>
	<view>
		<Navbar title="合约公募"/>
		<view class="public-offering-page">
			<view class="public-offering-info">
				<view class="public-offering-info-item">
					<view class="public-offering-info-title">
						代币合约
					</view>
					<view class="public-offering-info-link">
						dsgahahkajhoiahjfoiahogiaitsdgaghasuidga
					</view>
				</view>
				<view class="public-offering-info-item">
					<view class="public-offering-info-title">
						上线时间
					</view>
					<view class="public-offering-info-link">
						2021.06.30
					</view>
				</view>
			</view>
		    <view class="public-offering-items">
		    	<view class="public-offering-item">
		    		<view class="public-offering-item-title">
		    			目标笔数(笔)
		    		</view>
		    		<view class="public-offering-item-count green-color">
		    			1000
		    		</view>
		    	</view>
		    	<view class="public-offering-item">
		    		<view class="public-offering-item-title">
		    			已募(USDC)
		    		</view>
		    		<view class="public-offering-item-count green-color">
		    			61388.000
		    		</view>
		    	</view>
		    </view>
			<view class="public-offering-form">
				<view class="public-offering-form-title">
					注入<text class="public-offering-blance">余额：10300.00(USDC)</text>
				</view>
				<view class="public-offering-form-item">
					<input type="text" value="" placeholder="请输入数量" class="public-offering-form-item-input" placeholder-class="placeholder-class" />
				    <text class="public-offering-form-item-sufix">USDT</text>
				</view>
			</view>
			<view class="primary-btn" @click="onRouter('/pages/public_offering_success/public_offering_success')">
				开始公募
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
		},
		methods:{
			onRouter(url){
				uni.navigateTo({
					animationType:"pop-in",
					url: url
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.public-offering-page{
	padding: 30upx;
	.public-offering-info{
		background-color: @color-0F1B65;
		border-radius: 20upx;
		height: 322upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		flex-direction: column;
		padding: 32upx;
		box-sizing:border-box;
		margin-bottom: 30upx;
		&-title{
			font-size: 22upx;
			color: @color-91BBE3;
			margin-bottom: 34upx;
		}
		&-link{
			font-size: 22upx;
			color: #fff;
		}
	}
	.public-offering-items{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		.public-offering-item{
			width: 326upx;
			height: 150upx;
			background-color: @color-0F1B65;
			border-radius: 20upx;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			padding: 0 49upx;
			box-sizing: border-box;
			margin-bottom: 29upx;
			&-title{
				font-size: 18upx;
				color: #fff;
				margin-bottom: 28upx;
			}
			&-count{
				font-size: 24upx;
			}
		}
	}
	.public-offering-form{
		background-color: @color-0F1B65;
		border-radius: 20upx;
		height: 289upx;
		padding: 32upx;
		box-sizing:border-box;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		margin-bottom: 72upx;
		box-sizing: border-box;
		&-title{
			font-size: 24upx;
			color: #fff;
			margin-bottom: 35upx;
		}
		.public-offering-blance{
			font-size: 22upx;
			color: @color-91BBE3;
		}
		&-item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 79upx;
			background-color: @color-2133B4;
			width: 100%;
			border-radius: 20upx;
			padding: 0 33upx;
			box-sizing: border-box;
			color: #fff;
			&-input{
				color: #fff;
			    font-size: 28upx;
				flex: 1;
			}
		}
		.placeholder-class{
			color: @color-0F1B65;
		}
	}
}
</style>
