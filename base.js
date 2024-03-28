import axios from 'axios';

const baseURL = 'https://api.telegram.org/bot';
const token = '';

const server = axios.create({ baseURL: `${baseURL}${token}` });

class ApiHelper {
	postJsonData = (url, requestData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		return server.post(url, requestData, config);
	};
}

export const helper = new ApiHelper()
