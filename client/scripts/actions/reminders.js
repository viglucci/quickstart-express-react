import axios from 'axios';

export const LOAD_REMINDERS       = 'LOAD_REMINDERS';
export const LOAD_REMINDERS_ERROR = 'LOAD_REMINDERS_ERROR';
export const TOGGLE_REMINDER      = 'TOGGLE_REMINDER';

export function loadReminders() {
	return {
		type: LOAD_REMINDERS,
		payload: axios.get('/api/reminders')
	}
}

export function toggleReminder(reminder_id) {
	return {
		type: LOAD_REMINDERS,
		payload: {
			id: reminder_id
		}
	}
}
