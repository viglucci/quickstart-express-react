import ReminderApi from "../api/RemindersApi";

export const LOAD_REMINDERS          = "LOAD_REMINDERS";
export const LOAD_REMINDERS_ERROR    = "LOAD_REMINDERS_ERROR";
export const DELETE_REMINDER         = "DELETE_REMINDER";
export const DELETE_REMINDER_SUCCESS = "DELETE_REMINDER_SUCCESS";

export function loadReminders () {
	return {
		type: LOAD_REMINDERS,
		payload: ReminderApi.getReminders()
	}
}

export function deleteReminder (reminder) {
	return (dispatch) => {
		ReminderApi.deleteReminder(reminder)
		.then(() => {
			console.log(`Deleted reminder ${reminder.id}`);
			dispatch(deleteReminderSuccess(reminder));
			return;
		})
		.catch(error => {
			throw(error);
		});
	}
}

export function deleteReminderSuccess (reminder) {
	return { type: DELETE_REMINDER_SUCCESS, reminder }
}
