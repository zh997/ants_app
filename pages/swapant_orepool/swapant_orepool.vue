<template>
	<view>
		<Navbar title="SWAPANT矿池"/>
		<view class="swapant-orepool">
			<view class="property-info">
				<image src="../../static/property_banner@2x.png" class="property-info-bg" mode=""></image>
			    <view class="property-info-content">
			    	<view class="property-info-label">
			    		矿池总流动性
			    	</view>
			    	<view class="property-info-value">
			    		0 SWAPANT
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
	.swapant-orepool{
		padding: 20upx 35upx;
		.property-info{
			height: 150upx;
			border-radius: 10upx;
			overflow: hidden;
			position: relative;
			margin-bottom: 29upx;
			&-bg{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 1;
			}
			&-content{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 2;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				padding-left: 48upx;
				flex-direction: column;
			}
			&-label{
				font-size: 18upx;
				color: @color-10184F;
			}
			&-value{
				font-size: 38.9upx;
				color: @color-10184F;
				font-weight: bold;
				margin-top: 20upx;
			}
		}
	}
</style>
