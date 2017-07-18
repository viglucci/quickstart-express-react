import ReminderApi from "../api/RemindersApi";
import { addReminder } from "./reminders";

export const OPEN_MODAL  = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TITLE_INPUT_VALUE_CHANGE = "TITLE_INPUT_VALUE_CHANGE";
export const DATE_INPUT_VALUE_CHANGE = "DATE_INPUT_VALUE_CHANGE";
export const TIME_INPUT_VALUE_CHANGE = "TIME_INPUT_VALUE_CHANGE";
export const SUBMIT_FORM_FAILURE = "SUBMIT_FORM_FAILURE";

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

export function setTitleInputValue (value) {
	return {
		type: TITLE_INPUT_VALUE_CHANGE,
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

export function submitForm (data) {
	return (dispatch) => {
		ReminderApi.create(data)
		.then((newReminder) => {
			dispatch(addReminder(newReminder));
			dispatch(closeModal());
		})
		.catch((error) => {
			dispatch({
				type: SUBMIT_FORM_FAILURE,
				error
			});
		});
	};
}
