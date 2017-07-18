import {
	LOAD_REMINDERS,
	DELETE_REMINDER_SUCCESS,
	ADD_REMINDER,
} from '../actions/reminders';

export default (state = [], action) => {

	switch (action.type) {
		case LOAD_REMINDERS:
			return handleLoadReminders(state, action);
		case DELETE_REMINDER_SUCCESS:
			return handleRemoveReminder(state, action);
		case ADD_REMINDER:
			return handleAddReminder(state, action);
		default:
			return state;
	}
};

const handleLoadReminders = (state, action) => {
	return action.payload.data;
};

const handleAddReminder = (state, action) => {
	return state.concat(action.reminder);
};

const handleRemoveReminder = (state, action) => {
	return state.filter((reminder) => {
		return reminder.id !== action.reminder.id;
	});
};
