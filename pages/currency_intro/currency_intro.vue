<template>
	<view>
		<Navbar title="币种介绍"/>
		<view class="currency-intro-page">
			<view class="currency-intro-title">
				{{walletCoinDetail.title}}
			</view>
			<view class="currency-intro-abstract">
				{{walletCoinDetail.abstract}}
			</view>
			<image :src="walletCoinDetail.cover" v-if="walletCoinDetail.cover" class="currency-intro-cover" mode=""></image>
			<mpHtml :content="walletCoinDetail.content" class="mphtml"/>
		</view>
		
		<view class="page-bg"></view>
	</view>
</template>

<script>
	import mpHtml from '@/components/mp-html/mp-html'
	import Navbar from '@/components/navbar.vue';
	import * as services from '@/ants/services/index.js';
	export default {
		components:{
			Navbar,
			mpHtml
		},
		data() {
			return {
				walletCoinDetail: {}
			};
		},
		async mounted() {
			uni.showLoading();
			const walletCoinDetail = await services.walletCoinDetail();
			uni.hideLoading();
			this.walletCoinDetail = walletCoinDetail;
		},
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.currency-intro-page{
	padding: 30upx;
	color: #fff;
	.currency-intro-title{
		font-size: 36upx;
		margin-bottom: 20upx;
	}
	.currency-intro-cover{
		width: 100%;
		height: 400upx;
		margin: 20upx 0;
	}
	
}

</style>
