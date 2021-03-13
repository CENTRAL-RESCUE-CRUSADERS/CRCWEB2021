const URL = 'https://us-central1-crc-web-3db11.cloudfunctions.net/api';
let announcements = [];

const fetchAnnouncements = async () => {
	try {
		const resp = await fetch(URL + '/announcements', {
			method: 'GET',
		});
		const data = await resp.json();

		if (!resp.ok) {
			throw data;
		}

		return data;
	} catch (error) {
		alert('Error loading annoucements');
		console.log(error);
	}
};

const createAnnouncement = async (data) => {
	try {
		const resp = await fetch(URL + '/announcements', {
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
		console.log(error);
		throw error;
	}
};

const myForm = document.getElementById('announcements-form');

const insertAnnouncement = () => {};
myForm.addEventListener('submit', function (e) {
	e.preventDefault();
	let title = document.getElementById('title').value;
	let content = document.getElementById('content').value;

	const button = document.querySelector('form #create-ann');
	button.textContent = 'Saving...';
	const statusSpan = document.getElementById('status');
	statusSpan.innerText = '';
	createAnnouncement({ title, content })
		.then((data) => {
			console.log({ data });
			statusSpan.innerText = 'Announcement created successfully';
			statusSpan.classList.add('success-text');
			document.getElementById('resetBtn').click();
		})
		.catch((e) => {
			console.log(e);
			statusSpan.innerText = 'Could not create announcement. Try again later';
			statusSpan.classList.add('error-text');
		})
		.finally(() => {
			button.textContent = 'Create';
		});

	setTimeout(() => {
		statusSpan.innerText = '';
		statusSpan.classList.remove('success-text');
		statusSpan.classList.remove('error-text');
	}, 10000);
});

const showAnnouncements = async () => {
	const announcements = await fetchAnnouncements();
	console.log(announcements);
	let output = '';

	announcements.forEach((annoucement) => {
		output += `
		<div class="card" id="annoucement">
			<small class="title">${new Date(annoucement.createdAt).toDateString()}</small>
			<p class="title-2">${annoucement.title}</p>
			<p>${annoucement.content}</p>
		</div>
		`;
	});

	const container = document.querySelector('#recent-announcements');
	container.innerHTML = output;
};

showAnnouncements();
