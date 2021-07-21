<template>
	<view>
		<Navbar :title="oper + title + '密码'"/>
		<view class="update-pwd-page">
			<view class="login-form-wrap">
				<view class="exchange-form-label">{{is_safe === 0 && type === 2 ? '登录密码' : '旧密码'}}</view>
				<view class="exchange-input-wrap">
					<view class="exchange-input-label">
						<image src="../../static/login/user_icon@2x.png" class="exchange-input-label-icon" mode=""></image>
					    <view class="exchange-input-label-line"></view>
					</view>
					<input type="password" v-model="oldpwd" :placeholder="is_safe === 0 && type === 2 ? '请输入登录密码' : '请输入旧'+ title +'密码' " class="exchange-input" placeholder-class="exchange-input-placeholder"/>
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
				type: 0,
				is_safe: 0,
				oper: '修改',
				title: '登录',
				oldpwd: '',
				newpwd: '',
				newpwd2: ''
			};
		},
		onLoad(query) {
			this.type = Number(query.type);
			this.is_safe = Number(query.is_safe);
			if (this.type === 2) {
				this.title = '交易';
			}
			if (this.type === 2 && this.is_safe === 0) {
				this.oper = '设置';
			}
		},
		methods:{
			async onSubmit(){
				const data = {
					oldpwd: this.oldpwd,
					newpwd: this.newpwd,
					newpwd2: this.newpwd2
				}
				uni.showLoading();
				await services.updatePwd(data, this.type);
				uni.showToast({
					icon: 'success',
					title: `${this.oper}成功`,
					success() {
						const timer = setTimeout(() => {
							uni.navigateBack({
								delta: 1,
								animationType: "slide-out-right",
								success: () => {
									clearTimeout(timer);
								}
							})
						}, 1500)
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
