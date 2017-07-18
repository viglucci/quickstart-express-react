import ReminderApi from "../api/RemindersApi";

export const LOAD_REMINDERS          = "LOAD_REMINDERS";
export const LOAD_REMINDERS_ERROR    = "LOAD_REMINDERS_ERROR";
export const DELETE_REMINDER         = "DELETE_REMINDER";
export const DELETE_REMINDER_SUCCESS = "DELETE_REMINDER_SUCCESS";
export const ADD_REMINDER            = "ADD_REMINDER";
export const CREATE_REMINDER_FAILURE = "CREATE_REMINDER_FAILURE";

export function loadReminders () {
	return {
		type: LOAD_REMINDERS,
		payload: ReminderApi.get()
	};
}

export function addReminder (reminder) {
	return {
		type: ADD_REMINDER,
		reminder
	};
}

export function deleteReminder (reminder) {
	return (dispatch) => {
		ReminderApi.delete(reminder)
		.then(() => {
			dispatch(deleteReminderSuccess(reminder));
		})
		.catch(error => {
			throw(error);
		});
	};
}

export function deleteReminderSuccess (reminder) {
	return {
		type: DELETE_REMINDER_SUCCESS,
		reminder
	};
}
