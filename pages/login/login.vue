<template>
	<view class="login-page">
		<view class="status_bar"></view>
		<view class="login-header">
			<image src="../../static/login/back_icon@2x.png" class="login-header-icon" @click="onBack" mode=""></image>
			<view class="login-header-title">登录...</view>
			<view class="login-header-text">挖矿、nft、defi 投顾乐园，一站式流动性挖矿手机APP</view>
		</view>
		<view class="login-form-wrap">
			<view class="exchange-form-label">邮箱</view>
			<view class="exchange-input-wrap">
				<view class="exchange-input-label">
					<image src="../../static/login/user_icon@2x.png" class="exchange-input-label-icon" mode=""></image>
				    <view class="exchange-input-label-line"></view>
				</view>
				<input type="text" v-model="account" placeholder="请输入邮箱" class="exchange-input" placeholder-class="exchange-input-placeholder"/>
			    <!-- <text class="exchange-input-sufix">全部</text> -->
			</view>
		</view>
		<view class="login-form-wrap">
			<view class="exchange-form-label">密码</view>
			<view class="exchange-input-wrap">
				<view class="exchange-input-label">
					<image src="../../static/login/pwd_icon@2x.png" class="exchange-input-label-icon" mode=""></image>
				    <view class="exchange-input-label-line"></view>
				</view>
				<input type="text" v-model="password" placeholder="请输入密码" class="exchange-input" placeholder-class="exchange-input-placeholder"/>
			    <!-- <text class="exchange-input-sufix">全部</text> -->
			</view>
			
		</view>
		<view class="login-bottom-wrap">
			
			<view class="primary-btn marginBottom" @click="onSubmit">
				登录
			</view>
			<view class="primary-btn" @click="onRegister">
				注册
			</view>
			<view class="login-tips">
				丢失或忘记密码？<text class="green-color">找回密码</text>
			</view>
		</view>
		<image src="../../static/login/login_bg@2x.png" class="page-bg" mode=""></image>
	</view>
</template>

<script>
	import * as services from '@/ants/services/index.js';
	export default {
		data() {
			return {
				account: '',
				password: ''
			};
		},
		methods:{
			onBack(){
				uni.navigateBack({
					delta: 1
				})
			},
			onRegister(){
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			async onSubmit(){
				const data = {
					account: this.account,
					password: this.password,
				}
				uni.showLoading()
				const res = await services.login(data);
				uni.setStorageSync('authtoken', res.auth_token);
				uni.hideLoading()
				uni.reLaunch({
					url: '/pages/tabbar/tabbar'
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.login-page{
	.login-header{
		padding: 25upx 46upx 158upx 36upx;
		color: #fff;
		&-icon{
			width: 34upx;
			height: 58upx;
			margin-bottom: 63upx;
		}
		&-title{
			font-size: 50.84upx;
		}
		&-text{
			font-size: 24upx;
			margin-top: 37upx;
		}
	}
	
	.login-form-wrap{
		padding: 0 36upx;
		.exchange-form-label{
			font-size: 18upx;
			color: @color-91BBE3;
			margin-top: 0;
			margin-bottom: 18upx;
		}
		.exchange-input-wrap{
			padding: 0 25upx;
			background-color: @primary-color;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 97upx;
			border-radius: 10upx;
			.exchange-input-label{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				&-icon{
					width: 38upx;
					height: 38upx;
				}
				&-line{
				   width: 2upx;
				   background-color: @color-91BBE3;
				   height: 49upx;
				   margin: 0 20upx;
				}	
			}
			.exchange-input{
				flex: 1;
				height: 88upx;
				 color: #fff;
				&-sufix{
					font-size: 24upx;
					color: @color-1EF0A9;
				}
			}
			.exchange-input-placeholder{
				font-size: 30.55upx;
				color: @color-2133B4;
			}
		}
	}
	.login-bottom-wrap{
		padding: 36upx;
		.login-tips{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			font-size: 26upx;
			margin-top: 50upx;
		}
	}
	.marginBottom{
		margin-bottom: 30upx;
	}
}
</style>
