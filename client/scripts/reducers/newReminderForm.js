import {
	OPEN_MODAL,
	CLOSE_MODAL,
	NAME_INPUT_VALUE_CHANGE,
	DATE_INPUT_VALUE_CHANGE,
	TIME_INPUT_VALUE_CHANGE,
} from "../actions/newReminderForm";

export default (state = {
	open: false,
	nameInputValue: "",
	dateInputValue: null,
	timeInputValue: null
}, action) => {

	switch (action.type) {
		case OPEN_MODAL:
			return handleOpenModal(state, action);
		case CLOSE_MODAL:
			return handleCloseModal(state, action);
		case NAME_INPUT_VALUE_CHANGE:
			return handleNameInputValueChange(state, action);
		case DATE_INPUT_VALUE_CHANGE:
			return handleDateInputValueChange(state, action);
		case TIME_INPUT_VALUE_CHANGE:
			return handleTimeInputValueChange(state, action);
		default:
			return state;
	}
};

const handleOpenModal = (state, action) => {
	const newState = Object.assign({}, state);
	newState.open = true;
	return newState;
};

const handleCloseModal = (state, action) => {
	const newState = Object.assign({}, state);
	newState.open = false;
	return newState;
};

const handleNameInputValueChange = (state, action) => {
	const newState = Object.assign({}, state);
	newState.nameInputValue = action.value;
	return newState;
};

const handleDateInputValueChange = (state, action) => {
	const newState = Object.assign({}, state);
	newState.dateInputValue = action.value;
	return newState;
};

const handleTimeInputValueChange = (state, action) => {
	const newState = Object.assign({}, state);
	newState.timeInputValue = action.value;
	return newState;
};
