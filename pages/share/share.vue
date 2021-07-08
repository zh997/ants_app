<template>
	<view>
		<Navbar title="邀请好友"/>
		<view class="share-page">
			<view class="share-count-items">
				<view class="share-count-item">
					<image src="../../static/share/share_icon_2@2x.png" class="share-count-item-bg" mode=""></image>
				    <text class="share-count-item-title">直接邀请奖励</text>
					<text class="share-count-item-count green-color">0</text>
				</view>
				<view class="share-count-item">
					<image src="../../static/share/share_icon_4@2x.png" class="share-count-item-bg" mode=""></image>
				    <text class="share-count-item-title">间接邀请奖励</text>
					<text class="share-count-item-count green-color">0</text>
				</view>
				<view class="share-count-item">
					<image src="../../static/share/share_icon_5@2x.png" class="share-count-item-bg" mode=""></image>
				    <text class="share-count-item-title">累积邀请奖励</text>
					<text class="share-count-item-count green-color">0</text>
				</view>
				<view class="share-count-item">
					<image src="../../static/share/share_icon_1@2x.png" class="share-count-item-bg" mode=""></image>
				    <text class="share-count-item-title">团队人数</text>
					<text class="share-count-item-count green-color">0</text>
				</view>
				<view class="share-count-item">
					<image src="../../static/share/share_icon_3@2x.png" class="share-count-item-bg" mode=""></image>
				    <text class="share-count-item-title">直推人数</text>
					<text class="share-count-item-count green-color">0</text>
				</view>
				<view class="share-count-item">
					<image src="../../static/share/share_icon_6@2x.png" class="share-count-item-bg" mode=""></image>
				    <text class="share-count-item-title">邀请人记录</text>
					<text class="share-count-item-count green-color">0</text>
				</view>
			</view>
			<view class="share-code-container">
				<view class="share-code-info">
					<view class="share-code">SFGAm</view>
					<image src="../../static/share/share_copy@2x.png" class="share-copy-btn" mode=""></image>
				    <view class="share-code-btn" @click="onRouter('/pages/share_poster/share_poster')">
				    	<image src="../../static/share/share_btn@2x.png" class="share-code-btn-bg" mode=""></image>
				        <text class="share-code-btn-text">邀请海报</text>
					</view>
				</view>
				<view class="share-code-tips">
					新用户注册时填写您的邀请码并注册成功后即视为有效邀请。您将获得直接邀请人4%及间接邀请人1%的流动性矿池挖矿收益作为邀请奖励。发放计划以白皮书为准。</view>
			</view>
		</view>
		<image src="../../static/share/share_page_bg@2x.png" class="page-bg" mode=""></image>
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
					animationType: "pop-in",
					url: url
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.share-page{
		padding: 35upx;
	.share-count-items{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		.share-count-item{
			width: 217upx;
			height: 264upx;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin-bottom: 49upx;
            &-bg{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: -1;
			}
			&-title{
				font-size: 18upx;
				color: #fff;
				margin-bottom: 140upx;
			}
			&-count{
				font-size: 24upx;
			}
		}
	}
	.share-code-container{
		background-color: #000;
		border-radius: 50upx;
		height: 354upx;
		.share-code-info{
			background-color: @color-1EF0A9;
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 175upx;
			border-radius: 50upx;
			.share-code{
				font-size: 70.24upx;
				color: @color-0F1E50;
			}
			.share-copy-btn{
				width: 41upx;
				height: 47upx;
			}
			.share-code-btn{
				width: 114upx;
				height: 114upx;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				&-bg{
					position: absolute;
					top:0;
					left: 0;
					width: 100%;
					height: 100%;
				}
				&-text{
					font-size: 24upx;
					color: #fff;
					position: relative;
					z-index: 10;
					display: inline-block;
					width: 60upx;
				}
			}
		}
		.share-code-tips{
			padding: 20upx;
			color: #fff;
			font-size: 24upx;
		}
	}
}
</style>
