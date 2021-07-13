<template>
	<view>
		<Navbar title="量化基金"/>
		<view class="fund-page">
			<image src="../../static/fund_img@2x.png" class="fund-img" mode=""></image>
			<view class="fund-btn-wrap">
				<view class="fund-btn">
					已售罄
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
	.fund-page{
		.fund-img{
				width: 750upx;
			height: 2043.75upx;
		}
		.fund-btn-wrap{
			padding: 62upx 0;
		}
		.fund-btn{
			width: 594upx;
			height: 95upx;
			background-color: @color-8FB9E1;
			color: #000;
			border-radius: 95upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 30.2upx;
			margin:  0 auto;
		}
	}

</style>
