<template>
	<view class="tabbar-page">
		<view class="route-view">
			<Index v-if="current === 0"/>
			<Exchange v-if="current === 1"/>
			<Property v-if="current === 3"/>
			<My v-if="current === 4"/>
		</view>
		<view class="tabbar-container">
			<view class="tabbar-item" v-for="item,index in items" :key="index" @click="onSwitchTab(item, index)">
				<image :src="current === index ? item.selected_icon : item.icon" class="tabbar-item-icon" mode=""></image>
				<text class="tabbar-item-text" :class="{'tabbar-item-text-active':current === index}">{{item.text}}</text>
			</view>
		</view>
		<view class="page-bg"></view>
	</view>
</template>

<script>
	import Index from '@/pages/index/index.vue';
	import Exchange from '@/pages/exchange/exchange.vue';
	import Property from '@/pages/property/property.vue';
	import My from '@/pages/my/my.vue';
	export default {
		name:"tabbar_page",
		components:{
			Index,
			Exchange,
			Property,
			My
		},
		data() {
			return {
				items: [
					{
						icon: require('../../static/tabbar_icon1@2x.png'),
						selected_icon: require('../../static/tabbar_icon1_selected@2x.png'),
						text: 'SWAPANT',
						path: '/pages/index/index'
					},
					{
						icon:  require('../../static/tabbar_icon2@2x.png'),
						selected_icon:  require('../../static/tabbar_icon2_selected@2x.png'),
						text: '兑换',
						path: '/pages/exchange/exchange'
					},
					{
						icon:  require('../../static/tabbar_icon3@2x.png'),
						selected_icon:  require('../../static/tabbar_icon3_selected@2x.png'),
						text: '量化交易',
						path: '/pages/index/index'
					},
					{
						icon:  require('../../static/tabbar_icon4@2x.png'),
						selected_icon:  require('../../static/tabbar_icon4_selected@2x.png'),
						text: '资产',
						path: '/pages/property/property'
					},
					{
						icon:  require('../../static/tabbar_icon5@2x.png'),
						selected_icon: require('../../static/tabbar_icon5_selected@2x.png'),
						text: '我的',
						path: '/pages/index/index'
					}
				],
				current: 0
			};
		},
		methods:{
			onSwitchTab(item, index){
				this.current = index;
			}
		},
		onShow() {}
	}
</script>

<style lang="less">
@import url('@/styles/theme_vars.less');
.tabbar-container{
	position: fixed;
	bottom: 26rpx;
	margin-bottom: 0;  
	margin-bottom: constant(safe-area-inset-bottom);  
	margin-bottom: env(safe-area-inset-bottom);
	left: 27rpx;
	width: 695rpx;
	background-color: @primary-color;
	height: 121rpx;
	display: flex;
	justify-content: space-between;
    align-items: center;
	border-radius: 10px;
	padding: 0 10upx;
	box-shadow: 0upx 0upx 10upx fade(#fff, 20);
	box-sizing: border-box;
	.tabbar-item{
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		&-icon{
			width: 40upx;
			height: 40upx;
			margin-bottom: 10upx;
		}
		&-text{
			font-size: 20upx;
			font-weight: bold;
			color: @color-3240A8;
		}
		&-text-active{
			color: @color-1EF0A9;
		}
	}
}
</style>
