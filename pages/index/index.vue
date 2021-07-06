<template>
	<view class="index-page-content safearea">
		<view class="status_bar"></view>
	 	<view class="index-header">
	 		<image src="../../static/LOGO3@2x.png" class="index-header-logo" mode=""></image>
			<text class="index-header-text">Swapant</text>
	 	</view>
		<swiper class="swiper-wrap" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item class="swiper-item">
				<image src="../../static/banner_1@2x.png" class="banner-item" mode=""></image>
			</swiper-item>
			<swiper-item class="swiper-item">
				<image src="../../static/banner_1@2x.png" class="banner-item" mode=""></image>
			</swiper-item>
			<swiper-item class="swiper-item">
				<image src="../../static/banner_1@2x.png" class="banner-item" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="notify-wrap">
			<image src="../../static/app_icon_1@2x.png" class="notify-wrap-icon" mode=""></image>
			<view class="notify-wrap-line"></view>
			<view class="notify-wrap-text">热烈上线</u-notice-bar></view>
		</view>
		<view class="entry-grid">
			<view class="entry-grid-item">
				<image src="../../static/app_icon_6@2x.png" class="entry-grid-item-icon" mode=""></image>
			    <text class="entry-grid-item-text">挖矿</text>
			</view>
			<view class="entry-grid-item">
				<image src="../../static/app_icon_7@2x.png" class="entry-grid-item-icon" mode=""></image>
			    <text class="entry-grid-item-text">NFT</text>
			</view>
			<view class="entry-grid-item">
				<image src="../../static/app_icon_9@2x.png" class="entry-grid-item-icon" mode=""></image>
			    <text class="entry-grid-item-text">公算</text>
			</view>
			<view class="entry-grid-item">
				<image src="../../static/app_icon_5@2x.png" class="entry-grid-item-icon" mode=""></image>
			    <text class="entry-grid-item-text">邀请好友</text>
			</view>
			<view class="entry-grid-item">
				<image src="../../static/app_icon_8@2x.png" class="entry-grid-item-icon" mode=""></image>
			    <text class="entry-grid-item-text">更多</text>
			</view>
		</view>
		<view class="irregular-block">
			<view class="irregular-block-left">
				<image src="../../static/app_icon_4@2x.png" class="block-icon" mode=""></image>
				<text class="block-text">算力超市</text>
			</view>
			<view class="irregular-block-center">
				<view class="irregular-block-center-item">
					<image src="../../static/app_icon_3@2x.png" class="block-icon" mode=""></image>
					<text class="block-text">场外交易</text>
				</view>
				<view class="irregular-block-center-item">
					<image src="../../static/app_icon_2@2x.png" class="block-icon" mode=""></image>
					<text class="block-text">充币</text>
				</view>
			</view>
			<view class="irregular-block-right">
				<text class="block-text">看广告赢算力</text>
			</view>
		</view>
		<view class="main-title">
			<image src="../../static/radius_rect@2x.png" class="main-title-rect rote-rect" mode=""></image>
		    <text class="main-title-text">矿池</text>
			<image src="../../static/radius_rect@2x.png" class="main-title-rect" mode=""></image>
		</view>
		<view class="card-item">
			<view class="card-item-header">
				<view class="card-item-header-title">
					<image src="../../static/app_icon_10@2x.png" class="card-item-header-icon" mode=""></image>
				    <text class="card-item-header-title">空投矿池</text>
				</view>
				<view class="card-item-header-status">
					<view class="card-item-header-status-dot"></view>
				    <text class="card-item-header-status">运行中</text>
				</view>
			</view>
			<view class="card-item-label">
				<text class="card-item-label-text">日产出</text>
				<text class="card-item-label-text">最高年化收益率</text>
			</view>
			<view class="card-item-value">
				<text class="card-item-value-text"><text class="green-color">0.00</text>  SWAPANT</text>
				<text class="card-item-value-largetext green-color">188.18%</text>
			</view>
		</view>
		<view class="card-item">
			<view class="card-item-header">
				<view class="card-item-header-title">
					<image src="../../static/app_icon_13@2x.png" class="card-item-header-icon" mode=""></image>
				    <text class="card-item-header-title">流动性矿池</text>
				</view>
				<view class="card-item-header-status">
					<view class="card-item-header-status-dot"></view>
				    <text class="card-item-header-status">运行中</text>
				</view>
			</view>
			<view class="card-item-label">
				<text class="card-item-label-text">日产出</text>
				<text class="card-item-label-text">最高年化收益率</text>
			</view>
			<view class="card-item-value">
				<text class="card-item-value-text"><text class="green-color">0.00</text>  SWAPANT</text>
				<text class="card-item-value-largetext green-color">188.18%</text>
			</view>
		</view>
		<view class="card-item">
			<view class="card-item-header">
				<view class="card-item-header-title">
					<image src="../../static/app_icon_11@2x.png" class="card-item-header-icon" mode=""></image>
				    <text class="card-item-header-title">物理算力矿池</text>
				</view>
				<view class="card-item-header-status">
					<view class="card-item-header-status-dot"></view>
				    <text class="card-item-header-status">运行中</text>
				</view>
			</view>
			<view class="card-item-label">
				<text class="card-item-label-text">日产出</text>
				<text class="card-item-label-text">最高年化收益率</text>
			</view>
			<view class="card-item-value">
				<text class="card-item-value-text"><text class="green-color">0.00</text>  SWAPANT</text>
				<text class="card-item-value-largetext green-color">188.18%</text>
			</view>
		</view>
		<view class="card-item">
			<view class="card-item-header">
				<view class="card-item-header-title">
					<image src="../../static/app_icon_12@2x.png" class="card-item-header-icon" mode=""></image>
				    <text class="card-item-header-title">理财矿池</text>
				</view>
				<view class="card-item-header-status">
					<view class="card-item-header-status-dot"></view>
				    <text class="card-item-header-status">运行中</text>
				</view>
			</view>
			<view class="card-item-label">
				<text class="card-item-label-text">日产出</text>
				<text class="card-item-label-text">最高年化收益率</text>
			</view>
			<view class="card-item-value">
				<text class="card-item-value-text"><text class="green-color">0.00</text>  SWAPANT</text>
				<text class="card-item-value-largetext green-color">188.18%</text>
			</view>
		</view>
	 </view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				list: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				]
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
	.index-page-content{
		.index-header{
			padding: 25upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			&-logo{
				width: 49upx;
				height: 62upx;
			}
			&-text{
				font-size: 37.81upx;
				color: #ffffff;
				font-weight: bold;
				margin-left: 17upx;
			}
		}
		.swiper-wrap{
			.swiper-item{
				padding: 0 25upx;
				box-sizing: border-box;
				.banner-item{
					width: 100%;
					height: 100%;
				}
			}
		}
		.notify-wrap{
			display: flex;
			justify-content: flex-start;
            align-items: center;
			margin: 42upx 25upx 0 25upx;
			height: 76upx;
			padding: 0 25upx;
			background-color: @primary-color;
			border-radius: 10upx;
			&-line{
				width: 3upx;
				height: 42upx;
				background-color: #fff;
				margin: 0 32upx;
			}
			&-icon{
				width: 42upx;
				height: 38upx;
			}
			&-text{
				font-size: 24upx;
				color: #fff;
			}
		}
		.entry-grid{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 47upx 25upx;
			&-item{
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 20%;
				&-icon{
					width: 48upx;
					height: 48upx;
				}
				&-text{
					font-size: 24upx;
					color: #fff;
					margin-top: 21upx;
				}
			}
		}
		.irregular-block{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 25upx;
			.block-icon{
				width: 54upx;
				height: 54upx;
				margin-bottom: 35upx;
			}
			.block-text{
				font-size: 28upx;
				color: #fff;
			}
			&-left{
				width: 255upx;
				height: 315upx;
				background-color: @primary-color;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				border-radius: 10upx;
			}
			&-center{
				width: 272upx;
				height: 315upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-direction: column;
				&-item{
					background-color: @primary-color;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 272upx;
					height: 146upx;
					border-radius: 10upx;
					.block-icon{
						margin-bottom: 0;
						margin-right:35upx;
					}
				}
			}
			&-right{
				width: 128upx;
				height: 315upx;
				display: flex;
				justify-content: space-between;
				background-color: @primary-color;
				align-items: center;
				padding: 0 50upx;
				box-sizing: border-box;
				border-radius: 10upx;
			}
		}
		.main-title{
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 42upx 0;
			&-rect{
				width: 117upx;
				height: 13upx;
			}
			&-text{
				font-size: 34upx;
				color: #fff;
				margin: 0 30upx;
			}
			.rote-rect{
				transform: rotate(180deg);
			}
		}
		.card-item{
			margin: 0 25upx 25upx 25upx;
			background-color: @primary-color;
			border-radius: 10upx;
			padding: 40upx;
			box-sizing: border-box;
			&-header{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 52upx;
				&-title{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					font-size: 36upx;
					color: #fff;
				}
				&-icon{
					width: 57upx;
					height: 52upx;
					margin-right: 30upx;
					
				}
				&-status{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					font-size: 15.44upx;
					color: #fff;
					&-dot{
						width: 15upx;
						height: 15upx;
						background-color: @color-04FF00;
						border-radius: 15upx;
						margin-right: 10upx;
					}
					
					
				}
			}
		    &-label{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 35upx 0;
				&-text{
					font-size: 24upx;
					color: #fff;
				}
			}
			&-value{
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				
				&-text{
					font-size: 36upx;
					color: #fff;
					.green-color{
						margin-right: 10upx;
					}
				}
				&-largetext{
					font-size: 52upx;
				}
				
			}
		}
	}
</style>
