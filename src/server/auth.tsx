const API_PATH = 'http://127.0.0.1:8000/api/';
// const API_PATH = 'https://chip.smarker.store/api/';

class Auth {
  	static signUp = async (data: any) => {
		const url = `${API_PATH}auth/sign-up`;
		const response = await fetch(url, {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		});
		return response.json();
  	};

  	static tokenVerify = async (data: any) => {
		const url = `${API_PATH}auth/token-verify`;
		const response = await fetch(url, {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		});
		return response.json();
  	};

  	static resetPassword = async (data: any) => {
		const url = `${API_PATH}auth/reset-password`;
		const response = await fetch(url, {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		});
		return response.json();
  	};

  	static checkResetToken = async (data: any) => {
		const url = `${API_PATH}auth/check-reset-token`;
		const response = await fetch(url, {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		});
		return response.json();
  	};

	static onboarding = async (data: any) => {
		const url = `${API_PATH}auth/onboarding`;
		const response = await fetch(url, {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		});
		return response.json();
  	};

	static newLead = async (data: any) => {
		const url = `${API_PATH}bot/new-lead`;
		const response = await fetch(url, {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		});
		return response.json();
  	};

	static plans = async () => {
		const url = `${API_PATH}plan/fetch`;
		const response = await fetch(url);
		return response.json();
  	};
}

export { Auth };