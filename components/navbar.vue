<template>
	<view class="">
		<view class="status_bar"></view>
		<view class="navbar-container">
			<view class="left-wrap">
				<image src="../static/navbar_back_icon@2x.png" @click="onGoBack" class="navbar-back" mode=""></image>
				<text class="navbar-title">{{title}}</text>
			</view>
			<view class="right-content" @click="clickRight">
				{{sufix}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		props:{
			title: {
				type: String,
				default:''
			},
			sufix: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			onGoBack(){
				uni.navigateBack({
					delta: 1
				})
			},
			clickRight(){
				this.$emit('clickRight')
			}
		}
	}
</script>

<style lang="less">
@import url('@/styles/theme_vars.less');
.navbar-container{
	padding: 34upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.navbar-back{
		width: 22upx;
		height: 38upx;
	}
	.navbar-title{
		font-size: 37.54upx;
		color: #fff;
		margin-left: 85upx;
	}
	.left-wrap{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.right-content{
		color: #fff;
		font-size: 24upx;
	}
}
</style>
