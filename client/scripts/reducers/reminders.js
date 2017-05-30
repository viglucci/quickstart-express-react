import {
	LOAD_REMINDERS,
	DELETE_REMINDER_SUCCESS,
	ADD_REMINDER_SUCCESS
} from '../actions/reminders';

export default (state = [], action) => {

	switch (action.type) {
		case LOAD_REMINDERS:
			return action.payload.data;
		case DELETE_REMINDER_SUCCESS:
			return handleDeleteReminderSuccess(state, action);
		case ADD_REMINDER_SUCCESS:
			return handleAddReminderSuccess(state, action);
		default:
			return state;
	}
};

const handleDeleteReminderSuccess = (state, action) => {
	const newState = Object.assign([], state);
	const indexOfDeletedItem = state.findIndex(reminder => {
		return reminder.id == action.reminder.id;
	});
	newState.splice(indexOfDeletedItem, 1);
	return newState;
};

const handleAddReminderSuccess = (state, action) => {
	const newState = Object.assign([], state);
	newState.push(action.reminder);
	return newState;
};
