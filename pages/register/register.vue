<template>
	<view class="register-page">
		<view class="status_bar"></view>
	    <view class="register-header">
	    	<image src="../../static/LOGO3@2x.png" class="register-header-logo" mode=""></image>
	    	<!-- <text class="register-header-text">Swapant</text> -->
	    </view>
		<view class="register-title">
			<view class="register-title-text">
				Swapant
			</view>
			<view class="register-title-tip">
				挖矿、nft、defi 投顾乐园
			</view>
			<view class="register-title-tip">
				一站式流动性挖矿手机APP
			</view>
		</view>
		<view class="register-form">
			<view class="register-form-item">
				<input type="text"
				    v-model="email"
					placeholder="请填写邮箱地址" 
					placeholder-class="placeholder-class" 
					class="register-form-item-input" 
				/>
				<text class="register-form-item-sufix"></text>
			</view>
			<view class="register-form-item">
				<input type="text" v-model="password"
					placeholder="请填写登陆密码" 
					placeholder-class="placeholder-class" 
					class="register-form-item-input" 
				/>
				<text class="register-form-item-sufix"></text>
			</view>
			<view class="register-form-item">
				<input type="text" v-model="password_confirm"
					placeholder="请确认登陆密码" 
					placeholder-class="placeholder-class" 
					class="register-form-item-input" 
				/>
				<text class="register-form-item-sufix"></text>
			</view>
			<view class="register-form-item">
				<input type="text" v-model="code"
					placeholder="请填写邮箱验证码" 
					placeholder-class="placeholder-class" 
					class="register-form-item-input" 
				/>
				<text class="register-form-item-sufix" v-if="!isSendCode" @click="onGetCode">发送验证码</text>
				<text v-else class="register-form-item-sufix">{{secends}}s</text>
			</view>
			<view class="register-form-item">
				<input type="text" v-model="ucode"
					placeholder="请输入邀请码" 
					placeholder-class="placeholder-class" 
					class="register-form-item-input" 
				/>
				<text class="register-form-item-sufix">邀请码</text>
			</view>
			<view class="primary-btn marginBottom" @click="onSubmit">
				注册
			</view>
			<view class="login-tips">
			  <text>已有账号？<text class="green-color" @click="onLogin">立即登录</text></text>
			</view>
		</view>
		<image src="../../static/login/register_bg@2x.png" class="page-bg" mode=""></image>
	</view>
</template>

<script>
	import * as services from '@/ants/services/index.js';
	export default {
		data() {
			return {
				email: '',
				password: '',
			    password_confirm: '',
				code: '',
				ucode: '',
				isSendCode: false,
				secends: 60,
				timer: null,
			};
		},
		onLoad(options) {
			console.log(options);
			if (options.ucode) this.ucode = options.ucode;
		},
		methods: {
			onLogin(){
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			async onSubmit() {
				const data = {
					email: this.email,
					password: this.password,
					password_confirm: this.password_confirm,
					code: this.code,
					ucode: this.ucode,
				}
				uni.showLoading()
				const res = await services.regster(data);
				uni.hideLoading()
			},
			async onGetCode() {
				if (!this.email || !this.email.trim()) {
					return uni.showModal({
						content: '请输入邮箱地址',
						showCancel: false
					})
				}
				uni.showLoading({
					title: '正在发送...'
				})
				if (!this.$hasRequest) {
					const response= await services.sendCode({email: this.email});
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
.register-page{
	padding-bottom: 100upx;
	.register-header{
		padding: 54upx 40upx 50upx 40upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		&-logo{
			width: 200upx;
			height: 64upx;
		}
		&-text{
			font-size: 37.81upx;
			color: #ffffff;
			margin-left: 17upx;
			font-weight: bold;
		}
	}
	.register-title{
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		&-text{
			font-size: 97.93upx;
			margin-bottom: 27upx;
		}
		&-tip{
			font-size: 28upx;
			margin-bottom: 10upx;
		}
	}
	.register-form{
		padding: 0 34upx;
		margin-top: 50upx;
		&-item{
			border: 1px solid @color-1EF0A9;
			height: 109upx;
			border-radius: 109upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 50upx;
			margin-bottom: 61upx;
			&-input{
				height: 109upx;
				flex: 1;
				color: #fff;
				font-size: 30.2upx;
			}
			&-sufix{
				font-size: 30.2upx;
				color: @color-1EF0A9;
			}
		}
		.placeholder-class{
			font-size: 30.2upx;
			color: @color-2133B4;
		}
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
