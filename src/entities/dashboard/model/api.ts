export const fetchRecentStreamsAPI = async () => {
	try {
		const response = await fetch('/songs.json');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching recent streams:', error);
	}
};
