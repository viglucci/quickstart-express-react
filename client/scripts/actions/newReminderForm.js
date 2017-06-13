import ReminderApi from "../api/RemindersApi";

export const OPEN_MODAL  = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const NAME_INPUT_VALUE_CHANGE = "NAME_INPUT_VALUE_CHANGE";
export const DATE_INPUT_VALUE_CHANGE = "DATE_INPUT_VALUE_CHANGE";
export const TIME_INPUT_VALUE_CHANGE = "TIME_INPUT_VALUE_CHANGE";

export function openModal () {
	return {
		type: OPEN_MODAL
	};
}

export function closeModal () {
	return {
		type: CLOSE_MODAL
	};
}

export function setNameInputValue (value) {
	return {
		type: NAME_INPUT_VALUE_CHANGE,
		value
	};
}

export function setDateInputValue (value) {
	return {
		type: DATE_INPUT_VALUE_CHANGE,
		value
	};
}

export function setTimeInputValue (value) {
	return {
		type: TIME_INPUT_VALUE_CHANGE,
		value
	};
}
