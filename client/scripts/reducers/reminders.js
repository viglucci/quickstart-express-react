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
	return Object.assign([], state, action.payload.data);
};

const handleAddReminder = (state, action) => {
	const newState = Object.assign([], state);
	newState.push(action.reminder);
	return newState;
};

const handleRemoveReminder = (state, action) => {
	const newState = Object.assign([], state);
	const indexOfDeletedItem = state.findIndex(reminder => {
		return reminder.id == action.reminder.id;
	});
	newState.splice(indexOfDeletedItem, 1);
	return newState;
};
