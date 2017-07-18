import {
	OPEN_MODAL,
	CLOSE_MODAL,
	TITLE_INPUT_VALUE_CHANGE,
	DATE_INPUT_VALUE_CHANGE,
	TIME_INPUT_VALUE_CHANGE,
	SUBMIT_FORM_FAILURE
} from "../../actions/newReminderForm";

export default (state = {
	isOpen: false,
	nameInputValue: "",
	dateInputValue: null,
	timeInputValue: null,
	errors: []
}, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return handleOpenModal(state, action);
		case CLOSE_MODAL:
			return handleCloseModal(state, action);
		case TITLE_INPUT_VALUE_CHANGE:
			return handleTitleInputValueChange(state, action);
		case DATE_INPUT_VALUE_CHANGE:
			return handleDateInputValueChange(state, action);
		case TIME_INPUT_VALUE_CHANGE:
			return handleTimeInputValueChange(state, action);
		case SUBMIT_FORM_FAILURE:
			return handleSubmitFormFailure(state, action);
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

const handleTitleInputValueChange = (state, action) => {
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

const handleSubmitFormFailure = (state, action) => {
	let errors = action.error.response.data.errors;
	let errorMap = {};
	for (let i = 0; i < errors.length; i++) {
		let error = errors[i];
		errorMap[error.param] = error;
	}
	return Object.assign({}, state, {
		errors: errorMap
	});
};
