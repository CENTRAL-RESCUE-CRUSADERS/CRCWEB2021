const URL = 'https://us-central1-crc-web-3db11.cloudfunctions.net/api';
const announcements = [];
let mode = 'create';
let announcementEdit; //the announcement to be edited

if (!localStorage.getItem('token')) {
	window.open('./index.html');
}
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
	if (mode === 'create') {
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
	} else if (mode === 'edit') {
		editDocument();
	}
});

const showAnnouncements = async () => {
	const newBatch = await fetchAnnouncements();
	console.log(newBatch);
	announcements.push(...newBatch);
	let output = '';

	announcements.forEach((annoucement) => {
		output += `
		<div class="card" id="annoucement">
			<small class="title">${new Date(annoucement.createdAt).toDateString()}</small>
			<p class="title-2">${annoucement.title}</p>
			<p>${annoucement.content}</p>

			<div id="actions">
				<div></div>
				<div>
					<span id="edit" data-id="${
						annoucement.id
					}" onclick="${editDocument}">Edit</span>
					<span id="delete" data-id="${annoucement.id}">Delete</span>
				</div>
			</div>
		</div>
		`;
	});

	const container = document.querySelector('#recent-announcements');
	container.innerHTML = output;
};

showAnnouncements();

const editDocument = async (data) => {
	try {
		const resp = await fetch(URL + '/announcements', {
			method: 'PUT',
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

const editBtn = document.getElementById('edit');

editBtn.addEventListener('click', function (e) {
	const id = this.dataset.id;
	const announcement = announcements.find((an) => an.id === id);
	const form = document.querySelector('#announcements-form');
	const titleInput = document.querySelector('#title');
	const contentInput = document.querySelector('#content');

	titleInput.value = announcement.title;
	contentInput.value = announcement.content;
	mode = 'edit';
	announcementEdit = announcement;
	form.scrollIntoView({ behavior: 'smooth' });
	form.querySelector('button#create-ann').textContent = 'Edit';
});
