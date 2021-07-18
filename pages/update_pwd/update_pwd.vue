<template>
	<view>
		<Navbar :title="title"/>
		<view class="update-pwd-page">
			<view class="login-form-wrap">
				<view class="exchange-form-label">当前使用的密码</view>
				<view class="exchange-input-wrap">
					<view class="exchange-input-label">
						<image src="../../static/login/user_icon@2x.png" class="exchange-input-label-icon" mode=""></image>
					    <view class="exchange-input-label-line"></view>
					</view>
					<input type="text" v-model="oldpwd" placeholder="请输入旧密码" class="exchange-input" placeholder-class="exchange-input-placeholder"/>
				    <!-- <text class="exchange-input-sufix">全部</text> -->
				</view>
			</view>
			<view class="login-form-wrap">
				<view class="exchange-form-label">新密码(6-30位)</view>
				<view class="exchange-input-wrap">
					<view class="exchange-input-label">
						<image src="../../static/login/pwd_icon@2x.png" class="exchange-input-label-icon" mode=""></image>
					    <view class="exchange-input-label-line"></view>
					</view>
					<input type="password" v-model="newpwd" placeholder="请输入新密码" class="exchange-input" placeholder-class="exchange-input-placeholder"/>
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
					<input type="password" v-model="newpwd2" placeholder="确认新密码" class="exchange-input" placeholder-class="exchange-input-placeholder"/>
				    <!-- <text class="exchange-input-sufix">全部</text> -->
				</view>
				
			</view>
			<view class="login-bottom-wrap">
				<view class="primary-btn marginBottom" @click="onSubmit">
                  确认
				</view>
			</view>
		</view>
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
				type: '',
				title: '',
				oldpwd: '',
				newpwd: '',
				newpwd2: ''
			};
		},
		onLoad(query) {
			this.type = query.type;
			if (query.type === '1') {
				this.title = '修改登录密码';
			} else if(query.type === '2') {
				this.title = '修改交易密码';
			}
		},
		methods:{
			async onSubmit(){
				const data = {
					oldpwd: this.oldpwd,
					newpwd: this.newpwd,
					newpwd2: this.newpwd2
				}
				await services.updatePwd(data, this.type);
				uni.navigateBack({
					delta: 1,
					animationType: "slide-out-right",
					success: () => {
						uni.showToast({
							icon: 'success',
							title: '修改成功'
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('@/styles/theme_vars.less');
.update-pwd-page{
	padding: 35upx;
	.login-form-wrap{
		// padding: 0 36upx;
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
}
</style>
