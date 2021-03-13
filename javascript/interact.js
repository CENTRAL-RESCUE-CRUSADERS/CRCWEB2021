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
        </div>
		`;
	});

	const container = document.querySelector('#recent-announcements');
	container.innerHTML = output;
};

showAnnouncements();
