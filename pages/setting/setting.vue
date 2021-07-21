<template>
	<view>
		<Navbar title="设置"/>
		<view class="setting-page">
			<view class="setting-items">
				<view class="setting-item" @click="onRouter('/pages/accounts_security/accounts_security')">
					<view class="setting-item-label">
						<image src="../../static/app_icon_27@2x.png" class="setting-item-icon" mode=""></image>
						<text>账户与安全</text>
					</view>
					<image src="../../static/icon_right_arrow@2x.png" class="arrow-icon" mode=""></image>
				</view>
				<view class="setting-item">
					<view class="setting-item-label">
						<image src="../../static/app_icon_28@2x.png" class="setting-item-icon" mode=""></image>
						<text>切换语言</text>
					</view>
					<image src="../../static/icon_right_arrow@2x.png" class="arrow-icon" mode=""></image>
				</view>
				<view class="setting-item">
					<view class="setting-item-label">
						<image src="../../static/app_icon_37@2x.png" class="setting-item-icon" mode=""></image>
						<text>版本更新</text>
					</view>
					<image src="../../static/icon_right_arrow@2x.png" class="arrow-icon" mode=""></image>
				</view>
				<view class="setting-item" @click="onShowModal">
					<view class="setting-item-label">
						<image src="../../static/app_icon_38@2x.png" class="setting-item-icon" mode=""></image>
						<text>退出登录</text>
					</view>
					<!-- <image src="../../static/icon_right_arrow@2x.png" class="arrow-icon" mode=""></image> -->
				</view>
			</view>
		</view>
		<u-modal v-model="show" :content="content" @confirm="onLoginout" show-cancel-button></u-modal>
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
				show: false,
				content: '确定退出当前账号吗？'
			};
		},
		methods:{
			onShowModal(){
				this.show = true;
			},
			onCancel(){
				this.show = false;
			},
			onLoginout(){
				uni.removeStorageSync('authtoken');
				uni.reLaunch({
					url: '/pages/login/login'
				})
			},
			onRouter(path){
				uni.navigateTo({
					animationType: "pop-in",
					url: path
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.setting-page{
	padding: 33upx;
	.setting-items{
		background-color:@color-0F1B65;
		padding:0 20upx;
		border-radius: 20upx;
	}
	.setting-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 45upx 0;
		border-bottom: 1px solid #0D144E;
		&-label{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28upx;
			color: #fff;
		}
		&-icon{
			margin-right: 49upx;
			width: 34upx;
			height: 37upx;
		}
		.arrow-icon{
			width: 25upx;
			height: 42upx;
		}
	}
}
</style>
