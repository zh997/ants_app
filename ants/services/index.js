import request from '../request/index.js';
import * as api from '../constants/api_url.js';

/** 注册 */
export async function regster(data) {
	return await request.send(api.register, 'POST',  data);
}

/** 发送验证码 */
export async function sendCode(data) {
	return await request.send(api.sendcode, 'POST',  data);
}

/** 登录 */
export async function login(data) {
	return await request.send( api.login, 'POST',  data);
}

/** 首页数据 */
export async function homeIndex(data) {
	return await request.send(api.home_index, 'POST',  data);
}

/** 我的 */
export async function mineIndex(data) {
	return await request.send(api.mine_index, 'POST',  data);
}

/** 资产 */
export async function walletIndex(data) {
	return await request.send(api.wallet_index, 'POST',  data);
}

/** 提币 */
export async function walletWithdraw(data) {
	return await request.send(api.wallet_withdraw, 'POST',  data);
}

/** 提币详情 */
export async function walletWithdrawInfo(data) {
	return await request.send(api.wallet_withdraw, 'GET',  data);
}

/** 修改登陆密码 */
export async function updatePwd(data, type) {
	let url = ''
	if (type === 1) {
		url = api.update_pwd
	} else if(type === 2) {
		url = api.update_pwd2
	}
	console.log(url, type)
	return await request.send(url, 'POST',  data);
}

/** 提币记录 */
export async function withdrawRecord(data) {
	return await request.send(api.withdraw_record, 'POST',  data);
}

/** 忘记密码 */
export async function forgetPwd(data) {
	return await request.send(api.forget_password, 'POST',  data);
}

// 邀请数据
export async function shareData(data) {
	return await request.send(api.user_myshare, 'POST',  data);
}

// 我的团队
export async function userMyTeam(data) {
	return await request.send(api.user_myteam, 'POST',  data);
}

// 邀请码
export async function userShare(data) {
	return await request.send(api.user_share, 'POST',  data);
}

// 是否已设置交易密码
export async function userSafeset(data) {
	return await request.send(api.user_safeset, 'POST',  data);
}

// 版本号
export async function appVersion(data) {
	return await request.send(api.app_version, 'POST',  data);
}

// 我的资产
export async function walletMystore(data) {
	return await request.send(api.wallet_mystore, 'POST',  data);
}

// 充值
export async function walletCoin(data) {
	return await request.send(api.wallet_coin, 'GET',  data);
}

// 充值详情
export async function walletRecharge(data) {
	return await request.send(api.wallet_recharge, 'POST',  data);
}

// 币种介绍
export async function walletCoinDetail(data) {
	return await request.send(api.wallet_coin_detail, 'POST',  data);
}

// 我的收益
export async function walletRecordData(data) {
	return await request.send(api.wallet_record_data, 'POST',  data);
}

// 充币记录
export async function walletRechargeRecord(data) {
	return await request.send(api.wallet_recharge_record, 'POST',  data);
}

// 兑换记录
export async function walletExchargeRecord(data) {
	return await request.send(api.wallet_exchange_record, 'POST',  data);
}

// 质押记录
export async function walletPledgeRecord(data) {
	return await request.send(api.wallet_pledge_record, 'POST',  data);
}

// 收益记录
export async function walletRecord(data) {
	return await request.send(api.wallet_record, 'POST',  data);
}

// 兑换
export async function exchargeIndex(data) {
	return await request.send(api.exchange_index, 'GET',  data);
}

// 提交兑换
export async function postExchargeIndex(data) {
	return await request.send(api.exchange_index, 'POST',  data);
}

// 公告列表
export async function noticeList(data) {
	return await request.send(api.notice_list, 'POST',  data);
}

// 公告列表
export async function noticeDetail(data) {
	return await request.send(api.notice_detail, 'POST',  data);
}

// 矿池列表
export async function poolIndex(data) {
	return await request.send(api.pool_index, 'POST',  data);
}

// 矿池详情
export async function poolDetail(data) {
	return await request.send(api.pool_detail, 'POST',  data);
}

// 质押页面
export async function poolPledgeview(data) {
	return await request.send(api.pool_pledgeview, 'POST',  data);
}

// 存储
export async function poolPledge(data) {
	return await request.send(api.pool_pledge, 'POST',  data);
}

// 存储页面
export async function poolPledgeView(data) {
	return await request.send(api.pool_pledge, 'GET',  data);
}

// 取回
export async function poolGetback(data) {
	return await request.send(api.pool_getback, 'POST',  data);
}

// 取回页面
export async function poolGetbackView(data) {
	return await request.send(api.pool_getback, 'GET',  data);
}

// 收取
export async function poolDraw(data) {
	return await request.send(api.pool_draw, 'POST',  data);
}

// swapait问题
export async function poolQuestion(data) {
	return await request.send(api.pool_question, 'POST',  data);
}

// 算力超市
export async function machineIndex(data) {
	return await request.send(api.machine_index, 'POST',  data);
}

// 矿机详情
export async function machineDetail(data) {
	return await request.send(api.machine_detail, 'POST',  data);
}

// 租赁协议
export async function machineRentRule(data) {
	return await request.send(api.machine_rent_rule, 'POST',  data);
}

// 矿机购买
export async function machineRentPay(data) {
	return await request.send(api.machine_rent_pay, 'POST',  data);
}
