<template>
	<view  class="my-page safearea">
		<view class="status_bar"></view>
		<view class="navbar-wrap">
			<view class="navbar-wrap-title">
				我的
			</view>
			<view class="navbar-wrap-sufix">
				<text @click="$onRouter('')">签到</text>
				<image src="../../static/scan_icon@2x.png" @click="onScanCode" class="navbar-wrap-icon" mode=""></image>
			    <image src="../../static/qrcode_icon@2x.png" class="navbar-wrap-icon" @click="$onRouter('/pages/share/share')" mode=""></image>
			</view>
		</view>
		<view class="my-header">
			<image :src="mineInfo.head_img"  class="avatar-icon" mode=""></image>
		    <view class="user-info" v-if="mineInfo.account">
		    	<view class="user-info-nickname">
		    		{{mineInfo.account || '--'}}
		    	</view>
				<view class="user-info-uid">
					<text class="user-info-uid-label">UID</text>
					<text>	{{mineInfo.uid || '--'}}</text>
					<image src="../../static/copy_btn@2x.png" class="copy-btn-icon" @click="$copy(mineInfo.uid)" mode=""></image>
				</view>
		    </view>
			<view class="no-login" v-else @click="$onRouter('/pages/login/login')">
				登录/注册
			</view>
		</view>
		
		<view class="my-counts">
			<view class="my-counts-item">
				<view class="my-counts-item-value">
					0
				</view>
				<view class="my-counts-item-label">
					关注
				</view>
			</view>
			<view class="my-counts-item">
				<view class="my-counts-item-value">
					0
				</view>
				<view class="my-counts-item-label">
					粉丝
				</view>
			</view>
			<view class="my-counts-item">
				<view class="my-counts-item-value">
					0
				</view>
				<view class="my-counts-item-label">
					作品
				</view>
			</view>
			<view class="my-counts-item">
				<view class="my-counts-item-value">
					0
				</view>
				<view class="my-counts-item-label">
					圈子
				</view>
			</view>
		</view>
		<view class="upgrade-wrap">
			<view class="upgrade-wrap-item" @click="$onRouter('')">
				<image src="../../static/app_icon_35@2x.png" class="upgrade-wrap-item-icon" mode=""></image>
				<view class="upgrade-wrap-item-text">了解VIP等级权益</view>
			</view>
			<view class="upgrade-wrap-item-line"></view>
			<view class="upgrade-wrap-item" @click="$onRouter('/pages/share/share')">
				<image src="../../static/app_icon_35@2x.png" class="upgrade-wrap-item-icon" mode=""></image>
				<view class="upgrade-wrap-item-text">邀请好友</view>
			</view>
		</view>
		<view class="my-entry">
			<view class="my-entry-item" @click="$onRouter('')">
				<image src="../../static/my/my_icon_1@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">我的持仓</text>
			</view>
			<view class="my-entry-item" @click="$onRouter('')">
				<image src="../../static/my/my_icon_2@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">挖矿预告</text>
			</view>
			<view class="my-entry-item" @click="$onRouter('')">
				<image src="../../static/my/my_icon_3@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">红包</text>
			</view>
			<view class="my-entry-item" @click="$onRouter('')">
				<image src="../../static/my/my_icon_4@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">优惠券</text>
			</view>
			<view class="my-entry-item" @click="$onRouter('')">
				<image src="../../static/my/my_icon_5@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">社区大学</text>
			</view>
			<view class="my-entry-item" @click="$onRouter('')">
				<image src="../../static/my/my_icon_6@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">消息</text>
			</view>
			<view class="my-entry-item" @click="$onRouter('')">
				<image src="../../static/my/my_icon_7@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">帮助中心</text>
			</view>
			<view class="my-entry-item" @click="$onRouter('/pages/setting/setting')">
				<image src="../../static/my/my_icon_8@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">设置</text>
			</view>
			<view class="my-entry-item" @click="$onRouter('')">
				<image src="../../static/my/my_icon_9@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">在线客服</text>
			</view>
			<view class="my-entry-item" @click="$onRouter('')">
				<image src="../../static/my/my_icon_10@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">工单</text>
			</view>
			<view class="my-entry-item" @click="$onRouter('')">
				<image src="../../static/my/my_icon_11@2x.png" class="my-entry-item-icon" mode=""></image>
				<text class="my-entry-item-text">合伙人</text>
			</view>
		</view>
	</view>
</template>

<script>
	import * as services from '@/ants/services/index.js';
	export default {
		data() {
			return {
				mineInfo: {}
			};
		},
		async mounted() {
			uni.showLoading();
			const res = await services.mineIndex();
			uni.hideLoading();
			this.mineInfo = res;
		},
		methods:{
			onScanCode() {
				// 允许从相机和相册扫码
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						if (res.result.indexOf('ucode') !== -1) {
							uni.navigateTo({
								animationType: "pop-in",
								url: res.result.split('#')[1]
							})
						}
				    }
				});
			}
		}
	}
</script>

<style lang="less">
		@import url('@/styles/theme_vars.less');
.my-page{
	padding: 25upx;
	.my-header{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 51upx 0;
		.avatar-icon{
			width: 69upx;
			height: 69upx;
			border-radius: 69upx;
			overflow: hidden;
			background-color: #fff;
			margin-right: 52upx;
		}
		.user-info{
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-direction: column;
			height: 69upx;
			color: #fff;
			&-nickname{
				font-size: 28upx;
			}
			&-uid{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 22upx;
				&-label{
					color: @color-8FB9E1;
					margin-right: 20upx;
				}
			}
			.copy-btn-icon{
				width: 24upx;
				height: 26upx;
				margin-left: 20upx;
			}
		}
	}
	.my-counts{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 50upx;
		&-item{
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 25%;
			
			&-value{
				font-size: 40upx;
				color: #fff;
				font-weight: bold;
			}
			&-label{
				font-size: 24upx;
				color: @color-6376FF;
				margin-top: 33upx;
			}
		}
	}
	.upgrade-wrap{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: @primary-color;
		height: 84upx;
		padding: 0 50upx;
		border-radius: 84upx;
		&-item{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 49%;
			&-icon{
				width: 35upx;
				height: 35upx;
				margin-right: 20upx;
			}
			&-text{
				font-size: 22.6upx;
				font-weight: bold;
				color: #fff;
			}
			&-line{
				width: 2px;
				height: 40upx;
				background-color: @color-91BBE3;
			}
		}
	}
	.my-entry{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background-color: @primary-color;
		flex-wrap: wrap;
		margin-top: 35upx;
		border-radius: 10upx;
		&-item{
			width: 25%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			height: 180upx;
			&-icon{
				width: 39upx;
				height: 39upx;
				margin-bottom: 27upx;
			}
			&-text{
				font-size: 28upx;
				color: #fff;
				font-weight: bold;
			}
		}
	}
	.no-login{
		font-size: 35upx;
		color: #fff;
	}
}
</style>
