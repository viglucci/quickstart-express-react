import axios from "axios";

class RemindersApi {

	static get () {
		return axios.get("/api/reminders")
	}

	static create (reminder) {
		return axios.post("/api/reminders/", reminder).then(res => res.data);
	}

	static delete (reminder) {
		return axios.delete("/api/reminders/" + reminder.id);
	}
}

export default RemindersApi;
