const form = document.getElementById('login-form');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');

const URL = 'https://us-central1-crc-web-3db11.cloudfunctions.net/api';
const login = async (data) => {
	try {
		const resp = await fetch(URL + '/users/signin', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const respData = await resp.json();
		if (!resp.ok) {
			throw respData;
		}
		return respData;
	} catch (error) {
		throw error;
	}
};
form.addEventListener('submit', function (e) {
	e.preventDefault();
	const credentials = {
		email: emailInput.value,
		password: passwordInput.value,
	};
	console.log(credentials);

	login(credentials)
		.then((data) => {
			console.log(data);
			localStorage.setItem('token', data.token);
			window.open('/admin.html');
		})
		.catch((error) => {
			try {
				if (Array.isArray(error)) {
					console.log(error);
					const container = document.querySelector('.error-container');

					let output = '';
					error.forEach((err) => {
						output += err.message;
					});
					container.innerHTML = output;
				}
			} catch (error) {
				alert('Could not log in. Try again later');
			}
		});

	setTimeout(() => {
		const container = document.querySelector('.error-container');
		container.innerHTML = '';
	}, 5000);
});
