import request from '../request/index.js';
import * as api from '../constants/api_url.js';

export async function regster(data) {
	return await request.send(api.register, 'POST',  data);
}

export async function regster(data) {
	return await request.send(api.sendcode, 'POST',  data);
}