<template>
	<view>
		<Navbar title="账户安全"/>
		<view class="setting-page">
			<view class="setting-item marginBottom" @click="onRouter('/pages/accounts_security/accounts_security')">
				<view class="setting-item-label">
					<!-- <image src="../../static/app_icon_27@2x.png" class="setting-item-icon" mode=""></image> -->
					<text>邮箱验证</text>
				</view>
				<text class="setting-item-value">8888888@qq.com</text>
			</view>
			<view class="setting-items">
				<view class="setting-item" @click="onRouter('/pages/update_pwd/update_pwd?type=1')">
					<view class="setting-item-label">
						<!-- <image src="../../static/app_icon_27@2x.png" class="setting-item-icon" mode=""></image> -->
						<text>修改登录密码</text>
					</view>
					<image src="../../static/icon_right_arrow@2x.png" class="arrow-icon" mode=""></image>
				</view>
				<view class="setting-item" @click="onRouter('/pages/update_pwd/update_pwd?type=2')">
					<view class="setting-item-label">
						<!-- <image src="../../static/app_icon_28@2x.png" class="setting-item-icon" mode=""></image> -->
						<text>修改交易密码</text>
					</view>
					<image src="../../static/icon_right_arrow@2x.png" class="arrow-icon" mode=""></image>
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
	.marginBottom{
		margin-bottom: 20upx;
		border-radius: 20upx;
	}
	.setting-items{
		background-color:@color-0F1B65;
		border-radius: 20upx;
		overflow: hidden;
	}
	.setting-item{
		background-color:@color-0F1B65;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 45upx;
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
		&-value{
			font-size: 24upx;
			color: #85ABF4;
		}
	}
}
</style>
