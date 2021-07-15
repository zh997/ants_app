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
	return await request.send(api.login, 'POST',  data);
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

