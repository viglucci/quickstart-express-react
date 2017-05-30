import ReminderApi from "../api/RemindersApi";

export const LOAD_REMINDERS          = "LOAD_REMINDERS";
export const LOAD_REMINDERS_ERROR    = "LOAD_REMINDERS_ERROR";
export const DELETE_REMINDER         = "DELETE_REMINDER";
export const DELETE_REMINDER_SUCCESS = "DELETE_REMINDER_SUCCESS";
export const ADD_REMINDER_SUCCESS    = "ADD_REMINDER_SUCCESS";

export function loadReminders () {
	return {
		type: LOAD_REMINDERS,
		payload: ReminderApi.getReminders()
	};
}

export function deleteReminder (reminder) {
	return (dispatch) => {
		ReminderApi.deleteReminder(reminder)
		.then(() => {
			console.log(`Deleted reminder ${reminder.id}`);
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

export function addReminder (reminder) {
	return (dispatch) => {
		ReminderApi.addReminder(reminder)
		.then((newReminder) => {
			console.log(`Added reminder ${reminder.id}`);
			dispatch(addReminderSuccess(newReminder));
		})
		.catch(error => {
			throw(error);
		});
	};
}

export function addReminderSuccess (reminder) {
	return {
		type: ADD_REMINDER_SUCCESS,
		reminder
	};
}
