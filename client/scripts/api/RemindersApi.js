import axios from "axios";

class RemindersApi {

	static getReminders () {
		return axios.get("/api/reminders")
	}

	static addReminder (reminder) {
		return axios.post("/api/reminders/", reminder);
	}

	static deleteReminder (reminder) {
		return axios.delete("/api/reminders/" + reminder.id);
	}

}

export default RemindersApi;
