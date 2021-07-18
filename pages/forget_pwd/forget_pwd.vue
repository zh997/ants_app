<template>
	<view class="login-page">
		<view class="status_bar"></view>
		<view class="login-header">
			<image src="../../static/login/back_icon@2x.png" class="login-header-icon" @click="onBack" mode=""></image>
			<view class="login-header-title">忘记密码...</view>
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
				<input type="password" v-model="code" placeholder="请输入验证码" class="exchange-input" placeholder-class="exchange-input-placeholder"/>
				<text class="exchange-input-sufix" v-if="!isSendCode" @click="onGetCode">发送验证码</text>
				<text v-else class="exchange-input-sufix">{{secends}}s</text>
			</view>
			
		</view>
		<view class="login-form-wrap">
			<view class="exchange-form-label">新密码</view>
			<view class="exchange-input-wrap">
				<view class="exchange-input-label">
					<image src="../../static/login/pwd_icon@2x.png" class="exchange-input-label-icon" mode=""></image>
				    <view class="exchange-input-label-line"></view>
				</view>
				<input type="text" v-model="password" placeholder="请输入新密码" class="exchange-input" placeholder-class="exchange-input-placeholder"/>
			    <!-- <text class="exchange-input-sufix">全部</text> -->
			</view>
		</view>
		<view class="login-form-wrap">
			<view class="exchange-form-label">确认新密码</view>
			<view class="exchange-input-wrap">
				<view class="exchange-input-label">
					<image src="../../static/login/pwd_icon@2x.png" class="exchange-input-label-icon" mode=""></image>
				    <view class="exchange-input-label-line"></view>
				</view>
				<input type="text" v-model="pwdconfirm" placeholder="确认新密码" class="exchange-input" placeholder-class="exchange-input-placeholder"/>
			    <!-- <text class="exchange-input-sufix">全部</text> -->
			</view>
		</view>
		<view class="login-bottom-wrap">
			
			<view class="primary-btn marginBottom" @click="onSubmit">
				找回
			</view>
			<view class="login-tips">
			  <text>还没账号？<text class="green-color" @click="onRegister">立即注册</text></text>
			  <text class="green-color" @click="onBack">返回登陆</text>
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
				code: '',
				password: '',
				pwdconfirm: '',
				isSendCode: false,
				secends: 60,
				timer: null,
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
					code: this.code,
					pwdconfirm: this.pwdconfirm,
					password: this.password,
				}
				uni.showLoading()
				const res = await services.forgetPwd(data);
				uni.showToast({
					icon: 'success',
					title: '修改成功，请重新登录',
					success: () => {
						setTimeout(() => {
							uni.reLaunch({
								url: '/pages/login/login'
							})
						}, 1500)
					}
				})
			},
			async onGetCode() {
				if (!this.account || !this.account.trim()) {
					return uni.showModal({
						content: '请输入邮箱地址',
						showCancel: false
					})
				}
				uni.showLoading({
					title: '正在发送...'
				})
				if (!this.$hasRequest) {
					const response= await services.sendCode({email: this.account});
					this.onCoundDowd();
					this.isSendCode = true;
					uni.showToast({
						icon: 'success',
						title: '发送成功'
					})
				}
			},
			onCoundDowd() {
				let secends = this.secends;
				this.timer && clearInterval(this.timer);
			   	this.timer = setInterval(() => {
					if (secends <= 0 ) {
						this.isSendCode = false;
						this.secends = 60;
						return;
					}
					this.secends = secends = secends - 1;
				}, 1000)
			},
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.login-page{
	.login-header{
		padding: 25upx 46upx 70upx 36upx;
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
			margin-bottom: 50upx;
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
			justify-content: space-between;
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
