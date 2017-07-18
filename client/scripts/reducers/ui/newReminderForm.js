import {
	OPEN_MODAL,
	CLOSE_MODAL,
	NAME_INPUT_VALUE_CHANGE,
	DATE_INPUT_VALUE_CHANGE,
	TIME_INPUT_VALUE_CHANGE,
} from "../../actions/newReminderForm";

export default (state = {
	isOpen: false,
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
	return Object.assign({}, state, {
		isOpen: true
	});
};

const handleCloseModal = (state, action) => {
	return Object.assign({}, state, {
		isOpen: false
	});
};

const handleNameInputValueChange = (state, action) => {
	return Object.assign({}, state, {
		nameInputValue: action.value
	});
};

const handleDateInputValueChange = (state, action) => {
	return Object.assign({}, state, {
		dateInputValue: action.value
	});
};

const handleTimeInputValueChange = (state, action) => {
	return Object.assign({}, state, {
		timeInputValue: action.value
	});
};
