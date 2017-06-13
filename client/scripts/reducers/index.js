import { combineReducers } from "redux";

import reminders from "./reminders";
import newReminderForm from "./newReminderForm";

export default combineReducers({
	reminders: reminders,
	newReminderForm: newReminderForm
});
