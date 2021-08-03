<template>
	<view>
		<Navbar title="算力超市"/>
		<view class="suanli-supermarket">
			<view class="suanli-supermarket-items">
				<view class="suanli-supermarket-item">
					<view class="suanli-supermarket-item-title">
						矿池总产量
					</view>
					<view class="suanli-supermarket-item-count green-color">
						{{detail.total_output || 0.00}}
					</view>
				</view>
				<view class="suanli-supermarket-item">
					<view class="suanli-supermarket-item-title">
						昨日产量
					</view>
					<view class="suanli-supermarket-item-count green-color">
					    {{detail.yesday_output || 0.00}}
					</view>
				</view>
				<view class="suanli-supermarket-item">
					<view class="suanli-supermarket-item-title">
						昨日消耗swapait
					</view>
					<view class="suanli-supermarket-item-count green-color">
						 {{detail.yesday_money || 0.00}}
					</view>
				</view>
				<view class="suanli-supermarket-item">
					<view class="suanli-supermarket-item-title">
						有效算力单T产量
					</view>
					<view class="suanli-supermarket-item-count green-color">
						{{detail.enable_power || 0.00}}
					</view>
				</view>
			</view>
			<view class="switch-bar-container" v-if="machine_data_list && machine_data_list.length > 0">
				<view class="switch-bar-item" 
				v-for="item in machine_data_list" 
				:key="item.type_id" 
				:class="item.type_id === type_id ? 'switch-bar-selected-item' : ''"
				@click="onSwitchType(item.type_id)"
				>
					{{item.type_name || '---'}}
				</view>
			</view>
			<view class="" v-if="type_miner_list && type_miner_list.length > 0">
				<view class="card-item" v-for="item in type_miner_list" :key="item.id" @click="$onRouter(`/pages/miner_detail/miner_detail?id=${item.id}`)">
					<view class="card-item-header">
						<view class="card-item-header-title">
							<image :src="item.icon" class="card-item-header-icon" mode=""></image>
						    <text class="card-item-header-title">{{item.name || '---'}}</text>
						</view>
						<view class="card-item-header-status">
							<view class="card-item-header-status-dot" :class="item.is_buy === 1 ? '': 'blue-dot'"></view>
						    <text class="card-item-header-status">{{item.is_buy === 1 ? '出售中' : '已售罄'}}</text>
						</view>
					</view>
					<view class="card-item-label">
						<text class="card-item-label-text">今日产出（{{item.symbol}})</text>
						<text class="card-item-label-text">价格</text>
					</view>
					<view class="card-item-value">
						<text class="card-item-value-text"><text class="green-color">{{item.output || '0.00'}}</text></text>
						<text class="card-item-value-largetext green-color">{{item.money || '0.00'}}</text>
					</view>
				</view>
			</view>
			<u-empty text="数据为空" v-else mode="list"></u-empty>
			
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
				detail: {},
				type_id: 0,
				type_miner_list: [],
				machine_data_list: []
			};
		},
		async onLoad() {
			uni.showLoading();
			const response = await services.machineIndex();
			uni.hideLoading();
			this.detail = response;
			if (response.machine_data_list.length) {
				this.machine_data_list = response.machine_data_list;
				this.type_id = response.machine_data_list[0].type_id;
				this.type_miner_list = response.machine_data_list[0].data_list;
			}
		},
		methods:{
			onSwitchType(type_id) {
				const type_miner =  this.detail.machine_data_list.find(item => item.type_id === type_id );
				this.type_id = type_id;
				this.type_miner_list = type_miner.data_list;
			}
		}
	}
</script>

<style lang="less">
@import url('@/styles/theme_vars.less');
.suanli-supermarket{
	padding: 0 34upx;
	.suanli-supermarket-items{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		.suanli-supermarket-item{
			width: 326upx;
			height: 150upx;
			background-color: @color-0F1B65;
			border-radius: 20upx;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			padding: 0 49upx;
			box-sizing: border-box;
			margin-bottom: 29upx;
			&-title{
				font-size: 18upx;
				color: #fff;
				margin-bottom: 28upx;
			}
			&-count{
				font-size: 24upx;
			}
		}
	}
	.switch-bar-container{
		margin: 22upx 0 51upx 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.switch-bar-item{
			padding: 0 50upx;
			height: 49upx;
			color: @color-000444;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: @color-203098;
			font-weight: bold;
			font-size: 22upx;
			margin-right: 18upx;
			border-radius: 10upx;
		}
		.switch-bar-selected-item{
			background-color: @color-1EF0A9 ;
		}
	}
	.card-item{
		margin: 0 0 25upx 0;
		background-color: @primary-color;
		border-radius: 10upx;
		padding: 40upx;
		box-sizing: border-box;
		&-header{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 52upx;
			&-title{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 36upx;
				color: #fff;
				margin-right: 20upx;
				font-weight: bold;
			}
			&-icon{
				width: 57upx;
				height: 52upx;
				margin-right: 30upx;
				
			}
			&-status{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 15.44upx;
				color: #fff;
				&-dot{
					width: 15upx;
					height: 15upx;
					background-color: @color-04FF00;
					border-radius: 15upx;
					margin-right: 10upx;
				}
				
				.blue-dot{
					background-color:  @color-203098;
				}
			}
		}
	    &-label{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 35upx 0;
			&-text{
				font-size: 24upx;
				color: #fff;
			}
		}
		&-value{
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			
			&-text{
				font-size: 36upx;
				color: #fff;
				.green-color{
					margin-right: 10upx;
				}
			}
			&-largetext{
				font-size: 52upx;
			}
			
		}
	}
}
</style>
