<template>
	<view>
		<Navbar title="提币"/>
		<view class="withdraw-page">
			<view class="withdraw-form-item">
				<view class="withdraw-form-item-label">提币币种</view>
				<view class="withdraw-form-item-view" @click="onShowSelect">
					<input type="text" v-model="name" disabled class="withdraw-form-item-input" placeholder="请选择提币币种" placeholder-class="placeholder-class" />
					<image src="../../static/icon_bottom_arrow@2x.png" class="withdraw-form-item-arrow" mode=""></image>
				</view>
			</view>
			<view class="withdraw-form-item">
				<view class="withdraw-form-item-label">提币地址</view>
				<view class="withdraw-form-item-view">
					<input type="text" v-model="to" class="withdraw-form-item-input" placeholder="请输入提币地址" placeholder-class="placeholder-class"  />
					<text class="withdraw-form-item-sufix" @click="onGetClipboardData">粘贴</text>
				</view>
			</view>
			<view class="withdraw-form-item">
				<view class="withdraw-form-item-label">提币数量</view>
				<view class="withdraw-form-item-view">
					<input type="number" v-model="num" :maxlength="currentType.max_withdraw" class="withdraw-form-item-input" placeholder="请输入提币数量" placeholder-class="placeholder-class"  />
				</view>
			</view>
			<view class="withdraw-info">
				<view class="withdraw-info-item">
					<view class="withdraw-info-item-label">
						可提币数量
					</view>
					<view class="withdraw-info-item-value">
						{{currentType.max_withdraw || '--'}}
					</view>
				</view>
				<view class="withdraw-info-item">
					<view class="withdraw-info-item-label">
						手续费
					</view>
					<view class="withdraw-info-item-value">
						{{currentType.fee || '-'}}%
					</view>
				</view>
			<!-- 	<view class="withdraw-info-item">
					<view class="withdraw-info-item-label">
						预计到账
					</view>
					<view class="withdraw-info-item-value">
						0
					</view>
				</view> -->
			</view>
			<view class="primary-btn" @click="onShowPopup">
				提币
			</view>
			<view class="withdraw-tip">
				<view class="">注意事项</view>
				<view class="">1、提现将会扣除账户中的数量，系统会转化成USDT发放至收款账户中。</view>
				<view class="">2、链上提现会扣除部分手续费，以实际到账为准。</view>
				<view class="">3、每笔提币会扣除{{currentType.fee || '-'}}%的手续费。</view>

			</view>
		</view>
		<view class="page-bg"></view>
		<u-select v-model="showSelect" :list="typeOptions" @confirm="onSelectConfirm"></u-select>
		<u-popup v-model="show" mode="center" z-index="10" border-radius="14" close-icon="close" :closeable="true" width="500">
			<view class="popup-content">
				<u-input v-model="password" class="popup-content-input" type="password" placeholder="请输入交易密码" :border="true"/>
				<u-button type="primary" @click="onSubmit">确认</u-button>
			</view>
		</u-popup>
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
				showSelect: false,
				num: '',
				to: '',
				password: '',
				typeList: [],
				currentType: {},
				typeOptions: [],
				name: ''
			};
		},
		async mounted() {
			uni.showLoading();
			const res = await services.walletWithdrawInfo();
			this.typeList = Object.values(res);
			this.typeOptions = Object.values(res).map(item => ({value: item.name, label: item.name}));
			uni.hideLoading();
		},
		methods: {
			onShowPopup() {
				if (!this.name){
					return uni.showToast({
						icon: 'none',
						title: '请选择币种'
					})
				}
				if (!this.to){
					return uni.showToast({
						icon: 'none',
						title: '请输入提币地址'
					})
				}
				if (!this.num){
					return uni.showToast({
						icon: 'none',
						title: '请入提币数量'
					})
				}
				if (!/^[0-9]*[1-9][0-9]*$/.test(this.num)) {
					return uni.showToast({
						icon: 'none',
						title: '请入大于0的正整数提币数量'
					})
				}
				this.show = true;
			},
			onShowSelect(){
				this.showSelect = true
			},
			onSelectConfirm(e){
				this.name = e[0].value;
				this.currentType = this.typeList.find((item) => item.name === e[0].value);
			},
			onGetClipboardData(){
				uni.getClipboardData({
				    success: (res) => {
						this.to = res.data;
				    }
				});
			},
			async onSubmit(){
				if (!this.password) {
					return uni.showToast({
						icon: 'none',
						title: '请入交易密码'
					})
				}
				uni.showLoading()
				const res = await services.walletWithdraw({
					num: this.num,
					to: this.to,
					password: this.password,
					name: this.name
				});
				this.show = false;
				uni.showToast({
					icon: 'success',
					title: '提币成功'
				})
			}
		}
	}
</script>

<style lang="less">
@import url('@/styles/theme_vars.less');
.withdraw-page{
	padding: 30upx;
	.withdraw-form-item{
		margin-bottom: 50upx;
		&-label{
			font-size: 18upx;
			margin-bottom: 21upx;
			color: @color-91BBE3;
		}
	    &-view{
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: @color-0F1B65;
			height: 82upx;
			border-radius: 20upx;
			padding: 0 56upx 0 30upx;
		}	
		&-input{
			font-size: 30.55upx;
			color: #fff;
			flex: 1;
		}
		.placeholder-class{
			font-size: 30.55upx;
			color: @color-2133B4;
		}
		&-arrow{
			width: 42upx;
			height: 25upx;
		}
		&-sufix{
			font-size: 30.55upx;
			color: @color-1EF0A9;
		}
	}
	.withdraw-info{
		background-color: @color-0F1B65;
		border-radius: 20upx;
		height: 289upx;
		padding: 55upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		flex-direction: column;
		margin-bottom: 81upx;
		&-item{
		    width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 24upx;
			color: #fff;
		}
	}
	.withdraw-tip{
		font-size: 24upx;
		padding: 60upx 0;
		color: #fff;
	}
}
.popup-content{
	padding: 100upx 20upx 20upx 20upx;
	&-input{
		margin-bottom: 50upx;
	}
}
</style>
