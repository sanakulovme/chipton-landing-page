// const API_PATH = 'http://apiton.uz/api/v1/';
const API_PATH = 'https://api.chipton.uz/api/v1/';

class Auth {
  	static signUp = async (data) => {
		const url = `${API_PATH}auth/sign-up`;
		const response = await fetch(url, {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		});
		return response.json();
  	};

  	static eduVerify = async (data) => {
		const url = `${API_PATH}auth/eduVerify`;
		const response = await fetch(url, {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		});
		return response.json();
  	};

  	static eduComplate = async (data) => {
		const url = `${API_PATH}auth/eduComplate`;
		const response = await fetch(url, {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		});
		return response.json();
  	};

  	static checkResetToken = async (data) => {
		const url = `${API_PATH}auth/checkResetToken`;
		const response = await fetch(url, {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		});
		return response.json();
  	};
}

export { Auth };